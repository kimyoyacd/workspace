---
name: blue-white-business-design
description: Apply Blue-White (蓝白商务) design system for professional business presentations. Use when creating slides, decks, or proposal pages that follow the Blue-White cool-tone design language.
argument-hint: <slide or page description>
allowed-tools: Read Grep Glob Bash Write Edit
---

Build the following using the Blue-White Business design system: $ARGUMENTS

---

# Blue-White Business Design System (蓝白商务)

## 1. Visual Theme & Atmosphere

A clean, professional business presentation design built on a white canvas with blue accents. The design feels like a premium consulting deck — structured, data-driven, and confident. Cool-tone throughout with no warm undertones.

The typography system uses Inter (weight 300–900) for English and metrics, Pretendard for Korean body text, and Geist Mono for data/code. The signature visual move is a blue gradient bar under titles (4px height, 70–80px width, `linear-gradient(90deg,#2563EB,#1D4ED8)`).

Dark slides use `#0F172A` with a grid point matrix pattern (`radial-gradient(circle,rgba(255,255,255,0.03) 1px,transparent 1px); background-size:40px 40px`) and subtle blue radial glow (`radial-gradient(ellipse 500px 400px at 50% 50%,rgba(37,99,235,0.06),transparent)`).

**Key Characteristics:**
- White primary canvas (`#FFFFFF`) with cool gray secondary (`#F8FAFC`)
- Blue accent system (`#2563EB` primary, `#1D4ED8` darker)
- Green accent for positive metrics (`#059669`, `#047857`)
- Dark navy for contrast slides (`#0F172A`)
- Card system with gradient fills, outlines, accent, and dark variants
- Blue gradient title underline as signature element
- Pseudo-element numbering with blue squares
- Inter for EN / Pretendard for KR / Geist Mono for data

## 2. CSS Variables (Root Contract)

```css
:root {
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8FAFC;
  --card-bg-from: #F1F5F9;
  --card-bg-to: #E2E8F0;
  --card-border: rgba(37, 99, 235, 0.12);
  --card-radius: 12px;
  --text-primary: #1E293B;
  --text-secondary: #64748B;
  --accent-1: #2563EB;
  --accent-2: #1D4ED8;
  --accent-3: #059669;
  --accent-4: #047857;
  --font-kr: 'Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;
  --font-en: 'Inter', 'Helvetica Neue', sans-serif;
  --font-mono: 'Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', monospace;
}
```

## 3. Color Palette & Roles

### Primary Surfaces
- **Pure White** (`#FFFFFF`): Primary background, card surfaces
- **Cool Gray** (`#F8FAFC`): Secondary background, alternate sections
- **Card Fill From** (`#F1F5F9`): Gradient card start
- **Card Fill To** (`#E2E8F0`): Gradient card end

### Accent Colors
- **Blue Primary** (`#2563EB`): Primary accent, links, CTAs, numbering squares
- **Blue Dark** (`#1D4ED8`): Gradient end, hover states, secondary emphasis
- **Green Primary** (`#059669`): Positive metrics, success indicators
- **Green Dark** (`#047857`): Green accent variant

### Text Colors
- **Primary Text** (`#1E293B`): Headings, body text on light backgrounds
- **Secondary Text** (`#64748B`): Descriptions, captions, metadata

### Dark Slide Colors
- **Dark Background** (`#0F172A`): Dark slide base
- **Dark Card** (`rgba(255,255,255,0.04)`): Cards on dark background
- **Dark Card Hover** (`rgba(255,255,255,0.06)`): Brighter dark card
- **Dark Border** (`rgba(255,255,255,0.08)`): Borders on dark
- **Dark Text Muted** (`rgba(255,255,255,0.4)–0.5`): Secondary text on dark
- **Dark Text Dim** (`rgba(255,255,255,0.3)`): Tertiary text on dark

### Borders & Shadows
- **Card Border** (`rgba(37,99,235,0.12)`): Blue-tinted subtle border
- **Shadow Light** (`0 1px 3px rgba(0,0,0,0.05)`): Gentle card shadow
- **Shadow Accent** (`0 4px 12px rgba(37,99,235,0.2–0.3)`): Blue glow for accent cards
- **Divider Light** (`rgba(0,0,0,0.06)`): Internal dividers on light

## 4. Typography Rules

