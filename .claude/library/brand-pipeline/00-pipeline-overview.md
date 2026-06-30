# 브랜드 제안 파이프라인 — 오케스트레이션 인덱스

`brand-strategist` 에이전트가 이 파일을 먼저 읽고 3단계를 **누락 없이** 구동한다.
상세 원문은 단계별 파일에 그대로 보존되어 있다 — 이 파일은 순서·게이트·핸드오프만 정의한다.

## 단계 순서 (게이트 통과 전 다음 단계 차단)
```
초기 제안(RFP) 입력
  │
  ▼ Stage 1 — stage1-manus.md  (리서치·포지셔닝·BX 비주얼 프롬프트)
     산출 9종 → Gate 1 + Strategic POV Gate(06) → manus_1_state 완성?
  │   ❌ 미완 → 차단, 누락 state 요청
  ▼ Stage 2 — stage2-manus.md  (비주얼 DNA·6컨셉·매트릭스·Brutalist·숏리스트)
     산출 8종 → Gate 2 + Lens Translation + Living System Gate(06) → manus_2_state 완성?
  │   ❌ 미완 → 차단
  ▼ Stage 3 — stage3-runable.md  (브랜드 시스템 9종 → 최종 슬라이드덱)
     Gate 3 + Human Touch & Risk Gate(06) → slide_generation_ready == true ?
  │   ❌ false → 슬라이드 생성 금지, 누락 항목 표시
  ▼ 최종 덱 35~45장 생성 → Deck Review Checklist
  ▼ 검수: fact-checker → cold-critic → delivery-gate → 사용자 OK
```

## 절대 규칙 (원문 + MAX OS 불변규칙 결합)
1. **Manus 1·2 state 없으면 Stage 3 시작 금지. slide_generation_ready=true에서만 덱 생성.**
2. 각 단계 Gate 체크리스트 **전부 통과 + state 완성** 안 되면 다음 단계 진입 불가 = 누락 0.
3. 06 디자이너 렌즈 게이트(Gate 1~4)는 단계마다 통과 필수 — `designer-lens-gates.md` 참조.
4. 출처 없는 수치 금지. 경쟁사 리서치는 Source Tier 1~2 우선(Tier 4 본문 금지) → `fact-checker`.
5. 자동 발송 금지. 검토 문서·덱은 HTML 라이트모드 3종. 슬라이드는 Stage 3에서만.
6. 단가·마진·계약·외부발송 최종 OK 등 7대 위임금지는 사용자 직접.

## 단계 ↔ 기존 에이전트 매핑 (신규 0개, 재사용)
| 단계 | 활용 에이전트 |
|------|--------------|
| S1 리서치·포지셔닝 | `rfp-analyst` · `market-research` · `fact-checker` |
| S1 BX/패키지 프롬프트 | `visual-generator` |
| S2 비주얼DNA·6컨셉·무드 | `brainstormer` · `reference-curator` · `moodboard-builder` · `design-trend-radar` |
| S2 Client×Mood·Brutalist | `review-panel` · `design-critique` |
| S3 브랜드 시스템 | `design-system-guardian` · `creative-director` |
| S3 최종 덱 | `list-deck-design`(스킬) · `delivery-gate` |
| 06 렌즈 게이트 | `design-critique` · `cold-critic` · `creative-director` |

## State 핸드오프
- 각 단계는 JSON state를 산출(스키마는 각 단계 파일 내 "State Schema" 절).
- 다음 단계는 이전 state를 입력으로 받음. state 누락 시 진행 중단·요청.
- `director_decision_needed` 항목은 사용자에게 모아 보고.
