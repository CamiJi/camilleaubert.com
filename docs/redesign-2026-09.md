# Redesign 2026-09 — Current State Reference

> **Date :** 2026-09-11
> **Status :** Refonte terminée côté code (P0 → P3), en attente de déploiement.
> Ce document est la référence à jour. Les docs marqués « Historical » ci-dessous ont une valeur d'archive.

## Decisions (locked)

| Decision | Choice |
|---|---|
| IA | One-page enriched + meta-refresh redirects (`/about` `/#about`, `/projects` `/#projects`, `/contact` `/#contact`) |
| Language | English only |
| Palette | **Neutral + Iris** — bg `#0b0b10`, accent `#8d8af0`, text `#ededf2`, subtext `#9a9aa8` |
| Typography | **Satoshi Variable** self-hosted (ITF Free Font License, `public/fonts/satoshi/`), headings + body |
| Theme | Dark only (theme toggle + 8 variants removed) |
| Tone | Calm, professional — no hero stats (company figures stay out of the hero) |
| Side projects | Public: Nestor le Groom, Cegos Env Switcher |
| Cegos RAG | Mentioned generically ("replaced the enterprise search engine with RAG") — no internal figures |

## Page structure (index)

`#home` → `#about` → `#career` → `#projects` → `#tech` → `#now` → `#contact`

Nav anchors: Home, About, Career, Projects, Tech, Contact. 404 kept as standalone page.

## Content model (`src/data/`)

- `profile.json` — name, role, tagline, photo, socials (hero + contact + meta)
- `about.json` — story paragraphs
- `career.json` — entries with `highlights[]` bullets
- `projects.json` — 6 projects with `kind` (`cegos` \| `side` \| `client`) and `status` badge
- `tech.json` — categories/skills, **no levels**
- `now.json` — current focus bullets + `writing[]` (LinkedIn strip, REX article slot)
- `site.ts` — site name, title, description, url (single source for Layout)

Types in `src/types.ts`.

## Architecture

- Single `Layout.astro` (SEO props per page: title, description, canonical, OG)
- No theme system, no API ghost code, no matrix rain, no balloon animations
- `to-top.ts` handles back-to-top; `reveal.ts` shared scroll reveals
- Fonts: Satoshi self-hosted, preloaded; fontsource inter/space-grotesk removed

## Pending

1. **Real screenshots** for Nestor le Groom + Env Switcher (interim generated covers in `public/projects/`)
2. **REX article URL** (LinkedIn, post-RAG launch) → fill `now.json` writing entry
3. **Deploy** — separate thread once SSH `camille-prod` is configured on this machine (see `camilleaubert-infra`, read-only)

## Superseded docs (historical)

- `audit-tickets.md` — backlog C1–C5/T1–T5, fully executed 2026-06
- `template-migration-audit.md` — template migration analysis, superseded by this redesign
- `implementation-plan.md` — V1 plan, done
