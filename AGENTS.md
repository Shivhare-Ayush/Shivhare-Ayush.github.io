# AGENTS.md — Agent Orientation for This Repository

This file is the mandatory entry point for any AI agent working in this repo.
Read it completely before doing anything else.

---

## Step 1 — Read All Rules

Read every file in `code-agent/rules/` before taking any action:

```
code-agent/rules/0200-memory-bank.md        ← memory bank structure
code-agent/rules/0300-task-definitions.md   ← task folder schema
code-agent/rules/0500-code-instructions.md  ← code conventions
code-agent/rules/9999-hook-after-read.md    ← post-read actions
```

---

## Step 2 — Read All Memory Bank Files

Read every file in `code-agent/memory-bank/` before taking any action.
These are your persistent knowledge about the project — treat them as ground truth.

```
code-agent/memory-bank/0100-context/
code-agent/memory-bank/0200-architecture/
code-agent/memory-bank/0300-use-cases/
code-agent/memory-bank/0500-implementation-standards/
```

---

## Step 3 — Check for In-Progress Tasks

List all folders in `code-agent/tasks/`. For each, read `999-status.md`.

- If any task is `IN_PROGRESS` → resume it immediately, do not start new work
- If all tasks are `TO_DO` or `DONE` → proceed with the user's request

---

## Step 4 — Work

Execute the user's request following all rules and standards.

---

## Self-Management Rules (Non-Negotiable)

These apply at the end of EVERY session, without being asked:

### Always update the task log
After any meaningful work, update `code-agent/tasks/<task-id>/050-execution.md`
with what was done, and set `999-status.md` to the correct status:
- `TO_DO` — not started
- `IN_PROGRESS` — started but incomplete (pending items remain)
- `DONE` — all steps complete, build passes, no open items
- `FAILED` — blocked, needs human intervention

### Always update the memory bank when something new is learned
Update the relevant memory bank file when:
- A new component, pattern, or convention is established
- The tech stack changes
- A new workflow or process is adopted
- A design decision is made that future agents should know

Do not wait to be asked. Update it as part of completing the work.

### Always create a task for non-trivial work
Any change touching more than one file, or requiring a plan, gets a task folder.
Task folder naming: `code-agent/tasks/YYYY-MM-DD-NNN/`
Required files: `000-goal.md`, `010-analysis.md`, `020-implementation-standards.md`,
`025-spec.md` (feature work), `030-plan.md`, `050-execution.md`, `999-status.md`

Specs and plans live inside the task folder — never in external `docs/` directories.

### Always verify before marking DONE
`npm run build && npm run lint` must pass with zero errors before any task is `DONE`.

---

## Project Quick Reference

| Thing | Value |
|---|---|
| Framework | React 18 + Vite 5 + Tailwind CSS 3 |
| Deploy | GitHub Pages via `.github/workflows/` |
| Branch | `Build` |
| Entry point | `src/pages/Page1.jsx` |
| Key components | `Sidebar`, `Header`, `Content`, `Experience`, `Writing`, `Card`, `ArticleCard`, `TechTags`, `Tag` |
| Icons | `react-icons` v5 — `bi/*` brand logos, `si/*` Simple Icons, `fa/*` social, `bs/*` UI chrome |
| Owner | Ayush Shivhare — CS @ UTD, Software Developer Intern @ IBM ATX |

Full architecture detail: `code-agent/memory-bank/0200-architecture/`
