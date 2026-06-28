# 연결된 데이터 소스 (SoT) — 노션 2026 Project DB

> project-manager·quote-accountant 등이 read-only로 읽는 노션 데이터 소스 주소록.
> 워크스페이스: **MAX notion** (linkmomo@kakao.com). 노션 도구는 ToolSearch로 `notion-fetch` /
> `notion-query-data-sources` 를 불러 사용. ⚠️ **읽기 전용 — 쓰기 금지.**

## 핵심 DB
| 용도 | data source (collection://) | 비고 |
|---|---|---|
| **2026 Project DB** (진행현황) | `2e79ff44-ed51-8153-bf54-000b5dbcfd75` | 메인. 부모: MAX 2026 Front Office |
| 2026 Project DB (보조 소스) | `30d9ff44-ed51-81a9-8e38-000b2befe0ba` | 같은 DB의 2번째 소스(견적 카테고리 포함) |
| **조직 구조** (인력·Role·팀) | `2e79ff44-ed51-819c-a38b-000b04c5f2bd` | 가동률·담당자 |
| **Resource Log 시간기록** | `2b99ff44-ed51-804b-8b38-000b106a0b05` | 견적 학습용 실투입 시간 |
| 고객사명 | `2e79ff44-ed51-8113-846f-000bef6ce521` | 클라이언트 |
| TASK DB (할 일) | `2e79ff44-ed51-819b-933a-000b80854d65` | 하위 할 일 |
| 업무 유형 | `2e79ff44-ed51-816f-aab6-000b0066bbf1` | |

- DB 페이지 URL: https://app.notion.com/p/2e79ff44ed51817a9138eac149de9f21

## 2026 Project DB 주요 속성
- **업무 명**(title) · **상태**(select) · **난이도**(L/M/H) · **카테고리**(multi) · **날짜/종료 날짜** · **진행률(수식)**
- **고객사명**(relation) · **조직구성원**(relation) · **팀명**(rollup: VX/VM/실)
- **상태 값**: 진행중 · 거의 완료 · 진행예정 · 협의중 · 검토중 · 홀딩 · 관심 · 완료 · 고정운영 · 보관함 · 실주
- **카테고리**: Motion · UA · UI · contents · Offline · AI · proposal · banner · CMS · leader · game · 영상 · 퍼포먼스 · PPT · 견적

## 조직 구조 주요 속성
- 이름(title) · Role(실장/팀장/파트장/선임/책임/수석/전임) · 팀명(VX/VM/실) · 상위조직(실/센터/팀/멤버) · Resource Log(시간기록) relation · 프로젝트 수

## 사용 메모
- 진행 현황 정리 = 2026 Project DB를 `상태`로 그룹핑해 읽는다.
- 가동률·담당 = 조직 구조 + 각자의 프로젝트 수/시간기록.
- 우리(MX)실 매출 집계는 카테고리 **UI** 기준(견적 규칙과 동일).
