# Pré-prompts génération d'images — LinkedIn Cegos + site camilleaubert.com

> **Date :** 2026-09-17
> **Status :** Référence active
> **Source tokens Cegos :** `vendor/cegos/wp-cegos-gutenberg-blocks/src-tailwind/design-system/template.php` + `src-tailwind/_base/cegos-tailwind-runtime.css`
> **Source tokens site :** `src/styles/global.css` (Neutral + Iris, dark only)

Ce document est la **source unique** pour générer des visuels cohérents avec ton IA image.
Deux identités séparées et assumées :

| Usage | Identité | Fichier à appliquer |
|---|---|---|
| Posts LinkedIn liés à Cegos / RAG / formation | **Cegos corporate** | Pré-prompt A |
| Covers `/writing/`, OG images, projets du site | **Site premium dark Iris** | Pré-prompt B |

---

## 0. Format LinkedIn le plus efficace (2026) — à appliquer dans les 2 cas pour LinkedIn

Synthèse des guides 2026 (ContentIn, Postbold, DMpro, Hooktide) :

- **Feed mobile = ~80 % de l'audience.** Le facteur qui drive le clic, ce n'est pas la dimension récompensée par l'algo, c'est la **surface écran + dwell time**.
- **Gagnant engagement natif : portrait `4:5` — `1080 × 1350 px`, PNG, sRGB, < 5 Mo.**
  - Prend ~2× plus de place verticale qu'un paysage `1200 × 627`.
  - Mesures terrain citées : **+30 à 60 % d'impressions vs paysage**, **+20 à 30 % de dwell time** sur carrousels portrait.
  - Tout ce qui dépasse `4:5` (ex. `9:16`) est **recadré** par LinkedIn. Ne pas générer en `9:16` pour un post simple.
- **Second choix universel : carré `1:1` — `1080 × 1080 px`.** Jamais recadré, safe desktop + mobile + multi-images.
- **Paysage `1.91:1` — `1200 × 627 px` : uniquement pour les link previews** (image OG du blog) ou vraie photo large. À éviter pour un visuel natif.
- **Carrousel (le format à plus fort taux d'engagement, ~24 % cité) : PDF, 1 slide = `1080 × 1350 px`, PNG par page, même ratio sur toutes les pages**, titre en haut, corps au milieu, CTA en bas, marges généreuses.
- Posts avec image ≈ **2× plus de commentaires** que texte seul (data LinkedIn).

**Règle d'or à coller dans tous tes prompts LinkedIn :**

```
format: portrait 4:5, 1080x1350px, PNG, sRGB, safe margins 80px on all sides,
headline at top, no text smaller than 48px equivalent, no crop-sensitive element near edges
```

**Checklist avant upload :**
- [ ] `1080 × 1350` (ou `1080 × 1080` si déclinaison multi-plateforme)
- [ ] Texte lisible à largeur paume, sans zoom
- [ ] Logo / URL en bas pour l'attribution lors des partages
- [ ] Pas d'URL interne, pas de capture outil interne (règle série RAG : rien d'interne)
- [ ] Export PNG si texte/graphique, JPG si photo

---

## A. Pré-prompt LinkedIn — identité Cegos (à copier-coller)

Utilise ce bloc **tel quel** en préfixe de chacun de tes prompts image pour les posts Cegos / RAG / formation.

### A1. Version FR (copier-coller)

