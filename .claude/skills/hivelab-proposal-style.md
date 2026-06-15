---
name: hivelab-proposal-style
description: Apply HIVELAB's monotone proposal design system when building HTML slide decks. Use when creating proposal slides, components, or layouts that follow HIVELAB's design language.
argument-hint: <component or page description>
allowed-tools: Read Grep Glob Bash Write Edit
---

Build the following using HIVELAB's proposal design system: $ARGUMENTS

## Reference Files

- Full specification: `HIVELAB_PROPOSAL_DESIGN_STYLE.md`
- Working slide deck (HTML with CSS variables): `proposal_pb_brand_2026.html`

When implementing, also read the HTML file above — it contains actual CSS custom properties and working slide/component examples that complement this specification.

---

# HIVELAB Proposal Design System

## 1. Visual Theme & Atmosphere

HIVELAB의 제안서는 모노톤(Monotone) 기반의 전문적이고 절제된 디자인을 사용합니다. 블랙/화이트/그레이스케일만으로 구성하되, 단 하나의 포인트 컬러 `#3E5A6C`(차분한 블루그레이)만 허용합니다. 보더리스(borderless) 카드 구조로 깔끔한 면 분할을 하며, 타이포그래피 위계를 통해 정보 계층을 명확히 전달합니다.

**Key Characteristics:**
- 모노톤 우선: 블랙/화이트/그레이만 사용, 포인트 컬러는 `#3E5A6C` 1가지
- 보더리스: 카드, 박스에 테두리 없음 — 배경색 차이로 구분
- 듀얼 폰트: Inter(영문) + Pretendard(한글)
- 다크/라이트 섹션 교차: 표지·목차·간지는 다크, 컨텐츠는 라이트
- 대형 숫자(800 weight) + 가벼운 본문(400 weight) 타이포 위계
- 슬라이드 1440×810px, 충분한 여백(최소 48px)

## 2. Color Palette & Roles

### Grayscale Base
- **Black** (`#000000`): Dark slide 기본 배경
- **Gray 900** (`#111111`): TOC 배경, 다크 요소
- **Gray 700** (`#333333`): 보조 텍스트 (dark)
- **Gray 500** (`#666666`): Label, Caption
- **Gray 300** (`#999999`): 부제, 설명 텍스트
- **Gray 100** (`#E5E5E5`): 라인, 구분선
- **Gray 50** (`#F5F5F5`): 카드 배경 (light)
- **White** (`#FFFFFF`): Light slide 기본 배경

### Point Color
- **Accent** (`#0010EC`): 유일한 포인트 컬러 — 섹션 라벨, 강조, sparkline, 버블 등
- **Accent Light** (`#7F87FF`): accent 밝은 변형 (최소 사용)

### Data Visualization (Grayscale Gradient)
- Primary: `#222222` (light) / `#FFFFFF` (dark)
- Secondary: `#3E5A6C` accent (light) / `#E0E0E0` (dark)
- Tertiary–Quinary: `#555555` → `#777777` (light) / `#BBBBBB` → `#999999` (dark)

## 3. Typography Rules

### Font Families
- **영문**: `Inter` (`--font-en`)
- **한글**: `Pretendard` (`--font-kr`)

### Hierarchy

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Cover Title | 160px | 700 | 0.9 | 표지 메인 타이틀 |
| TOC Title | 110px | 700 | 0.95 | 목차 "TABLE OF CONTENTS" |
| Divider Title | 64px | 700 | 1.05 | 섹션 간지 타이틀 |
| Hero Stat Large | 120px | 800 | 1 | 핵심 수치 (대) |
| Hero Stat | 96px | 800 | 1 | 핵심 수치 (중) |
| H1 | 36px | 700 | 1.3 | 슬라이드 제목 |
| H2 | 22px | 600 | 1.4 | 소제목 |
| Body | 15px | 400 | 1.7 | 본문 |
| Caption | 12px | 300 | 1.6 | 출처, 부가 설명 |
| Label | 11px | 500 | — | 섹션 라벨 (uppercase, tracking 0.12em) |

## 4. Component Stylings

### Card
- Background: `#F0F0F0` (light) / `var(--gray-900)` (dark)
- Radius: 14px
- Padding: 28px 32px
- Border: **none** (보더 없음)

### Badge / Pill
- Background: `rgba(62,90,108,0.12)` (accent 기반)
- Radius: 100px
- Padding: 4px 12px
- Font: 13px

### Chart Bar
- 그레이스케일 그래디언트 (월별 점진적 진행)
- 시작: `linear-gradient(180deg, #AAAAAA, #D0D0D0)` → 종료: `linear-gradient(180deg, #444444, #888888)`

