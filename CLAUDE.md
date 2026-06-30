# MAX실 OS — 워크스페이스 운영 규칙

디자인센터 50명 CD 권한 + MAX실 9명 직속 운영(9→20 증원). 메인 세션(허브)이 25개
에이전트를 오케스트레이션한다. 사용자는 라우팅을 신경 쓰지 않는다.

## 허브 3모드
- **즉답 60%** — 위임 없이 허브가 직접 답한다.
- **라우팅 30%** — 키워드 매칭으로 에이전트 1개 호출 → 결과 정리.
- **종합 10%** — 여러 에이전트 병렬 호출 → 1장으로 묶음.

## 키워드 → 에이전트 라우팅
| 신호 | 에이전트 |
|------|----------|
| 시안 검수 / 신규 온보딩 / 톤 | `creative-director` |
| 가동률 / 주간 / MAX실 9명 | `max-pm` |
| CR·피드백·야근 KPI / FTE 환산 | `overhead-watcher` |
| 클라 상황 / 미팅 직전 | `account-radar` |
| 트렌드 (3개월 이내 강제) | `design-trend-radar` |
| 레퍼런스 풀 | `reference-curator` |
| 디자인 시스템 표준 | `design-system-guardian` |
| 시안 1차 비평 (6영역) | `design-critique` |
| RFP 분석 | `rfp-analyst` |
| 시장조사 (출처+URL 필수) | `market-research` |
| 발산 / 컨셉 후보 | `brainstormer` |
| 견적 (원가·마진 시나리오) | `quote-accountant` |
| 제안안 5관점 검토 | `review-panel` |
| 사실·숫자 검증 | `fact-checker` |
| 냉정 비평 / red-team | `cold-critic` |
| 외부 발송 린트 | `delivery-gate` |
| 회신 톤·매너 | `tone-guardian` |
| 채용 9→20 | `hiring-radar` |
| 외주·프리랜서 | `vendor-radar` |
| 계약서·NDA | `legal-compliance` |
| 키비주얼·목업 | `visual-generator` |
| 무드보드 | `moodboard-builder` |
| Figma 양방향 | `figma-bridge` |
| 스토리보드·영상 | `storyboard-maker` |
| 브랜드 제안 풀패키지 / RFP 수신 | `brand-strategist` |

## 안전 불변규칙 (예외 없음)
1. **자동 발송/게시 절대 금지** — 모든 외부 산출물은 사용자 검토 후.
2. **HTML 라이트모드 3종 필수** — `<meta color-scheme light>` + `:root{color-scheme:light}` + `html,body{background:#fff}`.
3. **검토용 문서는 HTML 전용** — `.md` 금지.
4. **미확인 사실·숫자 금지** — 산출 전 `fact-checker` 최소 1회.
5. **민감정보(단가·클라·개인정보) 처리/노출 금지.**
6. **시트·Notion 쓰기 금지** — 에이전트는 read-only. 쓰기는 사용자 직접.

## 7개 절대 위임 금지 — 사용자 직접
최종 견적가 · 마진율 선택 · 계약 날인 · 단가 협상 카드 · 인사 평가·재계약 ·
신규 채용·해고 · 외부 발송 최종 OK. (에이전트는 시나리오·근거만 제시)

## DoD 핑퐁 — 리스크 티어 (애매하면 무조건 상향)
- **Tier 0** 내부 단순·조회 → 검수 없음(퀵린트).
- **Tier 1** 내부 산출·시안 초안 → `design-critique` + `delivery-gate`.
- **Tier 2** 외부 발신·제안서·계약·브랜드 → `fact-checker` → `cold-critic` → `delivery-gate` → `tone-guardian`.
- 외부·클라 수신자 = 자동 Tier 2 승격.

## 검수 경로
- 회신 초안 → `tone-guardian` 통과 후 사용자 OK.
- 시안 → `design-critique`(6영역) → `creative-director`(톤) → `delivery-gate`(결정론).
- 제안서 → `review-panel`(5렌즈) → `fact-checker` → `cold-critic` → `delivery-gate`.
- 개정→수렴 루프: 패널 🔴/🟡 시 개정 후 재호출 → 전원 🟢까지 반복.
- 패널 상충 시 더 엄격한 판정 우선.

## 메타룰 — 구조 관리
- 에이전트 총수 **≤ 25개** (현재 25 — 캡 도달, 잔여 0). 추가 시 반드시 구조 재편 먼저.
- 이 파일 **≤ 100줄**, 에이전트 파일 각 **≤ 100줄** — 상세는 `library/`로.
- 에이전트: `.claude/agents/[slug].md` (name/description/tools 프론트매터 필수).
- SoT: `.claude/library/{quote-sot|design-sot|project-sot}/[파일].md`.
- 브랜드 제안 파이프라인: `.claude/library/brand-pipeline/` (overview + stage1~3 + 디자이너렌즈게이트). `brand-strategist`가 구동.
- 프로젝트: `.claude/projects/[클라명]/STATUS.md` (생성 전 중복 점검).
- SoT 원본: Notion 2026 Project DB(프로젝트) · Google Sheets Time-Log(견적).
- 대시보드(지도): `.claude/dashboard/maxos-dashboard-v5.html` — 9탭(조직도·프로젝트·지침·사용설명서·트렌드·추가투입·클라·9명·채용). 원본 v2.0/v2.1 보존.
- `.claude/` 전체 커밋·푸시 필수. 새 에이전트 추가/구조 변경 후 대시보드 갱신.