```text
FORMAT IMPOSÉ — LinkedIn 2026 : image portrait 4:5, 1080x1350px, PNG, sRGB.
Composition verticale : titre accroche en haut, visuel principal au centre,
espace logo/CTA en bas. Marges de sécurité 80px tout autour, aucun élément
important près des bords. Texte minimal, très grande lisibilité mobile.

IDENTITÉ GRAPHIQUE CEGOS — design system Gutenberg :
- Palette principale : vert Cyprus #004641, bleu nuit Fuzzy Wuzzy #001B71,
  prune Ripe Plum #2D0051, bordeaux Pompadour #62003B, texte Diesel #1D0000.
- Accents : rouge Alizarin #E6233A (liens/CTA uniquement), bleu Bondi #009EAA.
- Fonds clairs : blanc cassé #F4F2F2, pastels Water Leaf #A1EAE6, Azalea #F9CBD2,
  Fresh Air #B3DFFF, Egg White #FFF0C6, Botticelli #D0E0EA, Madang #BDF4CC.
- Typographies : titres Ryker (géométrique, medium), texte Raleway.
- Style : corporate learning premium, humain et fiable, Beyond Knowledge.
  Photographie : portraits et collectifs naturels, lumière douce, pas de stock
  froid. Illustration : flat vectoriel épuré, coins arrondis 10px, boutons
  pill-shaped (radius 40px).
- Motif signature : ligne fine continue qui traverse le visuel (référence
  identité Cegos 2023 CBA Design).

CONTRAINTES IA :
- Ne génère AUCUN texte long, AUCUN logo Cegos approximatif, AUCUNE URL,
  AUCUNE capture d'interface. Laisse une zone titre vide en haut, j'ajoute
  le texte et le logo après dans Canva.
- Photorealiste OU flat corporate cohérent, pas de cartoon, pas de néon gamer,
  pas de matrix, pas de watermark.
- Négatif : blurry text, distorted hands, watermark, stock cheesy, oversaturation.

SUJET À ILLUSTRER : [DÉCRIS ICI EN 1 PHRASE, ex. schéma 5 blocs pipeline RAG
Embedding → Meaning → Final → Pages → Contexte, style monospace propre]
```

### A2. Version EN (meilleure pour Midjourney / Firefly / SDXL)

```text
LinkedIn 2026 FORMAT: portrait 4:5, 1080x1350px, PNG, sRGB, 80px safe margins,
headline zone on top, main visual center, logo/CTA space bottom, mobile-first
legibility, no small text.

CEGOS DESIGN SYSTEM IDENTITY, adapted from Gutenberg tokens:
- Primary: Cyprus green #004641, Fuzzy Wuzzy navy #001B71, Ripe Plum #2D0051,
  Pompadour #62003B, Diesel text #1D0000.
- Accents: Alizarin red #E6233A (links/CTA only), Bondi Blue #009EAA.
- Light backgrounds: #F4F2F2, pastels #A1EAE6 #F9CBD2 #B3DFFF #FFF0C6 #D0E0EA #BDF4CC.
- Fonts: Ryker for headings, Raleway for body.
- Style: premium corporate learning, human and trustworthy, Beyond Knowledge.
  Photography: natural portraits and team moments, soft studio light.
  Illustration: clean flat vector, 10px rounded corners, pill-shaped buttons 40px radius.
- Signature: thin continuous line crossing the visual.

AI CONSTRAINTS: no long text, no fake Cegos logo, no URL, no UI screenshot,
leave empty title area on top, I add text and logo later in Canva.
Photorealistic OR coherent corporate flat, no cartoon, no gamer neon, no matrix,
no watermark. Negative: blurry text, distorted hands, watermark, cheesy stock,
oversaturation.

SUBJECT: [DESCRIBE IN 1 SENTENCE]
```

**Exemples d'usage série RAG (voir `linkedin-series-2026/`) :**
- S1 : `SUBJECT: public search page metaphor, external SaaS box → in-house RAG engine box, 2 blocks, Cyprus green and navy` + ajouter capture publique cegos.fr requête « Excel » séparément.
- S2 : `SUBJECT: clean 5-block pipeline diagram, monospace style, soft white background #F4F2F2, Cyprus green blocks` — texte ajouté dans Excalidraw/Canva, pas par l'IA.
- S3 : photo réelle d'un post-it manuscrit (ne pas générer par IA, prendre en photo).
- S4 : `SUBJECT: minimal data card, 150 queries · 254 tests · 4 people · 1 summer, Egg White background, Diesel text`.

---

## B. Pré-prompt site — identité camilleaubert.com premium dark Iris (à copier-coller)

Le site est volontairement **décorrélé de Cegos**. Il assoit l'image technicien / AI Solutions Architect. Style verrouillé dans `global.css`, à reproduire dans chaque visuel (covers `/writing/`, OG, projets).

### B1. Version FR (copier-coller)

