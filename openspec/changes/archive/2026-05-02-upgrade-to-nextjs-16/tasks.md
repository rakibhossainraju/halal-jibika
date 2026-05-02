## 1. Dependency Upgrade

- [x] 1.1 Update `next`, `react`, and `react-dom` to version 16/19.
- [x] 1.2 Update TypeScript to 5.1+ and Node.js types.
- [x] 1.3 Install `babel-plugin-react-compiler` and configure React Compiler.

## 2. Configuration Updates

- [x] 2.1 Update `next.config.js` (or convert to `.ts`) with new top-level options.
- [x] 2.2 Migrate ESLint to Flat Config (`eslint.config.mjs`).
- [x] 2.3 Update `package.json` scripts to remove `--turbopack` (if present) and update linting.

## 3. Async API Refactor

- [x] 3.1 Refactor `src/app/profile/[[...slug]]/page.tsx` to await `params`.
- [x] 3.2 Refactor any other pages or layouts that use `params` or `searchParams`.

## 4. Middleware to Proxy Migration

- [x] 4.1 Rename `middleware.ts` to `proxy.ts` and update exports (if applicable).

## 5. Verification

- [x] 5.1 Run `npx next typegen` to generate new types.
- [x] 5.2 Run `npm run build` to verify the upgrade.
- [x] 5.3 Run `npm run dev` and perform smoke tests on dynamic routes.
