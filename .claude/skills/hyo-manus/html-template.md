# HYO MANUS · HTML 체크포인트 템플릿

각 Gate 완료 후 이 구조를 기반으로 HTML을 생성한다.
브랜드명, 날짜, 각 섹션 내용을 실제 데이터로 채운다.

---

## HTML 생성 규칙

1. `<!-- FILL: 설명 -->` 주석 위치에 실제 내용을 채운다.
2. 완료된 스테이지는 `status="done"`, 진행 중은 `status="active"`, 미완료는 `status="pending"` 클래스를 적용한다.
3. Gate가 통과된 섹션은 Gate 배지를 `gate-pass`로, 미통과는 `gate-pending`으로 표시한다.
4. 최종 Final Deck 슬라이드는 각 슬라이드를 `.slide-card`로 렌더링한다.

---

## HTML 전체 구조

```html
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HYO MANUS · [브랜드명] 브랜드 제안서</title>
<style>
  :root {
    --bg: #F9F8F6;
    --card: #FFFFFF;
    --accent: #1A1A1A;
    --accent2: #C8A96E;
    --muted: #6B6B6B;
    --border: #E5E3DF;
    --gate-pass: #2D6A4F;
    --gate-pending: #C9B458;
    --stage-done: #1A1A1A;
    --stage-active: #C8A96E;
    --stage-pending: #D4D4D4;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Pretendard', 'Apple SD Gothic Neo', sans-serif;
    background: var(--bg);
    color: var(--accent);
    line-height: 1.6;
  }

  /* ── 헤더 ── */
  .header {
    background: var(--accent);
    color: white;
    padding: 40px 60px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .header-brand { font-size: 11px; letter-spacing: 4px; color: var(--accent2); margin-bottom: 8px; }
  .header-title { font-size: 28px; font-weight: 700; line-height: 1.2; }
  .header-sub { font-size: 13px; color: #999; margin-top: 6px; }
  .header-meta { text-align: right; font-size: 12px; color: #999; }
  .header-meta strong { color: var(--accent2); font-size: 14px; display: block; margin-bottom: 4px; }

  /* ── 파이프라인 상태 바 ── */
  .pipeline {
    background: white;
    border-bottom: 1px solid var(--border);
    padding: 24px 60px;
    display: flex;
    align-items: center;
    gap: 0;
    overflow-x: auto;
  }
  .pip-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    min-width: 100px;
  }
  .pip-dot {
    width: 36px; height: 36px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 13px; font-weight: 700;
  }
  .pip-dot.done { background: var(--stage-done); color: white; }
  .pip-dot.active { background: var(--stage-active); color: white; }
  .pip-dot.pending { background: var(--stage-pending); color: #999; }
  .pip-label { font-size: 11px; color: var(--muted); text-align: center; white-space: nowrap; }
  .pip-line {
    flex: 1; height: 2px; min-width: 40px;
    background: var(--border);
    margin-bottom: 22px;
  }
  .pip-line.done { background: var(--stage-done); }

  /* ── 게이트 배지 ── */
  .gate-badge {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 4px 12px; border-radius: 20px;
    font-size: 11px; font-weight: 600; letter-spacing: 1px;
  }
  .gate-pass { background: #D8EFE3; color: var(--gate-pass); }
  .gate-pending { background: #FBF3D4; color: #9A7D0A; }

  /* ── 메인 컨테이너 ── */
  .main { max-width: 1200px; margin: 0 auto; padding: 40px 60px; }

  /* ── 섹션 ── */
  .stage-section {
    margin-bottom: 60px;
  }
  .stage-header {
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 2px solid var(--accent);
    padding-bottom: 12px;
    margin-bottom: 28px;
  }
  .stage-number {
    font-size: 11px; letter-spacing: 3px; color: var(--muted); margin-bottom: 4px;
  }
  .stage-title { font-size: 22px; font-weight: 700; }
  .stage-desc { font-size: 13px; color: var(--muted); margin-top: 4px; }

  /* ── 카드 그리드 ── */
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin-bottom: 28px;
  }
  .card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 24px;
  }
  .card-label {
    font-size: 10px; letter-spacing: 2px; color: var(--muted);
    margin-bottom: 10px; text-transform: uppercase;
  }
  .card-title { font-size: 16px; font-weight: 700; margin-bottom: 8px; }
  .card-body { font-size: 13px; color: var(--muted); line-height: 1.7; }

  /* ── 포지셔닝 맵 ── */
  .positioning-map {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 32px;
    font-family: monospace;
    font-size: 13px;
    white-space: pre;
    overflow-x: auto;
    margin-bottom: 28px;
    line-height: 1.5;
  }

  /* ── 경쟁사 테이블 ── */
  .data-table {
    width: 100%;
    border-collapse: collapse;
    background: var(--card);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 28px;
    font-size: 13px;
  }
  .data-table th {
    background: var(--accent);
    color: white;
    padding: 10px 14px;
    text-align: left;
    font-weight: 600;
    font-size: 11px;
    letter-spacing: 1px;
  }
  .data-table td {
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    color: var(--muted);
  }
  .data-table tr:last-child td { border-bottom: none; }
  .data-table tr:hover td { background: #F5F4F2; }

  /* ── 클러스터 뱃지 ── */
  .cluster-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
    margin-bottom: 28px;
  }
  .cluster-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 16px;
  }
  .cluster-name { font-size: 13px; font-weight: 700; margin-bottom: 6px; }
  .cluster-brands { font-size: 11px; color: var(--muted); }

  /* ── 퍼소나 카드 ── */
  .persona-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 28px;
  }
  .persona-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 24px;
    border-top: 4px solid var(--accent2);
  }
  .persona-name { font-size: 16px; font-weight: 700; margin-bottom: 4px; }
  .persona-role { font-size: 11px; color: var(--muted); margin-bottom: 12px; }
  .persona-item { font-size: 12px; margin-bottom: 6px; }
  .persona-item strong { color: var(--accent); }

  /* ── POV 블록 ── */
  .pov-block {
    background: var(--accent);
    color: white;
    border-radius: 8px;
    padding: 32px;
    margin-bottom: 28px;
    position: relative;
  }
  .pov-label {
    font-size: 10px; letter-spacing: 3px; color: var(--accent2);
    margin-bottom: 12px;
  }
  .pov-text { font-size: 18px; font-weight: 500; line-height: 1.6; font-style: italic; }
  .pov-author { font-size: 12px; color: #999; margin-top: 16px; }

  /* ── 비주얼 컨셉 ── */
  .concept-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 28px;
  }
  .concept-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
  }
  .concept-header {
    background: var(--accent);
    color: white;
    padding: 14px 18px;
    font-size: 13px;
    font-weight: 700;
  }
  .concept-body { padding: 18px; }
  .concept-keywords {
    font-size: 11px; color: var(--muted);
    margin-bottom: 10px; line-height: 1.8;
  }
  .concept-score {
    display: inline-block;
    background: var(--accent2);
    color: white;
    font-size: 11px;
    font-weight: 700;
    padding: 2px 10px;
    border-radius: 20px;
  }

  /* ── 컬러 팔레트 ── */
  .color-palette {
    display: flex; gap: 12px; flex-wrap: wrap;
    margin-bottom: 28px;
  }
  .color-chip {
    display: flex; flex-direction: column; gap: 8px;
    align-items: center;
  }
  .color-swatch {
    width: 60px; height: 60px; border-radius: 8px;
    border: 1px solid var(--border);
  }
  .color-name { font-size: 10px; color: var(--muted); text-align: center; }
  .color-hex { font-size: 11px; font-weight: 700; font-family: monospace; }

  /* ── 가치 카드 ── */
  .value-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;
    margin-bottom: 28px;
  }
  .value-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 24px;
    border-left: 4px solid var(--accent);
  }
  .value-num { font-size: 10px; letter-spacing: 2px; color: var(--muted); margin-bottom: 6px; }
  .value-name { font-size: 17px; font-weight: 800; margin-bottom: 10px; }
  .value-def { font-size: 13px; color: var(--muted); font-style: italic; margin-bottom: 12px; }
  .value-principle { font-size: 12px; line-height: 1.7; }

  /* ── 카피 시스템 ── */
  .copy-list { list-style: none; margin-bottom: 28px; }
  .copy-list li {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 14px 20px;
    margin-bottom: 8px;
    font-size: 15px;
    font-weight: 500;
    display: flex; align-items: center; gap: 12px;
  }
  .copy-list li::before {
    content: '"';
    font-size: 24px;
    color: var(--accent2);
    font-weight: 700;
    line-height: 1;
  }

  /* ── 슬라이드 덱 ── */
  .slide-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 16px;
    margin-bottom: 28px;
  }
  .slide-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 20px;
    position: relative;
  }
  .slide-num {
    position: absolute; top: 12px; right: 14px;
    font-size: 11px; color: var(--muted); font-family: monospace;
  }
  .slide-section { font-size: 10px; letter-spacing: 2px; color: var(--accent2); margin-bottom: 6px; }
  .slide-title { font-size: 14px; font-weight: 700; margin-bottom: 8px; }
  .slide-msg { font-size: 12px; color: var(--muted); line-height: 1.6; }

  /* ── Gate 체크 박스 ── */
  .gate-checklist {
    background: #F0F8F4;
    border: 1px solid #B7DFCB;
    border-radius: 8px;
    padding: 20px 24px;
    margin: 20px 0 28px;
  }
  .gate-checklist-title {
    font-size: 12px; font-weight: 700; color: var(--gate-pass);
    letter-spacing: 2px; margin-bottom: 12px;
  }
  .gate-check-item {
    font-size: 13px; margin-bottom: 6px;
    display: flex; align-items: center; gap: 8px;
  }
  .gate-check-item::before { content: "✅"; font-size: 13px; }

  /* ── 브랜드 보드 ── */
  .brand-board {
    background: var(--accent);
    color: white;
    border-radius: 12px;
    padding: 40px;
    margin-bottom: 28px;
  }
  .brand-board-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    margin-top: 24px;
  }
  .bb-section { }
  .bb-label { font-size: 10px; letter-spacing: 3px; color: var(--accent2); margin-bottom: 8px; }
  .bb-value { font-size: 14px; line-height: 1.6; }

  /* ── 푸터 ── */
  .footer {
    border-top: 1px solid var(--border);
    padding: 24px 60px;
    display: flex; justify-content: space-between; align-items: center;
    font-size: 11px; color: var(--muted);
  }
  .footer-brand { font-weight: 700; color: var(--accent); letter-spacing: 2px; }

  /* ── 반응형 ── */
  @media (max-width: 768px) {
    .header, .pipeline, .main, .footer { padding-left: 20px; padding-right: 20px; }
    .persona-grid, .concept-grid { grid-template-columns: 1fr; }
    .brand-board-grid { grid-template-columns: 1fr; }
  }
</style>
</head>
<body>

<!-- ══ HEADER ══ -->
<header class="header">
  <div>
    <div class="header-brand">HYO MANUS · 브랜드 제안 프로세스</div>
    <div class="header-title"><!-- FILL: 브랜드명 --> 브랜드 제안서</div>
    <div class="header-sub"><!-- FILL: 카테고리 · 시장 --></div>
  </div>
  <div class="header-meta">
    <strong><!-- FILL: 현재 게이트 상태 (예: Gate 2 완료) --></strong>
    <!-- FILL: 생성일자 -->
  </div>
</header>

<!-- ══ PIPELINE STATUS ══ -->
<div class="pipeline">
  <div class="pip-step">
    <div class="pip-dot <!-- FILL: done/active/pending -->">1</div>
    <div class="pip-label">HYO MANUS 1차<br>리서치·포지셔닝</div>
  </div>
  <div class="pip-line <!-- FILL: done/-- -->"></div>
  <div class="pip-step">
    <div class="pip-dot <!-- FILL: done/active/pending -->">G1</div>
    <div class="pip-label">Gate 1</div>
  </div>
  <div class="pip-line <!-- FILL: done/-- -->"></div>
  <div class="pip-step">
    <div class="pip-dot <!-- FILL: done/active/pending -->">2</div>
    <div class="pip-label">HYO MANUS 2차<br>비주얼·컨셉</div>
  </div>
  <div class="pip-line <!-- FILL: done/-- -->"></div>
  <div class="pip-step">
    <div class="pip-dot <!-- FILL: done/active/pending -->">G2</div>
    <div class="pip-label">Gate 2</div>
  </div>
  <div class="pip-line <!-- FILL: done/-- -->"></div>
  <div class="pip-step">
    <div class="pip-dot <!-- FILL: done/active/pending -->">3</div>
    <div class="pip-label">HYO MANUS 3차<br>브랜드 시스템</div>
  </div>
  <div class="pip-line <!-- FILL: done/-- -->"></div>
  <div class="pip-step">
    <div class="pip-dot <!-- FILL: done/active/pending -->">★</div>
    <div class="pip-label">Final Deck<br>슬라이드 덱</div>
  </div>
</div>

<!-- ══ MAIN ══ -->
<main class="main">

  <!-- ═ STAGE 1 ═ -->
  <section class="stage-section">
    <div class="stage-header">
      <div>
        <div class="stage-number">HYO MANUS 1차 · RESEARCH & POSITIONING</div>
        <div class="stage-title">리서치 & 포지셔닝 전략</div>
        <div class="stage-desc">경쟁 브랜드 30개 분석 → 포지셔닝 맵 → 화이트스페이스</div>
      </div>
      <span class="gate-badge <!-- FILL: gate-pass/gate-pending -->">
        <!-- FILL: ✓ Gate 1 통과 / ⏳ Gate 1 대기 -->
      </span>
    </div>

    <!-- 1.1 프로젝트 브리프 -->
    <div class="card-grid">
      <div class="card">
        <div class="card-label">Brand</div>
        <div class="card-title"><!-- FILL: 브랜드명 --></div>
        <div class="card-body"><!-- FILL: 카테고리 · 가격대 · 시장 --></div>
      </div>
      <div class="card">
        <div class="card-label">Target</div>
        <div class="card-title"><!-- FILL: 목표 고객 --></div>
        <div class="card-body"><!-- FILL: 타겟 상세 --></div>
      </div>
      <div class="card">
        <div class="card-label">Brand Goal</div>
        <div class="card-title"><!-- FILL: 브랜드 목표 --></div>
        <div class="card-body"><!-- FILL: 원하는/피해야 할 인상 --></div>
      </div>
    </div>

    <!-- 1.2 경쟁사 30개 테이블 -->
    <h3 style="font-size:14px;margin-bottom:14px;letter-spacing:1px;">경쟁사 30개 리서치</h3>
    <table class="data-table">
      <thead>
        <tr>
          <th>#</th><th>브랜드</th><th>국가</th><th>가격대</th>
          <th>스타일 코드</th><th>젠더</th><th>강점</th><th>약점</th>
        </tr>
      </thead>
      <tbody>
        <!-- FILL: 30개 브랜드 행 (각각 <tr><td>...</td></tr>) -->
      </tbody>
    </table>

    <!-- 1.3 클러스터링 -->
    <h3 style="font-size:14px;margin-bottom:14px;letter-spacing:1px;">경쟁사 클러스터링</h3>
    <div class="cluster-grid">
      <!-- FILL: 각 클러스터 카드
      <div class="cluster-card">
        <div class="cluster-name">Group A · 조용한 감각파</div>
        <div class="cluster-brands">Lemaire / Toteme / A.P.C. / Insilence</div>
      </div>
      -->
    </div>

    <!-- 1.4 포지셔닝 맵 -->
    <h3 style="font-size:14px;margin-bottom:14px;letter-spacing:1px;">XY 포지셔닝 맵</h3>
    <div class="positioning-map"><!-- FILL: ASCII 포지셔닝 맵 --></div>

    <!-- 1.5 퍼소나 -->
    <h3 style="font-size:14px;margin-bottom:14px;letter-spacing:1px;">타겟 퍼소나</h3>
    <div class="persona-grid">
      <!-- FILL: 퍼소나 카드 3개
      <div class="persona-card">
        <div class="persona-name">조용한 취향러</div>
        <div class="persona-role">28세 여성 · 마케터</div>
        <div class="persona-item"><strong>선호</strong> 오버사이즈, 중성 색감</div>
        <div class="persona-item"><strong>회피</strong> 스트리트 로고</div>
        <div class="persona-item"><strong>지출</strong> 개당 15~30만원</div>
      </div>
      -->
    </div>

    <!-- 1.6 화이트스페이스 + 포지셔닝 전략 -->
    <div class="card-grid">
      <div class="card">
        <div class="card-label">Market White Space</div>
        <div class="card-body"><!-- FILL: 시장 빈자리 정의 --></div>
      </div>
      <div class="card">
        <div class="card-label">Positioning Strategy</div>
        <div class="card-body"><!-- FILL: 포지셔닝 한 문장 --></div>
      </div>
    </div>

    <!-- 1.7 효정 렌즈 -->
    <div class="pov-block">
      <div class="pov-label">HYO · DESIGNER LENS</div>
      <div class="pov-text"><!-- FILL: 효정 관점 한 문장 --></div>
      <div class="pov-author">— HYO MANUS 1차 Director POV</div>
    </div>

    <!-- Gate 1 체크리스트 -->
    <div class="gate-checklist">
      <div class="gate-checklist-title">GATE 1 CHECKLIST</div>
      <!-- FILL: 각 체크 항목
      <div class="gate-check-item">경쟁 브랜드 30개 이상</div>
      <div class="gate-check-item">포지셔닝 맵 빈자리 설명</div>
      -->
    </div>
  </section>

  <!-- ═ STAGE 2 ═ -->
  <section class="stage-section">
    <div class="stage-header">
      <div>
        <div class="stage-number">HYO MANUS 2차 · VISUAL IDENTITY & CONCEPT</div>
        <div class="stage-title">비주얼 아이덴티티 & 컨셉 발산</div>
        <div class="stage-desc">Visual DNA → 6개 컨셉 테리토리 → Client × Mood Matrix</div>
      </div>
      <span class="gate-badge <!-- FILL: gate-pass/gate-pending -->">
        <!-- FILL: ✓ Gate 2 통과 / ⏳ Gate 2 대기 -->
      </span>
    </div>

    <!-- 2.1 비주얼 DNA -->
    <h3 style="font-size:14px;margin-bottom:14px;letter-spacing:1px;">Visual Identity DNA</h3>
    <div class="card-grid">
      <!-- FILL: Form/Color/Material/Typography/Photography 카드들 -->
    </div>

    <!-- 2.2 6개 컨셉 테리토리 -->
    <h3 style="font-size:14px;margin-bottom:14px;letter-spacing:1px;">6개 컨셉 테리토리</h3>
    <div class="concept-grid">
      <!-- FILL: 6개 컨셉 카드
      <div class="concept-card">
        <div class="concept-header">Territory 1 · Lunar Stillness</div>
        <div class="concept-body">
          <div class="concept-keywords">달빛, 새벽, 정적, 서울 골목</div>
          <div>컬러: 오트밀 · 쿨 그레이 · 차콜</div>
          <div style="margin-top:10px"><span class="concept-score">Strategy Fit 9/10</span></div>
        </div>
      </div>
      -->
    </div>

    <!-- 2.3 Client × Mood Matrix 테이블 -->
    <h3 style="font-size:14px;margin-bottom:14px;letter-spacing:1px;">Client × Mood Matrix</h3>
    <table class="data-table">
      <thead>
        <tr>
          <th>컨셉</th><th>취향러 28F</th><th>커리어맨 35M</th><th>큐레이터 42F</th><th>글로벌 MZ</th><th>평균</th>
        </tr>
      </thead>
      <tbody>
        <!-- FILL: 6개 컨셉별 점수 행 -->
      </tbody>
    </table>

    <!-- 2.4 컨셉 숏리스트 -->
    <h3 style="font-size:14px;margin-bottom:14px;letter-spacing:1px;">컨셉 숏리스트</h3>
    <div class="card-grid">
      <!-- FILL: 선정된 2~3개 컨셉 카드 -->
    </div>

    <!-- 2.5 이미지 프롬프트 팩 -->
    <div class="card">
      <div class="card-label">Image Prompt Pack · Higgsfield</div>
      <div class="card-body" style="white-space:pre-line;font-family:monospace;font-size:12px;">
<!-- FILL: 5개 이미지 생성 프롬프트 -->
      </div>
    </div>

    <!-- Gate 2 체크리스트 -->
    <div class="gate-checklist" style="margin-top:20px;">
      <div class="gate-checklist-title">GATE 2 CHECKLIST</div>
      <!-- FILL: 각 체크 항목 -->
    </div>
  </section>

  <!-- ═ STAGE 3 ═ -->
  <section class="stage-section">
    <div class="stage-header">
      <div>
        <div class="stage-number">HYO MANUS 3차 · BRAND SYSTEM</div>
        <div class="stage-title">브랜드 시스템화</div>
        <div class="stage-desc">Brand Board → Value Cards → Copy System → Final Deck</div>
      </div>
      <span class="gate-badge <!-- FILL: gate-pass/gate-pending -->">
        <!-- FILL: ✓ Gate 3 통과 / ⏳ Gate 3 대기 -->
      </span>
    </div>

    <!-- 3.1 Brand Board -->
    <div class="brand-board">
      <div style="font-size:11px;letter-spacing:4px;color:var(--accent2);">BRAND BOARD</div>
      <div class="brand-board-grid">
        <div class="bb-section">
          <div class="bb-label">Brand Essence</div>
          <div class="bb-value"><!-- FILL: 브랜드 에센스 --></div>
        </div>
        <div class="bb-section">
          <div class="bb-label">Positioning</div>
          <div class="bb-value"><!-- FILL: 포지셔닝 --></div>
        </div>
        <div class="bb-section">
          <div class="bb-label">Color Palette</div>
          <div class="bb-value"><!-- FILL: 컬러 설명 --></div>
        </div>
        <div class="bb-section">
          <div class="bb-label">Typography</div>
          <div class="bb-value"><!-- FILL: 타이포 방향 --></div>
        </div>
      </div>
    </div>

    <!-- 3.2 컬러 팔레트 -->
    <h3 style="font-size:14px;margin-bottom:14px;letter-spacing:1px;">컬러 시스템</h3>
    <div class="color-palette">
      <!-- FILL: 컬러 칩 5개
      <div class="color-chip">
        <div class="color-swatch" style="background:#F5F3EE;"></div>
        <div class="color-hex">#F5F3EE</div>
        <div class="color-name">LUNE WHITE</div>
      </div>
      -->
    </div>

    <!-- 3.3 Value Cards -->
    <h3 style="font-size:14px;margin-bottom:14px;letter-spacing:1px;">Value Cards</h3>
    <div class="value-cards">
      <!-- FILL: 3~5개 가치 카드
      <div class="value-card">
        <div class="value-num">VALUE 01</div>
        <div class="value-name">STILLNESS</div>
        <div class="value-def">"아무것도 외치지 않는 것이 가장 강한 말이다."</div>
        <div class="value-principle">제품 원칙: 로고는 안감, 표면은 소재만</div>
      </div>
      -->
    </div>

    <!-- 3.4 카피 헤드라인 시스템 -->
    <h3 style="font-size:14px;margin-bottom:14px;letter-spacing:1px;">Copy Headline System</h3>
    <ul class="copy-list">
      <!-- FILL: 추천 헤드라인 5개
      <li>달빛 아래, 당신이 보인다</li>
      -->
    </ul>

    <!-- 3.5 CI/BI 경쟁사 감사 -->
    <h3 style="font-size:14px;margin-bottom:14px;letter-spacing:1px;">CI/BI Audit</h3>
    <table class="data-table">
      <thead>
        <tr>
          <th>브랜드</th><th>컬러</th><th>타입</th><th>이미지 톤</th><th>우리와의 차이</th>
        </tr>
      </thead>
      <tbody>
        <!-- FILL: 경쟁사 5~8개 감사 행 -->
      </tbody>
    </table>

    <!-- 3.6 Director Final Check -->
    <div class="pov-block">
      <div class="pov-label">HYO · DIRECTOR FINAL CHECK</div>
      <div class="pov-text"><!-- FILL: 최종 디렉터 코멘트 --></div>
      <div class="pov-author">— HYO MANUS 3차 Director Final Check</div>
    </div>
  </section>

  <!-- ═ FINAL DECK ═ -->
  <section class="stage-section">
    <div class="stage-header">
      <div>
        <div class="stage-number">FINAL SLIDE DECK · 35~45 SLIDES</div>
        <div class="stage-title">최종 슬라이드 덱</div>
        <div class="stage-desc">slide_generation_ready: true 확인 후 생성됨</div>
      </div>
      <span class="gate-badge <!-- FILL: gate-pass/gate-pending -->">
        <!-- FILL: ✓ 덱 완성 / ⏳ 3차 완료 대기 -->
      </span>
    </div>

    <div class="slide-grid">
      <!-- FILL: 35~45개 슬라이드 카드
      <div class="slide-card">
        <div class="slide-num">01</div>
        <div class="slide-section">COVER</div>
        <div class="slide-title">LUNE 브랜드 제안서</div>
        <div class="slide-msg">태그라인 + 브랜드 에센스</div>
      </div>
      -->
    </div>
  </section>

</main>

<!-- ══ FOOTER ══ -->
<footer class="footer">
  <div>
    <div class="footer-brand">HYO MANUS</div>
    <div>© 효정 브랜드 제안 프로세스 · 외부 배포 금지</div>
  </div>
  <div><!-- FILL: 브랜드명 --> · <!-- FILL: 생성일 --></div>
</footer>

</body>
</html>
```
