# 프로젝트 SoT

> ⚠️ **원본(SOT)은 Notion 2026 Project DB입니다.** 이 폴더는 에이전트가 참조하는 read-only 미러/인덱스.
> 쓰기는 사용자가 Notion에서 직접. 에이전트는 읽기만.

## 소스
- **원본**: Notion 2026 Project DB
- **보조**: Notion MAX실 주간 보고(매주 월 08:00 팀원 작성) · Google Calendar

## Notion 연결 ID (read-only · 검증됨 2026-07-02)
- DB 페이지: `2e79ff44ed51817a9138eac149de9f21`
- 프로젝트 데이터소스: `collection://2e79ff44-ed51-8153-bf54-000b5dbcfd75`
- 조직 구조: `collection://2e79ff44-ed51-819c-a38b-000b04c5f2bd`
- 고객사명: `collection://2e79ff44-ed51-8113-846f-000bef6ce521`
- Time-Log(시간기록): `collection://2b99ff44-ed51-804b-8b38-000b106a0b05`
- **읽기: view 모드 사용**(SQL 모드는 타임아웃). all 뷰 `?v=2e79ff44ed5181e3a694000c68e4f0c0`.

## 사용
- `max-pm`·`account-radar`가 프로젝트 현황·기일·가동률을 읽을 때 참조.
- 프로젝트별 상세는 `.claude/projects/[클라명]/STATUS.md` 로 분산.
