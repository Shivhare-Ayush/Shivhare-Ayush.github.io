# Design Spec: Writing Section

## Overview

A hand-curated Writing section rendered as a vertical stack of `ArticleCard`
components. Data lives in a `articles` array inside `Writing.jsx`. No external
API, no build-time fetching — adding or editing a post means editing one object
in that array.

---

## Component Tree

```
Content.jsx
├── ... (About, Experience, Projects — unchanged)
└── <section id="writing">
    └── Writing.jsx
        └── ArticleCard.jsx  (×N)
            └── Tag.jsx      (×M, icon-optional)
```

---

## Data Shape

```js
// inside Writing.jsx
const articles = [
  {
    title: 'Article Title',
    excerpt: 'Two or three sentences summarising the article for the reader.',
    date: 'July 2026',
    tags: ['Tag1', 'Tag2'],
    platforms: [
      {
        name: 'Medium',
        icon: SiMedium,
        url: 'https://medium.com/@ayush-shivhare/article-slug',
      },
    ],
  },
];
```

**Field rules:**
- `title` — string, required
- `excerpt` — string, required, 1–4 sentences
- `date` — string, human-readable (e.g. `'July 2026'`), required
- `tags` — string[], required, may be empty array
- `platforms` — array of `{ name: string, icon: ReactIconComponent, url: string }`, required, min 1 item

---

## `ArticleCard.jsx`

**Props:**
```js
ArticleCard.propTypes = {
  title:     PropTypes.string.isRequired,
  excerpt:   PropTypes.string.isRequired,
  date:      PropTypes.string.isRequired,
  tags:      PropTypes.arrayOf(PropTypes.string).isRequired,
  platforms: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      url:  PropTypes.string.isRequired,
    })
  ).isRequired,
};
```

**Collapsed state** (maxHeight `20rem`):
- Title (`font-[Anzo1]`, `text-xl font-bold`)
- Date (`text-sm text-gray-500`)
- Tag pills (reuse `Tag`, no icon)
- Excerpt text (truncated by overflow hidden)
- `BsArrowUpRight` icon top-right

**Expanded state** (maxHeight `50rem`):
- All of the above, fully visible
- Platform link row: for each platform, an `<a>` with `PlatformIcon + "Read on {name}"` 
- `BsArrowDownLeft` icon top-right

**Styling:** identical to `Card.jsx` container —
`bg-transparent backdrop-blur-sm border border-white/10 rounded-xl p-7 m-2 hover:border-white/50 transition-all duration-500 ease-in-out relative`

---

## `Writing.jsx`

```jsx
function Writing() {
  return (
    <div className="space-y-4">
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </div>
  );
}
```

---

## `Tag.jsx` modification

Make `icon` optional:

```jsx
// before
function Tag({ icon: Icon, title }) {
  return (
    <div className='...'>
      <Icon className='text-xl' />
      <span className='ml-2 font-[Anzo3]'>{title}</span>
    </div>
  );
}
Tag.propTypes = {
  icon: PropTypes.elementType.isRequired,
  ...
};

// after
function Tag({ icon: Icon, title }) {
  return (
    <div className='...'>
      {Icon && <Icon className='text-xl' />}
      <span className={`font-[Anzo3]${Icon ? ' ml-2' : ''}`}>{title}</span>
    </div>
  );
}
Tag.propTypes = {
  icon: PropTypes.elementType,   // no longer .isRequired
  ...
};
```

---

## `Content.jsx` modification

Add import and section after Projects:

```jsx
import Writing from './Writing.jsx'

// after the projects section:
<section id="writing" className="mb-16" aria-labelledby="writing-heading">
  <h2 id="writing-heading" className="text-2xl font-semibold mb-4">Writing</h2>
  <Writing />
</section>
```

---

## Navigation modifications

### `Sidebar.jsx`
Add after the Projects `<a>`:
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

### `Header.jsx`
No nav links in Header (mobile header only shows name + social icons) — no change needed.

---

## Extensibility Contract

Adding a new platform to an existing article:
```js
platforms: [
  { name: 'Medium',  icon: SiMedium,   url: 'https://...' },
  { name: 'Dev.to',  icon: SiDevdotto, url: 'https://...' },  // ← one line
],
```

Adding a new article = one new object in the `articles` array in `Writing.jsx`. Zero other files change.
