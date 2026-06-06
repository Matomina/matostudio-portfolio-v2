# Roadmap — MatoStudio Portfolio V2

Dernière mise à jour : 2026-06-06

Statut global : socle technique, design system, portfolios freelance et emploi, SEO, formulaires,
simulateur de devis, pages légales, tests unitaires et centralisation API terminés.

Prochaine phase : finalisation légale et déploiement production.

---

## 1. Vision du projet

`matostudio-portfolio-v2` est le socle officiel de deux portfolios distincts construits sur une
même base React + Vite + TypeScript.

- `/` : page d'entrée commune pour orienter le visiteur.
- `/freelance` : portfolio freelance MatoStudio, orienté clients et conversion.
- `/emploi` : portfolio développeur, orienté recruteurs et entreprises.
- `/legal` : page légale.
- `*` : page 404.

Le projet doit rester professionnel, maintenable, responsive, accessible et évolutif. La base
graphique MatoStudio repose sur une direction premium sombre, avec accent gold, cartes
glassmorphism, typographie sobre, espacements propres et parcours orientés action.

---

## 2. Méthode de travail officielle

Aucun travail important ne doit être fait directement sur `main`.

Cycle officiel Méthode Mato :

```txt
Issue / tâche GitHub
-> branche dédiée
-> développement ou documentation
-> npm run check
-> Pull Request
-> validation
-> merge sur main
-> mise à jour roadmap si grosse phase terminée
```

Conventions :

```txt
feature/nom-de-la-fonctionnalite
docs/nom-de-la-documentation
chore/nom-de-la-configuration
fix/nom-du-correctif
refactor/nom-du-refactor
```

Une PR est validable uniquement si :

- [ ] le scope est clair ;
- [ ] le code est propre ;
- [ ] `npm run check` passe ;
- [ ] la CI GitHub passe ;
- [ ] la documentation est mise à jour si nécessaire ;
- [ ] la roadmap est mise à jour si une grosse phase est terminée.

---

## 3. État actuel du projet

### Terminé

- [x] Repo GitHub créé
- [x] React + Vite + TypeScript initialisé
- [x] README ajouté
- [x] `.gitignore` validé
- [x] `.gitattributes` ajouté
- [x] `.env.example` ajouté
- [x] ESLint configuré
- [x] Prettier configuré
- [x] TypeScript configuré
- [x] Alias `@/` configuré
- [x] Makefile ajouté
- [x] GitHub Actions CI ajoutée
- [x] Templates d'issues ajoutés
- [x] Template de Pull Request ajouté
- [x] Structure `src/` amorcée
- [x] Assets de marque MatoStudio intégrés
- [x] Router stabilisé
- [x] Routes `/`, `/freelance`, `/emploi`, `/legal` et `*` actives
- [x] Données initiales freelance et emploi séparées
- [x] Navigation principale alignée sur les deux parcours
- [x] Design system foundation créé
- [x] Tokens CSS renforcés
- [x] Styles globaux factorisés
- [x] Composants UI `ButtonLink`, `Container`, `Card`, `SectionHeader` disponibles
- [x] Portfolio freelance complet construit et mergé
- [x] Portfolio emploi complet construit et mergé

### Récemment terminé

