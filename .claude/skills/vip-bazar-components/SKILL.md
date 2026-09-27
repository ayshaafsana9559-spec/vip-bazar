---
name: vip-bazar-components
description: Copy-ready markup for the vip-bazar project's existing components (animated flair buttons, pill search, icon-with-badge, contact info item, nav menu with submenu/mega menu, form inputs, checkbox/radio, accordion, toast, section wrappers) and the page/partial structure. Use when building UI from a design so existing patterns are reused instead of reinvented.
---

# vip-bazar components and structure

## Page skeleton

```html
@@include('../partials/_template-top.html')      <!-- head, preloader, overlays, toast container, scroll-top, cursor, mobile menu -->

    @@include('../partials/_top-header.html')    <!-- logo + pill search + phone/email -->
    @@include('../partials/_whole-banner.html')  <!-- category column + nav + wishlist/cart icons -->
    <!-- sections… -->
    @@include('../partials/_footer.html')

    @@include('../partials/_template-bottom.html')  <!-- jquery, phosphor, bootstrap, aos, gsap, main.js -->
    </body>
</html>
```

`_template-top.html` includes `_settings-panel.html` (cursor/RTL demo panel) and `_mobile-menu.html`. Partials take variables like this: `@@include('../partials/_nav-menu.html', { "class": "tw-gap-10" })`, and the partial reads them as `@@class`.

Containers: `container max-w-1752-px` for the full-width desktop layout (top header and banner). Plain `container` gives Bootstrap widths up to 1320px.

Section wrapper convention:
```html
<!-- ======================== Section Name start ======================== -->
<section class="section-name py-120">
    <div class="container max-w-1752-px"> … </div>
</section>
<!-- ======================== Section Name end ======================== -->
```

## Buttons (GSAP position-aware "flair" fill)

The markup must contain `data-block="button"` and a `.button__flair` span. Label text goes inside `.button__label`.

```html
<!-- Primary green; hover fills dark from the cursor position -->
<a href="#" class="btn btn-main hover-style-one button--stroke active-scale-094 tw-duration-100 d-inline-flex align-items-center justify-content-center tw-gap-3 group" data-block="button">
    <span class="button__flair"></span>
    <span class="button__label">Shop now</span>
</a>

<!-- Dark; hover fills green -->
<button type="button" class="btn btn-main-two hover-style-two button--stroke tw-duration-100 d-inline-flex align-items-center justify-content-center tw-gap-3 group fw-bold rounded-pill" data-block="button">
    <span class="button__flair"></span>
    <span class="button__label">Search</span>
    <span class="d-flex position-relative"><i class="ph-bold ph-arrow-right"></i></span>
</button>
```

- `.btn` defaults: padding `18px 32px`, radius 6px, and line-height 1. Override the padding with `tw-py-* tw-ps-* tw-pe-*` to match the design.
- Icons or chips placed after the label need `position-relative` so they sit above the flair.
- For a pill button with a round icon chip: `tw-p-2 tw-ps-5 rounded-pill`, then a chip `tw-w-9 tw-h-9 bg-white text-main-600 rounded-circle d-flex justify-content-center align-items-center position-relative`.

## Pill search input (from `_top-header.html`)

```html
<form action="#" class="max-w-810-px w-100 position-relative d-flex">
    <input type="text" class="tw-py-305 tw-ps-8 border border-main-two-600 rounded-pill focus-outline-0 focus-border-main-600 w-100 tw-pe-150-px" placeholder="What are you looking for?">
    <button type="submit" class="btn btn-main-two hover-style-two button--stroke tw-duration-100 d-inline-flex align-items-center justify-content-center tw-gap-3 group fw-bold tw-text-base tw-ps-6 tw-pe-405 rounded-pill tw-py-3 position-absolute tw-end-0 top-50 translate-middle-y tw-me-105" data-block="button">
        <span class="button__flair"></span>
        <span class="button__label">Search</span>
        <span class="d-flex position-relative"><img src="assets/images/icons/icon-search-white.png" alt="Search Icon"></span>
    </button>
</form>
```

## Contact info item (circle icon + label/value)

