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

Voilà toute l'interface dont il a besoin : pas de tableau de bord, pas de menus à apprendre. Une boîte de dialogue reliée au site. Il décrit ce qu'il veut avec ses mots, Copilot modifie le site de l'intérieur. Même depuis un téléphone.

## WordPress 2005, Copilot 2026

WordPress a gagné en démocratisant une couche. Avant lui, publier sur le web voulait dire connaître le HTML, le FTP et un serveur. Après lui, tout le monde pouvait publier — au prix d'un CMS à entretenir : mises à jour, plugins, sauvegardes, failles de sécurité, factures d'hébergement.

Copilot et les agents de code démocratisent une autre couche : le web statique moderne. Même promesse, en mieux :

- **C'est gratuit.** Pas de facture d'hébergement, pas de plan payant, pas de licence de plugin. Zéro euro par mois, pour toujours.
- **Il n'y a rien à apprendre.** Pas de panneau d'admin, pas de menus, pas de formation. Le client modifie le site de l'intérieur, en lui parlant : « ajoute ce jeu », « change cette photo », « relis ma bio ». Copilot modifie, le site se met à jour quelques minutes plus tard. Même depuis un téléphone.
- **Il n'y a rien à entretenir.** Pas de mises à jour, pas de correctifs de sécurité, pas de sauvegardes à surveiller. Des pages statiques ne se piratent pas comme un CMS.

Et une clarification honnête sur les rôles : **un développeur pose les fondations une fois** — design, structure, publication automatique. Ça représente quelques jours de travail. Ensuite, le client n'a besoin ni de développeur, ni de formation, ni de contrat de maintenance. Tout son travail : remplir une fiche prête à l'emploi, l'envoyer en ligne.

Le client retrouve la même autonomie que WordPress lui avait promise — sans la machine que WordPress l'obligeait à nourrir.

## Le cas concret

Le client, c'est Mathieu Fiorentini, senior sound designer. Ses crédits incluent Heavy Rain, Detroit: Become Human, Watch Dogs: Legion, Tell Me Why et Banishers, pour des studios comme Quantic Dream, Ubisoft, Don't Nod et Focus Entertainment. Son ancien site tournait sur WordPress.com — plan gratuit, domaine connecté.

Voici ce qui l'a remplacé :

- **Hébergement :** gratuit, connexion sécurisée incluse. Coût mensuel : zéro — pour toujours.
- **Contenu :** 17 projets en deux langues, anglais et français. Chaque projet est une simple fiche texte : titre, studio, années, photo.
- **Vitesse et vie privée :** des pages plume qui s'affichent instantanément. Pas de cookies, pas de traceurs, rien à entretenir.
- **Publication :** pour ajouter un jeu, il remplit une fiche prête à l'emploi et l'envoie en ligne. En ligne deux minutes plus tard. Il sort à peu près un jeu tous les six mois — une dizaine de minutes de son temps à chaque fois.
- **Formulaire de contact inclus,** anti-spam activé, adresse email cachée des robots.

Chaque mise à jour laisse une trace publique : un historique de coches vertes, une par publication — dont plusieurs lancées par le client lui-même.

![Historique des publications : des coches vertes, une par mise à jour du site, environ une minute chacune](/writing/copilot-is-the-new-wordpress/actions-vert.png)

Et voici ce que ces runs produisent :

![Le site fini : page d'accueil d'earlyreflect.com avec hero, logos clients et crédits](/writing/copilot-is-the-new-wordpress/site-fini-hero.png)

