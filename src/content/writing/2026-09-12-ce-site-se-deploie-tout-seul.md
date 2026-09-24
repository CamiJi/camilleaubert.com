---
title: "Ce site se déploie tout seul"
date: 2026-09-12
dateModified: 2026-09-12
excerpt: "Chaque push sur main passe en production en quelques minutes — sans étape manuelle. Voici le workflow agentique derrière ce portfolio, et pourquoi je pense que c'est comme ça que tout site perso devrait tourner."
lang: fr
translationOf: 2026-09-12-this-website-deploys-itself
draft: false
---

J'ai reconstruit ce portfolio en quatre phases. Le design est sobre, la stack est minimale, et l'ensemble est un build statique servi par Nginx sur une petite instance AWS. Mais la partie dont je suis le plus content est invisible : **la boucle de déploiement**.

Chaque commit poussé sur `main` déclenche un pipeline qui valide, build, synchronise vers le serveur et reconstruit le conteneur. Aucune étape manuelle, aucune cérémonie. Quand je mets à jour le contenu, le changement est en ligne en quelques minutes.

## Pourquoi c'est important

Un portfolio n'est bon que s'il est à jour. La plupart des sites persos se dégradent — pas parce que leur propriétaire arrête de faire des choses intéressantes, mais parce que publier demande un effort. Chaque point de friction entre « j'ai fait quelque chose » et « c'est en ligne » est une raison de plus pour que le site reste périmé.

Ici, la friction est tombée à zéro :

- le contenu vit dans des fichiers markdown, modifiables depuis un téléphone sur github.com,
- un workflow agentique gère le travail piloté par tickets à travers les dépôts,
- pousser sur `main` met en production automatiquement.

## La suite

La section « Now » de la page d'accueil montre ce que je suis en train de livrer. Les pages writing que vous lisez grandiront au fil de mes publications — notes de terrain sur les architectures RAG, l'ingénierie assistée par IA, et l'exploitation d'une plateforme d'entreprise à l'échelle.

Le prochain article est déjà prêt : comment nous avons remplacé un moteur de recherche d'entreprise par une plateforme RAG. Il est passé en production cette semaine — le récit suit de près.
