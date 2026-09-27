# Home 4 (index-4.html)

Page: `html/pages/index-4.html` = template-top + `_hero-four.html` + template-bottom. Styles live in `sass/partials/home-four/` (imported from `partials/_index.scss`).

## Hero four (furniture bento)

Source: 972x319 screenshot, content 787px = 1322, so values are multiplied by **1.68**. Built 2026-09-26.

- Grid at 1200px and up: 652/315/315 fr, 20px column gap, rows 245 + 245 with a 19px gap. The main card and the tall card span both rows; dining and lamp stack on the right. At 768-1199px: 2 columns with the main card full width. Phones: 1 column.
- Section padding 24/60. Cards are radius 12 with the photo covering (zooms on hover). `--wine: #81172a` for eyebrows.
- **Main card** (padding 34/37): white "New Collection" badge 37px; title Signika 700 46px/1.18 (max-width 420); price row (From 15px, $79.00 orange 800 30px, struck $99.00); main-two Shop Now 45px.
- **Small cards** (padding 28/27): eyebrow 14px, 0.1em tracking, uppercase, wine; title Signika 600 33px/1.12; Shop Now 37px, 12px text. The dining title is capped at 230px to wrap like the design. The dark lamp card has a yellow eyebrow, white title and white button.
- Photos: `thumbs/hero-four/living-room.png` (652x509), `green-chair.png` (316x509), `dining-set.png`, `lamp-room.png` (315x245), cut from the screenshot with the copy painted out (smudges sit under the copy).
- Verified within about 0-5px (the main headline is about 8px narrower).
## Top header four + header four

Source: 970x69 screenshot of the full 1627 frame (x1.677). Built 2026-09-26.

- `_top-header-four.html` = `_top-header-two.html` content with `.top-header--gradient` (the index-3 offer-bar gradient; the sample at 62% matches) instead of bg-main-600.
- `_header-four.html`: one white row (69px, slate-100 border-bottom). On the left, the logo + `_nav-menu.html` (48px after the logo, 22px gaps, nowrap). On the right, the `_header.html` action circles (search, wishlist 5, cart 1) + a **btn-main-two** Register + the mobile toggle.
- Styles in `partials/home-four/_header-four.scss`. Verified within 0-3px.
## Room categories (furniture category slider)

Source: 969x206 screenshot (x1.678). Built 2026-09-26.

- `_room-categories.html` + `_room-card.html` (`image`, `title`, `units`); styles in `partials/home-four/_room-categories.scss`. It uses `.snap-slider--6` (6/4/2/1 per view), 10 slides, `data-start="2"`, dots 20px below, section pb-60.
- `.room-card`: white, 1px slate-100 border (main-600 on hover), radius 12, padding 9/9/17.
  - 153px slate-25 image box (radius 10, image zooms 1.05 on hover).
  - Body padding 16/5/0: Signika 600 16px title (truncates) + 12px slate-600 units.
  - 26px outline arrow circle (slate-200), filled main-600 on hover. The design's highlighted Bedroom card is the hover state.
- `thumbs/furniture/*.png` (180x146, slate-25 background baked in) were cut from the screenshot. Slides 1, 2, 9 and 10 reuse them with sample names.
## Today's Best Selling (furniture cards)

Source: 971x713 screenshot (x1.68). Built 2026-09-26.

- `_best-selling-four.html` uses the home-three best-selling head, grid (4/3/2/1) and See All, with `.best-selling--four` (padding 0/60, row gap 40).
- `_furniture-card.html` (`image`, `name`, `label`, `tone`) is `.fashion-card.fashion-card--furniture`; styles in `partials/home-four/_best-selling-four.scss`.
  - Photo box 316x289 (aspect-ratio), main-600 border on hover. Add To Cart is solid main-600 with white text.
  - Body order: 4 colour dots (`.fashion-card__color`: 18px ring main-50, 7px dot; active/hover ring main-600), name 27px, stars + count, In Stock / price.
- main.js: `.fashion-card__color` click marks the chosen colour (next to the Fashion Card Swatches block).
- `thumbs/furniture/*.png` (8 products, 316x289) were cut from the screenshot. The round table's hover overlays were painted out and its table top rebuilt by mirroring the left half.
## Promo trio (three photo offer banners)

Source: 969x226 screenshot (x1.68). Built 2026-09-26.

- `_promo-trio.html` reuses `.promo-pair` / `.promo-tile` from home-three with `.promo-pair--trio` (grid 3/2/1 columns, 19px gap) and `.promo-tile--bottom` (375px tall, copy at the bottom, padding-bottom 30). Styles in `partials/home-four/_promo-trio.scss`.
- Photos `thumbs/hero-four/deal-armchair|deal-orange-chair|deal-velvet-chair.png` (428x375) were cut from the screenshot with the copy painted out.
- Verified: copy within about 0-3px once the anchor offset is corrected.
## Enjoy Our Best Seller (furniture card slider)

Source: 1653x735 screenshot, content 1332px = 1322, so values are multiplied by **0.99** (near 1:1). Built 2026-09-27.

- `_best-seller-slider.html`: the best-selling head + snap-slider (4/3/2/1 per view, 8 slides, `data-start="2"`, dots 34px below, `.best-seller-slider { padding-block: 0 60px }`) of `_furniture-card.html`.
- Tuned from this near-1:1 screenshot (it also changes the section above): name margin 5/10, meta margin-top 13.
- New photos `thumbs/furniture/executive-office-desk|black-executive-chair|wooden-display-cabinet|rust-brown-sofa.png` were cut at ~1:1, so they're sharp. The office chair's wheel base was under the hover "Add To Cart" and is patched (soft).
- Verified within 0-3px vertically.
## Offer strip (gradient + chairs)

