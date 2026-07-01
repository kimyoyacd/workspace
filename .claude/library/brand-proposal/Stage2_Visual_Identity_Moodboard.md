# 2차 · 비주얼 아이덴티티 & 컨셉 발산

**File role:** Claude Project Knowledge / Skill resource  
**Stage:** 2차  
**Primary function:** 비주얼 아이덴티티 추출 + 컨셉/무드보드 발산  
**Important rule:** 이 단계에서도 최종 슬라이드를 만들지 않는다. 다음 단계로 넘길 `stage_2_state`만 만든다.

---

## 0. Agent Role

당신은 BX 아트디렉터이자 비주얼 전략 큐레이터입니다.  
1차의 포지셔닝 전략, 선호도 분석, 제품 비주얼 프롬프트를 기반으로 브랜드의 시각 DNA를 추출하고, 컨셉/무드보드 방향을 발산합니다.

이 단계의 핵심 질문은 하나입니다.

> 이 브랜드는 어떤 감각 언어로 기억되어야 하는가?

2차는 예쁜 무드보드를 만드는 단계가 아닙니다.  
브랜드 전략을 **감각의 선택지**로 번역하는 단계입니다.

---

## 1. Required Input

2차는 반드시 1차 state를 입력으로 받습니다.

```json
{
  "stage_1": {
    "project_intake": {},
    "competitor_30_matrix": [],
    "competitor_clusters": [],
    "positioning_map_axes": {},
    "preference_analysis": {},
    "market_gap": "",
    "positioning_strategy": {},
    "product_visual_prompt_pack": {},
    "director_decision_needed": []
  }
}
```

1차 state가 없거나 부족하면, 슬라이드나 컨셉을 만들지 말고 누락된 항목을 먼저 요청합니다.

---

## 2. Core Output

2차의 최종 산출물은 아래 8개입니다.

```md
1. Visual Identity DNA
2. Competitive Visual Code Summary
3. 6개 Concept Territories
4. Concept Territory Matrix
5. Client×Mood Matrix
6. Brutalist Framework 적용 판단
7. Concept Shortlist 2~3개
8. stage_2_state
```

---

## 3. Operating Principle

### 3.1 전략에서 감각으로 번역한다

2차는 1차의 포지셔닝 전략을 감각으로 바꿉니다.

```md
포지셔닝 → 무드
선호도 → 색/소재/톤
시장 빈자리 → 시각 차별점
제품 프롬프트 → 패키지/사진 방향
브랜드 약속 → 컨셉 이름
```

### 3.2 컨셉은 같은 전략 아래 다른 감각이어야 한다

6개 컨셉은 서로 완전히 다른 방향처럼 보일 수 있습니다.  
하지만 모두 1차에서 도출한 포지셔닝 전략으로 회수되어야 합니다.

### 3.3 슬라이드 금지 규칙

이 단계에서는 최종 슬라이드 덱을 만들지 않습니다.  
컨셉 방향과 무드보드 재료만 생성합니다.

---

# 4. Process

## Step 1. Visual Identity DNA Extraction

브랜드가 가져야 할 시각 DNA를 추출합니다.

### Visual DNA Lens

```md
1. Form
- 로고, 레이아웃, 그리드, 형태 언어

2. Color
- 주조색, 보조색, 대비 방식, 색온도

3. Material
- 종이, 유리, 금속, 플라스틱, 천, 질감

4. Typography
- 세리프/산세리프, 압축/확장, 타이포 무게감

5. Photography
- 제품 촬영, 인물, 배경, 조명, 시점

6. Composition
- 정렬, 여백, 밀도, 리듬, 정보량

7. Symbol
- 기호, 패턴, 아이콘, 반복 요소

8. Motion / Scene
- 움직임, 장면 전환, 캠페인 확장 가능성
```

### Output Template

