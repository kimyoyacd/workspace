# 브랜드 제안 파이프라인 — 오케스트레이션 인덱스 (Hyojung Guided v3)

`brand-proposal` 스킬이 이 파일을 먼저 읽고 **질문형 가이드**로 단계를 **누락 없이** 구동한다.
상세 산출 양식은 `stage1.md`·`stage2.md`·`stage3.md`, 디자이너 렌즈는 `designer-lens-gates.md`에 보존.
v3 원본은 `_v3-source/`에 아카이브.

## 작동 모델 (질문형)
각 단계: **현재 단계 선언 → 질문 3개 이하 → 답변 → 산출 → 자체검토(4렌즈) → Gate(🟢🟡🔴) → `project_state` 갱신 → 다음 액션 제안**.
미답 정보는 임의 확정 금지 → `Assumptions`로 분리. "계속"이라 하면 합리적 가정 세우되 가정 목록 먼저 제시.

## 상태 머신 (게이트 통과 전 다음 단계 차단)
```
START
  ▼ Stage 0 · Intake                         → Gate 0: Brief 완성도
  ▼ Stage 1 · Research & Positioning         → Gate 1: 리서치 논리·출처·빈자리
  ▼ Stage 1.5 · Strategic POV                → Gate 2: 한 문장 POV·3 키워드
  ▼ Stage 2 · Visual Identity & Concept      → Gate 3: 비주얼 DNA·Behavior·Human Touch
  ▼ Stage 2.5 · Concept Selection            → Gate 4: 차별·리스크·Preserve/Destroy
  ▼ Stage 3 · Brand System & Slide HTML      → Gate 5: Deck Readiness
  ▼ Final Review                             → EXPORT: HTML 슬라이드 + Image Prompt Pack
```
- 매핑: Stage 0/1/1.5 = `stage1.md` · Stage 2/2.5 = `stage2.md` · Stage 3/Final = `stage3.md`.

## 절대 규칙 (v3 + MAX OS 불변규칙)
1. 한 번에 질문 3개 이하. Gate 🔴이면 다음 단계로 넘어가지 않음.
2. Stage 1·2에서 최종 슬라이드 HTML 생성 금지. **Gate 5 통과(`slide_generation_ready=true`) 후에만** 이미지 프롬프트·HTML 생성.
3. 06 디자이너 렌즈 6원칙 + 4렌즈 자체검토를 모든 단계에 반영 — `designer-lens-gates.md`.
4. 출처 없는 수치 금지(Source Tier 1~2 우선) → `fact-checker`.
5. 자동 발송·게시·제출 금지. 검토 문서·덱은 HTML 라이트모드 3종.
6. 단가·마진·계약·외부발송 최종 OK 등 7대 위임금지는 사용자 직접.

## 단계 ↔ 기존 에이전트 매핑 (신규 0개, 재사용)
| 단계 | 활용 에이전트 |
|------|--------------|
| S1 리서치·포지셔닝 | `rfp-analyst` · `market-research` · `fact-checker` |
| S1.5 전략 POV | `cold-critic`(관점 검증) · `creative-director` |
| S2 비주얼 DNA·6컨셉·무드 | `brainstormer` · `reference-curator` · `moodboard-builder` · `design-trend-radar` |
| S2.5 컨셉 선택 | `review-panel` · `design-critique` |
| S3 브랜드 시스템 | `design-system-guardian` · `creative-director` |
| S3 이미지 프롬프트 | `visual-generator` |
| S3 최종 HTML 덱 | `list-deck-design`(스킬) · `delivery-gate` |
| 출구 검수 | `fact-checker` → `cold-critic` → `delivery-gate` → 사용자 OK |

## project_state (단계마다 누적)
키: `current_stage` · `brand` · `research` · `strategy` · `visual_system` · `deck` · `gates{gate_0..5}`.
전체 스키마는 `state-machine-gates`(=`stage*` 본문/아카이브) 참조. `director_decision_needed`는 사용자에게 모아 보고.
