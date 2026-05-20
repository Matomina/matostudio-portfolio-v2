import type { QuoteDeadline, QuoteOption, QuoteProjectType } from '@/types/agency.types'

export const quoteProjectTypes: readonly QuoteProjectType[] = [
  {
    id: 'essential-showcase',
    label: 'Site vitrine essentiel',
    description: 'Une présence professionnelle claire, rapide et crédible.',
    basePrice: 690,
    includedPages: 3,
    extraPagePrice: 120,
  },
  {
    id: 'premium-showcase',
    label: 'Site premium',
    description: 'Une vitrine plus persuasive avec un parcours orienté conversion.',
    basePrice: 1290,
    includedPages: 6,
    extraPagePrice: 150,
  },
  {
    id: 'landing-page',
    label: 'Landing page',
    description: 'Une page ciblée pour une offre, une campagne ou une demande de devis.',
    basePrice: 590,
    includedPages: 1,
    extraPagePrice: 160,
  },
  {
    id: 'redesign',
    label: 'Refonte',
    description: 'Repenser un site existant pour améliorer clarté, image et conversion.',
    basePrice: 890,
    includedPages: 4,
    extraPagePrice: 130,
  },
  {
    id: 'custom-project',
    label: 'Projet sur mesure',
    description: 'Un besoin spécifique avec structure, fonctionnalités ou accompagnement dédié.',
    basePrice: 1800,
    includedPages: 6,
    extraPagePrice: 180,
  },
] as const

export const quoteOptions: readonly QuoteOption[] = [
  {
    id: 'local-seo',
    label: 'SEO local',
    description: 'Structure, contenus clés et signaux locaux pour une meilleure visibilité.',
    price: 180,
  },
  {
    id: 'content-writing',
    label: 'Rédaction de contenu',
    description: 'Aide à la formulation des sections principales et messages de conversion.',
    price: 260,
  },
  {
    id: 'advanced-form',
    label: 'Formulaire avancé',
    description: 'Champs qualifiants, parcours guidé ou logique conditionnelle côté front.',
    price: 220,
  },
  {
    id: 'premium-animations',
    label: 'Animations premium',
    description: 'Micro-interactions et transitions élégantes, sans nuire à la lisibilité.',
    price: 300,
  },
  {
    id: 'maintenance',
    label: 'Maintenance',
    description: 'Préparation d’un suivi après livraison pour corrections et petites évolutions.',
    price: 190,
  },
  {
    id: 'future-payment',
    label: 'Intégration paiement future',
    description: 'Préparation visuelle et technique pour une future intégration sécurisée.',
    price: 320,
  },
] as const

export const quoteDeadlines: readonly QuoteDeadline[] = [
  {
    id: 'flexible',
    label: 'Flexible',
    description: 'Planning confortable, idéal pour affiner le contenu.',
    multiplier: 0.95,
  },
  {
    id: 'standard',
    label: 'Standard',
    description: 'Cadence équilibrée après réception des contenus.',
    multiplier: 1,
  },
  {
    id: 'priority',
    label: 'Prioritaire',
    description: 'Projet à organiser rapidement avec validations rapprochées.',
    multiplier: 1.15,
  },
  {
    id: 'express',
    label: 'Express',
    description: 'Délai très court, à confirmer selon la disponibilité.',
    multiplier: 1.25,
  },
] as const
