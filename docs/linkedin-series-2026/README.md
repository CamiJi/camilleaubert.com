# Série LinkedIn — « Le RAG maison » (4 posts, hebdo)

Récit de la migration du moteur de recherche Cegos, publiée en 4 posts LinkedIn
hebdomadaires. Chaque post renvoie vers le REX complet du blog avec une ancre
différente.

**Article cible** : https://camilleaubert.com/writing/2026-09-14-rag-rex/

## Rythme de publication

- **Cadence** : mardi ou mercredi matin (~9 h), une semaine d'écart
- **Post 1** : publication manuelle (« y aller piano », mesurer la réception)
- **Posts suivants** : au choix manuel ou programmé (mercredi 8 h) selon la
  réception du post 1
- Le post 1 ancre l'histoire globale ; les 3 suivants approfondissent

## Planning

| Semaine | Post | Fichier | Ancre blog |
|---------|------|---------|------------|
| 1 | L'amorce : « Excel » et le pari du RAG maison | [semaine-1-amorce.md](semaine-1-amorce.md) | (haut de page) |
| 2 | Le pipeline en 5 étapes | [semaine-2-pipeline.md](semaine-2-pipeline.md) | `#pipeline` |
| 3 | La mort de la page « Weights » | [semaine-3-weights.md](semaine-3-weights.md) | `#la-lecon` |
| 4 | Le golden dataset et le harness engineering | [semaine-4-golden-dataset.md](semaine-4-golden-dataset.md) | `#a-refaire` |

Après publication de chaque post : noter l'URL LinkedIn dans le fichier
correspondant (champ `URL LinkedIn (après publication)`) puis ajouter la même
URL au frontmatter `linkedinUrl` de l'article si pertinent.

## Illustrations — règle simple + pré-prompts

**Rien d'interne** : pas de captures des outils internes avec URLs système.
Tout ce qui est public sur cegos.fr ou re-dessiné est sans risque.

**Format LinkedIn 2026 : `1080 × 1350 px` portrait `4:5`, PNG sRGB < 5 Mo.**
Voir pré-prompts complets (Cegos + site) : [../image-generation-prompts.md](../image-generation-prompts.md) — préfixe à coller dans ton IA image, texte ajouté après dans Canva (Ryker/Raleway).

| Post | Illustration principale | Variante |
|------|------------------------|----------|
| 1 | Capture publique recherche cegos.fr, requête « Excel » + résultats | Schéma « SaaS externe → moteur maison » en 2 blocs |
| 2 | Schéma ASCII du pipeline rendu propre (Excalidraw/Canva, style monospace), 5 blocs avec temps | — |
| 3 | Photo d'un vrai post-it avec les 3 règles manuscrites | Graphique barres « réglages pour expliquer un classement : ancien / V1 Weights / V2 » |
| 4 | Capture du golden dataset XLSX (requête / résultat attendu), intitulés floutés | Carte chiffres « 150 requêtes · 254 tests · 4 personnes · 1 été » |

## Checklist par post

- [ ] Illustration choisie / produite
- [ ] Post relu, lien blog vérifié (bonne ancre)
- [ ] Publié (manuel ou programmé)
- [ ] URL LinkedIn notée dans le fichier
- [ ] STATUT dans ce README mis à jour

## Statut

- [ ] Semaine 1 — en attente de publication
- [ ] Semaine 2 — en attente
- [ ] Semaine 3 — en attente
- [ ] Semaine 4 — en attente
