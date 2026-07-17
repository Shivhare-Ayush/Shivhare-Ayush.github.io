# Goal: Color Presets and Modes

Add a fully detachable theme system to the portfolio site.

## Summary

The site currently has a single hardcoded dark theme (deep black `#0C0A09` background,
purple→pink→blue mouse particle gradient). This task introduces:

1. A **light / dark mode toggle** — dark uses Deep Charcoal `#262424`, light uses Light Almond `#EEE5DA`
2. **4 gradient presets** for the mouse-tracking particle effect, switchable by the user
3. **Persistent preference storage** via `localStorage` — choices survive page reload/revisit
4. A **detachable theme module** (`src/theme/`) that can be removed without touching component logic

## Colors from Design Reference

### Base Tones
| Name | Hex | Usage |
|---|---|---|
| Light Almond | `#EEE5DA` | Light mode background |
| Deep Charcoal | `#262424` | Light mode text + dark mode background |
| Current dark | `#0C0A09` | Dark mode background (existing) |

### Gradient Presets
| Preset Name | Colors | Source |
|---|---|---|
| Neon Storm | `#4B0082` → `#FF1493` → `#FE865B` | Indigo, Deep Pink, Coral Glow |
| Soft Horizon | `#55A8F7` → `#FFEDD5` → `#FF6B6B` | Cool Horizon, Papaya Whip, Grapefruit Pink |
| Classic | `#8B5CF6` → `#EC4899` → `#3B82F6` | Original site purple/pink/blue |
| Sunset Bloom | `#FF6B6B` → `#FFD93D` → `#C780FA` | warm coral to gold to soft violet |

## Success Criteria

- Light/dark mode toggle works on desktop (Sidebar) and mobile (Header)
- 4 gradient presets cycle correctly, particles reflect active preset
- Preferences saved to `localStorage`, restored on load
- Theme module is self-contained in `src/theme/` — removal requires only deleting the folder
  and unwiring 3 import lines in App.jsx, Sidebar.jsx, Header.jsx
- `npm run build && npm run lint` pass with zero errors
