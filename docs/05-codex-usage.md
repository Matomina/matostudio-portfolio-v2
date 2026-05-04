# Utilisation de Codex — MatoStudio Portfolio V2

## Objectif

Utiliser Codex comme assistant de développement, sans perdre le contrôle du projet.

Codex peut être utile pour :

- analyser le repo ;
- proposer des refactors ;
- générer une branche ;
- créer une PR ;
- corriger des erreurs ;
- ajouter des tests ;
- documenter le code.

---

## Règle principale

Codex ne doit pas remplacer la validation humaine.

Cycle recommandé :

```txt
Prompt précis
→ branche dédiée
→ modifications Codex
→ relecture humaine
→ npm run check
→ PR
→ validation
→ merge
```

---

## Bons cas d’usage

### Audit

```txt
Analyse le repo matostudio-portfolio-v2 et identifie les incohérences dans l’architecture src.
Ne modifie aucun fichier.
Retourne uniquement un rapport structuré avec risques, priorités et recommandations.
```

### Refactor ciblé

```txt
Sur la branche feature/portfolio-routing-split, refactorise uniquement src/app/router.tsx pour ajouter les routes /, /freelance, /emploi et *.
Ne modifie pas le design.
Ne crée pas de nouvelle architecture non demandée.
Lance npm run check à la fin.
```

### Documentation

```txt
Mets à jour docs/02-architecture.md pour refléter les routes et dossiers réellement créés.
Ne modifie aucun fichier source.
```

### Correction d’erreur

```txt
Voici l’erreur retournée par npm run check.
Trouve la cause, corrige uniquement le nécessaire et explique le changement dans la PR.
```

---

## Mauvais prompts

À éviter :

```txt
Refais tout mon portfolio.
```

```txt
Améliore le projet.
```

```txt
Rends le design premium.
```

Ces prompts sont trop vagues et risquent de produire des changements trop larges.

---

## Prompt type pour une grosse étape

```txt
Tu travailles sur le repo Matomina/matostudio-portfolio-v2.

Objectif :
[Décrire l’objectif exact]

Branche :
[Nom de la branche]

Scope autorisé :
- [fichier ou dossier 1]
- [fichier ou dossier 2]

Interdictions :
- ne pas modifier main directement ;
- ne pas mélanger les phases ;
- ne pas changer le design si la tâche concerne seulement l’architecture ;
- ne pas ajouter de dépendance sans justification.

Validation :
- lancer npm run check ;
- créer une PR avec résumé, fichiers modifiés et limites connues.
```

---

## Utilisation recommandée dans ce projet

### Phase 2

Codex peut aider à :

- vérifier le routing ;
- détecter les imports cassés ;
- proposer une page 404 ;
- vérifier la séparation freelance / emploi.

### Phase 3

Codex peut aider à :

- factoriser les composants UI ;
- nettoyer les styles ;
- proposer des tokens cohérents.

### Phases 4 et 5

Codex peut aider à :

- générer les structures de sections ;
- vérifier la cohérence des données ;
- éviter les répétitions.

---

## Règles de sécurité

- Ne jamais donner de secret à Codex.
- Ne jamais mettre de token dans le repo.
- Ne jamais accepter une PR sans relecture.
- Toujours vérifier les fichiers modifiés.
- Toujours lancer `npm run check`.
- Toujours garder un scope limité.