### Positioning Map
- HIVELAB (자사): accent `#3E5A6C` — 유일한 컬러 버블
- 경쟁사: 그레이 톤 (`#999`, `#777`, `#AAA`, `#666`)

## 5. Slide Types & Layout

### Cover (Slide 1)
- 배경: 다크 그래디언트 (`#1A1A1A → #4A4A4A`, 160deg)
- Grid 3-row: Header 80px / Body / Footer 60px
- Body 하단 정렬, 160px bold 타이틀

### Table of Contents (Slide 2)
- 배경: `#111111`
- Grid 3-row, Body `3fr 9fr` 2열
- 좌측 110px "TABLE OF CONTENTS", 우측 2열 섹션 그리드

### Section Divider
- 배경: `#2A2A2A`
- 좌측 65% (번호 + 64px 타이틀), 우측 35% (하위 목차)
- 280px 워터마크 숫자 (6% opacity)

### Content Slides
- 배경: `#FFFFFF`
- 64px 72px 패딩, flex-column
- 카드 `#F0F0F0`, 라벨 accent `#3E5A6C`

### Closing
- 배경: `#FFFFFF`
- 중앙 정렬, accent stripe + HIVELAB 라벨 + 메인 카피 + 연락처

## 6. Layout Principles

### Spacing System
- Slide: 1440×810px
- Padding: 64px 72px (컨텐츠) / 80px (표지·목차)
- 요소 간 gap: 16~48px
- 최소 내부 여백: 48px

### Slide Structure
- 표지/목차: Grid 3-row (Header 80px / Body / Footer 60px)
- 컨텐츠: Flex column, 충분한 여백
- 다크↔라이트 교차 배치

## 7. Do's and Don'ts

### Do
- 블랙/화이트/그레이스케일만 사용
- 포인트 컬러는 `#3E5A6C` 하나만 사용
- 카드는 보더 없이 배경색 차이로 구분
- 숫자/수치는 크고 굵게(800), 본문은 가볍게(400)
- 표지·목차·간지는 다크, 컨텐츠는 라이트
- 여백 충분히 확보 (최소 48px)

### Don't
- 컬러풀한 색상 사용 금지 — 네온, 비비드 컬러 절대 불가
- 카드/박스에 테두리(border) 사용 금지
- accent 컬러를 장식 용도로 남용 금지 — 라벨·강조에만 사용
- 좁은 여백으로 빽빽하게 채우지 않기
- 다크 슬라이드에서 순백(#FFFFFF) 텍스트 대신 적절한 밝기 조절

## 8. Navigation

- `←` / `→` 화살표 키로 슬라이드 이동
- `Space` 다음 슬라이드
- `Home` / `End` 처음/마지막
- 화면 좌/우 클릭

## 9. Agent Prompt Guide

### Quick Color Reference
- Accent: `#3E5A6C`
- Dark background: `#000000`, `#111111`, `#1A1A1A`, `#2A2A2A`
- Light background: `#FFFFFF`
- Card (light): `#F0F0F0`
- Card (dark): `var(--gray-900)` = `#111111`
- Text (light slide): `#111111`
- Text (dark slide): `#FFFFFF` / `rgba(255,255,255,0.85)`
- Subtitle: `#999999`
- Caption: `#666666`

### Example Component Prompts
- "Create cover slide: dark gradient (#1A1A1A→#4A4A4A, 160deg). Grid 3-row. 160px bold title bottom-aligned. Footer centered copyright."
- "Build TOC slide: #111111 background. Grid 3fr/9fr. Left: 110px bold 'TABLE OF CONTENTS'. Right: 2-column section grid with bottom borders."
- "Build content slide: white background. 64px 72px padding. H1 36px 700 weight. Cards #F0F0F0 14px radius no border. Label accent #3E5A6C."
- "Create section divider: #2A2A2A background. Left 65% with 64px title. Right 35% sub-items. 280px watermark number at 6% opacity."
- "Build chart: grayscale bar gradients (#AAAAAA→#D0D0D0 light, #444444→#888888 dark). No colored bars."

---

## Instructions

1. Apply the design system above faithfully to the requested component/page
2. If you need additional detail, read `proposal_pb_brand_2026.html` for actual CSS variable definitions and working slide markup
3. Maintain monotone principle — grayscale only + single accent `#3E5A6C`
4. Use `Inter` (영문) + `Pretendard` (한글) font stack
5. Cards must be borderless with background color differentiation
6. Ensure 1440×810px slide dimensions
7. Dark/light section alternation: cover·TOC·divider = dark, content = light
