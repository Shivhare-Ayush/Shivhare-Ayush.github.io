# Implementation Standards

- Component modifications in `src/components/Content.jsx`, `src/components/Experience.jsx`, and `src/components/Card.jsx`.
- Code conventions:
  - En-dashes (`–`) for all date ranges.
  - Escaped apostrophes (`&apos;`) in JSX string literals.
  - Zero TypeScript in `.jsx` files; PropTypes defined for any new component props.
- Accessibility: ARIA expand states (`aria-expanded`), keyboard navigation (`onKeyDown` Enter/Space).
- Quality Gate: `npm run build && npm run lint` must pass with zero errors and zero warnings.
