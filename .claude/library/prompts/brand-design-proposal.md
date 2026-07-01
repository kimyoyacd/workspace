# 브랜드 디자인 제안서 — 마스터 오케스트레이션 가이드

> 초기 제안이 들어오면 이 파일이 기준이 된다. Manus 1 → 2 → Runable 3 + 4개 Designer Lens Gate를 누락 없이 진행한다.
> 하위 상세 지침: `manus-1-brand-planning.md` / `manus-2-visual-identity.md` / `runable-3-brand-system.md` / `designer-lens-gates.md`

---

## ★ 실행 원칙 (Materialize) — "글로만 끝내지 말 것"

**서브에이전트는 텍스트만 낸다. 이미지 생성과 파일 저장은 오케스트레이터(메인 세션)가 한다.**
- 서브에이전트(market-research·brainstormer·concept-director 등)는 도구가 Read/Glob/Grep뿐 → **분석·전략·프롬프트까지만** 산출.
- **메인 세션이 반드시 다음을 실행한다:**
  1. 각 단계 결과를 **실제 파일로 저장** (아래 경로 표대로).
  2. **이미지는 Higgsfield로 직접 생성** → `images/` 폴더에 저장.
  3. 마지막에 **HTML 덱**으로 조립(이미지 URL 임베드) + 커밋·PR.

## ★ 게이트 확인 원칙 — "자동으로 넘어가지 말 것"

- Gate 1(관점 한 문장), Gate 2(Lens Translation), 형태/톤/헤리티지 비율 등 **방향이 갈리는 결정 지점에서는 반드시 멈추고 사용자 확인**을 받는다. 확인 없이 다음 Manus/Gate로 진행하지 않는다.
- 선택지는 추상적 문장으로 묻지 말고, **구체적 예시(카피 비교, 이미지 톤 비교, 미니 비주얼)**로 보여줘서 판단을 돕는다. "어떻게 나올지 예상이 안 된다"는 반응이 나오면 예시부터 만든다.
- 확인받은 결정은 즉시 `manus-1-state.json`/`manus-2-state.json` 등 state 파일에 반영하고 커밋한다.

## ★ 경쟁사·레퍼런스 카드 완전성 원칙

- 경쟁 브랜드/레퍼런스를 카드 형태로 시각화할 때, **모든 카드에 전체 필드를 채운다**: 브랜드명 / 국가·시장 / 가격대 / 타깃 / 핵심메시지(또는 강점·약점) + **클릭 가능한 출처 링크**(target="_blank"로 새 탭).
- 이름과 한줄설명만 있는 축약 카드는 불충분 — 톤앤매너를 바로 확인하러 갈 수 있어야 한다.
- 정보가 확인 안 되면 "확인 안됨"으로 정직하게 표기하고 Source Tier(1~4)를 병기한다. 출처 없이 임의로 채우지 않는다.
- 30개 등 특정 개수를 요청받았으면 **누락 없이 전부** 카드화한다(일부만 골라 보여주지 않는다).

## ★ 산출물 누적 원칙 — "덕지덕지 흩어 보여주지 말 것"

- 각 단계 산출물을 개별 HTML 파일로 흩어 보여주지 않고, 프로젝트 폴더의 **`deck.html` 한 파일에 섹션으로 계속 누적**한다.
- 중간에 방향 확인이 꼭 필요한 지점 외에는, 완성된 섹션 단위로 deck.html을 업데이트해 보여준다 (스몰토크성 중간 산출물 스팸 금지).

---

## ★ 전체 파이프라인 (3단계 + 4게이트)

```
[브랜드 제안 인입]
       │
       ▼
[00 브리프] → 00-brief.md
       │
       ▼
┌─────────────────────────────────────────────┐
│  MANUS 1 — 리서치·포지셔닝                   │
│  경쟁 30개 → 클러스터 → XY맵 → 선호도 → 전략  │
└───────────────────┬─────────────────────────┘
                    │
              [GATE 1: Strategic POV Gate]
              "관점 한 문장" 통과 필수
                    │
                    ▼
┌─────────────────────────────────────────────┐
│  MANUS 2 — 비주얼 아이덴티티·컨셉 발산        │
│  [GATE 2: Lens Translation Gate] 선행        │
│  Visual DNA → 6컨셉 → 매트릭스 → Client×Mood │
│  [GATE 3: Living System Gate] 컨셉 직후       │
└───────────────────┬─────────────────────────┘
                    │
              [GATE 4: Human Touch & Risk Gate]
              AI 매끈함 탈출 + 가치 정렬 확인
                    │
                    ▼
┌─────────────────────────────────────────────┐
│  RUNABLE 3 — 브랜드 시스템 + 최종 슬라이드    │
│  Brand Board → Value Cards → Copy → 덱 35~45p│
└───────────────────┬─────────────────────────┘
                    │
                    ▼
           [커밋·PR] deck.html 완성
```

