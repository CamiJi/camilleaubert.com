# camilleaubert.com

Portfolio website for `camilleaubert.com` — built with Astro and served via Docker.

## Stack

- **Astro** (static site, TypeScript)
- **Tailwind CSS** (styling)
- **Docker** (multi-stage: Node.js builder → Nginx Alpine)
- **Nginx Proxy Manager** (reverse proxy on production server)

## Project structure

```
src/
├── pages/          → public routes (index, about, projects, contact, 404)
├── components/     → reusable UI components (career, project-card, tech, etc.)
├── layouts/        → page layouts (Layout, MainLayout)
├── data/           → JSON content files (career, projects, tech, home)
├── styles/         → global CSS
└── config.ts       → site configuration
public/             → static assets (images, robots.txt)
docs/               → project framing, design direction, deployment runbook
```

## Related repository

This repo is part of a two-repo setup:

| Repo | Rôle |
|---|---|
| `CamiJi/camilleaubert.com` ← vous êtes ici | Application Astro (code source) |
| `CamiJi/camilleaubert-infra` | Infrastructure, déploiement, Docker, skills Copilot |

**Pour recréer l'environnement complet**, voir le [guide de setup](https://github.com/CamiJi/camilleaubert-infra#setup-depuis-un-nouvel-ordi) dans `camilleaubert-infra`.

## Local development

```bash
npm install
npm run dev        # → http://localhost:4321
```

## Production build

```bash
npm run build      # → dist/
```

## Deployment

Le déploiement est documenté et géré dans `CamiJi/camilleaubert-infra`.
Procédure : validation locale → `rsync` des fichiers → `docker compose up -d --build` sur le serveur.

Détails dans [`camilleaubert-infra/.github/skills/deploy/SKILL.md`](https://github.com/CamiJi/camilleaubert-infra/blob/main/.github/skills/deploy/SKILL.md).

## Documentation

- `docs/project-framing.md` — cadrage initial du projet
- `docs/design-direction.md` — direction visuelle
- `docs/deployment-runbook.md` — procédure de déploiement détaillée
- `docs/content-strategy.md`
- `docs/repository-map.md`
- `docs/implementation-plan.md`

## Related repository
- Infrastructure: `CamiJi/camilleaubert-infra`
