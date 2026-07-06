# Claude 운영 지침

## 사용자 프로필
- **직책**: 디자인 외주 업체 실장 (업력 17년차, 베테랑 디자이너)
- **주력 역량**: 평면 중심 홈페이지·배너·게임 UI 디자인
- **경험 범위**: 게임 및 제조업 다양한 업무
- **주요 업무**:
  - 디자인 업무 (리서치, 아이데이션, 검토)
  - 조직 관리 (인력 관리)
  - 매출 상승 기획
  - 견적 산정

## 기본 행동 지침
- 매 세션 시작 시 이 파일을 반드시 읽고 컨텍스트를 파악한다.
- 업무는 **프로젝트 단위**로 관리한다.
- 응답은 간결하고 실무 중심으로 한다.
- 디자인·기획 맥락에서 조언할 때는 현업 실장 관점에서 실용적으로 제안한다.
- 한국어로 소통한다 (별도 요청 시 영어 전환).

## 프로젝트 관리 규칙
- 신규 프로젝트 시작 시 `.claude/projects/` 폴더 아래에 프로젝트별 노트 파일을 생성한다.
- 파일명 형식: `YYYYMM_프로젝트명.md`
- 각 프로젝트 파일에 포함할 항목: 클라이언트, 업무 범위, 일정, 견적, 진행 메모

## 폴더 구조
```
.claude/
├── agents/        # v8 역할 에이전트 (7종 — 라우팅만, 깊이는 스킬이 담당)
│   ├── marketer.md / designer.md / director.md / strategist.md
│   ├── operator.md / hr-legal.md / maxos-dashboard.md
├── skills/        # 스킬 (복잡한 지침 전담)
│   ├── market-research/ design-trend/ reference-curator/ brainstorm/
│   ├── rfp-analyst/ concept-director/ critic/ brand-pipeline/ review-panel/
│   ├── visual-generator/ moodboard/ storyboard/ figma-bridge/
│   ├── design-critique/ creative-director/ design-system-guardian/
│   ├── fact-checker/ tone-guardian/ delivery-gate/
│   ├── project-manager/ quote-accountant/ account-radar/
│   ├── hiring-radar/ vendor-radar/ legal-compliance/
│   └── list-deck-design/
├── library/       # 재사용 자산
│   ├── prompts/
│   │   ├── MOODBOARD_MASTER_FRAMEWORK.md  # 글로벌 탑티어 무드보드 가이드 (6버킷·슬라이더·4단계)
│   │   ├── wide-research.md
│   │   ├── brand-brief-template.md
│   │   ├── brand-design-proposal.md
│   │   ├── persona-directives.md
│   │   ├── designer-lens-gates.md
│   │   ├── manus-1-brand-planning.md
│   │   ├── manus-2-visual-identity.md
│   │   └── runable-3-brand-system.md
│   ├── unit-rates.md     # 견적 노임단가표 (UI Design만 우리실 매출)
│   ├── qc-checklist.md   # 시안 검수 체크리스트
│   ├── data-sources.md   # 노션·구글시트 연결 주소록
│   └── automation.md     # 자동화 트리거 맵 (스케줄·이벤트·티어)
└── projects/      # 프로젝트별 노트
```

## 커스텀 에이전트 & 스킬 운영
- 새 에이전트: `.claude/agents/<에이전트명>.md` 형식으로 추가
- 새 스킬: `.claude/skills/<스킬명>/SKILL.md` 형식으로 추가
- 에이전트·스킬 추가 시 이 파일의 폴더 구조 섹션도 업데이트한다.

## MAX실 OS v8 — 에이전트 & 스킬 구조

> **v8 원칙**: 에이전트는 라우팅만, 깊이는 스킬 파일이 담당.
> 에이전트에게 말하면 적절한 스킬이 자동으로 호출된다.

### 에이전트 7종

| 에이전트 | 역할 | 스킬 |
|---|---|---|
| `marketer` | 시장·경쟁·트렌드 리서치, 아이디어 발산 | market-research · design-trend · reference-curator · brainstorm |
| `designer` | 비주얼 생성, 무드보드, 스토리보드, Figma | visual-generator · moodboard · storyboard · figma-bridge |
| `director` | 시안 검수, 톤·팩트 점검, 발송 게이트 | design-critique · creative-director · design-system-guardian · fact-checker · tone-guardian · delivery-gate |
| `strategist` | 전략 기획, 브랜드 제안 풀파이프라인 | rfp-analyst · concept-director · critic · brand-pipeline · review-panel |
| `operator` | 프로젝트 운영, 견적, 클라 관리 | project-manager · quote-accountant · account-radar |
| `hr-legal` | 채용, 외주, 법무 | hiring-radar · vendor-radar · legal-compliance |
| `maxos-dashboard` | Dashboard v7 HTML 전담 편집 | (전담 에이전트, 스킬 없음) |

### 스킬 25종 (`.claude/skills/<스킬명>/SKILL.md`)

**마케터 스킬**
- `market-research` — 경쟁사 N개 → XY 포지셔닝 맵 + 빈자리, 출처 필수
- `design-trend` — 최근 3개월 글로벌 트렌드, 출처 필수
- `reference-curator` — 카테고리별 레퍼런스 큐레이션, 출처 필수
- `brainstorm` — 발산 + 방향별 키워드·약식 포지셔닝 축

**전략가 스킬**
- `rfp-analyst` — RFP → 명시·숨은·미정의·위험 4분류 + 확인 질문
- `concept-director` — ★사전 관점 게이트: 핵심 제품/타이틀 → 관점 한 문장(전 매체 상속)
- `critic` — 비용·기간·역량 점수화 (/30)
- `brand-pipeline` — Manus 1(리서치) → Manus 2(비주얼) → Runable 3(시스템+덱) 통합
- `review-panel` — 기획·크리에이터·사업·마케팅·B2B고객 5관점 병렬 검토

**디자이너 스킬**
- `visual-generator` — 키비주얼·목업 이미지(Higgsfield)
- `moodboard` — MOODBOARD_MASTER_FRAMEWORK 기반: 6버킷·퍼스널리티 슬라이더·4단계 파이프라인
- `storyboard` — 영상·모션 콘티(Higgsfield)
- `figma-bridge` — 코드↔Figma 양방향

**디렉터 스킬**
- `design-critique` — 시안 6영역 검수 🟢🟡🔴
- `creative-director` — 시안 톤 최종 점검·온보딩 팩
- `design-system-guardian` — 사내 디자인 시스템 준수 점검
- `fact-checker` — 사실·숫자·인용 반증 먼저
- `tone-guardian` — 회신 톤·매너 교정(발송 전)
- `delivery-gate` — 라이트모드·PII·잘림 린트(발송 직전)

**운영자 스킬**
- `project-manager` — 진행현황·매출 달성율·가동률(노션·시트, read-only)
- `quote-accountant` — 원가표+마진 시나리오, UI Design만 우리실 매출, 최종가·마진은 사용자
- `account-radar` — 반복 클라 히스토리·리스크(미팅 브리핑)

**HR·법무 스킬**
- `hiring-radar` — 채용 파이프라인(JD·소싱·면접·오퍼)
- `vendor-radar` — 외주 풀·외주비
- `legal-compliance` — 계약·NDA 쟁점 플래그(자문 대체 아님)

**기타 스킬**
- `list-deck-design` — 한국어 에디토리얼 리포트 HTML 생성 (stateofaidesign.com 스타일)

> 자동화 트리거(스케줄·이벤트·티어)는 `.claude/library/automation.md` 참조.
