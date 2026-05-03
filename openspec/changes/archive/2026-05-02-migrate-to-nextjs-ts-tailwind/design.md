## Context

The current project is a React application built with Vite, using `react-router-dom` for routing and CSS Modules for styling. It relies on Firebase for authentication and data. The goal is to migrate this to Next.js while introducing TypeScript and Tailwind CSS.

## Goals / Non-Goals

**Goals:**
- Migrate the framework from Vite to Next.js 15+ (App Router).
- Convert the entire codebase to TypeScript.
- Replace CSS Modules with Tailwind CSS.
- Ensure all existing pages and features remain functional.

**Non-Goals:**
- Migrating from Firebase to MySQL/Auth.js (this is reserved for a future phase).
- Refactoring the core business logic or UI design.
- Implementing new features.

## Decisions

- **Manual Migration**: Instead of starting from scratch with `create-next-app`, we will update the existing `package.json` and refactor the project structure to follow Next.js conventions (`src/app` directory).
- **TypeScript First**: We will set up TypeScript early in the process and convert components as they are moved into the Next.js structure.
- **Client Components by Default**: Since the current app is a pure SPA, we will initially mark most migrated components with `'use client'` to ensure Firebase hooks and other client-side logic continue to work, then gradually optimize for Server Components where possible.
- **Tailwind Utility Conversion**: We will map existing CSS Module classes to Tailwind utility classes. Global variables from `variables.module.css` will be moved to `tailwind.config.ts`.

## Risks / Trade-offs

- **[Risk] Routing Incompatibility** → [Mitigation] Systematically replace `react-router-dom` hooks (`useNavigate`, `useParams`) with Next.js equivalents (`useRouter`, `useParams`).
- **[Risk] Styling Regressions** → [Mitigation] Perform visual regression testing after converting each component to Tailwind.
- **[Risk] Firebase/SSR Issues** → [Mitigation] Keep Firebase-dependent logic in Client Components to avoid SSR mismatches or environmental issues.
