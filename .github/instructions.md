# Repository-specific Code Review & Code Agent Instructions

This repository is an Angular frontend application (no backend). The guidance below is tailored to the project's scripts and tooling (see `package.json`).

## Quick local commands
Use these to reproduce CI checks locally:

```bash
# Install deps
npm ci

# Serve locally
npm start

# Run unit tests (Karma)


# Build production bundle
npm run build -- --configuration production

# Run Storybook locally
npm run storybook

# Build Storybook static site
npm run build-storybook
```

## Code Review Workflow
- Trigger: On every commit and pull request.
- CI should run the following checks (see `.github/workflows/*` for implementation):
  - Frontend (Angular):
    - `npm ci` then `npm run build -- --configuration production` succeeds
    - `npm test` runs and reports results (Karma/Jasmine)
    - Storybook builds (`npm run build-storybook`) for visual regression / component sanity
    - Accessibility checks for key pages/components (a11y addon or axe)
    - Angular best-practices review: modular structure, use of OnPush where appropriate, no large change-detection pitfalls, lazy-loading routes
  - General:
    - Prettier formatting (project has Prettier config)
    - Unit test coverage (see rules below)
    - Optional: `npm audit` in CI for quick vulnerability scan

## Issue Creation
If CI or the reviewer finds problems:
- Create a GitHub Issue titled: `Code Review Issue - <short description>`
- Body should include:
  - Short summary of the failure
  - Reproduction steps (commands, failing test names)
  - Files and line pointers (where applicable)
  - Suggested fix or guidance
  - Minimal failing snippet or stack trace
- Default assignee: `@Thamarai-IND`

## Pull Request Creation
If CI passes and the review is satisfied:
- Create a Pull Request titled: `Code Review Passed - Ready for Merge`
- Body should include:
  - Short summary of the change
  - Which checks were run (build, tests, storybook)
  - Any manual testing performed (browsers, devices)
- Add reviewer(s): `@Thamarai-IND` (or usual team reviewers)

## Guidelines for Reviewers
- Provide actionable, prioritized feedback (what's wrong, why, and a concrete fix)
- Use checklist items in PR descriptions for each CI step
- Keep reviews focused: correctness, accessibility, performance, and maintainability

## Test Coverage Rules
- Goal coverage threshold: **80%** (unit tests via Karma/coverage reporter)
- If coverage < 80%:
  - Open an Issue titled `Code Review Issue - Coverage Below Threshold` with the coverage summary and suggestions for tests to add
- If coverage ≥ 80%: proceed with PR workflow

## Small automation suggestions (optional)
- Add a GitHub Actions workflow that runs `npm ci`, `npm run build -- --configuration production`, `npm test -- --watch=false`, and `npm run build-storybook` on PRs
- Consider adding a lightweight a11y check (axe) as part of CI for critical pages
