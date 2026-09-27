---
name: vip-bazar-design-system
description: The vip-bazar design tokens and utility-class API (colors, fonts, spacing scale, type scale, radii, hover/group helpers, Bootstrap usage) plus the list of classes that are referenced in the HTML but not defined. Use when writing or reviewing any HTML/SCSS in this project, especially when converting a design.
---

# vip-bazar design system

The stack is Bootstrap 5 (grid and helpers), a custom Tailwind-like `tw-*` utility layer in SCSS, Phosphor icons, AOS, GSAP (+ ScrollTrigger, SplitText), and jQuery. The SCSS entry point is `src/assets/sass/main.scss`, which imports abstracts → components → utilities → layout → partials.

## Colors (`abstracts/_variable.scss`)

| Token | Value | Approx hex | Use |
|---|---|---|---|
Palette set from the eCommex home design (2026-09-24):

| Token | Value | Hex | Use |
|---|---|---|---|
| `--main-600` | `hsl(221.5 73.7% 49.2%)` | `#215ADA` blue | brand / primary: Register, active nav, hero price, buttons |
| `--main-two-600` | `hsl(81.4 58.3% 4.7%)` | `#0E1305` near-black | headings, top bar text, Search button |
| `--purple-600` | `hsl(251.4 91.3% 63.9%)` | `#6F4FF7` | promo card accent |
| `--green-600` | `hsl(158.9 51.6% 42.2%)` | `#34A37C` | promo card accent, wishlist badge |
| `--orange-600` | `hsl(13.1 100% 55.1%)` | `#FF4C1A` | cart badge, sale prices |
| `--yellow-600` | `hsl(45.3 97.4% 54.1%)` | `#FCC418` | rating stars, "Hot Deal" badges (use dark `text-heading` on it) |
| `--gold-600` | `hsl(45.2 97.4% 31%)` | `#9C7602` | bags / accessories accent; `gold-50` is the beige panel |
| `--heading-color` | `var(--main-two)` | `#0E1305` | headings, `.text-heading` |
| `--body-color` (`--body`) | `221 35.8% 20.8%` | `#222E48` | body text |
| `--white` | `0 0% 100%` | `#FFFFFF` | `.text--white` (note the double dash) |
| `--slate-*` (hex map) | 25 `#f9f9f9` (product image box), 50 `#f3f3f3`, 100 `#f0f0f3`, 200 `#e3e4e7`, 500 `#6a7283`, 600 `#404a60`, 800 `#222e48` | | 50 = header band bg; 100/200 = light borders/dividers; 500 = struck price; 600 = nav links, "From"; 800 = body copy |
| `--neutral-50…950` | Tailwind gray | `#f9fafb … #030712` | legacy |

Handy tints that match the design exactly: `main-50` `#E9EFFB` (blue pill), `orange-50` `#FFEDE8` (peach pill), `main-100` / `purple-100` / `green-100` (badge borders).

`main`, `main-two`, `purple`, `green`, `orange`, `yellow`, `gold` have generated shades `50 100 200 300 400 500 600 700 800 900`: 50–500 are lighter mixes toward white (90%…40%), 600 is the base, and 700–900 are 10–30% darker.

Class families generated for each `{main, main-two, purple, green, orange, yellow, gold, slate, neutral}-{shade}`:
`text-*`, `bg-*` (!important), `border-*` (!important), `hover-text-*`, `hover-bg-*`, `hover-border-*`, `focus-border-*`.
Extras: `text-heading`, `text-main`, `text--white`, `hover-text-white|heading|body`, `hover-bg-white`, `bg-white-08|13|7|06` (white at 8/13/70/6% alpha).

**Do not use `text-body`:** Bootstrap 5.3's `.text-body` is `!important` (#212529) and beats ours. Use `text-slate-800` for body-colored text.

How to reference colors in SCSS:
- Palette colors are complete values: `color: var(--main-600);`
- `--white`, `--black`, `--body`, `--heading-color`, `--body-color`, and `--main` are **HSL triplets**, so wrap them: `hsl(var(--white))`, and add alpha with `hsl(var(--black) / .08)`.

