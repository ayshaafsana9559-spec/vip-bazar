---
name: figma-to-html
description: Convert a Figma screenshot into pixel-perfect HTML + SCSS/CSS for the vip-bazar project, using its utility-class system, partials, and components. Use whenever the user shares a Figma/design screenshot, image, or mockup and wants it built, or asks to "convert", "slice", "code", or "build" a section/page from a design.
---

# Figma screenshot → HTML/CSS (vip-bazar)

You are a senior front-end developer with 10+ years of experience. The target is a **pixel-perfect, same-to-same** build of the screenshot. Every spacing, size, color, radius, weight, and alignment matters.

Before writing code, load the companion skills:
- `vip-bazar-design-system` — tokens, utility classes, and the classes that are referenced but missing.
- `vip-bazar-components` — ready markup for buttons, inputs, icon badges, nav, cards, and more.

## 1. Analyze the screenshot (do this first, in your head, not as chat output)

1. **Scale check first.** The page content is **1322px** wide (`container container-two`). Measure the content width in the screenshot and scale every measurement by `1322 / measured`. For example, the Deal of the Day export was ×0.725, so values are multiplied by 1.38. Sizes should land on sensible values (14/16/24/28…) after scaling.
   **Frame width and scale.** The desktop layouts use `.container.max-w-1752-px`, which implies a **1920px** artboard (84px side gutters). If the screenshot is 3840 wide it is @2x; halve every measurement. If the width is unclear and it changes the numbers, ask once.
2. **Break it into sections** (top-to-bottom), then each section into rows, then into columns/flex groups. Decide flex or grid for each group.
3. **Measure everything** from the pixels: outer paddings, gaps between items, element widths/heights, border widths, radii, icon sizes, font sizes, and line-heights. Estimate font size from cap height (cap height ≈ 0.7 × font-size for Poppins).
4. **Sample colors** and compare them against the tokens (see the design system). Use an existing token when the difference is imperceptible (ΔE < ~2). Otherwise add a new token; do not hardcode hex values inside the HTML.
5. **Identify fonts.** Body is Poppins; headings are Vidaloka (serif). If the design shows a different family, add it to the Google Fonts `@import` in `abstracts/_variable.scss` and a CSS variable.
6. **Find reusable pieces**: header/nav, search, icon badges, and buttons already exist. Reuse them instead of rebuilding.

## 2. Map measurements → classes

Use the existing utility scale whenever a measurement matches it exactly:

| px | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 68 |
|----|---|---|---|---|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| key | 05 | 1 | 105 | 2 | 205 | 3 | 305 | 4 | 405 | 5 | 505 | 6 | 605 | 7 | 705 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 |

For example, `tw-p-4`, `tw-gap-305`, `tw-mb-705`, `tw-w-12`, `tw-h-12`, and `tw-text-505` (font-size 22px).

When a value is **not** on the scale, do not round it to a nearby step. Instead, add a precise utility with the project's naming convention (`-NN-px` suffix) to the matching partial in `src/assets/sass/utilities/`:
- `tw-h-440-px` → `_height.scss`, `max-w-200-px` → `_max-w.scss`, `tw-gap-42-px` → `_gap.scss` (these use a `clamp()` so they scale down on small screens), and so on.
- Large spacing/gaps (≥ 40px) should be fluid with `clamp(min, preferred, max)` like the existing `tw-gap-48-px` / `py-120` patterns, so mobile does not break.

Use Bootstrap 5 for layout plumbing: `container`, `row`/`col-*`, `d-flex`, `align-items-*`, `justify-content-*`, `position-*`, `w-100`, `h-100`, `rounded-pill`, `rounded-circle`, `fw-*`, `d-lg-none`, and the like. Use `tw-*` utilities for spacing, sizes, and type sizes (see the design system for why).

## 3. Where code goes

