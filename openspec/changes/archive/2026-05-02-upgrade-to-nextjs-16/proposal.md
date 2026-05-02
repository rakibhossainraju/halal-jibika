## Why

The project is currently using Next.js 15+ (from the previous migration), but Next.js 16 has been released with significant performance improvements, Turbopack by default, and new mandatory async patterns for request-time APIs. Upgrading ensures the project remains on the latest stable version and benefits from these advancements.

## What Changes

- **Core Upgrade**: Update `next`, `react`, and `react-dom` to version 16.
- **TypeScript & Node Requirements**: Ensure TypeScript 5.1+ and Node.js 20.9+ are used.
- **Async API Refactor**: Refactor `params` and `searchParams` usage in pages and layouts to be awaited (Mandatory in v16). **BREAKING**
- **Middleware Rename**: Rename `middleware.ts` to `proxy.ts` (Mandatory in v16).
- **Configuration Updates**: Update `next.config.ts` to use new top-level options.
- **Linting**: Transition from `next lint` to direct `eslint` execution.

## Capabilities

### New Capabilities
- `nextjs-16-core-upgrade`: Updating dependencies and core configurations.
- `async-api-migration`: Refactoring pages and layouts to handle async `params` and `searchParams`.
- `proxy-migration`: Transitioning from Middleware to Proxy.

### Modified Capabilities
- `nextjs-migration`: The previous migration spec will be updated to reflect v16 standards.

## Impact

- **Build Process**: Turbopack is now default; `next lint` is removed.
- **Developer Experience**: Improved type safety with `npx next typegen`.
- **Runtime**: Node.js 20.9 minimum requirement.
