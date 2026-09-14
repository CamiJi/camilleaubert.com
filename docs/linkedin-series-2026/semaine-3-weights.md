# Semaine 3 — La mort de la page « Weights »

- **Statut** : prêt à publier
- **Date cible** : J+14, mardi ou mercredi ~9 h
- **Lien blog** : https://camilleaubert.com/writing/2026-09-14-rag-rex/#la-lecon

---

Nous avons passé des semaines à construire une fonctionnalité que nous avons ensuite supprimée. Meilleure décision du projet.

Notre première version de moteur incluait une page « Weights » dans le back-office : des poids éditoriaux pour booster telles formations, tel contenu, selon le contexte. Une idée héritée de l'ancien moteur.

Les problèmes sont arrivés vite :

→ des classements imprévisibles — impossible de prédire l'effet d'un changement de poids

→ des résultats inexplicables — quand le métier demandait « pourquoi cet article sort ? », on ne savait pas répondre

→ une dette de configuration qui s'accumulait à chaque pays

Alors on a tout supprimé. Ce qui reste tient sur un post-it :

- épingles exactes (code produit, titre quasi exact)
- distance vectorielle
- micro-tiebreak best-seller en cas de quasi-égalité

Des poids légers reviendront peut-être — une promo, des sessions à remplir — mais à petite dose, et parce qu'on aura la main dessus. Le critère qui a tranché : un moteur simple s'explique, une config de poids, non.

L'histoire complète de cette simplification sur le blog : https://camilleaubert.com/writing/2026-09-14-rag-rex/#la-lecon

#RAG #Laravel #Produit #Simplicité

---

**Illustration** : photo d'un vrai post-it avec les 3 règles manuscrites — simple, humain, très engageant. Variante : graphique barres « nombre de réglages nécessaires pour expliquer un classement : ancien moteur / V1 Weights / V2 actuelle ».

**URL LinkedIn (après publication)** : _à compléter_
