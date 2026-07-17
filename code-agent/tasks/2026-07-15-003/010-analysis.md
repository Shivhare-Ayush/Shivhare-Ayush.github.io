# Analysis

## Files Affected

| File | Change |
|---|---|
| `src/components/Card.jsx` | Replace two arrow icons with rotating chevron; guard image render |
| `src/components/ArticleCard.jsx` | Replace two arrow icons with rotating chevron |

## Current Icon Mechanic (both files)

Two absolute-positioned icons cross-fade using opacity:
```jsx
<BsArrowUpRight   className={`... ${isExpanded ? 'opacity-0' : 'opacity-100'}`} />
<BsArrowDownLeft  className={`... ${isExpanded ? 'opacity-100' : 'opacity-0'}`} />
```

## New Icon Mechanic

Single icon with CSS rotate transform:
```jsx
<BsChevronDown
  className={`transition-transform duration-500 ease-in-out ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
/>
```

Tailwind `rotate-180` / `rotate-0` are built-in utility classes — no config change needed.
The `transition-transform duration-500` matches the existing card expand duration.
The wrapper div stays, just needs `text-white lg:text-3xl hover:text-purple-400 transition-all duration-300`.
No `absolute` positioning needed on the icon itself since it's the only child.

## Image Guard

Current (line 35 of Card.jsx):
```jsx
<img src={image} alt={imageAlt} className='rounded-xl' />
```

Fix:
```jsx
{image && <img src={image} alt={imageAlt} className='rounded-xl' />}
```

`image` is already typed as `PropTypes.string` (optional) so this is consistent.
ArticleCard never had an image prop — no change needed there.

## Unused Imports After Change

- `Card.jsx`: `BsArrowUpRight` and `BsArrowDownLeft` become unused — remove from import
- `ArticleCard.jsx`: `BsArrowUpRight` and `BsArrowDownLeft` become unused — remove from import
- `BsBoxArrowUpRight` in `Card.jsx` is still used for the "Visit Project" link — keep it
