export const ROUTES = {
  home: '/',
  freelance: '/freelance',
  job: '/emploi',
  legal: '/legal',
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]
