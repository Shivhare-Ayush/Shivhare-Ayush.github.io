# Goal: Chevron Disclosure Icon + Card Image Guard

Two small polish changes across Card.jsx and ArticleCard.jsx:

1. **Chevron icon** — replace the BsArrowUpRight/BsArrowDownLeft swap mechanic in both
   Card and ArticleCard with a single BsChevronDown that rotates 180° on expand.
   Matches Apple-style disclosure indicators.

2. **Card image guard** — Card.jsx currently always renders `<img src={image}>`,
   which produces a broken image placeholder when no image is passed.
   Wrap it in a conditional so nothing renders when image is undefined.

## Success Criteria

- Both Card and ArticleCard show a chevron (∨) that smoothly rotates to (∧) on expand
- No broken image placeholder on Newsify, Roguelike, or any imageless card
- Cards with images (Trends, API Workshop, Portfolio) are visually unchanged
- `npm run build` and `npm run lint` pass with zero errors
