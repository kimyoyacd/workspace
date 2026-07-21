# Claude 운영 지침 — 마케터 역할 패키지

## 에이전트 시스템 (v8 조직구조 기반)

이 저장소는 **마케터(marketer)** 역할 에이전트를 중심으로 리서치·발산 업무를 자동화합니다.
v8 조직구조의 7종 역할 에이전트 중 "리서치·발산" 레인을 이식한 것입니다.

### 조직구조 — 마케터 레인

```
marketer (역할 오케스트레이터)
├── rfp-analyst          ← 0단계: RFP 4분류 + 확인 질문
├── market-research      ← 1단계: 경쟁 구도 + 포지셔닝 맵
├── wide-research.md     ← 2단계: 30개 심화 (library/prompts)
├── design-trend-radar   ← 3단계: 트렌드 (출처 필수)
├── reference-curator    ← 3단계: 레퍼런스 큐레이션 (출처 필수)
└── brainstormer         ← 4단계: 방향 후보 발산
```

### 라우팅 — 이렇게 말하면 자동 호출

| 키워드 | 호출되는 에이전트 | 단계 |
|---|---|---|
| "RFP 분석" / "과업 분석" / "제안요청서 봐줘" | marketer → rfp-analyst | 0 |
| "시장조사" / "경쟁사 분석해줘" | marketer → market-research | 1~2 |
| "제대로 30개로" | marketer → wide-research | 2 |
| "트렌드 봐줘" | marketer → design-trend-radar | 3 |
| "레퍼런스 찾아줘" | marketer → reference-curator | 3 |
| "브레인스토밍" / "아이디어 줘" | marketer → brainstormer | 4 |
| **"리서치 쭉 돌려줘" / "마케터 돌려"** | **marketer 전체 흐름** | **0→4** |

### 산출 포맷 — mx-deck-design 스킬 자동 연동

문서·HTML·덱 요청 시 `mx-deck-design` 스킬이 자동 적용됩니다.
리서치 결과가 표준 덱 포맷(출처 링크 + 케이스 그리드)으로 나옵니다.

## 핵심 원칙

- **출처 필수** — 모든 브랜드·수치·트렌드에 출처(매체명 + URL). 없으면 "추정" 표기
- **객관 우선** — 유리한 결론을 먼저 정하지 않는다. 구도를 그린 뒤 빈자리를 찾는다
- **PII 금지** — 미공개 클라이언트 정보·개인정보를 조사에 넣지 않는다

## 파일 구조

```
.claude/
├── agents/
│   ├── marketer.md              ← 역할 오케스트레이터
│   ├── rfp-analyst.md           ← RFP 분석
│   ├── market-research.md       ← 시장조사
│   ├── design-trend-radar.md    ← 트렌드 레이더
│   ├── reference-curator.md     ← 레퍼런스 큐레이터
│   └── brainstormer.md          ← 발산
├── library/prompts/
│   └── wide-research.md         ← 와이드 리서치 사양
└── skills/mx-deck-design/
    ├── SKILL.md                 ← 덱 디자인 시스템
    └── template.html            ← HTML 골격
```

## 커스텀 에이전트·스킬 운영

- 새 에이전트: `.claude/agents/<에이전트명>.md` 형식으로 추가
- 새 스킬: `.claude/skills/<스킬명>/SKILL.md` 형식으로 추가
- 추가 시 이 파일의 파일 구조 섹션도 업데이트
