---
name: brand-proposal
description: 브랜드 제안 풀패키지 오케스트레이터. 초기 제안/RFP가 들어오면 3단계 게이트형 파이프라인을 누락 없이 구동한다 — 리서치·포지셔닝(Manus1) → 비주얼 컨셉/무드(Manus2) → 브랜드 시스템 + 최종 슬라이드덱(Runable3). 메인 세션에서 실행되어 단계마다 기존 에이전트(rfp-analyst·market-research·brainstormer·review-panel·design-system-guardian 등)를 호출하고 게이트를 강제한다. 트리거: "브랜드 제안 풀패키지 돌려", "RFP 들어왔어", "○○ 브랜드 기획부터 덱까지".
---

# 브랜드 제안 풀패키지 — 오케스트레이션 스킬

초기 제안(RFP)을 받아 3단계를 순서대로, **게이트를 강제하며** 진행한다.
이 스킬은 메인 세션(허브)에서 실행되므로 단계마다 **서브에이전트를 직접 호출**할 수 있다.

## 0. 가장 먼저
`.claude/library/brand-pipeline/00-pipeline-overview.md` 를 읽고 그 순서·게이트·핸드오프를 따른다.
각 단계의 상세 템플릿·프롬프트·스키마·체크리스트는 단계 파일 원문을 **기준**으로 산출한다:
- `stage1-manus.md` · `stage2-manus.md` · `stage3-runable.md` · `designer-lens-gates.md`

## 1. 단계 (게이트 통과 전 다음 단계 차단 — 누락 0)
**Stage 1 — 리서치·포지셔닝** (`stage1-manus.md`)
- 호출: `rfp-analyst`(니즈 4분류) → `market-research`(경쟁30·시장, 출처 Tier1~2) → `fact-checker`(검증) → `visual-generator`(BX/패키지 프롬프트)
- 게이트: Gate 1 + Strategic POV Gate(06) → `manus_1_state` 완성 확인. 미완 시 차단·누락 요청.

**Stage 2 — 비주얼 컨셉/무드** (`stage2-manus.md`)
- 호출: `design-trend-radar`(3개월 트렌드) + `reference-curator` + `brainstormer`(6컨셉) → `moodboard-builder` → `review-panel`(Client×Mood) + `design-critique`
- 게이트: Gate 2 + Lens Translation + Living System Gate(06) → `manus_2_state` 완성 확인.

**Stage 3 — 브랜드 시스템 + 최종 덱** (`stage3-runable.md`)
- 호출: `design-system-guardian` + `creative-director`(Brand Board·Value·Copy·Symbol)
- 게이트: Gate 3 + Human Touch & Risk Gate(06) → `slide_generation_ready` 판정
- **true일 때만** `list-deck-design` 스킬로 최종 덱 35~45장 생성.

## 2. 출구 검수 (외부 산출물)
`fact-checker` → `cold-critic` → `delivery-gate` → 사용자 OK. (Tier 2 자동 승격)

## 3. 절대 규칙
- Manus 1·2 state 없으면 Stage 3 금지. **slide_generation_ready=true에서만 덱 생성.**
- 각 단계 Gate 체크리스트 전부 통과 + state 완성 안 되면 다음 단계 진입 불가.
- 출처 없는 수치 금지(Source Tier 1~2 우선, Tier4 본문 금지).
- 자동 발송 금지. 검토 문서·덱은 HTML 라이트모드 3종. `.md` 검토본 금지.
- 단가·마진·계약·채용·외부발송 최종 OK는 사용자 직접(7대 위임금지).

## 4. 출력 원칙
- 각 단계 끝에 state(JSON) + Gate 통과표 + `director_decision_needed`를 사용자에게 보고.
- 단계 건너뛰기 요청을 받아도 선행 state 미완이면 누락 항목을 먼저 표시하고 보완 요청.
