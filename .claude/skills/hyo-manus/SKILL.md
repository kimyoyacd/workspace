# HYO MANUS · 브랜드 제안 자동화 스킬

## 트리거
"hyo manus 시작", "브랜드 제안 자동화", "hyo manus 돌려줘", "/hyo-manus"

## 역할
브랜드 인테이크를 받아 HYO MANUS 1차 → 2차 → 3차를 순서대로 실행하고,
각 단계 완료 시 **HTML 체크포인트 파일**을 생성한다.
슬라이드는 3차 Brand System Summary의 `slide_generation_ready: true` 확인 후에만 만든다.

---

## 실행 원칙

1. **인테이크 확인 먼저** — 아래 필수 항목이 없으면 먼저 요청한다.
   ```
   브랜드명 / 카테고리 / 목표 고객 / 시장 / 가격대 / 브랜드 목표
   ```
2. **단계별 자동 진행** — 사용자가 "계속"하지 않아도 Gate 통과 시 다음 단계로 자동 진입.
3. **HTML 체크포인트** — 각 Gate 완료 시 HTML 파일을 `.claude/projects/` 에 저장.
4. **State 저장** — stage_1_state, stage_2_state JSON을 프로젝트 노트에 저장.
5. **슬라이드 금지 라인** — 1차·2차에서는 절대 Final Deck 생성 안 함.

---

## 자동화 흐름

```
인테이크 확인
    ↓
HYO MANUS 1차 실행
 ├ 경쟁사 30개 매트릭스
 ├ 클러스터링
 ├ 포지셔닝 맵
 ├ 선호도 분석
 ├ 화이트스페이스
 ├ 포지셔닝 전략
 └ BX 프롬프트 팩
    ↓
Gate 1 체크리스트 자동 확인
HTML 체크포인트 1 생성 → 저장
stage_1_state JSON 생성 → 저장
    ↓
HYO MANUS 2차 실행
 ├ Visual Identity DNA
 ├ 경쟁 비주얼 코드 맵
 ├ 6개 Concept Territories
 ├ Client × Mood Matrix
 ├ Brutalist Framework 판단
 └ Concept Shortlist 2~3개
    ↓
Gate 2 체크리스트 자동 확인
HTML 체크포인트 2 생성 → 저장
stage_2_state JSON 생성 → 저장
    ↓
HYO MANUS 3차 실행
 ├ Brand Board
 ├ Value Cards (3~5개)
 ├ Value Metrics
 ├ Value Keyword Map
 ├ Copy Headline System
 ├ Symbol Association Map
 └ Competitor CI/BI Audit
    ↓
Brand System Summary 생성
slide_generation_ready: true 확인
    ↓
Final Slide Deck HTML 생성 (35~45장)
HTML 최종본 저장
```

---

## HTML 체크포인트 생성 규칙

각 Gate 통과 후 아래 경로에 HTML을 생성한다:

```
.claude/projects/YYYYMM_[브랜드명]_hyo-manus.html
```

HTML은 이 스킬 폴더의 `html-template.md`에 정의된 구조를 따른다.

체크포인트 1 완료 후: Stage 1 섹션 채워진 HTML 저장
체크포인트 2 완료 후: Stage 1 + Stage 2 섹션 채워진 HTML 저장
최종본: 전체 3개 스테이지 + Final Deck 포함 HTML 저장

---

## Gate 자동 확인 방법

각 Gate 체크리스트를 스스로 확인하고 결과를 인라인으로 표시한다.

```
[Gate 1 자동 체크]
✅ 경쟁 브랜드 30개 이상
✅ 직접·간접·감성 경쟁 모두 포함
✅ 포지셔닝 맵 축 임의 아님
✅ 빈자리 설명 가능
✅ 포지셔닝 전략 한 문장
✅ 비주얼 프롬프트 전략 연결
✅ 출처 없는 수치 없음
→ Gate 1 통과 · 2차 자동 진입
```

---

## 참조 파일

- `.claude/library/brand-proposal/Stage1_Research_Positioning.md`
- `.claude/library/brand-proposal/Stage2_Visual_Identity_Moodboard.md`
- `.claude/library/brand-proposal/Stage3_Brand_System_Final_Deck.md`
- `.claude/skills/hyo-manus/html-template.md`
