# 6steps — Roadmap production MatoStudio

Statut : en cours

Objectif : transformer le site MatoStudio Portfolio V2 en site production-ready, propre pour les clients, les recruteurs et le référencement.

## Step 1 — SEO par page

Statut : fait.

- Définir un titre unique par route.
- Définir une meta description unique par route.
- Mettre à jour les balises Open Graph et Twitter Card selon la page active.
- Garder une URL canonique propre.

Validation : vérifier accueil, freelance, emploi, contact, devis, paiement, mentions légales, confidentialité et 404.

## Step 2 — Fichiers SEO publics

Statut : fait.

- Ajouter `robots.txt`.
- Ajouter `sitemap.xml`.
- Vérifier que les routes importantes sont indexables.
- Garder les pages utilitaires propres.

Validation : vérifier les chemins `/robots.txt` et `/sitemap.xml` après build/deploy.

## Step 3 — Données structurées

Statut : fait.

- Ajouter un JSON-LD clair pour MatoStudio Agency.
- Décrire l'activité, l'URL officielle, les contacts et les services.
- Préparer une base extensible pour enrichir plus tard avec projets, FAQ ou offres.

Validation : tester le JSON-LD avec un validateur schema.org après déploiement.

## Step 4 — Accessibilité et responsive

Statut : fait, audit visuel final à faire après déploiement.

- Vérifier les titres, labels, aria-labels et focus clavier.
- Stabiliser les composants interactifs.
- Vérifier mobile, tablette et desktop.
- Corriger les détails visuels bloquants.

Validation : navigation clavier, contraste, affichage 360 px, 390 px, 430 px, 768 px, 1280 px.

## Step 5 — Performance et qualité

Statut : en cours.

- Garder `npm run check` obligatoire avant merge.
- Vérifier lint, format, TypeScript et build.
- Ajouter une validation dédiée aux assets de production.
- Réaliser un audit Lighthouse.
- Nettoyer les PR obsolètes et les branches inutiles après merge.

Validation : CI GitHub verte, `npm run check` et build Vite OK.

## Step 6 — Livraison production

Statut : prochain step.

- Mettre à jour le README avec lien de démo quand disponible.
- Vérifier les variables d'environnement.
- Préparer le déploiement Vercel ou équivalent.
- Faire un audit final repo + site.

Validation : site accessible, responsive, indexable, documentation à jour.
