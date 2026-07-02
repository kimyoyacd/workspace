---
name: brand-proposal
description: Hyojung Guided 브랜드 제안 오케스트레이터. 브랜드명·제품·시장·RFP·이미지 레퍼런스·간단한 아이디어만 와도 단계별 질문(단계당 3개 이하)으로 진행한다 — Intake → Research & Positioning → Strategic POV → Visual Identity & Concept → Concept Selection → Brand System & Slide HTML Export → Final Review. 게이트 0~5를 강제하고 project_state를 누적하며, 최종 HTML 슬라이드·이미지 프롬프트는 Stage 3 통과 후에만 생성. 메인 세션에서 실행되어 단계마다 기존 에이전트를 호출. 트리거: "브랜드 제안 시작", "와이드리서치부터 슬라이드까지", "단계별로 질문해줘", RFP 수신.
---

# Hyojung Guided 브랜드 제안 — 질문형 오케스트레이션 스킬

메인 세션(허브)에서 실행되어 단계마다 **서브에이전트를 직접 호출**하고, **질문→답변→산출→게이트**로 누락 없이 진행한다.

## 0. 가장 먼저
`.claude/library/brand-pipeline/00-pipeline-overview.md` 를 읽고 상태 머신·게이트·매핑을 따른다.
상세 산출 양식은 `stage1.md`·`stage2.md`·`stage3.md`, 디자이너 렌즈는 `designer-lens-gates.md`. v3 원본은 `_v3-source/`.

## 1. 인터랙션 패턴 (매 단계 동일)
1. **현재 단계 선언** (예: "현재 단계는 Stage 1 · Research & Positioning입니다.")
2. **지금 필요한 질문 3개** (선택형/짧은 답변형, 단계당 최대 3개)
3. 답변 후 **산출물 생성** (해당 stage 파일 양식 사용)
4. **자체검토 4렌즈**: Strategy Fit · Visual Potential · System Expandability · Risk Alignment
5. **Gate 판정**: 🟢 진행 / 🟡 보완 질문 1~2 / 🔴 재작업
6. **다음 액션 제안** (A안 진행 / B안 수정 / 보완) + `project_state` 갱신

## 2. 단계 & 게이트 (🔴이면 다음 단계 차단)
- **Stage 0 Intake** → Gate 0 (Brief 완성도)
- **Stage 1 Research & Positioning** → Gate 1 — 호출: `rfp-analyst`·`market-research`·`fact-checker`
- **Stage 1.5 Strategic POV** → Gate 2 — 호출: `cold-critic`·`creative-director`
- **Stage 2 Visual Identity & Concept** → Gate 3 — 호출: `brainstormer`·`reference-curator`·`moodboard-builder`·`design-trend-radar`
- **Stage 2.5 Concept Selection** → Gate 4 — 호출: `review-panel`·`design-critique`
- **Stage 3 Brand System & Slide HTML** → Gate 5 — 호출: `design-system-guardian`·`creative-director`·`visual-generator`(이미지 프롬프트)
- **Final Review** → `slide_generation_ready=true`에서만 이미지 프롬프트 + HTML 슬라이드(`list-deck-design` 스킬) → `fact-checker`→`cold-critic`→`delivery-gate`→**사용자 최종 OK**

## 3. 절대 규칙
- 한 번에 질문 3개 이하. 미답 정보는 임의 확정 금지 → `Assumptions`로 분리. "계속" 시 합리적 가정을 먼저 목록으로 제시.
- Stage 1·2에서 슬라이드 HTML 생성 금지. **Gate 5 통과 후에만** 이미지 프롬프트·HTML.
- 출처 없는 수치 금지(Source Tier 1~2 우선). 자동 발송·게시·제출 금지.
- 검토 문서·덱은 HTML 라이트모드 3종(`<meta color-scheme light>` + `:root{color-scheme:light}` + `html,body{background:#fff}`). `.md` 검토본 금지.
- 단가·마진·계약·채용·외부발송 최종 OK 등 7대 위임금지는 사용자 직접.
- Designer Lens 6원칙(Core Value First·Own Lens·Behavior System·Human Touch·Risk Alignment·Preserve vs Destroy)을 모든 단계에 반영.

## 4. 단계 출력 형식
```
현재 단계: …
질문 3개: …
── 답변 후 ──
## Stage Result   ## Review(4렌즈)   ## Gate(🟢🟡🔴 + 사유)
## project_state 업데이트(JSON)   ## Next Questions
```

## 5. 최종 HTML 슬라이드 구조
Cover · Executive Summary · Wide Research · Positioning Map · Strategic POV · 3 Core Keywords · Visual Identity DNA · Concept Territories · Behavior System · Human Touch · Brand System · Image Prompt Pack · Slide Export Notes · Final Review.
각 슬라이드 필드: Slide No. / Section / Key Message / Content / Visual Direction / Image Prompt(필요시) / Review Note.
