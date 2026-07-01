# 효정 브랜드 제안 프로세스 · 사용 가이드

> 1차 리서치 → 2차 비주얼 → 3차 브랜드 시스템 → Final Deck
> 슬라이드는 3차 완료 후에만 생성한다.

---

## 파일 구성

```
.claude/library/brand-proposal/
├── Stage1_Research_Positioning.md      1차: 경쟁사 30개 리서치 → 포지셔닝 전략
├── Stage2_Visual_Identity_Moodboard.md 2차: 비주얼 DNA → 6개 컨셉 → 무드보드
├── Stage3_Brand_System_Final_Deck.md   3차: 브랜드 시스템화 → 최종 슬라이드 덱
└── README_Usage.md                     이 파일
```

---

## 새 프로젝트 시작하는 법

### Step 1 · 브랜드 인테이크 입력

새 대화에서 아래 템플릿을 붙여넣고 빈 칸을 채운다.

```
브랜드명:
카테고리:
제품/서비스:
시장/국가:
목표 고객:
가격대:
브랜드 목표:
주요 경쟁사:
원하는 인상:
피해야 할 인상:
최종 산출물:
참고 링크/자료:
```

정보가 부족하면 AI가 먼저 질문한다.

---

### Step 2 · 1차 실행 (리서치 & 포지셔닝)

```
1차 브랜드 리서치를 시작합니다.

[인테이크 내용 붙여넣기]
```

**1차 산출물 (슬라이드 생성 금지)**
- 경쟁사 30개 리서치 매트릭스
- 클러스터링 (5개 내외 그룹)
- 포지셔닝 맵 축 3안 → 추천 1안
- 선호도 분석
- 시장 빈자리 / 진입 기회
- 포지셔닝 전략 초안
- BX/패키지 비주얼 프롬프트 팩
- `stage_1_state` (JSON)

**Gate 1 통과 후 → 2차 진입**

---

### Step 3 · 2차 실행 (비주얼 아이덴티티 & 컨셉 발산)

```
2차 단계로 넘어갑니다.
아직 최종 슬라이드는 만들지 마세요.

[stage_1_state 붙여넣기]
```

**2차 산출물 (슬라이드 생성 금지)**
- Visual Identity DNA
- 경쟁 비주얼 코드 맵
- 6개 컨셉 테리토리
- Client × Mood Matrix
- Brutalist Framework 적용 판단
- 컨셉 숏리스트 2~3개
- `stage_2_state` (JSON)

**Gate 2 통과 후 → 3차 진입**

---

### Step 4 · 3차 실행 (브랜드 시스템 + 최종 슬라이드)

```
3차 단계로 넘어갑니다.
브랜드 시스템화를 먼저 완료한 뒤 슬라이드를 생성합니다.

[stage_1_state 붙여넣기]
[stage_2_state 붙여넣기]
```

**3차 산출물**
- Brand Board (브랜드 기준판)
- Value Cards (3~5개)
- Value Metrics
- Value Keyword Map
- Copy Headline System
- Symbol Association Map
- Competitor CI/BI Audit
- Brand System Summary (`slide_generation_ready: true` 확인)
- **Final Slide Deck (35~45장)** ← `slide_generation_ready: true`일 때만

---

## 트리거 명령어 (Claude에게 말하는 방법)

| 하고 싶은 것 | 명령어 |
|-------------|--------|
| 처음 시작 | "브랜드 제안 1차 시작해줘" |
| 2차로 넘기기 | "1차 완료, 2차로 넘어가줘 [state 첨부]" |
| 3차로 넘기기 | "2차 완료, 3차로 넘어가줘 [state 첨부]" |
| 슬라이드 생성 | "3차 완료됐어, Final Deck 만들어줘" |
| 특정 파트 보강 | "포지셔닝 맵 다시 잡아줘" |
| 경쟁사 추가 | "경쟁사 5개 더 추가해줘" |
| 컨셉 변경 | "Living Archive 방향으로 다시 발산해줘" |

---

## 핵심 운영 규칙

```
1차와 2차에서는 절대 최종 슬라이드를 만들지 않는다.
3차의 Brand System Summary에서 slide_generation_ready: true가 확인된 후에만 Final Deck을 생성한다.
각 단계의 state(JSON)를 반드시 저장해두고 다음 단계로 전달한다.
```

---

## 프로젝트 파일 저장 위치

각 클라이언트별 결과물은 `.claude/projects/` 아래에 저장한다.

```
.claude/projects/
└── 202607_LUNE_브랜드제안.md   ← 형식: YYYYMM_프로젝트명.md
```

---

## 자주 쓰는 상황별 팁

**클라이언트가 경쟁사를 모를 때**
→ "카테고리와 가격대만 알려주면 경쟁사 30개 직접 리서치할게"라고 요청

**포지셔닝이 여러 안으로 갈릴 때**
→ "포지셔닝 맵 축 3안을 비교해서 하나만 골라줘"

**컨셉을 바꾸고 싶을 때**
→ 2차를 다시 실행 (1차 state는 그대로 재사용 가능)

**슬라이드 장수 조정**
→ "25장 기준으로 핵심만 압축해줘"

**특정 섹션만 재생성**
→ "포지셔닝 전략 섹션만 다시 써줘"
