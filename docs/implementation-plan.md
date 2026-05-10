# Implementation Plan

## Objective
Create the first working version of `camilleaubert.com` as a simple Astro portfolio site deployable on the current single-server infrastructure.

## Current state
- Repository contains framing and documentation
- No Astro application scaffold exists yet
- Infrastructure is already available and routes traffic through Nginx Proxy Manager

## V1 scope
The first version should include:
- a homepage
- an about page
- a projects page
- a contact page
- a shared layout
- global styles
- a minimal Docker setup for deployment

## Planned technical stack
- Astro
- TypeScript
- Simple CSS-based styling
- Docker for runtime packaging

## Target project structure
```text
src/
  pages/
    index.astro
    about.astro
    projects.astro
    contact.astro
  layouts/
    MainLayout.astro
  components/
    ui/
      Container.astro
      SectionTitle.astro
    sections/
      HeroSection.astro
      ProjectPreviewSection.astro
      ContactSection.astro
  styles/
    global.css
  data/
    site.ts
public/
  images/
```

## Implementation phases
### Phase 1 — project foundation
- Scaffold Astro project
- Add base configuration files
- Create `src/`, `public/`, and initial layout structure
- Add global stylesheet

### Phase 2 — first pages
- Create homepage
- Create about page
- Create projects page
- Create contact page

### Phase 3 — reusable building blocks
- Add shared layout
- Add container and section title components
- Add initial page sections

### Phase 4 — deployment readiness
- Add Dockerfile
- Add `.dockerignore`
- Ensure production build works
- Align runtime with `portfolio-astro`

## Notes
- Keep the first version intentionally simple
- Prefer clarity and maintainability over early complexity
- Content can start as static placeholders and be refined later
