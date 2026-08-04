# Specification: Portfolio Content & UX Refactor

## 1. About Me Bio Refactor (`src/components/Content.jsx`)

### Proposed Text Structure:
```html
<p>
  I am a Software Developer Intern at IBM ATX and a Computer Science student at UT Dallas, specializing in cloud platform infrastructure, distributed systems, and identity control planes. My work focuses on removing operational friction—architecting automated self-service APIs, designing resilient async reconciliation systems, and driving engineering standards across developer organizations.
</p>
<p className="mt-4">
  Outside of software engineering, I train in Taekwondo, play competitive Badminton, and explore topics in system design and real-world mechanisms.
</p>
```

---

## 2. Quantified Experience Metrics (`src/components/Experience.jsx`)

### Updated Entry Data:
1. **IBM — Software Developer Intern** (`May 2026 – August 2026`):
   > "Architected a self-service REST API (Jakarta EE / Java) for cloud account administrators to configure OIDC and SAML identity providers automatically. Designed an async job model and drift-detection reconciliation loop for the Custom IdP control plane, eliminating 100% of manual SRE onboarding dependencies and reducing IdP setup latency from days to under a minute."

2. **Nebula Labs — Head of Engineering** (`May 2025 – Present`):
   > "Led engineering strategy and code review standards across active projects, managing 20+ student developers. Conducted architectural trade-off workshops and maintained platform reliability for UTDTrends, a course analytics platform serving 20,000+ unique UTD students."

3. **ACM — Education Officer** (`January 2025 – Present`):
   > "Spearheaded curriculum and operational scaling for ACM's Mentorship Program, growing student participation by over 40% across semester cohorts and delivering hands-on API development workshops."

4. **Nebula Labs — Software Engineer** (`August 2024 – May 2025`):
   > "Developed core frontend course analytics interfaces and search workflows for UTDTrends, improving page load efficiency and component modularity for 20,000+ student users."

5. **Coppell ISD — Mobile Developer** (`August 2022 – May 2023`):
   > "Engineered responsive web applications for district administration and student services, supporting thousands of daily district users."

---

## 3. Experience & Project Cross-Linking (`src/components/Experience.jsx` & `src/components/Card.jsx`)

### Solution:
- In `Experience.jsx`, add a clickable project badge to entries that have corresponding project cards:
  ```jsx
  {experience.relatedProject && (
    <a
      href={`#project-${experience.relatedProjectSlug}`}
      onClick={(e) => {
        e.preventDefault();
        const el = document.getElementById(`project-${experience.relatedProjectSlug}`);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }}
      className="inline-flex items-center gap-1 text-xs font-[Anzo1] text-purple-400 hover:underline mt-2"
    >
      <span>Related Project: {experience.relatedProject}</span>
      <BsArrowRight className="text-xs" />
    </a>
  )}
  ```
- In `Content.jsx`, assign matching `id` anchors to cards (e.g. `id="project-trends"`, `id="project-api-demo"`).

---

## 4. Project Card Expandability Affordance (`src/components/Card.jsx`)

### Solution:
- Update the expand affordance in `Card.jsx` to be clear and prominent:
  1. Top-right trigger area: Combine `BsChevronDown` with an explicit label:
     ```jsx
     <div className="absolute top-7 right-7 flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-purple-400 transition-all duration-300">
       <span className="font-[Anzo1] hidden sm:inline">{isExpanded ? 'Show less' : 'Expand details'}</span>
       <BsChevronDown className={`text-base transition-transform duration-500 ${isExpanded ? '-rotate-180' : 'rotate-0'}`} />
     </div>
     ```
  2. Bottom hint bar (when collapsed): Show a subtle bottom callout:
     ```jsx
     {!isExpanded && (
       <div className="mt-3 text-xs text-[var(--text-muted)] flex items-center gap-1 font-[Anzo1] group-hover:text-purple-400">
         <span>Click to read full architecture details</span>
         <span>↓</span>
       </div>
     )}
     ```
  3. Visual feedback: Add hover outline/glow to signal interactive card behavior.