### Font Families
- **English / Metrics**: `Inter` (variable, wght 300–900)
- **Korean Body**: `Pretendard` → `Apple SD Gothic Neo` → `Malgun Gothic`
- **Monospace / Data**: `Geist Mono` → `ui-monospace` → `SFMono-Regular` → `Menlo`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Slide Title | font-kr | 28px | 700 | 1.2 | normal | Main slide heading |
| Slide Subtitle | font-kr | 24px | 700 | 1.2 | normal | Secondary heading |
| Section Label | font-en | 10px | 700 | 1.0 | 2px | `text-transform: uppercase`, accent-1 color |
| Card Title | font-kr | 17–18px | 700 | 1.3 | normal | Card headings |
| Card Body | font-kr | 12px | 400 | 1.65 | normal | Card content text |
| KPI Number | font-en | 48–72px | 800–900 | 1.0 | -0.03em | Hero metrics, naked numbers |
| KPI Unit | font-en | 12–14px | 700 | 1.0 | normal | Unit labels next to numbers |
| Tag/Badge | font-en | 10px | 700 | 1.0 | 1–2px | `text-transform: uppercase`, pill shape |
| Table Header | font-en | 10px | 700 | 1.0 | 2px | `text-transform: uppercase` |
| Table Cell | font-kr | 12–13px | 400–700 | 1.4 | normal | Standard table content |
| Footer | — | 10px | 400 | 1.0 | normal | Slide number, section label |
| Quote | font-kr | 24px | 400 | 1.7 | normal | Pull quotes on dark slides |

### Principles
- **Weight range defines hierarchy**: 300 for subtle labels, 400 for body, 700 for emphasis, 800–900 for hero numbers
- **Negative letter-spacing on large numbers**: `-0.03em` for KPI metrics
- **Positive letter-spacing on labels**: `1–2px` tracking on uppercase section labels
- **Korean for content, English for structure**: Body text in Pretendard, labels/tags/metrics in Inter

## 5. Signature Visual Elements

### Blue Gradient Title Bar
```css
.title-bar::after {
  content: '';
  display: block;
  width: 70px;
  height: 4px;
  margin-top: 8px;
  background: linear-gradient(90deg, #2563EB, #1D4ED8);
  border-radius: 2px;
}
```

### Pseudo-Element Numbering (Blue Squares)
```css
/* 28×28px blue square with white number */
width: 28px; height: 28px;
border-radius: 6px;
background: var(--accent-1);
display: flex; align-items: center; justify-content: center;
font-family: var(--font-en);
font-size: 12px; font-weight: 800; color: #fff;
```

### Grid Point Matrix (Dark Slides)
```css
background-image: radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px);
background-size: 40px 40px;
```

### Blue Radial Glow (Dark Slides)
```css
background: radial-gradient(ellipse 500px 400px at 50% 50%, rgba(37,99,235,0.06), transparent);
```

## 6. Card System (Must Use 2+ Variants Per Slide)

### Filled Card
```css
background: linear-gradient(135deg, var(--card-bg-from), var(--card-bg-to));
border: 1px solid var(--card-border);
border-radius: 12px;
box-shadow: 0 1px 3px rgba(0,0,0,0.05);
```

### Outline Card
```css
background: var(--bg-primary);
border: 1px solid var(--card-border);
border-radius: 12px;
```

### Accent Card (Elevated)
```css
background: var(--accent-1);
color: white;
border-radius: 12px;
box-shadow: 0 4px 12px rgba(37,99,235,0.3);
```

### Dark Card
```css
background: #0F172A;
color: white;
border-radius: 12px;
```

### Dark-on-Dark Card
```css
background: rgba(255,255,255,0.04);
border: 1px solid rgba(255,255,255,0.06–0.08);
border-radius: 12px;
```

## 7. Tag / Badge System

### Solid Tag
```css
background: var(--accent-1);
border-radius: 20px;
padding: 4px 12px;
font-family: var(--font-en);
font-size: 10px; font-weight: 700;
color: #fff; letter-spacing: 1px;
```

### Outline Tag
```css
background: var(--bg-primary);
border: 1px solid var(--card-border);
border-radius: 20px;
padding: 4px 12px;
font-family: var(--font-en);
font-size: 10px; font-weight: 700;
color: var(--accent-1); letter-spacing: 1px;
```

### Ghost Tag (Dark Background)
```css
background: rgba(37,99,235,0.3);
border-radius: 20px;
padding: 4px 12px;
font-family: var(--font-en);
font-size: 10px; font-weight: 700;
color: #fff; letter-spacing: 1px;
```

## 8. Slide Structure

### Fixed Dimensions
- Width: 1280px, Height: 720px
- Padding: 40px left/right, 20px top (header), 12px bottom (footer)

