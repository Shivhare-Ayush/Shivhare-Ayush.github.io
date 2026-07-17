# Plan

## Steps

1. **Experience.jsx** — update `experiences` array
   - Insert IBM entry at index 0
   - Rewrite Head of Engineering description
   - Rewrite Software Engineer @ Nebula Labs description
   - Fix ACM Education Officer grammar
   - Change all date separators from `-` to `–`

2. **Content.jsx — About section**
   - Replace existing paragraph block with "bottleneck hunter" narrative
   - Use `&apos;` for apostrophes

3. **Content.jsx — Projects section**
   - Add Newsify card (link: https://github.com/Team-12-CS-4485/placeholders-frontend)
   - Add Roguelike / SoulForge card (link: https://github.com/Shivhare-Ayush/SoulForge)
   - Remove Self-Hosted NAS card (no public repo)
   - Fix remaining placeholder links on existing cards

4. **TechTags.jsx** — expand `techStack` array
   - Import `SiDocker, SiPostgresql, SiFastapi, SiLinux, SiAmazonwebservices, SiLua, SiRoblox` from `react-icons/si`
   - Add entries for Docker, PostgreSQL, FastAPI, Linux, AWS, Lua, Roblox
   - Reorder: languages first, then frameworks, then infra/tooling

5. **Sidebar.jsx**
   - Import `SiMedium` from `react-icons/si`
   - Add Medium icon link (`https://medium.com/@ayushshivhare`)
   - Update subtitle to `CS @ UTD · Software Developer Intern @ IBM`
   - Fix LinkedIn double-slash

6. **Header.jsx** (mobile header — mirrors Sidebar social links)
   - Import `SiMedium`
   - Add Medium icon link
   - Fix LinkedIn double-slash

7. **Verify**
   - `npm run build` → zero errors
   - `npm run lint` → zero warnings

## Pending (not yet done)
- [x] Confirmed Medium handle is `@ayush-shivhare` — URL updated in Sidebar and Header
- [ ] Add Newsify deployed Vercel URL to card `link` once the project is live
- [ ] Add screenshot images for Newsify and SoulForge once available (drop into `src/assets/`, wire up `image` prop on Card)
- [ ] Consider adding a dedicated IBM project card once internship work is public or summarisable
