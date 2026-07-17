# Adding Content

## Adding an Experience Entry

Edit `src/components/Experience.jsx` — push a new object into the `experiences` array at module scope:

```js
{
  title: 'Job Title',
  company: 'Company Name',
  description: 'What you did.',
  date: 'Month YYYY – Month YYYY',   // en-dash, not hyphen
}
```

Most recent entry goes at index 0 (top of timeline).

## Adding a Project Card

Edit `src/components/Content.jsx` — add a `<Card>` inside the `#projects` section:

```jsx
<Card
  title="Project Name"
  techNames={["React", "Python"]}          // must match titles in TechTags.jsx
  description="What it does."
  image={importedImage}                     // omit if no screenshot
  imageAlt="Description for screen readers" // always required
  link="https://github.com/..."
/>
```

If `image` is omitted, nothing renders in that slot (guard is in place).

## Adding a Writing Article

Edit `src/components/Writing.jsx` — push a new object into the `articles` array:

```js
{
  title: 'Article Title',
  excerpt: 'Two to three sentences hooking the reader.',
  date: 'Month YYYY',
  tags: ['Tag1', 'Tag2'],
  platforms: [
    { name: 'Medium', icon: SiMedium, url: 'https://medium.com/@ayush-shivhare/slug' },
  ],
}
```

Adding a second platform = push one more object into `platforms`. Import the icon from `react-icons/si`.
Available platform icons: `SiMedium`, `SiDevdotto`, `SiSubstack`, `SiHashnode`.

## Adding a Tech Stack Icon

Edit `src/components/TechTags.jsx`:
1. Import the icon (prefer `react-icons/bi` for brand logos, `react-icons/si` for others)
2. Add `{ icon: IconName, title: 'Display Name' }` to the `techStack` array

The `title` string must match exactly what is passed as `techNames` in Card props.
