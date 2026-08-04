# Step-by-Step Execution Plan

1. **Step 1: Bio Refactor in `Content.jsx`**:
   - Update `<section id="about">` bio paragraph to professional elevator pitch structure.

2. **Step 2: Experience Metrics in `Experience.jsx`**:
   - Update `experiences` array with quantified impact metrics for IBM, Nebula Labs, ACM, Coppell ISD.

3. **Step 3: Cross-Linking Experience & Projects**:
   - Add `relatedProject` fields to experience objects.
   - Add anchor IDs (`id="project-..."`) to `<Card>` instances in `Content.jsx`.
   - Render related project link badges in `Experience.jsx`.

4. **Step 4: Card Discoverability in `Card.jsx`**:
   - Update expand trigger with `"Expand details"` / `"Show less"` text label beside `BsChevronDown`.
   - Add bottom hint bar when collapsed.
   - Test mouse and keyboard accessibility (`Enter`/`Space`).

5. **Step 5: Verification**:
   - Run `npm run build && npm run lint`.
   - Update `050-execution.md` and mark `999-status.md` as `DONE`.
