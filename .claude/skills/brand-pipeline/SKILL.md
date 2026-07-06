# 브랜드 제안 파이프라인 스킬 (Brand Pipeline)

목표: 브랜드 제안을 Manus 1 → Manus 2 → Runable 3 순서로 누락 없이 진행한다.
슬라이드는 Runable 3에서만, slide_generation_ready=true일 때만 생성.

## 절대 규칙
- 각 단계의 Gate Checklist를 통과해야만 다음 단계 시작.
- 출처 없는 수치·단정은 어느 단계에서도 본문에 넣지 않는다.
- 최종 견적가·마진·계약·외부 발송 OK는 실장님 직접 결정.

## 진행 흐름

### Phase 0. 브랜드 정보 수집
부족하면 먼저 요청:
브랜드명 / 카테고리 / 제품·서비스 / 시장·국가 / 목표 고객 / 가격대 / 브랜드 목표 / 주요 경쟁사 / 원하는 인상 / 피해야 할 인상 / 최종 산출물

---

### Phase 1. Manus 1 — 경쟁 리서치·포지셔닝·BX 비주얼 프롬프트

**진행 순서:**

**Step 1. Project Intake Summary** — 핵심 과제와 리서치 범위 정의. 전략·슬라이드 금지.

**Step 2. 경쟁 브랜드 30개 리서치 매트릭스**
국내 15 / 해외 15. 각 브랜드: 브랜드명 / 국가 / 카테고리 / 가격대 / 타깃 / 핵심 메시지 / 포지셔닝 / 시각 언어 / 패키지 / 컬러·소재 / 유통 / 강점 / 약점 / 출처 / Source Tier(1~4)
비주얼 트렌드 태그 추가: T1 Maximal Color · T2 Expressive Type · T3 Motion/3D · T4 Nostalgia/Craft · T5 Brutalism · T6 AI×Human Touch · T7 Clean/Apothecary · T8 Game/Cinematic

**Step 3. 경쟁 브랜드 클러스터링** — 감성·가격·시각언어·타깃 기준. 클러스터명 옆에 트렌드 태그 병기.

**Step 4. 포지셔닝 맵 축 후보 3안 + 추천 1안** — 우리 브랜드 빈자리 설명.

**Step 5. 선호도 분석** — 타깃 선택/회피 기준 / 선호 시각언어 / 구매·공유 트리거 / 전략적 시사점 3가지.
헤리티지 보존 vs 파괴 스펙트럼: 지킬 것과 바꿀 것 분리 표기.

**Step 6. Market Gap + Positioning Strategy Draft**
한 문장 포지셔닝 / 브랜드 약속 / 전략 키워드 10→5→3개.

**★ Strategic POV Gate (통과 필수)**
```
관점 한 문장:
이 관점이 필요한 이유:
경쟁사와 다른 믿음:
타깃이 반응할 감정:
```

**Step 7. BX / Package Visual Prompt Pack**
Role&Objective / Layout&Geometry / Environment&Lighting / Physics&Blending / Negative Constraints.
Human Touch Layer 포함 (AI 이미지가 과도하게 매끈해지지 않도록 불완전성·물성·손맛 설계).

**Gate 1 Checklist:**
- [ ] 경쟁 브랜드 30개 이상, Tier 1~2 출처 포함
- [ ] 포지셔닝 맵 축이 빈자리를 설명하는가
- [ ] Strategic POV Gate 통과했는가
- [ ] 비주얼 프롬프트에 Human Touch Layer 포함했는가

산출물: `manus_1_state` (project_intake / competitor_30_matrix / competitor_clusters / positioning_map_axes / preference_analysis / market_gap / positioning_strategy / product_visual_prompt_pack)

---

### Phase 2. Manus 2 — 비주얼 아이덴티티 추출 + 컨셉·무드보드 발산

manus_1_state 없으면 시작하지 않는다.

**★ Lens Translation Gate (통과 필수)**
```
Core Value:
해석 렌즈:
Visual Proof:
Motion/Behavior Proof:
Human Touch Proof:
```
통과 후 8개 렌즈로 확장: Form / Color / Material / Typography / Photography / Composition / Symbol / Motion·Scene
각 렌즈마다: 권장 방향 / 피해야 할 방향.

**Blanding 탈출 진단** — 경쟁사 동질화 지점 포착, 피해야 할 코드 목록화.

**6개 Concept Territories 발산**
기본 6개: Curated Chaos / Immersive Worlds / Street Pulse / Cycle of Scenes / Raw Meets Refined / Living Archive
각 컨셉마다: Core Idea / Mood / Color / Material / Typography / Photography / Package Direction / Risk / Strategy Fit Score(/10)

