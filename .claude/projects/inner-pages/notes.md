# Inner pages

## products.html (header + breadcrumb)

Built 2026-09-27 from a 1816px screenshot (x0.896).

- Page: template-top + `_top-header-four.html` (gradient bar) + `_header-inner.html` + `_breadcrumb.html` (`title`) + template-bottom.
- `_header-inner.html` = `_header.html` with `header--inner`: white search row (search pill slate-25) and a slate-25 menu row with slate-100 top/bottom borders.
- `_nav-menu.html` now has a "Products" (`products.html`) link under Browsed Products. main.js then marks Browsed Products `activePage` on products.html; `.header--inner` rotates that caret up.
- `_breadcrumb.html` + `partials/inner/_breadcrumb.scss`: 51px row, 15px text, 5px dot separators, last item orange-600, slate-100 border-bottom. Inner-page styles go in `sass/partials/inner/`.
## products.html listing

Source: 646x902 screenshot (very small, ~x2.5; values approximate). Built 2026-09-27.

- `_shop-listing.html` + `partials/inner/_shop-listing.scss`: 318px sticky filter sidebar + a 3/2/1 grid of home-one `_product-card.html` (the 12 existing product photos), toolbar ("Showing 12 of 600 Results" + native sort select styled as a pill), pagination (34px circles, active/next filled).
- `.shop-filter` (slate-25, slate-100 border, radius 12, padding 25/22):
  - search pill;
  - `.filter-check` lists (visually hidden checkbox + label whose ::before shows an SVG tick only when checked, count on the right);
  - `.price-range` (two stacked native range inputs, main.js "Price Range": no crossing, fill between thumbs, "$min - $max" label);
  - star ratings, `.filter-tag` pills, See All links, Reset Filters outline button.
- Not built: the SKU line that some cards in the design show (`_product-card.html` has no optional sku variable; adding one means updating every existing include).
## products.html: features row + footer

