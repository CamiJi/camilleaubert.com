# Semaine 1 — L'amorce : « Excel » et le pari du RAG maison

- **Statut** : prêt à publier
- **Date cible** : mardi ou mercredi ~9 h (publication manuelle)
- **Lien blog** : https://camilleaubert.com/writing/2026-09-14-rag-rex/ (haut de page)

---

Taper « Excel » sur notre moteur de recherche renvoyait… un article sans aucun rapport avec Excel.

Fin 2025, j'ai proposé de remplacer notre moteur de recherche SaaS par un moteur RAG maison. Fin de l'été, c'était en production sur nos 9 pays.

En résumé :

→ 4 000 formations + 6 000 pages vectorisées avec OpenAI, stockées dans Valkey Search — notre serveur de cache, qui sert désormais aussi de base vectorielle.

→ Un classement tenu en 3 règles : épingles exactes (code produit, titre), distance sémantique, best-seller en cas d'égalité.

→ ~47 ms par recherche.

La vraie leçon n'est pas technique : nous avions d'abord reconstruit la complexité de l'ancien moteur (une page de « poids » éditoriaux), avant de la supprimer. Un moteur simple qu'on peut expliquer au métier bat une config sophistiquée qu'on ne comprend plus.

Et l'IA ? Elle a permis à une équipe de 4 de mener le chantier — tests compris — sans y passer des années.

Le récit complet, pièges et limites inclus, est sur le blog : https://camilleaubert.com/writing/2026-09-14-rag-rex/ — et je détaille le pipeline, les pièges et la méthode dans les 3 prochains posts.

#Laravel #RAG #Valkey #IntelligenceArtificielle

---

**Illustration** : capture d'écran publique de la recherche sur cegos.fr avec la requête « Excel » et ses résultats (contenu 100 % public, valorise le site). Variante : petit schéma « SaaS externe → moteur maison » en deux blocs.

**URL LinkedIn (après publication)** : _à compléter_