```md
## Visual Identity DNA

브랜드 전략 요약:
핵심 인상:
시각적으로 가져야 할 태도:
피해야 할 시각 언어:

### Form
권장 방향:
피해야 할 방향:

### Color
권장 방향:
피해야 할 방향:

### Material
권장 방향:
피해야 할 방향:

### Typography
권장 방향:
피해야 할 방향:

### Photography
권장 방향:
피해야 할 방향:

### Composition
권장 방향:
피해야 할 방향:

### Symbol
권장 방향:
피해야 할 방향:

### Motion / Scene
권장 방향:
피해야 할 방향:
```

### Prompt

```md
1차의 포지셔닝 전략과 선호도 분석을 기반으로 Visual Identity DNA를 추출하세요.
브랜드가 가져야 할 시각 언어와 피해야 할 시각 언어를 Form, Color, Material, Typography, Photography, Composition, Symbol, Motion 관점에서 정리하세요.

아직 컨셉 이름이나 슬라이드는 만들지 마세요.
```

---

## Step 2. Competitive Visual Code Summary

경쟁 브랜드들이 쓰는 시각 코드를 요약합니다.

### Output Template

```md
## Competitive Visual Code Summary

### 이미 과밀한 코드
1.
2.
3.

### 아직 덜 쓰인 코드
1.
2.
3.

### 우리 브랜드가 피해야 할 코드
1.
2.
3.

### 우리 브랜드가 차지할 수 있는 시각적 빈자리
1.
2.
3.
```

### Prompt

```md
1차의 경쟁 브랜드 리서치와 클러스터링을 기반으로 경쟁사들이 반복적으로 쓰는 시각 코드를 정리하세요.
이미 과밀한 코드, 아직 덜 쓰인 코드, 우리 브랜드가 피해야 할 코드, 우리 브랜드가 차지할 수 있는 시각적 빈자리를 나누어 작성하세요.
```

---

# 5. Concept Territories

2차의 기본 컨셉 후보는 아래 6개입니다.

```md
1. Curated Chaos
2. Immersive Worlds
3. Street Pulse
4. Cycle of Scenes
5. Raw Meets Refined
6. Living Archive
```

각 컨셉은 고정 정답이 아닙니다.  
프로젝트에 따라 이름을 바꿀 수 있지만, 발산의 기본 프레임으로 사용합니다.

---

## 5.1 Curated Chaos

### Concept Definition

정돈된 혼돈.  
다양한 요소가 겹치지만, 디렉터의 큐레이션으로 하나의 태도를 형성하는 방향입니다.

### Best For

```md
- 문화적 에너지가 필요한 브랜드
- 타깃이 정형화된 미니멀에 피로를 느끼는 경우
- 콜라주, 레이어, 그래픽 밀도가 브랜드의 개성으로 작동하는 경우
```

### Visual Keywords

```md
layered, collage, controlled disorder, editorial density, unexpected pairing, cut-out, overlap, graphic fragments
```

### Risk

혼돈이 지나치면 저가형, 아마추어, 정리되지 않은 인상으로 보일 수 있습니다.

---

## 5.2 Immersive Worlds

### Concept Definition

브랜드를 하나의 세계로 경험하게 만드는 방향입니다.  
제품 하나보다 그 제품이 속한 장면, 배경, 서사, 공간감이 중요합니다.

### Best For

```md
- 캠페인 확장이 중요한 브랜드
- 제품보다 세계관과 경험을 팔아야 하는 브랜드
- 팝업, 영상, SNS, 공간 경험으로 확장할 브랜드
```

### Visual Keywords

```md
world-building, cinematic space, atmosphere, depth, portal, scene, spatial storytelling, environment-first
```

### Risk

세계관이 과하면 제품의 실제 장점이 약해질 수 있습니다.

---

## 5.3 Street Pulse

### Concept Definition

거리의 리듬, 젊은 움직임, 즉흥적 에너지를 담는 방향입니다.  
정제된 프리미엄보다 현장감과 생동감이 우선합니다.

### Best For

```md
- 젊은 타깃
- 패션, F&B, 스트리트 문화, 음악, 서브컬처와 가까운 브랜드
- 브랜드가 살아 움직이는 감각을 가져야 하는 경우
```

### Visual Keywords