### Header Pattern
```html
<header style="position:absolute;top:20px;left:40px;right:40px;height:50px;
  display:flex;align-items:baseline;gap:16px;z-index:10;">
  <span>PART LABEL</span>
  <h1 class="title-bar">Slide Title</h1>
</header>
```

### Footer Pattern
```html
<footer style="position:absolute;bottom:12px;left:40px;right:40px;height:20px;
  display:flex;justify-content:space-between;align-items:center;z-index:10;">
  <span>Section Name</span>
  <span>N / Total</span>
</footer>
```

### Content Area
```css
position: absolute;
top: 100px; left: 40px; right: 40px; bottom: 44px;
```

## 9. Layout Archetypes

| Layout | Grid | Best For |
|--------|------|----------|
| Hero-Top | Single metric + supporting grid | KPI showcase |
| Primary-Secondary | 1fr 1fr or 1.2fr 1fr | Comparison, before/after |
| T-Shape | Full-width top + grid below | Process flow |
| Symmetric | 1fr 1fr equal columns | Side-by-side concepts |
| Mixed-Grid | 3×2 or variable grid | Multi-item catalogs |
| Three-Column | 1fr 1fr 1fr | Package tiers, trio features |
| Asymmetric | 2fr 1fr or 1fr 2fr | Hero content + sidebar |
| Waterfall | 4-column timeline | Phase/stage progression |

## 10. Do's and Don'ts

### Do
- Use the blue gradient title bar on key slides
- Mix 2+ card variants per slide (filled + outline, accent + dark, etc.)
- Use Inter weight 800–900 for hero KPI numbers
- Apply `text-transform: uppercase` with `letter-spacing: 2px` on section labels
- Use `#0F172A` for dark slides with grid point matrix
- Keep card border-radius at 12px consistently
- Use green (`#059669`) for positive metric indicators
- Apply blue-tinted borders (`rgba(37,99,235,0.12)`) not neutral gray

### Don't
- Don't use warm colors — the system is strictly cool-tone
- Don't use heavy shadows (>0.3 opacity) — keep subtle
- Don't mix font families for same-language content
- Don't use rounded pill buttons for navigation (pills are for tags only)
- Don't skip the section label (PART 01, PART 02, etc.) in headers
- Don't use fewer than 2 card variants per content slide
- Don't apply border-radius larger than 12px on cards
- Don't use warm gray tones (#777, #999) — use cool slate (#64748B, #94A3B8)

## 11. Dark Slide Checklist

1. Background: `#0F172A`
2. Grid matrix: `radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 40px 40px`
3. Optional blue glow overlay
4. Text: white (#fff) for headings, `rgba(255,255,255,0.4–0.6)` for body
5. Cards: `rgba(255,255,255,0.04)` background, `rgba(255,255,255,0.06–0.08)` border
6. Accent card: `var(--accent-1)` background with `box-shadow: 0 4px 12px rgba(37,99,235,0.3)`
7. Blue gradient bar: same as light slides
8. Footer text: `rgba(255,255,255,0.3)`

## 12. Agent Prompt Guide

### Quick Color Reference
- Background: White (`#FFFFFF`) or Cool Gray (`#F8FAFC`)
- Text: Dark Slate (`#1E293B`)
- Secondary text: Medium Slate (`#64748B`)
- Accent: Blue (`#2563EB`)
- Success: Green (`#059669`)
- Dark slide: Navy (`#0F172A`)
- Card border: `rgba(37,99,235,0.12)`

### Example Component Prompts
- "Create a KPI hero slide: white background, section label at 10px Inter uppercase accent-1, title at 28px Pretendard 700 with blue gradient bar. Hero number at 72px Inter 900 accent-1. Supporting cards in 2×2 grid with filled and outline variants."
- "Design a three-column package slide on #F8FAFC: filled card, outline card, dark (#0F172A) card. Each with 10px uppercase label, 17px title, 12px body at 1.65 line-height. Tags as solid/outline pills at bottom."
- "Build a dark timeline slide: #0F172A with grid matrix. Four waterfall cards (rgba(255,255,255,0.04)), last card as accent (#2563EB). Bottom message bar with rgba(37,99,235,0.08) background."
- "Create a comparison table: blue 2px header border, alternating rgba(37,99,235,0.04) rows, 10px uppercase Inter headers, 13px Pretendard cells."

### Iteration Guide
1. Start with white + blue accents — the cool professional tone comes from the color restraint
2. Add the blue gradient title bar early — it anchors the visual identity
3. Vary card styles (filled vs outline vs accent) to create visual hierarchy
4. Use dark slides sparingly for section dividers and high-impact closings
5. Let Inter numbers at 800–900 weight do the visual heavy lifting on data slides