---

## 산출물 경로 규약

프로젝트 폴더: `.claude/projects/<YYYYMM_프로젝트명>/`

| 단계 | 산출 파일 | 실행 주체 |
|---|---|---|
| 00 브리프 | `00-brief.md` | 메인 (brand-brief-template 채움) |
| Manus 1 — 경쟁 매트릭스 | `01-competitor-matrix.md` | market-research(글) → 메인 저장 |
| Manus 1 — 클러스터링 | `02-clustering.md` | market-research(글) → 메인 저장 |
| Manus 1 — 포지셔닝 맵 | `03-positioning-map.md` | market-research(글) → 메인 저장 |
| Manus 1 — 선호도·전략 | `04-preference-strategy.md` | market-research+concept-director(글) → 메인 저장 |
| Manus 1 State | `manus-1-state.json` | 메인 저장 |
| Manus 2 — Visual DNA | `05-visual-dna.md` | visual-generator+brainstormer(글) → 메인 저장 |
| Manus 2 — 컨셉 6개 | `06-concept-territories.md` | brainstormer(글) → 메인 저장 |
| Manus 2 — Client×Mood | `07-client-mood-matrix.md` | critic(글) → 메인 저장 |
| Manus 2 State | `manus-2-state.json` | 메인 저장 |
| Runable 3 — Brand Board | `08-brand-board.md` | concept-director(글) → 메인 저장 |
| Runable 3 — Value·Copy·Symbol | `09-brand-system.md` | brainstormer+critic(글) → 메인 저장 |
| Runable 3 — CI/BI Audit | `10-competitor-cibi.md` | market-research(글) → 메인 저장 |
| Runable 3 State | `runable-3-state.json` | 메인 저장 |
| 이미지 | `images/*.png` | visual-generator(프롬프트) → **메인이 Higgsfield 생성** |
| 최종 덱 | `deck.html` | 메인 조립 → 커밋·PR |

---

## 에이전트 매핑 (Manus 단계별)

| Manus 단계 | 에이전트 (글 산출) | 메인 세션 실행 |
|---|---|---|
| Manus 1 · 경쟁 30개 리서치 | `market-research` | `01-competitor-matrix.md` 저장 |
| Manus 1 · 클러스터링+XY맵 | `market-research` | `02-clustering.md`, `03-positioning-map.md` 저장 |
| Manus 1 · 선호도+전략 (Gate 1 포함) | `market-research` + `concept-director` | `04-preference-strategy.md` + `manus-1-state.json` 저장 |
| Manus 2 · Visual DNA (Gate 2 선행) | `visual-generator` + `brainstormer` | `05-visual-dna.md` 저장 |
| Manus 2 · 6컨셉+매트릭스 (Gate 3 포함) | `brainstormer` | `06-concept-territories.md` 저장 |
| Manus 2 · Client×Mood | `critic` + `review-panel` | `07-client-mood-matrix.md` + `manus-2-state.json` 저장 |
| Runable 3 · Brand Board (Gate 4 포함) | `concept-director` | `08-brand-board.md` 저장 |
| Runable 3 · Value·Copy·Symbol | `brainstormer` + `critic` | `09-brand-system.md` 저장 |
| Runable 3 · CI/BI Audit | `market-research` | `10-competitor-cibi.md` + `runable-3-state.json` 저장 |
| 이미지 프롬프트 | `visual-generator` | **메인이 Higgsfield로 생성** → `images/` 저장 |
| 덱 조립 | — | `deck.html`(이미지 임베드) → 커밋·PR |

---

## 4개 Designer Lens Gate — 체크리스트

> 상세 지침: `designer-lens-gates.md`

### Gate 1 — Strategic POV Gate
**위치:** Manus 1 포지셔닝 전략 직후 (04-preference-strategy.md에 포함)

