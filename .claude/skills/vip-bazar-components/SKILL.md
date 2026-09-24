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

## Other built-ins

- **Accordion:** Bootstrap accordion with the `.common-accordion` wrapper. It uses a Phosphor chevron and turns green when open.
- **Tabs:** `.common-tab .nav-link.active`.
- **Toast:** call `toastMessage(type, title, text, iconClass)` inside `main.js`, where the type is `success|danger|warning|info`.
- **Footer:** a dark `bg-neutral-900` 4-column footer with a subscribe pill input and social icons.
- **Breadcrumb:** `_breadcrumb.html` with a `breadcrumbText` variable.
- **Slick** dots and slide gap styles exist, but Slick itself is not loaded. **Swiper** code is commented out in `main.js`; add the library via CDN if a slider is needed.
- **Assets:** `logo.png` is 167×39, `icon-phone.png` 21×21, `icon-envelope.png` 19×16, `icon-search-white.png` 19×19, and the `thumbs/home-img*.png` mega-menu previews are 1440×2000–2100.
