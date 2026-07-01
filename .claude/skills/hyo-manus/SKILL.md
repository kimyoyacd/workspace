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
3. **HTML 체크포인트** — 각 Gate 완료 시 단계별 HTML 파일을 `.claude/projects/` 에 저장.
4. **State 저장** — stage_1_state, stage_2_state JSON을 프로젝트 노트에 저장.

---

## 자동화 흐름

```
인테이크 확인
    ↓
HYO MANUS 1차 실행
 ├ 경쟁사 30개 매트릭스
 ├ 클러스터링 → 카테고리 3개 도출
 │   └ 카테고리별: 이름·인사이트 축·레퍼런스 브랜드 8개+
 ├ 포지셔닝 맵 3안 → 1안 선정
 ├ 화이트스페이스 특정
 ├ 브랜드 인상키워드 5~7개 (포지셔닝 갭 기반)
 ├ 포지셔닝 전략 한 문장
 └ BX 프롬프트 팩
    ↓
Gate 1 체크리스트 자동 확인
 ✅ 카테고리 3개 + 레퍼런스 8개+ 확인
 ✅ 브랜드 인상키워드 5~7개 생성
 ✅ 카테고리 인사이트 축 정의
 ✅ 경쟁 브랜드 30개 이상
 ✅ 포지셔닝 맵 축 임의 아님
 ✅ 빈자리 설명 가능
 ✅ 출처 없는 수치 없음
HTML 체크포인트 1 생성 → 저장
stage_1_state JSON 생성 → 저장
    ↓
HYO MANUS 2차 실행
 ├ 브랜드 방향성 3열 흐름표
 │   └ 카테고리 A/B/C → 전략명 → 디자인 무드명
 ├ 브랜드 스토리 구조 (서사 아크: 기원·갈등·해소·약속)
 ├ 디자인 전략 3안 — 각 전략별 세트 산출:
 │   ├ 그래픽 모티프 · 형태
 │   ├ 타이포그래피 & 로고타입 구상
 │   ├ 컬러 팔레트 & 질감
 │   └ 이미지 무드보드 (전략당 1장)
 ├ Visual Identity DNA
 ├ 경쟁 비주얼 코드 맵
 ├ Client × Mood Matrix
 ├ Brutalist Framework 판단
 └ Concept Shortlist 2~3개
    ↓
Gate 2 체크리스트 자동 확인
 ✅ 브랜드 방향성 3열 흐름표 완성
 ✅ 브랜드 스토리 구조 작성
 ✅ 디자인 전략 3안 (모티프·타이포·컬러·질감) 완성
 ✅ 전략당 이미지 무드보드 1장
 ✅ Visual DNA 6렌즈 완성
 ✅ Client×Mood Matrix 채움
 ✅ 숏리스트 2~3개 선정
 ✅ stage_2_state JSON 생성
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

각 Gate 통과 후 단계별 HTML 파일을 아래 경로에 생성한다:

```
.claude/projects/YYYYMM_[브랜드명]_hyo-manus_research.html    ← CP1
.claude/projects/YYYYMM_[브랜드명]_hyo-manus_strategy.html    ← CP2
.claude/projects/YYYYMM_[브랜드명]_hyo-manus_system.html      ← Final A
.claude/projects/YYYYMM_[브랜드명]_hyo-manus_proposal.html    ← Final B
```

HTML은 이 스킬 폴더의 `html-template.md`에 정의된 구조를 따른다.

- **CP1** (Gate 1 통과 후): **리서치 파트 HTML** — 경쟁사 매트릭스, 포지셔닝 맵, 인상키워드, 전략 한 문장
- **CP2** (Gate 2 통과 후): **브랜드 전략 HTML** — 3열 흐름표, 브랜드 스토리, 디자인 전략 3안, Visual DNA
- **Final A** (Gate 3 통과 후): **전체 브랜드 시스템 HTML** — Brand Board, Value Cards, Copy Headline, CI/BI Audit
- **Final B** (Gate 3 통과 후): **제안 전체 HTML** — 3개 스테이지 통합 + 슬라이드 덱 (35~45장)

---

## Gate 자동 확인 방법

각 Gate 체크리스트를 스스로 확인하고 결과를 인라인으로 표시한다.

```
[Gate 1 자동 체크]
✅ 경쟁 브랜드 30개 이상
✅ 직접·간접·감성 경쟁 모두 포함
✅ 카테고리 3개 도출 + 레퍼런스 브랜드 8개+
✅ 카테고리 인사이트 축 정의 완료
✅ 브랜드 인상키워드 5~7개 생성
✅ 포지셔닝 맵 축 임의 아님
✅ 빈자리 설명 가능
✅ 포지셔닝 전략 한 문장
✅ 비주얼 프롬프트 전략 연결
✅ 출처 없는 수치 없음
→ Gate 1 통과 · 2차 자동 진입

[Gate 2 자동 체크]
✅ 브랜드 방향성 3열 흐름표 완성 (카테고리→전략→디자인 무드)
✅ 브랜드 스토리 구조 작성
✅ 디자인 전략 3안 완성 (모티프·타이포·컬러·질감)
✅ 전략당 이미지 무드보드 1장
✅ Visual DNA 6렌즈 완성
✅ Client×Mood Matrix 채움
✅ 숏리스트 2~3개 선정
✅ 경쟁 비주얼 코드 맵 완성
✅ stage_2_state JSON 생성
→ Gate 2 통과 · 3차 자동 진입
```

---

## 참조 파일

- `.claude/library/brand-proposal/Stage1_Research_Positioning.md`
- `.claude/library/brand-proposal/Stage2_Visual_Identity_Moodboard.md`
- `.claude/library/brand-proposal/Stage3_Brand_System_Final_Deck.md`
- `.claude/skills/hyo-manus/html-template.md`
