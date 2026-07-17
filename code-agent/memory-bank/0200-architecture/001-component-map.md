# Architecture

## Stack

| Layer | Technology |
|---|---|
| UI framework | React 18 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 + CSS custom properties |
| Icons | react-icons v5 |
| Type checking | PropTypes (no TypeScript in .jsx files) |
| Deploy | GitHub Pages |
| Branch | `Build` |

## Entry Points

```
index.html
└── src/main.jsx
    └── ThemeProvider          ← wraps entire app; manages mode + preset state
        └── src/App.jsx        ← mouse particle effect, scroll-to-top button
            └── src/pages/Page1.jsx
                ├── Sidebar.jsx   ← desktop sticky nav + social icons + ThemeToggle (lg: visible)
                ├── Header.jsx    ← mobile name + social icons + ThemeToggle (lg: hidden)
                └── Content.jsx   ← all sections
                    ├── About     ← inline paragraph
                    ├── Experience.jsx + TechTags.jsx
                    ├── Projects  ← Card.jsx × N (inline in Content)
                    └── Writing.jsx
                        └── ArticleCard.jsx × N
```

## Theme System (detachable)

| File | Responsibility |
|---|---|
| `src/theme/themeConfig.js` | Preset definitions (keyframes, swatch, label) + LS keys |
| `src/theme/ThemeContext.jsx` | ThemeProvider component — state, localStorage sync, context value |
| `src/theme/useTheme.js` | ThemeContext creation (createContext) + useTheme hook |
| `src/components/ThemeToggle.jsx` | Mode toggle button + 4 preset swatch buttons |

To detach: delete `src/theme/`, delete `ThemeToggle.jsx`, revert `main.jsx` wrapper, revert `index.css` CSS vars, remove `useTheme` call from `App.jsx`, remove `<ThemeToggle />` from Sidebar + Header.

## Component Responsibilities

| Component | File | Responsibility |
|---|---|---|
| `App` | `src/App.jsx` | Mouse particle effect, scroll-to-top, active gradient keyframes |
| `Page1` | `src/pages/Page1.jsx` | Layout shell, ClickSpark wrapper |
| `Sidebar` | `src/components/Sidebar.jsx` | Desktop sticky nav + social icons + ThemeToggle |
| `Header` | `src/components/Header.jsx` | Mobile name + social icons + ThemeToggle |
| `Content` | `src/components/Content.jsx` | All content sections |
| `Experience` | `src/components/Experience.jsx` | Experience timeline data + render |
| `TechTags` | `src/components/TechTags.jsx` | Full tech stack tag grid |
| `Card` | `src/components/Card.jsx` | Expandable project card |
| `Writing` | `src/components/Writing.jsx` | Article data array + card list |
| `ArticleCard` | `src/components/ArticleCard.jsx` | Expandable article card |
| `Tag` | `src/components/Tag.jsx` | Single pill tag (icon optional) |

## Navigation Anchors

`#about`, `#experience`, `#projects`, `#writing` — all smooth-scroll via Sidebar links.

## Assets

`src/assets/` — custom `.woff2` fonts (Anzo1–5, Arjun), project screenshots (PNG).
Font families used in Tailwind: `font-[Anzo1]` through `font-[Anzo3]`.
