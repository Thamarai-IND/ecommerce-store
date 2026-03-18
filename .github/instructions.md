# Copilot Code Review & Code Agent Instructions

## Code Review Workflow
- Trigger: On every commit or pull request.
- Checks:
  - **Frontend (Angular)**:
    - Ensure `ng build --configuration production` passes
    - Accessibility compliance (ARIA roles, semantic HTML, color contrast)
    - Angular best practices (OnPush change detection, modular structure, lazy loading)
  - **Backend (Node.js + MongoDB)**:
    - API route validation, error handling, security (JWT/OAuth)
    - Performance and scalability patterns
  - **General**:
    - ESLint/Prettier formatting
    - Unit test coverage ≥ 80%
    - Vulnerability scan (`npm audit`)

## Issue Creation
- If problems are found:
  - Create a GitHub Issue titled: `Code Review Issue - <short description>`
  - Body: Include checklist of problems, suggested fixes, and affected files
  - Assign default: `@Thamaraiselvan` (or another assignee if specified)

## Pull Request Creation
- If no problems are found:
  - Create a Pull Request titled: `Code Review Passed - Ready for Merge`
  - Body: Summarize review outcome and confirm no issues
  - Assign default reviewer: `@Thamaraiselvan` (or superior if specified)

## Guidelines
- Always provide actionable feedback
- Use checklist format in issues/PRs
- Respect branch naming and commit conventions

## Test Coverage Rules
- Minimum coverage threshold: **80%**
- If coverage < 80%:
  - Copilot AI should create an Issue titled: `Code Review Issue - Coverage Below Threshold`
  - Include coverage report details and suggest adding more unit tests
- If coverage ≥ 80%:
  - Continue with normal PR creation workflow
