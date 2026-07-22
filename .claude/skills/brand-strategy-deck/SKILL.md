---
name: brand-strategy-deck
description: 브랜드 전략 리서치 덱 HTML 생성 스킬. marketer 파이프라인의 최종 단계 — outputs/의 Markdown·JSON 원본과 report-data.json을 template.html 기반으로 조판해 프로젝트별 deck.html을 생성한다. 기존 골든 예시(GRAIN·Boomi·MAXOS)의 시각 문법을 유지한다. 트리거 "덱 생성", "리서치 덱", "전략 덱 만들어줘", "HTML로 정리", "GRAIN 같은 형식으로".
argument-hint: <프로젝트 폴더 경로>
allowed-tools: Read Grep Glob Bash Write Edit
---

# Brand Strategy Deck — 브랜드 전략 리서치 HTML 덱 생성

브랜드 전략 프로젝트의 리서치·분석·전략 결과를 하나의 HTML 리서치 덱으로 조판하는 시스템.
**marketer 에이전트 파이프라인의 STEP 18(최종 출력)에서 호출된다.**

## 언제 쓰나

- marketer가 리서치·전략을 완료하고 quality-gate를 통과한 뒤 HTML 덱으로 정리할 때
- 기존 report-data.json이 있을 때 HTML만 재생성할 때

쓰지 말 것: 에디토리얼 리포트(→ `list-deck-design`), 슬라이드형 제안서(→ `mx-deck-design`,
`hivelab-proposal-style`), 대시보드.

## 실행 순서

1. 프로젝트의 Markdown·JSON 원본 확인 (`outputs/01~12`)
2. 누락된 필드 확인 — 누락 시 quality-gate 재실행 권고
3. `report-data.json` 검증 (스키마: `REPORT_SCHEMA.md`)
4. `template.html` 복사
5. 프로젝트 데이터 삽입 (슬롯 주석 `<!-- SLOT_NAME -->` 위치에)
6. 기존 디자인 컴포넌트 유지 (`COMPONENTS.md` 정의만 사용)
7. 경쟁사 30개 이상 카드 렌더링 (DEEP 기준)
8. 이종업계 30개 이상 카드 렌더링
9. 주요 3개 카테고리 우선 노출 (추가 그룹은 보조 표시)
10. XY맵 렌더링 (좌표 + 근거 연결)
11. 출처 링크 연결 (T1~T4 배지 포함)
12. 모바일·데스크톱 레이아웃 점검
13. 최종 `deck.html` 저장 (프로젝트 폴더 루트)

**콘텐츠를 새로 요약해 축소하지 않는다.** 조사 원본의 정보 밀도를 유지하되,
상세 내용은 카드 펼침(`<details>`)·모달·필터로 탐색 가능하게 만든다.

## 참조 파일

| 파일 | 역할 |
|---|---|
| `template.html` | 재사용 골격 — CSS 변수·그리드·카드 클래스·내비·맵·JS. 프로젝트 내용은 슬롯으로 |
| `REPORT_SCHEMA.md` | report-data.json 스키마 정본 |
| `COMPONENTS.md` | 재사용 컴포넌트 정의 (25종) |
| `references/grain-golden-example.html` | 골든 예시 ① — 브랜드 카드 49개·T1~T4 배지·클러스터·전략 전개의 정보 밀도 기준 |
| `references/boomi-golden-example.html` | 골든 예시 ② — 원페이지 스크롤 내러티브·포지셔닝 맵·기회/함정 쌍 |
| `references/maxos-golden-example.html` | 골든 예시 ③ — 대시보드형 데이터 밀도·상태 태그·팔레트 |

### 골든 예시의 판단 기준
적절한 정보 밀도 · 섹션 전개 방식 · 카드 크기와 배치 · 카테고리 표현 · 출처 표현 ·
포지셔닝 맵 표현 · 화이트스페이스 표현 · 리서치에서 전략으로 넘어가는 흐름.
**GRAIN 고유 브랜드명·전략 문구·조사 결과는 새 프로젝트에 복사하지 않는다** — 구조와 문법만 계승.

## 디자인 토큰 — 모노톤 + 포인트 4색 (Research & Strategy OS 레이아웃)

template.html의 CSS 변수를 그대로 쓴다. **기본은 모노톤** — 배경·카드·잉크·라인 전부 무채색.
포인트 컬러는 아래 4색만, **분류·구분이 꼭 필요한 곳에만** 쓴다 (T1~T4 배지, Evidence ID 칩,
화이트스페이스 유형 배지, 리스크 레벨). 장식·본문·제목에는 절대 쓰지 않는다.

