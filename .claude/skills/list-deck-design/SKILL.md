---
name: list-deck-design
description: Build a single-page Korean editorial report ("list deck") in the State of AI Design visual style — cream paper background, vivid coral accent, Pretendard typography, stat-strip + bar-chart + tool-grid + pull-quote + donut + dark-callout components. Use when the user wants to turn a project, dataset, retrospective, or research summary into one polished HTML page with numbers and content organized in an editorial-report aesthetic. Triggers: "리포트로 정리", "list deck", "state of ~ 스타일", "stateofaidesign 처럼", "수치를 보기 좋게".
---

# List Deck Design — State of AI Design 스타일 한글 리포트

데이터·수치 중심의 단일 페이지 리포트를 만들 때 쓰는 시각 시스템. 잡지처럼 읽히되 대시보드처럼 수치가 또렷한 톤이 목표.

## 언제 쓰나

- 연간/분기 회고를 한 페이지 리포트로 정리할 때
- 설문·리서치 결과를 "State of X" 형태로 보여줄 때
- 프로젝트 결과·KPI·런칭 회고를 외부 공유용 HTML 한 장으로 만들 때
- 사내 위키에 박제할 데이터 스토리

쓰지 말 것: 인터랙티브 대시보드(실시간 차트, 필터링), 마케팅 랜딩 페이지, 일반 블로그 글.

## 디자인 토큰

```css
:root {
  /* paper-and-ink palette — State of AI Design 계열 */
  --bg:     #F1ECDB;   /* warm paper */
  --ink:    #111111;   /* near-black */
  --muted:  #6B665C;   /* secondary text */
  --rule:   #D8D2BF;   /* hairline divider */
  --chip:   #E5DFCB;   /* neutral chip / track */

  /* signature accent — coral red */
  --accent:        #FF4E1B;
  --accent-soft:   #FFE2D2;
  --accent-ink:    #FFFFFF;  /* text on accent */

  /* typography — Pretendard only */
  --sans: "Pretendard Variable", Pretendard, -apple-system,
          BlinkMacSystemFont, system-ui, "Segoe UI",
          Roboto, "Helvetica Neue", "Apple SD Gothic Neo",
          "Noto Sans KR", sans-serif;
  --mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;

  --maxw: 1200px;
}
```

## 필수 셋업

`<head>`에 항상 이 한 줄을 포함한다. Pretendard Variable 가변 폰트 — 100~900까지 한 파일.

```html
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
```

수치·메타 라벨에만 모노스페이스 폰트를 섞는다(JetBrains Mono). 본문·헤드라인은 전부 Pretendard 한 가족으로 위계를 만든다. 헤드라인 위계는 **굵기로** — `font-weight: 800~900` + 큰 사이즈 + `letter-spacing: -0.03em`.

## 타이포 위계

| 역할 | 폰트 / 크기 | 굵기 / 자간 |
|---|---|---|
| Chapter title | Pretendard · `clamp(48px, 7vw, 96px)` | 800 · `-0.04em` · `line-height: 0.95` |
| Section head (h2) | Pretendard · `clamp(28px, 3.4vw, 44px)` | 700 · `-0.025em` |
| Lede(리드 문단) | Pretendard · 22px | 500 · `-0.01em` · `line-height: 1.45` |
| Body | Pretendard · 16px | 400 · `line-height: 1.55` |
| Big number | Pretendard · `clamp(40px, 5vw, 64px)` | 700 · `-0.02em` · `feature-settings: "tnum"` |
| Meta / unit / rank | JetBrains Mono · 11~13px | 500 |

핵심: **숫자에는 항상 `font-variant-numeric: tabular-nums;` 또는 `font-feature-settings: "tnum";`** — 시각적으로 줄이 맞아야 통계가 통계처럼 보인다.

## 액센트 색 사용 규칙

코랄(`--accent`)은 **페이지당 4~6번만** 등장시킨다. 남용하면 잡지 톤이 아니라 광고지가 된다.

쓰는 자리:
1. 챕터 타이틀의 한 단어 강조 (`<em>`)
2. CHAPTER 라벨 pill 배경
3. 큰 콜아웃 박스의 거대 숫자
4. 가장 상승률 높은 차트 막대 1~2개
5. 도넛 차트의 채워진 부분
6. 본문 강조 형광펜(`linear-gradient` 하단 55%)

본문 링크·일반 텍스트에는 절대 쓰지 않는다.

## 컴포넌트 레시피

### 1. Stat Strip — 핵심 수치 4칸

페이지 시작과 끝에 한 번씩. 위·아래에 1px 검정 선, 칸 사이는 점선이 아니라 1px `--rule`. 큰 숫자 + ▲/▼ 델타 칩 + 라벨 한 줄.

```html
<div class="stat-strip">
  <div class="stat">
    <div class="num">87<span class="unit">%</span></div>
    <div class="delta">▲ 14pt YoY</div>
    <div class="label">주 1회 이상 AI 도구 사용</div>
  </div>
  <!-- 3개 더 -->
</div>
```

