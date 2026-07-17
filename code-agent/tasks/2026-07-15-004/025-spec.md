# Feature Spec: Color Presets and Modes

## User-Facing Behaviour

### Mode Toggle
- Icon button: moon icon (dark mode active) / sun icon (light mode active)
- Clicking toggles between `dark` and `light`
- `data-theme` attribute set on `<html>` element drives all CSS variable switches
- Preference written to `localStorage` key `portfolio-theme-mode`

### Light Mode
| Element | Dark | Light |
|---|---|---|
| Page background | `#0C0A09` | `#EEE5DA` |
| Mid background (gradient) | `#302C27` | `#D9CFC4` |
| Body text | `white` | `#262424` |
| Muted text | `#9ca3af` (gray-400) | `#57534e` (stone-600) |
| Border | `white/10` | `#262424/20` |
| Grid/dot color | `#ddd` | `#b0a89e` |

### Gradient Presets
Four presets, rendered as swatches in the ThemeToggle. Clicking applies immediately.
Preference written to `localStorage` key `portfolio-theme-preset`.

| ID | Label | Stop 1 | Stop 2 | Stop 3 |
|---|---|---|---|---|
| `neonStorm` | Neon Storm | `#4B0082` | `#FF1493` | `#FE865B` |
| `softHorizon` | Soft Horizon | `#55A8F7` | `#FFEDD5` | `#FF6B6B` |
| `classic` | Classic | `#8B5CF6` | `#EC4899` | `#3B82F6` |
| `sunsetBloom` | Sunset Bloom | `#FF6B6B` | `#FFD93D` | `#C780FA` |

### Placement
- **Desktop**: bottom of Sidebar nav, below social icons
- **Mobile**: bottom of Header, below social icons

## Architecture

```
src/
  theme/
    themeConfig.js     ← preset array + CSS variable maps
    ThemeContext.jsx   ← Provider, useTheme hook
  components/
    ThemeToggle.jsx    ← UI: mode button + swatch row
```

`ThemeProvider` wraps `<App>` in `src/main.jsx`.
`App.jsx` calls `useTheme()` to get active preset keyframes string → injects into `<style>`.
`Sidebar` + `Header` import `ThemeToggle` and render it.
CSS variables on `:root` / `[data-theme="light"]` drive bg/text/border colours across the whole page.
