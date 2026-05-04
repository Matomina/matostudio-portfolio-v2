# Design system — MatoStudio Portfolio V2

## Objectif

Définir les bases visuelles du projet avant de construire les pages finales.

Le design doit être premium, cohérent, maintenable et adapté aux deux parcours :

- freelance / client ;
- emploi / recruteur.

---

## Direction artistique

### MatoStudio freelance

Style :

- premium ;
- sombre ;
- noir profond ;
- or ;
- argent ;
- contraste fort ;
- effets subtils ;
- impression haut de gamme.

Objectif visuel :

- inspirer confiance ;
- donner une impression de sérieux ;
- évoquer la précision, le détail et la qualité.

### Portfolio emploi

Style :

- plus sobre ;
- professionnel ;
- lisible ;
- technique ;
- moins commercial ;
- orienté recruteur.

Objectif visuel :

- montrer un profil structuré ;
- faciliter la lecture ;
- mettre les projets et compétences en avant.

---

## Couleurs cibles

### Base

```css
--color-black: #050505;
--color-ink: #0d0d0f;
--color-surface: #141416;
--color-surface-soft: #1c1c20;
```

### Premium

```css
--color-gold: #d4af37;
--color-gold-soft: #f1d98a;
--color-silver: #c9c9c9;
--color-platinum: #f2f2f2;
```

### Texte

```css
--color-text-main: #f5f5f5;
--color-text-muted: #b8b8b8;
--color-text-soft: #8f8f8f;
```

### États

```css
--color-success: #3ddc97;
--color-warning: #f5b84b;
--color-error: #ff5c5c;
```

---

## Typographie

Objectifs :

- titres élégants ;
- textes très lisibles ;
- hiérarchie claire ;
- pas de surcharge.

Règles :

- un grand titre par section ;
- paragraphes courts ;
- interlignage confortable ;
- éviter les blocs trop denses.

---

## Espacements

Règles :

- sections aérées ;
- containers limités en largeur ;
- grille stable ;
- padding mobile confortable.

Tokens recommandés :

```css
--space-1: 0.25rem;
--space-2: 0.5rem;
--space-3: 0.75rem;
--space-4: 1rem;
--space-6: 1.5rem;
--space-8: 2rem;
--space-12: 3rem;
--space-16: 4rem;
--space-24: 6rem;
```

---

## Composants UI cibles

```txt
Button
Container
SectionHeader
Card
Badge
Logo
NavLink
ProjectCard
ServiceCard
PricingCard
ContactCard
```

---

## Animations

Les animations doivent être premium mais sobres.

Accepté :

- fade-in léger ;
- translation verticale douce ;
- hover subtil ;
- glow discret ;
- transition fluide.

À éviter :

- animations trop rapides ;
- effets gadgets ;
- mouvement excessif ;
- surcharge sur mobile.

---

## Responsive

Priorité :

1. mobile propre ;
2. tablette stable ;
3. desktop premium.

Règles :

- aucun débordement horizontal ;
- CTA accessibles ;
- navigation claire ;
- cards lisibles ;
- images optimisées.

---

## Accessibilité

Minimum attendu :

- contraste suffisant ;
- focus visible ;
- navigation clavier ;
- liens explicites ;
- textes alternatifs ;
- structure de titres logique.

---

## Critères de validation

- [ ] tokens centralisés
- [ ] composants UI réutilisables
- [ ] style cohérent sur les deux portfolios
- [ ] responsive propre
- [ ] animations sobres
- [ ] accessibilité de base respectée
- [ ] `npm run check` passe