- `_features-plain.html` and `_footer-three.html` (index-3's footer, shared). `.shop-listing` bottom padding is 30 so the features row's own padding sets the gap.

## products-details.html (header + breadcrumb)

- Page: template-top + `_top-header-four.html` + `_header-inner.html` + `_breadcrumb.html` + template-bottom.
- `_breadcrumb.html` now takes `trail` (raw `<li>` HTML for extra middle crumbs; JSON-escape the quotes). Pass `""` when there are none (products.html does).
- `_nav-menu.html` has a "Product Details" (`products-details.html`) link under Browsed Products, so the section stays highlighted.
## products-details.html: product details section

Source: 865x869 screenshot (~x1.89; values approximate). Built 2026-09-27.

- `_product-details.html` + `partials/inner/_product-details.scss`: layout 1fr + 316px sidebar (1200+). The top area is gallery 485fr + info 437fr (66px gap).
- Gallery (`data-pd-gallery`, main.js "Product Gallery"): slate-25 main box (aspect 485/483) with product-card badges and a white "‹ 2/4 ›" pill; 95x85 thumbs, active = main-600 border. Clicking a thumb or arrow swaps `data-image` into the main image and updates the counter. Images in `thumbs/products/gallery/` (main cut from the screenshot, thumbs tiny).
- Info: green category chip, Signika 600 30px title, stars, $59.00 28px orange + struck price + -34% pill, IN STOCK purple, description, Quantity + `.pd-qty` stepper (main.js, min 1; plus is orange) + dark Add To Cart, then `.pd-meta` dl (3-column grid; values right-aligned in column 2 like the design) with `.pd-social` circles.
- Tabs: Bootstrap tabs in a slate-25 pill over a hairline; the panel is slate-25/radius 12/padding 28 with dotted lists, groups split by slate-100 lines, and a Share / Tag footer (uses `.filter-tag`). Additional info / Reviews panes hold sample content.
- Sidebar `.pd-side`: Delivery Options, Return & Warranty, Need help?, Payment Options (payments-light in white 44x30 cards), Brand Info, GO TO STORE.
- Gotcha: a PowerShell command whose SCSS text contained `/*` was blocked as a "Remove-Item /*" call; write such files with the Write tool.

## products-details.html: More Related Products

- `_related-products.html` + `partials/inner/_related-products.scss`: slate-25 section (padding 56/60), title + snap-slider arrows in the head (30px above the track), 8 slides at 4 per view, `data-start="2"`, dots 30px below.
- New `_product-card-sku.html` (= `_product-card.html` + `sku` variable): an extra "SKU: … -34%" line under the title, with -34% moved out of the stock row. The products.html listing now uses it for the last four cards (as in that design).
- `.product-details` bottom padding is now 70.

## products-details.html: Additional info tab

- `#pd-info` pane = `table.pd-specs`: 50/50 columns; thead is a main-two-600 rounded (8px) row with white 500 text; body rows have padding 17/20, slate-100 bottom lines, slate-600 labels and slate-800 values. Rows: Category, Manufacturer, Serial Number, Ships From.
- The Share / Tag footer is hidden while this tab is active (`#pd-info.active ~ .pd-panel__footer { display: none !important }`; the `!important` is needed to beat `d-flex`).
- `.pd-qty` is now a white pill (padding 4, soft shadow) around the − value + controls.

## products-details.html: Reviews tab

Source: 666x872 screenshot (~x2.44). Built 2026-09-27.

- `#pd-reviews` pane: "Average rating" + `.pd-rating` (388px yellow-600 score card with 4.9/5 and dark stars; `.pd-bars` 5-1 star bars with a main-two fill and percentages; dark "Write your review" pill). Then "Customers Reviews" + Sort By select (reuses `.shop-listing__sort`), then `.pd-review` items (150px author column with a divider, 48px avatar; stars, green "Verified purchase", optional 70px `__photos`, text, 365 / 15 vote buttons), then "See All Reviews" outline button.
- The Share / Tag footer is hidden for both the Additional info and Reviews tabs.
- Avatars reuse `thumbs/avatars/*` and the photos reuse `thumbs/products/gallery/*`.

## products-details.html: Add Review modal

- `_review-modal.html` (included at the end of the page) + `partials/inner/_review-modal.scss`: Bootstrap modal `#reviewModal`, opened by the reviews tab's "Write your review" (now a `<button data-bs-toggle="modal">`).
  - Dialog 731px, radius 12, margin-top 100, padding 22/28/26, backdrop opacity 0.55. Title Signika 600 21px, close X, slate-100 rule.
  - `.rate-input`: 5 radio stars in row-reverse (checked/hover fill via `~`), 3 checked by default, labelled by `#review-rating-label`.
  - `.float-field`: 44px pill inputs (98px textarea, radius 22) with 11px labels sitting on the top border (white background). Name full width, Gmail | Phone, Review full width.
  - Submit Now (btn-main) + Cancel (outline, dismisses), 42px.
- Checked by rendering a temp copy with `show d-block` + a backdrop (deleted after).

## cart.html (header + breadcrumb)

- Page: template-top + `_top-header-four.html` + `_header-inner.html` + `_breadcrumb.html` (`"title": "Products"`, empty trail, as the design shows) + template-bottom.
- `_nav-menu.html` has a "Cart" (`cart.html`) link under Browsed Products, so that section is highlighted like in the design.

## cart.html: cart table + price summary

Source: 1554x654 screenshot (~x1.05). Built 2026-09-27.

- `_cart.html` + `partials/inner/_cart.scss`: layout 1fr + 315px (1200+), gap 21, section padding 64/70.
- `.cart-box` (slate-25, padding 26/27/30): "Cart (4 item)" (count in `[data-cart-count]`), then `.cart-table` in `.table-responsive` (min-width 720): white 52px header row, 85px rows with dashed main-200 dividers.
  - Cells: 52px product thumb + name + star rating; unit price; `.cart-qty` pill (dark minus / blue plus, reuses the `[data-pd-qty]` stepper JS, max 72) with "Available: 72"; total; trash button (`[data-cart-remove]` removes the row and updates the count).
  - "Continue Shopping" link back to products.html.
- `.cart-summary` (slate-25, padding 26/19/25): Price, tag icon + From + $45.00 (25px orange 800), base/tax/shipping list, `.cart-coupon` pill with a purple 32px arrow button, Discount, orange Total, blue 36px Check Out.
- Thumbs `thumbs/products/cart/*.png` (96px) were cut from the screenshot. Totals are static (no recalculation).

## cart.html: footer

- `_footer-three.html` (shared with index-3 and products.html).

## address.html (header + breadcrumb)

- Page: top-header-four + header-inner + breadcrumb (title "Billing &amp; Address", trail Products > Single Product) + template-bottom.
- `_nav-menu.html` has a "Billing &amp; Address" (`address.html`) link under Browsed Products. The cart's Check Out button now links to address.html.

## address.html — Shipping Address (screenshot 76)
- `_address.html` reuses `.cart-page` layout, `.cart-box` (+`--address`: tighter bottom) and `.cart-summary` (+`--address`: no coupon/button, all rows in one dl).
- `.address-list` > `.address-card` (white, 9px radius, 101px min-height): name + type + green Default badge, `<address>` line, Delete (reuses `data-cart-remove`/`data-cart-row`) + outline "Deliver to this Address" flair button.
- Footer row: Back (→ cart.html) and New Address (ph-plus-circle, icon scales on hover). Styles: `inner/_address.scss`. Page ends with `_footer-three`.

## address.html — New Address modal (screenshot 77)
- `_address-modal.html` = `#addressModal`, reuses `.review-modal` shell (731px, head, fields grid, btns) + `.float-field`; `.address-modal` modifier tightens spacing (types 20/18, row-gap 20).
- New: `.choice-radio` (hidden radio + label::before ring, filled dot when checked), `.float-field__input--select` + `.float-field__caret` (ph-caret-down). Styles in `inner/_address.scss`.
- Opened by the "New Address" button (`data-bs-toggle="modal" data-bs-target="#addressModal"`). Included after the footer in pages/address.html.

## checkout.html — header + breadcrumb (screenshot 78)
- pages/checkout.html: top-header-four, header-inner, breadcrumb title "Payment" (trail Products / Single Product), footer-three. Nav submenu gained "Checkout"; address cards' "Deliver to this Address" now link to checkout.html.

## checkout.html — Delivery / Payment / Address (screenshot 79, scale ×1.387)
- `_checkout.html`: whole layout is one `<form class="cart-page__layout">`; left `.checkout-main` (2 fieldsets `.cart-box.checkout-box`, legend = `.cart-box__title`), right `.checkout-side` (`.checkout-address` + `.cart-summary` with Complete Order submit).
- `.delivery-option`: hidden radio + label card (checked → main-600 border). `.pay-option`: hidden radio + label head; `:has(input:checked)` frame, `input:checked ~ __body` reveals the Cards select (float-field select) + New Address link. CSS-only, no JS.
- Icons are hand-drawn SVGs in `assets/images/icons/checkout/` (free/standard/express delivery, paypal, payoneer, mastercard, visa, cash) — swap with real exports if supplied.
- Styles: `inner/_checkout.scss`; Back → address.html, Edit → address.html.

## top-catagories.html — Top Categories grid (screenshot 80, scale ×1.634)
- `_top-categories.html`: section head (section-title + outline Browse Products btn), 6-col grid of `_top-category-card.html` (vars image/title/units/active), reuses `.shop-pagination`.
- `.top-category-card` (NOT `.category-card` — that name is the home-one Popular Categories component). `.active`/hover = blue frame + filled arrow.
- Images cropped from the screenshot into `thumbs/top-categories/*.png` (placeholders). Nav submenu gained "Top Categories". Styles: `inner/_top-categories.scss`.

## about-us.html — About intro (screenshot 82, scale ×1.018)
- `_about-intro.html` + `inner/_about.scss`: grid 540px photo (`thumbs/about/marketplace-laptop.jpg`, cropped from design, 691px tall, left corners rounded) + content (tagline/h1/para/About Us btn + support phone) + bottom `.about-intro__features` slate-25 panel (right corners rounded) with 2 `.about-feature` items split by a slate-200 rule.
- Feature icons: hand-drawn SVGs `icons/about/trusted-sellers.svg`, `secure-payments.svg`.
- Breadcrumb partial no longer hard-codes "Browse Products": shop-flow pages pass it at the start of `trail`; about-us passes `trail: ""` → Home • About Us. Nav Pages > About Us now links about-us.html.
- about-us.html also includes `_offer-strip-chairs` (index-4), `_brand-partner` (index; `.offer-strip + .brand-partner` pt 8px in `inner/_about.scss`) and `_marquee-strip` (index-3).
- `_deal-strip.html` was split out of `_brand-partner.html` (it was glued on the end); index.html now includes it right after brand-partner, so index output is unchanged.
- about-us.html then `_reviews-three` (index-3 photo review slider) after the marquee; `.marquee-strip + .reviews-three` pt 60px (now in `home-three/_reviews-three.scss`, shared with faq).
- about-us.html then `_newsletter-band` (index-5) before footer-three.
- about-us.html then `_faq-five` (index-5) after the newsletter band.
- about-us.html then `_features-plain` after FAQ, then footer-three (page complete per screenshots 82–89).

## faq.html (screenshot 90–91; user renamed faqs → faq)
- top-header-four, header-inner, breadcrumb "FAQs" (trail ""), `_faq-five` (index-5), footer-three. Header "Support &amp; FAQs" links (in `_header.html` + `_header-inner.html`) now point to faq.html.
- faq.html then `_marquee-strip` (index-3) before footer-three.
- faq.html then `_reviews-three` after the marquee.
- faq.html then `_newsletter-band` (index-5) after the reviews.
- faq.html then `_brand-slider` (index-2 single-row brand snap-slider) after newsletter; `.newsletter-band + .brand-partner-two` pt 40px in `home-five/_newsletter-band.scss`.
- faq.html then `_features-plain` before footer-three.

## contact-us.html — contact form (screenshot 96, scale ×1.268)
- breadcrumb "Contact Us" (trail ""), `_contact-form.html` + `inner/_contact.scss`, footer-three. Main nav "Contact Us" now links contact-us.html.
- `.contact-section`: white → slate-25 split 387px above the section bottom (linear-gradient). `.contact-form` card 727px: head (tagline/title/sub + divider), 2-col grid of label-above grey pill inputs (`.contact-form__input`, `--select` + `__caret`, `--area` 109px), centred "Sent Message" flair btn. Form is visual only.
- contact-us.html then `_online-support.html` (Help Center / Online Support 24/7 + 4 `.support-card`s + note): markup lifted from footer-two's `.footer__support` block, wrapped in `section.online-support` (padding 51/50, in `inner/_contact.scss`).

## order-tracking.html (screenshot 98, scale ×1.266)
- breadcrumb "Order Tracking", `_order-tracking.html` + `inner/_order-tracking.scss`, footer-three. Top-header "Tracking Orders" links (top-header, -two, -four, header-three) → order-tracking.html.
- Grey `.order-tracking__box`: centred title/text + divider, `__fields` grid (gap 14) reusing `.contact-form__label` / `.contact-form__input` (+ `.order-tracking__input` = white bg, 38px), `__actions` grid (gap 8) with full-width Tracking Now (submit) / Cancel Now (reset) flair buttons.
- order-tracking.html then `_online-support` before footer-three.

## view-tracking.html (screenshot 100 — full-page overview at 386px, text unreadable)
- Shell only so far: header-inner, breadcrumb Home • Order Tracking • View Tracking, footer-three. Waiting on full-res section screenshots.
- order-tracking form now submits (GET, name=order/email) to view-tracking.html instead of `.form-submit` toast.
- Sections seen in overview: header card (Order Tracking + Order ID/Date/Est. Delivery + Contact Supplier/Download Invoice), Order Journey stepper (5 steps) + current-status callout, Detailed Activity Log timeline, Shipping Information (shipping/supplier address cards + carrier details), Order Items + totals, Recent Orders (3 cards); sidebar: Quick Summary, supplier card, Need Help? (3 links), Quick Actions (3 links).
- view-tracking.html: `_online-support` included before footer-three (screenshot 101). Tracking body sections still pending full-res screenshots.
- view-tracking: `_view-tracking.html` section (pt 68) + `inner/_view-tracking.scss`; block 1 `.vt-header` card (title/text/meta row with ph icons, Contact Supplier → contact-us.html + Download Invoice). Scale ×1.132.
- view-tracking block 2: `.vt-layout` grid (1fr + 427px sidebar, gap 21) → `.vt-main` / `.vt-side`; `.vt-card` (+`--side`). Order Journey = `.vt-steps` (5 `.vt-step`, is-done/is-current/is-next light the incoming ::before segment) + `.vt-status` callout; Quick Summary = `.vt-summary` dl rows + 2 buttons. Avoid Bootstrap mb-0 on elements whose margin the SCSS sets (it is !important).
- view-tracking block 3 (screenshot 104, ×1.616): main col adds Detailed Activity Log (`.vt-log` timeline: `__dot` + dashed ::before, `__item--first` = outline dot, tags/meta/progress) and Shipping Information (`.vt-address-grid` 2 `.vt-address` cards + `.vt-carrier` with space-between cols + dividers). Sidebar adds supplier card (`.vt-supplier`, avatar cropped to `thumbs/avatars/global-foods.png`), Need Help? + Quick Actions (`.vt-links` / `.vt-link` with --orange/--green/--yellow tones, `--action` rows are buttons).
- view-tracking block 4 (screenshot 105, ×1.38): Order Items card in main col (`.vt-items` / `.vt-item` rows with thumb, name/SKU/meta, price + In Stock; white `.vt-totals` dl) and full-width Recent Orders after `.vt-layout` (`.vt-recent` + 3 `.vt-order` cards, badge `--transit`). Title modifier renamed `--ship` → `--spaced` (Shipping, Order Items, Recent). Page body complete per overview.

## privacy-policy.html (screenshot 106, ×1.377)
- breadcrumb "Privacy Policy", `_policy.html` + `inner/_policy.scss`, footer-three. Header "Refund Policy" (header + header-inner) and footer-five "Privacy policy" link here.
- `.policy-layout` grid 314px sticky `.policy-nav` (Bootstrap pills, 5 buttons) + `.policy-content.tab-content` (5 panes, same lorem body; Eligibility = design). Body 13.6px / lh 1.47 (p needs `line-height: inherit` — base p sets 1.6); headings __h1..__h5 = 30/25/19/16/12px, margin 27/20.
- privacy-policy.html then `_online-support` before footer-three.

## sing-up.html (screenshot 108, ×1.727 of a 1627×919 viewport) — filename as the client typed it
- No header/footer: template-top + `_auth-sign-up.html` + template-bottom. `inner/_auth.scss`: `.auth` 100vh flex; `__panel` 50.6% with padding-left 16.35vw (logo, `__body` max 444px: Back Now / title / text / 2-col fields reusing `.contact-form__label/__input` + `.auth__input` 38px / switch line / Sign Up btn, `__copy` pinned bottom); `__media` photo right (cropped+2x upscaled → `thumbs/auth/sign-up.jpg`, hidden < lg).
- All "Register" links (header, header-three, -four, -inner, nav Pages>Register) now → sing-up.html (register.html never existed; `_register.html` is an unused template leftover).

## sing-in.html (screenshot 109, ×1.223) — filename as typed
- `_auth-sign-in.html` reuses `.auth` (same positions as sign up); `.auth__fields--stack` single column, password field with `.auth__eye` button (`data-password-toggle="#id"`, new handler in main.js next to the old `.toggle-password` one: swaps type, ph-eye/ph-eye-slash, aria-pressed/label), right-aligned `.auth__forgot`. Photo `thumbs/auth/sign-in.jpg` (cropped, 1.5x).
- Sign up ↔ sign in linked both ways.

## forget-password.html (screenshot 110, ×1.156)
- `_auth-forget-password.html` on `.auth`: `.auth__title--low` (mt 98), one field (`__fields--stack __fields--single`, mb 27), Send Request. Back Now → sing-in.html; sign-in "Forget password" → here. Photo `thumbs/auth/forget-password.jpg`.

## verify-email.html (screenshot 111, ×1.159)
- `_auth-verify-email.html` on `.auth`: `.auth__title--mid` (mt 77), prefilled email field, `.auth__otp` 6 × `.auth__otp-box` (grid, gap 7, 37px pills) with `data-otp` JS in main.js (digits only, auto-advance, backspace back, paste spreads digits), Verify Email btn, `.auth__switch--after` Resend Code below. Photo `thumbs/auth/verify-email.jpg`.

## new-password.html (screenshot 112, ×1.196)
- `_auth-new-password.html` on `.auth`: `.auth__title--near` (mt 64), `.auth__text--narrow` (max 430 to keep the design line break), prefilled OTP row (5 7 9 2 3 8; `.auth__otp-box` now 12px regular for both OTP pages), New/Confirm password with `.auth__eye` toggles, Update Password btn, Resend Code line after. Back Now → forget-password.html. Photo `thumbs/auth/new-password.jpg`.

## 403-error.html (screenshot 113, ×1.418)
- top-header-four + header-inner, `_error-403.html`, footer-three (no breadcrumb). `inner/_error.scss` `.error-page` (art max 637px, title/text/btn) — reusable for other error pages.
- Illustration is a hand-built SVG `thumbs/errors/403.svg` (lamp + beam + per-digit gradient "403" + "403 FORBIDDEN" pinned with textLength 283).

## 500-error.html (screenshot 114, ×1.418)
- Same `.error-page` as 403 (`_error-500.html`); `__art` now keeps each SVG's intrinsic width (403 637px, 500 726px). Illustration hand-built `thumbs/errors/500.svg` (blob, 3 gradient warning triangles, laptop, Times "500" per-digit gradient, "Internal Server Error" textLength 277, simplified woman + gradient wrench) — swap for the real export if provided.

## coming-soon.html (screenshot 115, ×1.347 of 1627×913)
- Full-screen, no header/footer: template-top + `_coming-soon.html` + template-bottom. `inner/_coming-soon.scss` `$soon-gradient` (yellow→orange→black→blue→purple) for ring borders (padding-box/border-box trick), clipped number text, social rings. Four `.soon-unit` (246px rings, white top / tinted bottom half) on the existing `[data-countdown]` with data-duration=216945 (starts 02:12:15:45, counts live). Notify pill form (form-submit), 5 socials (Pinterest active).

## 404-error.html (screenshot 116, ×1.337)
- `_error-404.html` on `.error-page` (+ `__text--narrow` 485px). Hand-built `thumbs/errors/404.svg` (soft blob + ground ellipse, per-digit gradient Arial Black "404" with white sparkles, unplugged plug/socket + cables, gears, rocket, planet, teal envelope, "ERROR!" textLength 127).
- New button variant in `components/_button.scss`: `.btn-outline-orange` + `.hover-style-three` (orange flair fill, white text) — used for the orange "Back To Home".
- Note: error screenshots look viewport-sized (content centred); 403/404/500 currently include header + footer — ask if they should be standalone.

## 419-error.html (screenshot 117, ×1.351)
- `_error-419.html` on `.error-page` (blue outline arrow button like 403). Hand-built `thumbs/errors/419.svg`: gradient "419" (textLength 150), "Page Has Expired", dashed orbit rings, gradient Oops! cloud, orange leg + gradient spotted shoe, cable, plug with sparks, 3-outlet socket strip, lavender leaves, ground line.

## 503-error.html (screenshot 118, ×1.346)
- `_error-503.html` on `.error-page` (+ `__text--mid` 515px). Hand-built `thumbs/errors/503.svg`: two browser frames + grey panel with orange edge, sad paper-sheet character ("Service unavailable", gradient face), gradient "503 ERROR" sign drawn last (in front). Note: a zero-height line cannot use an objectBoundingBox gradient — use a thin rect.

## blog.html (screenshot 119, ×1.686)
- breadcrumb "Blog", `_blog-grid.html` + `inner/_blog.scss`, footer-three; nav Pages > Blog added.
- Head: maroon tagline (hsl(0,93%,17%) — no token), section-title max 560 (breaks at "e-"), text max 462 + mr 23. `.blog-grid` 4/3/2/1 cols of the index-3 `_style-post.html` card (style-1..4 + blog-1..4 images); `.is-active` cell = blue frame (card 2). Pagination reuses `.shop-pagination`.

## blog-details.html (screenshot 120, ×1.261) — part 1
- breadcrumb Home • Blog • Blog Details; `_blog-details.html` (styles appended to `inner/_blog.scss`): `.blog-details__layout` 1fr + 427px; `.bd-article` (hero `thumbs/blog/details-hero.jpg` cropped 2x, meta with dot separators, title, `__content` p/h2), sidebar `.bd-widget`s: Search (`.bd-search` pill), More News (`.bd-news` 86px thumbs, 16.8px titles, Read More, See All → blog.html).
- `_style-post.html` links (thumb, title, Read) now → blog-details.html (affects index-3 + blog). Screenshot cut off: article continues + a third sidebar widget pending.
- blog-details part 2 (screenshot 121, ×1.823): article continues (h3 How to Claim + ol, `.bd-article__gallery` blog-4/blog-3 edge-to-edge 339px, second list, index-2 `_review-card.html` tone green, `__content` h4 + ul lists, `__foot` Share socials (`.bd-socials--sm`) + Tag pills). Sidebar adds Popular Tags (`.bd-tags`/`.bd-tag`), Subscribe (`.bd-subscribe`), Follow Us (`.bd-socials`/`.bd-social`, active filled). Page complete.
- blog-details part 3 (screenshot 122, ×1.699): main column is now `.blog-details__main` (article + `_blog-comments.html`). Comments card: `.bd-editor` (toolbar bar, textarea, attach icons + Submit), `.bd-threads` of nested `.bd-comment` (avatar in 71px gutter, ::before line to subtree end, `& &` mt 26) using `_blog-comment-body.html` (vars avatar/name/time/likeTone/text), `.bd-reply` pill at deepest level, closing Submit Comment → #comment-form.

## successful.html (screenshot 123, ×1.22 of 1627×921)
- Full-screen: template-top + `_order-success.html` + template-bottom; `inner/_success.scss` (`.success-page` flex column: logo, centred `__body`, copyright). Illustration is a 3D render cropped 2x → `thumbs/success/order-success.png` (swap for real export). Purple order id, Continue Shopping (→ products.html) + Download PDF.
- checkout.html form now submits (GET) to successful.html (removed `.form-submit`).

## error-payment.html (screenshot 124, ×1.233)
- Full-screen, reuses `.success-page` shell (`_payment-failed.html`) + `__art--failed` / `__title--failed` (2 lines, lh 1.1) / `__text--failed` modifiers in `inner/_success.scss`. Hand-drawn vector `thumbs/success/payment-failed.svg` (hand + yellow sleeve, purple phone + card, blue X, "EROR" pill as in design). Buttons: Continue Shopping → products.html, Try Again Payment → checkout.html.
