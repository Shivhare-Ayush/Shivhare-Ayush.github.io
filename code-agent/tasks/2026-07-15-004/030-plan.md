# Plan

## Steps

1. **`src/theme/themeConfig.js`** — define 4 gradient presets and CSS variable maps
2. **`src/theme/ThemeContext.jsx`** — context, provider, useTheme hook, localStorage sync
3. **`src/components/ThemeToggle.jsx`** — mode toggle + preset swatches component
4. **`src/main.jsx`** — wrap `<App>` in `<ThemeProvider>`
5. **`src/index.css`** — replace hardcoded colours with CSS custom properties; add light theme override
6. **`src/App.jsx`** — consume `useTheme`, inject active preset keyframes into `<style>`; update bg gradient
7. **`src/components/Sidebar.jsx`** — import + render `<ThemeToggle>` below social icons
8. **`src/components/Header.jsx`** — import + render `<ThemeToggle>` below social icons
9. **Verify** — `npm run build && npm run lint` zero errors

## Rollback / Detach Path

To remove theme system later:
- Delete `src/theme/`
- Delete `src/components/ThemeToggle.jsx`
- Revert `src/main.jsx` wrapper
- Revert CSS variable lines in `index.css`
- Revert `useTheme` call + style tag in `App.jsx`
- Remove `<ThemeToggle />` from Sidebar + Header
