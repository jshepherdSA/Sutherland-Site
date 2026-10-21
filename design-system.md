# Design system — Aaron Sutherland for Newport City Commission

Source: brand tokens from the supplied `sutherland-site-FINAL` HTML and logo
(rebuild). Tokens live in `app/globals.css` under `@theme`; use the Tailwind
names in the right column. Do not add hex values to components.

## Brand

- **Client:** Aaron Sutherland, re-election for Newport (KY) City Commission
- **Voice / feel:** Plainspoken, civic, neighborly. Bold condensed headlines,
  flag red and blue, square-ish corners. Feels like a well-made yard sign: direct,
  confident, no flourish. Copy talks about "Aaron" in the third person.

## Color

| Role                                                | Hex       | Tailwind token |
| --------------------------------------------------- | --------- | -------------- |
| Primary (navy)                                      | `#2F5E9E` | `navy`         |
| Primary deep                                        | `#234A80` | `navy-deep`    |
| Primary light (gradient end)                        | `#3E71B4` | `blue`         |
| Accent red (brand, decorative: borders, rules)      | `#DC524D` | `red`          |
| Accent red, text-safe (buttons, red text, strip bg) | `#C8433E` | `red-ink`      |
| Accent red hover                                    | `#B13A35` | `red-hover`    |
| Red tint                                            | `#FBE6E5` | `red-soft`     |
| Blush (accent text on navy)                         | `#FFD9D7` | `blush`        |
| Body text                                           | `#1B2430` | `ink`          |
| Muted text                                          | `#4F5866` | `ink-soft`     |
| Background                                          | `#FFFFFF` | `paper`        |
| Surface                                             | `#F3F6FA` | `surface`      |
| Border                                              | `#D9E0EA` | `line`         |
| Footer bg                                           | `#182338` | `night`        |
| Footer text                                         | `#B9C4D6` | `night-ink`    |
| On-navy body text                                   | `#D9E5F5` | `mist`         |
| Facebook (AA-safe)                                  | `#166FE5` | `facebook`     |

Rules:

- White text only on `navy`, `navy-deep`, `red-ink`, `facebook`, `night`.
- Never put text on `red` (`#DC524D`), which fails AA. Use `red-ink`.
- shadcn semantic vars map to: `--primary` = red-ink, `--ring` = navy,
  `--border` = line, `--muted` = surface, `--muted-foreground` = ink-soft.

## Typography

- **Heading font:** Archivo 700 / 800 / 900 (`font-heading`), tracking `-0.01em`
- **Body font:** Public Sans 400 / 500 / 600 / 700 / 800 (`font-sans`)

| Element            | Size                            | Weight | Line-height | Notes                                            |
| ------------------ | ------------------------------- | ------ | ----------- | ------------------------------------------------ |
| H1 hero            | `clamp(2.25rem, 5.2vw, 3.6rem)` | 900    | 1.02        | white, last word blush                           |
| H2 section         | `clamp(1.5rem, 3vw, 2rem)`      | 900    | 1.1         | navy (About head uses red-ink)                   |
| H3 pillar          | 1.3rem                          | 900    | 1           | UPPERCASE, tracking .5px, navy                   |
| H3 panel           | 1.5rem                          | 900    | 1.1         | navy                                             |
| Kicker             | .78rem                          | 800    | —           | UPPERCASE, tracking 2px, red-ink (blush on navy) |
| Nav link           | .9rem                           | 700    | —           | UPPERCASE, tracking .5px                         |
| Body large (About) | 1.1rem                          | 400    | 1.5         |                                                  |
| Body               | 1rem                            | 400    | 1.45        |                                                  |
| Small / footer     | .82rem                          | 400    | —           |                                                  |
| Button             | .95rem                          | 700    | 1.1         |                                                  |

## Spacing & layout

- Base unit 4px (Tailwind default scale).
- Container: `max-w-[1120px] mx-auto px-5` (20px gutters).
- Section rhythm: `py-12` (48px) desktop, `py-8` (32px) under 820px. Navy
  bands (vote) use `py-9`.
- Breakpoints: Tailwind `md` (768) is the main collapse point, `lg` (1024) for
  the photo strip row layout. Source used 820/980; close enough and standard.
- Section head: flex row, `border-b-[3px] border-navy pb-3 mb-6`.

## Components

- **Buttons** (shadcn `Button` / `buttonVariants`, radius 4px, `h-11 px-5`, bold):
  - `primary`: bg red-ink, white text, hover red-hover
  - `outline-light`: transparent, 2px `white/70` border, white text, hover `white/10` (on navy only)
  - `light`: white bg, red-ink text (inside red date card)
  - `facebook`: bg facebook, white text, FB glyph
  - Focus: 3px navy (or white on dark) ring, always visible on keyboard focus.
- **Card (pillar):** white, 1px line border, 5px navy top border, radius 4px, p-5.
- **Nav:** sticky, white, 4px red top border, 1px line bottom border; logo 40px
  tall; uppercase links with red underline on hover; red "Donate" CTA; mobile
  hamburger opens a full-width link list below the bar.
- **Footer:** night bg, night-ink text, .82rem; brand name in white 800.
  Holds the "Paid for by" disclaimer (required), plus policy links + Cookie settings.
- **Email chip:** white, 1px line border, navy bold text, red-soft square icon.
- **Form fields:** none on this site (donations go to ActBlue).

## Imagery

- Real campaign photography only. Portraits shown at 2:3, `object-cover`.
- Radius 4px. About photo: soft navy shadow
  (`0 10px 24px -12px rgba(47,94,158,.5)`).
- Hero headshot: full-height panel on the right 42% of the hero (desktop),
  left edge cut on a 12° diagonal with a 6px `red` stripe, `object-[center_15%]`.
  Mobile: full-width 300px photo on top with a diagonal bottom edge.
- Full-bleed photo band: no radius, 2px navy-deep gaps.
- No illustrations or icons beyond the Facebook glyph and simple lucide icons
  where needed.
