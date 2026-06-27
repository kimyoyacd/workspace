# 프로젝트 추적 SoT 포인터 (project-sot)

> 실제 프로젝트는 **Notion에서 관리**(여기는 read-only 포인터·스키마·규칙). 에이전트는 Notion을 SOT로 조회.
> 참조 에이전트: `max-pm`, `account-radar`, `overhead-watcher`, `quote-accountant`

## Notion 허브 & DB
- **허브**: MAX 2026 Front Office (page `2e79ff44ed518020901aedeff2cbe2f6`) · 관리자 김효정
- **메인 SOT**: 2026 Project DB → `collection://2e79ff44-ed51-8153-bf54-000b5dbcfd75`
- 보조: MAX실 주간 보고(월 08:00) · Google Calendar · 조직구조 DB · 할 일 DB
- ⚠️ **보안주의 DB**(고객사명·수수료 기준표·지스타 고객데이터)는 함부로 열지 않음. 쓰기 금지(read-only).

## 2026 Project DB 스키마 (조회용)
- `업무 명`(title) · `고객사명`(relation→고객사 DB, 🔒보안주의) · `조직구성원`(relation) · `업무 유형`(relation)
- `카테고리`(multi): Motion · UA · UI · contents · Offline · AI · proposal · banner · CMS · leader · game · 영상 · 퍼포먼스 · PPT
- `난이도`: L · M · H
- `상태`: 진행중 · 고정운영 · 관심 · 보관함 · 완료 · 진행예정 · 거의 완료 · 협의중 · 홀딩 · 실주 · 검토중
- `날짜`(시작 범위) · `종료 날짜` · `진행률(수식)` · `팀명`(rollup)

## 🚨 매출 인식 규칙 (중요)
- 견적/프로젝트 금액은 **하이브랩 통합 금액**(PM·UX·UI·FE·BE·QA 혼재).
- **MAX실 매출 = UI Design 라인(고급기술자) 분만** 집계한다.
- quote-accountant·max-pm는 "통합 금액"과 "MAX실(UI) 매출분"을 항상 분리 표기.
- 카테고리 `UI` 가 MAX실 핵심. (Motion/영상 등은 케이스별 확인)

## 조회 팁
- 가동률/오늘보드: `상태=진행중` + `날짜`/`종료 날짜`로 마감 임박 필터
- 클라 히스토리: `고객사명` 관계로 묶어 보기 (account-radar)
