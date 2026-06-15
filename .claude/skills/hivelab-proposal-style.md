---
name: hivelab-proposal-style
description: HIVELAB PROPOSAL 디자인 스타일 가이드. 제안서 HTML 슬라이드 제작 시 모노톤 디자인 시스템, 컬러, 타이포, 레이아웃 규칙을 참조. Use when creating or editing HIVELAB proposal deck slides.
---

# HIVELAB | PROPOSAL — Design Style Guide

## Overview

색조 PB브랜드 상세페이지 제작 협력사 제안서의 최종 디자인 시스템.
모노톤(Monotone) 기반, 단일 포인트 컬러, 보더리스 카드 구조.

---

## 1. Color System

### Base Palette — Grayscale

| Token | Hex | Usage |
|-------|-----|-------|
| `--black` | `#000000` | Dark slide 기본 배경 |
| `--gray-900` | `#111111` | TOC 배경, 다크 요소 |
| `--gray-700` | `#333333` | 보조 텍스트 (dark) |
| `--gray-500` | `#666666` | Label, Caption |
| `--gray-300` | `#999999` | 부제, 설명 텍스트 |
| `--gray-100` | `#E5E5E5` | 라인, 구분선 |
| `--gray-50` | `#F5F5F5` | 카드 배경 (light) |
| `--white` | `#FFFFFF` | Light slide 기본 배경 |

### Point Color — 1가지만 사용

| Token | Hex | Usage |
|-------|-----|-------|
| `--accent` | `#3E5A6C` | 유일한 포인트 컬러. 섹션 라벨, HIVELAB 강조, sparkline, 포지셔닝 맵 "US" 버블 등 |
| `--accent-light` | `#6A8FA3` | accent의 밝은 변형 (최소 사용) |

### 차트/데이터 시각화 — Grayscale Gradient

| 순서 | Light Mode | Dark Mode | 용도 |
|------|-----------|-----------|------|
| Primary | `#222222` | `#FFFFFF` | 가장 중요한 수치 |
| Secondary | `#3E5A6C` (accent) | `#E0E0E0` | 하이라이트 데이터 |
| Tertiary | `#555555` | `#BBBBBB` | 보조 데이터 |
| Quaternary | `#666666` | `#AAAAAA` | 추가 항목 |
| Quinary | `#777777` | `#999999` | 배경 데이터 |

---

## 2. Typography

### Font Stack

- 영문: `Inter` (`--font-en`)
- 한글: `Pretendard` (`--font-kr`)

### Type Scale

| Class | Size | Weight | Line-height | 용도 |
|-------|------|--------|-------------|------|
| Cover Title | 160px | 700 | 0.9 | 표지 메인 타이틀 |
| TOC Title | 110px | 700 | 0.95 | 목차 "TABLE OF CONTENTS" |
| Divider Title | 64px | 700 | 1.05 | 섹션 간지 타이틀 |
| `.hero-stat-lg` | 120px | 800 | 1 | 핵심 수치 (대) |
| `.hero-stat` | 96px | 800 | 1 | 핵심 수치 (중) |
| `.h1` | 36px | 700 | 1.3 | 슬라이드 제목 |
| `.h2` | 22px | 600 | 1.4 | 소제목 |
| `.body-text` | 15px | 400 | 1.7 | 본문 |
| `.caption` | 12px | 300 | 1.6 | 출처, 부가 설명 |
| `.label` | 11px | 500 | — | 섹션 라벨 (uppercase, tracking 0.12em) |

---

## 3. Slide Types

### 3.1 Cover (Slide 1)
- **배경**: 다크 그레이 그래디언트 (`#1A1A1A → #4A4A4A`, 160deg)
- **레이아웃**: Grid 3-row (Header 80px / Body / Footer 60px)
- **Header**: 3열 — `[고객사] X HIVELAB` | `PROPOSAL` | `2026`
- **Body**: 하단 정렬, 서브타이틀(42px light) + 메인 타이틀(160px bold)
- **Footer**: 중앙 정렬, 저작권 + 면책 문구

