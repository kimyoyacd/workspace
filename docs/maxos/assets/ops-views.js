/* 홈·운영 현황이 함께 쓰는 뷰 렌더러
 * data.js가 정규화한 결과만 받아 그린다. 여기서 숫자를 만들지 않는다.
 */
(function () {
  'use strict';
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  var DIFF_LABEL = { H: '상 · H', M: '중 · M', L: '하 · L' };
  var STATE_META = {
    ok: { label: '적정이에요', cls: 'green', color: 'var(--green)' },
    idle: { label: '여유 있어요', cls: 'purple', color: 'var(--lavender)' },
    over: { label: '많이 배정됐어요', cls: 'orange', color: 'var(--orange)' },
    unlogged: { label: '기록이 없어요', cls: '', color: '#c9c7c0' }
  };
  var TEAM = [
    { name: '김효정', role: '실장 · CD', team: 'CD', skills: ['CD', 'PM', 'Strategy', 'Business'] },
    { name: '김창환', role: 'VM팀장 · 비주얼 리드', team: 'VM', skills: ['Motion', 'Branding', 'Direction'] },
    { name: '강민우', role: 'VM파트장', team: 'VM', skills: ['Motion', 'UI', 'AE'] },
    { name: '강승일', role: 'VM전임', team: 'VM', skills: ['Motion', 'Illustration', 'Design'] },
    { name: '문경선', role: 'VM전임', team: 'VM', skills: ['Motion', 'Photoshop', 'Design'] },
    { name: '이지현', role: 'VM전임', team: 'VM', skills: ['UI', 'Design', 'Figma'] },
    { name: '전한아', role: 'VX파트장', team: 'VX', skills: ['UX', 'Figma', 'Prototyping'] },
    { name: '김지원', role: 'VX전임', team: 'VX', skills: ['Front-End', 'React', 'Figma'] },
    { name: '김준환', role: 'VX선임', team: 'VX', skills: ['UX', 'Figma', 'Design'] }
  ];
  var TEAM_LABEL = { CD: '실장 · 크리에이티브 디렉션', VM: 'VM — 비주얼·모션', VX: 'VX — 프로덕트·경험' };

  function statusTag(p) {
    var m = MAXOS.groupMeta[p.group] || { label: p.status, color: 'var(--muted2)' };
    return '<span class="tag" title="원본 상태: ' + esc(p.status) + '"><span class="sdot" style="background:' + m.color + '"></span>' + esc(m.label) + '</span>';
  }
  function catLabel(c) { return /^[a-z]/.test(c) ? c.charAt(0).toUpperCase() + c.slice(1) : c; }
  function ddayText(p) {
    if (p.dateConflict) return '<span class="tag yellow" title="마감일(' + esc(p.endDate) + ')이 시작일(' + esc(p.startDate) + ')보다 앞서 있어요. Notion에서 날짜를 확인해 주세요."><span class="sdot" style="background:var(--yellow)"></span>일정 확인 필요</span>';
    if (p.dday === null) return '<span style="color:var(--muted2)">—</span>';
    if (p.dday < 0) return '<b class="mono" style="color:#d9471b">' + Math.abs(p.dday) + '일 지남</b>';
    if (p.dday === 0) return '<b class="mono" style="color:#d9471b">오늘 마감</b>';
    return '<b class="mono">D-' + p.dday + '</b>';
  }

  /* ── 카드 보기 ── */
  function renderBoard(el, list) {
    var cols = '';
    MAXOS.groupOrder.forEach(function (g) {
      var items = list.filter(function (p) { return p.group === g; });
      if (!items.length) return;
      var m = MAXOS.groupMeta[g];
      cols += '<div class="kanban-col"><h4><span class="sdot" style="background:' + m.color + ';width:8px;height:8px;border-radius:50%;display:inline-block"></span>' + esc(m.label) + '<span class="cnt">' + items.length + '</span></h4>' +
        items.map(function (p) {
          return '<a class="kcard"' + (p.notionUrl ? ' href="' + esc(p.notionUrl) + '" target="_blank" rel="noopener"' : '') + '><b>' + esc(p.title) + '</b><span class="meta">' +
            (p.endDate ? '<span class="mono">~' + MAXOS.fmtDate(p.endDate) + '</span>' : '') +
            p.categories.map(function (c) { return '<span>' + esc(catLabel(c)) + '</span>'; }).join('') +
            (p.delayed ? '<span style="color:#d9471b;font-weight:700">마감 지남</span>' : '') +
            '</span></a>';
        }).join('') + '</div>';
    });
    el.innerHTML = cols || '<div class="empty-big" style="grid-column:1/-1"><b>조건에 맞는 일이 없어요</b></div>';
  }

  /* ── 일정(간트) ── */
  var PXD = { day: 26, week: 9, month: 3 };
  function renderGantt(el, list, zoom) {
    var withDates = list.filter(function (p) { return p.start && p.end && !p.dateConflict; });
    if (!withDates.length) {
      el.style.width = '';
      el.innerHTML = '<div class="empty-big"><b>일정이 입력된 일이 없어요</b><p>시작일과 마감일이 있는 프로젝트만 일정으로 볼 수 있어요.</p></div>';
      return;
    }
    var t = MAXOS.today0();
    var min = new Date(Math.min.apply(null, withDates.map(function (p) { return p.start; })));
    var max = new Date(Math.max.apply(null, withDates.map(function (p) { return p.end; })));
    var lo = new Date(Math.max(min, t.getTime() - 45 * 86400000));
    var hi = new Date(Math.min(max.getTime() + 14 * 86400000, t.getTime() + 170 * 86400000));
    if (hi <= lo) hi = new Date(lo.getTime() + 30 * 86400000);
    var pxd = PXD[zoom] || PXD.week;
    var days = Math.round((hi - lo) / 86400000);
    var W = 220 + days * pxd;
    function x(d) { return 220 + Math.max(0, Math.round((d - lo) / 86400000)) * pxd; }

    var ticks = '';
    var cur = new Date(lo);
    cur.setDate(1); if (cur < lo) cur.setMonth(cur.getMonth() + 1);
    while (cur <= hi) {
      ticks += '<div class="g-tick" style="left:' + x(cur) + 'px">' + (cur.getMonth() + 1) + '월</div>';
      cur = new Date(cur.getFullYear(), cur.getMonth() + 1, 1);
    }
    if (zoom === 'day') {
      var wk = new Date(lo); wk.setDate(wk.getDate() + ((8 - wk.getDay()) % 7));
      while (wk <= hi) {
        ticks += '<div class="g-tick" style="left:' + x(wk) + 'px;border-left-style:dashed;color:#c0beb6">' + (wk.getMonth() + 1) + '/' + wk.getDate() + '</div>';
        wk = new Date(wk.getTime() + 7 * 86400000);
      }
    }

    var rows = '';
    withDates.slice().sort(function (a, b) { return a.start - b.start; }).forEach(function (p) {
      var bx = x(new Date(Math.max(p.start, lo)));
      var bw = Math.max(pxd, x(new Date(Math.min(p.end, hi))) - bx);
      var color = p.delayed ? 'rgba(255,107,61,.75)' : p.group === 'upcoming' ? 'rgba(139,124,246,.6)' : 'rgba(40,199,101,.65)';
      rows += '<div class="g-row"><div class="g-label" title="' + esc(p.title) + '"><span>' + esc(p.title) + '</span><small>' + MAXOS.fmtDate(p.startDate) + ' ~ ' + MAXOS.fmtDate(p.endDate) + '</small></div>' +
        '<div class="g-bar" style="left:' + bx + 'px;width:' + bw + 'px" title="' + esc(p.title) + '"><i style="background:' + color + ';width:100%"></i></div></div>';
    });

    el.style.width = W + 'px';
    el.innerHTML = '<div class="g-head" style="width:' + W + 'px">' + ticks + '</div>' + rows +
      (t >= lo && t <= hi ? '<div class="g-today" style="left:' + x(t) + 'px"></div>' : '');
  }

  /* ── 구성원 배정률 ── */
  function renderCapacityRows(el, res, filter) {
    if (!res) { el.innerHTML = '<div class="empty-big"><b>정보를 불러오지 못했어요</b></div>'; return; }
    var list = res.list.filter(function (r) { return !filter || r.state === filter; });
    el.innerHTML = list.length ? list.map(function (r) {
      var m = STATE_META[r.state];
      var w = r.utilRate === null ? 0 : Math.min(r.utilRate, 130) / 130 * 100;
      return '<div class="res-row">' +
        '<div class="res-name"><b>' + esc(r.name) + '</b><small>' + (r.lastLog ? '마지막 기록 ' + MAXOS.fmtDate(r.lastLog) : '업무 시간이 아직 기록되지 않았어요') + '</small></div>' +
        '<div class="hbar" style="height:10px"><i style="width:' + w + '%;background:' + m.color + '"></i></div>' +
        '<div class="res-meta"><span class="pct">' + (r.utilRate === null ? '—' : r.utilRate + '%') + '</span><span class="tag ' + m.cls + '"><span class="sdot" style="background:' + m.color + '"></span>' + m.label + '</span></div>' +
        '</div>';
    }).join('') : '<div class="empty-big"><b>조건에 맞는 사람이 없어요</b></div>';
  }

  function renderCapacityWarns(el, res) {
    if (!res) return;
    el.innerHTML = res.list.filter(function (r) { return r.state === 'over'; }).map(function (r) {
      return '<div class="warn-card">⚠️ <b>' + esc(r.name) + '</b> 님의 최근 업무 배정률이 <b class="mono">' + r.utilRate + '%</b>예요. 이대로 진행하면 마감이 겹치거나 품질이 흔들릴 수 있어요. 업무 배정을 조정해 주세요.</div>';
    }).join('');
  }

  /* ── 우리 실 — 조직도. 배정률은 위 「사람·업무 배정」에 이미 있으므로 여기선 안 쓴다 ── */
  function renderOrg(el) {
    var lead = TEAM.filter(function (m) { return m.team === 'CD'; });
    var cols = ['VM', 'VX'].map(function (tm) {
      var members = TEAM.filter(function (m) { return m.team === tm; });
      return '<div class="org-col">' +
        '<div class="org-team"><b>' + esc(TEAM_LABEL[tm]) + '</b><span>' + members.length + '명</span></div>' +
        '<div class="org-people">' + members.map(function (m) {
          return '<div class="org-p"><b>' + esc(m.name) + '</b><small>' + esc(m.role) + '</small>' +
            '<div class="org-sk">' + m.skills.map(function (sk) { return '<span>' + esc(sk) + '</span>'; }).join('') + '</div></div>';
        }).join('') + '</div></div>';
    }).join('');

    el.innerHTML = '<div class="org">' +
      '<div class="org-top">' + lead.map(function (m) {
        return '<div class="org-lead"><b>' + esc(m.name) + '</b><small>' + esc(m.role) + '</small></div>';
      }).join('') + '</div>' +
      '<div class="org-stem" aria-hidden="true"></div>' +
      '<div class="org-cols">' + cols + '</div>' +
      '</div>';
  }

  /* ── 진행 단계 세그먼트 + 업무 유형 구성 ── */
  function renderSegments(barEl, legendEl, projects) {
    if (!projects.length) { barEl.innerHTML = ''; legendEl.innerHTML = ''; return; }
    var counts = {}, total = projects.length, bar = '', legend = '';
    projects.forEach(function (p) { counts[p.group] = (counts[p.group] || 0) + 1; });
    MAXOS.groupOrder.forEach(function (g) {
      if (!counts[g]) return;
      var m = MAXOS.groupMeta[g];
      bar += '<i style="width:' + (counts[g] / total * 100) + '%;background:' + m.color + '" title="' + esc(m.label) + ' ' + counts[g] + '건"></i>';
      legend += '<span><span class="sdot" style="background:' + m.color + '"></span>' + esc(m.label) + ' <b class="mono">' + counts[g] + '</b></span>';
    });
    barEl.innerHTML = bar;
    legendEl.innerHTML = legend;
  }

  function renderCategories(el, projects) {
    if (!projects.length) { el.innerHTML = ''; return; }
    var cats = {};
    projects.forEach(function (p) { (p.categories.length ? p.categories : ['미분류']).forEach(function (c) { cats[catLabel(c)] = (cats[catLabel(c)] || 0) + 1; }); });
    var max = Math.max.apply(null, Object.keys(cats).map(function (c) { return cats[c]; }));
    var colors = ['var(--lavender)', 'var(--blue)', 'var(--green)', 'var(--yellow)', 'var(--orange)'];
    el.innerHTML = Object.keys(cats).sort(function (a, b) { return cats[b] - cats[a]; }).map(function (c, i) {
      return '<div style="display:grid;grid-template-columns:90px 1fr 30px;gap:10px;align-items:center;margin-bottom:8px;font-size:12px">' +
        '<span>' + esc(c) + '</span>' +
        '<div class="hbar"><i style="width:' + (cats[c] / max * 100) + '%;background:' + colors[i % colors.length] + '"></i></div>' +
        '<b class="mono" style="text-align:right">' + cats[c] + '</b></div>';
    }).join('');
  }

  /* ── 동시에 돌아가는 일 곡선 ──
   * 주차별로 "그 주에 시작일~마감일 구간이 걸쳐 있는 프로젝트 수"를 센다.
   * 시간 기록 시트에 일별 시계열이 없어서, 그릴 수 있는 실데이터는 이 겹침 뿐이다. */
  function loadCurve(projects, weeksBack, weeksFwd) {
    var t = MAXOS.today0();
    var monday = new Date(t); monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
    var pts = [];
    for (var i = -weeksBack; i <= weeksFwd; i++) {
      var s = new Date(monday.getTime() + i * 7 * 86400000);
      var e = new Date(s.getTime() + 6 * 86400000);
      var n = projects.filter(function (p) {
        if (!p.start || !p.end || p.dateConflict) return false;
        return p.start <= e && p.end >= s;
      }).length;
      pts.push({ week: s, n: n, isNow: i === 0 });
    }
    return pts;
  }

  /* 부드러운 곡선 SVG. 값이 전부 0이면 null을 돌려 호출부가 빈 상태를 그리게 한다 */
  function sparkline(pts, w, h) {
    if (!pts.length) return null;
    var max = Math.max.apply(null, pts.map(function (p) { return p.n; }));
    if (max === 0) return null;
    var pad = 10;
    var stepX = (w - pad * 2) / (pts.length - 1 || 1);
    var xy = pts.map(function (p, i) {
      return [pad + i * stepX, h - pad - (p.n / max) * (h - pad * 2)];
    });
    var d = 'M' + xy[0][0].toFixed(1) + ',' + xy[0][1].toFixed(1);
    for (var i = 1; i < xy.length; i++) {
      var p0 = xy[i - 1], p1 = xy[i], cx = (p0[0] + p1[0]) / 2;
      d += ' C' + cx.toFixed(1) + ',' + p0[1].toFixed(1) + ' ' + cx.toFixed(1) + ',' + p1[1].toFixed(1) + ' ' + p1[0].toFixed(1) + ',' + p1[1].toFixed(1);
    }
    var area = d + ' L' + xy[xy.length - 1][0].toFixed(1) + ',' + (h - pad) + ' L' + xy[0][0].toFixed(1) + ',' + (h - pad) + ' Z';
    var nowIdx = -1;
    pts.forEach(function (p, i) { if (p.isNow) nowIdx = i; });
    var dots = '';
    if (nowIdx >= 0) {
      dots = '<circle cx="' + xy[nowIdx][0].toFixed(1) + '" cy="' + xy[nowIdx][1].toFixed(1) + '" r="5.5" fill="var(--orange)" stroke="#fff" stroke-width="2.5" />';
    }
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" width="100%" height="' + h + '" preserveAspectRatio="none" role="img" aria-label="주차별 동시에 돌아가는 일 수, 최대 ' + max + '건">' +
      '<defs><linearGradient id="sparkfill" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="rgba(139,124,246,.22)" /><stop offset="100%" stop-color="rgba(139,124,246,0)" /></linearGradient></defs>' +
      '<path d="' + area + '" fill="url(#sparkfill)" />' +
      '<path d="' + d + '" fill="none" stroke="var(--lavender)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />' +
      dots + '</svg>';
  }

  window.OPSVIEW = {
    esc: esc,
    DIFF_LABEL: DIFF_LABEL,
    STATE_META: STATE_META,
    TEAM: TEAM,
    TEAM_LABEL: TEAM_LABEL,
    statusTag: statusTag,
    catLabel: catLabel,
    ddayText: ddayText,
    renderBoard: renderBoard,
    renderGantt: renderGantt,
    renderCapacityRows: renderCapacityRows,
    renderCapacityWarns: renderCapacityWarns,
    renderOrg: renderOrg,
    renderSegments: renderSegments,
    renderCategories: renderCategories,
    loadCurve: loadCurve,
    sparkline: sparkline
  };
})();
