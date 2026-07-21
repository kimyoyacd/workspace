# Brand Strategy Deck — 컴포넌트 라이브러리 (25종)

template.html과 골든 예시(GRAIN·Boomi·MAXOS)에서 추출한 재사용 컴포넌트 정의.
HTML 덱 생성 시 **이 컴포넌트들만 조합**한다 — 새 컴포넌트를 즉흥 디자인하지 않는다.

계승 출처: GRAIN(brand-card·tier-badge·cat-card·축 후보·전략 카드),
Boomi(kv·rgroups·map·trap·섹션 리듬), MAXOS(상태 태그·데이터 밀도).

---

## A. 프로젝트·브랜드 (PART 1)

### 1. 프로젝트 요약 카드 (`.kv`)
Key-Value 행 리스트. 브리프·스냅샷·제품 스펙에 사용. [Boomi 계승]
```html
<div class="kv">
  <div class="row"><span class="k">{라벨}</span><span>{값}</span></div>
</div>
```
라벨 12px uppercase ink3 / 값 14px / 행 사이 1px line.

### 2. RFP 요구사항 카드 (`.rcard` 4분류)
명시 요구·숨은 니즈·미정의·위험 4장을 `.rgroups` 그리드에.
tagn = 분류명, h4 = 핵심 한 줄, p = 상세.

### 3. 브랜드 팩트 카드 (`.rcard` + 상태 배지)
팩트북 항목 카드. 각 카드에 정보 상태 배지 필수:
```html
<span class="status-badge fact">FACT</span>
<span class="status-badge claim">CLIENT CLAIM</span>
<span class="status-badge inference">INFERENCE</span>
<span class="status-badge hypothesis">HYPOTHESIS</span>
<span class="status-badge unknown">UNKNOWN</span>
```

### 4. 타깃 카드 (`.rcard`)
Primary/Secondary/구매자/사용자 구분. 행동·욕구·선택 기준·장벽 중심 서술.

### 5. 브랜드 자산 카드 (`.rcard`)
활용 가능한 자산 목록. 이후 전략 카드의 `brand_assets_used`와 연결됨을 명시.

### 6. 브랜드 격차 카드 (`.trap` 변형)
현재 상태(opp면) vs 목표 상태(risk면) 비교 → 아래 진짜 문제 정의 블록.

---

## B. 경쟁 리서치 (PART 2)

### 7. 경쟁 브랜드 카드 (`.brand-card`) [GRAIN 계승 — 핵심 컴포넌트]
30+ 브랜드를 카테고리별 `.brand-grid`에 배치.
```html
<div class="brand-card">
  <span class="tier-badge tier-1">T1</span>
  <div class="brand-mark">{브랜드명}</div>
  <div class="brand-meta"><b>국가</b> {국가} · <b>가격대</b> {가격대}<br><b>타깃</b> {타깃}</div>
  <div class="brand-desc"><b>핵심메시지</b> {포지셔닝 메시지 + 관련성 한 줄}</div>
  <details class="brand-more">
    <summary>상세</summary>
    강점 · 약점 · 고객 경험 · 좌표 근거(X:{x_rationale} / Y:{y_rationale})
  </details>
  <div class="brand-source"><a href="{url}" target="_blank">{도메인} ↗</a></div>
</div>
```
최소 표시: 브랜드명·경쟁유형·국가·가격대·타깃·핵심가치·포지셔닝·관련성·출처·등급.
세부 정보는 `<details>` 펼침으로 — 밀도를 죽이지 않으면서 스캔 가능하게.

### 8. 경쟁 유형 필터 (`.type-filter`)
직접/간접/대체재/인접 필터 버튼. JS로 brand-card `data-type` 토글.
```html
<div class="type-filter">
  <button data-filter="all" class="active">전체 {N}</button>
  <button data-filter="직접">직접 {n1}</button>
  <button data-filter="간접">간접 {n2}</button>
  <button data-filter="대체재">대체재 {n3}</button>
  <button data-filter="인접">인접 {n4}</button>
</div>
```

### 9. Category A/B/C 카드 (`.cat-card`) [GRAIN 계승]
카테고리 헤더 + 소속 brand-grid. **주요 3개는 큰 카드, 추가 그룹은 보조 표시.**
```html
<div class="cat-card">
  <div class="cat-label">Category A</div>
  <h1 class="cat-title">{카테고리명 — 관점 한 줄}</h1>
  <div class="cat-bullets">
    <div>{공통 가치·구매 이유}</div>
    <div>{구조적 한계 / 부족한 가치}</div>
  </div>
  <div class="brand-grid"><!-- brand-cards --></div>
</div>
```

### 10. 출처 등급 배지 (`.tier-badge`) [GRAIN 계승]
```html
<span class="tier-badge tier-1">T1</span>  <!-- 공식 -->
<span class="tier-badge tier-2">T2</span>  <!-- 언론·리포트 -->
<span class="tier-badge tier-3">T3</span>  <!-- 유통·커뮤니티 -->
<span class="tier-badge tier-4">T4</span>  <!-- 추정 — 점선 보더, "검증 필요" 툴팁 -->
```
카드 우상단 absolute. T4는 무배경+점선으로 시각 구분.

### 11. 축 후보 카드 (`.axis-card`) [GRAIN bd-axis 계승]
최소 3개 후보. 선정된 축은 `.selected`(accent1 좌보더 4px), 제외 축은 제외 이유 병기.
```html
<div class="axis-card selected">
  <div class="tagn">후보 1 — 선정</div>
  <h4>X: {좌} ↔ {우} / Y: {하} ↔ {상}</h4>
  <p>{선정/제외 근거 — 5개 평가 기준 요약}</p>
</div>
```

