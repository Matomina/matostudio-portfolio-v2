# Roadmap — MatoStudio Portfolio V2

Dernière mise à jour : 2026-05-04  
Statut global : socle professionnel terminé, architecture front-end à stabiliser.

---

## 1. Vision du projet

`matostudio-portfolio-v2` est le socle officiel de deux portfolios distincts construits sur une même base React + Vite + TypeScript.

### Portfolio 1 — Freelance / MatoStudio

Objectif : convertir des prospects en clients.

Positionnement :
- identité premium MatoStudio ;
- création de sites web modernes, professionnels et orientés conversion ;
- mise en avant des services, projets, process, tarifs, réassurance et contact ;
- ton commercial, clair, rassurant et haut de gamme.

Route cible :

```txt
/freelance
```

### Portfolio 2 — Emploi / Entreprise

Objectif : convaincre des recruteurs, entreprises ou responsables techniques.

Positionnement :
- profil développeur web et web mobile ;
- compétences techniques ;
- projets GitHub ;
- expériences ;
- CV ;
- LinkedIn ;
- démarche professionnelle et capacité à travailler en équipe.

Route cible :

```txt
/emploi
```

### Page d’entrée commune

Objectif : présenter rapidement les deux orientations et envoyer le visiteur vers le bon parcours.

Route cible :

```txt
/
```

---

## 2. Méthode de travail officielle

Aucun travail important ne doit être fait directement sur `main`.

Chaque grosse étape suit ce cycle :

```txt
Issue / tâche GitHub
→ branche dédiée
→ développement ou documentation
→ npm run check
→ Pull Request
→ validation
→ merge sur main
→ mise à jour de la roadmap
```

### Convention de branches

```txt
feature/nom-de-la-fonctionnalite
docs/nom-de-la-documentation
chore/nom-de-la-configuration
fix/nom-du-correctif
refactor/nom-du-refactor
```

### Pull Requests

Une PR est validable uniquement si :

- [ ] le scope est clair ;
- [ ] le code est propre ;
- [ ] `npm run check` passe en local ;
- [ ] la CI GitHub passe ;
- [ ] la documentation est mise à jour si nécessaire ;
- [ ] la roadmap est mise à jour si une grosse étape est terminée.

---

## 3. État actuel du projet

### Déjà fait

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
- [x] GitHub Actions CI ajouté
- [x] Templates d’issues ajoutés
- [x] Structure `src/` amorcée
- [x] Assets de marque MatoStudio intégrés
- [x] Pages `HomePage`, `FreelancePage`, `JobPage` prévues

### À corriger / finaliser

- [ ] Router à stabiliser
- [ ] Route `/freelance` à activer
- [ ] Route `/emploi` à activer
- [ ] Page 404 à créer
- [ ] Données freelance et emploi à séparer
- [ ] Design system à stabiliser
- [ ] Sections spécialisées à créer

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
- [x] Ajouter templates d’issues
- [x] Vérifier `npm run check`

---

### Phase 2 — Architecture front-end et séparation des deux portfolios

Statut : prochaine phase prioritaire.

Branche recommandée :

```txt
feature/portfolio-routing-split
```

Tâches :

- [ ] Stabiliser `src/app/router.tsx`
- [ ] Créer la route `/`
- [ ] Créer la route `/freelance`
- [ ] Créer la route `/emploi`
- [ ] Créer une route `*` pour la page 404
- [ ] Transformer `HomePage` en page d’entrée / choix d’orientation
- [ ] Construire la base de `FreelancePage`
- [ ] Construire la base de `JobPage`
- [ ] Séparer les données communes, freelance et emploi
- [ ] Ajouter une navigation adaptée à chaque cible
- [ ] Vérifier que `npm run check` passe
- [ ] Ouvrir une PR vers `main`

Critères de validation :

- [ ] `/` affiche une page d’entrée claire
- [ ] `/freelance` affiche une base de portfolio freelance
- [ ] `/emploi` affiche une base de portfolio emploi
- [ ] les routes sont typées et propres
- [ ] aucune section métier n’est mélangée
- [ ] la CI passe

---

### Phase 3 — Design system MatoStudio

Statut : à faire après la Phase 2.

Branche recommandée :

```txt
chore/design-system-foundation
```

Tâches :

- [ ] Définir les tokens couleurs
- [ ] Définir les tokens typographiques
- [ ] Définir les espacements
- [ ] Définir les rayons, bordures, ombres et effets premium
- [ ] Préparer les variantes dark / premium
- [ ] Créer les composants UI de base
- [ ] Créer les composants layout réutilisables
- [ ] Préparer les animations globales
- [ ] Vérifier l’accessibilité de base

---

### Phase 4 — Portfolio freelance MatoStudio

Statut : à faire.

Branche recommandée :

```txt
feature/freelance-portfolio
```

Sections cibles :

- [ ] Hero premium
- [ ] Problème client / promesse
- [ ] Services
- [ ] Offres ou tarifs
- [ ] Process
- [ ] Projets clients / projets représentatifs
- [ ] Réassurance
- [ ] FAQ
- [ ] Contact
- [ ] CTA final

---

### Phase 5 — Portfolio emploi / entreprise

Statut : à faire.

Branche recommandée :

```txt
feature/job-portfolio
```

Sections cibles :

- [ ] Hero profil développeur
- [ ] Présentation personnelle
- [ ] Compétences techniques
- [ ] Stack
- [ ] Projets GitHub
- [ ] Expériences ou parcours
- [ ] Formation / certification
- [ ] Soft skills
- [ ] CV
- [ ] LinkedIn / GitHub
- [ ] Contact professionnel

---

### Phase 6 — SEO, accessibilité, performance et production

Statut : à faire en fin de cycle.

Branche recommandée :

```txt
chore/production-readiness
```

Tâches :

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

| Date | Phase | Statut | Branche | PR | Notes |
| --- | --- | --- | --- | --- | --- |
| 2026-04-30 | Phase 1 — Socle professionnel | Terminé | main | — | Initialisation du projet et base technique |
| 2026-05-04 | Gouvernance projet | À intégrer | docs/roadmap-governance | À créer | Roadmap officielle + méthode branches/PR |
| 2026-05-04 | Phase 2 — Routing split | À démarrer | feature/portfolio-routing-split | À créer | Séparation réelle freelance / emploi |
