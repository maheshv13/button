---
name: copilot-instructions
description: "Workspace-level instructions for Copilot and AI agents: conventions, build/test commands, and contribution guidance. Use when editing or adding TypeScript/React features."
applyTo: "**/*"
---

# Workspace AI Instructions

Purpose: provide concise, machine-readable guidance so AI assistants and contributors follow project conventions and avoid common pitfalls.

Quick links
- Build: `npm run dev`, `npm run build`, `npm run preview`
- Lint: `npm run lint`

Build & Run
- Dev: `npm run dev` (Vite)
- Build: `npm run build` (runs `tsc -b && vite build`)
- Preview: `npm run preview`

Project overview
- Tech: React + TypeScript + Vite; Supabase for backend; React Router for routing; React Query + Zustand for data/state.
- Layout: feature- and domain-oriented under `src/` (e.g., `features/`, `pages/`, `components/`, `lib/`, `services/`).

Conventions
- Export React components as named exports where practical and use `PascalCase` file and component names.
- Hooks: prefix with `use` and place under `hooks/` alongside related feature modules.
- Types: colocate feature types in `features/<feature>/types.ts`.
- API services: single-export service modules under `features/<feature>/api/`.

How to add a new feature
1. Create `features/<feature>/` with `types.ts`, `api/`, and `hooks/` as needed.
2. Add pages under `pages/` and wire routes in `src/app/router/AppRouter.tsx`.
3. Add UI components under `components/` or a feature-scoped `components/` folder.
4. Update `lib/queryClient.ts` or `lib/supabase.ts` only if global behavior changes.

Supabase notes
- Use the existing `lib/supabaseClient.ts` and `lib/supabase.ts` helpers; prefer service wrappers in `features/*/api` for typed responses.

Linting & formatting
- Run `npm run lint` before commits. Follow ESLint and TypeScript errors; prefer fixing the root cause rather than ignoring rules.

Common pitfalls
- There is a typo'd folder `compenents/` — prefer `components/`. If you rename, update imports across the codebase.
- Keep `applyTo` usage in agent instructions specific; do not add broad, always-active hooks unless necessary.

Notes for AI agents
- Search for `auth`, `supabase`, or `queryClient` when routing or data questions arise.
- When editing `src/app/router/ProtectedRoute.tsx`, respect existing AuthContext and `auth.store.ts` usage.
- Prefer minimal, focused diffs: change the smallest number of files necessary.

Example prompts
- "Create a new feature `todo` with API hooks and a page scaffolded following project conventions."
- "Fix imports after renaming `compenents/` to `components/` and update affected files."

If you'd like, I can also add file-specific `applyTo` instructions or create an `AGENTS.md` with sample agent prompts.
