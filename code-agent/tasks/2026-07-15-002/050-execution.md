# Execution Log

## Task 1 — Tag.jsx icon optional ✅
- Made `icon` prop optional with `{Icon && <Icon />}` guard
- `ml-2` on span now conditional on Icon presence
- Build + lint: zero errors

## Task 2 — ArticleCard.jsx ✅
- Created expandable card matching Card.jsx mechanic exactly
- BsArrowUpRight / BsArrowDownLeft toggle icons
- Platform link row renders in expanded state with stopPropagation
- Build + lint: zero errors

## Task 3 — Writing.jsx ✅
- Module-scope `articles` array with placeholder entry
- Renders ArticleCard map
- SiMedium imported from react-icons/si
- Build + lint: zero errors

## Task 4 — Content.jsx + Sidebar.jsx ✅
- Writing imported and `#writing` section added after Projects in Content.jsx
- "Writing" nav link added to Sidebar.jsx with smooth-scroll
- Build: 61 modules (up from 59 — two new components), zero errors
- Lint: zero warnings

## Post-Implementation
- [ ] Replace placeholder article in Writing.jsx with real title, excerpt, date, and Medium URL
- [ ] Smoke-test in browser: nav link scrolls, card expands, platform link opens in new tab
