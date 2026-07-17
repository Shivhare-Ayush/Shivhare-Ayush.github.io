# Goal: UI Polish — Scroll Button, Card Images, Newsify Link

Three small polish items bundled together.

## 1. Scroll-to-top button theme

Button was hardcoded `bg-purple-700 text-white` — replaced with site-consistent
frosted glass style: `bg-transparent backdrop-blur-sm border border-[var(--border)]
text-[var(--text)] hover:text-purple-400 hover:border-purple-400`.

## 2. Card image constraints

Cards had no image size safety — large images broke layout.
- Wrapped `<img>` in `w-full h-48 rounded-xl overflow-hidden` container
- `object-cover` + `object-center` default — fixed height regardless of source dimensions
- Added `imagePosition` prop (`"top"` | `"center"` | `"bottom"` | `"left"` | `"right"`)
- Used static class lookup map to avoid Tailwind purge stripping dynamic classes
- Set `imagePosition="top"` on Newsify, API Workshop, Portfolio cards

## 3. Newsify live link + screenshot

- Replaced GitHub placeholder link with `https://newsifyutd.vercel.app`
- Added `newsify.jpg` (118KB) screenshot asset; removed original `newsify.png` (1.3MB)

## Files
- src/App.jsx
- src/components/Card.jsx
- src/components/Content.jsx
- src/assets/newsify.jpg

## Status
DONE
