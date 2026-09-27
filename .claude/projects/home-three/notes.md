# Home 3 (index-3.html)

Page: `html/pages/index-3.html` = template-top + `_top-header-three.html` + template-bottom. Page styles go in `sass/partials/home-three/` (imported from `partials/_index.scss`).

## Top header three (gradient offer bar)

Source: 1290x42 screenshot of the full 1627px frame, so values are multiplied by **1.2612**. Built 2026-09-26.

- `.top-header-three`: `linear-gradient(90deg, yellow-600 0%, orange-600 4%, main-two-600 40.4%, main-600 79%, purple-600 100%)`. Every sampled point matches within about 2 RGB.
- 50px tall, content centred: ph-arrow-up-left (20px), 21px gap, offer text Nunito 13.5px white (hover yellow), 22px gap, then the timer.
- Timer (`[data-countdown]`, existing JS): white 35x29 boxes, radius 5, Signika 600 16px main-600 digits; labels 13.5px white, 7px after each box and 11px before the next box.
- Wraps to two centred rows on phones.
- Verified within 1-4px (the whole group sits about 3px right of the design's slightly off-centre group).
## Header three

Source: 1291x107 screenshot, content 1044px = 1322, so values are multiplied by **1.2663**. Built 2026-09-26.

- `_header-three.html` (`header.header.header-three`), styles in `partials/home-three/_header-three.scss`.
- **Top row:** white, 63px tall, `justify-content-between` of three parts:
  - The nav menu (`_nav-menu.html`, gap 19).
  - The logo, nudged 20px right on large screens because the design is not at the exact midpoint.
  - Utilities, gap 22, slate-600 14px, 1x20 slate-200 dividers: Tracking Orders, the EN select, the USD select, and the phone number.
- The EN/USD selects are copied from `_top-header-two.html` with `header-three__link` instead of the white `top-header__link`. Tracking Orders, the phone number and their dividers show only from 1400px up; menu and utilities are nowrap.
- **Bottom row:** slate-50, 69px tall plus a slate-100 border-bottom. Contents:
  - The `_header.html` category search (`header-three__search`: flex-grow, 40px tall, 17px start padding).
  - 42px wishlist and cart circles.
  - The 44px Register button.
  - The mobile toggle below 992px.
- main.js active-menu now treats `index-N.html` as Home, so Home is highlighted on index-2 and index-3 too.
- Verified within 0-3px.
## Hero three + features row

Source: 1292x555 screenshot, banner 1047px = 1322, so values are multiplied by **1.2627**. Built 2026-09-26.

- `_hero-three.html` + `partials/home-three/_hero-three.scss`: a snap-slider at 1 per view with 2 slides (the second reuses the art with sample copy). The 34px arrows are centred on the banner's left and right edges (white/main-600).
- `.hero-banner`: 1322x508, radius 12, padding 66/40/40/64, background #fbd1d6.
  - Art: `thumbs/hero-three/hero-three-1.png`. The left copy and the edge arrows were painted out; the SALE circle and the "FASHION For You" lockup stay in the art because of the script lettering.
  - Copy colours: maroon #740015 (`--maroon`), headline main-two-600.
  - Eyebrow 16px, 0.06em tracking. Title Signika 700 70px/1.05, -0.02em, uppercase, 7px above and 28px below. "UP TO" 19px.
  - "45%" Signika 700 60px, with "OFF" at 26px sitting 4px low. "LIMITED TIME ONLY" 12.5px.
  - Shop Now: maroon, 43px tall, 32px above.
- Phones: a pink fade behind the copy, and the art is focused at 55% so the baked badge and lockup stay out of the way.
- Features row: `features-bar features-bar--plain` (no border, no links, padding 51/40), the same grid and icons as home-one.
- Verified: copy within 0-5px, arrows and features within 0-3px.
## Today's Best Selling (fashion cards)

Source: 973x827 screenshot, content 786px = 1322, so values are multiplied by **1.682**. Built 2026-09-26.

- `_best-selling.html` + `_fashion-card.html` (`image`, `name`, `label`, `tone`, `swatchOne`, `swatchThree`; the middle swatch is the card's own image). Styles in `partials/home-three/_best-selling.scss`.
- Section padding 29/60. Centred head: section-title, subtitle 13.5px, 36px below. Grid: 4/3/2/1 columns, 34px row gap and 20px column gap. See All is 44px below.
- Card:
  - Photo 315x357 (aspect-ratio), slate-25 background, 1px slate-100 border, radius 12. Badge pill 24px tall, 11px/600, at 13/13.
  - Hover: three 34px white action circles (right 16, top 16, gap 11) slide in; the "Add To Cart" pill (131x37, white with a main-600 border and text, bottom 17) rises. The photo zooms to 1.04. Touch screens always show them.
  - Body, centred: 14px stars + (32.5K) 11px; name Signika 600 27px; meta 12.5px (green dot In Stock, dot, struck $89.00, orange $59.00); three 36px photo swatches with 6px gaps (active = main-600 ring).
- main.js "Fashion Card Swatches": clicking a swatch marks it active and swaps the card photo.
- `thumbs/fashion/*.png` (8 photos, 315x357) were cut from the 1x screenshot (x1.68 upscale, soft), with badges and the hovered card's overlays painted out.
- Verified within 0-5px, except the active swatch ring at 6px.

## Top Collections

Source: 969x415 screenshot, content 785px = 1322, so values are multiplied by **1.684**. Built 2026-09-26.

- `_top-collections.html` + `partials/home-three/_top-collections.scss`.
- Panel: slate-25, 1px slate-100 border, radius 16, padding 64/24/60. It is 68px wider than the container on each side from 1400px up. Head 33px above the grid.
- 16 `.collection-item`s: 133px white circle + Signika 600 16px name, 16px below. Grid 8/6/4/3 columns, 36px column gap, 29px row gap. Hover: main-600 ring, image zooms to 1.06, name turns blue. "See All Collections" is 40px below.
- `thumbs/collections/*.png` (133px) were cut from the screenshot.
- Verified within 0-3px; the panel bottom matches exactly.
## Trending Outfits

Source: 979x493 screenshot (x1.68). Built 2026-09-26.

- `_trending-outfits.html`: the best-selling head plus a snap-slider (4/3/2/1 per view, 8 slides, `data-start="2"`, dots 39px below), with `.trending-outfits { padding-block: 3px 60px }`.
- `_fashion-card.html` now takes a `timer` variable (seconds). When it is set, a countdown pill (`.fashion-card__timer`, 161x37, white, 1px orange-600 border, orange Signika 600 12px, "07 d : 14 h : 47 m : 51 s") sits where the cart button is and fades out on hover. On touch screens it is lifted above the cart button. `_best-selling.html` passes `"timer": ""`.
- main.js countdown: optional `[data-countdown-days]`; when present, hours roll over at 24.
- New photos: `thumbs/fashion/*-back.png` (4 back views, pills/badges/hover overlays painted out; the pill strip is always covered). The other 4 slides reuse the front photos.
- Verified within 0-3px.
## Promo pair (two photo offer banners)

Source: 974x231 screenshot (x1.68). Built 2026-09-26.

- `_promo-pair.html` + `partials/home-three/_promo-pair.scss`. The grid has 2 columns from 992px (20px gap); section `pb-60`.
- `.promo-tile`: 652x373 (min-height), radius 12, the photo covers it (zooms to 1.04 on hover), copy centred.
  - Eyebrow Nunito 600 15px yellow-600; title Signika 600 34px/1.15 white (3px above, 21px below).
  - `btn-white` Shop Now: 42px tall, 26px padding, dark text, basket icon.
- Photos `thumbs/promo-pair/black-friday.png`, `crazy-deal.png` were cut from the screenshot (darkening baked in), with the copy and button painted out using colour masks.
- Verified within 0-3px.
## What Our Clients Say (photo review cards)

Source: 971x356 screenshot (x1.68). Built 2026-09-26.

- `_reviews-three.html` + `_review-card-photo.html` (`photo`, `name`, `image`, `product`, `price`, `quote`); styles in `partials/home-three/_reviews-three.scss`. It builds on `.review-card` from home-two with the `.review-card--photo` modifier.
- Section padding 3/60; best-selling head. The snap-slider shows 2 per view from 992px (1 below), 6 slides, `data-start="2"`.
- Card: 652x287, white, 1px slate-100 border (main-600 on `.is-start` / hover), radius 12.
  - 237px photo on the left (on phones it sits on top, 240px tall, focused 15% from the top).
  - Top padding 28/27/14: 18px stars (gap 3, 20px below); Nunito 17 name + "Verified Buyer"; 15px quote, max-width 330.
  - Bottom (slate-100 top border) padding 19/27/19/26: 54px product circle, 16px gap, label 12px, price 800 16px, and a main-600 light quotes icon at 62px (margin-block -4 so it doesn't grow the row).
- Photos `thumbs/reviews/theresa-webb.png`, `annette-black.png` (237x287) and product thumbs `denim-blazer.png`, `polo-shirt.png` were cut from the screenshot.
- Verified within 0-3px.
## Marquee strip

Source: 972x57 screenshot of the full 1627px width (x1.672). Built 2026-09-26.

- `_marquee-strip.html` + `partials/home-three/_marquee-strip.scss`: a full-width slate-25 band with slate-100 top and bottom borders, 86px tall.
- The track holds the word list twice (the second copy is `aria-hidden`) and animates `translateX(0 -> -50%)` over 40s; it pauses on hover and stops for reduced motion.
- Words are Signika 600 40px uppercase, 45px gaps, separated by ph-light stars (28px, slate-600). The outline technique: fill = band colour, `-webkit-text-stroke: 2px slate-600` with `paint-order: stroke fill`, so only a 1px outline shows and the overlapping contours in the variable font stay hidden. `--solid` (DISCOUNT) is Signika 700 main-two-600.
- Phones: 28px words, 64px band.
- Sizes checked against the design (TRENDY 143 vs 144, DISCOUNT 186 vs 187, star 25 vs 27).
## Trend Reports & Style Tips (blog cards)

Source: 971x426 screenshot (x1.68). Built 2026-09-26.

- `_style-tips.html` + `_style-post.html` (`image`, `day`, `month`, `tag`, `title`, `avatar`, `author`, `comments`); styles in `partials/home-three/_style-tips.scss`. Uses the best-selling head and a snap-slider (4/3/2/1 per view, 8 slides, `data-start="2"`, dots 29px below).
- `.style-post`: slate-25 card, 1px slate-100 border (main-600 on hover), radius 12, padding 8. Photo 296x225, radius 10, zooms on hover.
  - Date pill: top 13 / right 15, 33px tall; green-600 "26" block (padding 16/15), then "Dec, 2026" 13px.
  - "Exclusive" tab: yellow-600, 32px tall, hangs 12px below the photo on the left, slanted right edge (clip-path).
  - Body padding 31/6/15. Title Signika 600 20px/1.3, 2 lines.
  - Footer: slate-100 top border, padding-top 16, padding-end 26. 35px avatar, name 13, "Admin" 10, blue chat icon + count 13, orange "Read" arrow link 12 (10px gap).
- Photos `thumbs/blog/style-1..4.png` (date/tag areas painted out, smeary under the pill) and avatars `thumbs/avatars/annette-black|theresa-webb|devon-lane|guy-hawkins.png` were cut from the screenshot.
- Verified visually against the design, plus a numeric pass (widths and gaps corrected; the vertical diffs came from a wrong anchor).
## Support strip

- `_support-strip.html` + `partials/home-three/_support-strip.scss`: slate-25 band, padding 42/30. The trust note (13.5px slate-600) sits above the four `.support-card`s (the markup is copied from `_footer-two.html`; the styles are global in home-two/_footer-two.scss), 19px gap.
## Footer three

Source: 970x297 screenshot (x1.682). Built 2026-09-26.

- `_footer-three.html` (`footer.footer.footer--three`) + `partials/home-three/_footer-three.scss`, built on the dark `layout/_footer.scss`.
- Top row: padding 70/29 with a footer-line bottom border. Contents:
  - "Need Any Help? :" 13px + phone 22px.
  - `logo-white.png` at 155px.
  - "Follow Us On :" + 29px socials (6px gap).
- Main: padding 62/60. Grid columns at 1200px and up: 303/176/175/190/250/228 fr; 3 columns at 992-1199px; on phones the about, contact and newsletter columns span the full width.
  - Titles 20px, 22px below. Text 13.5px, max-width 250. Links 13.5px with a 3px gap.
  - Contact column: 13.5px labels + 21px/1.4 values (email and a 2-line address).
- Bottom bar: 59px tall, `linear-gradient(90deg, purple-600 0%, main-600 21%, main-two-600 59.6%, orange-600 96%, yellow-600 100%)`, which is the top bar reversed. Copyright with yellow eCommex; `payments-light` badges in 29x21 white cards.
- Verified: total height 500 vs 499 design; layout checked visually.