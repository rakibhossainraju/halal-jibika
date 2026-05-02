## Context

Next.js 16 introduces several breaking changes, most notably the requirement to `await` request-time APIs like `params` and `searchParams`. It also makes Turbopack the default and renames Middleware to Proxy.

## Goals / Non-Goals

**Goals:**
- Update dependencies to Next.js 16 and React 19 (React 16 mentioned in docs as requirement, but usually paired with React 19 for Next.js 16).
- Refactor all dynamic routes to handle async `params`.
- Update configuration files (`next.config.ts`, `eslint.config.mjs`).

**Non-Goals:**
- Introducing new features.
- Changing the existing UI/UX.

## Decisions

- **React 19**: We will upgrade to React 19 along with Next.js 16 for best compatibility.
- **Async API Refactor**: We will use the `use` hook from React or simply `await` the params in async components (Pages/Layouts).
- **ESLint Flat Config**: We will migrate to the new flat config format to align with Next.js 16 defaults.
- **Turbopack**: We will embrace Turbopack by default and only revert if blockers are found.

## Risks / Trade-offs

- **[Risk] Prerendering Errors** → [Mitigation] Ensure all `params` and `searchParams` are correctly awaited before access.
- **[Risk] Dependency Conflicts** → [Mitigation] Use `npm install --force` or `npm install --legacy-peer-deps` if necessary, and verify with a full build.
