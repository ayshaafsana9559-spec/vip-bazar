# Home: top bar, header, category strip, hero banner

Source: Figma screenshot, 1634×904 (a 3px/2px frame around a 1627px-wide page), scale 1:1. Built 2026-09-24.

## Measurements → implementation

| Area | Design | Code |
|---|---|---|
| Container | content x 152.5–1474.5 = 1322px | `container container-two` (1346 max at ≥1400) |
| Top bar | 48px, white, Nunito 14 #0E1305, dividers 1×20 #E3E4E7 | `_top-header.html`, `.top-header__inner` min-height 48 |
| Header | 78px band #F3F3F3; logo 162×44; search 806×44 pill + 1px border; actions 44px circles, 7px gap; Register 126×44 | `_header.html`, `.header-middle`, `.header-search`, `.header-actions` |
| Header buttons | Signika 600 **13px** (Search 75×30, Register) | `tw-text-13-px` |
| Badges | 24px circles, offset -6/-6, green #34A37C / orange #FF4C1A | `.header-action__badge` |
| Nav | 46px + 1px bottom border #F0F0F3; Categories block 160px with side borders; links Nunito 14 #404A60, 20px gap; active = blue text | `.header-nav__inner`, `_nav-menu.html` |
| Category pills | 56px tall, 20 + 36 icon + 10 + label + 20, 13px gap, Nunito 500 17px #222E48 | `_category-slider.html`, marquee track offset -44px |
| Pill colors | #E9EFFB (main-50), #FFEDE8 (orange-50), #E9F8E9, #EEEEEE | `bg-main-50`, `bg-orange-50`, `.category-pill--green/--gray` |
| Hero card | 874×562, r12, padding-left 68, content vertically centered | `.banner-card--hero` |
| Hero heading | Signika 600 48px, line-height 53px | `.banner-card__title` |
| Hero copy | badge 38px tall (pad 16); desc Nunito 12/18; From 17 / $79 Nunito 800 30 / $99 17; button 146×44 | |
| Side cards | 428×271, 20px gap; heading Signika 600 34/1.2; badge 33px (pad 8); prices 14/24/14; button 145×40 | `.banner-card__title--sm` |
| Offer circles | 85px (top 30, right 157), 56px (15/32), 68px (20/36) | `.banner-offer--lg/--sm/--md` |

Verified with a headless-Chrome diff: nearly every element within 0–2px. The exceptions are long Nunito rows, which drift 3–7px because Chrome draws Nunito about 2% wider than Figma.

## Assumptions and placeholders
- **Fonts** were identified from pixels: Signika (headings, buttons) and Nunito (UI). Confirm them in Figma.
- **Image assets** were extracted from the screenshot at 1x: `logo/logo.png` (old logo backed up in session scratch), `icons/flag-uk.png`, `icons/category/*.png`, and `thumbs/banner/*-bg.png`. Replace them with 2x Figma exports.
- **Automotive icon:** it's cut off in the design, so it uses Phosphor `ph-light ph-car-profile`.
- **Category strip:** it overflows both screen edges in the design, so it's built as an infinite marquee (pauses on hover, static with reduced motion) whose first frame matches the screenshot.
- **Dropdowns** (Category, Categories, EN, USD) and submenu items are placeholder content.
