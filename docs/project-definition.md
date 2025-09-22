### Project Definition: QonnectOne Next.js WWW

#### Overview
- **Purpose**: Marketing/landing website for QonnectOne built with Next.js App Router.
- **Entry**: `src/app/page.tsx`; shared layout: `src/app/layout.tsx`.
- **Routing**: Next.js App Router directories under `src/app/*/page.tsx`.

#### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Runtime**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 (class-based dark mode)
- **Fonts**: `next/font/google` (Geist, Geist Mono, Inter, Montserrat)
- **Linting**: ESLint 9 (flat config + `eslint-config-next`)

#### Scripts
- `npm run dev`: Start dev server with Turbopack
- `npm run build`: Production build with Turbopack
- `npm run start`: Start production server
- `npm run lint`: Run ESLint (flat config)

#### Project Structure
- `src/app/`
  - `layout.tsx`: Global HTML scaffold, fonts, `<head>` links, and `globals.css` import
  - `page.tsx`: Home page composing sections from `src/components`
  - `business-cases/page.tsx`, `metody-platnosci/page.tsx`, `moduly/page.tsx`, `o-nas/page.tsx`: Static pages
  - `globals.css`: Global styles and Tailwind layers
- `src/components/`: Presentational sections (e.g., `Navigation`, `HeroSection`, `FeaturesSection`, `FAQSection`, `PricingSection`, `Footer`, etc.)
- `public/`: Static assets (logos, svgs)
- `tailwind.config.ts`: Tailwind v4 config; `content` globs include `src/app`, `src/components`; `darkMode: 'class'`; CSS variables for palette and font families
- `eslint.config.mjs`: ESLint flat config using `next/core-web-vitals` and `next/typescript`
- `next.config.ts`: Placeholder for Next.js config

#### UI/Styling Conventions
- Use Tailwind utility classes; prefer semantic color CSS variables defined in `tailwind.config.ts` (`--background`, `--foreground`, `--primary`, `--blue`).
- Dark mode toggled via a `class` on `<html>`/`body`; see `DarkModeToggle` usage in `src/app/page.tsx`.
- Font variables are injected on `<html>` in `layout.tsx`; apply families via Tailwind `font-*` classes defined in config (e.g., `font-inter`).

#### React/Next Conventions
- App Router with Server Components by default; mark interactive components/pages with `'use client'` as needed (e.g., `src/app/page.tsx`).
- Co-locate page-specific components within `src/components/` unless they are truly global.
- Prefer functional, stateless components for presentational sections.

#### TypeScript/Linting
- Strict typing preferred for public component props; avoid `any`.
- Follow ESLint rules from `eslint.config.mjs`; fix lints before committing.
- Do not introduce unused variables or imports.

#### Build/Run
```bash
npm install
npm run dev
# open http://localhost:3000
```

#### Editing Guidance for Cursor
- Preserve existing indentation and formatting; do not reformat unrelated code.
- Keep edits minimal and localized; include all required imports.
- Prefer absolute paths in tool calls (workspace root: `/Users/beone/Projects/qonnectone-nextjs-www`).
- If adding components:
  - Place in `src/components/` with clear, descriptive names.
  - Export default functional components.
  - Add to `src/app/page.tsx` or relevant route `page.tsx`.
- If updating styles, respect Tailwind config tokens and dark mode class strategy.
- After code changes, run `npm run lint` and ensure no new linter errors are introduced.

#### Notable Pages and Components
- Home composition in `src/app/page.tsx` uses: `DarkModeToggle`, `Navigation`, `HeroSection`, `FeaturesSection`, `BlazingAcceptanceSection`, `StatsSection`, `ShowGifSection`, `FAQSection`, `PricingSection`, `TrustedCompaniesSection`, `PlatformSection`, `Footer`.
- Global fonts and meta configured in `src/app/layout.tsx` with `Metadata`.

#### Environment/Assumptions
- Node/npm managed locally; no env variables required for build/run.
- No API routes or server actions currently defined; site is static.
