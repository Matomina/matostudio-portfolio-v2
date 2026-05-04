# Contributing

## Objectif

Ce document définit les règles de contribution pour maintenir une base de code propre, cohérente et professionnelle.

---

## Règles générales

- Respecter la structure du projet
- Garder des composants simples et réutilisables
- Éviter la duplication de code
- Maintenir un code lisible et typé

---

## Workflow

1. Créer une branche

```bash
git checkout -b feature/nom-de-la-feature
Développer la fonctionnalité
Vérifier le projet
npm run check
Commit
git commit -m "feat: description"
Push
git push origin feature/nom-de-la-feature
Ouvrir une Pull Request
Standards de code
TypeScript strict obligatoire
ESLint sans erreurs
Prettier respecté
Aucun warning critique
Avant chaque push

Toujours exécuter :

npm run check
Objectif final
Code propre
Architecture claire
Projet maintenable
Qualité professionnelle
