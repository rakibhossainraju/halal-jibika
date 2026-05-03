## ADDED Requirements

### Requirement: Tailwind CSS v4 Implementation
The system SHALL use Tailwind CSS v4 architecture, with custom tokens defined in `@theme inline` blocks in `src/app/globals.css`.

#### Scenario: v4 build success
- **WHEN** running the build command
- **THEN** Tailwind v4 correctly processes the `@import 'tailwindcss'` and inline theme tokens

### Requirement: Custom Router with Progress Tracking
The system SHALL provide a customized `Link` and `useRouter` that trigger `nprogress` on navigation and support `ViewTransition`.

#### Scenario: Progress bar visibility
- **WHEN** clicking a `Link` to a different page
- **THEN** a progress bar is visible at the top of the screen during the transition

### Requirement: Standardized Utility Directory
The system SHALL have a `src/lib` directory containing shared utilities (`utils.ts`), custom hooks, and navigation helpers.

#### Scenario: `cn` utility usage
- **WHEN** using the `cn()` helper to merge Tailwind classes
- **THEN** it correctly resolves class conflicts using `tailwind-merge`
