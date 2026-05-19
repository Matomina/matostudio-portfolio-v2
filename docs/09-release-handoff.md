# Release handoff — MatoStudio Portfolio V2

Dernière mise à jour : 2026-05-19

## État du projet

Le repo est prêt pour la phase de déploiement et de validation visuelle.

Phases terminées :

- Phase 1 : socle professionnel.
- Phase 2 : routing split.
- Phase 3 : design system.
- Phase 4 : portfolio freelance.
- Phase 5 : portfolio emploi.
- Phase 6 : préparation production côté repo.

## Pull requests clés

- PR #7 : portfolio freelance.
- PR #9 : portfolio emploi.
- PR #12 : audit final du repo.
- PR #13 : guide de déploiement et checklist production.

## Validation technique actuelle

La validation attendue avant tout déploiement reste :

```txt
npm run check
```

Cette commande couvre :

- ESLint ;
- Prettier ;
- TypeScript ;
- build Vite.

## Déploiement recommandé

Plateforme recommandée : Vercel.

Configuration :

- Framework : Vite.
- Build command : `npm run build`.
- Output directory : `dist`.
- Production branch : `main`.

## Routes à tester après déploiement

- `/`
- `/freelance`
- `/emploi`
- `/legal`
- une route inconnue pour vérifier la 404

## Points à vérifier avant mise en ligne publique

- Liens de contact.
- Liens GitHub.
- Liens de démonstration.
- Responsive mobile, tablette et desktop.
- Absence d'overflow horizontal.
- Domaine final.
- Fichiers `robots.txt` et `sitemap.xml` accessibles.

## Prochaine étape

Créer le projet Vercel, lancer une preview depuis `main`, puis valider le rendu avant ajout du domaine final.
