# Goal: Writing Section with Article Cards

Add a "Writing" section to the portfolio — a fourth navigation anchor alongside
About / Experience / Projects — that displays hand-curated article cards.

Each card shows the article title, excerpt, date, topic tags, and an expandable
platform link row (Medium icon → URL), designed so adding a second platform
(Dev.to, Substack, etc.) is a one-line data change.

## Success Criteria

- "Writing" appears as a fourth nav item in Sidebar (desktop) and Header (mobile)
- Clicking it smooth-scrolls to `#writing`
- At least one article card renders with real content
- Cards expand/collapse identically to existing project cards
- Platform links open in a new tab
- Tags render as pills (text only, no icon — writing topics ≠ tech stack)
- `npm run build` and `npm run lint` pass with zero errors
- Adding a second platform to an article = one object pushed into `platforms[]`
