---
name: create-prompt
description: "Workspace prompt to generate a reusable `.prompt.md` for a repeatable developer task by extracting patterns from conversation or selection. Use when: creating reusable agent prompts, generating test/refactor prompts, or scaffolding prompt templates."
---

Purpose
- Produce a ready-to-save `.prompt.md` that automates a repeated developer task pattern (e.g., generate tests, refactor code, create docs) for team use.

Inputs
- `task` (required): short label of the task (e.g., `generate-tests`, `refactor-hooks`).
- `targetPath` (optional): file or folder path to focus on; if omitted, uses the active file/selection.
- `scope` (optional): `workspace` or `user` — where to save the generated prompt (defaults to `workspace`).
- `style` (optional): output style (concise, verbose, test-first).

Behavior / Steps
1. Inspect the recent conversation context or the provided `targetPath`/selection to identify the repeated task pattern:
   - Core task
   - Typical inputs provided
   - Desired output format and examples
2. If ambiguous, ask up to two clarifying questions about `task`, `targetPath`, or `style`.
3. Draft a `.prompt.md` including:
   - YAML frontmatter with `name` and `description` (include trigger keywords)
   - Purpose and Inputs sections
   - Clear `Steps` the agent should perform
   - Example invocations and expected outputs
4. Return the draft and recommend a save path. If `scope=workspace`, suggest `.github/prompts/` and include a one-line rationale.

Example invocation
- `task=generate-tests`, `targetPath=src/components/Button.tsx`, `scope=workspace`, `style=concise`

Expected output (excerpt)
- A `.prompt.md` draft tuned to generate unit tests for `src/components/Button.tsx`, with example test cases, input mapping, and a suggested save path.

Save location recommendation
- Workspace-scoped prompts: save to `.github/prompts/` for team discoverability.

Notes
- Keep `description` concise and include trigger keywords agents search for (e.g., "generate tests").
- Validate YAML frontmatter syntax before committing.

Suggested follow-ups
- Create a user-scoped variant in the VS Code prompts folder for personal use.
- Add automated YAML linting/validation as a CI check.
