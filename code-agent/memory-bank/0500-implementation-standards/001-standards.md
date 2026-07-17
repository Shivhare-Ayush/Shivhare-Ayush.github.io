# Implementation Standards

## JSX Rules

- No TypeScript in `.jsx` files — TSX only in existing `.tsx` files (ClickSpark)
- PropTypes required on every component — `prop-types` is a dependency
- `export default` at the bottom of every component file
- Data arrays (experiences, articles, techStack) defined at module scope, above the component function
- Imports grouped: React/hooks → third-party → local assets → local components
- No trailing inline comments on JSX prop lines (ESLint flags them)
- Apostrophes in JSX string content must use `&apos;` or be escaped (`\'`)
- Ampersands in JSX string content must use `&amp;`
- En-dash (`–`) for date ranges, never hyphen-minus (`-`)

## Tailwind Rules

- Tailwind utility classes only — no inline styles except `maxHeight`/`overflow` on
  expandable cards (necessary for smooth CSS transition, already established pattern)
- Font families: `font-[Anzo1]` (titles), `font-[Anzo2]` (name/display), `font-[Anzo3]` (body)

## Icon Rules

| Set | Import | Use for |
|---|---|---|
| `react-icons/bi` | `BiLogo*` | Language/framework brand logos |
| `react-icons/si` | `Si*` | DevOps, infra, platform icons + social (Medium, etc.) |
| `react-icons/fa` | `Fa*` | Social links (LinkedIn, GitHub) |
| `react-icons/bs` | `Bs*` | UI chrome (chevrons, arrows, external link) |
| `react-icons/gr` | `Gr*` | Misc (Swift) |

## Card / ArticleCard Pattern

- Expand/collapse: `maxHeight` transition (`20rem` collapsed, `50rem` expanded)
- Disclosure icon: `BsChevronDown` at `text-lg`, positioned `absolute top-7 right-7`
- Rotation: `rotate-0` (collapsed) → `-rotate-180` (expanded) — counter-clockwise
- Transition: `transition-transform duration-500 ease-in-out`
- Container classes: `bg-transparent backdrop-blur-sm border border-white/10 rounded-xl p-7 m-2 hover:border-white/50 transition-all duration-500 ease-in-out relative`

## Tag Component

`Tag({ icon?, title })` — `icon` is optional. When omitted, renders text-only pill with no left margin.
Used for both tech stack icons (with icon) and writing topic tags (without icon).

## Validation Gate

Before any commit or task completion:
```bash
npm run build && npm run lint
```
Both must pass with zero errors and zero warnings.

## Git

- Branch: `Build`
- Commit style: `feat:` for new features, `fix:` for corrections
- Never commit without passing build + lint
