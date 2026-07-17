# Plan: Chevron + Image Guard

**Goal:** Rotating chevron disclosure icon in Card + ArticleCard; image guard in Card.

**Architecture:** Two targeted surgical edits — one per component file. No new files, no new packages.

**Tech Stack:** React 18, Tailwind CSS 3 (rotate-180 utility), react-icons/bs (BsChevronDown)

## Global Constraints
- Remove unused imports — ESLint will flag them
- `npm run build && npm run lint` must pass after each task
- Do not change any other behaviour in either component

---

## File Map

| Action | File |
|---|---|
| Modify | `src/components/Card.jsx` |
| Modify | `src/components/ArticleCard.jsx` |

---

## Task 1: Update `Card.jsx`

**Files:**
- Modify: `src/components/Card.jsx`

- [ ] **Step 1: Update import line**

Replace:
```jsx
import { BsArrowUpRight, BsArrowDownLeft, BsBoxArrowUpRight } from 'react-icons/bs';
```
With:
```jsx
import { BsChevronDown, BsBoxArrowUpRight } from 'react-icons/bs';
```

- [ ] **Step 2: Replace icon markup**

Replace:
```jsx
        <div className='absolute top-2 right-2 text-white lg:text-3xl hover:text-purple-400 transition-all duration-300 ease-in-out'>
          <BsArrowUpRight
            className={`absolute top-2 right-2 transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-0' : 'opacity-100'}`} />
          <BsArrowDownLeft
            className={`absolute top-2 right-2 transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100' : 'opacity-0'}`} />
        </div>
```
With:
```jsx
        <div className='absolute top-2 right-2 text-white lg:text-3xl hover:text-purple-400 transition-all duration-300 ease-in-out'>
          <BsChevronDown
            className={`transition-transform duration-500 ease-in-out ${isExpanded ? 'rotate-180' : 'rotate-0'}`} />
        </div>
```

- [ ] **Step 3: Guard the image render**

Replace:
```jsx
        <img src={image} alt={imageAlt} className='rounded-xl' />
```
With:
```jsx
        {image && <img src={image} alt={imageAlt} className='rounded-xl' />}
```

- [ ] **Step 4: Verify build + lint**

```bash
npm run build && npm run lint
```

Expected: zero errors, zero warnings.

- [ ] **Step 5: Commit**

```bash
git add src/components/Card.jsx
git commit -m "feat: rotating chevron icon and image guard in Card"
```

---

## Task 2: Update `ArticleCard.jsx`

**Files:**
- Modify: `src/components/ArticleCard.jsx`

- [ ] **Step 1: Update import line**

Replace:
```jsx
import { BsArrowUpRight, BsArrowDownLeft } from 'react-icons/bs';
```
With:
```jsx
import { BsChevronDown } from 'react-icons/bs';
```

- [ ] **Step 2: Replace icon markup**

Replace:
```jsx
      <div className='absolute top-2 right-2 text-white lg:text-3xl hover:text-purple-400 transition-all duration-300 ease-in-out'>
        <BsArrowUpRight
          className={`absolute top-2 right-2 transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-0' : 'opacity-100'}`} />
        <BsArrowDownLeft
          className={`absolute top-2 right-2 transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100' : 'opacity-0'}`} />
      </div>
```
With:
```jsx
      <div className='absolute top-2 right-2 text-white lg:text-3xl hover:text-purple-400 transition-all duration-300 ease-in-out'>
        <BsChevronDown
          className={`transition-transform duration-500 ease-in-out ${isExpanded ? 'rotate-180' : 'rotate-0'}`} />
      </div>
```

- [ ] **Step 3: Verify build + lint**

```bash
npm run build && npm run lint
```

Expected: zero errors, zero warnings.

- [ ] **Step 4: Commit**

```bash
git add src/components/ArticleCard.jsx
git commit -m "feat: rotating chevron icon in ArticleCard"
```
