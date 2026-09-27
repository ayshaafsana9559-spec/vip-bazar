# Home: Popular Categories

Source: Figma screenshot, 1634×829, scale **1:1** (content 1326px, against our 1322px container). Built 2026-09-24.

| Element | Design value |
|---|---|
| Section | `bg-slate-25 py-60`; `.section-title` Signika 600 34px; "See All Categories" outline pill, 44px tall |
| Grid (≥1200) | columns `653fr 316fr 316fr`, 20px gap; banner spans 2 rows (600px tall, 2px inset top and bottom) |
| Promo banner | padding 53/24/48/52. Badge 33px tall (white 10% bg, white 20% border). Headline Signika 600 56px, line-height 1.054, white. "Up To" Nunito 20px. "40% OFF" Signika 600 42px yellow-600. $99.00 Nunito 20px struck. Shop Now: white pill, 44px tall, 28px side padding, purple-600 text |
| Category card | 316×292, 1px slate-100 border (main-600 on hover), radius 12, 19px padding |
| Image panel | 153px tall with 1px tinted border, radius 8 |
| Icon circle | 60px, bottom -30px, right 10px, 44px icon |
| Card text | Title Signika 600 20px (18px above). Description Nunito 12px slate-500 (9px above, 1px below) |
| Tags | Nunito 11px, 24px tall, 10px side padding, slate-25 bg, slate-100 border, 4px gap. Arrow 32px outline circle, bottom-aligned |

Verified with headless Chrome: 0–3px on every element.

## Placeholders
- `thumbs/categories/*.png`, `icons/category-card/*.png`, and `mega-deals-banner.png` were cut from the screenshot at 1x. Replace them with 2x exports.
- The "New Arrivals SALE" sticker is part of the banner artwork, not live text.
- TV & Displays reuses the electronics icon, as in the design.
