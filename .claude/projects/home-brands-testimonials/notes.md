# Home: Top Brand Partner, deal strip, What Our Clients Say

Source: Figma screenshot, 1186×910, exported at ×0.727; values multiplied by **1.3757** (961px here equals the 1322px container). Built 2026-09-24.

| Element | Design value |
|---|---|
| Brand section | `pt-60 pb-60`, `.section-title`, "See All Brands" outline pill 44px, 30px to grid |
| Brand grid | 6 × 220px columns, 1px slate-200 outline (radius 12), slate-100 hairlines. Cells: 135px logo area + 42px slate-25 strip (Nunito 16px slate-800) |
| Deal strip | Full-bleed main-600, 126px tall, 8px below the brand section |
| Pill | 38px tall, padding 16/8. 20px check icon. Nunito 16px ("Get" main-600 500, divider 1×18 slate-200, "25% Discount" slate-600) |
| Headline | Nunito 500 **20.5px** white (measured; Figma sets it wider than Chrome), 18px gap to a 44px white arrow circle |
| Countdown | `.flash-countdown--light`: 42×40 white boxes, main-600 Signika 20px digits, white 600 12px labels, gaps 22/8/22 |
| Testimonials | `pt-60 pb-60` + 4px, header 26px above cards, arrows 42px (10px gap) |
| Testimonial card | 427×299, `accent-25` bg, `accent-100` border (600 when centered or hovered), radius 12, padding 11 + 1 border |
| Card top block | Padding 15/15/33. Stars 20px (4px gap, 10px below). Title Signika 600 20px (16px below). Quote Nunito 14px slate-600, line-height 23.4, max-width 380 |
| Card bottom block | Slate-200 divider, padding 18/15/15. Avatar 52px, 18px gap. Name Signika 600 16px, role Nunito 12px. `ph-light ph-quotes` 56px rotated 180° in the accent color |

Verified with headless Chrome: within 0–3px on every measured element.

## Placeholders
- The 12 brand logos (`images/brands/`) and 3 avatars (`thumbs/avatars/`) were cut from the screenshot and upscaled. Replace them with 2x exports or SVG logos.
- Testimonials 1, 2, 6, and 7 are sample copy, so the 5-position pager matches the design (it opens on position 3).
