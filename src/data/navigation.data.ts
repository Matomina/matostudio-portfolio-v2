import { ROUTES } from '@/lib/constants/routes'

export const navigationItems = [
  {
    label: 'Accueil',
    href: ROUTES.home,
  },
  {
    label: 'Freelance',
    href: ROUTES.freelance,
  },
  {
    label: 'Emploi',
    href: ROUTES.job,
  },
] as const
