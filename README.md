# camilleaubert.com

Portfolio website for `camilleaubert.com`.

## Stack
- Astro
- Docker
- Nginx Proxy Manager on the server as reverse proxy

## Local development
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```

## Deployment model
The application is deployed on a single Ubuntu server with Docker Compose.

Main runtime target:
- container: `portfolio-astro`
- reverse proxy target: `portfolio-astro:80`

## Related repository
- Infrastructure: `CamiJi/camilleaubert-infra`