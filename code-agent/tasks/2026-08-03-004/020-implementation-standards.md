# Implementation Standards

- `DEFAULT_PRESET = 'crimsonUltrasonic'` in `themeConfig.js`
- `Sidebar.jsx` and `Header.jsx` use `useTheme`'s `activePreset.swatch` for background clip text gradient
- Validation gate: `npm run build && npm run lint` must pass with zero errors
