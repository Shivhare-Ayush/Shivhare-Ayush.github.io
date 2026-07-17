# Goal: Fix Theme Propagation — All Text and Borders Respond to Mode

The CSS variable system exists and is correct. The problem is that most
components use hardcoded Tailwind color classes (text-white, border-white/10,
text-slate-100, text-gray-500) that bypass the CSS variables entirely.

When light mode is active these elements stay white/dark-border colored
instead of adopting var(--text) and var(--border).

## Fix

Replace every hardcoded color class that should respond to theme with the
Tailwind arbitrary-value syntax pointing at the CSS variable:
  text-white → text-[var(--text)]
  border-white/10 → border-[var(--border)]
  text-slate-100 / text-gray-100 → text-[var(--text)]
  text-gray-500 → text-[var(--text-muted)]

Also fix two hardcoded hex values in index.css (experience-node, experience-line).

## Files

- src/components/Sidebar.jsx
- src/components/Header.jsx
- src/components/Content.jsx
- src/components/Experience.jsx
- src/components/Card.jsx
- src/components/ArticleCard.jsx
- src/components/Tag.jsx
- src/index.css

## Success Criteria

- Switching to light mode changes all body text, borders, dates, descriptions, tags
- No white-on-white or invisible text in either mode
- npm run build && npm run lint pass with zero errors
