---
title: "Copilot est le nouveau WordPress"
date: 2026-09-23
dateModified: 2026-09-23
excerpt: "Hier, mon client non-développeur a mergé sa première pull request. Son portfolio — 17 projets, deux langues, hébergement gratuit — se publie avec un git push. WordPress a démocratisé la publication ; les agents démocratisent tout le reste."
lang: fr
translationOf: 2026-09-23-copilot-is-the-new-wordpress
draft: false
---

![Couverture cartoon : un robot joyeux poussant dehors le vieux logo WordPress poussiéreux](/writing/copilot-is-the-new-wordpress/cover-cartoon.jpg)

Hier, mon client a mergé sa première pull request. Ce n'est pas un développeur. C'est un sound designer.

Il s'est créé un compte GitHub, a ouvert une PR qui branchait son formulaire de contact, et l'a mergée lui-même — aidé par Copilot, dès son premier jour d'autonomie. Le message de commit est dans l'historique du repo, co-signé par Copilot, mergé de sa propre main. Ce moment, c'est tout le propos de cet article.

J'ai raconté la boucle de déploiement de ce même site dans [This website deploys itself](/writing/2026-09-12-this-website-deploys-itself/). Ceci en est la suite, avec un vrai client pour prouver que ça marche hors de mon propre setup.

