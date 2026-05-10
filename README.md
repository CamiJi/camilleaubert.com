# camilleaubert.com

Portfolio website for `camilleaubert.com`.

## Status
This repository currently contains project framing and documentation.
The Astro application has not been scaffolded yet.

## Goal
Build a simple, maintainable portfolio site that can be deployed on the current single-server infrastructure.

## Planned stack
- Astro
- TypeScript
- Docker
- Nginx Proxy Manager on the server as reverse proxy

## Planned project structure
- `src/pages` → public pages
- `src/components` → reusable UI and page sections
- `src/layouts` → page layouts
- `src/content` → structured content collections
- `public` → static assets
- `docs` → framing, design, content, and implementation notes

## Local development
Target workflow once the Astro app is created:

```bash
npm install
npm run dev
```

## Production build
Target workflow once the Astro app is created:

```bash
npm run build
```

## Deployment model
The application is intended to run on a single Ubuntu server with Docker Compose.

Target runtime:
- container: `portfolio-astro`
- reverse proxy target: `portfolio-astro:80`

## Current documentation
- `docs/project-framing.md`
- `docs/design-direction.md`
- `docs/content-strategy.md`
- `docs/repository-map.md`
- `docs/implementation-plan.md`

## Related repository
- Infrastructure: `CamiJi/camilleaubert-infra`
