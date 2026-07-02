# Claude 운영 지침

## 대시보드 바로가기
- **MAX실 OS Dashboard**: https://htmlpreview.github.io/?https://github.com/kimyoyacd/workspace/blob/main/.claude/projects/maxos-dashboard-v6.html
- **GAS 백엔드 URL**: https://script.google.com/macros/s/AKfycbzHf-hI-QHWBhjyqEOp_1PnSvkAm_B5dRAh56eaBcxjE56RX18Xzi5MIdFOIGFBdfCG/exec

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

## 디자인 프로젝트 전반 운영 (범용 와이어프레임 + 브랜드 전용 파이프라인)
- **브랜드 제안이 아니어도** 홈페이지·배너·게임 UI·상세페이지 등 디자인 관련 프로젝트는 결국 "대상을 브랜드처럼 정의하고 새 컨셉을 제안하는" 동일 패턴(시장조사→발산→전략정의→비주얼시스템→최종제안)을 따른다. 이런 프로젝트는 **`.claude/library/prompts/design-deck-wireframe.md`(범용 덱 목차 골격)를 자동으로 먼저 확인**하고 그 순서로 deck.html을 쌓는다.
- 신규 브랜드 기획/디자인 제안 요청이 들어오면(브랜드 리서치·컨셉 발산·비주얼 아이덴티티 등 어느 단계든) **반드시 `.claude/library/prompts/brand-design-proposal.md`(마스터 오케스트레이션 가이드, 위 범용 골격의 브랜드 전용 상세판)를 자동으로 먼저 확인**하고 그 순서를 따른다 — 사용자가 매번 다시 요청하지 않아도 브랜드 기획/디자인 리서치 작업이면 항상 이 가이드부터 부른다.
- 파이프라인: **Manus 1(자리·리서치) → Gate 1 → Manus 2(감각·비주얼) → Gate 2·3 → Gate 4 → Runable 3(시스템+슬라이드)**. 4개 Designer Lens Gate 상세는 `designer-lens-gates.md` 참조.
- **`runable-3-slide-templates.md`(6종 슬라이드 타입 카탈로그)도 브랜드 프로젝트 시작 시 마스터 가이드와 함께 자동으로 확인한다** — Runable 3 단계에 가서야 존재를 떠올리는 게 아니라, Manus 1 리서치 단계부터 "이 자료가 결국 어느 슬라이드 타입(Brand Story/Value Keywords/Mind Map/Direction/Graphic Motif/Competitor Research)으로 조립될지"를 염두에 두고 산출물을 구조화한다. 디자인 시스템(16:9, 서체, 컬러, 그리드)은 프로젝트마다 통일하고 내용만 교체.
- **무드보드 단계에 진입하면 `.claude/library/prompts/MOODBOARD_MASTER_FRAMEWORK.md`를 자동으로 먼저 확인**한다. 핵심: (1) 덱은 "오프닝 3~4장(관점→결과물정의→메시지)" 먼저, 리서치는 그 뒤에 증거로 배치 (2) 리서치는 경쟁사 포지셔닝뿐 아니라 디자인 트렌드 + **타깃층 관심사(출처 필수)**까지 3중으로 (3) 방향 제안은 항상 Safe/Expected Route와 Aspirational/Wild Card Route 2개를 병행 (4) 무드보드의 모든 이미지에 키워드·선정이유·담긴 이야기 3종 주석 필수 (5) 9칸 그리드는 밝은 톤=중앙 십자/어두운 텍스처=모서리 공식으로 배치.
- **슬라이드 압축 금지 원칙(전체 파이프라인 공통)**: 어느 단계에서든 도출된 산출물은 분량에 관계없이 **각각 별도 슬라이드로 만들어 즉시 deck.html에 append**한다. 여러 산출물을 요약해서 한 슬라이드에 욱여넣지 않는다 — 상세는 `MOODBOARD_MASTER_FRAMEWORK.md`의 "슬라이드 분량 원칙" 참조.
- **게이트 통과 시 자동 진행 금지**: Gate 1(관점 한 문장), Gate 2(Lens Translation), 형태/톤 확정 등 방향이 갈리는 지점에서는 반드시 사용자 확인을 받은 뒤에만 다음 단계로 넘어간다. 선택지는 추상적으로 묻지 말고 구체적 예시(카피·이미지 톤 비교)로 보여줘서 판단을 돕는다.
- **경쟁사·레퍼런스 브랜드 카드는 항상 전체 필드를 채운다**: 브랜드명/국가/가격대/타깃/핵심메시지/강점·약점 + **클릭 가능한 출처 링크**(새 탭). 정보 미확인 시 "확인 안됨"으로 정직하게 표기하고 Source Tier(1~4)를 남긴다. 이름과 한줄설명만 있는 카드는 불충분.
- **산출물은 개별 파일로 흩어 보여주지 않고 프로젝트 폴더의 `deck.html` 한 파일에 섹션으로 계속 누적**한다. 중간 확인이 필요한 지점 외에는 완성된 덩어리 단위로 보여준다.
- 이미지 생성이 필요하면 Higgsfield로 메인 세션이 직접 생성한다 (서브에이전트는 텍스트·프롬프트까지만 산출).
- **HTML 산출물은 파일 전송 대신 웹에서 바로 보이는 고정 링크로 안내한다**: 매 커밋·푸시 후 `https://htmlpreview.github.io/?https://github.com/<owner>/<repo>/blob/<branch>/<파일경로>` 형태로 링크를 제공한다. 이 링크는 고정이며 다음 커밋부터는 새로고침만 하면 최신 내용이 반영되므로, 같은 파일을 매번 다시 전송할 필요 없다.
- **★ 삽입 전 스크린샷 사전 점검 원칙**: 사용자가 새 아이디어·이미지·지시를 던지면 **곧바로 덱에 삽입하지 않는다.** 먼저 (1) 현재 deck.html 등을 playwright로 슬라이드별 스크린샷 찍고(`node` + `/opt/pw-browsers/chromium`, 방법은 아래 참조) (2) 그 스크린샷을 직접 보면서 전체 흐름·순서·디자인 틀이 지금 맞는지 확인한 뒤 (3) 새 내용이 어디에 들어가야 그 흐름을 안 깨는지 판단하고 나서 삽입한다.
  - 스크린샷 방법: `node`로 `require('/opt/node22/lib/node_modules/playwright').chromium.launch({executablePath:'/opt/pw-browsers/chromium'})` → `file://` 경로로 deck 열기 → 최상위 블록마다 개별 캡처(`el.screenshot(...)`) → Read 도구로 이미지 확인.
  - 큰 변경(버전 전환, 여러 산출물 한꺼번에 추가) 직후에는 이 스크린샷 점검을 **자동으로** 수행하고, 발견된 흐름/디자인 불일치는 `project-continuity-auditor`처럼 정리해서 보고 후 수정한다.

