# Design Directive — Neobrutalism (Borderlands Edition)

> **This file is the design law for every UI we build.**
> All visual decisions — components, layouts, colors, typography, animations — must pass through these rules.
> The target feel: **Borderlands meets the web**. Living comic book. Raw, loud, unapologetic.

---

## 1. What Is Neobrutalism?

Neobrutalism is a reaction against sterile minimalism (glassmorphism, neumorphism, soft shadows).
It takes architectural brutalism — raw, exposed, structural — and fuses it with **modern typography, illustration, and vibrant color**.

The result:
- Everything looks like it has **weight and presence**
- Interfaces feel **hand-crafted**, not generated
- Nothing is subtle. **If you can't see it, it doesn't exist**

### Connection to Borderlands

Gearbox's art direction for Borderlands is the perfect 3D counterpart to neobrutalism:
- **Thick ink outlines** around every object and character
- **Hand-drawn textures**, not procedurally generated surfaces
- **Cel-shading** (technically "graphic novel shading") — sharp shadow falloff, no soft gradients
- **Exaggerated proportions** — comic book logic, not realism
- **Saturated, high-contrast color** — orange desert, electric blue, toxic green

When we build UI: think of every card, button, and container as if it were a Borderlands prop — thick outlined, flat-colored, with a hard shadow that gives it physical weight.

---

## 2. The Visual Rules (Non-Negotiable)

### 2.1 Borders
- **Every significant element has a visible border.** Cards, buttons, inputs, modals, badges — all bordered.
- Border weight: **2px minimum**, **3–4px for prominent elements** (hero cards, CTAs, section dividers)
- Border color: **pure black (`#000000`)** — no gray, no opacity tricks
- Border radius: **6–10px** — rounded enough to feel friendly, tight enough to feel structured
  - Buttons: `8px`
  - Cards: `8–12px`
  - Inputs: `6px`
  - Badges/tags: `6px` or fully round (`9999px`) for pill style

### 2.2 Shadows
The shadow is the **single most important neobrutalism signature**. Get this right and everything else falls into place.

- **Hard drop shadow only** — no `blur-radius`, ever. Shadow blur = 0.
- **Offset**: `4px 4px` (standard) / `6px 6px` (large cards) / `2px 2px` (small elements)
- **Color**: pure black `#000000` — no rgba, no colored shadows (unless intentional accent)
- **CSS**:
  ```css
  box-shadow: 4px 4px 0px 0px #000000;
  ```
- **On hover**: translate the element into the shadow, shadow disappears — simulates pressing a physical button:
  ```css
  /* Default */
  box-shadow: 4px 4px 0px 0px #000000;
  transform: translate(0, 0);

  /* Hover / Active */
  box-shadow: 0px 0px 0px 0px #000000;
  transform: translate(4px, 4px);
  transition: transform 0.1s ease, box-shadow 0.1s ease;
  ```
- **No soft shadows, ever.** `box-shadow: 0 4px 16px rgba(0,0,0,0.2)` is banned.

### 2.3 Colors
Flat, saturated, zero gradients. Think screen-printed poster, not digital painting.

**Palette philosophy:**
- 1–2 **loud hero colors** per component (the Borderlands orange, the electric accent)
- **Pure white `#FFFFFF`** or a warm off-white for backgrounds
- **Pure black `#000000`** for borders, shadows, and text
- Accent colors must be **fully saturated** — no pastels, no muted tones

**Starter palette (Borderlands-inspired):**
```
Background (page)    : #FFFBF0  (warm off-white / parchment)
Background (card)    : #FFFFFF  or a vibrant hero color
Primary accent       : #F5C800  (Borderlands yellow/gold)
Secondary accent     : #FF6B35  (Borderlands orange)
Tertiary accent      : #4ECDC4  (electric teal)
Danger / alert       : #FF2D20  (punchy red)
Success              : #44CF6C  (vivid green)
Text primary         : #0A0A0A  (near-black)
Border / shadow      : #000000  (pure black)
```

**Rules:**
- No gradients — colors are flat fills only
- No transparency on major surfaces (no `rgba` backgrounds)
- High contrast between text and background — always pass WCAG AA minimum
- Use color purposefully: color = semantic signal, not decoration

### 2.4 Typography
Fonts must look **bold, structural, slightly imperfect**. Not elegant. Not refined. Loud.

**Recommended fonts (free / Google Fonts):**
- **Headings**: `Space Grotesk`, `Syne`, `Unbounded`, `Bebas Neue` — chunky, geometric, modern
- **Body**: `Space Grotesk`, `DM Sans`, `Inter` — clean but with character
- **Accent / labels**: `Space Mono`, `Courier Prime` — monospace adds technical edge

**Rules:**
- Font weight minimum: **600 (semibold)** for headings, 400–500 for body
- Headings: **UPPERCASE or title case only** — no lowercase headings
- Letter-spacing on headings: `0.02em – 0.05em` (slight tracking)
- No thin fonts (100–300 weight)
- No italic as a default style — italic is used only for intentional emphasis

