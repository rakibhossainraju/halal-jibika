## Why

The current project, while functional in Next.js 16, lacks some advanced architectural patterns and configurations used in professional-grade Next.js applications. Incorporating best practices from an "ideal" model will improve performance (Turbopack, PPR readiness), developer experience (Prettier, refined ESLint, custom router), and maintainability (Tailwind v4, standardized `lib/` directory).

## What Changes

- **Tailwind CSS v4 Migration**: Transition from v3 to v4, utilizing the new `@import` syntax and `@theme inline` configuration for a cleaner styling pipeline.
- **Enhanced Configuration**: 
  - Update `next.config.ts` with comprehensive security headers and optimized dev indicators.
  - Implement `.prettierrc` and a more robust `eslint.config.mjs` for strict code quality.
  - Add `.nvmrc` for consistent Node.js versions.
- **Custom Router & Progress Tracking**: Introduce a custom navigation wrapper in `src/lib/custom-router` that integrates `nprogress` and `ViewTransition` for seamless, app-like page transitions.
- **Architectural Refactoring**: 
  - Rename `src/utility` to `src/lib`.
  - Introduce `src/lib/utils.ts` with `clsx` and `tailwind-merge` (the `cn` helper).
  - Update `tsconfig.json` with cleaner path aliases (`@/*`, `@lib/*`, `@components/*`).
- **Layout Enhancements**: Integrate `ProgressBarController` and `HandleOnComplete` into the root layout.

## Capabilities

### New Capabilities
- `tailwind-v4-upgrade`: Migration to the latest Tailwind architecture.
- `custom-router-integration`: Implementing sophisticated navigation and progress tracking.
- `advanced-dx-setup`: Strict linting, formatting, and environment standardization.

### Modified Capabilities
- `nextjs-migration`: Refining the initial framework setup to match elite standards.

## Impact

- **Styling**: Significant change in how custom styles are defined (moved to `globals.css`).
- **Navigation**: All internal links should ideally use the customized `Link` component.
- **Build System**: Fully optimized for Turbopack.
- **Code Style**: Mandatory consistency via Prettier.