## ★ MAXOS 대시보드 동기화 원칙 (`.claude/projects/maxos-dashboard-vN.html`)
이 CLAUDE.md/에이전트 파일들이 **기계가 읽는 SoT**이고, `maxos-dashboard-vN.html`은 그걸 사람이 보기 좋게 시각화한 **미러**다. 둘이 따로 놀면 대시보드가 금방 낡는다. 동기화 규칙:
1. **CLAUDE.md/에이전트 구조가 바뀌면(에이전트 추가·그룹 재편 등) 그 커밋 안에서 대시보드도 같이 갱신**한다 — 별도 작업으로 미루지 않는다.
2. **대시보드도 프로젝트 인덱스처럼 버전 파일로 관리**한다 — 기존 파일을 덮어쓰지 않고 `maxos-dashboard-v(N+1).html`로 새로 만들되, 바뀐 부분만 반영하고 나머지는 그대로 승계.
3. **어느 탭이 갱신 대상인지는 무엇이 바뀌었냐에 달림**: 에이전트 목록·그룹 구조 변경 → "조직도" 탭 / CLAUDE.md 원칙 변경 → "지침" 탭 / 개별 프로젝트 인사이트 → 실제 노션 Project DB 등록 클라이언트 프로젝트일 때만 "프로젝트 현황" 탭.
4. **드리프트 감지는 `ax-architect`가 겸한다** — "워크플로우 정리해줘" 요청이 오면 CLAUDE.md/에이전트 파일뿐 아니라 최신 `maxos-dashboard-vN.html`도 같이 읽어서 불일치를 보고한다.

## 워크플로우 재사용 가이드 — "다음에도 이 방식 그대로 쓰려면"
이 문서와 `.claude/library/prompts/*`에 있는 가이드들은 **자동 트리거**로 동작하도록 설계되어 있다. 사용자가 매번 파일명을 언급하지 않아도, 작업 성격만 밝히면 해당 가이드를 알아서 먼저 확인하고 그 순서를 따른다.

| 하고 싶은 말 (예시) | 자동으로 확인하는 가이드 |
|---|---|
| "OO 브랜드 새로 기획하자" / "리서치부터 시작해줘" | `brand-design-proposal.md` → Manus 1부터 |
| "무드보드 다시 짜보자" / "톤 방향 두 가지로 보여줘" | `MOODBOARD_MASTER_FRAMEWORK.md` |
| "웹사이트/배너/게임 UI인데 브랜드는 아니야" | `design-deck-wireframe.md` |
| "슬라이드 최종 정리해줘" / "Runable 3" | `runable-3-slide-templates.md` |
| "다 반영됐는지 점검해줘" | `project-continuity-auditor` 에이전트 |
| "전체 구조/에이전트 체계 다시 봐줘" | `ax-architect` 에이전트 |

