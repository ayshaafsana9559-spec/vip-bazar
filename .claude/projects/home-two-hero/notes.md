# Home 2 (index-2.html): centre-mode offer carousel

Source: Figma screenshot, 1024×212, exported at ×0.727; values multiplied by **1.3757** (the visible 1019px strip equals the 1402px carousel). Built 2026-09-26.

Page: `html/pages/index-2.html` = top header, header, `_hero-two.html`, features bar, footer.

| Element | Design value |
|---|---|
| Carousel | 1402px wide at ≥1400 (container + 40 each side). Slides 561×290, 17px gap, active slide centred, neighbours show about 404px |
| Arrows | 38px circles centred on the active card's edges. Prev is white with a main-300 icon; next is main-600 with a white icon |
| Card | radius 16, padding-inline 35, content vertically centred; artwork `<img>` covers the card |
| Badge | 33px tall, white, 1px tone-100 border, Signika 600 12px tone text, 8px below |
| Title | Signika 600 42px/1.08 heading colour, 28px below |
| Price row | "From" Nunito 15px slate-600, price Nunito 800 26px tone, old price 14px slate-500, 23px below |
| Button | 40px tall, 24px padding, Signika 600 12px, 14px cart icon |
| Offer circle | 72px, Signika 600 20px / 14px, positioned over the circle in each artwork (`--offer-x/y`) |
| Themes | blue (main), purple, gold (gold-600 text, yellow-600 circle with dark text, dark button with yellow text) |

JS: main.js "Hero Two Carousel" runs 3 copies of the slides with an invisible jump at the ends, autoplays every 5s (pauses on hover or focus), and respects reduced motion.

## Assumptions and placeholders
- The purple card's title is cut off in the design ("…very Beat / …tly"). I used **"Feel Every Beat Instantly"**.
- The gold card's artwork is cut off on the right in the screenshot. The missing ~115px were filled with its background colour and a fade. **Send the full artwork** for that card.
- All three `thumbs/hero-two/*.png` come from the 1x screenshot. Replace them with 2x exports.

# Category slides (below the hero)

Source: 1483×272 screenshot, exported at ×0.912; values multiplied by **1.0971**. Built 2026-09-26.

- `_category-slides.html` + `_category-tile.html` (`icon`, `title`, `units`). `.snap-slider--6` shows 6/4/2/1 per view; 10 slides, opening on position 3 of 5.
- Tile: 203.7×171, slate-25 bg, slate-200 border (main-600 on hover), radius 12, padding 16/15/16/16. Icon circle 74px white with slate-100 border, 46px icon, 16px below. Title Signika 600 20px/1.2 slate-800; units Nunito 12px slate-500. Arrow 32px outline, filled on hover.
- Hero section bottom padding is now 20px (`tw-pb-5`), so tiles sit 20px under the cards. Pager 27px below the tiles.
- Icons in `icons/category-slide/` were cut from the screenshot. Slides 1, 2, 9, and 10 reuse `icons/category-card/` icons with sample names and counts.
- Verified within 0–2px.

# Offer strip (below the category slides)

Source: 1487x113 screenshot, same 1627px frame as the category slides (x1.0971; height 108 -> 120). Built 2026-09-26.

- `_offer-strip.html` (snap-slider, 1 per view, prev/next only, 3 slides) + `_offer-slide.html` (`eyebrow`, `title`). SCSS `partials/home-two/_offer-strip.scss`.
- Named `offer-strip` because the theme already has a `.promo-banner` component.
- Banner: full width minus 20px each side (12px on phones), 120px tall, radius 12, bg #00226e + `thumbs/offer-strip/offer-bg.png` (cover).
- Model (`woman.png` 231x120) at `max(64px, 50% - 553px)`; tag (`tag-40-off.png` 149x120) at `min(100% - 213px, 50% + 347px)`; both hidden below 992px.
- Eyebrow Nunito 700 20px white, 6px below; title Signika 600 41px/1.1 white; content padded 4px at the top so it sits where the design has it.
- Arrows 34px, 20px from the banner edges, 20px caret. Prev is white with a main-600 icon; next is main-600 with a white icon.
- Verified: arrows and tag within 0-1px, text within 0-3px. The design's title sits about 4px right of centre; ours is truly centred.
- Art cut from the 1x screenshot. Slides 2 and 3 reuse the same art with sample copy.
