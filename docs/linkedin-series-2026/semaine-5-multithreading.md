# Post LinkedIn — Multithreading hiérarchisé (brouillon programmé)

- **Statut** : brouillon V2 (skills), publication non prévue à court terme
- **Méthode** : `linkedin-repurposer` (blog → post natif) + `linkedin-post-writer` formule **F18 False-Binary Dissolve** (goal : comments) + `linkedin-humanizer` strict + audit
- **Pourquoi F18** : le sujet oppose deux réponses évidentes qui échouent (tout regarder / tout paralléliser) → troisième voie hiérarchisée. F18 est faite pour ça (comments/reposts). 2026 caveat appliqué : un seul contraste dans le post, pas de frame générique "It's not X, it's Y", un fait daté dedans.
- **Date cible** : **jeudi 10h00 Paris** (programmé, mercredi matin déjà pris par série RAG)
  - Fallback : mardi 7h00
- **Lien blog FR** : https://camilleaubert.com/writing/2026-09-17-dev-multithreading-hierarchise/ (en 1er commentaire, jamais dans le corps)
- **Lien blog EN** : https://camilleaubert.com/writing/2026-09-17-from-single-task-to-hierarchical-multithreading/

---

**POST FINAL (validé skills, prêt à programmer jeudi 10h)**

```text
30 minutes. ⏱️ C'est le temps que mon agent passe seul sur un sujet cadré.

Deux réflexes évidents. Ratés tous les deux, chez moi.

Le premier : le regarder travailler. Il n'avance pas plus vite. Je perds 30 minutes.

Le second : tout paralléliser. Trois sujets complexes en même temps. Je m'éparpille, la qualité chute.

Depuis début septembre, je fais autrement : trois fils, hiérarchisés, jamais à égalité.

🛡️ Fil 1, la logique qui part en prod. Quand il s'arrête, il reprend toute ma concentration.
🧪 Fil 2, un POC léger, sans risque.
✍️ Fil 3, écrire : une note, un article. C'est là que je vérifie que j'ai compris.

Deux limites que je garde : sur un très gros sujet, full focus à 100%. Et la mise en prod reste un rituel hebdo, espace dédié, zéro parallèle.

Le point dur est technique. Trois agents sur la même codebase, c'est le chaos. Git worktree : un dossier par fil, une branche par intention.

Et vous, que faites-vous pendant les 30 minutes d'attente d'un agent ? 💬

P.S. Schémas et méthode complète : lien en premier commentaire.

#IntelligenceArtificielle #Engineering
```

**Premier commentaire (à poster 2 min après, jamais de lien dans le corps)**
```text
L'article complet avec les 3 schémas : https://camilleaubert.com/writing/2026-09-17-dev-multithreading-hierarchise/
Version anglaise : https://camilleaubert.com/writing/2026-09-17-from-single-task-to-hierarchical-multithreading/
```

---

**Audit humanizer (strict, detection-only) — FINAL**
- Bloqueurs : 0. Hook number-first <210 chars, statement, pas de question ✅ · 0 lien corps ✅ · 0 "Here's what / Stop X start Y / The result? / Plot twist" ✅ · 0 parallélisme négatif ("n'est pas mental. Il est technique" réécrit en phrase positive) ✅ · fragments standalone : 1 ("Ratés tous les deux, chez moi.") ≤ 2 ✅ · em dashes : 0 ✅
- Warnings : 0. Vocab 2026 : aucun marqueur dense ✅ · 1 seul contraste (F18) ✅ · 1 seule liste avec preuves (Fil 1/2/3) ✅ · hashtags 2 en fin ✅ · longueur ~1100 chars (sweet spot 900-1300) ✅
- Fingerprints : nombre + référent ("30 minutes… mon agent… sujet cadré") ✅ · entité nommée (Git worktree) ✅ · détail 1re personne ("Je m'éparpille") ✅ · contradiction plate ("Ratés tous les deux, chez moi") ✅ · fait daté ("Depuis début septembre") ✅ · question close spécifique + P.S. réel ✅
- Pipeline skills : repurposer (spine blog → re-hook, expansion native) → post-writer F18 (comments CTO) → humanizer strict (scrub + rhythm + fingerprints + self-check) → audit ci-dessus. Rien inventé (figures = les tiennes).

**Visuel tout-en-un V4 cartoon dev (1080x1350 portrait 4:5, PNG sRGB <5Mo) — un seul prompt, texte inclus**
Choix assumé : cartoon + capuche (tes docs l'interdisent normalement — ici c'est toi qui demandes, donc on y va). Petit dev friendly de dos/trois-quarts, sweet à capuche, devant 3 écrans de tailles décroissantes : grand écran PROD, moyen POC, petit RECIT.
```text
LinkedIn 2026, portrait 4:5, 1080x1350px, PNG, sRGB, 80px safe margins, mobile-first.

STYLE: friendly cartoon, soft rounded shapes, cozy realistic dev setup, warm night lighting. Palette: deep warm background #14141C, screens glowing, hoodie dusty blue #3E4C6D, skin natural, accents Iris #8D8AF0 and apricot #F2B880. Clean, readable at palm width, no clutter, no watermark.

SCENE: small cartoon developer seen from behind at three-quarter angle, wearing a hoodie, sitting at a desk, facing 3 monitors of clearly decreasing size left to right. Big left screen shows a serious agent at work labeled PROD, medium center screen a playful agent labeled POC, small right screen a notepad agent labeled RECIT. A small shield badge on the big screen. Warm glow on the dev face from screens.

RENDER THIS EXACT TEXT ONLY, bold geometric sans, crisp, no accents: top headline "1 dev. 3 agents." / on screens "PROD 70%" "POC 20%" "RECIT 10%" / bottom small "camilleaubert.com".

TEXT RULES: headline 90px centered top, screen labels 48px+ high contrast pills, bottom URL small, generous spacing, nothing near edges. No other text, no logo.
Negative: blurry text, misspelled text, extra letters, photorealism, scary faces, distorted hands, neon green, watermark, oversaturation.
```

**Checklist 2026**
- [ ] Visuel 1080x1350 généré, texte ajouté après (pas par l'IA)
- [ ] Lien blog en 1er commentaire
- [ ] Programmé jeudi 10h (ou mardi 7h)
- [ ] Présent 60 min après publication pour répondre (commentaires 30+ mots)
- [ ] Pas d'édit pendant 60 min
- [ ] URL notée ici après publication + frontmatter `linkedinUrl` si pertinent

**URL LinkedIn (après publication)** : _à compléter_
