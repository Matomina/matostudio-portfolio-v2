# Checklist production — MatoStudio Portfolio V2

## Objectif

Préparer le projet à une mise en ligne sérieuse.

Cette checklist doit être utilisée après stabilisation des phases principales : architecture,
design system, portfolio freelance et portfolio emploi.

---

## Build

- [x] `npm install` fonctionne.
- [x] `npm run check` passe.
- [x] `npm run build` passe.
- [ ] `npm run preview` fonctionne en local.
- [x] Aucun warning critique bloquant côté CI.

---

## SEO global

- [x] Langue `fr` configurée dans `index.html`.
- [x] Title global présent.
- [x] Meta description globale présente.
- [x] Canonical global présent.
- [x] Favicon configuré.
- [x] `robots.txt` présent.
- [x] `sitemap.xml` présent.
- [x] Open Graph global présent.
- [ ] Image sociale réelle à vérifier dans `public/social-preview`.

---

## SEO freelance

- [x] Parcours `/freelance` complet.
- [x] Message orienté service et conversion.
- [x] CTA visible.
- [x] Données de contact visibles.
- [x] Preuves de confiance présentes.
- [ ] Meta dédiée par route à améliorer plus tard si nécessaire.

---

## SEO emploi

- [x] Parcours `/emploi` complet.
- [x] Description claire du profil développeur.
- [x] Projets techniques visibles.
- [x] GitHub accessible.
- [ ] LinkedIn réel à remplacer si nécessaire.
- [ ] CV réel à ajouter ou à lier.

---

## Accessibilité

- [x] Skip link présent.
- [x] Focus visible prévu dans les styles globaux.
- [x] Boutons et liens explicites.
- [x] Titres principaux présents par page.
- [ ] Navigation clavier à vérifier manuellement.
- [ ] Contrastes à vérifier après preview.
- [ ] Lecture mobile à vérifier après preview.

---

## Responsive

- [ ] Mobile 360px.
- [ ] Mobile 390px.
- [ ] Tablette.
- [ ] Laptop.
- [ ] Desktop large.
- [ ] Aucun overflow horizontal.
- [ ] Navigation mobile propre.
- [ ] CTA visibles.

---

## Performance

- [x] Build Vite validé.
- [x] Assets versionnés dans `dist`.
- [x] Cache long configuré pour `/assets` avec Vercel.
- [ ] Logo principal à optimiser plus tard si nécessaire.
- [ ] Score Lighthouse à mesurer après preview.
- [ ] Images sociales et favicons à vérifier.

---

## Déploiement

- [x] `vercel.json` présent.
- [x] Réécriture SPA configurée.
- [x] Sitemap configuré.
- [x] Robots configuré.
- [ ] Projet Vercel créé.
- [ ] Domaine configuré.
- [ ] HTTPS actif.
- [ ] Preview validée.
- [ ] README mis à jour avec l'URL de production.

---

## Validation finale

- [x] Portfolio freelance construit.
- [x] Portfolio emploi construit.
- [x] Documentation projet à jour.
- [x] Audit final ajouté.
- [ ] Preview Vercel testée.
- [ ] Roadmap mise à jour après validation production.
- [ ] Version stable taguée si nécessaire.