```html
<div class="d-flex align-items-center tw-gap-3">
    <span class="tw-w-12 tw-h-12 border border-neutral-200 d-flex justify-content-center align-items-center rounded-circle flex-shrink-0">
        <img src="assets/images/icons/icon-phone.png" alt="Phone Icon">
    </span>
    <div>
        <span class="text-neutral-600 tw-text-sm d-block">Online Order</span>
        <a href="tel:+18096598654" class="text-heading tw-text-base fw-semibold hover-text-main-600">+1.809.659.8654</a>
    </div>
</div>
```

## Icon with count badge (wishlist and cart)

```html
<a href="javascript:void(0)" class="d-flex align-items-center justify-content-center tw-text-3xl text-heading tw-leading-none position-relative hover-text-main-600 hover--translate-y-1 active--translate-y-scale-9 tw-me-4">
    <i class="ph ph-shopping-cart"></i>
    <span class="tw-w-6 tw-h-6 d-flex align-items-center justify-content-center rounded-circle bg-main-600 text-white tw-text-xs position-absolute top-0 tw-end-0 tw--me-16-px tw--mt-10-px">0</span>
</a>
```

## Nav menu

`_nav-menu.html`: `ul.nav-menu > li.nav-menu__item[.has-submenu][.activePage] > a.nav-menu__link`.
- A `.has-submenu > a` gets a caret automatically through `::before` (Phosphor `\E136`), so give the link `tw-pe-5`.
- Dropdown: `ul.nav-submenu.position-absolute.start-0.top-100.bg-white.tw-rounded-md.tw-p-2` containing `li.nav-submenu__item > a.nav-submenu__link.hover-bg-neutral-200.tw-py-2.tw-px-305.tw-rounded`.
- Active item style: a `.nav-menu__item.activePage` becomes a green pill (`bg main-600`, white text, radius 12px, padding-inline 14px/18px). `main.js` sets `activePage` from the URL.
- Mega menu: `_mega-menu.html`, a `.mega-menu` grid of `.mega-menu-item.group-item` preview cards with a hover overlay and button.
- Below 992px, the mobile menu (`_mobile-menu.html`) reuses the same partial with `nav-menu--mobile`. GSAP opens it from `.toggle-mobileMenu`.

## Forms

```html
<label for="email" class="fw-medium tw-text-base text-neutral-800 tw-mb-3">Email</label>
<input type="email" id="email" class="form-control tw-py-3 tw-px-5 tw-placeholder-text-neutral-400" placeholder="Email">

<!-- password with eye toggle (main.js: .toggle-password, id="#targetId") -->
<div class="position-relative">
    <input type="password" id="password" class="form-control tw-py-3 tw-px-5 tw-pe-10">
    <span class="toggle-password position-absolute top-50 tw-end-0 tw-me-4 tw--translate-y-50 ph-bold ph-eye-closed" id="#password"></span>
</div>

<!-- custom checkbox; add .common-radio on wrapper + type="radio" for radio -->
<div class="common-check d-flex align-items-center tw-gap-2">
    <input class="form-check-input" type="checkbox" id="remember">
    <label class="form-check-label" for="remember">Remember me</label>
</div>

<!-- underline input with leading icon -->
<div class="position-relative">
    <input type="text" class="focus-outline-0 bg-transparent border-0 tw-pb-5 tw-ps-9 w-100 border-bottom border-neutral-300 focus-border-main-600" placeholder="Your Name*">
    <span class="tw-text-xl d-flex text-main-two-600 position-absolute top-0 tw-start-0"><i class="ph-bold ph-user"></i></span>
</div>
```

A `form.form-submit` shows a success toast and clears the inputs (demo behaviour in `main.js`).

## Custom select (language, currency, category)

Use this whenever the design shows a "value + caret" picker. It's a Bootstrap dropdown styled as a listbox and backed by a hidden native `<select>`, so the value submits with forms and fires a real `change` event. Styles are in `components/_custom-select.scss`; behavior is in `main.js` ("Custom Select Js").