```text
FORMAT : cover blog 1200x630px (OG) OU carré 1080x1080px selon usage.
Version dark uniquement, premium tech sobre et minimal.

IDENTITÉ SITE camilleaubert.com — tokens Neutral + Iris :
- Fond : #0b0b10 (near-black bleuté) avec halo radial subtil Iris 7% en haut.
- Accent unique : Iris #8d8af0. Texte principal #ededf2, texte secondaire #9a9aa8.
- Typographie : Satoshi Variable, titres + corps, graisse 500-700 pour titres.
- Style : dark premium, bento/card discret, grille aérée, ombres douces,
  révélations sobres. Sobre, élégant, clarté technique, moderne.
- Interdits site : pas d'effets bruyants, pas de matrix rain, pas de float,
  pas de fausse esthétique startup, pas de clichés geek (terminal vert,
  capuche, néon criard), pas de surcharge visuelle.

CONTRAINTES IA :
- Fond uni #0b0b10 ou dégradé très subtil vers Iris, grain léger accepté.
- Illustration centrale : schéma technique épuré, isométrique soft OU photo
  dark premium avec rim-light Iris. Éviter le photoréalisme blafard.
- AUCUN texte généré par l'IA (titres ajoutés en Satoshi dans Astro).
  Laisse le centre ou le tiers bas libre pour overlay texte.
- Négatif : light mode, white background, neon green matrix, hacker hoodie,
  cartoon, oversaturated rainbow, watermark, blurry, low-res.

SUJET À ILLUSTRER : [DÉCRIS ICI EN 1 PHRASE, ex. moteur RAG minimaliste,
vecteurs et nœuds Valkey, halo Iris sur fond #0b0b10]
```

### B2. Version EN (meilleure pour les modèles image)

```text
FORMAT: blog cover 1200x630px (OG) OR square 1080x1080px. Dark mode only,
premium minimal tech.

SITE IDENTITY camilleaubert.com, Neutral + Iris tokens:
- Background: #0b0b10 with subtle 7% Iris radial glow on top.
- Single accent: Iris #8d8af0. Main text #ededf2, subtext #9a9aa8.
- Font: Satoshi Variable, headings + body, 500-700 weight for titles.
- Style: dark premium, subtle bento/card grid, airy layout, soft shadows,
  restrained reveals. Sober, elegant, technical clarity, modern.
- Forbid: noisy effects, matrix rain, floating, fake startup aesthetics,
  geeky cliches (green terminal, hoodie, loud neon), clutter.

AI CONSTRAINTS: solid #0b0b10 background or very subtle Iris gradient, light
grain ok. Central illustration: clean technical diagram, soft isometric OR dark
premium photo with Iris rim-light. NO AI-generated text (titles overlaid in
Satoshi in Astro), keep center or lower third free for text overlay.
Negative: light mode, white background, neon green matrix, hacker hoodie,
cartoon, oversaturated rainbow, watermark, blurry, low-res.

SUBJECT: [DESCRIBE IN 1 SENTENCE]
```

**Usage OG auto :** les pages `/writing/[slug]/og.png` sont générées au build (sharp + Satoshi). Utilise le pré-prompt B pour l'image de fond, le titre reste rendu par le template — ne jamais incruster le titre dans l'image IA.

---

## Workflow recommandé

1. Génère le fond/illustration avec A ou B (sans texte).
2. Ajoute texte + logo dans Canva/Figma/Excalidraw :
   - LinkedIn Cegos : Ryker titre, Raleway corps, pastille pill blanche sur fond Cyprus/navy, lien `All domains →` style DS.
   - Site : Satoshi, `#ededf2` sur `#0b0b10`, accent `#8d8af0` parcimonieux.
3. Exporte : LinkedIn `1080×1350 PNG sRGB <5Mo`, OG blog `1200×630`, carré `1080×1080` si réutilisation multi-plateforme.
4. Note l'URL LinkedIn après publication dans le fichier `semaine-X-*.md` + frontmatter `linkedinUrl` de l'article (voir `linkedin-series-2026/README.md`).

## Références

- Tokens Cegos : `vendor/cegos/wp-cegos-gutenberg-blocks/src-tailwind/design-system/template.php`, `src-tailwind/_base/cegos-tailwind-runtime.css`
- Tokens site : `src/styles/global.css`, `docs/design-direction.md`, `docs/redesign-2026-09.md`
- Série en cours : `docs/linkedin-series-2026/README.md`
