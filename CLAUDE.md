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

## HTML 생성 시작 의식 (세션이 달라도 반드시 이 순서)
1. `.claude/library/tokens.css` 읽기 → `:root` 블록을 새 파일 상단에 복사
2. 프로젝트 노트 (`.claude/projects/YYYYMM_프로젝트명.md`) 읽기 → 테마·accent 색 확인
3. 테마 결정: 라이트(제안·덱·시안) / 다크(대시보드·내부) — 프로젝트 내 혼용 금지
4. accent 하드코딩 금지 — 반드시 `var(--coral)`, `var(--magenta)` 변수 사용
5. 이후: 파일 생성 → 스크린샷 → design-critique → 수정 → 커밋 → 링크 출력

## HTML 산출물 규칙 (필수)
- HTML 파일을 만든 후 **반드시 커밋·푸시**하고, 아래 형식의 **htmlpreview 링크**를 채팅에 바로 출력한다.
- `SendUserFile` (로컬 파일 첨부) 방식은 사용하지 않는다.
- 링크 형식:
  ```
  https://htmlpreview.github.io/?https://github.com/kimyoyacd/workspace/blob/<브랜치명>/<파일경로>
  ```
- **필수 순서**: 파일 생성 → 스크린샷 검증 → design-critique → 수정 → git add → git commit → git push → 링크 출력

### HTML 스크린샷 검증 (모든 HTML 생성 시 필수)
스크린샷 명령어 (Chromium headless):
```bash
/opt/pw-browsers/chromium-1194/chrome-linux/chrome \
  --headless=new --disable-gpu --no-sandbox --window-size=1440,900 \
  --screenshot="/tmp/preview.png" "file:///path/to/file.html"
```
- 생성 후 반드시 스크린샷으로 시각 확인 → design-critique 에이전트 검수 → 🔴 항목 수정 → 재확인 후 커밋
- 여러 파일 동시 생성 시 병렬 스크린샷 가능 (`&` 백그라운드)

### HTML 디자인 토큰 규칙 (프로젝트별 마스터 토큰 사용)
- **테마는 프로젝트 내 전 파일 통일** — 라이트/다크 혼용 금지. 한 프로젝트 안에서 하나로 고정.
- **라이트 테마** (클라이언트 제출용 시안·제안서·덱 기본값):
  - 배경 `#EBEBEB` / 카드 `#FFFFFF` / 텍스트 `#111111`
  - 출처 링크 색: `#2454C7` (WCAG AA 기준)