```html
<div class="custom-select dropdown">
    <select name="currency" class="custom-select__native visually-hidden" tabindex="-1" aria-hidden="true">
        <option value="usd" selected>USD</option>
        <option value="eur">EUR</option>
    </select>
    <button type="button" class="custom-select__toggle d-flex align-items-center tw-gap-105 text-heading hover-text-main-600" data-bs-toggle="dropdown" data-bs-offset="0,14" aria-haspopup="listbox" aria-expanded="false" aria-label="Select currency">
        <!-- optional: <img class="custom-select__image ..."> swapped from the option's data-image -->
        <span class="custom-select__value">USD</span>
        <i class="custom-select__caret ph ph-caret-down tw-text-sm tw-leading-none"></i>
    </button>
    <ul class="custom-select__menu dropdown-menu dropdown-menu-end" role="listbox" aria-label="Currency">
        <li role="none">
            <button type="button" class="custom-select__option dropdown-item active" role="option" aria-selected="true" data-value="usd" data-label="USD">
                <span class="custom-select__symbol">$</span>
                <span class="flex-grow-1">USD <span class="custom-select__hint">US Dollar</span></span>
                <i class="custom-select__check ph-bold ph-check"></i>
            </button>
        </li>
    </ul>
</div>
```

- `data-label` is what the trigger shows. `data-image`/`data-alt` swap the trigger's `.custom-select__image`.
- Option leading visuals: `__flag` (20px round image), `__symbol` (26px circle), `__icon` (26px rounded Phosphor chip), `__thumb` (26px image chip).
- `__menu--lg` is 240px wide and scrolls after 360px. `__value--truncate` ellipsizes long labels at 110px.
- Use `data-bs-offset="x,y"` to place the menu; for example, the category select uses `-21,16` to line up with the search pill's edge.

## Product card (partial with variables)

`_product-card.html` is included once per product. Styles are in `components/_product-card.scss`. On hover, the card border turns blue, the wishlist/quick-view/compare icons slide in, and "Add Cart" fills.

```html
@@include('../partials/_product-card.html', { "image": "smart-watch-a10", "name": "Smart Watch A10", "category": "Electronics", "labelOne": "Hot Deal", "toneOne": "bg-yellow-600 text-heading", "labelTwo": "", "toneTwo": "" })
```

- `image` is a file name in `assets/images/thumbs/products/` (without `.png`). Images fill the 237px box (`object-fit: cover`), so supply them with the product already placed.
- Badges are optional: pass `""` to hide one. **Every variable must be passed**, even empty, because `@@if` throws on undefined names.
- gulp-file-include replaces `@@name` without word boundaries, so **no variable name may be a prefix of another** (for example, `badge` and `badgeClass` would corrupt each other).
- Grids: `.deal-products__grid` gives 1/2/3/4 columns at <576 / ≥576 / ≥992 / ≥1200, with a 20px gap.
- Tabs follow the Bootstrap `data-bs-toggle="tab"` pattern with `.tab-content`/`.tab-pane fade`; see `_deal-of-the-day.html`.
- Outline pill button: `btn btn-outline-main hover-style-two button--stroke ... rounded-pill` (the flair fills blue on hover).

## Category card and promo banner

`_category-card.html` (styles in `components/_category-card.scss`) takes:

```html
@@include('../partials/_category-card.html', { "image": "electronics", "icon": "electronics", "tone": "border-main-100", "title": "Electronics", "desc": "Smart tech for smarter living.", "tagOne": "Smartwatch", "tagTwo": "Wearables", "tagThree": "Gadgets" })
```

- `image` points to `thumbs/categories/<image>.png` (274×151), and `icon` to `icons/category-card/<icon>.png` (44px, shown in a 60px circle).
- `tone` is the image border class: `border-{main|purple}-100` or `border-{green|gold}-200`.
- On hover the card border and the arrow button turn blue.
- `.section-title` (utilities/_classes.scss) is the shared 34px home-section heading.
- `.promo-banner` (partials/home-one/_popular-categories.scss) is a dark artwork banner with live copy; `btn-white` is the white pill button with purple text.

## Flash sale slider, countdown, list card, folder frame

