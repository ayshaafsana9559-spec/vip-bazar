# Home 2 (index-2.html): promo bento (4 offer cards, below Flash Sale Offer's)

Source: 980x525 screenshot, content 972px wide, so values are multiplied by **1.3601**. Built 2026-09-26.

- `_promo-bento.html` + `partials/home-two/_promo-bento.scss`. `.bento-card` is the card; the section is `.promo-bento`. `.promo-banner` is taken by the theme.
- Grid at 1200px and up: 3 equal columns (427), rows 300 + 390, 20px gaps. The tall card spans 2 rows and the wide card spans 2 columns.
  - 768-1199px: 2 columns, rows 300/300/390.
  - Phones: 1 column, cards 540/300/300/420 tall.
- Art: `thumbs/promo-bento/bento-1..4.png` (427x710, 427x300, 427x300, 874x390), cut from the screenshot with every overlay painted out by a mask + onion-peel fill (`scratchpad/extract15.ps1`).
- Shared parts: badge 32px (Signika 600 13px, white pill, lightning icon). Title Signika 600 48px/1.1 in main-two-600, 11px above and 26px below. Shop Now 42px tall with 24px padding. Circles 101px (16px / 27px bold) or 72px `--sm` (11px / 20px).
- Cards:
  - **Tall:** padding 28, purple button, orange circle at top 411 / right 27.
  - **Couple:** padding 20 (26 at the bottom), content at the bottom, title line-height 1 with a 2px white text stroke (`paint-order: stroke fill`), purple circle at top 30 / right 27.
  - **Music:** padding 20, title 34px/1.1, green circle at top 84 / right 34, main button pinned bottom 20 / right 22.
  - **Wide:** padding 35/34, title max-width 380, price row (From 15px, $79.00 Nunito 800 31px orange, $99.00 14px, 31px below), dark button, blue circle at top 211 / left 280. Phones add a white fade behind the copy.
