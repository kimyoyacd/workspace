# MINIMAL DECK — Design System
> Based on PURPOSES Startup Pitch Deck · Point color updated: #FF4100 → #000DFF

---

## 1. Color System

| Role | Token | Value | Usage |
|------|-------|-------|-------|
| Background Dark | `--bg-dark` | `#0A0A0A` | Primary dark slides, covers |
| Background Light | `--bg-light` | `#F5F5F5` | Content slides, whitespace slides |
| Surface | `--surface` | `#FFFFFF` | Cards, text areas on dark BG |
| **Accent** | `--accent` | `#000DFF` | CTA, highlights, key data, fills |
| Text Primary | `--text-primary` | `#FFFFFF` | Body/headline on dark BG |
| Text Dark | `--text-dark` | `#0A0A0A` | Body/headline on light BG |
| Text Muted | `--text-muted` | `rgba(255,255,255,0.5)` | Captions, metadata on dark |
| Text Muted Light | `--text-muted-light` | `rgba(10,10,10,0.4)` | Captions, metadata on light |
| Divider | `--divider` | `rgba(255,255,255,0.15)` | Horizontal rules on dark slides |
| Divider Light | `--divider-light` | `rgba(10,10,10,0.12)` | Horizontal rules on light slides |

### Color Usage Rules
- **Accent `#000DFF`** — one active element per slide: a single word, stat callout, background fill, CTA button, or image overlay. Never use on two competing elements simultaneously.
- **Dark slides** (`#0A0A0A` BG): White text, occasional accent fill block.
- **Light slides** (`#F5F5F5` BG): Dark text, accent used as a typographic highlight only.
- **Full-bleed accent slide**: entire background = `#000DFF`, text = `#FFFFFF`. Use for section transitions or "Thank you" closing.

---

## 2. Typography

### Typeface Stack
```
Headline  : "PP Neue Montreal", "Space Grotesk", "Inter", sans-serif
Body      : "PP Neue Montreal", "Inter", sans-serif
Mono/Label: "Space Mono", "JetBrains Mono", monospace
```

> **Korean fallback:** Pretendard, Noto Sans KR, sans-serif (apply via @font-face or CDN)

### Type Scale (base 16px, 1280×720 slide viewport)

| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Display XL | 96px | 800 (Black) | 0.92 | -0.04em |
| Headline 1 | 72px | 700 (Bold) | 0.96 | -0.03em |
| Headline 2 | 48px | 700 (Bold) | 1.05 | -0.02em |
| Headline 3 | 32px | 600 (SemiBold) | 1.15 | -0.01em |
| Body L | 20px | 400 (Regular) | 1.6 | 0 |
| Body M | 16px | 400 (Regular) | 1.65 | 0 |
| Caption / Label | 12px | 500 (Medium) | 1.4 | 0.08em |
| Overline | 11px | 600 (SemiBold) | 1.3 | 0.12em UPPERCASE |

### Typography Rules
- Headlines: tight tracking (negative letter-spacing), near-zero leading on all-caps display text.
- Body: comfortable 1.6× line-height, max 65 chars per line.
- Overlines (category labels above headline): all-caps, spaced, muted color.
- **Do not** mix more than 2 weights per slide. Bold + Regular is the standard pair.

---

## 3. Spacing & Layout Grid

### Slide Dimensions
- **Canvas**: 1920 × 1080px (standard 16:9)  
  *(Alternate compact: 1280 × 720px for web/HTML embed)*
- **Safe zone margin**: 80px all sides (full bleed OK for BG fills)
- **Content column max-width**: 1440px centered (240px side margins on 1920px)

### Spacing Scale (8pt base)
```
4px   xs  — icon gaps, tight labels
8px   sm  — inner padding, small gaps
16px  md  — between related elements
24px  lg  — between sections within a slide
40px  xl  — between major blocks
64px  2xl — section spacing, large breathe
80px  3xl — slide edge margin
120px 4xl — hero whitespace, display separators
```

