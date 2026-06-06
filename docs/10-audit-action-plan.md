# Audit action plan MatoStudio

Date initiale : 2026-06-04
Dernière mise à jour : 2026-06-06

## Scope

- Frontend : Matomina/matostudio-portfolio-v2
- Backend : Matomina/matostudio-api

## Priorités et état

| #   | Priorité                                   | Statut                                                  |
| --- | ------------------------------------------ | ------------------------------------------------------- |
| 1   | Stabiliser le frontend production          | Fait                                                    |
| 2   | Retirer les routes dashboard publiques     | Fait — PR #46                                           |
| 3   | Ajouter une base de tests front            | Fait — PR #47 (18 tests vitest)                         |
| 4   | Centraliser les appels API frontend        | Fait — PR #48 (src/lib/api/)                            |
| 5   | Mettre à jour README et docs               | Fait — cette PR                                         |
| 6   | Compléter les pages légales                | Partiel — placeholders clairs, infos admin à renseigner |
| 7   | Déployer l'API backend en production       | À faire                                                 |
| 8   | Connecter le frontend à l'API production   | À faire                                                 |
| 9   | Activer la livraison email en production   | À faire                                                 |
| 10  | Audit Lighthouse et déploiement production | À faire                                                 |

## Ce qui a été fait

### PR #46 — chore: remove inactive dashboard production debt

- Suppression des pages dashboard non routées du bundle public
- Suppression du CSS dashboard global (`src/styles/dashboard.css`)
- Suppression des constantes de routes dashboard orphelines
- Suppression des données statiques fictives du dashboard
- Code conservé dans l'historique git

### PR #47 — test: add frontend quality coverage with vitest

- Installation de vitest, @testing-library/react, jest-dom, jsdom
- 18 tests unitaires sur `calculateQuoteEstimate` et `formatQuoteAmount`
- `npm run test` intégré dans `npm run check` → CI couvre les tests automatiquement

### PR #48 — refactor: centralize frontend API requests

- `src/lib/api/client.ts` — `apiFetch()` avec timeout AbortController 10s
- `src/lib/api/contact.ts` — `sendContactRequest(payload)`
- `src/lib/api/quote.ts` — `sendQuoteRequest(payload)`
- `.env.example` documenté avec exemple production

## Ce qui reste à faire

### Légal (priorité avant mise en ligne)

Les fichiers `LegalPage.tsx` et `PrivacyPage.tsx` contiennent des placeholders explicites
pour les champs à compléter :

- **SIREN/SIRET** — à renseigner après immatriculation officielle
- **Adresse administrative** — à renseigner après immatriculation officielle
- **Hébergeur définitif** — à préciser après déploiement production final

Ces champs sont marqués `// TODO:` dans le code source.

### Backend et production

1. Déployer `matostudio-api` sur un hébergeur production
2. Configurer `VITE_API_URL` en production sur Vercel
3. Activer la livraison email (SMTP ou provider transactionnel)
4. Tester les formulaires contact et devis en production

### Qualité finale

- Audit Lighthouse (performance, accessibilité, SEO, best practices)
- Test formulaires sur mobile
- Vérifier sitemap et robots.txt après déploiement

## Prochaine action exacte

Renseigner SIREN/SIRET et hébergeur dans `src/pages/LegalPage.tsx` après immatriculation,
puis déployer l'API backend et configurer `VITE_API_URL` en production Vercel.
