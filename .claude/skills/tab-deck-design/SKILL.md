---
name: tab-deck-design
description: 좌측 탭 네비게이션 + 다크 상단바 구조의 단일 HTML 문서(SPA 덱)를 만드는 시각 시스템. 섹션이 8개 이상이고 스크롤로는 길이가 감당 안 되는 장문 문서 — 리서치 덱, 킥오프 준비 문서, 온보딩 가이드, 운영 매뉴얼, 감사·점검 보고서 — 를 한 파일로 만들 때 사용. 웜 오프화이트 배경(#f5f5f4) + 화이트 카드 + 4색 포인트(핑크·블루·라임·오렌지) 분류 체계, Pretendard 로컬 스택(폰트 CDN 없음 → Artifact 발행 가능). 트리거 "좌측 탭 구조로", "탭 덱", "onboarding.html 처럼", "사이드바 문서로 정리", "섹션 많은 문서 한 장으로".
---

# Tab Deck Design — 좌측 탭 SPA 문서 시스템

`team-onboarding/onboarding.html`에서 실측 추출한 규격. **섹션 수가 많아도 문서가 길어 보이지 않게** 하는 게 목적이다.
스크롤 문서는 8섹션을 넘어가면 독자가 위치를 잃는다. 좌측 탭은 전체 지도를 항상 보여주면서 한 번에 한 섹션만 읽게 한다.

## 언제 쓰나

- 리서치 결과 + 질문 목록 + 아젠다를 한 파일로 묶는 킥오프/사전 준비 문서
- 섹션 8~20개짜리 장문 문서 (운영 매뉴얼, 온보딩 가이드, 점검 보고서)
- 회의 중에 탭을 눌러가며 화면 공유할 문서
- 인쇄해서 배포할 가능성이 있는 문서 (`@media print`에서 전 섹션 펼침)

**쓰지 말 것**
- 수치·차트 중심 에디토리얼 리포트 → `list-deck-design`
- 16:9 슬라이드형 제안서 → `mx-deck-design`
- 섹션 3~4개짜리 짧은 문서 → 그냥 스크롤 한 장이 낫다. 탭은 오버헤드다.

## 절대 규칙 3가지

1. **폰트 CDN `<link>` 금지.** Artifact CSP가 외부 호스트를 전부 차단한다. Pretendard는 로컬 스택으로만 부른다.
   `list-deck-design`은 CDN 링크를 요구하지만 이 스킬은 반대다. 혼동하지 말 것.
2. **`<noscript>` 폴백 필수.** JS가 죽어도 전 섹션이 세로로 읽혀야 한다. 한 줄이면 된다.
3. **절대좌표 금지.** 모든 배치는 grid/flex. 표는 반드시 `.table-wrap`(overflow-x:auto) 안에.
   페이지 본문(body)은 절대 가로 스크롤되지 않는다.

## 디자인 토큰 — 실측값

```css
:root{
  --bg:#f5f5f4;        /* 페이지 배경 — 웜 그레이. 순백 금지 */
  --panel:#ffffff;     /* 카드 표면 */
  --panel2:#fafaf9;    /* 서브 표면 (테이블 헤더, 코드 칩) */
  --ink:#161616; --ink2:#454542; --muted:#71716e;
  --line:#e5e4e0; --line-soft:#efeeeb;
  --shadow:0 10px 26px rgba(20,20,20,.05);

  /* 포인트 4색 — 분류·태그가 꼭 필요한 곳에만 */
  --pt-pink:#ff86f6;   --pt-pink-deep:#c81fb7;   --pt-pink-soft:#ffe9fc;
  --pt-blue:#2e53f9;                             --pt-blue-soft:#e9edfe;
  --pt-lime:#c5ff79;   --pt-lime-deep:#4a7a00;   --pt-lime-soft:#f1ffd9;
  --pt-orange:#ff6e23; --pt-orange-deep:#d1530e; --pt-orange-soft:#ffeadd;

  --sans:Pretendard,"Pretendard Variable",-apple-system,"Apple SD Gothic Neo",
         "Noto Sans KR",system-ui,sans-serif;
  --mono:ui-monospace,"SF Mono","D2Coding",Menlo,Consolas,monospace;
}
```

### 포인트 4색 사용 룰

기본은 무채색이다. 4색은 **분류 축이 실제로 존재할 때만** 꺼낸다.
문서 하나에 분류 축은 하나여야 한다. 축을 정하고 문서 전체에서 그 매핑을 고정한다.

| 색 | 태그 클래스 | 전형적 의미 |
|---|---|---|
| blue | `.tag.core` | 확정 · 사실 · 필수 · 핵심 |
| lime | `.tag.easy` | 완료 · 안전 · 일반 패턴 · 쉬움 |
| orange | `.tag.warn` | 확인 필요 · 주의 · 가설 |
| pink | `.tag.new` | 신규 · 미확인 · 리스크 |
| 무채색 | `.tag` / `.tag.skip` | 분류 없음 · 제외 |

축을 정했으면 **첫 번째 탭에 범례를 둔다.** 범례 없는 색은 장식일 뿐이다.

## 타이포 스케일

본문 기준 13.5px. 화면에서 정보량을 많이 담기 위한 조밀한 스케일이다. 키우지 말 것.

| 역할 | 크기 / 굵기 | 비고 |
|---|---|---|
| body | 13.5px / 400 · lh 1.65 · ls -.015em | 전역 기준 |
| page-title h2 | 24px / 800 · ls -.045em | 탭별 대제목 |
| page-title p | 12.5px / muted · max-width 62ch | 대제목 아래 리드 |
| section-title h3 | 15px / 700 | 탭 내부 구획 |
| card h3 | 13.5px / 700 | 카드 제목 |
| card p | 11.5px / lh 1.7 | 카드 본문 |
| table td | 11.5px / lh 1.6 | 표 본문 |
| table th | 9px / 800 · uppercase · ls .07em | 표 헤더 |
| eyebrow · k | 9px / 800 · uppercase · ls .1~.12em | 라벨 |
| metric .value | 26px / 900 · tabular-nums | 큰 숫자 |
| tag | 9.5px / 700 | 태그 |

숫자에는 항상 `font-variant-numeric: tabular-nums`.

## 골격

```
.topbar (66px, #141414, sticky)  ── 브랜드 + 우측 메타 pill 2~3개
.layout (grid 246px / 1fr)
  ├─ .sidebar (sticky, #faf9f7)  ── .side-intro + .nav-label 그룹 + .nav-item
  └─ .main (max-width 1240px)    ── .view × N (하나만 .active)
```

**탭 전환 JS는 20줄이면 끝난다.** 프레임워크 금지. `classList.toggle('active')` + `history.replaceState`로 해시 딥링크.

### 사이드바 구성

`.nav-item`은 그룹당 2~5개. 그룹 구분은 `.nav-label`(9px uppercase).
번호(`.nav-num`, 모노 9px)는 붙이고, 항목 수가 많은 탭에는 `.nav-badge`로 개수를 표시한다 — 독자가 분량을 예측할 수 있다.

탭 총 개수 권장: **8~16개.** 20개를 넘으면 사이드바가 스크롤되어 지도 역할을 잃는다. 그때는 그룹을 쪼개 문서를 나눈다.

### 각 `.view` 상단은 항상 `.page-head`

```html
<div class="page-head">
  <div class="page-title">
    <div class="eyebrow">03 · Benchmark</div>
    <h2>벤치마킹 비교표</h2>
    <p>한 줄 리드 — 제목을 풀어쓰지 말고 새 정보를 더한다.</p>
  </div>
  <div class="head-meta"><span class="tag core">확인 12</span><span class="tag warn">확인 필요 7</span></div>
</div>
```

`.head-meta`의 태그는 **그 탭의 상태 요약**으로 쓴다. 장식으로 달지 않는다.

## 컴포넌트 레시피

| 클래스 | 용도 | 주의 |
|---|---|---|
| `.decision` | 다크 히어로 (좌 문장 / 우 수치 3줄) | **문서당 1~2개.** 보통 첫 탭 |
| `.grid.g2/.g3/.g4` + `.card` | 카드 그리드 | g4는 1080px에서 2열로 접힘 |
| `.card.flat` | 그림자 없는 카드 | 카드가 6개 넘으면 flat으로 |
| `.metric` | 큰 숫자 + 라벨 | `.value`에 tabular-nums |
| `.panel > ol` | 번호 목록 (질문·절차) | 항목 `strong`으로 시작 |
| `.table-wrap > table.t` | 표 | 열 8개 넘으면 표를 쪼갠다 |
| `.term` | 사전·서비스 카드 (이름+슬러그+본문+출처) | `.file`에 출처 모노 라인 |
| `.flow` | 5스텝 가로 플로우 | 스텝 5개 고정. 초과 시 `.grid` |
| `ul.checks` | 체크박스 리스트 | 인쇄해서 손으로 체크하는 용도 |
| `details.day` | 아코디언 (긴 항목 15개 등) | summary에 번호·제목·우측 메타 |
| `.master` | 다크 코드/프롬프트 블록 | `pre`에 `white-space:pre-wrap` |
| `.gloss-note` | 좌측 블루 바 안내문 | 탭당 1개 |
| `.say` | 발화 예시 (who / msg) | 대사·질문 예시용 |

### 출처 표기 (리서치 문서 필수)

리서치 성격의 탭에서는 모든 고유명사에 출처를 붙인다. `.term .file` 스타일 모노 라인:

```html
<div class="file">birdie.care ↗ · 확인 2026-08-10</div>
```

출처 없는 고유명사는 문서에서 뺀다. 이게 리서치 덱과 그냥 의견서를 가르는 선이다.

## 반응형

| 브레이크포인트 | 변화 |
|---|---|
| ≤1080px | `.g4`→2열, `.g3`→2열, `.decision`→1열, `.flow`→3열 |
| ≤740px | 사이드바가 상단 **가로 스크롤 탭 바**로 전환(`.side-intro`·`.nav-label` 숨김), 모든 그리드 1열 |
| `@media print` | topbar·sidebar 숨김, 전 `.view` 펼침 + `page-break-before` |

## 접근성

- `:focus-visible{outline:2px solid var(--pt-blue);outline-offset:2px}` — 탭 키보드 이동 필수
- `@media(prefers-reduced-motion:reduce)` — transition·smooth scroll 해제
- `.nav-item`은 `<button>`으로. `<div onclick>` 금지
- 명도대비: 본문 `--ink2`(#454542) on `--panel`(#fff) = 8.9:1. `--muted`(#71716e)는 **11px 이상 보조 텍스트에만**
- 장식용 아이콘·박스에는 `aria-hidden="true"` (예: `ul.checks`의 `.box`)

## 빠른 시작

```bash
cp .claude/skills/tab-deck-design/template.html ./<문서명>.html
# 텍스트만 치환. 컬러·간격·타이포는 손대지 않는다.
```

Artifact로 발행할 때:
```
favicon 1~2개 이모지 · title은 <title> 태그로 · description 한 문장
발행 전: grep -nE 'https?://(cdn|fonts|unpkg|cdnjs)' <파일> → 0건이어야 한다
```

## 흔한 실수

- **Pretendard CDN `<link>`를 넣음** → Artifact에서 폰트가 안 뜬다. 로컬 스택만.
- 포인트 4색을 분류 없이 예쁘라고 씀 → 독자가 색의 의미를 찾다가 포기한다. 범례 없으면 무채색.
- 탭을 20개 넘김 → 사이드바가 스크롤되어 지도가 아니게 된다. 문서를 쪼개라.
- 본문 폰트를 15~16px로 키움 → 이 시스템은 13.5px 조밀 스케일 전제. 카드·표 크기가 다 깨진다.
- 표를 `.table-wrap` 밖에 둠 → 모바일에서 페이지 전체가 가로로 밀린다.
- `.decision`(다크 히어로)을 탭마다 넣음 → 무게중심이 무너진다. 문서당 1~2개.
- `<noscript>` 폴백 누락 → JS 차단 환경에서 첫 탭만 보이고 나머지는 사라진다.
- 리서치 탭에서 출처 누락 → 문서 신뢰도가 통째로 날아간다.
