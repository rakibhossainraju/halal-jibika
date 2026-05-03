## Context

The current project uses Next.js 16 but follows a standard "getting started" structure. The goal is to move it towards an "elite" structure observed in the reference project, focusing on a more robust navigation system and the latest Tailwind v4 features.

## Goals / Non-Goals

**Goals:**
- Upgrade to Tailwind CSS v4.
- Implement a custom router with `nprogress` and `ViewTransition`.
- Standardize the project structure with a `src/lib` directory and specific aliases.
- Add Prettier and strict ESLint configuration.

**Non-Goals:**
- Removing the `src` directory (as per user request).
- Changing existing page logic or designs.

## Decisions

- **Tailwind v4 Migration**: We will move theme extensions from `tailwind.config.js` to `src/app/globals.css` using the new `@theme inline` syntax.
- **`src/lib` Alias**: We will use `@lib/*` for the library directory to make imports cleaner.
- **Custom Router**: We will copy the `lib/custom-router` implementation from the reference project, adapting paths for the `src` directory.
- **Security Headers**: `next.config.ts` will be updated with a robust `headers()` function to improve the security posture.

## Risks / Trade-offs

- **[Risk] Tailwind v4 Breaking Changes** → [Mitigation] Carefully migrate existing v3 configuration and test all custom components.
- **[Risk] Router Complexity** → [Mitigation] Ensure the `Link` component is properly exported and used consistently to avoid missing progress tracking.
