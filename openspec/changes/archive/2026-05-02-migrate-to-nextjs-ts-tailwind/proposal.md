## Why

The current React/Vite project needs to be modernized to a full-stack Next.js architecture to improve performance, SEO, and maintainability. Migrating to TypeScript and Tailwind CSS will enhance developer productivity and provide a more robust styling system.

## What Changes

- **Framework Migration**: Transition from Vite/React to Next.js 15+ using the App Router.
- **TypeScript Integration**: Convert the entire codebase from JavaScript to TypeScript for better type safety and DX.
- **Styling Overhaul**: Migrate from CSS Modules to Tailwind CSS for modern, utility-first styling.
- **Routing Transition**: Replace `react-router-dom` with Next.js built-in routing. **BREAKING**
- **Dependency Updates**: Update all packages to their latest versions.

## Capabilities

### New Capabilities
- `nextjs-migration`: Core framework setup and migration of existing pages to the App Router.
- `typescript-integration`: Configuration and conversion of JSX/JS files to TSX/TS.
- `tailwind-styling`: Setup and migration of styles to Tailwind CSS utilities.

### Modified Capabilities
- None (Initial migration from a legacy project).

## Impact

- **Build System**: Replacing Vite with Next.js (Turbo/Webpack).
- **Codebase Structure**: Moving from `src/pages` and `src/components` to Next.js standard `app/` and `components/` directories.
- **Developer Experience**: Improved with TypeScript and Tailwind CSS.
- **Dependencies**: Significant changes in `package.json`.
