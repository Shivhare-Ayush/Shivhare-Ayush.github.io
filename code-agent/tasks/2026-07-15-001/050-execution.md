# Execution Log

## Step 1 — Experience.jsx ✅
- Added IBM Software Developer Intern entry at index 0 (May 2026 – August 2026)
- Rewrote Head of Engineering: Maintainer Team, design-tradeoffs workshops, 20+ engineers, UTDTrends
- Rewrote Software Engineer @ Nebula Labs: added UTDTrends mention
- Fixed ACM Education Officer grammar (`an` → `a`, `its` → `it's`)
- Changed all date separators from `-` to `–`

## Step 2 — Content.jsx About section ✅
- Replaced 3-paragraph generic origin story with single "bottleneck hunter" narrative
- IBM ATX and UTD named explicitly
- Taekwondo / Badminton / reading retained
- `&apos;` used for apostrophe in JSX

## Step 3 — Content.jsx Projects section ✅
- Added Newsify card (link: https://github.com/Team-12-CS-4485/placeholders-frontend)
- Added Roguelike / SoulForge card (link: https://github.com/Shivhare-Ayush/SoulForge)
- Removed Self-Hosted NAS card (no public repo — per user instruction)
- Existing Trends / API Workshop / Portfolio cards preserved; trailing inline comments removed

## Step 4 — TechTags.jsx ✅
- Imported `SiDocker, SiPostgresql, SiFastapi, SiLinux, SiAmazonwebservices, SiLua, SiRoblox` from `react-icons/si`
- Added 7 new tech entries
- Reordered stack: languages first (Java, Python, Go, JS, TS, Lua), then frameworks, then infra

## Step 5 — Sidebar.jsx ✅
- Imported `SiMedium` from `react-icons/si`
- Added Medium icon link (https://medium.com/@ayushshivhare)
- Updated subtitle to `CS @ UTD · Software Developer Intern @ IBM`
- Fixed LinkedIn double-slash

## Step 6 — Header.jsx ✅
- Imported `SiMedium`
- Added Medium icon link
- Fixed LinkedIn double-slash

## Step 7 — Verification ✅
- `npm run build` → 59 modules, zero errors, 199 kB JS bundle
- `npm run lint` → zero warnings

## Pending Items
- [x] Confirmed Medium handle is `@ayush-shivhare` — updated URL in Sidebar.jsx and Header.jsx
- [ ] Add Newsify Vercel URL to Content.jsx `link` prop once deployed
- [ ] Add screenshot images for Newsify and SoulForge (drop into `src/assets/`, add `image` prop to Card)
- [ ] Consider IBM project card once internship work is public or summarisable
