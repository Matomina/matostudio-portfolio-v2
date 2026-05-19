export const ROUTES = {
  home: '/',
  freelance: '/freelance',
  job: '/emploi',
  legal: '/mentions-legales',
  privacy: '/politique-de-confidentialite',
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]