| What | File |
|---|---|
| New section markup | `src/html/partials/_<section-name>.html` (kebab-case, leading underscore) |
| Page assembly | `src/html/pages/<page>.html` via `@@include('../partials/_x.html', { "var": "value" })` |
| Section-specific styles (anything utilities can't express: gradients, pseudo-elements, clip-paths, complex hover) | `src/assets/sass/partials/home-one/_<section>.scss` (for another page, make `partials/<page>/`), imported from that folder's `_index.scss` |
| New reusable utility | the matching `src/assets/sass/utilities/_*.scss` |
| New color/font/size token | `src/assets/sass/abstracts/_variable.scss` |
| Images/icons | `src/assets/images/{thumbs,icons,logo,...}/` |

`src/index.html` and `src/register.html` are **build outputs** of gulp-file-include. Never hand-edit them as the source of truth.

### Build
The user keeps `gulp watch` running. It compiles SCSS → `src/assets/css/main.css` and includes partials → `src/*.html` within a couple of seconds of each save, even though `node` is not on Claude's shell PATH. Edit only the sources (SCSS and partials), then check that `main.css` and `src/<page>.html` picked up the change, for example by grepping for a new class. Hand-edit the outputs only if they did not update.

## 3b. Assets from a screenshot
When no Figma exports are provided, extract assets from the screenshot with PowerShell and System.Drawing (there's no Python or ImageMagick here):
- **Icons and logos on a flat background:** "unblend" against the known background color to get a transparent PNG.
- **Product artwork on a card:** crop the whole card, erase the text boxes by vertical interpolation feathered into the neighboring columns, and clean the 2px anti-aliased frame. Use the result as the card `background-image` anchored `right top` at natural size, so HTML badges placed with physical `top`/`right` line up with it.
Always tell the user these are 1x placeholders and should be swapped for 2x Figma exports.

## 3c. Verify against the design (don't skip)
Render with headless Chrome and diff against the screenshot:
`"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --hide-scrollbars --force-device-scale-factor=1 --force-prefers-reduced-motion --virtual-time-budget=15000 --window-size=<design width>,<height> --screenshot=out.png file:///D:/Subrata-vai-project/vip-bazar/src/index.html`
- Compare the ink bounding boxes of each element in both images, and fix anything off by more than about 2px.
- To identify a font, load candidates with `document.fonts.load` and compare the ratio of ink width to cap height using canvas `measureText`.
- Headless Chrome won't lay out narrower than about 500px. For mobile, screenshot a page that wraps `index.html` in a 375px `<iframe>`.

## 4. Markup rules

- Use semantic HTML: `header`, `nav`, `section`, `footer`, `h1-h6` in the correct order, `button` for actions, `a` for navigation, and `alt` on every image.
- Mark each section with the existing comment style:
  `<!-- ======================== Section name start ======================== -->` … `end`.
- Use Phosphor icons (`<i class="ph ph-heart-straight"></i>`, weights `ph`, `ph-bold`, `ph-fill`, `ph-light`, `ph-thin`, `ph-duotone`). Match the weight visually; size them with `tw-text-*` and remove the extra line-height with `tw-leading-none`. When the design uses a custom icon that Phosphor lacks, export it as SVG/PNG into `assets/images/icons/`.
- Use logical properties in custom SCSS (`padding-inline-start`, `inset-inline-end`, `margin-block-end`), matching the codebase so RTL keeps working.
- Colors in SCSS are `var(--main-600)` for the palette and `hsl(var(--white) / .5)` for the HSL-triplet vars.
- Animations: add `data-aos="fade-up" data-aos-duration="800"` when the design implies entrance motion. Buttons get `data-block="button"` plus `button__flair` for the GSAP hover.

## 5. Responsive

Build desktop exactly as in the screenshot, then degrade sensibly using Bootstrap breakpoints (`sm 576`, `md 768`, `lg 992`, `xl 1200`, `xxl 1400`):
- Stack columns below `lg`, and hide desktop nav with `d-lg-block d-none`. The mobile menu partial already exists.
- Use fluid `clamp()` values for big type (`--heading-*` vars already are) and big gaps.
- There should be no horizontal scroll at 375px.

## 6. Self-check before handing back

Go through this checklist against the screenshot, element by element:
- [ ] Section heights and vertical rhythm match (top/bottom paddings).
- [ ] Every gap and padding matches a measured number, with nothing rounded.
- [ ] Font family, size, weight, line-height, letter-spacing, and case match.
- [ ] Colors match tokens, including borders, placeholder text, and hover states.
- [ ] Radii, border widths, and shadows match.
- [ ] Icon glyph, weight, and size match.
- [ ] Image aspect ratio and `object-fit` are correct, with no stretching.
- [ ] No undefined classes are used (see the design-system "missing classes" list).
- [ ] SCSS source, `main.css`, the partial, and the built page are all updated.

When you finish, tell the user which files changed and name any assumptions (for example, "assumed 1920 artboard", "icon approximated with ph-bold ph-tag"). Ask for the Figma values or exported assets when the screenshot cannot resolve a detail, such as exact hex values, a custom font, or a real photo.
