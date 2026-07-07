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

## 💡 아이디어 인박스 (쓰기 허용 ⭐)
- **용도**: 비즈니스·디자인 아이디어 저장 → 요청 시 브레인스토밍 확장(brainstormer 발산 + critic 평가 + 다음 고민 포인트)
- data source: `5743f3f4-3245-4b3f-b430-805242ba321c` · DB URL: https://app.notion.com/p/9fcfbc1405ad44f389032383a73debab
- 위치: 개인 "2026" 페이지 (https://app.notion.com/p/98ea12621d0441fe9bfd01f48c16ade7) 아래
- 속성: 아이디어(title) · 유형(비즈니스/디자인/서비스·상품/자동화·AI/조직·운영) · 상태(씨앗→고민중→확장완료→실행검토→실행중/보류) · 출처 · 관련 클라 · 한 줄 요약 · 다음 고민 포인트 · 등록일(자동)
- ⚠️ 읽기 전용 규칙의 **예외** — 이 DB만 Claude가 생성·수정 가능. 확장 결과는 각 아이디어 페이지 본문에 누적.

## 2026 Project DB 주요 속성
- **업무 명**(title) · **상태**(select) · **난이도**(L/M/H) · **카테고리**(multi) · **날짜/종료 날짜** · **진행률(수식)**
- **고객사명**(relation) · **조직구성원**(relation) · **팀명**(rollup: VX/VM/실)
- **상태 값**: 진행중 · 거의 완료 · 진행예정 · 협의중 · 검토중 · 홀딩 · 관심 · 완료 · 고정운영 · 보관함 · 실주
- **카테고리**: Motion · UA · UI · contents · Offline · AI · proposal · banner · CMS · leader · game · 영상 · 퍼포먼스 · PPT · 견적

## 조직 구조 주요 속성
- 이름(title) · Role(실장/팀장/파트장/선임/책임/수석/전임) · 팀명(VX/VM/실) · 상위조직(실/센터/팀/멤버) · Resource Log(시간기록) relation · 프로젝트 수

## 사용 메모
- 진행 현황 정리 = 2026 Project DB를 `상태`로 그룹핑해 읽는다.
- 가동률·담당 = 아래 구글 시트(투입 현황) + 조직 구조.
- 우리(MX)실 매출 집계는 카테고리 **UI** 기준(견적 규칙과 동일).

## 가동률 — 구글 시트 (MAX_2026 리소스 관리)
- 파일: **MAX_2026 리소스 관리 시트_v1** · 소유 kimyoya@gmail.com
- fileId: `1YZq8hWy_ZWZqfv_DUQzUheMcUJspU1ZUCSFA_EGizn0`
- URL: https://docs.google.com/spreadsheets/d/1YZq8hWy_ZWZqfv_DUQzUheMcUJspU1ZUCSFA_EGizn0/edit
- ⚠️ **읽기 방법(중요)**: `read_file_content`는 승인 차단됨. `download_file_content`로 읽되,
  **CSV는 첫 탭(설정)만** 나온다. **가동률은 xlsx 전체로 받아 파싱**:
  `download_file_content(exportMimeType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")`
  → base64 디코드 → openpyxl로 탭 읽기.
- **주요 탭**: `설정`(팀원·프로젝트·과업 마스터) · `📊 월별 투입 현황`(가동률 ⭐) · `01. Time-Log`(실투입 기록, 견적 학습용) · 개인 탭 9명(이지현·문경선·강승일·강민우·김창환·김지원·전한아·김준환·김효정)
- **가동률 기준**: 월 영업일×8h. 🔴과부하 ≥100% / 🟢정상 80~99% / 🟡여유 50~79% / ⚪미입력·부재 <50%
- **MAX실 인력 9명**: 김효정(실장) · 김창환(VM팀장) · 강민우(VM파트장) · 강승일·문경선·이지현(VM전임) · 전한아(VX파트장) · 김지원(VX전임) · 김준환(VX선임)
