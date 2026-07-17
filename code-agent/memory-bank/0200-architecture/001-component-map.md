# Architecture

## Stack

| Layer | Technology |
|---|---|
| UI framework | React 18 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Icons | react-icons v5 |
| Type checking | PropTypes (no TypeScript in .jsx files) |
| Deploy | GitHub Pages |
| Branch | `Build` |

## Entry Points

```
index.html
└── src/main.jsx
    └── src/App.jsx           ← mouse particle effect, scroll-to-top button
        └── src/pages/Page1.jsx
            ├── Sidebar.jsx   ← desktop sticky nav + social icons (lg: visible)
            ├── Header.jsx    ← mobile name + social icons (lg: hidden)
            └── Content.jsx   ← all sections
                ├── About     ← inline paragraph
                ├── Experience.jsx + TechTags.jsx
                ├── Projects  ← Card.jsx × N (inline in Content)
                └── Writing.jsx
                    └── ArticleCard.jsx × N
```

## Component Responsibilities

| Component | File | Responsibility |
|---|---|---|
| `App` | `src/App.jsx` | Mouse particle effect, scroll-to-top |
| `Page1` | `src/pages/Page1.jsx` | Layout shell, ClickSpark wrapper |
| `Sidebar` | `src/components/Sidebar.jsx` | Desktop sticky nav + social icons |
| `Header` | `src/components/Header.jsx` | Mobile name + social icons |
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
