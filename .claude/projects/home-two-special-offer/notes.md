# Home 2 (index-2.html): Today's Special Offer

Source: 1010x861 screenshot, content 817.8px wide, so values are multiplied by **1.6166**. Built 2026-09-26.

- `_special-offer.html` reuses the Deal of the Day header, tabs, 4-column grid and "See All Products" button (`deal-products__tabs|__tab|__grid`). There are 4 tab panes with ids `offer-*`, each holding the same 8 products in a different order.
- Card: `_product-card-two.html` (`image`, `name`, `category`, `label`, `tone`), styled in `components/_product-card.scss` under `.product-card--two`.
  - 315x540. Image area 236 tall. Label pill (left) and "35.2K Sold" purple pill (right) are 26 tall, 14px from the top, 13px from the sides, 12px bold text.
  - Body padding 24/16/8. Category 16px main-600 plus a -34% pill (20 tall, 11px text). Title Signika 600 27px. Description 12px/1.5 slate-500, 2 lines.
  - Meta row: 16px stars (4.5), (32.5K), a dot, Free Shipping, all 12px. Price row: $89.00 slate-500 at 60% opacity and $59.00 orange 800, both 23px, then an "In Stock" pill 29 tall in green-50/green-100.
  - Divider slate-100, then a 42px full-width outline cart button.
- Hover: main-600 border, a white pill (1px slate-200 border, 7px padding) with 38px action circles slides up to 11px above the image bottom, and the cart button fills. Touch screens always show the actions.
- Verified: 0-2px on nearly everything, 3-4px on the colour dots and the "Free Shipping" width (font rendering).
# Flash Sale Offer's (index-2, below Featured Products)

Source: 1204x601 screenshot, content 971px wide, so values are multiplied by **1.3615**. Built 2026-09-26.

- `_flash-sale-two.html`: the home-one flash sale layout (snap-slider, 8 slides, `data-start="2"`, dots) with `_product-card-two.html` cards. The head is 33px above the cards.
- Ticket countdown: `.ticket-countdown` in `partials/home-two/_flash-sale-two.scss`.
  - 204x48, radius 6, main-two-600, 8px half-circle notches on both sides (CSS mask), 14px gaps.
  - Values Signika 600 20px white. Unit names Nunito 600 8px uppercase, 4px below. Colons Signika 14px.
  - The "DEAL ENDS IN" label is Signika 500 13px slate-600, 24px before the ticket.
  - Driven by the existing `[data-countdown]` JS.
- Verified: header, ticket, cards and dots within 0-3px.