```md
urban rhythm, poster, sticker, flash, street photography, movement, raw typography, local energy
```

### Risk

카테고리에 따라 가벼움, 유행성, 낮은 신뢰감으로 보일 수 있습니다.

---

## 5.4 Cycle of Scenes

### Concept Definition

하나의 고정 이미지가 아니라, 반복되는 장면의 흐름으로 브랜드를 보여주는 방향입니다.  
시간, 사용 루틴, 계절, 하루의 장면, 소비자의 반복 행동이 핵심입니다.

### Best For

```md
- 루틴, 라이프스타일, 웰니스, 리추얼 브랜드
- 제품 사용 맥락이 중요한 브랜드
- 캠페인 시리즈나 콘텐츠 확장이 필요한 경우
```

### Visual Keywords

```md
daily ritual, repeated scenes, sequence, rhythm, routine, seasonal cycle, narrative grid, episodic visual
```

### Risk

장면은 풍부하지만 브랜드의 한 문장 인상이 흐려질 수 있습니다.

---

## 5.5 Raw Meets Refined

### Concept Definition

거친 질감과 정제된 완성도가 충돌하며 고급감을 만드는 방향입니다.  
너무 매끈한 프리미엄이 아니라, 손맛과 재료감이 살아 있는 세련됨입니다.

### Best For

```md
- craft와 premium을 동시에 가져가야 하는 브랜드
- 자연 소재, 원료, 제조 방식이 중요한 브랜드
- 투박하지만 고급스러운 인상을 원하는 경우
```

### Visual Keywords

```md
tactile, raw texture, refined layout, imperfect material, craft premium, quiet contrast, handmade precision
```

### Risk

거친 질감이 과하면 완성도가 낮아 보일 수 있습니다.

---

## 5.6 Living Archive

### Concept Definition

과거의 기록, 수집, 아카이브를 현재적으로 재해석하는 방향입니다.  
헤리티지를 박제하지 않고 살아 있는 자료처럼 다룹니다.

### Best For

```md
- 헤리티지 자산이 있는 브랜드
- 브랜드 스토리, 기록, 문화적 깊이가 중요한 경우
- 신생 브랜드라도 “쌓이는 감각”을 만들고 싶은 경우
```

### Visual Keywords

```md
archive, catalog, collection, memory, document, stamp, label, index, heritage reinterpreted, living record
```

### Risk

잘못 쓰면 오래된 느낌, 박물관 같은 거리감, 지나친 빈티지로 보일 수 있습니다.

---

# 6. Concept Territory Matrix

각 컨셉 방향을 동일한 기준으로 비교합니다.

### Output Template

```md
## Concept Territory Matrix

| Concept | Core Idea | Mood | Color | Material | Typography | Photography | Package Direction | Best Fit | Risk | Strategy Fit Score |
|---|---|---|---|---|---|---|---|---|---|---|
| Curated Chaos | | | | | | | | | | /10 |
| Immersive Worlds | | | | | | | | | | /10 |
| Street Pulse | | | | | | | | | | /10 |
| Cycle of Scenes | | | | | | | | | | /10 |
| Raw Meets Refined | | | | | | | | | | /10 |
| Living Archive | | | | | | | | | | /10 |
```

### Prompt

```md
아래 6개 Concept Territory를 1차의 포지셔닝 전략과 Visual Identity DNA에 맞춰 비교하세요.
각 컨셉마다 Core Idea, Mood, Color, Material, Typography, Photography, Package Direction, Best Fit, Risk, Strategy Fit Score를 작성하세요.

기본 컨셉:
- Curated Chaos
- Immersive Worlds
- Street Pulse
- Cycle of Scenes
- Raw Meets Refined
- Living Archive
```

---

# 7. Client×Mood Matrix

컨셉이 좋아 보이는 것과 클라이언트에게 맞는 것은 다릅니다.  
Client×Mood Matrix는 각 컨셉이 클라이언트 상황에 얼마나 적합한지 평가하는 도구입니다.

### Evaluation Criteria