### 2. Section Head — 80px 번호 + 큰 제목 + deck

각 섹션은 위쪽 1px 검정 선 + 왼쪽에 `01 / 06` 같은 모노 번호, 오른쪽에 큰 제목과 deck(서브헤드).

```html
<div class="section-head">
  <div class="no">01 / 06</div>
  <div>
    <h2>도입은 더 이상 이야기가 아니다.<br/>이제는 <em>조합</em>이다.</h2>
    <p class="deck">올해 화두는 ‘쓰느냐 마느냐’가 아니라, 몇 개를 어떤 순서로 쌓느냐다.</p>
  </div>
</div>
```

### 3. Bar Chart — CSS only

`grid-template-columns: 140px 1fr 56px` (이름 · 막대 · 수치). 트랙은 `--chip`, 채움은 `--ink` 또는 `--accent`. 강조하고 싶은 1~2개만 액센트.

### 4. Tool Grid — 랭킹된 카드

3열(데스크탑) / 2열 / 1열 그리드. 카드 사이는 `gap: 1px; background: --rule;` 로 hairline 분리. 각 카드: 순위(모노) · 이름(굵게) · 점유율(굵게+액센트) · 한 줄 코멘트.

### 5. Pull Quote — 챕터당 1~2번

위·아래 1px 검정 선, 왼쪽 80px에 `QUOTE 01` 같은 모노 라벨, 오른쪽에 큰 인용. 인용 안에서 핵심 어구를 `<em>` + `color: --accent`로 강조. cite는 muted 13px.

### 6. Donut + Legend

`conic-gradient`로 도넛. 가운데 구멍은 `::after`로 배경색 원을 얹어 만든다. 옆에는 항목·수치 리스트(점선 구분).

### 7. Dark Callout — 페이지에 1~2번만

`background: --ink; color: --bg;` 그리드 2열로 (설명 텍스트 | 거대 숫자). 큰 숫자는 액센트 컬러. 페이지에 너무 많이 두면 호흡이 깨진다.

### 8. Highlighter (본문 강조)

문장의 핵심 구절에:

```css
.hl { background: linear-gradient(180deg, transparent 55%, var(--accent-soft) 55%); padding: 0 2px; }
```

## 페이지 구조 — 권장 시퀀스

1. **상단 sticky 네비** (브랜드 + 챕터 메뉴, blur 처리)
2. **2열 그리드**: 좌측 sticky 목차(220px) / 우측 본문
3. **CHAPTER pill + 메타** → **대형 챕터 타이틀** → **lede 한 문단**
4. **Stat Strip** (오프닝)
5. **Section 01** — 텍스트 ↔ 차트 2열 + chip 태그
6. **Section 02** — Tool Grid 6칸
7. **Pull Quote 01**
8. **Section 03** — Donut + 텍스트 + Dark Callout
9. **Section 04** — 테마 3칸 그리드
10. **Pull Quote 02**
11. **Section 05 (Outlook)** — Stat Strip (클로징)
12. **Footer** — 메타데이터 한 줄

각 섹션 사이 여백은 `margin-bottom: 88px;`. 빡빡하지 않게.

## 콘텐츠 톤

- 헤드라인: 단정문, 짧게. 한 단어만 코랄 italic 으로 비틀어주면 잡지 톤이 살아난다.
- deck(서브헤드): 헤드라인을 풀어쓰지 말고 **새로운 정보**를 더한다.
- 수치 라벨: 무엇을 셌는지 명확하게. "주 1회 이상 사용" > "사용자".
- delta 칩: 비교 기준 명시 (`▲ 14pt YoY`, `▼ 38% vs 2024`).
- 카드 코멘트: 한 줄, "그래서 뭐?"에 답하는 한 줄.

## 빠른 시작

이 디렉터리의 [`template.html`](./template.html) 을 복사해서 그 위에 사용자 데이터로 텍스트만 치환한다. 컬러·간격·구조는 손대지 않는 게 일관성에 가장 좋다.

```bash
cp .claude/skills/list-deck-design/template.html ./<프로젝트명>-report.html
# 그 다음 텍스트만 치환
```

## 흔한 실수

- Pretendard 만 쓰기로 했는데 헤드라인에 굵기를 안 올림 → 위계가 사라짐. 800~900을 써라.
- 액센트 색을 본문 링크·아이콘에도 묻혀씀 → 광고지처럼 보임. 4~6회만.
- Tool Grid를 5칸·7칸 같은 홀수로 둠 → 그리드가 깨진다. 3·6·9칸.
- Stat Strip의 숫자에 `tabular-nums` 누락 → 큰 숫자가 들쭉날쭉. 잊지 말 것.
- 도넛 가운데 구멍의 배경색을 흰색으로 둠 → paper 배경과 안 맞는다. `--bg`로.
- 너무 많은 Dark Callout → 무게중심이 무너진다. 페이지당 1~2개.
