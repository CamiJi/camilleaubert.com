# Semaine 2 — Le pipeline en 5 étapes

- **Statut** : prêt à publier
- **Date cible** : J+7, mardi ou mercredi ~9 h
- **Lien blog** : https://camilleaubert.com/writing/2026-09-14-rag-rex/#pipeline

---

47 ms pour trouver la bonne formation parmi 10 000 documents. Voici comment.

Chaque recherche sur cegos.fr traverse cinq étapes :

1. **Embedding** — la requête devient un vecteur (OpenAI, 1536 dimensions, ~4 ms)
2. **Meaning** — recherche des plus proches voisins dans l'index du pays (Valkey Search, HNSW, similarité ≥ 0,3)
3. **Final** — le classement : code produit ou titre exact épinglé en tête, sinon distance vectorielle ; en cas de quasi-égalité (écart < 0,005), le best-seller passe devant
4. **Pages** — les pages WordPress vectorisées rejoignent les résultats
5. **Contexte** — assemblage pour le chatbot LLM

Deux choix qui ont tout simplifié :

→ Le fulltext est désactivé : Valkey Search 1.0 n'indexe pas de texte sans vecteur. 100 % vectoriel, assumé.

→ Les facettes (année, domaine, ville, certifiant) filtrent avant la recherche vectorielle — elles préexistaient, on n'a rien réinventé.

Un moteur de recherche moderne n'est pas forcément une usine à gaz : le nôtre tient en un schéma de 5 blocs.

Le détail de chaque étape, avec le schéma complet, sur le blog : https://camilleaubert.com/writing/2026-09-14-rag-rex/#pipeline

#Valkey #RAG #Laravel #Search

---

**Illustration** : le schéma ASCII du pipeline, rendu propre (Excalidraw/Canva en style monospace) — 5 blocs avec les temps affichés. C'est l'image la plus « screenshotable » de la série ; éviter de capturer la vraie page RAG Query (outil interne, URLs et données non publiques).

**URL LinkedIn (après publication)** : _à compléter_