![L'app GitHub Copilot : une invite, le mode agent, relié au repo](/writing/copilot-is-the-new-wordpress/copilot.png)

## WordPress 2005, Copilot 2026

WordPress a gagné en démocratisant une couche. Avant lui, publier sur le web voulait dire connaître le HTML, le FTP et un serveur. Après lui, tout le monde pouvait publier — au prix d'un CMS à entretenir : mises à jour, plugins, sauvegardes, failles de sécurité, factures d'hébergement.

Copilot et les agents de code démocratisent une autre couche : le web statique moderne. Même promesse, nouvelle stack :

- **Le repo est le CMS.** Le contenu vit dans des fichiers Markdown, versionnés, diffables, relisables.
- **L'agent est l'éditeur.** Le client décrit ce qu'il veut en langage courant ; l'agent modifie les fichiers.
- **Le push est la publication.** Chaque push sur `main` reconstruit et redéploie le site en moins de deux minutes.

Le client final retrouve la même autonomie que WordPress lui avait donnée — sans la chose que WordPress l'obligeait à maintenir.

## Le cas concret

Le client, c'est Mathieu Fiorentini, senior sound designer. Ses crédits incluent Heavy Rain, Detroit: Become Human, Watch Dogs: Legion, Tell Me Why et Banishers, pour des studios comme Quantic Dream, Ubisoft, Don't Nod et Focus Entertainment. Son ancien site tournait sur WordPress.com — plan gratuit, domaine connecté.

Voici ce qui l'a remplacé :

- **Stack :** Astro 6 + Tailwind 4, 100 % statique, servi par GitHub Pages, HTTPS via Let's Encrypt. Coût d'hébergement : zéro euro par mois.
- **Contenu :** 17 projets, bilingue EN/FR — chaque projet, ce sont deux fiches Markdown, une par langue. L'anglais à la racine, le français sous `/fr/`.
- **Poids :** 62 pages HTML (51 pages de contenu + 11 stubs de redirection), ~10 Ko de HTML par page en moyenne, 37 Ko de CSS au total, 86 Ko de polices auto-hébergées, **zéro fichier JavaScript livré**, zéro cookie, zéro traceur.
- **Workflow de publication :** dupliquer une fiche, la remplir, pusher. Le site se reconstruit et passe en ligne en une à deux minutes. Il sort à peu près un jeu tous les six mois — chaque sortie lui prend une dizaine de minutes.
- **Formulaire de contact :** Formspree sur son offre gratuite, anti-spam activé, adresse email obfusquée et jamais affichée en clair.

Cette boucle est visible par tous : l'onglet Actions est un mur de runs verts, environ une minute chacun — dont plusieurs poussés par le client lui-même.

![Runs de déploiement sur le repo earlyreflect : des GitHub Actions vertes, environ une minute chacune](/writing/copilot-is-the-new-wordpress/actions-vert.png)

Et voici ce que ces runs produisent :

![Le site fini : page d'accueil d'earlyreflect.com avec hero, logos clients et crédits](/writing/copilot-is-the-new-wordpress/site-fini-hero.png)

Et voici la partie honnête de la chronologie : le plan de départ, c'était un portage WordPress. Le premier tour de retours le disait noir sur blanc — le site Astro devait servir de maquette de design, et j'avais chiffré le portage à cinq à sept jours de travail. Puis le client s'est mis à utiliser le workflow statique, a mergé sa propre PR dès le premier jour, et le portage est devenu inutile. La maquette est devenue le site. Ce n'était jamais prévu, et c'est le signal le plus fort de toute cette histoire.

## Ce que WordPress fait encore mieux

L'honnêteté intellectuelle d'abord. Pour un portfolio mis à jour deux fois par an, statique + agent gagne. Mais WordPress gagne encore sur :

- **L'édition visuelle instantanée.** Dans WordPress, on voit la modification pendant qu'on la fait. Ici, le client édite du texte et attend une minute pour voir le résultat. La prévisualisation locale existe (`npm run dev`), mais c'est une étape de plus.
- **L'écosystème de plugins.** Besoin d'un calendrier de réservation, d'une boutique, d'un espace membres ? Quelqu'un a déjà écrit le plugin. Dans le monde statique, chacun de ces besoins est un petit projet.
- **L'onboarding non-technique.** L'admin WordPress est laide mais familière. Un repo, même avec un guide, est inconnu la première fois. Mon client a eu besoin d'une journée accompagnée ; un utilisateur WordPress n'en a besoin d'aucune.

Si votre site a besoin de fonctionnalités dynamiques ou de cinq éditeurs avec des rôles, arrêtez-vous ici et gardez WordPress. Cet article parle des 90 % restants : les sites vitrines, portfolios et landing pages qui utilisent un CMS comme un fichier texte très cher.

## Le prix caché de WordPress que personne ne chiffre

Personne ne choisit WordPress pour la maintenance. Elle vient avec le pack, et le pack c'est :

- **Des mises à jour, pour toujours.** Core, thème, plugins — chacun avec son calendrier et sa façon à lui de casser le site.
- **La sécurité en bruit de fond.** Le CMS le plus déployé du monde est le plus scanné. Un site statique n'a ni page de login, ni base de données, ni PHP à exploiter. Il n'y a rien à pirater sauf le compte GitHub, qui a la double authentification.
- **Des sauvegardes qu'il faut vraiment tester.** Avec un repo, chaque version de chaque page est dans l'historique. `git log` est la sauvegarde, et elle se restaure en une commande.
- **L'échelle des plans.** Le plan gratuit de WordPress.com n'autorise ni thème personnalisé ni plugin. Un design sur mesure comme celui-ci exige le plan Business — environ 25 à 35 euros par mois. L'équivalent statique coûte zéro à héberger.

Pour deux mises à jour de contenu par an, ça fait beaucoup de coût permanent pour très peu de publication.

## Les pièges, racontés honnêtement

C'est la section qui rend tout le reste crédible. Tout ce qui suit est vraiment arrivé, l'essentiel le jour de la bascule du domaine :

1. **Le mur du plan gratuit.** Comme dit plus haut : ni thème custom, ni plugin sur WordPress.com gratuit. C'est cette contrainte qui a tué l'option portage économiquement, avant que le workflow ne la tue pratiquement.
2. **Le CNAME wildcard.** Après avoir pointé le domaine vers GitHub Pages, le certificat HTTPS est resté bloqué sur « Certificate Requested » pendant des heures, servant un certificat `*.github.io` à la place. Cause : un enregistrement `CNAME *` résiduel dans la zone DNS, qui cassait silencieusement la validation Let's Encrypt. Correctif : supprimer le wildcard, réinitialiser le domaine custom dans les réglages. Émission en quelques minutes derrière.
3. **Le double slash.** Le passage de la base du site d'un sous-chemin projet vers la racine du domaine a produit des URLs en `//images/` et des destinations de redirection cassées. Corrigé avec un petit helper d'assets et des chemins normalisés — deux commits, détectés par le script d'audit statique avant que personne ne s'en aperçoive.
4. **Les fausses redirections.** GitHub Pages, c'est de l'hébergement statique : pas de 301 côté serveur. Les 11 vieilles URLs (anciens chemins du portfolio plus huit slugs encore indexés depuis le sitemap WordPress) redirigent via des pages stubs en meta-refresh. Ça marche pour les visiteurs et les moteurs, mais ce n'est pas une vraie 301, et je ne prétendrai pas le contraire.

Reste à faire : mettre à jour la Search Console vers le nouveau domaine, le CV français (pour l'instant un placeholder) et les key arts de quelques projets en attente de vérification des droits. Cette todo est désormais celle du client, écrite en langage clair, dans son propre repo. C'est exactement le but.

## Le repo est le nouveau CMS

L'accomplissement historique de WordPress, c'est d'avoir permis à des non-développeurs de publier sans coder. Cet accomplissement demeure. Mais le prix — un CMS dynamique à nourrir, patcher et payer, juste pour servir des pages qui changent deux fois par an — n'a plus de sens pour les sites vitrines.

La nouvelle division du travail est plus simple : le client possède des fiches Markdown et des demandes en langage courant, l'agent possède les fichiers, le pipeline possède le déploiement. Un prompt plus un push, et le site est en ligne en cinq minutes. Une fiche remplie plus un push, et le nouveau projet est en ligne en deux.

La première PR mergée de mon client est datée d'hier. Il n'a jamais été aussi autonome, et il ne reste plus aucun panneau d'admin à maintenir.
