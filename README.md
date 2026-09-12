# camilleaubert.com

Portfolio website for `camilleaubert.com` — built with Astro and served via Docker.

## Stack

- **Astro 6** (static site, TypeScript) — requires **Node.js ≥ 22.12**
- **Tailwind CSS 4** (styling)
- **Satoshi** variable font, self-hosted (`public/fonts/satoshi/`, ITF Free Font License)
- **Docker** (multi-stage: Node.js builder → Nginx Alpine)
- **Nginx Proxy Manager** (reverse proxy on production server)

## Project structure

```
src/
├── pages/          → index (one-page) + 404
├── components/     → sections (home, about, career, projects, tech, now, contact) + cards
├── layouts/        → single Layout.astro (SEO props per page)
├── data/           → JSON content model (profile, about, career, projects, tech, now)
├── scripts/        → to-top, reveal
└── styles/         → global.css (design tokens: Neutral + Iris, dark only)
public/
├── fonts/satoshi/  → Satoshi Variable woff2
├── projects/       → project covers (webp)
└── og-image.webp   → social preview
docs/               → framing + redesign-2026-09.md (current state reference)
```

## Content model

All copy lives in `src/data/*.json` — edit content without touching components:
`profile.json` (hero + contact + meta), `about.json`, `career.json` (highlights),
`projects.json` (kind: cegos|side|client, status badges, links), `tech.json`, `now.json`
(current focus + LinkedIn writing strip).

## Related repository

This repo is part of a two-repo setup:

| Repo | Rôle |
|---|---|
| `CamiJi/camilleaubert.com` ← vous êtes ici | Application Astro (code source) |
| `CamiJi/camilleaubert-infra` | Infrastructure, déploiement, Docker, skills Copilot |

**Pour recréer l'environnement complet**, voir le [guide de setup](https://github.com/CamiJi/camilleaubert-infra#setup-depuis-un-nouvel-ordi) dans `camilleaubert-infra`.

## Local development

```bash
nvm use            # Node 22 (voir .nvmrc)
npm install
npm run dev        # → http://localhost:4321
```

## Production build

```bash
npm run build      # → dist/
npx astro check    # type + template check
```

## Deployment

Le déploiement est documenté et géré dans `CamiJi/camilleaubert-infra`.
Procédure : validation locale → `rsync` des fichiers (`src/`, `public/`, `package*.json`, `astro.config.mjs` — jamais `--delete` global, les fichiers Docker vivent uniquement sur le serveur) → `docker compose up -d --build` sur le serveur.

Détails dans [`camilleaubert-infra/.github/skills/deploy/SKILL.md`](https://github.com/CamiJi/camilleaubert-infra/blob/main/.github/skills/deploy/SKILL.md).

## Documentation

- `docs/redesign-2026-09.md` — **référence état courant** (décisions, structure, reste à faire)
- `docs/project-framing.md` — cadrage initial du projet
- `docs/design-direction.md` — direction visuelle (+ décisions résolues)
- `docs/content-strategy.md` — ton + structure de contenu
- `docs/deployment-runbook.md` — procédure de déploiement détaillée
- `docs/audit-tickets.md`, `docs/template-migration-audit.md`, `docs/implementation-plan.md` — *historiques*
