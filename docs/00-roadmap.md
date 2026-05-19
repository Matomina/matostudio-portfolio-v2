# Roadmap — MatoStudio Portfolio V2

Derniere mise a jour : 2026-05-19  
Statut global : socle technique, gouvernance, routing split et design system termines. Prochaine phase : portfolio freelance MatoStudio.

---

## 1. Vision du projet

`matostudio-portfolio-v2` est le socle officiel de deux portfolios distincts construits sur une meme base React + Vite + TypeScript.

- `/` : page d'entree commune pour orienter le visiteur.
- `/freelance` : portfolio freelance MatoStudio, oriente clients et conversion.
- `/emploi` : portfolio developpeur, oriente recruteurs et entreprises.
- `/legal` : page legale.
- `*` : page 404.

Le projet doit rester professionnel, maintenable, responsive, accessible et evolutif. La base graphique MatoStudio repose sur une direction premium sombre, avec accent gold, cartes glassmorphism, typographie sobre, espacements propres et parcours orientes action.

---

## 2. Methode de travail officielle

Aucun travail important ne doit etre fait directement sur `main`.

Cycle officiel Methode Mato :

```txt
Issue / tache GitHub
-> branche dediee
-> developpement ou documentation
-> npm run check
-> Pull Request
-> validation
-> merge sur main
-> mise a jour roadmap si grosse phase terminee
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
- [ ] la documentation est mise a jour si necessaire ;
- [ ] la roadmap est mise a jour si une grosse phase est terminee.

---

## 3. Etat actuel du projet

### Termine

- [x] Repo GitHub cree
- [x] React + Vite + TypeScript initialise
- [x] README ajoute
- [x] `.gitignore` valide
- [x] `.gitattributes` ajoute
- [x] `.env.example` ajoute
- [x] ESLint configure
- [x] Prettier configure
- [x] TypeScript configure
- [x] Alias `@/` configure
- [x] Makefile ajoute
- [x] GitHub Actions CI ajoutee
- [x] Templates d'issues ajoutes
- [x] Template de Pull Request ajoute
- [x] Structure `src/` amorcee
- [x] Assets de marque MatoStudio integres
- [x] Router stabilise
- [x] Routes `/`, `/freelance`, `/emploi`, `/legal` et `*` actives
- [x] Donnees initiales freelance et emploi separees
- [x] Navigation principale alignee sur les deux parcours
- [x] Design system foundation cree
- [x] Tokens CSS renforces
- [x] Styles globaux factorises
- [x] Composants UI `ButtonLink`, `Container`, `Card`, `SectionHeader` disponibles

### A faire

- [ ] Construire le portfolio freelance complet
- [ ] Construire le portfolio emploi complet
- [ ] Enrichir le contenu definitif
- [ ] Finaliser SEO, accessibilite, performance et production

---

## 4. Phases

### Phase 1 — Socle professionnel

Statut : termine.

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
- [x] Verifier `npm run check`

---

### Phase 2 — Architecture front-end et separation des deux portfolios

Statut : termine.

Branche :

```txt
feature/portfolio-routing-split
```

- [x] Stabiliser `src/app/router.tsx`
- [x] Creer la route `/`
- [x] Creer la route `/freelance`
- [x] Creer la route `/emploi`
- [x] Creer la route `/legal`
- [x] Creer une route `*` pour la page 404
- [x] Transformer `HomePage` en page d'entree / choix d'orientation
- [x] Construire la base de `FreelancePage`
- [x] Construire la base de `JobPage`
- [x] Separer les donnees communes, freelance et emploi
- [x] Ajouter une navigation adaptee aux deux cibles
- [x] Verifier que `npm run check` passe
- [x] Ouvrir et merger une PR vers `main`

---

### Phase 3 — Design system MatoStudio

Statut : termine.

Branche :

```txt
chore/design-system-foundation
```

PR :

```txt
#5 chore: build design system foundation
```

- [x] Definir les tokens couleurs
- [x] Definir les tokens typographiques
- [x] Definir les espacements
- [x] Definir les rayons, bordures, ombres et effets premium
- [x] Ajouter les gradients et surfaces MatoStudio
- [x] Factoriser `globals.css`
- [x] Renforcer `ButtonLink`
- [x] Renforcer `Container`
- [x] Ajouter `Card`
- [x] Ajouter `SectionHeader`
- [x] Verifier `npm run check`
- [x] Merger la PR sur `main`

---

### Phase 4 — Portfolio freelance MatoStudio

Statut : en cours.

Branche cible :

```txt
feature/freelance-portfolio
```

Objectif : construire un parcours client premium, clair et oriente conversion.

Sections cibles :

- [ ] Hero premium
- [ ] Probleme client / promesse
- [ ] Services
- [ ] Offres ou tarifs
- [ ] Process
- [ ] Projets representatifs
- [ ] Reassurance
- [ ] FAQ
- [ ] Contact
- [ ] CTA final

Criteres de validation :

- [ ] `/freelance` presente un parcours client complet
- [ ] le design respecte la charte MatoStudio
- [ ] les donnees freelance sont separees proprement
- [ ] le rendu est responsive
- [ ] `npm run check` passe
- [ ] la CI GitHub passe

---

### Phase 5 — Portfolio emploi / entreprise

Statut : a faire apres Phase 4.

Branche cible :

```txt
feature/job-portfolio
```

Sections cibles :

- [ ] Hero profil developpeur
- [ ] Presentation personnelle
- [ ] Competences techniques
- [ ] Stack
- [ ] Projets GitHub
- [ ] Parcours / formation
- [ ] Soft skills
- [ ] CV
- [ ] LinkedIn / GitHub
- [ ] Contact professionnel

---

### Phase 6 — SEO, accessibilite, performance et production

Statut : a faire en fin de cycle.

Branche cible :

```txt
chore/production-readiness
```

- [ ] SEO global
- [ ] SEO specifique freelance
- [ ] SEO specifique emploi
- [ ] Open Graph
- [ ] favicon
- [ ] social preview
- [ ] sitemap
- [ ] robots.txt
- [ ] pages legales si necessaires
- [ ] accessibilite clavier
- [ ] performance Lighthouse
- [ ] responsive final
- [ ] deploiement Vercel ou equivalent

---

## 5. Historique des grosses etapes

| Date | Etape | Statut | Branche | PR | Resume |
| --- | --- | --- | --- | --- | --- |
| 2026-04-30 | Phase 1 — Socle professionnel | Termine | main | — | Initialisation du projet et base technique |
| 2026-05-04 | Gouvernance projet | Termine | docs/roadmap-governance | Merged | Roadmap officielle + methode branches/PR |
| 2026-05-04 | Phase 2 — Routing split | Termine | feature/portfolio-routing-split | #3 | Routes `/`, `/freelance`, `/emploi`, `/legal` et `*` integrees |
| 2026-05-04 | Roadmap apres routing split | Termine | docs/update-roadmap-after-routing-split | #4 | Roadmap synchronisee apres Phase 2 |
| 2026-05-19 | Phase 3 — Design system foundation | Termine | chore/design-system-foundation | #5 | Tokens, globals, ButtonLink, Container, Card et SectionHeader |

---

## 6. Prochaine action

Demarrer et finaliser la Phase 4 sur :

```txt
feature/freelance-portfolio
```

Priorite : livrer un parcours freelance premium, coherent, responsive, maintenable et pret a etre enrichi avec les projets clients reels.
