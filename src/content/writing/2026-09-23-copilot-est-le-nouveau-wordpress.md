---
title: "Copilot est le nouveau WordPress"
date: 2026-09-23
dateModified: 2026-09-24
excerpt: "Mathieu, sound designer qui n'avait jamais fait ni git ni site web, voulait dégager son Wordpress.com. Pour zéro euro : une archi Astro + Tailwind + Pages — et Copilot comme CMS. Il parle au site, le site change."
lang: fr
translationOf: 2026-09-23-copilot-is-the-new-wordpress
draft: false
---

![Couverture cartoon : un robot joyeux poussant dehors le vieux logo WordPress poussiéreux](/writing/copilot-is-the-new-wordpress/cover-cartoon.jpg)

Mathieu, c'est un vieil ami de la maternelle, je le connais depuis toujours, je pouvais pas lui refuser ce service — et je me suis pas fait payer. Sound designer de talent, très belle carrière : des jeux vidéo réalistes dans des studios de pointe à Paris, de la mise en scène sonore digne de films. Profil technique, mais il avait jamais fait de git et jamais fait de site web. Son ambition : remplacer son vieux site déployé sur Wordpress.com.

Et dès le premier jour, il a publié sa première mise à jour lui-même, aidé par Copilot. Ce moment, c'est tout le propos de cet article.

J'ai raconté la boucle de déploiement de ce même site dans [This website deploys itself](/writing/2026-09-12-this-website-deploys-itself/). Ceci en est la suite, avec un vrai cas pour prouver que ça marche hors de mon propre setup.

