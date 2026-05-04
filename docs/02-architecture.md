# Architecture front-end — MatoStudio Portfolio V2

## Objectif

Définir une architecture claire pour maintenir deux portfolios distincts dans un même projet React + Vite + TypeScript.

---

## Principe général

Le projet contient deux expériences principales :

```txt
/freelance → parcours client / business
/emploi    → parcours recruteur / entreprise
```

La racine `/` sert de page d’entrée commune.

---

## Routes cibles

```txt
/          Page d’entrée
/freelance Portfolio freelance MatoStudio
/emploi    Portfolio emploi / développeur
/legal     Mentions légales si nécessaire
*          Page 404
```

---

## Structure cible

```txt
src/
  app/
    App.tsx
    router.tsx

  assets/
    brand/

  components/
    layout/
      Header.tsx
      Footer.tsx
      PageLayout.tsx

    sections/
      common/
      freelance/
      job/

    ui/
      Button.tsx
      Container.tsx
      SectionHeader.tsx
      Card.tsx
      Badge.tsx
      SkipLink.tsx

  data/
    site.config.ts
    navigation.data.ts
    freelance.data.ts
    job.data.ts
    projects.data.ts

  hooks/

  lib/
    cn.ts

  pages/
    HomePage.tsx
    FreelancePage.tsx
    JobPage.tsx
    LegalPage.tsx
    NotFoundPage.tsx

  styles/
    reset.css
    tokens.css
    globals.css

  types/
```

---

## Responsabilités des dossiers

### `src/app`

Contient l’entrée applicative, le router et la logique d’orchestration globale.

### `src/pages`

Contient les pages principales. Une page compose des sections, mais ne doit pas contenir trop de logique métier.

### `src/components/layout`

Contient les composants de structure : header, footer, layout de page.

### `src/components/sections`

Contient les sections métier.

Séparation attendue :

```txt
sections/common     sections réutilisables
sections/freelance  sections client
sections/job        sections recruteur
```

### `src/components/ui`

Contient les composants réutilisables et neutres :

- boutons ;
- cartes ;
- badges ;
- containers ;
- titres de section.

### `src/data`

Contient le contenu éditorial et les configurations.

Règle : les textes longs, listes, projets, services et offres doivent être dans `data`, pas directement dispersés dans les composants.

### `src/styles`

Contient les fondations CSS globales.

---

## Règles d’architecture

- Une page assemble des sections.
- Une section affiche un bloc métier.
- Un composant UI reste neutre.
- Les données doivent être centralisées.
- Les contenus freelance et emploi ne doivent pas être mélangés.
- Les composants communs doivent rester réutilisables.
- Aucun gros fichier monolithique ne doit porter toute l’interface.

---

## Phase 2 — fichiers prioritaires

```txt
src/app/router.tsx
src/pages/HomePage.tsx
src/pages/FreelancePage.tsx
src/pages/JobPage.tsx
src/pages/NotFoundPage.tsx
src/data/navigation.data.ts
src/data/freelance.data.ts
src/data/job.data.ts
```

---

## Critères de validation

- [ ] Les routes `/`, `/freelance`, `/emploi` fonctionnent
- [ ] Une page 404 existe
- [ ] Les données sont séparées
- [ ] Les pages ne sont pas monolithiques
- [ ] Les imports utilisent l’alias `@/`
- [ ] `npm run check` passe
