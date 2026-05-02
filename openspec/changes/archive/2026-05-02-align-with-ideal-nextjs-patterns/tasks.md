## 1. Dependency Upgrade & Core Config

- [x] 1.1 Upgrade to Tailwind CSS v4 and install associated packages (`@tailwindcss/postcss`, `tw-animate-css`, `clsx`, `tailwind-merge`).
- [x] 1.2 Install `nprogress` and `@types/nprogress`.
- [x] 1.3 Add `.nvmrc`, `.prettierrc`, and `.prettierignore`.
- [x] 1.4 Update `next.config.ts` with security headers and Turbopack options.
- [x] 1.5 Update `tsconfig.json` with new path aliases (`@styles/*`, `@lib/*`, `@components/*`, `@router/customized`).

## 2. Refactoring Utilities & Standardizing Structure

- [x] 2.1 Rename `src/utility` to `src/lib`.
- [x] 2.2 Create `src/lib/utils.ts` with the `cn` helper and `formateDate`.
- [x] 2.3 Create `src/lib/log.ts` for standardized development logging.

## 3. Custom Router Implementation

- [x] 3.1 Implement `src/lib/custom-router` (events, patch-router, route-change-complete).
- [x] 3.2 Create `src/components/ProgressBarController.tsx`.

## 4. Styling & Layout Integration

- [x] 4.1 Update `src/app/globals.css` to Tailwind v4 syntax with `@theme inline`.
- [x] 4.2 Update `src/app/layout.tsx` to include `ProgressBarController`, `HandleOnComplete`, and `ViewTransition`.
- [x] 4.3 Replace `next/link` with the customized `Link` component in global components (Navbar, Footer).

## 5. Verification

- [x] 5.1 Run `npm run build` to ensure everything is correctly configured.
- [x] 5.2 Verify progress bar visibility and theme application in development.