Voir le site en ligne : [earlyreflect.com](https://earlyreflect.com)

Et voici la partie honnête : le plan de départ, c'était un portage WordPress — cinq à sept jours de travail chiffrés. Puis le client s'est mis à utiliser ce workflow, a publié sa propre mise à jour dès le premier jour, et le portage est devenu inutile. Le brouillon est devenu le site. Ce n'était jamais prévu, et c'est le signal le plus fort de toute cette histoire.

## Ce que WordPress fait encore mieux

L'honnêteté intellectuelle d'abord. Pour un portfolio mis à jour deux fois par an, statique + agent gagne. Mais WordPress gagne encore sur :

- **L'édition visuelle instantanée.** Dans WordPress, on voit la modification pendant qu'on la fait. Ici, le client écrit son texte et voit le résultat une minute plus tard. Une prévisualisation existe sur son ordinateur, mais c'est une étape de plus.
- **L'écosystème de plugins.** Besoin d'un calendrier de réservation, d'une boutique, d'un espace membres ? Quelqu'un a déjà écrit le plugin. Dans le monde statique, chacun de ces besoins est un petit projet.
- **L'accueil des non-techniques.** L'admin WordPress est laide mais familière. Ce workflow était inconnu la première fois. Mon client a eu besoin d'une journée accompagnée ; un utilisateur WordPress n'en a besoin d'aucune.

Si votre site a besoin de fonctionnalités dynamiques ou de cinq éditeurs avec des rôles, arrêtez-vous ici et gardez WordPress. Cet article parle des 90 % restants : les sites vitrines, portfolios et landing pages qui utilisent un CMS comme un fichier texte très cher.

## Le prix caché de WordPress que personne ne chiffre

Personne ne choisit WordPress pour la maintenance. Elle vient avec le pack, et le pack c'est :

- **Des mises à jour, pour toujours.** Le système, le thème, les plugins — chacun avec son calendrier et sa façon à lui de casser le site.
- **La sécurité en bruit de fond.** Le CMS le plus déployé du monde est le plus scanné. Un site statique n'a ni page de login, ni base de données, rien à exploiter. Il n'y a rien à pirater sauf le compte lui-même, protégé par une double vérification à la connexion.
- **Des sauvegardes qu'il faut vraiment tester.** Avec ce montage, chaque version de chaque page est conservée automatiquement — restaurer une ancienne version prend quelques secondes.
- **L'échelle des plans.** Le plan gratuit de WordPress.com n'autorise ni thème personnalisé ni plugin. Un design sur mesure comme celui-ci exige le plan Business — environ 25 à 35 euros par mois. L'équivalent statique coûte zéro à héberger.

Pour deux mises à jour de contenu par an, ça fait beaucoup de coût permanent pour très peu de publication.

## Les pièges, racontés honnêtement

C'est la section qui rend tout le reste crédible. Tout ce qui suit est vraiment arrivé, l'essentiel le jour de la bascule du domaine :

1. **Le mur du plan gratuit.** Comme dit plus haut : ni thème personnalisé, ni plugin sur le plan gratuit. C'est cette contrainte qui a tué l'option portage sur le prix avant que le workflow ne la tue en pratique.
2. **Le certificat bloqué.** Après avoir pointé le domaine vers le nouvel hébergement, le certificat de sécurité est resté bloqué pendant des heures. Cause : une entrée résiduelle dans les réglages du domaine, qui bloquait silencieusement la validation. Correctif : supprimer l'entrée, réinitialiser le réglage du domaine. Certificat émis en quelques minutes.
3. **Les images cassées.** Le passage vers le domaine définitif a cassé les adresses d'images (doubles slashes parasites). Détecté automatiquement avant que personne ne s'en aperçoive, corrigé en deux mises à jour.
4. **Les fausses redirections.** L'hébergement gratuit ne sait pas faire de vraies redirections permanentes. Les 11 vieilles adresses renvoient via de simples pages relais. Ça marche pour les visiteurs et les moteurs, mais ce n'est pas le vrai mécanisme, et je ne prétendrai pas le contraire.

Reste à faire : signaler la nouvelle adresse à Google, le CV français (un placeholder pour l'instant) et les visuels de quelques projets en attente de vérification des droits. Cette liste est désormais celle du client, écrite en langage clair. C'est exactement le but.

## Le repo est le nouveau CMS

L'accomplissement historique de WordPress, c'est d'avoir permis à des non-développeurs de publier sans coder. Cet accomplissement demeure. Mais pour un site vitrine, le nouveau pacte est imbattable, et il tient en trois points : **c'est gratuit**, **on modifie le site de l'intérieur en lui parlant**, et **un développeur n'est nécessaire qu'une fois**, pour poser les fondations.

Ensuite : pas d'admin à apprendre, pas de mises à jour à passer, pas de factures à payer. Remplir une fiche, l'envoyer en ligne — tout le travail du client, une dizaine de minutes deux fois par an.

La première mise à jour publiée de mon client est datée d'hier. Il n'a jamais été aussi autonome, et il ne reste plus rien à entretenir.
