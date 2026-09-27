# Home: features bar + footer (CTA, main, bottom)

Source: Figma screenshot, 1516×792, exported at ×0.929; values multiplied by **1.0765** (the 1228px content row equals the 1322px container). Built 2026-09-24. This replaces the old template footer in `_footer.html`.

| Element | Design value |
|---|---|
| Features bar | 1px slate-100 top border, padding 68/61. 4-column grid with a 69px gap. Icon 56px, 20px gap. Title Signika 600 20px/1.2, 11px below. Text Nunito 12px/1.5 slate-600. Link Signika 600 14px, 17px above, arrow 16px with 8px gap. Colours: main, green, gold, orange |
| CTA band | main-two-600, padding 39. Title Signika 600 28px/1.2 white, 10px below. Text Nunito 14px white. Buttons 44px tall, 6px apart: Explore Products `btn-main` padding 22, Request Quote `btn-light-main` padding 28 |
| Hairlines | white 8% |
| Main | padding 66, columns `345 202 174 320 281` (fr) |
| Logo and about | Logo 161×43 (−5px top, 20px below). About text slate-200, max 256px. Socials 32px circles (white 15% border), 8px gap, 24px above |
| Column titles | Signika 600 17px white, 18px below |
| Links | Nunito 14px/1.5 white, 6px gap; hover turns them yellow with a dot |
| Contact | 42px circles (white 5% bg, white 12% border, green-600 20px icon), 14px gap, 20px between items |
| Newsletter | Text Nunito 14px. Form 50px pill (white 5% bg, white 14% border), 28px above. Placeholder white 75%. Button 62×44 main-600, inset 3px |
| Bottom bar | 60px, copyright Nunito 14px (brand yellow-600), payment badges 32×23, 4px gap |

Verified with headless Chrome at the exact page height: within 0–3px. A taller window lets `body`'s min-height push the footer down, so screenshots must use the document height.

## Housekeeping
- The two `py-120` spacers and the commented starter demos were removed from `html/pages/index.html`.

## Placeholders
- `logo-white.png`, `icons/features/*.png`, and `icons/payments/*.png` were cut from the screenshot. Replace them with SVG or 2x exports.
