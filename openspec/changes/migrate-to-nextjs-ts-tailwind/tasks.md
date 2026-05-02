## 1. Project Initialization & Dependency Setup

- [ ] 1.1 Install Next.js, TypeScript, and Tailwind CSS dependencies.
- [ ] 1.2 Initialize TypeScript (`tsconfig.json`).
- [ ] 1.3 Initialize Tailwind CSS (`tailwind.config.ts`, `postcss.config.mjs`, `src/app/globals.css`).
- [ ] 1.4 Update `package.json` scripts and remove Vite-related configurations.

## 2. Core Structure & Global Components

- [ ] 2.1 Create Next.js App Router structure (`src/app`).
- [ ] 2.2 Create Root Layout (`src/app/layout.tsx`) and integrate global styles.
- [ ] 2.3 Convert `NavbarComponent` and `FooterComponent` to TypeScript and Tailwind.
- [ ] 2.4 Implement the Root Layout with `Navbar` and `Footer`.

## 3. Component Migration (Batch 1)

- [ ] 3.1 Migrate `ButtonComponent` to TypeScript and Tailwind.
- [ ] 3.2 Migrate `InputComponent` and `FormComponent` to TypeScript and Tailwind.
- [ ] 3.3 Migrate `ULComponent` and `CategoryComponent` to TypeScript and Tailwind.

## 4. Page Migration (Batch 1)

- [ ] 4.1 Migrate `HomePage` to `src/app/page.tsx`.
- [ ] 4.2 Migrate `AboutPage` to `src/app/about/page.tsx`.
- [ ] 4.3 Migrate `ContactPage` to `src/app/contact/page.tsx`.

## 5. Page Migration (Batch 2 - Complex Pages)

- [ ] 5.1 Migrate `JobsPage` to `src/app/jobs/page.tsx` and `JobCardComponent`.
- [ ] 5.2 Migrate `JobDetailsPage` to `src/app/jobs/[jobId]/page.tsx` and `JobDetailCardComponent`.
- [ ] 5.3 Migrate `AuthPage`, `SignInComponent`, and `SignUpComponent`.
- [ ] 5.4 Migrate `FavoritePage`.

## 6. Profile & Sub-routes Migration

- [ ] 6.1 Migrate `ProfilePage` and its dashboard sub-components to `src/app/profile/[[...slug]]` or equivalent App Router structure.

## 7. Routing & Firebase Integration

- [ ] 7.1 Replace all `react-router-dom` usage with `next/link` and `next/navigation`.
- [ ] 7.2 Verify Firebase hooks and utility work correctly in Client Components.

## 8. Cleanup & Final Validation

- [ ] 8.1 Remove legacy Vite files (`index.html`, `vite.config.js`, `src/main.jsx`, `src/App.jsx`, `src/routes`).
- [ ] 8.2 Remove all `.module.css` files after successful Tailwind migration.
- [ ] 8.3 Run `tsc` for full type check.
- [ ] 8.4 Run `npm run build` to verify the production build.
