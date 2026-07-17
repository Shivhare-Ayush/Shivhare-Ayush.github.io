# Analysis

## Current State

- Background: hardcoded `#0C0A09` in `index.css` (`html, body`) and as Tailwind arbitrary value in `App.jsx`
- Particle gradient: hardcoded `@keyframes fadeout` inline in `App.jsx` (`<style>` block)
- Grid/dot patterns in `index.css` also hardcode `#0C0A09` directly
- Sidebar + Header: text is `text-white`, nav hover is `hover:text-purple-400`
- Name gradient: `bg-gradient-to-r from-purple-800 to-pink-800` in Sidebar + Header
- No existing theme context, no CSS custom properties in use

## What Needs to Change

### New files
- `src/theme/themeConfig.js` — preset definitions (colors, keyframes strings)
- `src/theme/ThemeContext.jsx` — React context + provider + localStorage sync
- `src/components/ThemeToggle.jsx` — toggle UI (mode switch + preset picker)

### Modified files
- `src/App.jsx` — consume theme context; derive gradient CSS from active preset; pass to `<style>`
- `src/index.css` — replace hardcoded `#0C0A09` with CSS custom properties (`--bg`, `--text`, `--grid-color`)
- `src/components/Sidebar.jsx` — wrap in `ThemeProvider` context consumer, mount `<ThemeToggle>`
- `src/components/Header.jsx` — mount `<ThemeToggle>` (mobile)

## Detachability Contract

The theme system is isolated in `src/theme/`. To remove it entirely:
1. Delete `src/theme/`
2. Delete `src/components/ThemeToggle.jsx`
3. Revert the 3 CSS variable lines in `index.css`
4. Remove `ThemeProvider` wrapper in `main.jsx` and `useTheme` calls in App/Sidebar/Header

## Constraints (from implementation-standards)
- No TypeScript in `.jsx` files
- PropTypes required on all new components
- Tailwind utility classes only; no new inline styles except where already established
- `font-[Anzo1/2/3]` font patterns preserved
- ESLint: no trailing inline comments on JSX prop lines
