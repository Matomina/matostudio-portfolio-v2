import { ROUTES } from '@/lib/constants/routes'

export type SeoRouteKey = keyof typeof seoConfig

export const siteUrl = 'https://matostudio.fr'

export const seoConfig = {
  home: {
    path: ROUTES.home,
    title: 'MatoStudio Agency | Création de sites web premium',
    description:
      'MatoStudio Agency conçoit des sites web modernes, rapides, responsive et orientés conversion pour les indépendants, entreprises et recruteurs.',
  },
  freelance: {
    path: ROUTES.freelance,
    title: 'Portfolio freelance MatoStudio | Sites web premium et conversion',
    description:
      'Découvrez les services freelance MatoStudio : sites vitrines premium, interfaces React, optimisation SEO, parcours de devis et expériences web performantes.',
  },
  job: {
    path: ROUTES.job,
    title: 'Portfolio développeur web | MatoStudio',
    description:
      'Portfolio développeur web et web mobile de Matomina Nguayila : projets React, TypeScript, intégration, architecture front-end et démarche professionnelle.',
  },
  contact: {
    path: ROUTES.contact,
    title: 'Contact MatoStudio | Discuter de votre projet web',
    description:
      'Contactez MatoStudio pour un site web premium, une refonte, une intégration React ou un accompagnement digital orienté qualité et conversion.',
  },
  quote: {
    path: ROUTES.quote,
    title: 'Demande de devis web | MatoStudio Agency',
    description:
      'Préparez une estimation de devis pour votre site web avec MatoStudio Agency : vitrine, refonte, SEO, formulaire avancé et options premium.',
  },
  payment: {
    path: ROUTES.payment,
    title: 'Paiement sécurisé | MatoStudio Agency',
    description:
      'Page de paiement MatoStudio Agency pour préparer une expérience de règlement claire, sécurisée et professionnelle après validation du devis.',
  },
  legal: {
    path: ROUTES.legal,
    title: 'Mentions légales | MatoStudio Agency',
    description:
      'Consultez les mentions légales de MatoStudio Agency, portfolio professionnel et activité de création de sites web premium.',
  },
  privacy: {
    path: ROUTES.privacy,
    title: 'Politique de confidentialité | MatoStudio Agency',
    description:
      'Consultez la politique de confidentialité de MatoStudio Agency et les informations relatives au traitement des données personnelles.',
  },
  notFound: {
    path: '/404',
    title: 'Page introuvable | MatoStudio Agency',
    description:
      'La page demandée est introuvable. Revenez à l’accueil MatoStudio Agency pour poursuivre votre navigation.',
  },
} as const

export const publicRoutes = [
  seoConfig.home.path,
  seoConfig.freelance.path,
  seoConfig.job.path,
  seoConfig.contact.path,
  seoConfig.quote.path,
  seoConfig.payment.path,
  seoConfig.legal.path,
  seoConfig.privacy.path,
] as const
