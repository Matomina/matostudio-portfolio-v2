export const ROUTES = {
  home: '/',
  contact: '/contact',
  quote: '/devis',
  payment: '/paiement',
  freelance: '/freelance',
  job: '/emploi',
  legal: '/mentions-legales',
  privacy: '/politique-de-confidentialite',
  adminLogin: '/admin/login',
  adminDashboard: '/admin/dashboard',
  adminLeads: '/admin/leads',
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]
