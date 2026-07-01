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
│   ├── prompts/   # wide-research, brand-brief-template, persona-directives …
│   ├── unit-rates.md     # 견적 노임단가표 (UI Design만 우리실 매출)
│   ├── qc-checklist.md   # 시안 검수 체크리스트
│   ├── data-sources.md   # 노션·구글시트 연결 주소록
│   ├── automation.md     # 자동화 트리거 맵 (스케줄·이벤트·티어)
│   └── ux-writing.md     # UX 라이팅 레퍼런스 (토스·refeeel·타이포 위계)
└── projects/      # 프로젝트별 노트
```

## 커스텀 에이전트 & 스킬 운영
- 새 에이전트: `.claude/agents/<에이전트명>.md` 형식으로 추가
- 새 스킬: `.claude/skills/<스킬명>/SKILL.md` 형식으로 추가
- 에이전트·스킬 추가 시 이 파일의 폴더 구조 섹션도 업데이트한다.

## 현재 등록된 에이전트 (27종 · 7그룹 / 2 대기)
> 그룹은 카테고리 분류. 실행은 컨텍스트 기반 — 특히 ④ 검수 게이트는 어느 단계에서든 상황에 맞게 발동.

**① 리서치** — 정보 수집·검증 (전략 진입 전 필수 게이트)
- `rfp-analyst` (RFP 분석가) — RFP→명시·숨은·미정의·위험 4분류
- `market-research` (시장조사) — 경쟁사 N개 → XY 포지셔닝 맵 + 빈자리, 출처 필수
- `design-trend-radar` (트렌드 레이더) — 최근 3개월 글로벌 트렌드, 출처 필수
- `reference-curator` (레퍼런스 큐레이터) — 카테고리별 레퍼런스 큐레이션, 출처 필수
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
