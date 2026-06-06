# MatoStudio Portfolio V2

Portfolio professionnel de MatoStudio, conçu comme une vitrine premium pour présenter mes projets, mes compétences et mes offres de développement web.

---

## Présentation

Ce projet sert de base au portfolio freelance et professionnel de Matomina Nguayila.

Objectifs :

- présenter une identité premium MatoStudio
- valoriser des projets concrets
- mettre en avant des compétences front-end et full stack
- préparer une base maintenable, scalable et production-ready

---

## Démo

Site déployé en continu sur Vercel à chaque merge sur `main`.
Lien de production disponible après mise en ligne officielle sur matostudio.fr.

---

## Stack

- React 19
- TypeScript (strict)
- Vite
- Tailwind CSS v4
- Framer Motion
- React Router v7
- ESLint + Prettier
- Vitest + Testing Library

---

## Quickstart

```bash
git clone https://github.com/Matomina/matostudio-portfolio-v2.git
cd matostudio-portfolio-v2
npm install
npm run dev
```

---

## Commandes utiles

```bash
npm run dev           # serveur de développement
npm run test          # tests unitaires (vitest)
npm run test:watch    # tests en mode watch
npm run lint          # ESLint
npm run format:check  # vérification Prettier
npm run build         # build de production
npm run check         # vérification complète (lint + format + test + build)
npm run preview       # aperçu du build local
```

---

## Makefile

```bash
make install
make dev
make lint
make format-check
make build
make check
make preview
```

---

## Configuration

Créer un fichier `.env` à partir du modèle :

```bash
cp .env.example .env
```

Variables disponibles :

| Variable       | Description                  | Exemple                 |
| -------------- | ---------------------------- | ----------------------- |
| `VITE_API_URL` | URL de base de l'API backend | `http://localhost:3000` |

---

## Qualité

Le projet utilise :

- TypeScript strict
- ESLint + Prettier
- Vitest — tests unitaires sur la logique métier (simulateur de devis)
- Validation des assets de production (`validate:production`)
- GitHub Actions CI — lint + format + tests + build sur chaque PR

Commande de vérification complète :

```bash
npm run check
```

---

## Notes

Le dashboard admin est temporairement retiré du bundle public. Le code reste
disponible dans l'historique git et sera réintroduit derrière une authentification
sécurisée dans une future version.

---

## Documentation

- [Roadmap](docs/00-roadmap.md)
- [Production readiness](docs/06-6steps-production-readiness.md)
- [Git workflow](docs/01-git-workflow.md)
- [Architecture](docs/02-architecture.md)
- [Plan d'audit](docs/10-audit-action-plan.md)

---

## Licence

Projet personnel.
