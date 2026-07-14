# 데이터 소스 인벤토리 (2026-07-14 스캔 기준)

> 내 데이터가 어디에 얼마나 있고, AI가 어떻게 읽는지의 지도.
> 노션 Project DB·리소스 시트는 `.claude/library/data-sources.md` 참조 (중복 기재 안 함).

## ① 노션 — 미팅 DB ⭐ 핵심 자산
- **DB**: 📙 미팅 · https://app.notion.com/p/4b0611285f124e44be55122301154c94
- **data source**: `collection://9eebab8f-8f8a-4af5-8651-3560746f73fb`
- **규모**: 60건 (2022~2026), 태그: 내부회의/실장회의/프로젝트/운영/제안/정기회의/게임
- **속성**: Name · 미팅일자 · 태그 · 상세(GUI/서스테인/제안/사업/UA) · 미팅장소 · 참석인원
- **읽는 법**: `notion-query-data-sources` SQL 모드. ⚠️ `태그` 컬럼명 앞에 제어문자(\b)가 있어 SELECT에 넣으면 파싱 에러 — 제외하고 조회.
- **등장 클라이언트**: 넷마블 · 코웨이 · 웹젠 · 라이엇 · 크래프톤(올리브트리) · 라이온하트 · 렐루게임즈 · 넥슨 · 삼성 · LG생활건강 · 기아 · 아모레 · 거상 · 펍지 · HMG · 유플러스 · 디즈니 · 이노션 등

### 기타 노션
- AI 노트 DB: https://app.notion.com/p/9139ff44ed51834f97d581f95172e19a
- 2026 운영 허브: https://app.notion.com/p/98ea12621d0441fe9bfd01f48c16ade7 (미팅 DB의 상위)

## ② Gmail — 라벨 체계
| 라벨 | 용도 |
|---|---|
| `01_하이브랩` (+ /평가, /마이하이브) | 회사 업무 메일 ⭐ |
| `세일즈` | 영업·수주 관련 |
| `디자인`, `개인/디자인자료` | 디자인 레퍼런스·자료 |
| `청구서` | 정산 |
- **규모**: 최근 60일 약 200스레드 (뉴스레터·알림 노이즈 다수 — `label:` 필터 필수)
- **읽는 법**: `search_threads`에 `label:Label_6`(01_하이브랩) 등 라벨 ID로 조회. 라벨 ID는 `list_labels`.

## ③ 구글 드라이브 — 핵심 업무 파일
| 파일 | ID | 용도 |
|---|---|---|
| MAX_2026 리소스 관리 시트_v1 | `1YZq8hWy_ZWZqfv_DUQzUheMcUJspU1ZUCSFA_EGizn0` | 가동률·타임로그 (읽는 법: library/data-sources.md) |
| [넷마블&하이브랩] 월별 시트 (4·5·6월 확인) | 6월: `1TGkuHyly-oSl455cBQWmWRVjpgorXhndxeDwEWDFZXA` | 넷마블 운영 물량·정산 ⭐ |
| 하이브랩_업무만족도_설문결과 (2025·26) | 26년: `1gwrbSah31TcvI-uHpNwZl-TksEDNxf0W44COE6clIW0` | 조직 관리 |
| [아이파크현대산업개발] 사전질의서_회신용 | `1k3xtWvtOYgBJUjpfoeUkhSKDk1pNcTiuP5L8h-l__rI` | 신규 제안 진행 중 |
| 브랜딩/ 폴더 (tems BI svg 등) | `1PkPtat2uka9PZcjk77wMfVVvuXlTGC6f` | TEMS 브랜딩 산출물 |

## ④ 이 저장소 (.claude/)
- `projects/` — 2026년 6월~ 프로젝트 노트 (넷마블·올리브영·부미·웨이크메이크·adoring-archive 등)
- `library/` — 단가표·QC체크리스트·자동화맵·견적SoT

## 미적재 / 다음 후보
- [ ] Gmail `01_하이브랩` 라벨 스레드 → 클라이언트별 히스토리에 병합
- [ ] 넷마블 월별 시트 파싱 → netmarble.md에 물량·정산 추이
- [ ] 미팅 DB 나머지 클라이언트(웹젠·라이엇·크래프톤 등) 히스토리 파일 생성
- [ ] 캘린더 이벤트 → 미팅 전 자동 브리핑 트리거와 연결 (library/automation.md)
