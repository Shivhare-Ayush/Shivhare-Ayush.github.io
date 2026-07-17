# Analysis

## Existing Patterns to Follow

| Pattern | Location | How Writing reuses it |
|---|---|---|
| Data array → component map | `Experience.jsx` | `Writing.jsx` — same structure |
| Expand/collapse card | `Card.jsx` | `ArticleCard.jsx` — same mechanic |
| Tag pill | `Tag.jsx` | Reused directly, icon prop is optional (see below) |
| Nav anchor link | `Sidebar.jsx`, `Header.jsx` | Add a fourth `<a href="#writing">` |
| Social icon link | `Sidebar.jsx` | Platform icon row in expanded card state |

## Tag Component — Icon Optionality

`Tag.jsx` currently requires `icon` as a PropType. Writing tags are plain text
(e.g. "Career", "Java", "Systems") — no matching icon exists.

Two options:
1. Make `icon` optional in `Tag.jsx` and render without it when absent
2. Create a separate `TextTag.jsx`

**Decision: option 1** — minimal change, no new file, backward compatible.
If `icon` is undefined, render the pill without the icon span.

## Platform Icons Available in react-icons

| Platform | Icon | Import |
|---|---|---|
| Medium | `SiMedium` | `react-icons/si` |
| Dev.to | `SiDevdotto` | `react-icons/si` |
| Substack | `SiSubstack` | `react-icons/si` |
| Hashnode | `SiHashnode` | `react-icons/si` |

All already available — no new packages needed.

## What Does NOT Change

- `Card.jsx` — untouched
- `TechTags.jsx` — untouched
- `Experience.jsx` — untouched
- `Content.jsx` — only adds `import Writing` and `<Writing />` inside a new section
- `App.jsx` — untouched
