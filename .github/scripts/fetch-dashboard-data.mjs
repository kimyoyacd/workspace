// MAX실 OS — 대시보드 데이터 자동 갱신 스크립트
// GitHub Actions가 매일 실행. Notion 2026 Project DB를 읽어 dashboard-data.json의 projects[]를 갱신.
// resources[](가동률)는 Time-Log 연동 전까지 기존 값 보존.
// 필요 시크릿: NOTION_TOKEN (Notion 내부 통합 토큰, 2026 Project DB 공유 필요). READ ONLY.

import { readFileSync, writeFileSync } from 'node:fs';

const TOKEN = process.env.NOTION_TOKEN;
const DATABASE_ID = '2e79ff44ed51817a9138eac149de9f21'; // 2026 Project DB
const OUT = '.claude/dashboard/dashboard-data.json';

// Notion 상태 → 대시보드 그룹 키 (v7 kanban GROUPS와 일치)
const STATUS_GROUP = {
  '진행중': 'active', '거의 완료': 'almost', '고정운영': 'fixed',
  '진행예정': 'upcoming', '협의중': 'discuss', '검토중': 'review',
  '홀딩': 'hold', '관심': 'interest',
  '완료': 'done', '보관함': 'done', '실주': 'done',
};

if (!TOKEN) { console.error('NOTION_TOKEN 시크릿이 없습니다. 갱신 중단.'); process.exit(1); }

const txt = (arr) => (arr || []).map((x) => x.plain_text).join('');

async function queryAll() {
  const results = [];
  let cursor;
  do {
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cursor ? { start_cursor: cursor, page_size: 100 } : { page_size: 100 }),
    });
    const j = await res.json();
    if (!res.ok) throw new Error(`Notion API ${res.status}: ${JSON.stringify(j).slice(0, 300)}`);
    results.push(...j.results);
    cursor = j.has_more ? j.next_cursor : null;
  } while (cursor);
  return results;
}

function toProject(page) {
  const p = page.properties || {};
  const title = txt(p['업무 명']?.title);
  if (!title) return null; // 빈 제목 스킵
  const status = p['상태']?.select?.name || null;
  const group = STATUS_GROUP[status] || 'review';
  if (group === 'done') return null; // 완료/보관/실주는 현황 보드에서 제외
  const date = p['날짜']?.date || {};
  const endFallback = p['종료 날짜']?.date?.start || null;
  return {
    id: page.id.replace(/-/g, '').slice(0, 6),
    title,
    group,
    status,
    categories: (p['카테고리']?.multi_select || []).map((c) => c.name),
    difficulty: p['난이도']?.select?.name || null,
    startDate: date.start || null,
    endDate: date.end || endFallback || null,
    notionUrl: page.url || null,
  };
}

async function main() {
  // 기존 파일에서 resources 등 보존
  let base = {};
  try { base = JSON.parse(readFileSync(OUT, 'utf8')); } catch { /* 최초 실행 */ }

  let projects = [], projectsError = null;
  try {
    const pages = await queryAll();
    projects = pages.map(toProject).filter(Boolean);
  } catch (e) {
    projectsError = String(e.message || e);
    projects = base.projects || [];
  }

  const out = {
    fetchedAt: new Date().toISOString(),
    projects,
    resources: base.resources || [],
    projectsError,
    resourcesError: base.resourcesError ?? null,
    _note: 'projects는 Notion 2026 Project DB 라이브 반영. resources 가동률은 Time-Log 연동 전까지 기존 값. GitHub Actions 자동 갱신.',
  };

  writeFileSync(OUT, JSON.stringify(out, null, 2) + '\n');
  console.log(`갱신 완료: projects ${projects.length}건${projectsError ? ' (오류: ' + projectsError + ')' : ''}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
