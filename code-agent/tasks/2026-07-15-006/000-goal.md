# Goal: Name Gradient Per Theme Mode

The name "Ayush Shivhare" in Sidebar and Header used a hardcoded
purple→pink gradient regardless of light/dark mode.

## Change

- Import `useTheme` in Sidebar and Header
- Derive `nameGradient` from `mode` at render time
- Dark: Neon Storm preset colors `#4B0082 → #FF1493 → #FE865B`
- Light: Soft Horizon preset colors `#55A8F7 → #FFEDD5 → #FF6B6B`
- Three-stop gradient using Tailwind `from-[]/via-[]/to-[]` arbitrary values

## Files
- src/components/Sidebar.jsx
- src/components/Header.jsx

## Status
DONE