Source: 1645x131 screenshot (~1:1). Built 2026-09-27.

- `_offer-strip-chairs.html` + `_offer-slide-chairs.html`: copies of the index-2 offer strip with `.offer-strip--light-arrows` (both arrows white with main-600 icons, filled on hover) and `.offer-slide--chairs` (green chair at `max(64px, 50% - 475px)`, pink chair at `min(100% - 204px, 50% + 332px)`). Styles in `partials/home-four/_offer-strip-chairs.scss`.
- Art: `thumbs/offer-strip/offer-bg-gradient.png` (gradient + faint shapes, copy/arrows/chairs removed) and the `chair-green.png` / `chair-pink.png` cut-outs keyed against it (`scratchpad/extract40.ps1`). The text sizes are the index-2 ones (20px eyebrow, 41px title), which match.
## Testimonial spotlight

Source: 1651x482 screenshot (x0.992, ~1:1). Built 2026-09-27.

- `_testimonial-spotlight.html` + `partials/home-four/_testimonial-spotlight.scss`: a snap-slider at 1 per view (3 reviews, autoplay, no dots), max-width 880, slides padded 90px on each side. The 34px arrows sit at top 140 on the slider's edges (prev outline, next filled).
- Slide: an outlined curly quote (`&ldquo;` in Georgia 150px, transparent fill, 1.5px #8d8da6 text-stroke, 50px tall); 22px stars (20px above, 16px below); quote 17px/1.55 slate-600; 62px photo (25px above); name Signika 600 17px; role 12px.
- Six decorative avatars (`thumbs/avatars/client-1..6.png`, 2x) are placed from the page centre with `left: 50%` + margin-inline-start (and a px top), shown only from 1200px up. The main photo is `thumbs/avatars/kende-attila.png`.
- Section padding 76/70. Verified within 0-4px (anchored on the stars).
## Deals, Decor & Design Tips (overlapping blog cards)

Source: 1645x782 screenshot (x0.992, ~1:1). Built 2026-09-27.

- `_decor-tips.html` (`section.decor-tips.bg-slate-25`, padding 60/70, head 33px above the cards) + `_decor-post.html` (`image`, `category`, `title`, `day`, `month`, `year`, `date`); styles in `partials/home-four/_decor-tips.scss`. Uses `.snap-slider--3` (3/3/2/1 per view), 7 slides, `data-start="2"`, dots 29px below; slides get 22px bottom padding for the hanging arrow.
- Card:
  - Photo 362px tall, radius 12, zooms on hover.
  - White body overlaps the photo (margin -105/20/0), padding 20/20/45, radius 12, soft shadow, 1px transparent border that turns main-600 on hover.
  - Date tag: top -52 / right 21, 58px wide, radius 6. Purple-600 top has "15" Signika 600 30px and "AUG" Nunito 16px; main-two bottom has "2026" 13px.
  - Category pill: 34px, slate-25 with a slate-200 border, 14px. Title Signika 600 21px/1.22, 2 lines, 11px below.
  - Meta line 16px with 19px icons (purple user, green calendar), 18px below the title.
  - 44px arrow circle centred on the body's bottom edge (outline, shadow), filled on hover.
- Photos `thumbs/blog/decor-1..3.png` (429x360) were cut at ~1:1; the tag and body areas were painted out (always covered).
- Verified within 0-3px vertically.
## FAQ with video (Need Help? Start Here)

Source: 1643x577 screenshot (~1:1). Built 2026-09-27.

- `_faq-video.html` = home-one `_faq.html` with the help card swapped for a video thumbnail (`.faq-video`, 203px tall, radius 12, zooms on hover; 37px orange-600 play circle with a pulse ring). Accordion ids are `helpAccordion` / `help-N` so both FAQs could share a page. Icons are `ph-arrow-down-right`, rotated -90deg (up-right, main-600) when open.
- `.faq--video` (`partials/home-four/_faq-video.scss`): padding 70, gap 16, rows 49px + 2px border, questions Nunito 600 16px, answer 12px/1.45 with padding 0/16. The grid columns (538/651 fr, 133 gap) come from home-one `.faq__grid`.
- Video still `thumbs/hero-four/help-video.png` (1084x402, 2x) was cut from the screenshot with the play button painted out.
- Verified within 0-3px.
## Features row (before the footer)

- `_features-plain.html`: the index-3 plain features row (`features-bar features-bar--plain`, copied out of `_hero-three.html`) + `.features-bar--closing { padding-block: 51px 54px }` in `partials/home-four/_features-plain.scss`. White background, no links, no top border.
## Footer four

Source: 1643x501 screenshot (~1:1). Built 2026-09-27.

- `_footer-four.html` = `footer.footer.footer--three.footer--four`, which reuses the index-3 gradient bottom bar and payment badges. Styles in `partials/home-four/_footer-four.scss`.
- Newsletter row: 147px tall with a footer-line border. Title Signika 300 28px/1.17 (max-width 500); the 499x50 field has a text "Subscribe Now" button (36px, 20px padding).
- Main area (padding 62/68): `.footer__split` is 2 equal columns from 992px.
  - Left: 158px logo, 14px about text (max-width 600), inline links with 21px gaps (hover orange with a dot).
  - Right `.footer__reach`: 1px line on the left, 68px padding, 318/279 fr columns. Email + phone column; the address is 20px nowrap on 2 lines, then 31px socials (10px gaps).
- Verified: total height 503 vs 500; checked visually.