**재사용 시 유의할 것**
1. 새 프로젝트를 시작하면 그 프로젝트 폴더에 `00-project-index.md`부터 만든다. 이 인덱스가 있어야 다음 세션에서도 "현재 뭐가 맞는지"를 바로 파악할 수 있다.
2. 가이드 파일 자체를 프로젝트를 실제로 돌리면서 계속 고도화한다 — 실무 중 발견된 빈틈은 그때그때 해당 라이브러리 파일에 바로 반영해 다음 프로젝트부터 자동 적용되게 한다.
3. 프로젝트별 특수 사정은 프로젝트 인덱스에 남기고, **범용적으로 재사용 가능한 규칙만** 라이브러리 파일로 승격한다.

## 폴더 구조
```
.claude/
├── agents/        # 커스텀 에이전트 정의 파일
├── skills/        # 커스텀 스킬 (SKILL.md + 관련 파일)
│   ├── list-deck-design/
│   ├── hyo-manus/         # HYO MANUS 브랜드 제안 자동화 (SKILL.md + html-template.md)
│   ├── dumbify/           # 콘텐츠 쉽게 쓰기 (인지 부담 절감)
│   ├── storytelling/      # 내러티브·릴스 대본 구조화
│   ├── viral-hooks/       # 첫 문장·훅 작성
│   ├── anti-ai-writing/   # AI 티 제거·구체성 강화 필터
│   └── voice-dna/         # 개인 보이스 프로필 생성
├── library/       # 재사용 자산
│   ├── prompts/   # design-deck-wireframe, brand-design-proposal, wide-research,
│   │              # runable-3-slide-templates, MOODBOARD_MASTER_FRAMEWORK,
│   │              # designer-lens-gates, brand-brief-template, persona-directives …
│   ├── unit-rates.md     # 견적 노임단가표 (UI Design만 우리실 매출)
│   ├── qc-checklist.md   # 시안 검수 체크리스트
│   ├── data-sources.md   # 노션·구글시트 연결 주소록
│   ├── automation.md     # 자동화 트리거 맵 (스케줄·이벤트·티어)
│   └── ux-writing.md     # UX 라이팅 레퍼런스 (토스·refeeel·타이포 위계)
└── projects/      # 프로젝트별 노트
    └── <프로젝트>/00-project-index.md  # 프로젝트마다 "지금 진실" 인덱스 — 항상 여기부터 확인
```

## 커스텀 에이전트 & 스킬 운영
- 새 에이전트: `.claude/agents/<에이전트명>.md` 형식으로 추가
- 새 스킬: `.claude/skills/<스킬명>/SKILL.md` 형식으로 추가
- 에이전트·스킬 추가 시 이 파일의 폴더 구조 섹션도 업데이트한다.

## ★ 메타 그룹 — 시스템·워크플로우 설계 (프로젝트 파이프라인 밖)
- `ax-architect` (AX 설계자) — 개별 프로젝트 산출물이 아니라 "이 조직이 AI와 함께 일하는 방식 자체"를 설계. 여러 프로젝트에 걸쳐 반복되는 패턴을 보고 CLAUDE.md·에이전트 그룹·라이브러리 문서 구조를 재설계 제안. `project-continuity-auditor`(한 프로젝트 내부, 기계적 검증)와 달리 이쪽은 프로젝트 간·구조적·창의적 판단. 트리거 "워크플로우 정리해줘", "에이전트 구조 다시 짜줘", "AX 관점에서 봐줘", "프로세스가 안 보여".

## 현재 등록된 에이전트 (29종 · 7그룹 / 2 대기, 메타 그룹 별도 1종 포함)
> 그룹은 카테고리 분류. 실행은 컨텍스트 기반 — 특히 ④ 검수 게이트는 어느 단계에서든 상황에 맞게 발동.

**① 리서치** — 정보 수집·검증 (전략 진입 전 필수 게이트)
- `rfp-analyst` (RFP 분석가) — RFP→명시·숨은·미정의·위험 4분류
- `market-research` (시장조사) — 경쟁사 N개 → XY 포지셔닝 맵 + 빈자리, 타깃 관심사 리서치(검증상태 표기) 포함, 출처 필수
- `design-trend-radar` (트렌드 레이더) — 최근 3개월 글로벌 트렌드, 출처 필수, 카테고리 범위 명시
- `reference-curator` (레퍼런스 큐레이터) — 카테고리별 레퍼런스 큐레이션, 출처 필수, 요청 개수 누락 금지
- `fact-checker` (팩트 체커) — 사실·숫자·인용 반증 먼저 (리서치·견적 후 자동)

