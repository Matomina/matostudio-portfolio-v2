# Workflow Git — MatoStudio Portfolio V2

## Objectif

Garantir un workflow propre, professionnel et traçable.

Le dépôt ne doit pas évoluer par modifications directes sur `main`. Toute grosse étape doit passer par une branche dédiée et une Pull Request.

---

## Règle officielle

```txt
main = version stable
branche dédiée = travail en cours
Pull Request = validation
merge = intégration officielle
```

---

## Cycle de travail

### 1. Se placer sur `main`

```powershell
git checkout main
git pull origin main
```

### 2. Créer une branche dédiée

```powershell
git checkout -b feature/portfolio-routing-split
```

### 3. Travailler sur une étape précise

Le scope doit rester limité.

Exemples acceptés :

- routing split ;
- design system foundation ;
- freelance homepage ;
- job homepage ;
- production readiness.

Exemples à éviter :

- refaire tout le site ;
- modifier design, routing, contenu et SEO dans la même branche ;
- mélanger documentation et gros refactor sans raison.

### 4. Vérifier localement

```powershell
npm run check
git status
```

### 5. Commit

```powershell
git add .
git commit -m "feat: split portfolio routes"
```

### 6. Push

```powershell
git push -u origin feature/portfolio-routing-split
```

### 7. Pull Request

La PR doit contenir :

- objectif ;
- fichiers modifiés ;
- checklist ;
- résultat de `npm run check` ;
- limites connues si nécessaire.

### 8. Merge dans `main`

Après validation :

- merge de la PR ;
- retour sur `main` ;
- pull ;
- suppression de la branche locale si souhaité.

```powershell
git checkout main
git pull origin main
git branch -d feature/portfolio-routing-split
```

---

## Conventions de branches

```txt
feature/...
fix/...
chore/...
docs/...
refactor/...
```

Exemples :

```txt
docs/roadmap-governance
feature/portfolio-routing-split
chore/design-system-foundation
feature/freelance-portfolio
feature/job-portfolio
chore/production-readiness
```

---

## Conventions de commits

Format recommandé :

```txt
type: description courte
```

Types :

```txt
feat     nouvelle fonctionnalité
fix      correction
docs     documentation
chore    configuration / maintenance
refactor refonte sans changement fonctionnel
style    mise en forme
test     tests
```

Exemples :

```txt
docs: define project roadmap and workflow
feat: add portfolio routing split
chore: prepare design system tokens
fix: correct header navigation links
```

---

## Checklist avant PR

- [ ] Le scope est clair
- [ ] La branche part bien de `main`
- [ ] Le code est propre
- [ ] `npm run check` passe
- [ ] Pas de fichier inutile
- [ ] Pas de secret dans le code
- [ ] La documentation est mise à jour si nécessaire
- [ ] La roadmap est mise à jour si une grosse étape est terminée
