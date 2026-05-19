# Roadmap — MatoStudio Portfolio V2

Dernière mise à jour : 2026-05-19

Statut global : socle technique, gouvernance, routing split, design system et portfolio freelance
terminés.

Prochaine phase : portfolio emploi / entreprise.

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

### À faire

- [ ] Construire le portfolio emploi complet
- [ ] Enrichir le contenu définitif si nécessaire
- [ ] Finaliser SEO, accessibilité, performance et production

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

Statut : en cours.

Branche cible : `feature/job-portfolio`

Objectif : construire un parcours recruteur premium, clair, crédible et orienté profil
développeur.

Sections cibles :

- [ ] Hero profil développeur
- [ ] Présentation personnelle
- [ ] Compétences techniques
- [ ] Stack
- [ ] Projets GitHub
- [ ] Parcours / formation
- [ ] Soft skills
- [ ] CV
- [ ] LinkedIn / GitHub
- [ ] Contact professionnel

Critères de validation :

- [ ] `/emploi` présente un parcours recruteur complet
- [ ] le design respecte la charte MatoStudio
- [ ] les données emploi sont séparées proprement
- [ ] le rendu est responsive
- [ ] `npm run check` passe
- [ ] la CI GitHub passe

### Phase 6 — SEO, accessibilité, performance et production

Statut : à faire en fin de cycle.

Branche cible : `chore/production-readiness`

- [ ] SEO global
- [ ] SEO spécifique freelance
- [ ] SEO spécifique emploi
- [ ] Open Graph
- [ ] favicon
- [ ] social preview
- [ ] sitemap
- [ ] robots.txt
- [ ] pages légales si nécessaires
- [ ] accessibilité clavier
- [ ] performance Lighthouse
- [ ] responsive final
- [ ] déploiement Vercel ou équivalent

---

## 5. Historique des grosses étapes

- 2026-04-30 — Phase 1 — Socle professionnel : terminé sur `main`.
- 2026-05-04 — Gouvernance projet : roadmap officielle et méthode branches / PR.
- 2026-05-04 — Phase 2 — Routing split : PR #3 mergée.
- 2026-05-04 — Roadmap après routing split : PR #4 mergée.
- 2026-05-19 — Phase 3 — Design system foundation : PR #5 mergée.
- 2026-05-19 — Phase 4 — Portfolio freelance : PR #7 mergée.

---

## 6. Prochaine action

Finaliser la Phase 5 sur :

```txt
feature/job-portfolio
```

Priorité : livrer un parcours emploi premium, cohérent, responsive, maintenable et convaincant
pour recruteurs et entreprises.
