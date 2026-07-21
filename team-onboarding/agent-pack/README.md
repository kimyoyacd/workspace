# 에이전트 이관 패키지 — 크리에이티브 스튜디오 세트 (19종 + 스킬 1종)

> **이 폴더 하나면 에이전트 시스템을 다른 팀·워크스페이스에 통째로 이식할 수 있어요.**
> 원본 24종 중 **회사 자산(노션 DB·단가표·채용·외주 풀)에 묶인 ⑥운영·매출·조직 6종은 제외**하고,
> 어디서든 그대로 작동하는 ①~⑤ 그룹 + 역할 오케스트레이터(마케터)를 담았어요.

---

## 뭐가 들어있나

```
agent-pack/
├── agents/                       ← 19종 (아래 그룹 참조)
├── library/
│   ├── qc-checklist.md           ← design-critique가 참조하는 검수 기준
│   └── prompts/wide-research.md  ← 경쟁사 30개 심화 조사 사양
└── skills/
    └── list-deck-design/         ← 한국어 에디토리얼 리포트 HTML 스킬
```

### 에이전트 그룹 구성

**⓪ 역할 오케스트레이터**
- `marketer` — **RFP 분석 → 시장조사 → 와이드 리서치 → 디자인 리서치 → 발산**을 한 흐름으로 지휘. 수주·제안 착수의 시작점

**① 전략·수주** — `rfp-analyst` · `market-research` · `concept-director` · `critic`
**② 크리에이티브 발상** — `brainstormer` · `moodboard-builder` · `visual-generator` · `storyboard-maker`
**③ 디자인 인텔리전스** — `design-trend-radar` · `reference-curator` · `design-system-guardian` · `design-critique`
**④ 디자인 구현** — `figma-bridge` · `creative-director`
**⑤ 검수 게이트** — `fact-checker` · `review-panel` · `delivery-gate` · `tone-guardian`

### 제외한 것 (⑥ 운영·매출·조직 — 이식 불가)
`project-manager` `quote-accountant` `account-radar` `hiring-radar` `vendor-radar` `legal-compliance`
→ 노션 DB·매출 시트·단가표·클라이언트 히스토리 등 **회사 고유 자산에 연결**돼 있어 옮겨도 작동하지 않아요.
필요하면 이식한 팀의 자산에 맞춰 새로 만드는 게 맞아요.

---

## 설치 — 3단계 (Claude Code 저장소 기준)

1. **복사** — 폴더 구조 그대로:
   - `agents/` 내용물 → 새 저장소 `.claude/agents/`
   - `library/` 내용물 → `.claude/library/` (prompts 하위 구조 유지)
   - `skills/list-deck-design/` → `.claude/skills/list-deck-design/`
2. **확인** — Claude Code로 그 저장소를 열고 **"시장조사 해줘 — [카테고리]"** 호출.
   출처 URL 붙은 브랜드 표 + 포지셔닝 맵이 나오면 성공.
3. **전체 흐름 테스트** — **"마케터 돌려 — [카테고리]"** (RFP 파일이 있으면 첨부).
   RFP 4분류 → 경쟁 구도 → 트렌드·레퍼런스 → 방향 후보까지 쭉 돌면 완료.

> ⚠️ 에이전트는 **Claude Code에서만 자동 작동**해요. 일반 챗(claude.ai)에서는 md 내용을
> 프로젝트 지침에 직접 붙여넣어야 해요. (자세히: [`../60_에이전트_공유하기.md`](../60_에이전트_공유하기.md))

---

## 대표 트리거 — 마케터 흐름 (수주의 시작)

| 이렇게 말하면 | 도는 단계 |
|---|---|
| "RFP 분석" / "과업 분석" / "제안요청서 봐줘" | 0 — 명시·숨은·미정의·위험 4분류 + 확인 질문 3개 |
| "시장조사" / "경쟁사 분석해줘" | 1 — 경쟁 구도 + XY 포지셔닝 맵 + 빈자리 |
| "제대로 30개로" | 2 — 와이드 리서치 확장 |
| "트렌드 봐줘" / "레퍼런스 찾아줘" | 3 — 디자인 리서치 (출처 필수) |
| "브레인스토밍" / "아이디어 줘" | 4 — 방향 후보 발산 |
| **"리서치 쭉 돌려줘" / "마케터 돌려"** | **0→4 전체** (RFP 없으면 1부터) |

다른 에이전트는 각 md 상단 description의 트리거로 부르면 돼요. (예: "시안 검수" → design-critique, "팩트체크" → fact-checker, "톤 봐줘" → tone-guardian)

---

## 이식 후 우리 팀에 맞추기

| 바꿀 곳 | 어떻게 |
|---|---|
| 팀 이름·말투 | `agents/marketer.md` 상단 소개 문장 수정 |
| 검수 기준 | `library/qc-checklist.md`를 팀 기준으로 조정 |
| 디자인 시스템 | `design-system-guardian`이 참조하는 `.claude/library/design-system.md`는 **팀마다 직접 작성** (없으면 일반 원칙으로 동작) |
| 산업 기본값 | `wide-research.md`의 `(우리 브랜드의 산업/제품군)` 자리에 자주 쓰는 값 메모 |
| CLAUDE.md 등록 | 이식한 저장소의 CLAUDE.md에 에이전트 목록 섹션을 추가하면 팀원 발견성이 좋아져요 |

**바꾸지 말 것**: 출처 필수 원칙, 미공개 정보·개인정보(PII) 금지, 발송 전 사람 확인. 팀이 달라도 그대로예요.

> 참고: `visual-generator` `storyboard-maker`는 이미지·영상 생성 도구(Higgsfield MCP) 연결이 있을 때 생성까지 해요. 연결이 없으면 기획·프롬프트 산출까지만 작동해요.
