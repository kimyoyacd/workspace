// MAX실 OS Dashboard v7 — 데이터 수집 스크립트
// GitHub Actions에서 주기적으로 실행되어 .claude/projects/dashboard-data.json 을 생성/갱신한다.
// Node 20+ (전역 fetch 사용). 외부 npm 패키지 불필요.

const fs = require('fs');
const path = require('path');

const DB_PROJECTS   = '2e79ff44-ed51-817a-9138-eac149de9f21'; // 2026 Project DB
const SHEETS_ID      = '1YZq8hWy_ZWZqfv_DUQzUheMcUJspU1ZUCSFA_EGizn0';
const UTIL_TAB       = '📊 월별 투입 현황';
const OUTPUT_PATH    = path.join(__dirname, '..', '.claude', 'projects', 'dashboard-data.json');

const NOTION_TOKEN = process.env.NOTION_TOKEN;
if (!NOTION_TOKEN) {
  console.error('NOTION_TOKEN 환경변수가 없습니다 (GitHub Actions Secrets 확인)');
  process.exit(1);
}

// ── 유틸 ──────────────────────────────────────────────────
function pad2(n) { return n < 10 ? '0' + n : String(n); }

// 아주 단순한 CSV 파서 (따옴표로 감싸진 필드 안의 콤마/개행 처리)
function parseCsv(text) {
  const rows = [];
  let row = [], field = '', inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else { inQuotes = false; }
      } else {
        field += c;
      }
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\r') { /* skip */ }
      else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
      else field += c;
    }
  }
  if (field !== '' || row.length) { row.push(field); rows.push(row); }
  return rows;
}

// ── Notion 프로젝트 조회 ──────────────────────────────────
async function getProjects() {
  const ACTIVE = ['진행중','거의 완료','진행예정','협의중','검토중','홀딩','고정운영','관심'];
  const STATUS_GROUP = {
    '진행중':'active', '거의 완료':'almost', '고정운영':'fixed',
    '진행예정':'upcoming', '협의중':'discuss', '검토중':'review',
    '홀딩':'hold', '관심':'interest'
  };

  const filter = { or: ACTIVE.map(s => ({ property: '상태', select: { equals: s } })) };
  const sorts  = [
    { property: '상태', direction: 'ascending' },
    { property: '날짜', direction: 'descending' }
  ];

  let all = [], cursor = null, more = true;
  while (more) {
    const body = { page_size: 100, filter, sorts };
    if (cursor) body.start_cursor = cursor;

    const resp = await fetch(`https://api.notion.com/v1/databases/${DB_PROJECTS}/query`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + NOTION_TOKEN,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28'
      },
      body: JSON.stringify(body)
    });
    if (!resp.ok) throw new Error('Notion API ' + resp.status + ': ' + (await resp.text()).slice(0, 300));

    const data = await resp.json();
    all = all.concat(data.results || []);
    more = !!(data.has_more && data.next_cursor);
    if (more) cursor = data.next_cursor;
  }

  return all.map(page => {
    const p = page.properties;
    const titleArr = ((p['업무 명'] || p['이름'] || {}).title || []);
    const title    = titleArr.length ? titleArr[0].plain_text : '(제목 없음)';
    const status   = (p['상태'] || {}).select ? p['상태'].select.name : '';
    const diff     = (p['난이도'] || {}).select ? p['난이도'].select.name : '';
    const cats     = ((p['카테고리'] || {}).multi_select || []).map(c => c.name);
    const start    = p['날짜'] && p['날짜'].date ? p['날짜'].date.start : '';
    const end      = p['종료 날짜'] && p['종료 날짜'].date ? p['종료 날짜'].date.start : '';
    const progress = p['진행률(수식)'] && p['진행률(수식)'].formula ? (p['진행률(수식)'].formula.number || 0) : 0;

    return {
      id: page.id,
      title,
      status,
      group: STATUS_GROUP[status] || 'other',
      difficulty: diff,
      categories: cats,
      startDate: start,
      endDate: end,
      progress: Math.round(progress * 100),
      notionUrl: page.url || ''
    };
  });
}

