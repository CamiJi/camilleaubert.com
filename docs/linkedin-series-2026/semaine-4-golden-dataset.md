# Semaine 4 — Le golden dataset et le harness engineering

- **Statut** : prêt à publier
- **Date cible** : J+21, mardi ou mercredi ~9 h
- **Lien blog** : https://camilleaubert.com/writing/2026-09-14-rag-rex/#a-refaire

---

Une équipe de 4 a remplacé son moteur de recherche en un été. Pas parce que l'IA code vite — parce qu'on lui a mis des garde-fous.

Notre mantra : le harness engineering. On contraint l'IA, on lui donne un objectif, on la laisse itérer — encadrée par les tests.

Sur le seul moteur de recherche :

→ ~254 méthodes de tests unitaires

→ 14 scénarios de tests navigateur

→ des tests de « contrat source » qui verrouillent les invariants du code

Une grande partie écrite par l'IA, relue par nous.

Et surtout : un golden dataset de ~150 requêtes réelles, construit par notre spécialiste SEO avec le métier. Les critères de réussite ne viennent pas de nous : top 1 quand on tape un titre ou une référence exacts ; sinon, au moins 2-3 formations attendues dans les 5 premiers résultats, et les autres cohérentes.

C'est la clé, je pense : l'IA a démultiplié notre vitesse, mais c'est la connexion techno-métier qui a garanti la qualité. Tout ne se fera pas par l'IA.

La méthode complète, limites incluses, sur le blog : https://camilleaubert.com/writing/2026-09-14-rag-rex/#a-refaire

#IntelligenceArtificielle #Tests #Laravel #RAG

---

**Illustration** : capture du golden dataset XLSX, colonnes visibles (requête / résultat attendu) avec les intitulés de formations floutés — montre la matière sans exposer le catalogue. Variante : carte chiffres « 150 requêtes · 254 tests · 4 personnes · 1 été ».

**URL LinkedIn (après publication)** : _à compléter_