```css
:root{
  --bg:#f4f3ef; --panel:#fff; --ink:#151515; --muted:#6f6d66; --line:#e4e1d9;  /* 모노톤 — 고정 */
  --dark:#151817;                                /* 탑바·다크 히어로 */
  --pt-pink:#ff86f6;   /* T3 커뮤니티 · 보조 분류 */
  --pt-blue:#2e53f9;   /* T1 공식 · Evidence ID */
  --pt-lime:#c5ff79;   /* T2 리포트 · 긍정 상태 */
  --pt-orange:#ff6e23; /* T4 추정 · 리스크·경고 */
}
```

레이아웃 골격: **탑바(다크) + 좌측 사이드바 내비 + 뷰 전환(SPA)**. 모바일(740px 이하)에서는
사이드바가 상단 가로 스크롤 내비로 변환. 인쇄 시 전체 뷰가 순서대로 펼쳐진다.

**새 프로젝트마다 HTML을 처음부터 다시 디자인하지 않는다.** 컬러·레이아웃 고정, 내용만 교체.

## HTML 출력 구조 — 61섹션 4파트

deck.html에는 최소 다음 파트·섹션을 포함한다. 프로젝트 성격상 불필요한 섹션은 숨길 수 있지만
**생략 이유를 덱 하단 Research Limitations 또는 주석에 기록**한다.

**PART 1 — PROJECT & BRAND** (1~18):
Cover · Executive Summary · Project Snapshot · RFP/Initial Brief · Project Context ·
Brand at a Glance · Brand Factbook · Product·Service·Experience · Target Definition ·
Current Brand Identity · Name & Brand Story · Brand Assets · Brand Gaps ·
Unknowns & Validation Questions · Current vs Desired State · Reframed Goal ·
Real Problem Definition · Research Agenda

**PART 2 — COMPETITIVE LANDSCAPE** (19~39):
Market Definition · Competitive Universe · Direct/Indirect/Alternatives/Adjacent ·
Competitor Cards 30+ · Competitive Category A/B/C · Additional Categories ·
Category Deep Dive · Axis Candidates 01~03 · Selected Axes · XY Positioning Map ·
Quadrant Analysis · Whitespace Opportunities · False White Spaces · Competitive Implications

**PART 3 — CROSS-INDUSTRY RESEARCH** (40~49):
Research Scope · Universe 30+ · Case Cards · Cross-category Group A/B/C ·
Additional Groups · What to Borrow · What to Translate · What to Avoid

**PART 4 — INSIGHT & STRATEGY** (50~61):
Core Findings · Core Insights · Opportunity Areas · Strategy Option A/B/C ·
Strategy Comparison · Recommended Strategy · Strategic Principles ·
Risk & Validation Plan · Sources · Research Limitations

## 출처 규칙

- 모든 카드에 출처(URL) + 등급 배지: `T1`(공식) `T2`(언론·리포트) `T3`(유통·커뮤니티) `T4`(추정)
- T4는 사실 근거로 표시하지 않고 "추가 검증 대상"으로 플래그
- XY 좌표에는 좌표 근거(x_rationale/y_rationale) 노출 — 펼침 또는 툴팁

## 완료 게이트 (HTML)

- [ ] 기존 HTML 디자인 문법 유지 (template + 골든 예시 기준)
- [ ] 브랜드 팩트북이 보이는가
- [ ] 경쟁사 30개 이상 실제 카드 (DEEP)
- [ ] 이종업계 30개 이상 실제 카드 (DEEP)
- [ ] 주요 3개 카테고리 카드
- [ ] 각 카드 출처 확인 가능
- [ ] XY맵 + 좌표 근거
- [ ] 화이트스페이스 기회·위험 동시 노출
- [ ] 리서치→전략 연결 가시화

미달이면 완성 처리하지 않고 quality-gate로 돌려보낸다.

## 흔한 실수

- 포지셔닝 맵 도트를 근거 없이 배치 → 좌표 근거 없는 브랜드는 맵에서 제외 + 이유 기록
- 카드에 출처 누락 → 모든 카드 src-link + tier 배지 필수
- 화이트스페이스에 기회만 표시 → 기회·함정(유형 포함) 항상 쌍으로
- 30개를 "대표 10개만" 요약 → 밀도 축소 금지. 펼침/필터로 전체 노출
- 컬러를 프로젝트마다 새로 디자인 → accent 2색만 교체
- 전략 카드가 리서치와 단절 → Evidence ID·자산 연결 명시
