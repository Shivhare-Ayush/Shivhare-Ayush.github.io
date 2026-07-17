# Memory Bank Structure

The Memory Bank is the agent's persistent knowledge store across sessions.
All memory bank files MUST be read at the start of EVERY task.

## Structure

The memory bank organizes knowledge in numbered section folders:

- **0100-context/** - Project context, goals, audience, functionality
- **0200-architecture/** - System architecture, tech stack, components
- **0300-use-cases/** - Workflows, operational procedures, common tasks
- **0400-domain-knowledge/** - Domain-specific concepts, business rules
- **0500-implementation-standards/** - Coding standards, patterns, conventions
- **0600-implementation-examples/** - Reference code examples and templates

## Folder and File Naming

- Section folders use 4-digit prefix: `0100-context/`, `0200-architecture/`
- Files use descriptive kebab-case names: `001-overview.md`, `api-patterns.md`
- All content in Markdown format

## Maintenance

Update memory bank files when:
1. Project architecture changes significantly
2. New patterns or standards are adopted
3. New workflows are established
4. When user requests with "update memory bank"

## Location

All memory bank files are located at `../memory-bank/` relative to this rules folder.