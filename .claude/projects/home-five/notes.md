# Home 5 (index-5.html)

Page: `html/pages/index-5.html` = template-top + `_top-header-four.html` + `_header-four.html` (reused from index-4) + `_hero-five.html` + template-bottom. Styles in `sass/partials/home-five/` (imported from `partials/_index.scss`).

## Hero five (jewellery slider with a notched frame)

Source: 1250x498 screenshot, banner 1012px = 1322, so values are multiplied by **1.306**. Built 2026-09-27.

- `_hero-five.html` + `partials/home-five/_hero-five.scss`: a snap-slider at 1 per view (5 slides, `data-start="2"`, autoplay), 1322x509, radius 16, overflow hidden.
- Slide padding 95/40/40/137. White badge 35px, title Signika 700 48px/1.12 white (max 420), description 13px/1.55 (max 405), price row (From 15, $79.00 orange 800 30px, struck $99.00), btn-white Shop Now 43px with dark text.
- Notches (`.hero-five__notch--start|--end`): white boxes over the frame. The ::before/::after 16px radial-gradient squares round the photo's corners around them.
  - Start: left 0, top 170, 55x168, holding the vertical `.snap-slider__dots`.
  - End: bottom-right, 160x77, holding 44px `.snap-slider__arrow` prev/next.
- Art `thumbs/hero-five/jewellery.png` (1322x509) was cut from the screenshot with the copy and notches painted out. The SALE circle stays baked in (script lettering). Slides 2-5 reuse it with sample titles.
- Phones: a dark fade behind the copy; padding 40/20/100/72.
- Verified within about 0-6px.
## Features row

- _features-plain.html (shared with index-4) sits right under the hero. .hero-five padding-bottom is 0, so the row's own 51px top padding gives the design's 54px gap from the hero to the titles (verified: 54).

## Today's Best Selling (jewellery)

Source: 1074x754 screenshot (x1.52). Built 2026-09-27.

- `_best-selling-five.html`: a copy of `_best-selling-four.html` with `.best-selling--jewel` (padding 58/60, row gap 36) and 8 `_jewel-card.html` cards.
- `_jewel-card.html` = the furniture card without colour dots, with `.fashion-card--jewel`: white/outline Add To Cart (filled on hover), body padding-top 26. Styles in `partials/home-five/_best-selling-five.scss`.
- Photos `thumbs/jewellery/*.png` (316x289) were cut from the screenshot. The Blue Sapphire Drop was the hovered card, so its hover overlays were painted out; the bottom tips of the earrings were under Add To Cart and are smudged.
## How Does It Work?

Source: 1072x442 screenshot (x1.52). Built 2026-09-27.

- `_how-works.html` + `partials/home-five/_how-works.scss`: slate-25 panel (slate-100 border, radius 16, min-height 668, padding 104/40/60/111), pb-60.
- Left: section-title, then an `ol` of 3 `.work-step`s (40px number circle with an orange-600 outline, the first filled; a 1px orange connector drawn with ::after; title Signika 600 20px; text 13.5px/1.55 max 440; 30px apart). Below: btn-main Shop Now (43px) + a "Video Tutorial" link with a 44px orange play circle.
- Right: `thumbs/hero-five/shop-mockup.png` (569x564, the search bar + product card mock-up cut from the screenshot), absolutely positioned bottom-right and clipped by the panel. It is static and full width below 992px.
## Flash Sale Offer's (jewellery slider)

Source: 1077x458 screenshot (x1.52). Built 2026-09-27.

- `_flash-sale-five.html`: best-selling head + snap-slider (4/3/2/1 per view, 8 slides, `data-start="2"`, dots 22px below) of `_jewel-card.html` with `"timer"` (the index-3 countdown pill; `_jewel-card.html` now has the same `@@if (timer)` block, and `_best-selling-five.html` passes `"timer": ""`).
- `.flash-sale-five` (in `_best-selling-five.scss`): padding 0/60; the hover Add To Cart is solid main-600 here.
- New photos `thumbs/jewellery/gold-multi-layer-necklace|gold-diamond-butterfly|blue-diamond-ring|sapphire-diamond-ring.png`. The butterfly was the hovered card: its right wing tip (under the action buttons) was rebuilt by mirroring the left wing, so a faint seam is visible.
## Jewel tiles (5 photo offer tiles)

Source: 1074x414 screenshot (x1.52). Built 2026-09-27.

- `_jewel-tiles.html` + `partials/home-five/_jewel-tiles.scss`: `.promo-tile.promo-tile--bottom.promo-tile--jewel` (home-three/home-four tiles).
  - Grid: 3 columns at 1200px and up with 300px rows and 21px gaps; the middle `.jewel-tiles__tall` spans both rows (428x621). 2 columns from 768px, then 1.
- Tiles: min-height 300, padding-bottom 21. The eyebrow and title keep the promo-tile sizes (15px / Signika 600 34px). The white Shop Now has main-600 text, 43px tall.
- Photos `thumbs/hero-five/tile-*.png` were cut from the screenshot with the copy painted out.
## Top Categories (jewellery)

Source: 1591x720 screenshot (~1:1). Built 2026-09-27.

- `_jewel-categories.html` = the index-3 Top Collections grid (8/6/4/3 columns) without the panel: `.top-collections.top-collections--plain` (padding 0/60, head 36px above, row gap 32).
- `.collection-item--units` adds a slate-25 circle with a slate-100 border, name 15px below, and a 12px "38,750+ units" line. Styles in `partials/home-five/_jewel-categories.scss`.
- 16 circle images `thumbs/jewellery/categories/*.png` (266px, 2x) were cut at ~1:1.
## Marquee cross (two tilted strips)

