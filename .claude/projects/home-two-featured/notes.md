# Home 2 (index-2.html): Featured Products (banner + row cards)

Source: 1200x624 screenshot, content 972px wide, so values are multiplied by **1.3601**. Built 2026-09-26.

- `_featured-two.html`: `section.featured-two.bg-slate-25` with padding 68/72. The grid is 428px + 20px + 1fr at 1200px and up, 300px + 1fr from 992px, and stacks below that.
- Banner: the art `thumbs/featured-two/weekend-special.png` (428x710) has its text, button and circle painted out. Overlays:
  - "Weekend Special" badge: 32px tall, white, Signika 600 13px purple, lightning icon.
  - Title: Signika 600 48px/1.1 white (36px below 1200px, 34px on phones).
  - "Shop Now" button: main-two, 42px tall.
  - "UP TO -30%" circle: 102px orange-600 at 19/301 (pinned to the bottom below 1200px).
  - Padding 28.
- Head: "Featured Products" Signika 600 27px, "See All Products" main-600 Signika 600 14px with an arrow, 31px above the list. Cards have a 19px gap.
- Card: `_product-card-row.html` (`image`, `name`, `category`, `label`, `tone`) + `.product-card--row` in `components/_product-card.scss`.
  - 874x200, padding 8. Image 242x182 with a label pill at 11/11.
  - Body padding 11/11/10/25. Category 15px, title 27px.
  - One meta line at 12px with 10px gaps: In Stock, star 4.8 (32.5K Reviews), Free Shipping, 35.2K Sold, -34%.
  - Footer: 16px padding over a slate-100 border. Price 25px 800 orange plus $89.00 struck through. 38px eye, heart and compare circles with 6px gaps, then a 38px "Add To Cart" outline button (fills on card hover).
  - Stacks with the image on top on phones.
- `special-money-bag.png` was cut from the screenshot. The headphones and helmet images already existed.
- Verified: cards and banner overlays within 0-3px, except the meta line, which is about 6px shorter (Nunito rendering).
- The painted-out circle area in the art is smeary. It's hidden under the circle on desktop but shows on stacked layouts. Needs a clean export.