### 3.2 Table of Contents (Slide 2)
- **배경**: `#111111` (거의 블랙)
- **레이아웃**: Grid 3-row, Body는 `3fr 9fr` 2열
- **좌측**: 거대 "TABLE OF CONTENTS" (110px bold white)
- **우측**: 2열 그리드, 섹션별 그룹핑
- **Footer**: 좌측 문서명, 우측 연도

### 3.3 Section Divider (5개)
- **배경**: `#2A2A2A`
- **구조**: 좌측 65% (번호 + 대형 타이틀), 우측 35% (하위 목차)
- **배경 숫자**: 280px, 6% opacity 워터마크

### 3.4 Light Content Slides (15장)
- **배경**: `#FFFFFF`
- **텍스트**: `#111111` 기본, 그레이 단계별 서브텍스트
- **카드**: `#F0F0F0` 배경, 라운드 14px, **보더 없음**
- **라벨**: accent 컬러 (`#3E5A6C`) — 유일한 컬러 포인트

### 3.5 Closing (Slide 22)
- **배경**: `#FFFFFF`
- **구조**: 중앙 정렬, accent stripe + HIVELAB 라벨 + 메인 카피 + 연락처

---

## 4. Component Rules

### Card
```css
background: var(--gray-900);  /* light mode → #F0F0F0 */
border-radius: 14px;
padding: 28px 32px;
border: none;                 /* 보더 없음 */
```

### Badge / Pill
```css
background: rgba(62,90,108,0.12);  /* accent 기반 */
color: inherit;
border-radius: 100px;
padding: 4px 12px;
font-size: 13px;
```

### Chart Bar
```css
/* 라이트→다크 그레이 그래디언트 (월별 진행) */
background: linear-gradient(180deg, #AAAAAA 0%, #D0D0D0 100%);  /* Jan-Feb */
background: linear-gradient(180deg, #555555 0%, #999999 100%);  /* Sep-Oct */
background: linear-gradient(180deg, #444444 0%, #888888 100%);  /* Nov-Dec */
```

### Positioning Map
```
HIVELAB (US): accent (#3E5A6C) — 유일한 컬러 버블
경쟁사 A~D: 그레이 톤 (#999, #777, #AAA, #666)
```

---

## 5. Layout Principles

| 원칙 | 설명 |
|------|------|
| **모노톤 우선** | 블랙/화이트/그레이만 사용. 포인트 컬러는 `#3E5A6C` 1가지 |
| **보더리스** | 카드, 박스에 테두리 없음. 배경색 차이로 구분 |
| **3-Row Grid** | 표지/목차: Header(80px) + Body + Footer(60px) |
| **Flex 기본** | 컨텐츠 슬라이드: 64px 72px 패딩, flex-column |
| **타이포 위계** | 숫자는 크고 굵게(800), 본문은 가볍게(400) |
| **여백 충분** | 슬라이드 내부 패딩 최소 48px, 요소 간 gap 16~48px |

---

## 6. Slide Dimensions

| 항목 | 값 |
|------|-----|
| Width | 1440px |
| Height | 810px |
| Padding | 64px 72px (기본) / 80px (표지/목차) |
| Body Background | `#1A1A1A` |

---

## 7. File Structure

```
proposal_pb_brand_2026.html    ← 전체 22장 슬라이드 (단일 HTML)
├── Slide 01: Cover            ← 다크, grid 3-row
├── Slide 02: TOC              ← 다크, grid 3-row
├── Slide 03~06: Content       ← 라이트 (Background & Purpose)
├── Slide 07: Divider §02      ← 다크
├── Slide 08~10: Content       ← 라이트 (Market & User Insight)
├── Slide 11: Divider §03      ← 다크
├── Slide 12~13: Content       ← 라이트 (Differentiation)
├── Slide 14: Divider §04      ← 다크
├── Slide 15~16: Content       ← 라이트 (Capabilities)
├── Slide 17: Divider §05      ← 다크
├── Slide 18~19: Content       ← 라이트 (Process)
├── Slide 20: Divider §06      ← 다크
├── Slide 21: Content           ← 라이트 (Operation & Pricing)
└── Slide 22: Closing           ← 라이트
```

---

## 8. Navigation

- `←` / `→` 화살표 키로 슬라이드 이동
- `Space` 다음 슬라이드
- `Home` / `End` 처음/마지막
- 화면 좌/우 클릭