### Grid
- **12-column grid** with 24px gutters
- Common layouts: 1-col (text heavy), 6/6 split, 7/5 split (text/image), 4/4/4 thirds

---

## 4. Slide Templates

### T-01 · Cover — Full Dark
```
BG: #0A0A0A (full bleed)
├── Top-left: Overline label (muted white, 11px)
├── Center: Display XL headline (white, 96px, weight 800)
├── Bottom-left: Subtitle / tagline (Body L, muted white)
└── Bottom-right: Logo or slide number
```
*Accent usage: underline a single word in headline with accent color, OR use a small accent bar above the headline.*

---

### T-02 · Cover — Full Accent
```
BG: #000DFF (full bleed)
├── Top-left: Overline label (white 60%, 11px)
├── Center-left: Headline 1 (white, 72px)
├── Bottom: Date / event name (Caption, white 50%)
└── Optional: Large abstract 3D shape (right half, blended)
```

---

### T-03 · Section Divider — Half Split
```
Left half: BG #0A0A0A
  └── Section number (Display XL, accent #000DFF, 120px, very faint or large)
  └── Section title (Headline 2, white)
Right half: BG #000DFF OR full-bleed image
  └── [empty or abstract visual]
```

---

### T-04 · Content — Dark + List
```
BG: #0A0A0A
├── Top: Overline (muted, 11px UPPERCASE)
├── Headline 3 (white, 32px)
├── Horizontal rule (divider, 1px)
└── 3–5 bullet items
    ├── Icon or number (accent #000DFF, 16px)
    ├── Item title (Body L, white, weight 600)
    └── Item description (Body M, muted white)
```

---

### T-05 · Content — Light + Metrics
```
BG: #F5F5F5
├── Overline (dark, 11px)
├── Headline 2 (dark, 48px)
├── 3× metric cards (horizontal)
│   ├── Number (Display XL, accent #000DFF)
│   ├── Unit (Headline 3, dark)
│   └── Label (Caption, muted)
└── Supporting body text (Body M, dark)
```

---

### T-06 · Image + Statement
```
Right 55%: Full-bleed image (B&W preferred or brand-toned)
Left 45%: BG #0A0A0A
  ├── Overline
  ├── Headline 1 (white)
  └── Body text + CTA label (accent #000DFF underline)
```

---

### T-07 · Quote / Highlight
```
BG: #0A0A0A
Center: 
  ├── Large quote mark (accent #000DFF, 96px)
  ├── Quote text (Headline 2, white, italic optional)
  └── Attribution (Caption, muted, UPPERCASE)
```

---

### T-08 · Typography Showcase
```
BG: #0A0A0A or #F5F5F5
Single word or short phrase at Display XL scale (96–120px)
  ├── Line 1: word in white/dark
  ├── Line 2: word in accent #000DFF
  └── Line 3: word in muted
Bottom: small annotation text (mono, 11px)
```

---

### T-09 · Team / People
```
BG: #F5F5F5
Grid of 3–4 members:
  ├── Photo (circle crop, grayscale)
  ├── Name (Headline 3, dark, weight 700)
  ├── Role (Body M, muted)
  └── 1-line bio (Caption)
```

---

### T-10 · Timeline / Roadmap
```
BG: #0A0A0A
Horizontal line (accent #000DFF, 2px)
  └── 4–5 nodes (circle, accent fill)
      ├── Date/Quarter (Caption, muted, above line)
      └── Milestone label (Body M, white, below line)
```

---

### T-11 · Closing — Thank You
```
BG: #000DFF (full bleed)
Center:
  ├── "Thank you" or Korean equivalent (Display XL, white)
  └── Contact / URL (Body L, white 70%)
Optional: subtle large typography watermark behind (white 8%)
```

---

## 5. Components

### Stat Callout Box
```css
.stat-box {
  background: transparent;
  border-left: 3px solid #000DFF;
  padding: 12px 20px;
  /* Number */
  font-size: 64px;
  font-weight: 800;
  color: #000DFF;
  /* Label below */
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
}
```