**② 전략·발산** — 관점 고정 → 발산 → 냉정 검증
- `concept-director` (컨셉 디렉터) — ★사전 관점 게이트: 핵심 제품/타이틀 → 관점 한 문장(전 매체 상속)
- `brainstormer` (브레인스토머) — 발산 + 방향별 키워드·약식 포지셔닝 축
- `critic` (냉정한 비평가) — 비용·기간·역량·실현·설득력 점수화

**③ 비주얼 제작** — 컨셉 확정 후 실제 제작
- `visual-generator` (비주얼 제너레이터) — 키비주얼·목업 이미지(Higgsfield)
- `moodboard-builder` (무드보드 빌더) — 레퍼런스+생성 무드보드
- `figma-bridge` (피그마 브릿지) — 코드↔Figma 양방향
- `storyboard-maker` (스토리보드 메이커) — 영상·모션 콘티(Higgsfield)

**④ 검수 게이트** — 상황에 맞게 발동 (어느 단계에서든 호출 가능)
- `design-system-guardian` (시스템 가디언) — 사내 디자인 시스템 준수 점검
- `design-critique` (디자인 비평가) — 시안 6영역 검수 🟢🟡🔴
- `review-panel` (5관점 패널) — 기획·크리에이터·사업·마케팅·B2B고객 병렬 검토 (발산 후 / 제안 셀렉 전)
- `project-continuity-auditor` (연속성 감사관) — 버전 전환·Runable 3 진입 직전 자동 점검, 카드완전성·슬라이드압축·리서치충돌 위반도 함께 점검

**⑤ 수주·재무** — 견적·클라이언트·매출
- `quote-accountant` (견적 회계사) — 원가표+마진 시나리오, UI Design만 우리실 매출, 최종가·마진은 사용자
- `account-radar` (어카운트 레이더) — 반복 클라 히스토리·리스크(미팅 브리핑)
- `project-manager` (프로젝트 매니저) — 진행현황·매출 달성율·가동률(노션·시트, read-only)

**⑥ 조직관리** — CD·법무 (채용·외주 현재 대기)
- `creative-director` (크리에이티브 디렉터) — 시안 톤 최종 심사·온보딩 표준
- `legal-compliance` (법무) — 계약·NDA 쟁점 플래그(자문 대체 아님)
- `hiring-radar` (채용 레이더) — 🔘 대기 — 증원 파이프라인
- `vendor-radar` (벤더 레이더) — 🔘 대기 — 외주 풀·외주비

**⑦ 커뮤니케이션** — 카피·메일·회의록·발송 QC
- `copy-writer` (카피라이터) — 카테고리·톤별 카피 작성(핀테크·게임·B2B·감성). viral-hooks·storytelling·anti-ai-writing 내장
- `mail-drafter` (메일 초안 작성) — 외부 메일·회신·제안 메시지 초안 생성. tone-guardian 자동 연계
- `meeting-logger` (회의록 작성) — 메모·녹취→구조화 회의록. 액션아이템·담당자·기한 추출
- `tone-guardian` (톤 가디언) — 회신·메일 초안 톤·매너 교정(발송 전 자동)
- `delivery-gate` (딜리버리 게이트) — 라이트모드·PII·잘림 린트(발송 직전 자동)

> 자동화 트리거(스케줄·이벤트·티어)는 `.claude/library/automation.md` 참조.

## 현재 등록된 스킬
- `list-deck-design` — 한국어 에디토리얼 리포트 HTML 생성 (stateofaidesign.com 스타일)
- `hyo-manus` — HYO MANUS 브랜드 제안 자동화 (1차→Gate1→2차→Gate2→3차→Final Deck, HTML 체크포인트 생성)
- `dumbify` — 콘텐츠 읽기 난도 절감 (중2 수준 목표, 전문용어·복잡문 제거)
- `storytelling` — 릴스·영상 대본·내러티브 구조화 (but/therefore 루프, 라스트 댑)
- `viral-hooks` — 모든 콘텐츠 첫 문장 최적화 (주제 명료성 + 정확한 호기심)
- `anti-ai-writing` — AI 티 제거·구체성 강화 최종 필터 (부정 병렬·금지 어휘 검출)
- `voice-dna` — 개인 보이스 프로필 생성 (글 20개 → voice-dna.md 저장)

## HTML 산출물 생성 원칙
- 타이포·레이아웃 위계: `.claude/library/ux-writing.md` 섹션 6 참조
- 기준: Display(Waldenburg 300) + Body(Inter), Warm Stone 배경, pill 버튼, 다층 shadow
