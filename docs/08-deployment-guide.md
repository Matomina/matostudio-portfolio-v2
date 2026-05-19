# Guide de déploiement — MatoStudio Portfolio V2

Dernière mise à jour : 2026-05-19

## Objectif

Préparer une mise en ligne propre du portfolio MatoStudio sur Vercel ou une plateforme
équivalente.

Le projet est une application React + Vite avec routing côté client. La configuration `vercel.json`
prépare déjà les réécritures nécessaires pour que les routes `/freelance`, `/emploi` et `/legal`
fonctionnent après rafraîchissement navigateur.

---

## 1. Pré-requis avant déploiement

Avant de connecter le projet à Vercel, vérifier ces points :

- [ ] La branche `main` est à jour.
- [ ] `npm run check` passe en local.
- [ ] La CI GitHub est verte sur la dernière PR mergée.
- [ ] Le repo GitHub est propre.
- [ ] Les liens temporaires sont identifiés.
- [ ] Le domaine final est choisi.

Commande locale de validation :

```powershell
git checkout main
git pull origin main
npm run check
git status
```

Résultat attendu :

```txt
All matched files use Prettier code style!
✓ built
nothing to commit, working tree clean
```

---

## 2. Configuration Vercel recommandée

Créer un nouveau projet Vercel depuis le repo GitHub.

Paramètres recommandés :

```txt
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Development Command: npm run dev
Production Branch: main
```

Variables d'environnement :

```txt
Aucune variable obligatoire pour la version actuelle.
```

---

## 3. Routes à tester après preview

Après création de la preview Vercel, tester manuellement :

- [ ] `/`
- [ ] `/freelance`
- [ ] `/emploi`
- [ ] `/legal`
- [ ] une route inconnue pour vérifier la page 404

Pour chaque route, vérifier :

- [ ] chargement initial ;
- [ ] rafraîchissement navigateur ;
- [ ] navigation header ;
- [ ] CTA ;
- [ ] responsive mobile ;
- [ ] absence d'overflow horizontal.

---

## 4. SEO et fichiers publics

Fichiers déjà préparés :

- [x] `public/robots.txt`
- [x] `public/sitemap.xml`
- [x] `public/site.webmanifest`
- [x] `vercel.json`

Points à vérifier avant domaine final :

- [ ] Remplacer `https://matostudio.fr` si le domaine final est différent.
- [ ] Vérifier que `/sitemap.xml` est accessible en production.
- [ ] Vérifier que `/robots.txt` est accessible en production.
- [ ] Ajouter ou vérifier l'image Open Graph.
- [ ] Vérifier les favicons.

---

## 5. Domaine et mise en ligne

Lorsque la preview est validée :

- [ ] Ajouter le domaine final dans Vercel.
- [ ] Vérifier les DNS.
- [ ] Vérifier HTTPS.
- [ ] Tester les routes avec le domaine final.
- [ ] Tester les partages sociaux si une image Open Graph est en place.

---

## 6. Validation finale

Une fois le site en ligne :

- [ ] Lancer un test Lighthouse.
- [ ] Vérifier la navigation clavier.
- [ ] Vérifier le rendu mobile.
- [ ] Vérifier les liens de contact.
- [ ] Vérifier les liens GitHub et démos.
- [ ] Mettre à jour le README avec l'URL de production.
- [ ] Mettre à jour la roadmap si la Phase 6 est validée.

---

## 7. Décision de livraison

Le projet peut être considéré prêt pour mise en ligne si :

- `npm run check` passe ;
- la CI GitHub est verte ;
- la preview Vercel fonctionne ;
- les routes publiques sont testées ;
- les liens critiques sont vérifiés ;
- le domaine final est correctement configuré.
