# Changelog

All notable changes to this portfolio site are documented here.
Entries are grouped by version/session and ordered newest first.

---

## [4.0] — 2026-07-17

### Added
- **Profile photo** in desktop sidebar — 160px circle next to name, `justify-between` layout, theme-aware border ring
- **Writing section** — fourth navigation anchor with `ArticleCard` component; hand-curated articles with expandable platform links (Medium icon row); extensible `platforms[]` array per article
- **Theme system** — fully detachable light/dark mode + 10 gradient presets for mouse particle effect; persisted to `localStorage`; `data-theme` attribute drives all CSS variables
- **Newsify project card** — live link to `newsifyutd.vercel.app`, compressed screenshot (118KB JPG)
- **IBM internship** added to Experience as top entry (May–August 2026)
- **AGENTS.md** — mandatory agent entry point for AI-assisted development sessions
- **code-agent/** system — rules, memory bank, and task folders for persistent AI session context

### Changed
- **About section** rewritten around "bottleneck hunter" identity narrative; IBM ATX and UTD named explicitly
- **Experience entries** — all descriptions upgraded; UTDTrends mentioned for Nebula Labs roles; en-dash date separators
- **Tech stack** expanded — Java, FastAPI, PostgreSQL, Docker, AWS, Lua, Roblox added
- **Name gradient** now mode-aware — Neon Storm (`#4B0082 → #FF1493 → #FE865B`) in dark, Soft Horizon (`#55A8F7 → #FFEDD5 → #FF6B6B`) in light
- **Card disclosure icon** — replaced two-icon opacity-swap with single `BsChevronDown` rotating counter-clockwise on expand
- **Card images** — constrained to `h-48` fixed container with `object-cover`; `imagePosition` prop (`top`/`center`/`bottom`) controls crop anchor; static class lookup prevents Tailwind purge
- **Particle trail** — `lastParticleTime` moved from `useState` to `useRef` (eliminates extra re-render per spawn); interval 16ms → 8ms; cap 100 → 150; blur 10px → 15px
- **Scroll-to-top button** — replaced hardcoded `bg-purple-700` with frosted glass style matching site card aesthetic
- **All text and border colors** wired to CSS variables (`var(--text)`, `var(--border)`, `var(--text-muted)`) — previously hardcoded Tailwind classes bypassed theme switching
- **Medium link** corrected to `@ayush-shivhare`; Medium icon added to Sidebar and Header
- **Sidebar subtitle** updated to `CS @ UTD · Software Developer Intern @ IBM`
- **Tag component** — `icon` prop made optional; text-only pills now supported for writing topic tags

### Fixed
- `node_modules/.package-lock.json` was being tracked by git — untracked and removed
- `SoulForge` (Roguelike) and Newsify project cards now have correct repository links
- Experience timeline node and line colors now use CSS variables instead of hardcoded hex

---

## [3.0] — 2025-07-30 / 2025-09-07

### Added
- New content update — project descriptions and experience entries refreshed

### Fixed
- Keyboard accessibility improvements across interactive elements
- Various bug fixes
- Lint cleanup

---

## [2.0] — 2024-11-01 / 2024-11-25

### Added
- Mobile support — responsive layout for small screens
- Social icons (LinkedIn, GitHub) added to Sidebar and Header
- Mouse-tracking particle effect background
- Grid/dot pattern background overlay

### Changed
- Background redesigned — deep charcoal gradient replacing flat color
- Name display redesigned — large gradient text with Anzo font family
- Card content updated
- Fixed visual bugs on different screen sizes

---

## [1.0] — 2024-10-25 / 2024-10-26

### Added
- Initial commit — React + Vite + Tailwind CSS project scaffold
- GitHub Actions workflow — auto-deploys `Build` branch to GitHub Pages
- Single-page layout with Sidebar, Content, and Page1 components
- Experience, Projects, and TechTags sections
- Custom Anzo and Arjun font families
- Trends, API Workshop, and Portfolio project cards