### 2.5 Layout & Spacing
- **Grid-based** — 12-column or 8-column grid, elements snap to grid
- **Generous whitespace** — neobrutalism breathes; crowding kills the effect
- **Slight rotation** on decorative elements only (`-2deg` to `2deg`) — makes it feel hand-placed
- Avoid perfectly symmetric layouts — slight asymmetry adds life
- Section dividers: thick horizontal rules (`border: 3px solid #000`) or bold color bands

### 2.6 Illustration & Iconography
- Icons: **outline-heavy**, not filled Material icons. Think comic book line art.
- Use SVG icons with `stroke-width: 2–2.5` as baseline
- Decorative elements: geometric shapes (circles, stars, squiggles) placed as background dressing
- Doodle-style dividers, sticker-like badges, hand-drawn underlines on key text

---

## 3. Component Patterns

### Buttons
```
Background  : primary accent color (e.g. #F5C800)
Text        : #000000 (always black on light backgrounds)
Border      : 2–3px solid #000000
Border-radius: 8px
Shadow      : 4px 4px 0px #000000
Hover       : translate(4px, 4px), shadow collapses to 0
Active      : same as hover, slightly darkened bg
```

### Cards
```
Background  : #FFFFFF or a light accent
Border      : 2px solid #000000
Border-radius: 10px
Shadow      : 6px 6px 0px #000000
Padding     : 24px
Hover       : optional lift (translate -2px -2px, shadow grows to 8px 8px)
```

### Inputs / Form Fields
```
Background  : #FFFFFF
Border      : 2px solid #000000
Border-radius: 6px
Shadow      : 3px 3px 0px #000000
Focus       : border-color stays black, outline replaced with color accent ring
```

### Badges / Tags
```
Background  : accent color
Text        : #000000
Border      : 2px solid #000000
Border-radius: 6px or 9999px (pill)
Shadow      : 2px 2px 0px #000000
Font-weight : 700
Text-transform: uppercase
```

### Navigation / Header
```
Background  : #000000 or primary accent
Text        : #FFFFFF or #000000 (high contrast)
Border-bottom: 3px solid #000000
Active link : underline with 3px solid accent color, or bg highlight block
```

---

## 4. Animations & Motion

- **Fast and snappy** — transitions max `150ms`. Neobrutalism does not float or drift.
- Button press: `100ms` translate + shadow collapse (see 2.2)
- Page transitions: hard cut or fast slide (`200ms max`), no fades
- Hover lifts on cards: `transform: translate(-2px, -2px)` with shadow expand, `120ms`
- Marquee / ticker text: allowed for announcements, `linear` easing
- **No easing curves that feel "floaty"** (`ease-in-out` on slow durations is banned)
- Micro-interactions: element wobble on error (`@keyframes shake`, 3 cycles, 300ms total)

---

## 5. The Borderlands Checklist

Before shipping any UI component, ask:

- [ ] Does every interactive element have a **visible thick border**?
- [ ] Is the shadow **hard (0 blur)** and **pure black**?
- [ ] Does the hover state **physically "press" the element** into the shadow?
- [ ] Are colors **flat and saturated** (no gradients, no translucency)?
- [ ] Does the typography feel **bold and structural**?
- [ ] Would this look at home on a **Borderlands loading screen**?
- [ ] Is there enough **whitespace** to let elements breathe?
- [ ] Are interactive elements **unmistakably clickable** (they look like real buttons)?

---

## 6. What To Avoid (Anti-Patterns)

| Banned | Why |
|---|---|
| Soft box shadows (`blur > 0`) | Destroys the hard-edge signature |
| Gradients on backgrounds | Makes it feel glossy and un-brutal |
| Thin fonts (weight < 400) | Neobrutalism is BOLD |
| Glassmorphism / frosted glass | Wrong genre entirely |
| Animated gradients / aurora backgrounds | Opposite energy |
| Subtle border colors (gray, `rgba`) | Borders must be visible and definitive |
| Rounded corners > 16px on non-pill elements | Gets too soft |
| Slow transitions (> 200ms) | Feels sluggish, not snappy |
| Generic icons (Material, Heroicons default weight) | Too thin, too clean |

---

## 7. References & Inspiration

- [neobrutalism.dev](https://www.neobrutalism.dev/) — component kit & live examples
- [NN/g — Neobrutalism Definition](https://www.nngroup.com/articles/neobrutalism/) — UX research perspective
- [Bejamas — Neubrutalism Web Trend](https://bejamas.com/blog/neubrutalism-web-design-trend) — practical implementation guide
- [themeselection.com — Neo Brutalism Guide](https://themeselection.com/neo-brutalism/) — beginner's breakdown
- [Borderlands Art Style breakdown](https://retrostylegames.com/blog/game-art-design-like-borderlands-style/) — the graphic novel shading inspiration
- [Awesome Neobrutalism (GitHub)](https://github.com/ComradeAERGO/Awesome-Neobrutalism) — curated resource list
- Los Lunas website (shared by user) — cartoon neobrutalism in the wild
- Gumroad, Figma — real-world brands using neobrutalist UI
