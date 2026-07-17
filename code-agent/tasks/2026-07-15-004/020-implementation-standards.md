# Implementation Standards

Inherits all rules from `code-agent/memory-bank/0500-implementation-standards/001-standards.md`.

## Additional Standards for This Task

### CSS Custom Properties
- Define on `:root` and override in `[data-theme="light"]`
- Property names: `--bg`, `--bg-mid`, `--text`, `--text-muted`, `--grid-color`, `--border`
- All hardcoded `#0c0a09` values in `index.css` replaced by `var(--bg)`

### ThemeContext
- Exported as named export `ThemeContext` and default export `ThemeProvider`
- Hook: `export const useTheme = () => useContext(ThemeContext)`
- localStorage keys: `portfolio-theme-mode`, `portfolio-theme-preset`
- Default mode: `dark`; default preset: `neonStorm`

### ThemeToggle Component
- Props: none (reads from context)
- Renders a mode toggle (sun/moon icon) + a row of 4 preset swatches
- Swatch is a 16×16 rounded circle showing the first color of the preset gradient
- Active swatch has a white/charcoal ring

### Gradient Preset Shape
```js
{
  id: 'neonStorm',
  label: 'Neon Storm',
  keyframes: `
    @keyframes fadeout {
      0%   { opacity: 0.1; background: #4B0082; }
      50%  { opacity: 0.7; background: #FF1493; }
      80%  { opacity: 0.1; background: #FE865B; }
      100% { opacity: 0;   background: #FE865B; }
    }
  `
}
```
