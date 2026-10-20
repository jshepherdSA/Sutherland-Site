# Site Teardown: Aaron Sutherland for Newport City Commission

**Source:** `sutherland-site-FINAL 2.zip` → `sutherland-site-FINAL/index.html` (local file, no live URL)
**Intent:** `[rebuild]`. This is the site being rebuilt in Next.js. Its structure and content are the spec.
**Platform:** Hand-written single-file HTML. All CSS in one `<style>` block, one small inline script.
**Date analyzed:** 2026-10-20

## Tech Stack (Confirmed from Source)

| Technology        | Evidence                                                                      | Purpose                                                    |
| ----------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Plain HTML/CSS    | Single `index.html`, inline `<style>`                                         | Entire site                                                |
| Google Fonts      | `<link>` to fonts.googleapis.com                                              | Archivo 700/800/900 (headings), Public Sans 400–700 (body) |
| Vanilla JS (IIFE) | Inline `<script>` after header                                                | Mobile menu toggle only                                    |
| ActBlue           | Donate links `secure.actblue.com/donate/aaron-sutherland-1?refcode=directory` | Donations (external)                                       |
| Facebook          | `facebook.com/profile.php?id=61555789504970`                                  | Social link                                                |
| govoteky.com      | Vote section CTA                                                              | Official KY voter info (external)                          |

No analytics, no animation libraries, no forms.

## Design System (confirmed from `:root`)

### Colors

| Token            | Value     | Usage                                                     |
| ---------------- | --------- | --------------------------------------------------------- |
| `--navy`         | `#2F5E9E` | Section heads, pillar borders, vote band, theme-color     |
| `--navy-deep`    | `#234A80` | Hero gradient start, photo strip bg                       |
| `--blue`         | `#3E71B4` | Hero gradient end                                         |
| `--red`          | `#DC524D` | CTAs, top nav border, hero strip, kickers, accent borders |
| `--red-soft`     | `#FBE6E5` | Email icon chip                                           |
| `--ink`          | `#1B2430` | Body text                                                 |
| `--ink-soft`     | `#4F5866` | Secondary text                                            |
| `--paper`        | `#FFFFFF` | Page bg                                                   |
| `--surface`      | `#F3F6FA` | About + Join panel bg                                     |
| `--line`         | `#D9E0EA` | Borders                                                   |
| Hero accent text | `#FFD9D7` | "together." in H1, kickers on navy                        |
| Footer bg        | `#182338` | Footer                                                    |
| Footer text      | `#B9C4D6` | Footer                                                    |
| Facebook blue    | `#1877F2` | Facebook button                                           |

**Contrast flag (inferred, computed):** white on `#DC524D` is ~3.9:1, which fails WCAG AA for the ~15px button text and the 13px hero strip. The rebuild uses a darker red (`#C8433E`, ~4.9:1) behind text and keeps `#DC524D` for borders and decoration. Same for Facebook blue: `#1877F2` (~4.2:1) is swapped for `#166FE5` (~4.6:1).

### Typography

| Role              | Font        | Weight         | Letter-spacing | Sizes                                                      |
| ----------------- | ----------- | -------------- | -------------- | ---------------------------------------------------------- |
| H1 (hero)         | Archivo     | 900            | -.01em         | `clamp(2.2rem, 5.2vw, 3.6rem)`, lh 1.02; 2.25rem on mobile |
| H2 (section head) | Archivo     | 900            | -.01em         | `clamp(1.5rem, 3vw, 2rem)`, lh 1.1                         |
| H3 (pillar)       | Archivo     | 900, UPPERCASE | .5px           | 1.3rem, lh 1                                               |
| H3 (join)         | Archivo     | 900            | -.01em         | 1.5rem                                                     |
| Kicker            | Public Sans | 800, UPPERCASE | 2px            | .78rem, red                                                |
| Nav links         | Public Sans | 700, UPPERCASE | .5px           | .9rem                                                      |
| Body              | Public Sans | 400            | —              | 1rem, lh 1.45; About copy 1.1rem / lh 1.5                  |
| Buttons           | Public Sans | 700            | —              | .95rem                                                     |
| Footer            | Public Sans | 400/800        | —              | .82rem                                                     |

### Spacing System

Fixed rem/px values, no scale tokens. Container `max-width: 1120px`, `padding: 0 20px`. Sections `padding: 48px 0` (32px under 820px). Corner radius is one value, `4px`, used everywhere. Grid gaps are 10, 16, 28, or 36px.

### Responsive Approach

Desktop-first max-width queries:

- **≤980px:** About headshot column 240px; job photo strip stacks vertically.
- **≤820px:** Desktop nav hidden → hamburger; hero becomes one column with photo first; pillars → 1 column; vote → 1 column; join → stacked (image on top, red top border instead of left); footer centered.
- **≤480px:** smaller nav CTA; tighter photo tags.

## Effects Breakdown