To change the brand color, edit `--main-h/s/l` (or `--main-two-*`) and every shade follows.

## Fonts

- `--body-font`: **Nunito** (300–900), set on `body`. UI text is 14px (`tw-text-sm`).
- `--heading-font`: **Signika** (300–700). It is used by every `h1–h6`, which default to weight 700 and line-height 1.2. The design's headings are **600**, so add `fw-semibold`. Buttons, badges, and offer circles also use Signika 600 (`font-heading fw-semibold`).
- Identified by measuring glyph width against cap height. Fira Sans Condensed looks similar but renders about 10% too wide.
- Helpers: `.font-heading`, `.font-body`, `.fw-extrabold` (800, for prices).
- Figma renders Nunito about 2% narrower than Chrome, so text runs drift 2–3px per 100px. That's expected; don't compensate with letter-spacing.
- `p` has line-height 1.6, and **`span` is `display:inline-block` globally**.

Fluid heading sizes:

| var | min → max |
|---|---|
| `--heading-one` | 32 → 68px |
| `--heading-two` | 28 → 46px |
| `--heading-three` | 24 → 40px |
| `--heading-four` | 20 → 32px |
| `--heading-five` | 18 → 28px |
| `--heading-six` | 16 → 20px |

## Spacing scale (`$spaces`, in rem where 16px = 1rem)

| key | 05 | 1 | 105 | 2 | 205 | 3 | 305 | 4 | 405 | 5 | 505 | 6 | 605 | 7 | 705 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| px | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 68 |

Generated utilities (`{k}` = key above):
- Margin: `tw-m-{k} tw-mx- tw-my- tw-ms- tw-me- tw-mt- tw-mb-` (logical properties), plus `tw-ms-auto`, `tw-me-auto`, `tw--mt-10-px`, `tw--me-16-px`.
- Padding: `tw-p-{k} tw-px- tw-py- tw-ps- tw-pe- tw-pt- tw-pb-`, plus `tw-pe-150-px` and fluid `tw-p-36-px`, `tw-p-48-px`, `tw-p-60-px`.
- Gap: `tw-gap-{k}`, plus fluid `tw-gap-42-px -48-px -56-px -62-px -74-px`.
- Width/height: `tw-w-{k}`, `tw-h-{k}`, `tw-w-px`, `tw-h-px`, `tw-w-300-px`, `tw-h-screen`, `tw-h-75-px -84-px -92-px -320-px`, `tw-min-h-184-px -210-px`, `min-w-max`.
- Font size: `tw-text-{k}` (any spacing key as a font-size, e.g. `tw-text-505` = 22px), plus `tw-text-xs` (12), `sm` (14), `base` (16), `lg` (18), `xl` (20), `2xl` (24), `3xl` (30), `tw-text-13-px`, `tw-text-17-px`, and `tw-sm-text-sm` (14px below 576).
- Section rhythm: `py-120 pt-120 pb-120` (60/80/120 at <576/≥576/≥992), `py-60 pt-60 pb-60` (30/40/60), and `my-120 mt-120 mb-120 mt-60 mb-60`.
- Max width: `max-w-330-px`, `max-w-806-px` (header search), `max-w-810-px`, `max-w-1752-px`.
- Container: `container container-two` is the page container (max-width 1346px at ≥1400, so 1322px of content). It is used by the top bar, header, banner, and footer.

**Naming rule for new one-off values:** `{prefix}-{N}-px`, e.g. `tw-h-440-px`, `max-w-200-px`. Add them to the matching utilities partial, never inline `style=""`.

**Why the `tw-*` prefix instead of Bootstrap spacing:** Bootstrap's `p-3`/`gap-4` scale is coarse (4/8/16/24/48). Use `tw-*` for exact px, and Bootstrap only for layout (`d-flex`, grid, `position-*`, `w-100`, `rounded-pill`, `fw-*`, and so on).

## Radius, shadow, misc