### Tag / Badge
```css
.tag {
  display: inline-block;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 2px;   /* Nearly square — minimal */
  color: rgba(255,255,255,0.7);
}
.tag-accent {
  background: #000DFF;
  border-color: #000DFF;
  color: #FFFFFF;
}
```

### Horizontal Rule
```css
hr.slide-rule {
  border: none;
  border-top: 1px solid rgba(255,255,255,0.15);
  margin: 24px 0;
}
```

### CTA / Button
```css
.btn-accent {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: #000DFF;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.04em;
  border-radius: 2px;
}
.btn-outline {
  background: transparent;
  border: 1.5px solid rgba(255,255,255,0.4);
  color: #FFFFFF;
}
```

### Slide Number
```css
.slide-num {
  position: absolute;
  bottom: 32px;
  right: 80px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  color: rgba(255,255,255,0.3);
  font-variant-numeric: tabular-nums;
}
```

---

## 6. Image Treatment

| Style | Usage |
|-------|-------|
| **Full-color** | Cover hero, section dividers (3D renders, abstract shapes) |
| **Grayscale** | Team photos, product screenshots (keeps focus on text/accent) |
| **Duotone** | Dark BG + single accent color overlay (use `mix-blend-mode: luminosity` + accent tint) |
| **Abstract 3D** | Blurred, organic shapes — adds depth without distraction |

**Overlay rule:** When placing text over imagery, use a gradient overlay:  
`background: linear-gradient(to right, #0A0A0A 45%, rgba(10,10,10,0) 100%)`

---

## 7. Motion Principles (if animated)

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Slide in | Translate Y +20px → 0 | 400ms | ease-out |
| Headline | Fade + slight scale 0.97→1 | 500ms | ease-out |
| Stats | Count up from 0 | 800ms | ease-in-out |
| Accent line | Width 0 → 100% | 300ms | ease-out |
| Image reveal | Clip-path slide | 500ms | cubic-bezier(.4,0,.2,1) |

---

## 8. Do / Don't

| ✓ Do | ✗ Don't |
|------|---------|
| One accent element per slide | Two competing accent fills |
| Tight negative tracking on large type | Positive tracking on bold display headlines |
| Grayscale images to keep accent color dominant | Full-color images competing with #000DFF |
| Consistent 80px slide margins | Random padding values |
| Max 3 font sizes per slide | 5+ sizes mixing weights |
| Blank slides for breathing room | Overloading every slide with content |
| Full-bleed accent BG for key moments | Accent color as default background |

---

## 9. CSS Variables — Quick Reference

```css
:root {
  /* Colors */
  --bg-dark:        #0A0A0A;
  --bg-light:       #F5F5F5;
  --surface:        #FFFFFF;
  --accent:         #000DFF;
  --accent-dim:     rgba(0, 13, 255, 0.15);
  --text-primary:   #FFFFFF;
  --text-dark:      #0A0A0A;
  --text-muted:     rgba(255, 255, 255, 0.5);
  --text-muted-lgt: rgba(10, 10, 10, 0.4);
  --divider:        rgba(255, 255, 255, 0.15);
  --divider-light:  rgba(10, 10, 10, 0.12);

  /* Typography */
  --font-sans:      "PP Neue Montreal", "Space Grotesk", "Pretendard", "Inter", sans-serif;
  --font-mono:      "Space Mono", "JetBrains Mono", monospace;

  /* Scale */
  --text-display:   96px;
  --text-h1:        72px;
  --text-h2:        48px;
  --text-h3:        32px;
  --text-body-l:    20px;
  --text-body-m:    16px;
  --text-caption:   12px;
  --text-overline:  11px;

  /* Spacing */
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md:  16px;
  --space-lg:  24px;
  --space-xl:  40px;
  --space-2xl: 64px;
  --space-3xl: 80px;
  --space-4xl: 120px;

  /* Slide */
  --slide-w:      1920px;
  --slide-h:      1080px;
  --slide-margin: 80px;
}
```

---

*PURPOSES template — design system extracted and adapted. Accent color updated #FF4100 → #000DFF.*
