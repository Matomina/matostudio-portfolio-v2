# Branch Strategy

## Branches principales

- `main` : branche stable, prête pour production
- `develop` : branche d’intégration si le projet grossit
- `feature/*` : nouvelle fonctionnalité
- `fix/*` : correction de bug
- `docs/*` : documentation
- `chore/*` : maintenance, tooling, configuration
- `refactor/*` : refonte sans changement fonctionnel

## Règles de travail

- Ne pas travailler directement sur `main`
- Créer une branche par sujet
- Garder des commits courts et lisibles
- Vérifier le projet avant push avec `npm run check`
- Ouvrir une pull request avant fusion dans `main`

## Exemples

```bash
git checkout -b feature/contact-section
git checkout -b fix/header-responsive
git checkout -b docs/readme-update
git checkout -b chore/add-ci
Convention de commits

Exemples :

feat: add contact section
fix: correct responsive header
docs: update README
chore: add GitHub Actions CI
refactor: reorganize layout components

```
