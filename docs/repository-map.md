# Repository Map

## Overview

The Camille Aubert web platform currently uses a multi-repository structure with clear boundaries.

### Repositories
- `CamiJi/camilleaubert.com`
- `CamiJi/camilleaubert-infra`

## Repository responsibilities

### `camilleaubert.com`
This repository is responsible for:
- the main portfolio website,
- product framing,
- content and copy structure,
- design direction,
- local development setup,
- workspace files,
- website CI/CD.

This repository should contain:
- Astro source code,
- frontend assets,
- project documentation,
- workspace configuration,
- deployment workflows tied to the portfolio.

This repository should **not** contain:
- server administration notes,
- DNS inventory as source of truth,
- SSL operational procedures,
- infrastructure runbooks,
- reverse proxy administration details.

### `camilleaubert-infra`
This repository is responsible for:
- infrastructure mapping,
- current server audit,
- DNS and SSL documentation,
- Nginx Proxy Manager notes,
- deployment operations,
- subdomain routing strategy,
- production environment operational knowledge.

This repository should contain:
- infra docs,
- network diagrams,
- server runbooks,
- exposure and port audits,
- deployment strategy documentation,
- environment variable documentation templates.

This repository should **not** contain:
- application code,
- frontend source files,
- product copy,
- design system decisions specific to the UI.

## Relationship between repositories

The repositories are linked as follows:

- `camilleaubert.com` defines **what is built**
- `camilleaubert-infra` defines **how it is hosted and exposed**

Together they describe:
- the product,
- the deployment path,
- the infrastructure boundaries,
- the future evolution model.

## Rule of thumb

If the topic is about:
- UX,
- content,
- Astro code,
- design,
- components,
- portfolio behavior,

it belongs in **`camilleaubert.com`**.

If the topic is about:
- DNS,
- SSL,
- server access,
- reverse proxy,
- network exposure,
- deployment operations,

it belongs in **`camilleaubert-infra`**.