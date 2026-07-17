# Implementation Standards

## Inherited from project
- React 18 + Vite 5 + Tailwind CSS 3
- react-icons/bs already imported in both files — BsChevronDown is in the same package
- No new packages, no config changes
- ESLint will error on unused imports — must clean up BsArrowUpRight/BsArrowDownLeft

## Chevron Sizing
- Match existing `lg:text-3xl` on the wrapper div — no size change
- Icon inherits size from parent `text-white lg:text-3xl`

## Transition
- `transition-transform duration-500 ease-in-out` on the icon
- Matches the `transition-all duration-500 ease-in-out` on the card container