Source: 1591x225 screenshot (~1:1). Built 2026-09-27.

- `_marquee-cross.html` + `partials/home-five/_marquee-cross.scss`: a 230px section (overflow hidden, 40px bottom margin) holding two absolutely positioned `.marquee-strip`s (the index-3 marquee), each 106% wide.
  - `--back`: slate-25 with slate-100 borders, rotate(1.4deg), 66px rows, animation reversed.
  - `--gradient`: the top-bar gradient, rotate(-1.9deg), 88px rows, white 1px outline words (transparent fill, so the font's inner contours show slightly), solid white DISCOUNT, white stars.
- Phones: 170px section, 64/52px rows.
## Mega Sale Event

Source: 1595x687 screenshot (~1:1). Built 2026-09-27.

- `_mega-sale.html` = `section.flash-sale-five.mega-sale`: a left-aligned head (section-title + 13.5px sub) with the home-one `.flash-countdown` (copied from `_flash-sale.html`) on the right, 36px above a snap-slider of 8 `_jewel-card.html` cards (`"timer": ""`, solid blue cart via `.flash-sale-five`). Styles are in `_best-selling-five.scss` (`.mega-sale`, padding-top 30).
- New photos `thumbs/jewellery/gold-chandbali-earrings|gold-dollar-chain|diamond-gold-ring-set|gold-chain-bracelet.png` were cut at ~1:1 (the ring set was the hovered card; its bottom is slightly soft).
## Top Jewellery Brands

Source: 1591x530 screenshot (~1:1). Built 2026-09-27.

- `_jewel-brands.html` + `partials/home-five/_jewel-brands.scss`: slate-25 section (padding 60/68), best-selling head (37px below), grid 5/3/2 columns with 20px gaps.
  - `.jewel-brands__item`: white, radius 12, 101px tall, 1px transparent border (main-600 on hover), logo 34px tall that scales 1.05 on hover.
  - "Explore Our Collection" outline button 33px below.
- Logos `assets/images/brands/jewel/*.png` (2x, transparent) were cut from the design; they are the design's placeholder brands (Airtable, Shopify, Slack, ...).
## What Our Clients Say (review grid)

Source: 1294x749 screenshot (x1.265). Built 2026-09-27.

- `_reviews-five.html` + `partials/home-five/_reviews-five.scss`: 6 home-one `_testimonial-card.html`s in a 3/2/1 column grid (gap 20), best-selling head, "Browsed Our Collections" button 34px below, section padding 60.
- New tones on `.testimonial-card`: `--yellow` (gold-600 icon), `--purple`, `--slate` (slate-800 icon), alongside blue, green and orange.
- In this section the quote icon's ::before is replaced (with `!important`, to beat Phosphor's font rules) by an outlined Georgia “ with a 1.3px tone-600 text-stroke, to match the design.
- Avatars `thumbs/avatars/devon-lane-2|dianne-russell|floyd-miles|brooklyn-simmons|arlene-mccoy|jenny-wilson.png` (104px) were cut from the screenshot.
## Newsletter band

Source: 1292x212 screenshot of the full width (x1.263). Built 2026-09-27.

- `_newsletter-band.html` + `partials/home-five/_newsletter-band.scss`: section padding 52/52 (room for the overflowing icons). `__bar` is 165px, full width, background `thumbs/hero-five/newsletter-bg.png` (gradient + shapes + the two gold dots; the copy/form/icons were removed with vertical/horizontal interpolation).
- Inner: title Signika 500 23px/1.3 white (max 490), and a white 445x49 pill form with an orange-600 "Subscribe Now" (36px). 114px side padding from 1200px up.
- Icons (from 1200px up) are placed from the page centre:
  - `newsletter-folder.png` (173px): left calc(50% - 755px), top 59.
  - `newsletter-bell.png` (215px): left calc(50% + 577px), top -52.
  - Both are transparent cut-outs keyed against a background estimate (`scratchpad/extract57.ps1`).
## FAQ with support card (Need Help? Start Here)

Source: 1634x572 screenshot (~1:1). Built 2026-09-27.

- `_faq-five.html` = index-4 `_faq-video.html` with:
  - `.faq--caret`: `ph-caret-down` icons rotating 180deg when open.
  - Accordion ids `supportAccordion` / `support-N`.
  - Instead of the video, a `.help-card.help-card--support` (yellow-25 with a yellow-100 border, padding 26): title, text, 3 overlapping 40px avatars (white ring, -12px overlap, reusing existing avatar images), "NEED TO SUPPORTS" 16px/500, and an orange "Get In Touch" link with an underline and an arrow that nudges on hover.
- Styles in `partials/home-five/_faq-five.scss`.
- Gotcha: a blanket `"help-` -> `"support-` id rename also hit the `help-card` class names (turning them into the index-2 `.support-card`). Rename ids with a narrower pattern.
## Footer five

- `_footer-five.html` (`footer--three footer--five`) + `partials/home-five/_footer-five.scss`: logo/socials row (padding 36/29, footer-line), 4 equal columns with hairline dividers from 1200px (Contact with green outline icon circles, Shop Link, Newsletter 254px field, Quick Link in 2 columns), gradient bottom bar from footer three. Height 508 vs 503 design.
