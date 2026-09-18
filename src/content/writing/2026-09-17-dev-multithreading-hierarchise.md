---
title: "Du mono-tâche au multithreading hiérarchisé avec l'IA"
date: 2026-09-17
dateModified: 2026-09-17
excerpt: "Quand un agent IA travaille 30 minutes en autonomie, attendre ne sert à rien. J'ai appris à organiser mon attention en trois fils hiérarchisés : la logique prod, un POC léger, et le récit. Explication simple d'une méthode du quotidien."
lang: fr
translationOf: 2026-09-17-from-single-task-to-hierarchical-multithreading
draft: false
---

Avant, je travaillais en mono-tâche. Une tâche à la fois. Un fichier. Un focus.

Avec les agents IA, mon quotidien a changé. Je lance souvent plusieurs agents sur des sujets différents. J'ai dû apprendre à organiser mon attention autrement.

Voici comment je fais, simplement.

![Un développeur et ses trois agents hiérarchisés : prod, POC et récit](/writing/dev-multithreading-hierarchise/dev-3-agents-cartoon.png)

## Les 30 minutes d'attente

Un agent peut travailler 30 minutes en autonomie. Sur un sujet bien cadré. Avec du contexte et des tests.

Pendant ce temps, le regarder travailler n'apporte rien. Il n'avance pas plus vite.

J'ai donc appris à utiliser ce temps. Je reste productif, mais sur des tâches plus simples. Avec moins d'enjeux.

Ce n'est pas de la dispersion. C'est une façon d'éviter le temps mort.

## Trois fils, par ordre d'importance

En pratique, je travaille avec trois fils en parallèle. Ils sont hiérarchisés. Ils n'ont pas la même importance.

Fil 1 : la logique lourde, celle qui ira en production. C'est là que va l'essentiel de mon attention.

Fil 2 : un POC plus léger. Une partie innovante, exploratoire, sans risque immédiat.

Fil 3 : le récit. Un article, une note, de la transmission. Écrire m'aide à vérifier que j'ai bien compris.

La règle que je m'applique est simple. Quand le fil 1 s'arrête et attend mon retour, il reprend toute la priorité. Je m'y consacre pleinement, réflexion et concentration.

Quand je le relance, je reviens vers le second fil. Puis vers le troisième. Toujours par ordre d'importance.

Segmenter, oui. Mais surtout hiérarchiser.

![Utiliser le temps d'attente de l'agent pour avancer sur des tâches simples](/writing/dev-multithreading-hierarchise/30-minutes-b.png)

## Une structure à acquérir, avec des limites

Ce fonctionnement demande une structure mentale. Il faut savoir où on en est sur chaque fil. Il faut accepter de mettre en pause et de reprendre.

Au quotidien, ça fonctionne bien. Sur des sujets de taille normale, le multithreading hiérarchisé est possible.

Sur les très gros sujets, je reviens au full focus. 100% sur un seul fil. La profondeur demande parfois toute l'attention.

Et il y a un sujet qui ne se parallélise pas : le passage en production. Chez nous, c'est un moment à part. Une fois par semaine. Dans un espace dédié. Pour éviter les erreurs.

Pendant la mise en prod, pas de second fil. Pas de POC en fond. Juste la prod.

## Worktree ou chaos

La vraie difficulté est technique. Avec plusieurs agents sur la même codebase, ça peut vite devenir chaotique.

La séparation des sujets est indispensable. En amont. Avant de lancer les agents.

J'utilise les worktrees Git. Un dossier par fil. Une branche par intention. Chaque sujet reste isolé.

Fil 1 : la branche prod. Fil 2 : la branche POC. Fil 3 : la branche article. Pas de mélange d'état.

Sans cette séparation, le parallèle crée du désordre. Avec elle, il devient calme.

![Trois worktrees isolés, production sanctuarisée au centre](/writing/dev-multithreading-hierarchise/worktree-ou-chaos.png)

## Un rôle qui évolue

Avec l'IA, mon travail a changé. Je code toujours. Mais j'orchestre aussi.

J'arbitre où va mon attention. Avec quel niveau d'exigence. Le fil prod demande une relecture attentive, des tests, de la preuve. Le POC demande de la vitesse et de l'ouverture. Le récit demande de la clarté.

Coder. Explorer. Raconter. Trois fils en parallèle, hiérarchisés par importance.

C'est ce que j'expérimente en ce moment. Simplement. Sans chercher la performance à tout prix. Juste pour rester concentré sur l'essentiel, tout en laissant de la place à l'innovation et à la transmission.
