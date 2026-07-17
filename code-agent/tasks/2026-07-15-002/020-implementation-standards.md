# Implementation Standards

## Inherited from Project

- React 18 + Vite 5 + Tailwind CSS 3
- `react-icons` v5 — `si/*` for platform icons
- PropTypes for all component props
- `export default` at bottom of every file
- Data arrays defined at module scope, above the component function
- En-dash (`–`) for date ranges
- No trailing inline comments on JSX prop lines

## Specific to This Task

### ArticleCard expand behaviour
- Collapsed max-height: `20rem` (matches Card.jsx)
- Expanded max-height: `50rem` (matches Card.jsx)
- `transition-all duration-500 ease-in-out` on the container (matches Card.jsx)
- Expand/collapse toggle icon: `BsArrowUpRight` / `BsArrowDownLeft` (matches Card.jsx)

### Platform link row
- Rendered only when `isExpanded === true`
- Each platform: icon + "Read on {name}" text, opens `target="_blank" rel="noopener noreferrer"`
- Hover: `hover:text-purple-400 transition-all duration-300`
- Same icon size as sidebar social icons: `text-2xl`

### Tag optionality
- `Tag.jsx`: change `icon` PropType from `.isRequired` to optional
- Guard render: `{Icon && <Icon className='text-xl' />}`
- Existing callers unaffected (they all pass an icon)

### Writing section spacing
- `className="mb-16"` — same as Projects section in Content.jsx
- `aria-labelledby="writing-heading"` for accessibility
