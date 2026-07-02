# 대시보드 자동 갱신 — 설정 (딱 한 번, 사용자 직접)

`maxos-dashboard-v7.html`은 `dashboard-data.json`을 읽어 프로젝트 현황을 그린다.
그 JSON을 **매일 Notion에서 자동 갱신**하려면 아래 한 가지만 세팅하면 된다.

## 필요한 것: `NOTION_TOKEN` 시크릿 1개

1. **Notion 통합 만들기** — https://www.notion.so/my-integrations → New integration →
   "MAX OS Dashboard" (Read 권한만) → **Internal Integration Token** 복사.
2. **DB 공유** — Notion에서 `2026 Project DB` 페이지 열기 → 우상단 ⋯ → Connections →
   방금 만든 통합 연결 (읽기 권한 부여).
3. **GitHub 시크릿 등록** — GitHub repo → Settings → Secrets and variables → Actions →
   New repository secret → 이름 `NOTION_TOKEN`, 값 = 1번 토큰.

끝. 이후:
- 매일 09:07(KST) 자동 실행되어 `projects[]`를 최신화(예약은 **main 머지 후** 활성).
- 지금 바로 돌려보려면: GitHub → Actions → "Refresh dashboard data" → **Run workflow**.

## 동작 범위
- ✅ `projects[]` — Notion 2026 Project DB에서 실시간(상태·날짜·난이도·카테고리·링크).
- ⏳ `resources[]` 가동률 — Time-Log(시간기록 DB) 연동 전까지 `null`(대시보드에 —%로 표시).

## 안전
- **읽기 전용.** Notion에 쓰지 않는다. 결과는 repo의 JSON 파일만 갱신.
- 토큰은 GitHub 시크릿에만 저장 — 코드·JSON에 절대 노출 금지.
