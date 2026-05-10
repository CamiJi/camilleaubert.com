# Operations guide

This document covers routine checks, troubleshooting, and recovery steps for the production deployment of `camilleaubert.com`.

## Scope

- Application repo: `CamiJi/camilleaubert.com`
- Production path: `/home/ubuntu/apps/portfolio`
- Production container: `portfolio-astro`
- Reverse proxy container: `proxy-app-1`
- Public domain: `https://camilleaubert.com`
- SSH alias: `camille-prod`

## Quick status checks

### Check SSH access

```bash
ssh camille-prod "hostname && whoami"
```

### Check application files on server

```bash
ssh camille-prod "cd /home/ubuntu/apps/portfolio && ls -la"
```

### Check running containers

```bash
ssh camille-prod 'docker ps --format "table {{.Names}}\t{{.Image}}\t{{.Status}}\t{{.Ports}}"'
```

Expected containers:

- `portfolio-astro`
- `proxy-app-1`

### Check Docker Compose configuration

```bash
ssh camille-prod "cd /home/ubuntu/apps/portfolio && docker compose config"
```

## HTTP and routing checks

Run these checks after each deployment:

```bash
curl -I http://camilleaubert.com
curl -k -I https://camilleaubert.com
curl -I http://www.camilleaubert.com
curl -k -I https://www.camilleaubert.com
```

Expected behavior:

- `http://camilleaubert.com` returns `301` to HTTPS
- `https://camilleaubert.com` returns `200`
- `http://www.camilleaubert.com` redirects
- `https://www.camilleaubert.com` redirects to the apex domain

## Confirm which version is on the server

### Check the homepage source file on the server

```bash
ssh camille-prod "sed -n '1,220p' /home/ubuntu/apps/portfolio/src/pages/index.astro"
```

Use this when you need to verify whether the server still contains an old placeholder homepage.

### Check the rendered homepage directly

```bash
curl -k https://camilleaubert.com | head -n 40
```

## Standard redeploy sequence

Use this sequence for a safe redeploy with the current workflow:

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

## Troubleshooting

### Problem: the site still shows the old placeholder page

Symptom:

- homepage still displays `Site en construction (AstroJS)`

Likely cause:

- old source files still exist on the server

Checks:

```bash
ssh camille-prod "grep -Rni 'en construction' /home/ubuntu/apps/portfolio"
ssh camille-prod "sed -n '1,220p' /home/ubuntu/apps/portfolio/src/pages/index.astro"
```

Fix:

1. re-sync the current application files to the server
2. rebuild the container
3. hard refresh the browser

Commands:

```bash
rsync -avz ./src/ camille-prod:/home/ubuntu/apps/portfolio/src/
rsync -avz ./public/ camille-prod:/home/ubuntu/apps/portfolio/public/
rsync -avz ./package.json camille-prod:/home/ubuntu/apps/portfolio/
rsync -avz ./package-lock.json camille-prod:/home/ubuntu/apps/portfolio/
rsync -avz ./astro.config.mjs camille-prod:/home/ubuntu/apps/portfolio/
ssh camille-prod "cd /home/ubuntu/apps/portfolio && docker compose up -d --build"
```

### Problem: `docker compose` says no configuration file found

Symptom:

```text
no configuration file provided: not found
```

Cause:

- `docker-compose.yml` is missing from `/home/ubuntu/apps/portfolio`

Check:

```bash
ssh camille-prod "cd /home/ubuntu/apps/portfolio && ls -la"
```

Restore this file:

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

Then rerun:

```bash
ssh camille-prod "cd /home/ubuntu/apps/portfolio && docker compose up -d --build"
```

### Problem: Docker build runs out of memory during `npm install`

Symptom:

- build fails with JavaScript heap out of memory

Cause:

- memory-constrained build step during dependency installation

Fix:

Use the production Dockerfile that:

- copies `package-lock.json`
- uses `npm ci`
- sets `NODE_OPTIONS=--max-old-space-size=512`

Canonical Dockerfile:

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

### Problem: Node/npm is using Windows binaries from WSL

Symptom:

- `esbuild` install failures
- UNC path errors
- `cmd.exe` launched during npm install

Check:

```bash
which node
which npm
node -v
npm -v
```

Fix:

Use Linux Node inside WSL with `nvm`.

Typical setup:

```bash
nvm install 22
nvm use 22
nvm alias default 22
```

### Problem: browser still shows old content after a successful deploy

Likely cause:

- browser cache or cached assets

Checks:

```bash
curl -k https://camilleaubert.com | head -n 40
curl -k -I https://camilleaubert.com
```

Fix:

- hard refresh
- test in a private window
- compare browser output with `curl`

## Recovery notes

### Minimum files required for a working production rebuild

These must exist in `/home/ubuntu/apps/portfolio`:

- `docker-compose.yml`
- `Dockerfile`
- `package.json`
- `package-lock.json`
- `astro.config.mjs`
- `src/`
- `public/`

### Canonical `docker-compose.yml`

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

## Suggested future hardening

To reduce deployment risk, version the deployment files in Git and consider adding:

- `docker-compose.yml` to the app repo or infra repo as the explicit source of truth
- a helper script such as `scripts/deploy.sh`
- a non-destructive sync strategy documented in one place only
