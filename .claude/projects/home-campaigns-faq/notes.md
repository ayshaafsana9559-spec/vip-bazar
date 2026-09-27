# Home: Shop By Campaign + Need Help? (FAQ)

Source: Figma screenshot, 1295×914, exported at ×0.791; values multiplied by **1.2639** (the 1046px card row equals the 1322px container). Built 2026-09-24.

| Element | Design value |
|---|---|
| Campaign section | `py-60`, `.folder-frame` (same as Featured Products) with the countdown in `.folder-frame__aside`, shifted 3px up |
| Campaign card | 315×315, 1px slate-200 border (main-600 on hover), 9px padding + border. Main photo 203×236 (yellow-25), thumbnails 83×73 with 8px gaps (green/purple/orange-25). Footer padding 16/3/6: title Signika 600 17px, count Nunito 12px (3px above), Shop outline 36px tall with 20px padding |
| Slider | `.snap-slider`, 4 per view, 8 slides, opens on position 3 of 5 |
| FAQ section | `tw-pt-2 pb-60`, grid `538fr 651fr`, 133px column gap |
| Left column | `.section-title` (−6px top, 14px below). Intro Nunito 14px/1.5, max 560 |
| Help card | orange-25 background, orange-100 border, radius 12, padding 26 (right 16). Title Signika 600 17px, 13px below, copy Nunito 14px, 32px below. `btn-orange` 40px tall, 22px padding |
| Accordion | 18px gap between items. Items: 1px slate-100 border, radius 25, slate-25 background; open item is white with a main-600 border. Question Signika 500 17px/1.2, padding 12/27, min-height 47. Caret 18px slate-600. Answer Nunito 12px/1.4, padding 2/27/14 |
| Phones | Countdown boxes 36×34 (18px digits) with tighter label gaps, so all three units fit on one line |

Verified with headless Chrome: within 0–3px on every measured element.

## Placeholders
- The 16 images in `thumbs/campaigns/` were cut from the screenshot and upscaled. Replace them with 2x exports.
- Slides 1, 2, 7, and 8 repeat the four design campaigns, so the pager has the design's 5 positions.
- Five FAQ answers are sample copy. Only the payment answer comes from the design.