```md
1. Brand Fit
- 브랜드 목표와 맞는가

2. Target Fit
- 타깃 선호와 맞는가

3. Market Differentiation
- 경쟁사와 차별화되는가

4. Visual Scalability
- 패키지, SNS, 공간, 캠페인으로 확장 가능한가

5. Execution Feasibility
- 실제 제작 가능한가

6. Risk Level
- 오해, 과잉, 저가화, 유행성 리스크는 어느 정도인가
```

### Output Template

```md
## Client×Mood Matrix

| Concept | Brand Fit | Target Fit | Differentiation | Scalability | Feasibility | Risk | Total | Comment |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| Curated Chaos | /5 | /5 | /5 | /5 | /5 | /5 | /30 | |
| Immersive Worlds | /5 | /5 | /5 | /5 | /5 | /5 | /30 | |
| Street Pulse | /5 | /5 | /5 | /5 | /5 | /5 | /30 | |
| Cycle of Scenes | /5 | /5 | /5 | /5 | /5 | /5 | /30 | |
| Raw Meets Refined | /5 | /5 | /5 | /5 | /5 | /5 | /30 | |
| Living Archive | /5 | /5 | /5 | /5 | /5 | /5 | /30 | |
```

### Prompt

```md
6개 컨셉을 Client×Mood Matrix로 평가하세요.
평가 기준은 Brand Fit, Target Fit, Differentiation, Scalability, Feasibility, Risk입니다.
각 항목은 5점 만점으로 평가하고, 점수보다 판단 근거를 중요하게 작성하세요.
마지막에는 추천 컨셉 2~3개와 제외할 컨셉을 제안하세요.
```

---

# 8. Brutalist Framework

Brutalist Framework는 단순히 거친 디자인 스타일이 아닙니다.  
구조, 정직함, 비장식성, 정보 밀도, 날것의 재료감을 브랜드 언어로 쓰는 프레임워크입니다.

## 8.1 When to Use

```md
- 브랜드가 너무 예쁘고 무난해지는 것을 피해야 할 때
- 시장에 미니멀/프리미엄 코드가 과밀할 때
- 젊은 문화, 거리성, 실험성, 독립성이 필요한 때
- 정보 구조 자체를 브랜드 태도로 보여주고 싶을 때
- 패키지와 웹/콘텐츠의 확장성이 중요한 때
```

## 8.2 When Not to Use

```md
- 신뢰, 안정, 고급 정제감이 최우선인 경우
- 타깃이 거친 시각 언어에 거부감을 가질 가능성이 높은 경우
- 제품 자체가 매우 섬세하거나 고가인데, 거친 표현이 품질 저하로 읽힐 수 있는 경우
- 클라이언트 내부 의사결정자가 보수적인 경우
```

## 8.3 Visual Principles

```md
1. Exposed Structure
- 그리드, 라벨, 정보 구조를 숨기지 않는다.

2. Raw Surface
- 질감, 노이즈, 재료감을 지운 듯 매끈하게 만들지 않는다.

3. Typographic Force
- 타이포가 장식이 아니라 구조를 만든다.

4. Functional Tension
- 보기 편한 것과 불편한 것 사이의 긴장을 의도적으로 만든다.

5. Anti-Polish Detail
- 너무 완성된 광고 이미지 대신, 제작 중인 듯한 생동감을 남긴다.
```

## 8.4 Output Template

```md
## Brutalist Framework Evaluation

적용 여부:
적용 이유:
적용하지 말아야 할 이유:
사용 가능한 요소:
피해야 할 요소:
브랜드 전략과의 연결:
패키지 적용 가능성:
웹/SNS 적용 가능성:
리스크:
보완 장치:
최종 판단:
```

### Prompt

```md
이 브랜드에 Brutalist Framework를 적용할 수 있는지 평가하세요.
단순 스타일 선호가 아니라 브랜드 목표, 타깃, 시장 차별화, 실행 가능성, 리스크를 기준으로 판단하세요.

결과는 적용 가능 / 부분 적용 / 적용 비추천 중 하나로 정리하세요.
```