### 12. XY 포지셔닝 맵 (`.map`) [Boomi 계승 + 근거 연결]
```html
<div class="map">
  <div class="map-label">포지셔닝 맵</div>
  <div class="map-grid">
    <span class="axl" style="top:-22px;left:50%;transform:translateX(-50%);">{Y상} ▲</span>
    <span class="axl" style="bottom:-22px;left:50%;transform:translateX(-50%);">{Y하}</span>
    <span class="axl" style="left:-18px;bottom:-34px;">◀ {X좌}</span>
    <span class="axl" style="right:-18px;bottom:-34px;">{X우} ▶</span>
    <span class="dotb" style="left:{x}%;bottom:{y}%;" data-brand="{name}" title="{x_rationale} / {y_rationale}">{브랜드명}</span>
    <span class="dotb ws" style="left:{x}%;bottom:{y}%;">◇ {화이트스페이스명}</span>
  </div>
  <p class="map-caption">{맵 해석}</p>
</div>
```
도트의 `title`에 좌표 근거. 근거 부족 브랜드는 맵 제외 + 하단에 제외 목록.

### 13. 좌표 상세 (근거 노출)
맵 아래 `<details>` 테이블: 브랜드 | X | X근거 | Y | Y근거 | Evidence ID | 확신도.

### 14. 사분면 분석 카드 (`.rgroups` 4장)
좌상/우상/좌하/우하 각 카드: 포지션명·소속 브랜드·특징.

### 15. 화이트스페이스 카드 (`.trap` + 유형 배지)
**기회·함정 항상 쌍으로.** 유형 배지 필수:
```html
<div class="ws-card">
  <span class="ws-type true-opp">TRUE OPPORTUNITY</span>  <!-- EMERGING / FALSE / CAPABILITY GAP -->
  <h4>{화이트스페이스명} — {사분면}</h4>
  <div class="trap">
    <div class="t opp"><b>🟢 기회 근거</b>Market Gap · Customer Demand · Brand Right · Capability Fit 평가</div>
    <div class="t risk"><b>🟡 리스크·검증 필요</b>{리스크 + 추가 검증 항목}</div>
  </div>
</div>
```

---

## C. 이종업계 리서치 (PART 3)

### 16. 이종업계 사례 카드 (`.brand-card` 재사용)
경쟁 카드와 동일 구조. brand-meta에 산업·국가, brand-desc에
"해결한 문제 → 적용 방식 → 우리와 공명하는 지점".

### 17. What to Borrow 카드 (`.rcard` accent1 톤)
가져올 전략적 원리. tagn = "BORROW".

### 18. What to Translate 카드 (`.rcard` accent2 톤)
우리 브랜드에 맞게 변환할 부분. tagn = "TRANSLATE".

### 19. What to Avoid 카드 (`.rcard` 경고 톤)
표면 모방 금지 항목. tagn = "AVOID", risk 배경(#FBEFD9).

---

## D. 인사이트·전략 (PART 4)

### 20. 인사이트 카드 (`.insight-card`)
```html
<div class="insight-card">
  <div class="num">I-01</div>
  <h4>{인사이트 한 줄}</h4>
  <p>관찰 → 긴장 → 기회 구조 요약</p>
  <div class="implication">전략적 시사점: {시사점}</div>
  <div class="brand-source">근거: {Evidence IDs} · 확신도 {높음|중간|낮음}</div>
</div>
```

### 21. 전략 대안 카드 (`.strategy-card`)
```html
<div class="rcard strategy-card">
  <div class="tagn">Strategy A</div>
  <h4>{전략명}</h4>
  <p><b>{전략 한 문장}</b></p>
  <p>활용 자산: {자산} / 연결 기회: {화이트스페이스} / 차용 원리: {이종업계}</p>
  <p class="tradeoff">포기하는 것: {트레이드오프}</p>
  <div class="brand-source">근거: {Evidence IDs}</div>
</div>
```
추천 전략은 `.recommended`(accent1 좌보더 + 연한 배경).

### 22. 전략 비교표 (`.compare-table`)
행 = 7개 비교 기준(고객가치·브랜드적합·차별성·실행가능성·지속성·확장성·근거강도),
열 = 전략 대안. `overflow-x:auto` 컨테이너 필수.

### 23. 리스크 카드 (`.risk-card`)
severity 배지(high=accent2 / medium=ink3 / low=line) + 리스크 + 대응 방안 + 검증 계획.

---

## E. 공통

### 24. 출처 목록 (`.source-list`)
```html
<div class="source-item">
  <span class="src-id">E-001</span>
  <span class="tier-badge tier-1">T1</span>
  <span class="src-title">{제목}</span>
  <a class="src-link" href="{url}">{도메인} ↗</a>
</div>
```

### 25. 조사 한계 카드 (`.rcard` muted)
조사 한계 + 생략 섹션과 생략 이유(`omitted_sections`).

---

## 공통 골격

### 섹션 구조 [Boomi 계승]
```html
<section id="{id}"><div class="wrap">
  <div class="sec-no">{번호} — {영문 섹션명}</div>
  <h2 class="sec-h">{타이틀}</h2>
  <p class="sec-lead">{리드}</p>
  <!-- 컴포넌트 -->
</div></section>
```

### 파트 디바이더 (`.part-divider`)
PART 1~4 전환부. 다크 배경 + 대형 타이포.

### 네비게이션 (`.nav`)
Sticky. 로고 + PART별 앵커 링크. 820px 이하 숨김.

### 공통 JS
- 경쟁 유형 필터 토글 (data-filter → data-type)
- `<details>` 기본 접힘
- 맵 도트 hover 시 title 툴팁 (native)
외부 라이브러리 금지 — vanilla JS만.