- [x] SEO dynamique par page — SeoManager, Open Graph, canonical
- [x] Sitemap et robots.txt
- [x] Données structurées JSON-LD
- [x] Page contact avec formulaire qualifié
- [x] Simulateur de devis interactif (QuoteSimulator)
- [x] Page paiement
- [x] Mentions légales et politique de confidentialité
- [x] Dashboard admin retiré du bundle public (PR #46 — en attente d'authentification)
- [x] Tests unitaires vitest — 18 tests sur la logique de calcul devis (PR #47)
- [x] Appels API centralisés dans `src/lib/api/` avec timeout AbortController (PR #48)

### À faire

- [ ] Compléter SIREN/SIRET et adresse administrative dans les mentions légales
- [ ] Renseigner l'hébergeur définitif dans les mentions légales
- [ ] Audit Lighthouse performance
- [ ] Déploiement production officiel sur matostudio.fr
- [ ] Réintroduire le dashboard derrière une authentification sécurisée

---

## 4. Phases

### Phase 1 — Socle professionnel

Statut : terminé.

- [x] Initialiser React + Vite + TypeScript
- [x] Configurer TypeScript strict
- [x] Configurer ESLint
- [x] Configurer Prettier
- [x] Ajouter `.gitignore`
- [x] Ajouter `.gitattributes`
- [x] Ajouter `.env.example`
- [x] Ajouter README
- [x] Ajouter Makefile
- [x] Ajouter GitHub Actions CI
- [x] Ajouter templates d'issues
- [x] Vérifier `npm run check`

### Phase 2 — Architecture front-end et séparation des deux portfolios

Statut : terminé.

Branche : `feature/portfolio-routing-split`

- [x] Stabiliser `src/app/router.tsx`
- [x] Créer la route `/`
- [x] Créer la route `/freelance`
- [x] Créer la route `/emploi`
- [x] Créer la route `/legal`
- [x] Créer une route `*` pour la page 404
- [x] Transformer `HomePage` en page d'entrée / choix d'orientation
- [x] Construire la base de `FreelancePage`
- [x] Construire la base de `JobPage`
- [x] Séparer les données communes, freelance et emploi
- [x] Ajouter une navigation adaptée aux deux cibles
- [x] Vérifier que `npm run check` passe
- [x] Ouvrir et merger une PR vers `main`

### Phase 3 — Design system MatoStudio

Statut : terminé.

Branche : `chore/design-system-foundation`

PR : `#5 chore: build design system foundation`

- [x] Définir les tokens couleurs
- [x] Définir les tokens typographiques
- [x] Définir les espacements
- [x] Définir les rayons, bordures, ombres et effets premium
- [x] Ajouter les gradients et surfaces MatoStudio
- [x] Factoriser `globals.css`
- [x] Renforcer `ButtonLink`
- [x] Renforcer `Container`
- [x] Ajouter `Card`
- [x] Ajouter `SectionHeader`
- [x] Vérifier `npm run check`
- [x] Merger la PR sur `main`

### Phase 4 — Portfolio freelance MatoStudio

Statut : terminé.

Branche : `feature/freelance-portfolio`

PR : `#7 feat: build freelance portfolio page`

- [x] Hero premium
- [x] Problème client / promesse
- [x] Services
- [x] Offres ou tarifs
- [x] Process
- [x] Projets représentatifs
- [x] Réassurance
- [x] FAQ
- [x] Contact
- [x] CTA final
- [x] Données freelance structurées dans `src/data/freelance.data.ts`
- [x] Styles dédiés dans `src/styles/freelance.css`
- [x] Vérification CI GitHub
- [x] Merge sur `main`

### Phase 5 — Portfolio emploi / entreprise

Statut : terminé.

Branche : `feature/job-portfolio`

PR : `#9 feat: build job portfolio page`

- [x] Hero profil développeur
- [x] Présentation personnelle
- [x] Compétences techniques
- [x] Stack
- [x] Projets GitHub
- [x] Parcours / formation
- [x] Soft skills
- [x] CV / liens professionnels préparés
- [x] LinkedIn / GitHub préparés
- [x] Contact professionnel
- [x] Données emploi structurées dans `src/data/job.data.ts`
- [x] Styles dédiés dans `src/styles/job.css`
- [x] Vérification CI GitHub
- [x] Merge sur `main`

### Phase 6 — SEO, accessibilité, performance et production

Statut : en cours.

- [x] SEO global — SeoManager, balises dynamiques par route
- [x] SEO spécifique freelance
- [x] SEO spécifique emploi
- [x] Open Graph et Twitter Card
- [x] Sitemap
- [x] Robots.txt
- [x] Pages légales — mentions légales et politique de confidentialité
- [x] Accessibilité clavier et responsive
- [x] Tests unitaires intégrés dans la CI
- [x] Formulaires contact et devis avec validation et gestion d'erreurs
- [ ] Compléter les informations légales (SIREN/SIRET, hébergeur)
- [ ] Audit Lighthouse performance
- [ ] Déploiement production officiel sur matostudio.fr

---

## 5. Historique des grosses étapes

- 2026-04-30 — Phase 1 — Socle professionnel : terminé sur `main`.
- 2026-05-04 — Gouvernance projet : roadmap officielle et méthode branches / PR.
- 2026-05-04 — Phase 2 — Routing split : PR #3 mergée.
- 2026-05-04 — Roadmap après routing split : PR #4 mergée.
- 2026-05-19 — Phase 3 — Design system foundation : PR #5 mergée.
- 2026-05-19 — Phase 4 — Portfolio freelance : PR #7 mergée.
- 2026-05-19 — Phase 5 — Portfolio emploi : PR #9 mergée.
- 2026-06-04 — Audit production établi — plan d'action en 8 priorités.
- 2026-06-06 — Dashboard admin retiré du bundle public : PR #46 mergée.
- 2026-06-06 — Tests unitaires vitest ajoutés, 18 tests métier : PR #47 mergée.
- 2026-06-06 — Appels API centralisés dans `src/lib/api/` : PR #48 mergée.

---

## 6. Prochaine action

Compléter les informations légales (SIREN/SIRET, hébergeur), réaliser l'audit Lighthouse,
puis déployer en production sur matostudio.fr.
