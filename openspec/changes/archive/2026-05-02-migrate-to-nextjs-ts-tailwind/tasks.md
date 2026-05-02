## 1. Project Initialization & Dependency Setup

- [x] 1.1 Install Next.js, TypeScript, and Tailwind CSS dependencies.
- [x] 1.2 Initialize TypeScript (`tsconfig.json`).
- [x] 1.3 Initialize Tailwind CSS (`tailwind.config.ts`, `postcss.config.mjs`, `src/app/globals.css`).
- [x] 1.4 Update `package.json` scripts and remove Vite-related configurations.

## 2. Core Structure & Global Components

- [x] 2.1 Create Next.js App Router structure (`src/app`).
- [x] 2.2 Create Root Layout (`src/app/layout.tsx`) and integrate global styles.
- [x] 2.3 Convert `NavbarComponent` and `FooterComponent` to TypeScript and Tailwind.
- [x] 2.4 Implement the Root Layout with `Navbar` and `Footer`.

## 3. Component Migration (Batch 1)

- [x] 3.1 Migrate `ButtonComponent` to TypeScript and Tailwind.
- [x] 3.2 Migrate `InputComponent` and `FormComponent` to TypeScript and Tailwind.
- [x] 3.3 Migrate `ULComponent` and `CategoryComponent` to TypeScript and Tailwind.

## 4. Page Migration (Batch 1)

- [x] 4.1 Migrate `HomePage` to `src/app/page.tsx`.
- [x] 4.2 Migrate `AboutPage` to `src/app/about/page.tsx`.
- [x] 4.3 Migrate `ContactPage` to `src/app/contact/page.tsx`.

## 5. Page Migration (Batch 2 - Complex Pages)

- [x] 5.1 Migrate `JobsPage` to `src/app/jobs/page.tsx` and `JobCardComponent`.
- [x] 5.2 Migrate `JobDetailsPage` to `src/app/jobs/[jobId]/page.tsx` and `JobDetailCardComponent`.
- [x] 5.3 Migrate `AuthPage`, `SignInComponent`, and `SignUpComponent`.
- [x] 5.4 Migrate `FavoritePage`.

## 6. Profile & Sub-routes Migration

- [x] 6.1 Migrate `ProfilePage` and its dashboard sub-components to `src/app/profile/[[...slug]]` or equivalent App Router structure.

## 7. Routing & Firebase Integration

- [x] 7.1 Replace all `react-router-dom` usage with `next/link` and `next/navigation`.
- [x] 7.2 Verify Firebase hooks and utility work correctly in Client Components.

## 8. Cleanup & Final Validation

- [x] 8.1 Remove legacy Vite files (`index.html`, `vite.config.js`, `src/main.jsx`, `src/App.jsx`, `src/routes`).
- [x] 8.2 Remove all `.module.css` files after successful Tailwind migration.
- [x] 8.3 Run `tsc` for full type check.
- [x] 8.4 Run `npm run build` to verify the production build.