![L'app GitHub Copilot : une invite, le mode agent, relié au repo](/writing/copilot-is-the-new-wordpress/copilot.png)

Voilà toute l'interface dont il a besoin : pas de tableau de bord, pas de menus à apprendre. Une boîte de dialogue reliée au site. Il décrit ce qu'il veut avec ses mots, Copilot modifie le site de l'intérieur. Même depuis un téléphone. Et avec l'appli GitHub connectée, il pourra modifier le site directement depuis l'application — hyper pratique.

## L'idée : un site très très propre pour zéro euro

L'idée, c'était de voir comment, avec l'IA pour un coût de zéro euro, une stack Astro + Tailwind + GitHub Actions + GitHub Pages permet de jeter les bases d'un site internet très très propre — sur lequel lui, via la fenêtre Copilot, allait ensuite pouvoir interagir pour ajouter ou enlever du contenu.

Le pacte tient en trois points :

- **C'est gratuit.** Pas de facture d'hébergement, pas de plan payant, pas de licence. Zéro euro, et on dégage le vieux CMS Wordpress.
- **Il n'y a rien à apprendre.** Pas de panneau d'admin, pas de formation. Il modifie le site de l'intérieur, en lui parlant : « ajoute ce jeu », « change cette photo », « relis ma bio ». Copilot modifie, le site se met à jour quelques minutes plus tard.
- **Il n'y a rien à entretenir.** Pas de mises à jour, pas de correctifs, pas de sauvegardes à surveiller. Des pages statiques ne se piratent pas comme un CMS.

Et une clarification honnête sur les rôles : **je pose les fondations une fois** — design, structure, publication automatique. Quelques heures de travail : moi, je suis architecte IA, spécialisé dans la mise en place de processus automatisés boostés à l'IA. Ensuite, ni développeur, ni formation, ni contrat de maintenance. Tout son travail : remplir une fiche prête à l'emploi, l'envoyer en ligne.

## Pourquoi cette stack

Astro, c'est du JS statique : pas besoin de base de données. Et c'est ça, la grande force du montage : il suffit de pousser des petits fichiers `.md` qui font office de base de données. Un `mon-projet.md` contient toutes les informations et s'incrémente directement sur le site. Très facile à faire.

Pas de rôles à gérer non plus, on est sur du statique. Et on rajoute Tailwind CSS, qui solidifie toute la partie style — avec un responsive impeccable tout de suite. Les LLM maîtrisent particulièrement bien Tailwind, donc ça rend tout de suite quelque chose de bien.

Côté chiffres, le site de Mathieu aujourd'hui : 17 projets en deux langues, anglais et français. Des pages plume qui s'affichent instantanément, sur téléphone comme sur desktop — les scores Core Web Vitals sont très bons. Pas de cookies, pas de traceurs. Formulaire de contact inclus, adresse cachée des robots. Le plan gratuit GitHub suffit largement pour les prompts qui modifient le contenu au quotidien.

Chaque mise à jour laisse une trace publique : un historique de coches vertes, une par publication — dont plusieurs lancées par Mathieu lui-même.

![Historique des publications : des coches vertes, une par mise à jour du site, environ une minute chacune](/writing/copilot-is-the-new-wordpress/actions-vert.png)

Et voici ce que ça produit :

![Le site fini : page d'accueil d'earlyreflect.com avec hero, logos clients et crédits](/writing/copilot-is-the-new-wordpress/site-fini-hero.png)

## Le cahier des charges, c'est lui

Premier prompt avec Claude ou GPT : le cahier des charges du site web. Et là, c'est vraiment la partie client. Mathieu avait son inspiration, il voulait un site web qui lui ressemble — à lui de l'exprimer dans ses mots : ses envies, ses inspirations, son univers graphique, sa police.

Moi, j'ai rien eu à faire : il a fait son cahier des charges tout seul avec Claude. Au moment où j'avais mis l'infrastructure en place, il a suffi de donner le cahier des charges à Claude — il l'a transformé en site web, et la V1 était tout de suite très correcte.

Ensuite, il a pu checker directement sur l'URL de mon GitHub Pages pour voir si ça lui convenait.

## Les retours, pareil

Il me dit : « j'ai des retours ». Je lui dis : écoute, tu reprends Claude et tu fais tes retours avec Claude — tu me réécris un cahier des charges à la voix, sur tes envies, sur ce que tu vois. Moi, je lui ai donné des conseils, mais mon rôle de base, c'était surtout de bâtir l'architecture : celle qui permet de sortir des sites web solides en cinq minutes, avec une interface IA pour faire les modifications directement.

## Ce qu'on dégage

Et surtout, on enlève ce CMS Wordpress qui a un peu mal vieilli, avec sa vieille interface. Elle déçoit quand même beaucoup de gens : un peu austère, un peu dure à prendre en main. Elle peut rester indispensable si vous avez un site plus gros, un bloc d'actualité à remplir régulièrement. Mais pour un portfolio simple, une simple petite interface IA comme celle que propose gratuitement GitHub Copilot vous permet aisément de manager le contenu de votre site internet.

Dernière petite difficulté : le domaine. Quinze à vingt euros par an, qu'il a gardés — on l'a plugué directement depuis GitHub Pages. Résultat : un site hébergé gratuitement, sur lequel on fait des pull requests à volonté avec des cahiers des charges écrits par Claude.

Deux limites honnêtes. D'abord les rôles : c'est pas vraiment possible. Le plus simple, c'est un accès GitHub partagé sur le repository — chacun se fait son compte GitHub et devient contributeur. Ensuite les assets : on reste sur du léger, du format web, pas de vidéos trop lourdes (à héberger ailleurs). Pour un portfolio personnel, c'est largement suffisant.

Et les bricoles du jour de la bascule — certificat bloqué par une entrée résiduelle, images cassées par des doubles slashes, redirections bricolées pour les 11 vieilles adresses — tout ça s'est réglé en quelques mises à jour. Je le mentionne parce que c'est ça aussi, la vraie vie d'une bascule.

## Conclusion

L'interface IA de Copilot, qui a accès au repository, est devenue le nouveau CMS — avec un contrôle quasiment à la voix, pour un coût de zéro euro. Je jette les bases une fois — quelques heures — et ensuite c'est hyper basique pour lui : remplir une fiche, l'envoyer en ligne. Et maintenant que je connais cette architecture, je peux la refaire à l'infini pour tous les portfolios qui voudront — c'est quasiment un Lovable gratuit que je propose : une alternative à Lovable, gratuite.

Si vous voulez voir le résultat, c'est ici sur <a href="https://earlyreflect.com" target="_blank" rel="noopener">earlyreflect.com</a>, allez voir, ça rend super bien.