| Effect                       | Implementation                                                                                                                                 | Complexity | Cloneable? |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| Sticky nav with red top rule | `position: sticky; top: 0; border-top: 4px solid red`                                                                                          | Low        | Yes        |
| Hero diagonal sheen          | `.hero::after` absolute panel, `rgba(255,255,255,.05)`, `skewX(-12deg)`, right edge                                                            | Low        | Yes        |
| Hero gradient                | `linear-gradient(135deg, navy-deep, blue)`                                                                                                     | Low        | Yes        |
| Hero photo frame             | 2:3 portrait, 3px translucent white border, deep drop shadow, max 240px                                                                        | Low        | Yes        |
| Red announcement strip       | Full-width red bar under hero with Election Day + anchor link                                                                                  | Low        | Yes        |
| Section head rule            | Flex row with `border-bottom: 3px solid navy`                                                                                                  | Low        | Yes        |
| Photo strip ("on the job")   | Flex rows with fractional `flex` values matched to image aspect ratios so all four photos share one height edge-to-edge, 2px gaps on navy-deep | Med        | Yes        |
| Pillar cards                 | White card, 1px border, 5px navy top border                                                                                                    | Low        | Yes        |
| Vote date card               | Red box with big date + white button                                                                                                           | Low        | Yes        |
| Join split                   | Photo left / surface panel right with 5px red left border                                                                                      | Low        | Yes        |
| Mobile menu                  | Button toggles `.open` on `#mobileNav`, swaps ☰/✕, closes on link click, sets `aria-expanded`                                                 | Low        | Yes        |
| Smooth scroll                | `html { scroll-behavior: smooth }`                                                                                                             | Low        | Yes        |

No scroll animations, reveals, or motion. The site's style is plain and direct, like a printed campaign piece.

## Implementation Details

### Photo strip with matched heights

```
.job-grid { display:flex; gap:2px }
  .row (flex:1.42)  → office-maps (flex:.75)  + family-deck (flex:.67)
  .row (flex:2.8)   → swearing-in (flex:1.33) + forum-panel (flex:1.47)
```

Each item's flex value is roughly its image's width/height ratio (portrait ≈ .67–.75, landscape ≈ 1.33–1.47). Flex-grow in proportion to aspect ratio means every image ends up the same height, so the four photos fill a full-bleed band with no cropping. Under 980px the two rows stack.
**Note:** the `.tag` caption overlay CSS exists but no captions are used in the markup.

### Hero

Two-column grid `1.25fr .75fr`. Left: H1 "It's our city.<br>Let's build it <span>together.</span>" with the span in `#FFD9D7`, then Donate (red) + "See His Priorities" (white outline). Right: headshot. Under 820px the photo moves above the text (`order:-1`) and buttons go full width.

### Unused CSS in source

`.eyebrow`, `.pullquote`, `.facts/.fact`, `.pillar .record`, `.job-grid .tag`, `.hide-m` are styled but never used. They look like leftovers from earlier drafts (pull quote, quick-facts row, "on the record" boxes). They are not rebuilt unless the client supplies that content.

## Assets (all supplied in zip)

1. `logo.png` (2200×1238) — Re-Elect / Aaron Sutherland / Newport City Commission lockup, red + blue
2. `hero-headshot.jpg` (933×1400) — studio portrait, navy blazer
3. `family-porch.jpg` (1066×1600) — Aaron, wife, two kids on porch steps (About)
4. `office-maps.jpg` (1201×1600) — Aaron signing papers at a counter, district maps on wall
5. `family-deck.jpg` (1066×1600) — Aaron with his two sons on deck steps
6. `swearing-in.jpg` (1600×1200) — Commission swearing-in at City Hall
7. `forum-panel.jpg` (723×493) — Aaron seated on a community forum panel (low-res; keep it small)
8. `bar-shirt.jpg` (1280×1600) — Aaron with family, wife in "Vote Aaron Sutherland" shirt
9. `favicon.png` (64×64), `apple-touch-icon.png` (180×180)

## Build Plan

### Stack

Next.js App Router + TypeScript + Tailwind v4 + shadcn/ui (house stack). `next/font/google` for Archivo + Public Sans. `next/image` for all photos. No animation library needed.

### Section-by-Section Build Order (single page, anchor nav)

1. **Header** — sticky, 4px red top border, logo (40px tall), nav: About · Priorities · How to Vote · Get Involved, Facebook icon, red "Donate" CTA, mobile hamburger.
2. **Hero** (`#top`) — gradient + skew sheen, H1, Donate + See His Priorities, headshot.
3. **Hero strip** — "Election Day is Tuesday, November 3 · Make your plan to vote" (link to `#vote`).
4. **About** (`#about`) — surface bg, section head "About Aaron" (in red), family-porch photo + 3 paragraphs.
5. **On the job** — full-bleed 4-photo strip.
6. **Priorities** (`#priorities`) — kicker "On the Record", H2 "Aaron is a champion for", 3 pillar cards: Safety, Transparency, Community.
7. **Vote** (`#vote`) — navy band, kicker "Make a Plan", H2 "Make your plan to vote", copy, red date card "Tuesday, November 3 / Election Day / Visit govoteky.com".
8. **Join** (`#join`) — bar-shirt photo + panel: kicker "Join Us", H3 "The campaign runs on neighbors like you.", Donate, Facebook, email chip `aarontheattorney@gmail.com`.
9. **Footer** — "Aaron Sutherland for Newport City Commission · Facebook" / "Paid for by Aaron Sutherland for Newport City Commission". Policy links + Cookie settings are added in Stage 6.

## Notes

- "Paid for by" disclaimer must stay in the footer (campaign finance requirement).
- Election Day "Tuesday, November 3" matches 2026-11-03.
- External links (ActBlue, Facebook, govoteky) open in a new tab with `rel="noopener"`.
- `og:image` in source is a relative path. The rebuild needs an absolute URL once the domain is known.