- **다크 테마** (대시보드·내부 리포트):
  - 배경 `#111111` 고정 — 갈색(#1C1410), 보라(#1A1A2E), 청록 절대 금지
  - 카드 배경: `#1A1A1A` 고정
  - 출처 링크 색: `#7EB3FF` (WCAG AA 기준)
- **accent 계층**: coral `#E8502A` 1차 (헤딩·강조), magenta `#b7419a` 2차 (태그·레이블·보더) — 동일 위계 혼용 금지
- **border-radius**: `var(--radius)` / `var(--radius-sm)` 사용 — 하드코딩 금지
- **폰트**: `var(--sans)`, `var(--mono)` 사용 — 직접 기입 금지
- 모든 HTML에 `:root` CSS 변수 블록을 상단에 정의하고 전체를 그 변수로 제어한다

### 출처(citation) 인라인 규칙
- 수치·통계·인용이 있는 HTML은 **반드시 출처를 해당 카드/섹션 바로 아래 최하위 위계**로 삽입
- 별도 footnote/footer 블록 금지 — 정보와 출처는 항상 같은 카드 안에
- CSS 패턴:
  ```css
  .stat-source { font-size: 10px; margin-top: 6px; }
  .stat-source a { color: #2454C7; text-decoration: none; } /* 라이트 */
  .stat-source a { color: #7EB3FF; text-decoration: none; } /* 다크 */
  .stat-source a:hover { text-decoration: underline; }
  ```
- HTML 패턴: `<div class="stat-source"><a href="URL" target="_blank">출처명 ↗</a></div>`
- 검증 불가 수치는 링크 대신 `<span>업계 추정 · 재검증 필요</span>`으로 표기
- fact-checker 에이전트로 수치 검증 후 삽입 (파이프라인 C 활용)

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
│   └── project-index/    # 프로젝트 인덱스 페이지 생성
├── library/       # 재사용 자산
│   ├── prompts/   # wide-research, brand-brief-template, persona-directives …
│   ├── unit-rates.md     # 견적 노임단가표 (UI Design만 우리실 매출)
│   ├── qc-checklist.md   # 시안 검수 체크리스트
│   ├── data-sources.md   # 노션·구글시트 연결 주소록
│   ├── automation.md     # 자동화 트리거 맵 (스케줄·이벤트·티어)
│   ├── tokens.css        # 마스터 디자인 토큰 (라이트·다크 :root 블록)
│   └── index-template.html  # 프로젝트 인덱스 골조 (재사용 템플릿)
└── projects/      # 프로젝트별 노트
```

## 커스텀 에이전트 & 스킬 운영
- 새 에이전트: `.claude/agents/<에이전트명>.md` 형식으로 추가
- 새 스킬: `.claude/skills/<스킬명>/SKILL.md` 형식으로 추가
- 에이전트·스킬 추가 시 이 파일의 폴더 구조 섹션도 업데이트한다.

## 현재 등록된 에이전트 (25종 · 6그룹)
**① 수주·전략**
- `rfp-analyst` (RFP 분석가) — RFP→명시·숨은·미정의·위험 4분류 + 확인 질문
- `market-research` (시장조사) — 경쟁사 N개 → XY 포지셔닝 맵 + 빈자리, 출처 필수
- `concept-director` (컨셉 디렉터) — ★사전 관점 게이트: 핵심 제품/타이틀 → 관점 한 문장(전 매체 상속)
- `brainstormer` (브레인스토머) — 발산 + 방향별 키워드·약식 포지셔닝 축
- `critic` (냉정한 비평가) — 비용·기간·역량·실현·설득력 점수화

**② 디자인 인텔리전스**
- `design-trend-radar` (트렌드 레이더) — 최근 3개월 글로벌 트렌드, 출처 필수
- `reference-curator` (레퍼런스 큐레이터) — 카테고리별 레퍼런스 큐레이션, 출처 필수
- `design-system-guardian` (시스템 가디언) — 사내 디자인 시스템 준수 점검
- `design-critique` (디자인 비평가) — 시안 6영역 검수 🟢🟡🔴

**③ 디자인 생성**
- `visual-generator` (비주얼 제너레이터) — 키비주얼·목업 이미지(Higgsfield)
- `moodboard-builder` (무드보드 빌더) — 레퍼런스+생성 무드보드
- `figma-bridge` (피그마 브릿지) — 코드↔Figma 양방향
- `storyboard-maker` (스토리보드 메이커) — 영상·모션 콘티(Higgsfield)

**④ 검수 게이트**
- `fact-checker` (팩트 체커) — 사실·숫자·인용 반증 먼저
- `review-panel` (5관점 패널) — 기획·크리에이터·사업·마케팅·B2B고객 병렬 검토
- `delivery-gate` (딜리버리 게이트) — 라이트모드·PII·잘림 린트(발송 직전)
- `tone-guardian` (톤 가디언) — 회신 톤·매너 교정(발송 전)

**⑤ 운영·매출**
- `project-manager` (프로젝트 매니저) — 진행현황·매출 달성율·가동률(노션·시트, read-only)
- `quote-accountant` (견적 회계사) — 원가표+마진 시나리오, UI Design만 우리실 매출, 최종가·마진은 사용자
- `account-radar` (어카운트 레이더) — 반복 클라 히스토리·리스크(미팅 브리핑)
- `project-index` (프로젝트 인덱스) — HTML 산출물 자동 탐색 → 인덱스 페이지 생성·커밋·링크 출력

**⑥ 조직·채용·법무**
- `creative-director` (크리에이티브 디렉터) — 시안 톤 최종·온보딩 팩
- `hiring-radar` (채용 레이더) — 9→20 증원 파이프라인
- `vendor-radar` (벤더 레이더) — 외주 풀·외주비
- `legal-compliance` (법무) — 계약·NDA 쟁점 플래그(자문 대체 아님)

> 자동화 트리거(스케줄·이벤트·티어)는 `.claude/library/automation.md` 참조.

## 현재 등록된 스킬
- `list-deck-design` — 한국어 에디토리얼 리포트 HTML 생성 (stateofaidesign.com 스타일)
- `project-index` — 프로젝트 HTML 산출물 묶어 인덱스(바로가기) 페이지 생성. 템플릿: `.claude/library/index-template.html`

## 프로젝트 자동 파이프라인

신규 프로젝트 시작 시 아래 파이프라인을 **자동으로 순서대로 실행**한다. 각 단계 완료 후 다음 단계로 넘어간다.

### 트리거
- "○○ 프로젝트 시작", "○○ 제안 준비", "○○ 상세페이지 시작" 등 신규 프로젝트 키워드

### 파이프라인 A — 브랜드·디자인 제안용 (상세페이지·배너·홈페이지·UI·BX)

Manus 3단계 구조를 따른다. 각 단계는 이전 단계 state(JSON)가 있어야 시작한다.

```
[사전]
0. rfp-analyst       → 과업 분해 (명시·숨은 니즈·위험)

[Manus 1 — 전략·리서치]
1. market-research   → 경쟁 브랜드 30개 매트릭스 + 클러스터링
2. concept-director  → 포지셔닝 맵 축 3안 → 추천 1안 + Strategic POV Gate
3. brainstormer      → 시장 빈자리 + 포지셔닝 전략 초안 + 비주얼 프롬프트 팩
                       → manus_1_state(JSON) 생성
   ※ Gate 1 체크리스트 통과 후에만 Manus 2 진입

[Manus 2 — 비주얼 아이덴티티]
4. design-trend-radar → 비주얼 트렌드 태그(T1~T8) 클러스터 부착
5. reference-curator → Lens Translation Gate → Visual Identity DNA 추출
6. brainstormer      → 컨셉 6개 발산 → Client×Mood Matrix → 컨셉 쇼트리스트 2~3개
                       → manus_2_state(JSON) 생성
   ※ Gate 2·3 체크리스트 통과 후에만 Runable 3 진입

[Runable 3 — 브랜드 시스템 + 슬라이드]
7. concept-director  → Brand Board + Value Cards + Copy·Symbol 시스템
8. critic            → Brand System Summary + slide_generation_ready 판단
9. 슬라이드 덱 생성  → 35~45장 구조 + Director Final Check
                       → 프로젝트 노트 자동 저장 (.claude/projects/YYYYMM_프로젝트명.md)
```

> 라이브러리 파일 참조:
> - Manus 1: `.claude/library/prompts/manus-1-brand-planning.md`
> - Manus 2: `.claude/library/prompts/manus-2-visual-identity.md`
> - Runable 3: `.claude/library/prompts/runable-3-brand-system.md`

### 파이프라인 B — 견적·수주용
```
1. rfp-analyst       → 과업 분해
2. quote-accountant  → 원가표 + 마진 시나리오
3. critic            → 리스크 점검
```

### 파이프라인 C — 시안 검수용
```
1. design-critique   → 6영역 검수 🟢🟡🔴
2. fact-checker      → 수치·인용 검증
3. delivery-gate     → 발송 전 린트
```

### 규칙
- 각 단계 결과를 요약해서 보여준 후 자동으로 다음 단계 진행
- 중간에 실장님이 "잠깐" 또는 "여기서 멈춰"라고 하면 해당 단계에서 대기
- 최종 결과는 프로젝트 노트에 자동 저장
- 파이프라인 유형이 불명확하면 A로 시작
- **에이전트 세션 한계 복구**: 에이전트가 rate limit/세션 종료로 파일 미생성 시 → 즉시 새 Agent 스폰 또는 Write 도구로 직접 작성 (대기·재시도 없음)
- **HTML 병렬 생성**: 독립적인 파일 여러 개는 Agent 동시 스폰으로 처리 (직렬 금지)

### 프로젝트 마무리 체크 (필수 질문)
프로젝트 산출물 HTML이 2개 이상 생성된 시점에서 "마무리", "완료", "다 됐어" 등 종료 신호가 오면 반드시 아래 질문을 한다:

> "산출물 파일들을 한 곳에서 바로 열 수 있는 **인덱스 페이지** 만들어 드릴까요?  
> `.claude/library/index-template.html` 골조로 바로 생성 가능합니다."

- 실장님이 "응", "만들어" → `index-template.html` 복사 후 해당 프로젝트 파일로 채워서 생성
- 실장님이 "괜찮아" → 생략
- 이 질문을 빠뜨리면 안 된다

### 시각 자료 규칙 (모든 파이프라인 공통)
- 리서치·트렌드·레퍼런스·무드보드 단계에서 반드시 실제 이미지 3~5장을 수집한다
- 출처: Pinterest, Behance, 브랜드 공식 사이트, 올리브영 상세페이지 등 웹에서 직접 fetch
- 이미지는 무드보드 또는 시각 자료 섹션에 URL + 캡션 형태로 반드시 포함
- 글로만 끝내는 리서치 결과물은 완료로 인정하지 않는다
