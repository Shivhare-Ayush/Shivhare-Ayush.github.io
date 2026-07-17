# Implementation Standards

## Project Stack
- React 18 + Vite 5 + Tailwind CSS 3
- `react-icons` v5 for all icons — use `bi/*` for brand logos already present, `si/*` for Simple Icons (Docker, PostgreSQL, etc.), `fa/*` for social icons
- No TypeScript in `.jsx` files; TSX only in existing `.tsx` files (ClickSpark)
- PropTypes for all component props
- No inline styles unless already used by the component

## Content Rules
- All JSX string literals containing apostrophes must use `&apos;` or escape (`\'`)
- En-dash (`–`) for date ranges, not hyphen-minus (`-`)
- No trailing comments on JSX prop lines (ESLint flags them)
- `imageAlt` is required on every `<Card>` even when `image` is omitted

## File Conventions
- Data arrays (experiences, techStack) defined at module scope, above the component function
- Imports grouped: React/hooks → third-party → local assets → local components
- `export default` at bottom of file

## Validation
- `npm run build` must pass with zero errors before marking any step complete
- `npm run lint` must pass with zero warnings
