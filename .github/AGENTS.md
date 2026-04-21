---
name: agents-guidance
description: "Suggested agent customizations and example prompts to accelerate common workflows in this repo."
---

# Agent Customizations & Example Prompts

Purpose: small, focused agent presets and sample prompts that make routine tasks faster and less error-prone.

Suggested agents

- `create-feature` — Scaffold a new feature folder (`features/<name>/`) with `types.ts`, `api/`, `hooks/`, and a page under `pages/`. Use `applyTo: "src/features/**"`.
- `rename-components` — Safely rename `compenents/` → `components/`, update imports across the codebase, and run `npm run lint -- --fix`. Use `applyTo: "src/**"` and run in preview mode before applying.
- `add-route` — Add a route to `src/app/router/AppRouter.tsx`, create page scaffold, and update navigation sidebar config. Use `applyTo: "src/app/router/**"`.
- `lint-and-fix` — Run lint rules, auto-fix where safe, and list remaining errors. Use `applyTo: "**/*"` and run the `lint` script.

Example prompts

- "/create-feature name=todo description='basic todo list with add/remove'" → Scaffolds `features/todo` and example page.
- "/rename-components" → Finds `compenents/`, updates imports and creates a brief report of changed files.
- "/add-route path=/todos name=TodosPage feature=todo" → Adds route in `AppRouter.tsx`, creates page, and updates `sidebar.config.ts`.
- "/lint-and-fix" → Runs linter fixes and returns a summary of remaining issues.

How to extend

- Use `applyTo` globs to scope agents to relevant parts of the repo and avoid loading always-on rules.
- Keep prompts parameterized and small — agents should be deterministic and return a single actionable result.

If you'd like, I can implement the `rename-components` agent now and run it in preview mode to show proposed changes.
