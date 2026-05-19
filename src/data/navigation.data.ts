import { ROUTES } from '@/lib/constants/routes'

export const navigationItems = [
  {
    id: 'home',
    href: ROUTES.home,
  },
  {
    id: 'quote',
    href: ROUTES.quote,
  },
  {
    id: 'freelance',
    href: ROUTES.freelance,
  },
  {
    id: 'job',
    href: ROUTES.job,
  },
] as const
