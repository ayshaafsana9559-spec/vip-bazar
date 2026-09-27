# Home: Flash Sale Offer's + Featured Products

Source: Figma screenshot, 1192×894, exported at ×0.728; all values multiplied by **1.374** (a 962px row equals the 1322px container). Built 2026-09-24.

| Element | Design value |
|---|---|
| Flash section | `py-60`, `.section-title`, 30px to the slider |
| Countdown | Label Nunito 500 12px uppercase slate-600. Boxes 42×37, radius 6, main-two-600 background, Signika 600 20px white. Gaps: label→box 22, box→label 8, label→box 22 |
| Slider | Same product cards as Deal of the Day (315.5×477), 20px gap, 4 per view, opens on position 3 of 5 |
| Pager | 33px below the cards. Dots 8px main-300, 12px apart; active dot is main-600 inside a 28px ring (1px main-600) |
| Featured section | `tw-pt-2 pb-60`, so 68px sits between the pager and the tab |
| Frame | 1402 wide (container + 40 each side), 1px main-400 line, slate-25 background, radius 0/12/12/12, padding 39 |
| Tab | 357×76, top radius 14, 10px concave fillet, title padding 33 top / 39 left |
| List card | 651×257. Image 299×237. Body padding 14/11/15/24. SKU row Nunito 12px with -34% pill, 12px below. Footer padding 17 |

Verified with headless Chrome: within 0–2px on every measured element, after scaling.

## Placeholders
- `thumbs/products/{wireless-headphones,solar-mono-panel,red-ball-gown,macbook-m83,cricket-helmet}.png` were cut from the screenshot and upscaled. Replace them with 2x exports. The MacBook lid corner under its badge is slightly clipped, but the badge covers it.
- The countdown starts at 20:36:56 from page load. Set `data-deadline` for a real end date.
- Slides 1, 2, 7, and 8 reuse Deal of the Day products, so the 5-position pager matches the design.
