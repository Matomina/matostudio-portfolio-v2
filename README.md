# Portfolio V2 — README

# MatoStudio Portfolio V2

Portfolio nouvelle génération pensé comme une plateforme personnelle évolutive.

Ce projet a pour objectif de dépasser la logique classique d’un portfolio statique pour devenir une base professionnelle capable de servir deux usages distincts :

- acquisition freelance
- recrutement technique

---

# Vision

Ce portfolio n’est pas seulement une vitrine.

Il est conçu comme un produit personnel structuré, destiné à :

- valoriser une expertise front-end et full stack
- renforcer la crédibilité professionnelle
- démontrer une capacité d’architecture logicielle
- présenter des projets réels dans un contexte métier
- offrir une base réutilisable et scalable

---

# Objectifs du projet

## Objectif principal

Construire une base portfolio moderne, maintenable et évolutive.

## Objectifs secondaires

- séparer contenu et rendu
- supporter plusieurs variantes de portfolio
- anticiper SEO, performance et accessibilité
- mettre en place un design system réutilisable
- structurer une architecture professionnelle
- créer une base de démonstration technique crédible

---

# Deux portfolios — Une seule codebase

Le projet repose sur une logique dual-mode.

## Portfolio Freelance

### Objectif

Convertir des clients.

### Positionnement

- branding MatoStudio
- approche orientée service
- storytelling projet
- CTA conversion
- mise en avant des prestations

### Sections prévues

- Hero
- À propos
- Services
- Méthode de travail
- Études de cas
- Tarification
- Contact

---

## Portfolio Job

### Objectif

Convaincre recruteurs, lead devs et équipes techniques.

### Positionnement

- présentation technique
- stack claire
- GitHub
- logique architecture
- projets orientés engineering

### Sections prévues

- Hero
- Profil
- Compétences
- Expérience
- Projets
- Stack
- Contact

---

# Stack Technique

## Core

- React
- Vite
- TypeScript
- React Router
- Framer Motion

## Quality

- ESLint
- Prettier
- EditorConfig

## Future

- Vitest
- Testing Library
- SEO avancé
- Analytics

---

# Architecture

```txt
src/
├─ app/
├─ assets/
├─ components/
├─ content/
├─ features/
├─ hooks/
├─ lib/
├─ pages/
├─ styles/
└─ types/
```

---

# Organisation logique

## app/

Gestion applicative.

Contient :

- App
- routing
- providers
- bootstrap global

---

## components/

Composants réutilisables.

### layout/

Structure globale.

### ui/

Design system.

### common/

Composants transverses.

---

## content/

Séparation complète du contenu.

Permet :

- portfolio freelance
- portfolio job
- contenu indépendant du rendu

---

## features/

Organisation métier.

Chaque section possède son propre espace.

---

## hooks/

Logique comportementale.

---

## lib/

Utilitaires.

---

## styles/

Architecture CSS globale.

---

# Scripts disponibles

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

---

# Convention de code

## Structure

- séparation logique
- composants petits
- contenu découplé
- typage strict

## Naming

- composants → PascalCase
- hooks → camelCase
- fichiers data → camelCase
- types → PascalCase

---

# Roadmap du projet

Voir :

`docs/00-roadmap.md`

---

# Déploiement

Prévu pour :

- Vercel
- Netlify
- GitHub Pages

---

# Auteur

**Matomina / MatoStudio**

Développeur Web & Web Mobile.

---

# Licence

Projet personnel.

---

---

# Roadmap Premium — Portfolio V2

# Phase 1 — Fondation technique

## Objectif

Créer un socle stable et professionnel.

## Actions

- création du repo
- React + Vite + TypeScript
- configuration ESLint
- configuration Prettier
- architecture dossiers
- setup routing
- setup styles
- setup docs

## Livrable attendu

Base technique stable.

---

# Phase 2 — Design System

## Objectif

Créer une UI cohérente.

## Composants prioritaires

- Button
- Card
- Container
- SectionShell
- Heading
- Text
- Surface
- ThemeToggle

## Livrable attendu

Bibliothèque UI réutilisable.

---

# Phase 3 — Shell Applicatif

## Objectif

Construire la structure du site.

## Actions

- Header
- Footer
- Layout
- Navigation
- Dark mode
- Routes

## Livrable attendu

Navigation fonctionnelle.

---

# Phase 4 — Portfolio Freelance

## Objectif

Créer la version orientée client.

## Sections

- Hero
- Services
- Process
- Études de cas
- Pricing
- Contact

## Livrable attendu

Version conversion client.

---

# Phase 5 — Portfolio Job

## Objectif

Créer la version recrutement.

## Sections

- Hero
- Profil
- Skills
- GitHub
- Projets
- Expérience

## Livrable attendu

Version technique.

---

# Phase 6 — SEO + Performance

## Objectif

Préparer une base production.

## Actions

- meta tags
- Open Graph
- robots.txt
- sitemap
- lazy loading
- optimisation images
- accessibilité
- optimisation animations

## Livrable attendu

Projet production-ready.

---

# Phase 7 — Finition Premium

## Objectif

Finaliser la qualité perçue.

## Actions

- responsive final
- polish UI
- micro-interactions
- cohérence globale
- vérification GitHub

## Livrable attendu

Portfolio premium.

---

# Vision Finale

À terme, le portfolio doit permettre :

- de convaincre un client
- de convaincre un recruteur
- de démontrer une architecture moderne
- de servir de laboratoire personnel
- d’évoluer dans le temps sans dette technique

---

# Décision structurante

Ce projet doit être construit comme un produit logiciel et non comme un simple portfolio visuel.

Chaque décision doit privilégier :

- maintenabilité
- scalabilité
- clarté
- réutilisabilité
- performance
- cohérence

---

# Résultat attendu

Une plateforme personnelle professionnelle, robuste, moderne et durable.
