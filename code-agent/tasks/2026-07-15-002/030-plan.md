# Writing Section Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans or superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Add a hand-curated Writing section with expandable article cards and extensible platform links.

**Architecture:** New `Writing.jsx` + `ArticleCard.jsx` components follow existing `Experience.jsx` + `Card.jsx` patterns exactly. Data lives in a module-scope array. `Tag.jsx` gets a one-line icon-optional guard. `Content.jsx` and `Sidebar.jsx` each get one new block.

**Tech Stack:** React 18, Vite 5, Tailwind CSS 3, react-icons v5 (si/*)

## Global Constraints

- All icon imports from `react-icons/si` (already a dependency, no install needed)
- `prop-types` for all component props — already a dependency
- En-dash (`–`) for date ranges, never hyphen-minus
- No trailing inline comments on JSX prop lines (ESLint rule)
- `npm run build` and `npm run lint` must pass after every task
- `export default` at bottom of every component file
- Tailwind classes only — no inline styles except where Card.jsx already uses them (maxHeight, overflow)

---

## File Map

| Action | File | Responsibility |
|---|---|---|
| Modify | `src/components/Tag.jsx` | Make `icon` prop optional |
| Create | `src/components/ArticleCard.jsx` | Expandable article card |
| Create | `src/components/Writing.jsx` | Article data array + card list |
| Modify | `src/components/Content.jsx` | Import Writing, add `#writing` section |
| Modify | `src/components/Sidebar.jsx` | Add "Writing" nav link |

---

## Task 1: Make `Tag` icon optional

**Files:**
- Modify: `src/components/Tag.jsx`

**Interfaces:**
- Produces: `Tag({ icon?, title })` — icon is now optional; all existing callers unchanged

- [ ] **Step 1: Edit `Tag.jsx`**

Replace the full file content with:

```jsx
//import React from 'react';
import PropTypes from 'prop-types';

function Tag({ icon: Icon, title }) {
  return (
    <div className='flex items-center bg-transparent text-gray-100 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 m-1'>
      {Icon && <Icon className='text-xl' />}
      <span className={`font-[Anzo3]${Icon ? ' ml-2' : ''}`}>{title}</span>
    </div>
  );
}
Tag.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
};
export default Tag;
```

- [ ] **Step 2: Verify build + lint**

```bash
npm run build && npm run lint
```

Expected: zero errors, zero warnings.

- [ ] **Step 3: Commit**

```bash
git add src/components/Tag.jsx
git commit -m "feat: make Tag icon prop optional for text-only pills"
```

---

## Task 2: Create `ArticleCard.jsx`

**Files:**
- Create: `src/components/ArticleCard.jsx`

**Interfaces:**
- Consumes: `Tag({ title })` from `src/components/Tag.jsx` (no icon)
- Consumes: `BsArrowUpRight`, `BsArrowDownLeft`, `BsBoxArrowUpRight` from `react-icons/bs`
- Produces: `ArticleCard({ title, excerpt, date, tags, platforms })` — used by `Writing.jsx`

- [ ] **Step 1: Create `src/components/ArticleCard.jsx`**

```jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsArrowUpRight, BsArrowDownLeft } from 'react-icons/bs';
import Tag from './Tag';

function ArticleCard({ title, excerpt, date, tags, platforms }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div
      className='bg-transparent backdrop-blur-sm border border-white/10 rounded-xl p-7 m-2 hover:border-white/50 transition-all duration-500 ease-in-out relative'
      onClick={toggleExpand}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') toggleExpand();
      }}
      style={{
        cursor: 'pointer',
        maxHeight: isExpanded ? '50rem' : '20rem',
        overflow: 'hidden',
      }}
    >
      <div className='absolute top-2 right-2 text-white lg:text-3xl hover:text-purple-400 transition-all duration-300 ease-in-out'>
        <BsArrowUpRight
          className={`absolute top-2 right-2 transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-0' : 'opacity-100'}`} />
        <BsArrowDownLeft
          className={`absolute top-2 right-2 transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      <h3 className='text-xl font-bold mb-1 font-[Anzo1]'>{title}</h3>
      <p className='text-sm text-gray-500 mb-2 font-[Anzo3]'>{date}</p>

      <div className='flex flex-wrap mb-2'>
        {tags.map((tag, i) => (
          <Tag key={i} title={tag} />
        ))}
      </div>

      <p className='text-slate-100 text-sm lg:text-base md:text-md m-4 font-[Anzo3]'>{excerpt}</p>

      {isExpanded && (
        <div className='flex flex-wrap gap-3 mt-4 ml-4'>
          {platforms.map((platform, i) => {
            const PlatformIcon = platform.icon;
            return (
              <a
                key={i}
                href={platform.url}
                target='_blank'
                rel='noopener noreferrer'
                onClick={e => e.stopPropagation()}
                className='flex items-center gap-2 bg-transparent text-gray-100 underline px-3 hover:text-purple-400 transition-all duration-300 ease-in-out'
                aria-label={`Read on ${platform.name}`}
              >
                <PlatformIcon className='text-2xl' />
                Read on {platform.name}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

ArticleCard.propTypes = {
  title:   PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  date:    PropTypes.string.isRequired,
  tags:    PropTypes.arrayOf(PropTypes.string).isRequired,
  platforms: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      url:  PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ArticleCard;
```

- [ ] **Step 2: Verify build + lint**

```bash
npm run build && npm run lint
```

Expected: zero errors, zero warnings.

- [ ] **Step 3: Commit**

```bash
git add src/components/ArticleCard.jsx
git commit -m "feat: add ArticleCard component for writing section"
```

---

## Task 3: Create `Writing.jsx`

**Files:**
- Create: `src/components/Writing.jsx`

**Interfaces:**
- Consumes: `ArticleCard` from `./ArticleCard`
- Consumes: `SiMedium` from `react-icons/si`
- Produces: `Writing()` — default export, used by `Content.jsx`

- [ ] **Step 1: Create `src/components/Writing.jsx`**

```jsx
//import React from 'react';
import { SiMedium } from 'react-icons/si';
import ArticleCard from './ArticleCard';

const articles = [
  {
    title: 'Your First Article Title',
    excerpt: 'A short excerpt that hooks the reader — two or three sentences summarising what the article covers and why it matters.',
    date: 'July 2026',
    tags: ['Career', 'Engineering'],
    platforms: [
      {
        name: 'Medium',
        icon: SiMedium,
        url: 'https://medium.com/@ayush-shivhare',
      },
    ],
  },
];

function Writing() {
  return (
    <div className="space-y-4">
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </div>
  );
}

export default Writing;
```

> **Note:** Replace the placeholder article with real content before shipping.
> Each new article = one new object pushed into the `articles` array. Zero other files change.
> Adding Dev.to: push `{ name: 'Dev.to', icon: SiDevdotto, url: '...' }` into that article's `platforms` array and import `SiDevdotto` at the top.

- [ ] **Step 2: Verify build + lint**

```bash
npm run build && npm run lint
```

Expected: zero errors, zero warnings.

- [ ] **Step 3: Commit**

```bash
git add src/components/Writing.jsx
git commit -m "feat: add Writing component with article data array"
```

---

## Task 4: Wire Writing into `Content.jsx` and `Sidebar.jsx`

**Files:**
- Modify: `src/components/Content.jsx`
- Modify: `src/components/Sidebar.jsx`

**Interfaces:**
- Consumes: `Writing` from `./Writing.jsx`

- [ ] **Step 1: Add import and section to `Content.jsx`**

Add the import line after the existing `Experience` import:

```jsx
import Writing from './Writing.jsx'
```

Add the Writing section after the closing `</section>` of the projects section (before the closing `</main>`):

```jsx
<section id="writing" className="mb-16" aria-labelledby="writing-heading">
  <h2 id="writing-heading" className="text-2xl font-semibold mb-4">Writing</h2>
  <Writing />
</section>
```

- [ ] **Step 2: Add nav link to `Sidebar.jsx`**

Add after the Projects `<a>` block inside `<nav>`:

```jsx
<a
  href="#writing"
  onClick={e => {
    e.preventDefault();
    document.getElementById('writing').scrollIntoView({ behavior: 'smooth' });
  }}
  className="hover:text-purple-400 hover:scale-125 hover:translate-x-5 transition-all duration-200 ease-in-out"
>
  Writing
</a>
```

- [ ] **Step 3: Verify build + lint**

```bash
npm run build && npm run lint
```

Expected: zero errors, zero warnings.

- [ ] **Step 4: Commit**

```bash
git add src/components/Content.jsx src/components/Sidebar.jsx
git commit -m "feat: add Writing section and nav link"
```

---

## Post-Implementation Checklist

- [ ] Replace placeholder article in `Writing.jsx` with real article title, excerpt, date, and correct Medium URL
- [ ] Smoke-test in browser: nav link scrolls to section, card expands, "Read on Medium" opens correct URL in new tab
- [ ] Update `code-agent/tasks/2026-07-15-002/050-execution.md` with completion notes
- [ ] Set `code-agent/tasks/2026-07-15-002/999-status.md` to `DONE`
