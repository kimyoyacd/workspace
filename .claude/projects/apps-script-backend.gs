// MAX실 OS Dashboard v6 — 백엔드 데이터 프록시
// Google Apps Script (script.google.com)
//
// ── 배포 방법 ──────────────────────────────────────────────
// 1. script.google.com → 새 프로젝트 → 이 코드 붙여넣기
// 2. 프로젝트 설정 → 스크립트 속성 → NOTION_TOKEN 값 추가
//    (Notion Integration 토큰: https://notion.so/my-integrations)
// 3. 배포 → 새 배포 → 유형: 웹 앱
//    실행 계정: 나(kimyoya@gmail.com)
//    액세스 권한: 모든 사용자(익명 포함)
// 4. 배포 URL 복사 → maxos-dashboard-v6.html 상단 APPS_SCRIPT_URL 에 붙여넣기
// ──────────────────────────────────────────────────────────

const DB_PROJECTS = '2e79ff44-ed51-817a-9138-eac149de9f21';  // 2026 Project DB (메인)
const SHEETS_ID   = '1YZq8hWy_ZWZqfv_DUQzUheMcUJspU1ZUCSFA_EGizn0';
const UTIL_TAB    = '📊 월별 투입 현황';

// ── 진입점 ──────────────────────────────────────────────────
function doGet(e) {
  const section = (e && e.parameter && e.parameter.section) || 'all';
  const result  = { ok: true };

  if (section === 'projects' || section === 'all') {
    try {
      result.projects = getProjects();
    } catch (err) {
      result.projectsError = String(err.message || err);
    }
  }

  if (section === 'resources' || section === 'all') {
    try {
      result.resources = getResources();
    } catch (err) {
      result.resourcesError = String(err.message || err);
    }
  }

  result.fetchedAt = Utilities.formatDate(new Date(), 'Asia/Seoul', "yyyy-MM-dd'T'HH:mm:ss'+09:00'");

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── Notion 토큰 ───────────────────────────────────────────
function getToken() {
  const t = PropertiesService.getScriptProperties().getProperty('NOTION_TOKEN');
  if (!t) throw new Error('NOTION_TOKEN 미설정 — 스크립트 속성에 추가하세요');
  return t;
}

// ── Notion DB 쿼리 (페이지네이션 처리) ───────────────────
function notionQueryAll(dbId, filterObj, sortsArr) {
  const token   = getToken();
  const baseUrl = 'https://api.notion.com/v1/databases/' + dbId + '/query';
  const headers = {
    'Authorization': 'Bearer ' + token,
    'Content-Type':  'application/json',
    'Notion-Version': '2022-06-28'
  };

  let all = [], cursor = null, more = true;
  while (more) {
    const body = { page_size: 100 };
    if (filterObj) body.filter       = filterObj;
    if (sortsArr)  body.sorts        = sortsArr;
    if (cursor)    body.start_cursor = cursor;

    const resp = UrlFetchApp.fetch(baseUrl, {
      method: 'post', headers: headers,
      payload: JSON.stringify(body), muteHttpExceptions: true
    });
    const code = resp.getResponseCode();
    if (code !== 200) throw new Error('Notion API ' + code + ': ' + resp.getContentText().slice(0, 300));

    const data = JSON.parse(resp.getContentText());
    all  = all.concat(data.results || []);
    more = !!(data.has_more && data.next_cursor);
    if (more) cursor = data.next_cursor;
  }
  return all;
}

// ── 프로젝트 조회 ─────────────────────────────────────────
function getProjects() {
  const ACTIVE = ['진행중','거의 완료','진행예정','협의중','검토중','홀딩','고정운영','관심'];
  const STATUS_GROUP = {
    '진행중':'active', '거의 완료':'almost', '고정운영':'fixed',
    '진행예정':'upcoming', '협의중':'discuss', '검토중':'review',
    '홀딩':'hold', '관심':'interest'
  };

  const filter = { or: ACTIVE.map(function(s) { return { property:'상태', status:{ equals:s } }; }) };
  const sorts  = [
    { property:'상태',  direction:'ascending'  },
    { property:'날짜',  direction:'descending' }
  ];

  const pages = notionQueryAll(DB_PROJECTS, filter, sorts);

  return pages.map(function(page) {
    var p = page.properties;

    var titleArr = ((p['업무 명'] || p['이름'] || {}).title || []);
    var title    = titleArr.length ? titleArr[0].plain_text : '(제목 없음)';
    var status   = (p['상태']    || {}).status    ? p['상태'].status.name    : '';
    var diff     = (p['난이도']   || {}).select    ? p['난이도'].select.name   : '';
    var cats     = ((p['카테고리'] || {}).multi_select || []).map(function(c) { return c.name; });
    var start    = p['날짜']       && p['날짜'].date       ? p['날짜'].date.start       : '';
    var end      = p['종료 날짜'] && p['종료 날짜'].date  ? p['종료 날짜'].date.start  : '';
    var progress = p['진행률(수식)'] && p['진행률(수식)'].formula
                   ? (p['진행률(수식)'].formula.number || 0) : 0;

    return {
      id:         page.id,
      title:      title,
      status:     status,
      group:      STATUS_GROUP[status] || 'other',
      difficulty: diff,
      categories: cats,
      startDate:  start,
      endDate:    end,
      progress:   Math.round(progress * 100),
      notionUrl:  page.url || ''
    };
  });
}

// ── 가동률 조회 (Google Sheets) ──────────────────────────
function getResources() {
  var ss    = SpreadsheetApp.openById(SHEETS_ID);
  var sheet = ss.getSheetByName(UTIL_TAB);
  if (!sheet) throw new Error('탭 "' + UTIL_TAB + '" 없음 — 시트 탭 이름을 확인하세요');

  var vals    = sheet.getDataRange().getValues();
  if (!vals.length) return [];

  var MEMBERS = [
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

  var headers  = vals[0];
  var now      = new Date();
  var curYear  = now.getFullYear();
  var curMonth = now.getMonth() + 1;

  // 현재 월 컬럼 탐색
  var monthCol = -1;
  for (var i = 0; i < headers.length; i++) {
    var h = String(headers[i] || '');
    if (h.indexOf(curYear + '-' + pad2(curMonth)) >= 0 ||
        h.indexOf(curMonth + '월') >= 0 ||
        h.indexOf(String(curYear).slice(2) + '년 ' + curMonth + '월') >= 0) {
      monthCol = i; break;
    }
  }
  // 못 찾으면 마지막 비어있지 않은 헤더 컬럼
  if (monthCol === -1) {
    for (var j = headers.length - 1; j >= 0; j--) {
      if (headers[j] !== '') { monthCol = j; break; }
    }
  }

  // 이름 컬럼 탐색 (없으면 첫 번째)
  var nameCol = 0;
  for (var k = 0; k < headers.length; k++) {
    var hk = String(headers[k] || '');
    if (hk === '이름' || hk === '담당자' || hk === '성명' || hk.indexOf('이름') >= 0) {
      nameCol = k; break;
    }
  }

  return MEMBERS.map(function(m) {
    var rate = null;
    for (var r = 1; r < vals.length; r++) {
      if (String(vals[r][nameCol] || '').indexOf(m.name) >= 0) {
        if (monthCol >= 0) {
          var v = vals[r][monthCol];
          if (v !== '' && v !== null && v !== undefined) {
            var n = typeof v === 'number' ? v : parseFloat(String(v).replace('%','').replace(',',''));
            if (!isNaN(n)) rate = n <= 2 ? Math.round(n * 100) : Math.round(n);
          }
        }
        break;
      }
    }
    var status = rate === null ? 'unknown'
               : rate >= 100  ? 'overload'
               : rate >= 80   ? 'normal'
               : rate >= 50   ? 'light'
               : 'idle';
    return { name: m.name, role: m.role, team: m.team, utilRate: rate, status: status };
  });
}

function pad2(n) { return n < 10 ? '0' + n : String(n); }
