# Deployment runbook

This document describes the real deployment workflow currently used for the Camille Aubert portfolio and the infrastructure dependencies around it.

## Scope

- Application repo: `CamiJi/camilleaubert.com`
- Infra/support repo: `CamiJi/camilleaubert-infra`
- Production host: `camille-prod`
- Public domain: `https://camilleaubert.com`

## Current production architecture

### Runtime layout

- Single Ubuntu server on AWS
- Nginx Proxy Manager running in Docker as the public reverse proxy
- Portfolio served by a dedicated Docker container named `portfolio-astro`
- Cloudflare used for DNS in front of the server

### Important server paths

- Proxy stack: `/home/ubuntu/apps/proxy`
- Portfolio app: `/home/ubuntu/apps/portfolio`

## Important reality check

The current deployment is **not** a git-based deploy on the server.

`/home/ubuntu/apps/portfolio` is currently a server-side working directory that is rebuilt locally with Docker. The server directory is **not** a Git clone, so `git pull` will not work there.

That means the deployment workflow is currently:

1. Prepare and validate code locally
2. Copy application files to the server
3. Ensure deployment files exist on the server
4. Rebuild and restart the portfolio container with Docker Compose
5. Validate the site in production

## SSH access

### Recommended SSH alias

Use the configured alias:

```bash
ssh camille-prod
```

If needed, verify the alias in your SSH config.

### Basic connectivity check

```bash
ssh camille-prod "hostname && whoami && pwd"
```

Expected user is `ubuntu`.

## Production files required on the server

The following files must exist in `/home/ubuntu/apps/portfolio` for deployment to work:

- `docker-compose.yml`
- `Dockerfile`
- `package.json`
- `package-lock.json`
- `astro.config.mjs`
- `src/`
- `public/`

## Canonical production Docker Compose file

File: `/home/ubuntu/apps/portfolio/docker-compose.yml`

```yaml
services:
  portfolio:
    build: .
    container_name: portfolio-astro
    restart: unless-stopped
    networks:
      - travel-network

networks:
  travel-network:
    external: true
```

## Canonical production Dockerfile

File: `/home/ubuntu/apps/portfolio/Dockerfile`

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
ENV NODE_OPTIONS=--max-old-space-size=512
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Local pre-deploy checklist

Before deploying:

1. Ensure the latest code is committed and pushed
2. Validate local install/build in WSL/Linux
3. Confirm the home page and main routes are correct
4. Confirm the site is no longer the placeholder version

Recommended commands:

```bash
cd ~/dev/camilleaubert/camilleaubert.com
npm install
npm run build
```

## Safe file sync strategy

### Warning

Do **not** blindly sync the whole project with destructive deletion unless you are sure the server-side infra files also exist locally.

A previous deployment issue happened because `docker-compose.yml` existed only on the server and was lost.

### Recommended sync approach

If the application repo still does not version `docker-compose.yml`, sync application files carefully.

Recommended examples:

```bash
rsync -avz ./src/ camille-prod:/home/ubuntu/apps/portfolio/src/
rsync -avz ./public/ camille-prod:/home/ubuntu/apps/portfolio/public/
rsync -avz ./package.json camille-prod:/home/ubuntu/apps/portfolio/
rsync -avz ./package-lock.json camille-prod:/home/ubuntu/apps/portfolio/
rsync -avz ./astro.config.mjs camille-prod:/home/ubuntu/apps/portfolio/
rsync -avz ./README.md camille-prod:/home/ubuntu/apps/portfolio/
```

If deployment files are versioned locally in the future, then a fuller sync can be considered.

## Server-side verification before rebuild

Check required files:

```bash
ssh camille-prod "cd /home/ubuntu/apps/portfolio && ls -la"
```

Check Compose configuration:

```bash
ssh camille-prod "cd /home/ubuntu/apps/portfolio && docker compose config"
```

Check current home page source if needed:

```bash
ssh camille-prod "sed -n '1,220p' /home/ubuntu/apps/portfolio/src/pages/index.astro"
```

## Deployment command

Once files are in place on the server:

```bash
ssh camille-prod "cd /home/ubuntu/apps/portfolio && docker compose up -d --build"
```

Expected successful signals:

- `Image portfolio-portfolio Built`
- `Container portfolio-astro Recreated`
- `Container portfolio-astro Started`

## Post-deploy validation

### Container status

```bash
ssh camille-prod 'docker ps --format "table {{.Names}}\t{{.Image}}\t{{.Status}}\t{{.Ports}}"'
```

Expected containers:

- `portfolio-astro`
- `proxy-app-1`

### HTTP checks

```bash
curl -I http://camilleaubert.com
curl -k -I https://camilleaubert.com
curl -I http://www.camilleaubert.com
curl -k -I https://www.camilleaubert.com
```

Expected results:

- `http://camilleaubert.com` -> `301` to HTTPS
- `https://camilleaubert.com` -> `200`
- `http://www.camilleaubert.com` -> redirect
- `https://www.camilleaubert.com` -> redirect to apex

### Browser checks

- Open `https://camilleaubert.com`
- Hard refresh
- Verify the new homepage content is visible
- Verify About / Projects / Contact
- Verify mobile rendering
- Verify favicon and external links

## Fast redeploy checklist

Use this exact sequence:

```bash
cd ~/dev/camilleaubert/camilleaubert.com
npm run build
rsync -avz ./src/ camille-prod:/home/ubuntu/apps/portfolio/src/
rsync -avz ./public/ camille-prod:/home/ubuntu/apps/portfolio/public/
rsync -avz ./package.json camille-prod:/home/ubuntu/apps/portfolio/
rsync -avz ./package-lock.json camille-prod:/home/ubuntu/apps/portfolio/
rsync -avz ./astro.config.mjs camille-prod:/home/ubuntu/apps/portfolio/
ssh camille-prod "cd /home/ubuntu/apps/portfolio && docker compose up -d --build"
curl -k -I https://camilleaubert.com
```

## Known pitfalls

### 1. Using Windows Node/npm from WSL

Symptom:

- `esbuild` install failures
- UNC path issues
- `cmd.exe` invoked during install

Fix:

- Use Linux Node inside WSL via `nvm`
- Verify with:

```bash
which node
which npm
node -v
npm -v
```

### 2. Old code still deployed

Symptom:

- Site still shows `Site en construction (AstroJS)`

Cause:

- Server app directory contains an old source snapshot

Fix:

- Re-sync application files to `/home/ubuntu/apps/portfolio`
- Rebuild with Docker Compose

### 3. `docker compose` says no configuration file found

Symptom:

```text
no configuration file provided: not found
```

Cause:

- `docker-compose.yml` is missing from `/home/ubuntu/apps/portfolio`

Fix:

- Restore the canonical `docker-compose.yml`
- Re-run `docker compose up -d --build`

### 4. Docker build OOM during `npm install`

Symptom:

- `FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory`

Fix:

- Use the canonical Dockerfile with:
  - `COPY package.json package-lock.json ./`
  - `RUN npm ci`
  - `ENV NODE_OPTIONS=--max-old-space-size=512`

## Suggested next improvement

To make future deployments safer, version these deployment files in Git:

- `docker-compose.yml`
- `Dockerfile`
- optional deployment helper script like `scripts/deploy.sh`

That would make the server reproducible and avoid drift between local and production.
