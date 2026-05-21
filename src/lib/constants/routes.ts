export const ROUTES = {
  home: '/',
  contact: '/contact',
  quote: '/devis',
  payment: '/paiement',
  freelance: '/freelance',
  job: '/emploi',
  legal: '/mentions-legales',
  privacy: '/politique-de-confidentialite',
  dashboard: '/dashboard',
  dashboardContacts: '/dashboard/contacts',
  dashboardQuotes: '/dashboard/devis',
  dashboardStats: '/dashboard/statistiques',
  dashboardSettings: '/dashboard/preferences',
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]