```md
✅ 관점 한 문장이 나왔는가?
✅ 경쟁사와 다른 믿음이 표현되었는가?
✅ 타깃이 반응할 감정이 정의되었는가?
```

### Gate 2 — Lens Translation Gate
**위치:** Manus 2 Visual DNA 추출 직전 (05-visual-dna.md 첫머리)

```md
✅ 핵심가치가 디자이너 렌즈로 번역되었는가?
✅ 색·타입·소재·움직임 증거가 있는가?
✅ Human Touch Proof가 있는가?
```

### Gate 3 — Living System Gate
**위치:** Manus 2 Concept Territories 직후 (06-concept-territories.md 말미)

```md
✅ 각 컨셉이 정적 이미지로만 끝나지 않는가?
✅ 모션·가변폰트·반응형·생성 규칙이 정의되었는가?
```

### Gate 4 — Human Touch & Risk Gate
**위치:** Runable 3 Brand Board 전 (08-brand-board.md 첫머리)

```md
✅ AI 생성 범위가 정의되었는가?
✅ 인간 흔적 레이어가 설계되었는가?
✅ 과감한 방향이 핵심가치와 정렬되었는가?
```

---

## Manus 1 Gate Checklist (종료 전 확인)

```md
[ ] 경쟁 브랜드가 30개 이상인가?
[ ] 직접·간접·감성 경쟁이 모두 포함되었는가?
[ ] 비주얼 트렌드 태그(T1~T8)가 클러스터에 붙었는가?
[ ] 포지셔닝 맵 축이 임의적이지 않은가?
[ ] Strategic POV Gate(Gate 1)가 통과되었는가? ← 필수
[ ] 비주얼 프롬프트에 Human Touch Layer가 있는가?
[ ] 출처 없는 수치를 단정하지 않았는가?
[ ] manus-1-state.json이 저장되었는가? ← 파일 확인
```

## Manus 2 Gate Checklist (종료 전 확인)

```md
[ ] manus-1-state.json이 존재하는가? ← 없으면 시작 불가
[ ] Lens Translation Gate(Gate 2)가 DNA 전에 완료되었는가? ← 필수
[ ] 6개 컨셉이 서로 다른 감각인가?
[ ] 각 컨셉이 포지셔닝 전략으로 회수되는가?
[ ] 각 컨셉에 모션·가변 규칙이 있는가?
[ ] Living System Gate(Gate 3)가 완료되었는가? ← 필수
[ ] Client×Mood Matrix 점수 근거가 명확한가?
[ ] Brutalist Framework 적용 여부가 판단되었는가?
[ ] manus-2-state.json이 저장되었는가? ← 파일 확인
```

## Runable 3 Gate Checklist (종료 전 확인)

```md
[ ] manus-1-state.json + manus-2-state.json 둘 다 존재하는가? ← 없으면 시작 불가
[ ] Human Touch & Risk Gate(Gate 4)가 통과되었는가? ← 필수
[ ] Brand Board에 Behavior System + Human Touch System이 있는가?
[ ] Value Cards에 시각 증거가 있는가?
[ ] Brand System Summary가 한 문장으로 말 되는가?
[ ] slide_generation_ready가 true인가?
[ ] Final Deck이 35~45장 기준인가?
[ ] 슬라이드당 Key Message가 1개인가?
[ ] 이미지가 Higgsfield로 실제 생성되었는가? ← 파일 확인
[ ] deck.html이 이미지 URL 임베드로 완성되었는가? ← 파일 확인
[ ] 커밋·PR이 완료되었는가? ← 파일 확인
```

---

## 인입 즉시 확인 항목 (첫 메시지에서)

브랜드 제안이 들어오면 메인 세션이 먼저 확인한다:

```md
1. 브랜드명 / 카테고리 / 제품·서비스 / 시장·국가
2. 목표 고객
3. 원하는 인상 vs 피해야 할 인상
4. 주요 경쟁사 (있으면)
5. 최종 산출물 (컨셉 덱 / 슬라이드 / HTML 쇼케이스 등)
```

정보 부족 시 → 00-brief.md 형식으로 확인 질문 발송 후 Manus 1 시작.

---

## 한 줄 요약

> **에이전트는 글, 메인은 이미지·파일.  
> Manus 1(자리) → Gate 1 → Manus 2(감각) → Gate 2·3 → Gate 4 → Runable 3(시스템+슬라이드).  
> 글만 받고 끝내면 절반만 한 것이다.**