// ── 구글 시트 가동률 조회 (공개 CSV, 인증 불필요) ─────────
async function getResources() {
  const url = 'https://docs.google.com/spreadsheets/d/' + SHEETS_ID +
              '/gviz/tq?tqx=out:csv&sheet=' + encodeURIComponent(UTIL_TAB);
  const resp = await fetch(url);
  if (!resp.ok) throw new Error('시트 CSV 로드 실패: HTTP ' + resp.status);
  const csvText = await resp.text();
  const vals = parseCsv(csvText);
  if (!vals.length) return [];

  const MEMBERS = [
    { name:'김효정', role:'실장', team:'CD' },
    { name:'김창환', role:'VM팀장', team:'VM' },
    { name:'강민우', role:'VM파트장', team:'VM' },
    { name:'강승일', role:'VM전임', team:'VM' },
    { name:'문경선', role:'VM전임', team:'VM' },
    { name:'이지현', role:'VM전임', team:'VM' },
    { name:'전한아', role:'VX파트장', team:'VX' },
    { name:'김지원', role:'VX전임', team:'VX' },
    { name:'김준환', role:'VX선임', team:'VX' }
  ];

  // 헤더 행 자동 탐색 (배너 병합 셀이 앞에 여러 행 있을 수 있음)
  let headerRowIdx = 0;
  for (let hr = 0; hr < Math.min(vals.length, 8); hr++) {
    if (vals[hr].join('|').indexOf('가동률') >= 0) { headerRowIdx = hr; break; }
  }
  const headers = vals[headerRowIdx];
  const dataStartRow = headerRowIdx + 1;

  const now = new Date();
  const curYear = now.getFullYear();
  const curMonth = now.getMonth() + 1;

  // 0번 컬럼은 항상 "이름"(또는 배너 텍스트)이라 월 컬럼 탐색에서 제외한다.
  // 배너에 "자동 업데이트: 2026-07-01 19:00" 같은 타임스탬프가 들어있어
  // curYear+'-'+curMonth 패턴과 우연히 겹칠 수 있기 때문.
  let monthCol = -1;
  for (let i = 1; i < headers.length; i++) {
    const h = String(headers[i] || '');
    if (h.indexOf(curYear + '-' + pad2(curMonth)) >= 0 ||
        h.indexOf(curMonth + '월') >= 0 ||
        h.indexOf(String(curYear).slice(2) + '년 ' + curMonth + '월') >= 0) {
      monthCol = i; break;
    }
  }
  if (monthCol === -1) {
    for (let j = headers.length - 1; j >= 1; j--) {
      if (headers[j] !== '') { monthCol = j; break; }
    }
  }
  const rateCol = monthCol >= 0 ? monthCol + 1 : -1;

  let nameCol = 0;
  for (let k = 0; k < headers.length; k++) {
    const hk = String(headers[k] || '');
    if (hk === '이름' || hk === '담당자' || hk === '성명' || hk.indexOf('이름') >= 0) {
      nameCol = k; break;
    }
  }

  return MEMBERS.map(m => {
    let rate = null;
    for (let r = dataStartRow; r < vals.length; r++) {
      if (String(vals[r][nameCol] || '').indexOf(m.name) >= 0) {
        let col = rateCol;
        while (col >= 0 && col < headers.length) {
          const v = vals[r][col];
          if (v !== '' && v !== null && v !== undefined) {
            const n = typeof v === 'number' ? v : parseFloat(String(v).replace('%','').replace(',',''));
            if (!isNaN(n)) { rate = n <= 2 ? Math.round(n * 100) : Math.round(n); break; }
          }
          col -= 3;
        }
        break;
      }
    }
    const status = rate === null ? 'unknown'
                 : rate >= 100  ? 'overload'
                 : rate >= 80   ? 'normal'
                 : rate >= 50   ? 'light'
                 : 'idle';
    return { name: m.name, role: m.role, team: m.team, utilRate: rate, status };
  });
}

// ── 메인 ──────────────────────────────────────────────────
async function main() {
  const result = { ok: true };

  try {
    result.projects = await getProjects();
  } catch (err) {
    result.projectsError = String(err.message || err);
    console.error('프로젝트 로드 실패:', err);
  }

  try {
    result.resources = await getResources();
  } catch (err) {
    result.resourcesError = String(err.message || err);
    console.error('가동률 로드 실패:', err);
  }

  result.fetchedAt = new Date().toLocaleString('sv-SE', { timeZone: 'Asia/Seoul' }).replace(' ', 'T') + '+09:00';

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(result, null, 2), 'utf-8');
  console.log('저장 완료:', OUTPUT_PATH);
  console.log('projects:', (result.projects || []).length, '/ resources:', (result.resources || []).length);
}

main().catch(err => { console.error(err); process.exit(1); });
