#!/usr/bin/env node
/**
 * dashboard-data.json 자동 생성 스크립트
 * - Notion 2026 Project DB → projects
 * - Google Sheets MAX_2026 리소스 시트(Time-Log) → resources(가동률)
 *
 * 필요 환경변수: NOTION_TOKEN (Notion internal integration token)
 * 실행: node scripts/fetch-dashboard-data.js
 * 출력: docs/dashboard-data.json + .claude/projects/dashboard-data.json
 */

const fs = require('fs');
const path = require('path');

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const PROJECT_DB_ID = '2e79ff44-ed51-8153-bf54-000b5dbcfd75'; // 2026 Project DB data source
const SHEET_ID = '1YZq8hWy_ZWZqfv_DUQzUheMcUJspU1ZUCSFA_EGizn0';
const SHEET_TAB = '01. Time-Log';

const GROUP = {
  '진행중': 'active', '거의 완료': 'almost', '고정운영': 'fixed',
  '진행예정': 'upcoming', '협의중': 'discuss', '검토중': 'review',
  '홀딩': 'hold', '관심': 'interest',
};

async function fetchProjects() {
  if (!NOTION_TOKEN) throw new Error('NOTION_TOKEN 환경변수가 없습니다');
  const projects = [];
  let cursor = undefined;
  do {
    const resp = await fetch(`https://api.notion.com/v1/databases/${PROJECT_DB_ID}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ start_cursor: cursor, page_size: 100 }),
    });
    if (!resp.ok) throw new Error(`Notion API ${resp.status}: ${await resp.text()}`);
    const data = await resp.json();
    for (const page of data.results) {
      const p = page.properties;
      const status = p['상태']?.select?.name;
      if (!status || !GROUP[status]) continue; // 완료·보관함·실주 제외
      projects.push({
        title: p['업무 명']?.title?.map(t => t.plain_text).join('') || '(제목 없음)',
        group: GROUP[status],
        status,
        categories: p['카테고리']?.multi_select?.map(s => s.name) || [],
        difficulty: p['난이도']?.select?.name || null,
        startDate: p['날짜']?.date?.start || null,
        endDate: p['종료 날짜']?.date?.start || p['날짜']?.date?.end || null,
        notionUrl: page.url,
      });
    }
    cursor = data.has_more ? data.next_cursor : undefined;
  } while (cursor);
  return projects;
}

function parseCsv(text) {
  const rows = [];
  let row = [], field = '', inQ = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQ) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') inQ = false;
      else field += c;
    } else if (c === '"') inQ = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
    else if (c !== '\r') field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows;
}

async function fetchResources() {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(SHEET_TAB)}`;
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`Sheets ${resp.status}`);
  const rows = parseCsv(await resp.text()).slice(1);

  // 사람별 날짜별 시간 집계
  const byPerson = {};
  for (const r of rows) {
    const [date, name, , , , hours] = r;
    if (!date || !date.startsWith('20') || !name) continue;
    const h = parseFloat(hours);
    if (isNaN(h)) continue;
    (byPerson[name] = byPerson[name] || {})[date] = (byPerson[name][date] || 0) + h;
  }

  // 개인별 최근 5 기록일 기준 가동률 (일 8h)
  const NAMES = ['김효정','김창환','강민우','강승일','문경선','이지현','전한아','김지원','김준환'];
  return NAMES.map(name => {
    const days = Object.keys(byPerson[name] || {}).sort().reverse().slice(0, 5);
    if (!days.length) return { name, utilRate: null };
    const total = days.reduce((s, d) => s + byPerson[name][d], 0);
    return { name, utilRate: Math.round(total / (days.length * 8) * 100), lastLog: days[0] };
  });
}

async function main() {
  const out = { fetchedAt: new Date().toISOString().slice(0, 19) };
  try { out.projects = await fetchProjects(); }
  catch (e) { out.projects = []; out.projectsError = e.message; }
  try { out.resources = await fetchResources(); }
  catch (e) { out.resources = []; out.resourcesError = e.message; }

  const json = JSON.stringify(out, null, 1);
  for (const dest of ['docs/dashboard-data.json', '.claude/projects/dashboard-data.json']) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, json);
    console.log('wrote', dest);
  }
  if (out.projectsError) console.error('projects 오류:', out.projectsError);
  if (out.resourcesError) console.error('resources 오류:', out.resourcesError);
}

main().catch(e => { console.error(e); process.exit(1); });
