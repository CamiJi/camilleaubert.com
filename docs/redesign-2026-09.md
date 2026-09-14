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
Sub-pages: `/writing/` (feed) + `/writing/[slug]/` (individual posts — mini-blog via Content Collections).

## Automation (2026-09)

- **Auto-deploy on push to `main`** via `.github/workflows/deploy.yml` (GitHub Actions):
  refresh GitHub snapshot → install Satoshi TTF (OG generation) → `npm ci` + build → rsync
  (source files, never `--delete` on root) → `docker compose up -d --build` → HTTP check.
  Secrets: `DEPLOY_SSH_KEY`, `CF_BEACON_TOKEN` (optional — see Web Analytics below).
- **GitHub activity snapshot**: `scripts/refresh-github-snapshot.mjs` fetches the official
  github.com calendar (primary) → jogruber API (fallback) → existing snapshot (last resort).
  Refreshed at every CI build.
- **Per-post OG images**: `/writing/[slug]/og.png` generated at build (sharp + Satoshi),
  used as `og:image` on post pages.

## Writing (mini-blog)

- Content Collection `writing` (`src/content/writing/*.md`), typed frontmatter:
  `title`, `date`, `excerpt`, `linkedinUrl?`, `draft?`
- Feed page `/writing/` (RSS: `/rss.xml`) + individual pages `/writing/[slug]/`
- **Publish a post**: create the `.md`, write in EN, copy the same text to LinkedIn,
  push → live in ~2-3 min. To link a post to its LinkedIn release: add `linkedinUrl`.

## Web Analytics (Cloudflare)

Zero-cookie, free, 1 script tag. To activate:
1. Cloudflare dashboard → Analytics & Logs → Web Analytics → copy the beacon token
2. Add GitHub secret `CF_BEACON_TOKEN` (or local `.env`: `PUBLIC_CF_BEACON_TOKEN=…`)
3. Push — the beacon loads only if the token is set (nothing hardcoded)

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

1. **REX article** (LinkedIn, post-RAG launch) → flip `draft: false` in
   `src/content/writing/2026-09-14-rag-rex.md` + add `linkedinUrl`
2. **First deploy of the writing/CI phase** → then auto-deploy takes over on every push to `main`
3. Writing workflow: edit/create `.md` in `src/content/writing/` (possible directly on github.com
   from a phone) → push → live in ~2-3 min. Copy the same text to LinkedIn manually.

## Superseded docs (historical)

- `audit-tickets.md` — backlog C1–C5/T1–T5, fully executed 2026-06
- `template-migration-audit.md` — template migration analysis, superseded by this redesign
- `implementation-plan.md` — V1 plan, done