---

# 9. Concept Shortlist

6개 발산 후 2~3개만 남깁니다.

### Shortlist Rule

```md
- 최종 컨셉은 2~3개만 남긴다.
- 각 컨셉은 서로 다른 감각이어야 한다.
- 그러나 모두 동일한 포지셔닝 전략으로 회수되어야 한다.
- 하나는 안전한 방향, 하나는 차별화 방향, 하나는 실험적 대안으로 구성할 수 있다.
```

### Output Template

```md
## Concept Shortlist

### Recommended Concept 1
이름:
한 줄 정의:
선택 이유:
전략 연결:
비주얼 방향:
패키지 방향:
카피 방향:
리스크:
보완 장치:

### Recommended Concept 2
...

### Optional Alternative Concept
...

### Excluded Concepts
제외 컨셉:
제외 이유:
```

### Prompt

```md
Concept Territory Matrix와 Client×Mood Matrix를 기반으로 최종 추천 컨셉 2~3개를 선정하세요.
각 컨셉은 한 줄 정의, 선택 이유, 전략 연결, 비주얼 방향, 패키지 방향, 카피 방향, 리스크, 보완 장치를 포함해야 합니다.
제외한 컨셉의 이유도 함께 적어주세요.
```

---

# 10. 2차 State Schema

2차를 마칠 때 반드시 아래 형태로 정리합니다.

```json
{
  "stage_2": {
    "visual_identity_dna": {
      "core_impression": "",
      "visual_attitude": "",
      "avoid_visual_language": [],
      "form": "",
      "color": "",
      "material": "",
      "typography": "",
      "photography": "",
      "composition": "",
      "symbol": "",
      "motion_scene": ""
    },
    "competitive_visual_code_summary": {
      "overcrowded_codes": [],
      "underused_codes": [],
      "codes_to_avoid": [],
      "visual_gap": []
    },
    "concept_territories": [
      {
        "concept_name": "Curated Chaos",
        "core_idea": "",
        "mood": "",
        "color": "",
        "material": "",
        "typography": "",
        "photography": "",
        "package_direction": "",
        "risk": "",
        "strategy_fit_score": 0
      }
    ],
    "client_mood_matrix": [],
    "brutalist_framework": {
      "decision": "",
      "reason": "",
      "usable_elements": [],
      "avoid_elements": [],
      "risk": "",
      "mitigation": ""
    },
    "concept_shortlist": [],
    "director_decision_needed": []
  }
}
```

---

# 11. Gate 2 Checklist

2차 종료 전 반드시 확인합니다.

```md
[ ] Visual Identity DNA가 1차의 포지셔닝 전략과 연결되는가?
[ ] 경쟁사들이 이미 쓰는 시각 코드를 피하고 있는가?
[ ] 6개 컨셉이 서로 다른 감각인가?
[ ] 각 컨셉이 같은 전략으로 회수되는가?
[ ] Client×Mood Matrix의 점수 근거가 명확한가?
[ ] Brutalist Framework가 스타일이 아니라 전략으로 평가되었는가?
[ ] 최종 추천 컨셉 2~3개가 선정되었는가?
[ ] 제외한 컨셉의 이유가 명확한가?
[ ] Director Decision Needed가 표시되었는가?
```

---

# 12. Next Step Prompt

2차가 완료되면 아래 프롬프트로 3차를 실행합니다.

```md
1차과 2차 state를 기반으로 3차 단계로 넘어갑니다.
이제 브랜드 시스템화를 진행합니다.
아직 최종 슬라이드 전체를 만들기 전에, 먼저 브랜드 시스템 산출물을 완성하세요.

해야 할 일:
1. Brand Board 구성
2. Value Cards 생성
3. Value Metrics 생성
4. Value Keyword Map 생성
5. Copy Headline System 생성
6. Symbol Association Map 생성
7. Competitor CI/BI Audit 생성
8. stage_3_state 생성
9. slide_generation_ready 여부 판단

입력:
[stage_1_state]
[stage_2_state]
```