- Verified: overlays within 0-3px relative to each card.
- The painted-out areas are smeary (the couple's hoodie, the circle spots). They are hidden under the overlays on desktop but show on stacked layouts. Needs clean exports without overlays.
# Shop By Campaign two (below the promo bento)

Source: 1037x457 screenshot, folder frame 1031px wide = 1402px, so values are multiplied by **1.36**. Built 2026-09-26.

- `_campaigns-two.html` = the home-one `_campaigns.html` (folder frame, `.flash-countdown` in the aside, snap-slider with 8 slides from position 3), using `_campaign-card-two.html`. The section is `.campaigns.campaigns--two.pb-60`.
- `.campaign-card--stack` (`partials/home-two/_campaigns-two.scss`):
  - 315x397. Main image 238 tall with 3 thumbnails (75 tall) in a row under it, 7px gaps. Footer padding 13/3/3, Shop button 38 tall.
  - Backgrounds match the colours baked into the images (#fffbef main; #f1f9f6 / #f5f3fe / #fff2ef thumbs), so `object-fit: contain` leaves no seams.
- Countdown boxes are 33px tall in this section only (`.campaigns--two .flash-countdown__box`).
- Verified: countdown, title, cards, footer and dots within 0-3px.
# What Our Clients Say two (reviews, below Shop By Campaign two)

Source: 1201x409 screenshot, content 970px wide, so values are multiplied by **1.363**. Built 2026-09-26.

- `_reviews.html` + `_review-card.html` (`tone`: blue|green|orange|purple, `name`, `image`, `product`, `price`, `quote`); styles in `partials/home-two/_reviews.scss`. Six slides, `data-start="2"` (dot 3 of 5).
- Two per view (651px, 20px gap) from 992px, one below that. The track bleeds to the viewport (`margin-inline: calc(50% - 50vw)` + matching padding) so neighbours peek in; the section has `overflow-hidden`.
- main.js Snap Slider changes (all sliders):
  - `perView` ignores track padding.
  - `scroll-padding-inline` is copied from the track's padding. A `%` there resolves against the track itself, so it can't be done in CSS.
  - The first visible slide gets `is-start`.
- Card: 651x290, tone-25 background, 1px tone-100 border (tone-600 on `.is-start` / hover).
  - Top padding 27/26/24: name Nunito 17px + green seal-check "Verified Shopper" 12px; 20px stars 23px below; quote 15px/23.2px.
  - Bottom (1px tone-100 top border) padding 18/27/16/24: 52px white product circle, "Item purchased:" 12px + bold product, price Nunito 800 16px, 56px light quotes icon rotated 180deg.
- `thumbs/reviews/*.png` (bag, laptop, tea cup) were cut from the screenshot at 1x.
- Verified within 0-2px (quote lines about 10px narrower: Nunito rendering).
# Latest Shopping Insights (blog, below the reviews)

Source: 1043x466 screenshot, folder frame 1032px = 1402px, so values are multiplied by **1.3585**. Built 2026-09-26.

- `_blog-insights.html` + `_blog-card.html` (`image`, `category`, `tone`, `author`, `date`, `title`); styles in `partials/home-two/_blog-insights.scss`.
- The folder frame is the snap-slider wrapper, so the prev/next arrows sit in `folder-frame__aside`. Eight slides, `data-start="2"`.
- `.folder-frame--wide` (576px and up): tab 443x78, frame top padding 33.
- Card:
  - Image 315x260, radius 12, zooms slightly on hover. Category pill 24px tall, 11px/600, at 15/15.
  - Body: 20px below the image, 1px slate-200 left rule, padding 6/0/11/20. Meta line is 14px: user icon (main-600), author, 4px dot, calendar-dots icon (green-600), date.
  - Title Signika 600 20px/1.25, 2 lines, 7px below the meta. "Read More" Signika 600 13px main-600 with an arrow, 15px below the body. Dots 31px below.
- `thumbs/blog/blog-1..4.png` (315x260) were cut from the screenshot with the pills painted out. The 4 off-screen slides reuse them with sample titles.
- Verified within about 0-4px.
# Top Brand Partner two (brand slider, below the blog)

Source: 1198x339 screenshot, content 971px wide, so values are multiplied by **1.3615**. Built 2026-09-26.

- `_brand-slider.html` + `partials/home-two/_brand-slider.scss`. Same header and button as home-one `_brand-partner.html`; the cells reuse `.brand-grid__item / __logo / __offer` (135px logo area, 42px offer band).
- `.brand-slider` is the 1px slate-200 bordered, 12px-radius wrapper. `__track` is the snap-slider track with a 1px gap over a slate-100 background, which draws the hairlines. Shows 6/3/2 per view.
- Ten brands with `data-start="2"`, so dot 3 of 5 shows abbvie ... newell like the design.
- Verified within 0-2px.
# Footer two (light footer + Online Support 24/7), index-2 only

Source: 1192x478 screenshot, content 971.5px wide, so values are multiplied by **1.3608**. Built 2026-09-26.

- `_footer-two.html` replaces `_footer.html` on index-2 (index.html keeps the dark footer). Styles: `partials/home-two/_footer-two.scss` on top of `layout/_footer.scss`.
- `.footer--light` on `bg-slate-25`: main-50 divider lines, slate-800 titles, slate-600 text and links (hover main-600 with a dot), main-100 social rings, white newsletter field (52 tall, 58x38 button), link rows 27px (gap 3 because the global inline-block links add strut height).
- `.footer__grid--six` columns at 1200px and up: 328/185/184/188/157/280 fr; 4 columns (logo and newsletter span 2) at 992-1199px.
- Support block `.footer__support`: padding 51/50. "Help Center" Nunito 15 main-600; title Signika 600 28/1.1 main-two-600. `.support-grid` has 4 columns (2 on tablets, 1 on phones), 10px gap, 27px below the title.
  - `.support-card--main|yellow|orange|green`: white pill 63 tall with a 1px tone-100 border, a 42px tone-25 circle icon, title Signika 600 17, text 13 (ellipsis).
  - Note line 12px slate-600, 13px below the cards.
- Payment badges use `icons/payments-light/` (the dark-footer PNGs cropped 2px, corner specks whitened) inside 29x21 white cards with a soft shadow, 8px apart.
- Verified within 0-3px (copyright line about 10px wider: font rendering).