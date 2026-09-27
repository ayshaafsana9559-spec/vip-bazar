# Home: Deal of The Day's (product grid)

Source: Figma screenshot, 1186×912, **exported at ×0.725**. Its 4-card row spans 958px; the page container is 1322px, so every measurement was multiplied by **1.38**. Built 2026-09-24.

| Element | Design value |
|---|---|
| Section | `pt-60 pb-60`. Title Signika 600 34px (line-height 1.5, slate-800), 30px to the grid |
| Tabs | Nunito 17px slate-600, 22px gap; active is main-600, 600 weight, 1px underline offset 4px |
| Grid | 4 columns, 20px gap; cards 315.5 × 477 |
| Card | 1px slate-200 border (main-600 on hover), 12px radius, 9px padding |
| Image box | 237px tall, slate-25 `#F9F9F9`, 8px radius |
| Badges | 28px tall, 14px side padding, flat left / pill right, 16px from top, 8px gap, Nunito 600 12px |
| Hover actions | 32px circles, 1px main-600 border, 6px gap, 16px from top/right |
| Body | padding 22/16/12. Category Nunito 16px main-600 (color dots 16px, top-aligned). Title Signika 600 28px, 12px below |
| Meta | Nunito 12px, rows 20px tall, 8px apart. Row 1 gap 14 (16px star, 16px box icon); row 2 gap 10 (stock dot + 12px, -34% pill 20px tall) |
| Footer | 16px after meta, 1px slate-100 divider, 16px top padding. Price Nunito 800 24px orange-600, old price 16px slate-500. Add Cart 36px tall, 20px side padding |
| See All Products | Outline pill, 44px tall, 24px side padding, 32px above |

Verified with headless Chrome: 0–3px on every measured element after scaling.

## Placeholders and assumptions
- The 8 product images in `thumbs/products/` were cut from the screenshot and upscaled ×1.38, so they're soft. Replace them with 2x exports at the same file names, framed within a 293×236 box.
- Hot Items, Best Seller, and Ready to Ship reuse the same 8 products in different orders.
- The rating, shipping, stock, sold, and discount values are the design's sample text, identical on every card.
