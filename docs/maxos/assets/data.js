/* MAX OS 데이터 어댑터
 * 원본: docs/dashboard-data.json (GitHub Actions가 매일 07:00 KST 갱신)
 *  - projects  ← Notion 2026 Project DB
 *  - resources ← Google Sheets MAX_2026 > 01. Time-Log (최근 5개 기록일 기준 가동률)
 * 원칙: 시안 숫자를 하드코딩하지 않는다. 연결 안 된 개체(Task·Gate·배정 등)는
 *       화면에서 `연결 안 됨` 또는 `샘플 데이터`로 명시한다.
 */
(function () {
  var CONFIG = {
    dataUrl: '../dashboard-data.json',
    /* 아래 판정값은 운영 책임자 승인 전 임시 기준 (HUMAN_DECISION_REQUIRED)
     * - idleMax: 이하이면 "여유 있음", overMin: 초과하면 "많이 배정됨"
     * - 가동률 산식도 임시: 최근 5개 기록일 실제시간 ÷ (기록일수 × 8h) */
    idleMax: 50,
    overMin: 100,
    provisional: true,
    dayHours: 8
  };

  /* Notion 상태 enum(내부 유지) → 화면 표시명 */
  var STATUS_LABEL = {
    '진행중': '진행 중이에요',
    '거의 완료': '거의 다 됐어요',
    '고정운영': '늘 하는 일이에요',
    '진행예정': '곧 시작해요',
    '협의중': '조율하고 있어요',
    '검토중': '살펴보고 있어요',
    '홀딩': '잠시 멈췄어요',
    '관심': '관심 두고 있어요'
  };
  var GROUP_META = {
    active:   { label: '진행 중이에요',   color: 'var(--green)' },
    almost:   { label: '거의 다 됐어요',  color: 'var(--green)' },
    fixed:    { label: '늘 하는 일이에요', color: 'var(--blue)' },
    upcoming: { label: '곧 시작해요',     color: 'var(--lavender)' },
    discuss:  { label: '조율하고 있어요', color: 'var(--yellow)' },
    review:   { label: '살펴보고 있어요', color: 'var(--yellow)' },
    hold:     { label: '잠시 멈췄어요',   color: 'var(--muted2)' },
    interest: { label: '관심 두고 있어요', color: 'var(--muted2)' }
  };
  var GROUP_ORDER = ['active', 'almost', 'fixed', 'upcoming', 'discuss', 'review', 'hold', 'interest'];

  function parseDate(s) {
    if (!s) return null;
    var d = new Date(s + 'T00:00:00');
    return isNaN(d) ? null : d;
  }
  function today0() { var d = new Date(); d.setHours(0, 0, 0, 0); return d; }
  function days(a, b) { return Math.round((b - a) / 86400000); }

  function fmtDate(s) {
    var d = parseDate(s);
    if (!d) return '—';
    return (d.getMonth() + 1) + '월 ' + d.getDate() + '일';
  }
  function fmtDateTime(iso) {
    if (!iso) return '—';
    var d = new Date(iso);
    if (isNaN(d)) return '—';
    return (d.getMonth() + 1) + '월 ' + d.getDate() + '일 ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
  }

  /* 프로젝트 정규화: D-day·지연 여부 계산 */
  function normalizeProjects(data) {
    var t = today0();
    return (data.projects || []).map(function (p) {
      var end = parseDate(p.endDate);
      var start = parseDate(p.startDate);
      var dday = end ? days(t, end) : null;
      var working = p.group === 'active' || p.group === 'fixed' || p.group === 'almost';
      var dateConflict = !!(start && end && end < start); /* 원본 필드 역전 — 화면에서 "일정 확인 필요" */
      return {
        dateConflict: dateConflict,
        title: (p.title || '').trim() || '(제목 없음)',
        group: p.group, status: p.status,
        statusLabel: STATUS_LABEL[p.status] || p.status,
        categories: p.categories || [],
        difficulty: p.difficulty,
        startDate: p.startDate, endDate: p.endDate,
        start: start, end: end, dday: dday,
        notionUrl: p.notionUrl,
        working: working,
        dueSoon: !dateConflict && working && dday !== null && dday >= 0 && dday <= 7,
        delayed: !dateConflict && working && dday !== null && dday < 0   /* 임시 기준: 마감일 경과 */
      };
    });
  }

  /* 홈·운영 요약 KPI */
  function computeKpis(data) {
    var ps = normalizeProjects(data);
    return {
      active: ps.filter(function (p) { return p.working; }).length,
      dueSoon: ps.filter(function (p) { return p.dueSoon; }).length,
      delayed: ps.filter(function (p) { return p.delayed; }).length,
      upcoming: ps.filter(function (p) { return p.group === 'upcoming'; }).length,
      gates: null /* Gate 데이터 소스 연결 안 됨 */
    };
  }

  /* 리소스 분류 — 임시 기준(CONFIG) 적용 */
  function computeResources(data) {
    var rs = (data.resources || []).map(function (r) {
      var u = r.utilRate;
      var st = (u === null || u === undefined) ? 'unlogged'
        : u > CONFIG.overMin ? 'over'
        : u > CONFIG.idleMax ? 'ok'
        : 'idle';
      return { name: r.name, utilRate: u, lastLog: r.lastLog || null, state: st };
    });
    var logged = rs.filter(function (r) { return r.utilRate !== null && r.utilRate !== undefined; });
    var avg = logged.length ? Math.round(logged.reduce(function (s, r) { return s + r.utilRate; }, 0) / logged.length) : null;
    return {
      list: rs,
      activeCount: rs.filter(function (r) { return r.state === 'ok' || r.state === 'over'; }).length,
      idleCount: rs.filter(function (r) { return r.state === 'idle'; }).length,
      overCount: rs.filter(function (r) { return r.state === 'over'; }).length,
      unloggedCount: rs.filter(function (r) { return r.state === 'unlogged'; }).length,
      avgUtil: avg
    };
  }

  /* 데이터 신선도: 2일 이내 정상 / 7일 이내 오래됨 / 초과 멈춤 */
  function freshness(data) {
    var iso = data.projectsFetchedAt || data.fetchedAt;
    if (!iso) return { state: 'err', text: '데이터를 불러오지 못했어요' };
    var age = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
    if (data.projectsError && data.resourcesError) {
      return { state: 'err', text: '최신 정보를 불러오지 못했어요 · 마지막 정상 데이터는 ' + fmtDateTime(iso) + ' 기준이에요', age: age, syncedAt: iso };
    }
    if (age <= 2) return { state: 'ok', text: fmtDateTime(iso) + '에 불러온 정보예요', age: age, syncedAt: iso };
    if (age <= 7) return { state: 'stale', text: '조금 오래된 정보예요 · ' + fmtDateTime(iso) + ' 기준', age: age, syncedAt: iso };
    return { state: 'err', text: '갱신이 멈춰 있어요 · ' + fmtDateTime(iso) + ' 기준', age: age, syncedAt: iso };
  }

  /* fetch — 실패해도 화면이 죽지 않게 null 반환 */
  function fetchData() {
    return fetch(CONFIG.dataUrl + '?t=' + Date.now())
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .catch(function () { return null; });
  }

  window.MAXOS = {
    config: CONFIG,
    statusLabel: STATUS_LABEL,
    groupMeta: GROUP_META,
    groupOrder: GROUP_ORDER,
    fetchData: fetchData,
    normalizeProjects: normalizeProjects,
    computeKpis: computeKpis,
    computeResources: computeResources,
    freshness: freshness,
    fmtDate: fmtDate,
    fmtDateTime: fmtDateTime,
    parseDate: parseDate,
    today0: today0
  };
})();