- **Countdown:** `[data-countdown]` with `data-duration="<seconds>"` (or `data-deadline="<ISO date>"`) fills the `[data-countdown-hours|minutes|seconds]` children every second (main.js "Countdown"). `.flash-countdown__box` is the 42×37 dark box.
- **Slider:** `.flash-slider[data-start=n] > .flash-slider__track > .flash-slider__slide*` plus an empty `.flash-slider__dots`. It shows 1/2/3/4 slides per view (<576 / ≥576 / ≥992 / ≥1200) with CSS scroll-snap. main.js builds one dot per position (slides − per view + 1), autoplays every 5s, pauses on hover or focus, and respects reduced motion.
- **List card:** `_product-card-list.html` is the horizontal product card (`.product-card--list`: 299px image on the left, extra `sku` variable). It has the same variables as `_product-card.html` plus `sku`.
- **Folder frame:** now the shared **`.folder-frame`** component (`components/_folder-frame.scss`): `.folder-frame > .folder-frame__tab (title) + .folder-frame__aside (optional, right side of the tab row, e.g. a countdown) + content`. Tab 357×76, 10px concave fillet, 40px wider than the container at ≥1400. The aside moves inside the frame below 992px.

## Snap slider arrows, brand grid, deal strip, testimonials

- The flash slider is now the shared **`.snap-slider`** (`components/_snap-slider.scss`, main.js "Snap Slider"). Add `.snap-slider--3` for at most 3 per view. Optional `.snap-slider__prev` / `.snap-slider__next` buttons (`.snap-slider__arrow`, `--filled`) work anywhere inside the wrapper. The middle visible slide gets `is-center`.
- **Brand grid:** `.brand-grid > a.brand-grid__item > .brand-grid__logo img + .brand-grid__offer`. It has 6/3/2 columns, 1px hairlines from a 1px gap over slate-100, and turns the offer strip blue on hover. Logos live in `images/brands/`.
- **Deal strip:** `.deal-strip` is the full-bleed blue bar. The countdown reuses `.flash-countdown` with the `--light` modifier (white boxes, blue digits).
- **Testimonial card:** `_testimonial-card.html` takes `tone` (blue|green|orange), `title`, `quote`, `avatar`, `name`, and `role`. Tints use the new `25` shade, and the border turns to the 600 accent on hover or center.
- Every hsl colour family now has a **`25`** shade (95% towards white).

## Campaign card, FAQ accordion

- **Campaign card:** `_campaign-card.html` takes `image` (files `thumbs/campaigns/<image>-main|1|2|3.png`), `title`, and `count`. The main photo sits on a yellow-25 panel and the 3 thumbnails on green/purple/orange-25. On hover the border and the Shop button turn blue. It's used inside `.snap-slider` (4 per view).
- **FAQ accordion:** `.faq-accordion#id > .faq-item > button.faq-item__button[data-bs-toggle=collapse] + .collapse[data-bs-parent] > p.faq-item__answer`. The open item (`:has(> button:not(.collapsed))`) turns white with a blue outline, and its caret flips.
- **Buttons:** `btn-orange` (filled orange pill) was added next to `btn-white` / `btn-outline-main`.

## Features bar and footer

- **Features bar:** `_features-bar.html` holds the 4 service highlights (56px icon from `icons/features/`, Signika 20px title, Nunito 12px text, coloured Signika 14px link with arrow). It's included on the page just above the footer.
- **Footer:** `_footer.html` (styles in `layout/_footer.scss`) is dark main-two-600 with three parts divided by white-8% hairlines:
  - `.footer__cta`: headline and two pill buttons, `btn-main` and `btn-light-main` (white with blue text).
  - `.footer__main`: 5 columns (logo, about, and socials; Quick Link; Categories; Contact with 42px green icon circles; Newsletter pill form using `form-submit`).
  - `.footer__bottom`: copyright and payment badges from `icons/payments/`.
- On hover, footer links turn yellow and show a leading dot. Social circles fill blue.
- `logo-white.png` is the white-wordmark logo for dark backgrounds.

## Hero two carousel (index-2.html)

