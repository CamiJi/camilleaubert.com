# Audit Tickets — camilleaubert.com

> **Date :** 2026-06-21
> **Source :** Audit croisé — analyse technique automatique + recommandations éditoriales personnalisées
> **Objectif :** Aligner le site sur le positionnement *Lead Developer & AI Solutions Architect* et corriger les lacunes techniques bloquantes.

---

## Vue d'ensemble

| Priorité | Catégorie | Nombre de tickets | Effort estimé |
|----------|-----------|-------------------|---------------|
| 🔴 Critique | Contenu | 4 | ~45 min |
| 🟠 Important | Contenu + SEO | 2 | ~30 min |
| 🟡 Standard | A11y + Performance | 3 | ~40 min |
| 🟢 Confort | Code | 1 | ~30 min |

---

## ✍️ Partie 1 — Contenu (à traiter en premier)

### 🔴 Ticket C1 — Refonte du Hero / Baseline

**Fichier concerné :** `src/data/home.json`

**Problème :** Le texte d'introduction est trop générique "full-stack" et ne reflète pas le positionnement *AI Solutions Architect*.

**Action :** Remplacer `intro` et `introHtml` par le nouveau contenu :

> *Architecting robust, scalable web ecosystems and production-grade AI systems. I bridge the gap between complex enterprise data and intelligent, non-deterministic client applications. Focused on engineering secure RAG workflows, autonomous agent orchestration, and cost-efficient token economic models.*

**Champs à modifier :**
- `intro`
- `introHtml` (avec les spans de mise en forme adaptés)

---

### 🔴 Ticket C2 — Mise à jour du poste Cegos (Career)

**Fichier concerné :** `src/data/career.json`

**Problème :** L'intitulé *"Full Stack Web Developer"* positionne comme exécutant, pas comme lead technique.

**Action :**
- Remplacer le rôle → **"Lead Developer & AI Architect"**
- Remplacer la description par :
  > *Architecting enterprise knowledge retrieval systems (RAG) to safely expose internal data to LLM layers, minimizing hallucinations and non-deterministic behavior. Leading the modernization and scaling of the corporate multi-tenant ecosystem (13 platforms across 7 countries) handling high-traffic volume on AWS and Docker environments. Driving tech-stack evolution and engineering processes, shifting team velocity through structured AI assistance and rigorous code review patterns.*
- Mettre à jour les skills : `RAG`, `LLM Integration`, `Laravel`, `React`, `AWS`, `Docker`, `CI/CD`

---

### 🔴 Ticket C3 — Refonte des fiches projets (Projects)

**Fichier concerné :** `src/data/projects.json`

**Problème :** Descriptions trop vagues, pas de mention des choix d'architecture concrets.

**Action :**
1. **Projet "Enterprise Retrieval Systems"** → nouvelle description :
   > *Designed and deployed an end-to-end RAG architecture for enterprise data access. Implemented advanced vector search pipelines, context window optimization strategies, and robust data isolation governance. Focused heavily on inference cost management (Token Economy) and output reliability.*
   - Tech tags à jour : `RAG`, `Vector Search`, `Python`, `AWS`, `LLM Integration`

2. **Ajouter un 4ème projet** — "Autonomous Agent Workflow & Custom RAG" :
   > *Conceived and developed a production-ready autonomous agent system for multi-source indexing. Built utilizing modern Model Context Protocol (MCP) principles to connect isolated databases with generative models, enabling reliable automated task execution.*
   - Tech tags : `MCP`, `Multi-Agent`, `RAG`, `Python`, `TypeScript`
   - Catégorie : `Autonomous AI Systems`
   - Une image placeholder sera nécessaire dans `public/projects/`

---

### 🔴 Ticket C4 — Réorganisation de la grille Tech Stack

**Fichier concerné :** `src/data/tech.json`

**Problème :** La catégorisation actuelle ne met pas assez en avant les compétences IA.

**Action :**
- Ajouter une nouvelle catégorie **"AI & Data"** en première position :
  - `RAG Architecture` (niveau 2, icône `mdi:brain`)
  - `Context Engineering` (niveau 2, icône `mdi:message-processing`)
  - `Multi-Agent Orchestration` (niveau 2, icône `mdi:robot`)
  - `Token Cost Optimization` (niveau 2, icône `mdi:chart-line`)
  - `Vector Databases` (niveau 2, icône `mdi:database-search`)
- Renommer "Web Architecture" → **"Backend & Architecture"**
- Ajouter dans "Backend & Architecture" : `Enterprise Patterns`, `Multi-tenant Systems`

---

### 🟠 Ticket C5 — Nettoyage des données sociales

**Fichier concerné :** `src/data/home.json`

**Problème :** Plusieurs liens sociaux pointent vers `#` ou sont vides, et le CTA "View Profile / Resume available on request" est ambigu.