**★ Living System Gate (통과 필수)**
```
Static Identity:
Motion Behavior:
Responsive Rule:
Variable Type Rule:
Generative Rule:
```
정적 무드보드로 끝나는 컨셉은 보강하거나 제외.

**Client×Mood Matrix** — 6개 컨셉 × 6개 기준(Brand Fit/Target Fit/Differentiation/Scalability/Feasibility/Risk) 각 /5점.
Risk Alignment 체크: 화제성만 있고 브랜드 가치와 어긋나는 방향 걸러내기.

**Concept Shortlist 2~3개**
추천 1(안전) / 추천 2(차별화) / 옵션 3(실험적).
각 컨셉: 한 줄 정의 / 선택 이유 / 전략 연결 / 비주얼 방향 / 패키지 방향 / 카피 방향 / 리스크 / 보완 장치.

**Gate 2 Checklist:**
- [ ] Lens Translation Gate 통과했는가
- [ ] 6개 컨셉이 서로 다른 감각인가
- [ ] Living System Gate 통과했는가
- [ ] 추천 2~3개 선정했는가

산출물: `manus_2_state`

---

### Phase 3. Runable 3 — 브랜드 시스템화 + 최종 슬라이드 덱

manus_1_state + manus_2_state 모두 없으면 시작하지 않는다.

**브랜드 시스템화 산출물:**

Brand Board (7섹션): Brand Essence / Positioning / Value System / Visual System
Behavior System: 이 브랜드는 어떻게 움직이는가.
Human Touch System: AI Use Scope / Human Touch Layer / Imperfection Rule / Heritage Preserve / Heritage Transform
Verbal System / Package·BX System / Do·Don't

Value Cards (3~5개): Value Name / Definition / Why It Matters / Behavior Principle / Visual Expression / 시각 증거·행동 증거 / Copy Expression / Package Expression / Metric / Risk if Misused

Value Metrics: Recognition/Preference/Consistency/Distinctiveness/Conversion/Reuse 지표.
Copy Headline System: Positioning/Value/Tension/Visual/Package/Action 유형별 헤드라인 각 3개. 최종 추천 5개.
Competitor CI/BI Audit: 주요 경쟁 브랜드 Logo Type/Color/Typography/Symbol/Package/Image Tone/Copy Tone.

**★ Brand System Summary + slide_generation_ready 판단**
```
브랜드 한 줄 정의 / 포지셔닝 전략 / 브랜드 약속 / 핵심 가치 3개 / 전략 키워드 3개
추천 컨셉 방향 / 시각 DNA / 패키지 원칙 / 카피 톤 / 기호 체계 / 경쟁사 대비 차별점
최종 슬라이드에서 반드시 보여야 할 메시지 5개
slide_generation_ready: true / false
```

**★ Human Touch & Risk Gate (slide_generation_ready 판단 전)**
AI Use Scope / Human Touch Layer / Imperfection Rule / Heritage Preserve/Transform / Risk Alignment

**Gate 3 Checklist:**
- [ ] Behavior System + Human Touch System 포함했는가
- [ ] Value Cards에 시각·행동 증거 포함했는가
- [ ] Human Touch & Risk Gate 통과했는가
- [ ] slide_generation_ready 명확히 판단했는가

**Final Slide Deck (slide_generation_ready=true일 때만)**
35~45장 구조: 00 Cover / 01 Executive Summary / 02 Market & Competitor Scan / 03 Positioning Map / 04 Preference Analysis / 05 Positioning Strategy / 06 Visual Identity Extraction / 07 Concept Territories / 08 Brutalist Framework / 09 BX/Package Visual System / 10 Brand System / 11 Copy & Symbol System / 12 Final Identity Direction

각 슬라이드:
```
## Slide [번호]. [제목]
Key Message: (1장 = 1메시지)
Content:
Evidence / Source:
Visual Direction:
Figma Production Note:
Speaker Note:
```

마지막:
```
## Director Final Check
1. 디렉터가 결정해야 하는 항목
2. 슬라이드화 전 더 필요한 자료
3. 삭제해도 되는 슬라이드
4. 강화해야 할 슬라이드
5. 리스크가 있는 주장
6. 최종 추천 방향
```

## 현재 상태 추적 템플릿
```
■ Brand Pipeline 진행 현황
브랜드: [브랜드명]
─────────────────────────────
Phase 1. Manus 1      ○ 대기 / ◑ 진행중 / ● 완료 | Gate 1: [ ]통과
Phase 2. Manus 2      ○ 대기 / ◑ 진행중 / ● 완료 | Gate 2: [ ]통과
Phase 3. Runable 3    ○ 대기 / ◑ 진행중 / ● 완료 | Gate 3: [ ]통과
  └ slide_generation_ready: ?
Final Deck:           ○ 대기 / ◑ 진행중 / ● 완료
─────────────────────────────
Director Decision Needed: [항목 나열]
```