- `tw-rounded` 4, `-sm` 2, `-md` 6, `-lg` 8, `-xl` 12, `-2xl` 16, `-3xl` 24, `-none`. Bootstrap: `rounded-pill`, `rounded-circle`.
- `.common-shadow` (`0 6px 30px #0000000a`), and Bootstrap `.shadow`.
- `tw-leading-none` (line-height 1), `line-clamp-1..4`, `opacity-05`, `opacity-1` (= .1), `object-top`, `origin-left`, `cursor-pointer`, `cursor-grab`, `focus-outline-0`, `bg-img` (cover/center), `tw-invisible`, `tw-z-99|991|999`, `tw-start-0|50|100|auto`, `tw-end-0|100|auto`.
- Transforms: `tw-translate-x-50`, `tw--translate-y-50`, `tw--translate-middle`, `tw--translate-x-full`, `tw-scale-04|08`, `tw-hover-rotate-360`.
- Transitions: `tw-transition`, `tw-transition-all`, `tw-duration-75|100|150|200|300|500`.

## Interaction helpers

- Hover movement: `hover--translate-y-05|1|2` (−2/−4/−8px), `hover--translate-x-*`, `hover-scale-09 … -30`, `active-scale-09|094|098|102`, `active--translate-y-05|1`, and `active--translate-y-scale-9`.
- `.group:hover` → children `group-hover-text-white|main-600`, `group-hover-bg-white|main-600`.
- `.group-item:hover` → children `group-hover-item-visible`, `-opacity-1`, `-mt-0`, `-scale-12`, `-scale-1`, `-translate-x-0`, `-d-block`, `-d-none`, `-text-invert-white|black`.
- `hover-underline`, `hover-underline-none`, and `hover-animation-white` (diagonal shine).
- Placeholder: `tw-placeholder-text-neutral-{100..900}`, `focus-tw-placeholder-text-hidden`, `tw-placeholder-transition-2`.
- Animations: `animation-upDown`, `animated-upDown`, `left-right-animation`, `scale-animation`, `animation-scalation`, `animation-rotate`, `animation-rotate-right`, `animation-rotate-scale`, `animate__wobble__two`, `animation-delay-1|2|3`, and `.animation-item:hover .animate__bounce|wobble|heartBeat|flipInY|swing`.
- Scrollbars: `scroll-sm`, `scroll-sm-horizontal`.

## Referenced but NOT defined (do not rely on these)

Audit on 2026-09-24. These classes appear in the partials but have no CSS in `main.css` or `bootstrap.min.css`, so they currently do nothing:

`flex-center`, `max-w-200-px`, `max-w-444-px`, `tw-h-108-px`, `tw-h-440-px`, `tw-pb-68`, `tw-text-md`, `tw-w-max`, `text-lg`, `text-base`, `font-sm`, `text-line-1`, `text-poppins`, `text-neutral-1000`, `leading-none`, `transition-all`, `border-dashed`, `placeholder-text-neutral-400`, `pointer-event-none`, `active--translate-y-2`.

Use these instead:

| Don't use | Use |
|---|---|
| `leading-none` | `tw-leading-none` |
| `transition-all` | `tw-transition-all` |
| `border-dashed` | `tw-border-dashed` |
| `text-lg` | `tw-text-lg` |
| `text-base` | `tw-text-base` |
| `tw-w-max` | `min-w-max` (or define it; note `.tw-w-w-max` is a typo'd existing class) |
| `flex-center` | `d-flex justify-content-center align-items-center` |
| `placeholder-text-neutral-400` | `tw-placeholder-text-neutral-400` |
| `pointer-event-none` | Bootstrap `pe-none` |

If a design needs one of the others (for example `max-w-200-px`), define it properly in the utilities partial.

JS hooks with no CSS are intentional; keep them when reusing markup:
`toggle-mobileMenu`, `close-button`, `toggle-password`, `form-submit`, `delete-button`/`delete-item`, `cursor-big`/`cursor-small`, `splitTextStyleOne|Two|Three`, `split-reveal`/`split-reveal-element`, `settings-panel__*`, and `data-block="button"`.