**Action :**
- Supprimer du fichier les entrées sociales avec `url: "#"` ou `url: ""` (Leetcode, Behance, Whatsapp, Facebook)
- Clarifier le champ `resumeUrl` : soit pointer vers un vrai PDF, soit adapter le texte du bouton

---

## 🔧 Partie 2 — Technique

### 🟠 Ticket T1 — SEO : Meta tags, Open Graph, JSON-LD

**Fichiers concernés :** `src/layouts/Layout.astro`, `astro.config.mjs`

**Problème :** Aucune balise meta descriptive, pas d'aperçu sur les réseaux sociaux, pas de structured data.

**Action :**
- [ ] Ajouter `<meta name="description">` dans `<head>`
- [ ] Ajouter les balises Open Graph : `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- [ ] Ajouter les balises Twitter Card : `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- [ ] Ajouter `<link rel="canonical">`
- [ ] Ajouter un bloc `<script type="application/ld+json">` avec le schema `Person`
- [ ] Installer `@astrojs/sitemap` pour générer `sitemap.xml`
- [ ] Créer un `robots.txt` dans `public/`

---

### 🟡 Ticket T2 — Accessibilité (A11y)

**Fichiers concernés :** `src/layouts/Layout.astro`, `src/components/nav.astro`, `src/components/home.astro`

**Problème :** Lecteurs d'écran exposés à du bruit, boutons sans label, pas de skip-link.

**Action :**
- [ ] Ajouter `aria-hidden="true"` sur `#matrix-container`
- [ ] Ajouter un `aria-label` explicite sur le bouton theme toggle
- [ ] Ajouter des `aria-label` sur chaque lien social (GitHub, LinkedIn, Email)
- [ ] Ajouter un lien "Skip to main content" en haut du `<body>`
- [ ] Vérifier le contraste de `text-subtext` (#b2bed1) sur `background` (#0F0D29) → ratio 5.2:1 ✓ (passe AA)

---

### 🟡 Ticket T3 — Performance

**Fichiers concernés :** `src/layouts/Layout.astro`, `src/components/`

**Problème :** Animation matrix coûteuse en continu, images non lazy-loadées, gros scripts inline.

**Action :**
- [ ] Extraire le script matrix + scroll-to-top de `Layout.astro` vers un fichier `src/scripts/matrix.ts` chargé via `<script src>` avec `defer`
- [ ] Ajouter `loading="lazy"` et `decoding="async"` sur toutes les images de projets et carrière
- [ ] Ajouter `fetchpriority="high"` sur la photo de profil (image LCP)
- [ ] Unifier la logique de scroll-reveal (actuellement dupliquée dans `career.astro`, `contact.astro`, `projects.astro`) → un script partagé

---

### 🟡 Ticket T4 — Correction de la photo de profil

**Fichiers concernés :** `public/`, `src/data/home.json`

**Problème :** `photoUrl` pointe vers `favicon.svg`, qui n'est pas une photo et rend mal dans le cercle de profil.

**Action :**
- [ ] Ajouter une vraie photo de profil dans `public/` (par ex. `public/photo.webp`)
- [ ] Mettre à jour `photoUrl` dans `home.json` → `"photo.webp"`
- [ ] Supprimer ou renommer `public/favicon.svg` pour éviter toute confusion

---

### 🟢 Ticket T5 — Qualité de code

**Fichiers concernés :** `src/pages/index.astro`, `src/components/home.astro`, `Dockerfile`

**Problème :** Logique API fetch dupliquée, types éparpillés, Dockerfile référence un fichier inexistant.

**Action :**
- [ ] Extraire les types partagés (`ProfileData`, `Social`, etc.) dans `src/types.ts`
- [ ] Créer un helper `fetchWithFallback()` dans `src/lib/data.ts` pour éviter la duplication entre `index.astro` et `home.astro`
- [ ] Corriger le `Dockerfile` : remplacer `package-lock.json` par `package-lock.json` ou utiliser `npm install` au lieu de `npm ci`
- [ ] Nettoyer les imports inutilisés et le code commenté mort (ex: section Education dans `nav.astro`)

---

## 🗓️ Ordre d'exécution recommandé

```
C1 → C2 → C3 → C4 → C5 → T1 → T2 → T3 → T4 → T5
│    │     │     │     │     │     │     │     │
│    │     │     │     │     │     │     │     └── Confort dev
│    │     │     │     │     │     │     └── Correction visuelle
│    │     │     │     │     │     └───── Performance
│    │     │     │     │     └─── Accessibilité
│    │     │     │     └─── SEO (bloquant pour le référencement)
│    │     │     └─── Données sociales
│    │     └─── Projets
│    └─── Career
└─── Hero (première impression)
```

---

## 📝 Notes

- Tous les fichiers de données sont en JSON → faciles à modifier sans toucher aux composants Astro.
- Les tickets T1 à T5 nécessitent de modifier des fichiers `.astro` → un `astro build` de validation est recommandé après chaque ticket.
- Le ticket C3 implique l'ajout d'images → prévoir des captures d'écran ou visuels pour le nouveau projet.
