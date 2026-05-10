# Template Migration Audit

Date: 2026-05-10
Branch: `feat/career-portfolio-migration`

## Scope

This audit compares the current `camilleaubert.com` Astro site against the reference template `nbakh16/career-portfolio-template` and focuses on migration readiness, not visual polish.

## A. Current Project Structure

### Useful tree

- `src/pages/` contains the public routes: `index.astro`, `about.astro`, `projects.astro`, `contact.astro`, `404.astro`.
- `src/components/ui/` contains `SiteHeader.astro` and `SiteFooter.astro`.
- `src/layouts/` contains `MainLayout.astro`.
- `src/data/site.ts` stores the global site metadata.
- `src/styles/global.css` contains all shared styling and responsive layout rules.
- `public/` currently holds `favicon.svg` and `og-cover.svg`.

### Main pages

- Home: `src/pages/index.astro`
- About: `src/pages/about.astro`
- Projects: `src/pages/projects.astro`
- Contact: `src/pages/contact.astro`
- 404: `src/pages/404.astro`

### Main components

- `src/components/ui/SiteHeader.astro` handles branding and route-based navigation.
- `src/components/ui/SiteFooter.astro` handles contact links and footer copy.
- There are no section-level reusable content cards yet; page content is mostly authored inline per route.

### Global styles

- The site uses a custom CSS file with CSS variables, gradients, card styles, layout grids, and responsive breakpoints.
- Styling is mostly semantic/class-based CSS, not utility-first.
- Typography currently relies on the default system stack plus Inter-like fallbacks, not on a dedicated font pipeline.

### Important config files

- `astro.config.mjs` defines the site URL only.
- `package.json` is minimal and currently depends only on `astro`.
- `tsconfig.json` exists, but the stack is intentionally lightweight.

### Where the content lives

- Core copy is embedded directly in the route files.
- Global metadata lives in `src/data/site.ts`.
- There is no JSON-driven content layer yet.

## B. Template Structure

### Useful tree

- `src/pages/index.astro` is the only route and composes the whole homepage from sections.
- `src/components/` contains section and card components: `home.astro`, `career.astro`, `projects.astro`, `tech.astro`, `contact.astro`, plus `career-card.astro` and `project-card.astro`.
- `src/layouts/Layout.astro` contains the document shell, theme bootstrap, and scroll UI.
- `src/data/` contains structured JSON files: `home.json`, `career.json`, `projects.json`, `tech.json`.
- `src/config.ts` stores theme selection.
- `src/styles/global.css` defines Tailwind-driven base styles, theme tokens, animations, and scrollbar styling.

### Main pages

- Only `src/pages/index.astro` exists.
- The template is section-based rather than route-based.

### Main components

- `src/components/nav.astro` renders anchored navigation across sections.
- `src/components/home.astro` renders the hero with social links and resume CTA.
- `src/components/career.astro` and `career-card.astro` render the timeline.
- `src/components/projects.astro` and `project-card.astro` render project cards with image rotation.
- `src/components/tech.astro` renders categorized skill grids.
- `src/components/contact.astro` renders social/contact cards.

### Layouts

- `src/layouts/Layout.astro` is responsible for global theming, the fixed nav, the theme toggle, the back-to-top control, and shared page chrome.
- It also injects a client-side theme bootstrap script and scroll behavior.

### Global styles

- Styling is Tailwind 4 based, with custom CSS variables for theme tokens.
- The template uses `@fontsource-variable/inter` and `@fontsource-variable/space-grotesk`.
- It defines multiple theme variants and toggles them through `data-theme` attributes.

### Data / JSON / config system

- Content is centralized in JSON files under `src/data/`.
- `src/config.ts` selects the base theme.
- Several components can also fall back to remote API data via `PUBLIC_API_BASE_URL`, which introduces an optional runtime dependency.

### Theming / dark mode / colors

- The template ships with built-in light/dark variants for four theme families: `default`, `strategic`, `innovator`, `executive`.
- Theme state is persisted in `localStorage`.
- Color values are exposed through CSS custom properties and Tailwind token mapping.

### Important dependencies

- `astro` 6.x
- `@tailwindcss/vite` and `tailwindcss` 4.x
- `astro-icon`
- `@fontsource-variable/inter`
- `@fontsource-variable/space-grotesk`
- multiple `@iconify-json/*` packs
- `typescript`

## C. Technical Gaps

### What the template has that the current project does not

- A JSON-first content model for home, career, projects, and tech.
- A single-page, section-based information architecture with anchored navigation.
- A theme system with multiple palettes and explicit light/dark support.
- A Tailwind 4 utility stack and icon integration.
- Built-in animated reveals, hover states, and richer interaction patterns.
- A reusable card/component architecture for section content.

### What the current project has that the template does not

- A real multi-page structure with separate routes for About, Projects, Contact, and 404.
- Route-specific metadata and distinct page narratives.
- A simpler styling model with no Tailwind dependency.
- A smaller runtime surface and fewer moving parts.
- Cleaner separation between site chrome and route content.

### Migration risks

- The biggest architectural decision is whether to keep the current multi-page IA or collapse into a single long-form homepage like the template.
- The template introduces a larger dependency and build surface: Tailwind 4, icon packs, font sources, and optional remote API wiring.
- Several template components rely on client-side scripts for reveal, nav state, slider rotation, and theme persistence; that is a significant behavior change from the current mostly static site.
- The template assumes different content semantics than the current copy; direct copy transfer will require editorial rewrites.
- `astro` version drift exists: current project is on 5.7.x, template targets 6.x.

### Conventions to watch

- The template uses `data-theme` conventions and CSS variables that should not be mixed loosely with the current semantic CSS without a clear token plan.
- Content is tightly coupled to JSON shape; any migration should lock the schema first.
- The template uses a lot of custom client-side behavior; if the goal is maintainability, some of that should be simplified before import.

## D. Recommended Migration Strategy

### Likely full replacements

- Home page composition should be replaced or heavily reworked.
- Global styling will likely need a full rewrite if the template visual system is adopted.
- Layout shell and navigation will need to be rethought to fit the chosen IA.

### Likely adaptations

- Site metadata should be migrated into a more structured content layer.
- Current project and contact content can be adapted into the template's card/section vocabulary.
- Existing routes can either be preserved as secondary pages or folded into anchored sections depending on product direction.

### What to keep

- Domain/site ownership metadata and canonical URL handling.
- The existing `404` route pattern.
- Any preserved copy that still reflects the real portfolio story.
- The current deployment model and infrastructure assumptions unless the hosting strategy changes later.

### Suggested order of migration

1. Freeze the information architecture decision: multi-page site vs single-page landing.
2. Define a shared content model for hero, experience, projects, skills, and contact.
3. Introduce the template's theme tokens and base layout in isolation.
4. Port the home page first, using current content as the source of truth.
5. Only then decide whether About/Projects/Contact remain separate routes or become sections.
6. Add or simplify motion and interactivity after the content and layout are stable.

## E. V1 Priority

If the first step is home only, the main files to touch first are:

- `src/pages/index.astro` for the page composition.
- `src/layouts/MainLayout.astro` for metadata and shared shell.
- `src/styles/global.css` for the base visual system.
- `src/data/site.ts` or a new structured data file for hero and site-level copy.
- `src/components/ui/SiteHeader.astro` if the nav needs to change for the new visual direction.
- `src/components/ui/SiteFooter.astro` if footer content or brand treatment changes.

## Practical Next Step

Start with a thin migration skeleton: keep the current routes, introduce a new token-driven layout and home section model, then validate the home page visually before deciding whether to collapse the rest of the site into sections or keep the route-based structure.