- `_hero-two.html`: a centre-mode, infinite offer carousel. `.hero-two__slider[data-hero-slider] > .hero-two__viewport > .hero-two__track > .hero-two__slide × (3 copies)`, with the `.hero-two__arrow--prev|next` buttons on the active card's edges.
- **Card:** `.hero-card--blue|purple|gold` sets the tone variables (price, badge, button, offer circle). Artwork is an `<img class="hero-card__art">` from `thumbs/hero-two/`.
- **Category slides:** `_category-slides.html` + `_category-tile.html` (`icon`, `title`, `units`). `.snap-slider--6` shows 6/4/2/1 per view.
- **Offer strip:** `_offer-strip.html` + `_offer-slide.html` (`eyebrow`, `title`). A full-width (20px gutter) 120px banner slider: a snap-slider at 1 per view with prev/next arrows inside the banner. The art is layered (`offer-bg`, a model on the left, a tag on the right, placed from the centre and hidden below 992px). `.promo-banner` is an existing theme class, so don't reuse that name.
- **Product card two:** `_product-card-two.html` (`image`, `name`, `category`, `label`, `tone`) + `.product-card--two`. It has label/sold pills on the image, a centred action pill on hover, a description, a stars row, a price + In Stock row and a full-width cart button. Used by `_special-offer.html`, which reuses the `deal-products` tabs and grid.
- **Product card row:** `_product-card-row.html` + `.product-card--row`: a wide horizontal card with a single meta line and the eye, heart and compare circles next to the cart button. Used by `_featured-two.html` (a promo banner beside 3 row cards).
- **Ticket countdown:** `.ticket-countdown` (`_flash-sale-two.html`): a dark ticket with side notches (CSS mask) and units each made of a value (`data-countdown-hours|minutes|seconds`) plus a tiny label. Uses the same `[data-countdown]` JS as `.flash-countdown`.
- **Promo bento:** `_promo-bento.html`, 4 `.bento-card`s (`--tall`, `--couple`, `--music`, `--wide`) in a 3-column grid (300/390 rows). Each card has an art `<img class="bento-card__art">`, a badge, a title (`__title--stroke` for a white-outlined title), a Shop Now button and an `__offer` circle (`--sm` for 72px).
- **Campaign card two:** `_campaign-card-two.html` + `.campaign-card--stack`: the main image on top and 3 thumbnails in a row below it. Used by `_campaigns-two.html`, which has the same frame, countdown and slider as home-one.
- **Review card / full-bleed slider:** `_review-card.html` in `_reviews.html`. The snap-slider track can bleed to the viewport with `margin-inline: calc(50% - 50vw); padding-inline: calc(50vw - 50%)`. main.js copies the padding into scroll-padding and marks the first visible slide `is-start`.
- **Blog card:** `_blog-card.html` in `_blog-insights.html`. The folder frame is also the `.snap-slider`, so arrows in `__aside` work. `.folder-frame--wide` gives a 443px tab from 576px up.
- **Brand slider:** `_brand-slider.html`: the brand-grid cells as a one-row snap-slider (`.brand-slider` wrapper with a 1px-gap track for the hairlines).
- **Light footer:** `_footer-two.html` = `.footer.footer--light` + `.footer__support` (Online Support cards `.support-card--{tone}`) + `.footer__grid--six`; payment icons come from `icons/payments-light/`.
- **Home 3:** `index-3.html` starts with `_top-header-three.html` (gradient offer bar + white countdown boxes). Styles live in `sass/partials/home-three/`.
- **Pages:** new home variants go in `html/pages/index-N.html`, and gulp builds `src/index-N.html` automatically. Page-specific styles go in `sass/partials/home-N/`.

## Other built-ins

- **Accordion:** Bootstrap accordion with the `.common-accordion` wrapper. It uses a Phosphor chevron and turns green when open.
- **Tabs:** `.common-tab .nav-link.active`.
- **Toast:** call `toastMessage(type, title, text, iconClass)` inside `main.js`, where the type is `success|danger|warning|info`.
- **Footer:** a dark `bg-neutral-900` 4-column footer with a subscribe pill input and social icons.
- **Breadcrumb:** `_breadcrumb.html` with a `breadcrumbText` variable.
- **Slick** dots and slide gap styles exist, but Slick itself is not loaded. **Swiper** code is commented out in `main.js`; add the library via CDN if a slider is needed.
- **Assets:** `logo.png` is 167×39, `icon-phone.png` 21×21, `icon-envelope.png` 19×16, `icon-search-white.png` 19×19, and the `thumbs/home-img*.png` mega-menu previews are 1440×2000–2100.
