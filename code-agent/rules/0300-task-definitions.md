
# Task Definitions

Tasks provide structured tracking for complex work items.

## Folder Naming

Task folders follow this pattern: `yyyy-mm-dd-sequence`
- Example: `2026-05-29-001`, `2026-05-29-002`

## Required Files Per Task

Every task folder contains these files:

| File | Purpose |
|------|---------|
| `000-goal.md` | What needs to be accomplished |
| `010-analysis.md` | Requirements analysis |
| `020-implementation-standards.md` | Standards for this task |
| `025-spec.md` | Design spec (required for feature tasks; omit for pure fixes) |
| `030-plan.md` | Step-by-step execution plan |
| `050-execution.md` | Progress tracking |
| `999-status.md` | Status: TO_DO, IN_PROGRESS, DONE, or FAILED |

## Spec and Plan Location

All specs and implementation plans live **inside the task folder** — never in external `docs/` directories.
- Spec: `code-agent/tasks/<task-id>/025-spec.md`
- Plan: `code-agent/tasks/<task-id>/030-plan.md`

## Workflow

1. Create task folder with all required files
2. Set status to TO_DO
3. When starting work, set status to IN_PROGRESS
4. Track progress in 050-execution.md
5. When complete, set status to DONE

## Location

Tasks are stored at `../tasks/` relative to this rules folder.