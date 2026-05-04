import { ROUTES } from '@/lib/constants/routes'

export const freelancePageContent = {
  eyebrow: 'Portfolio freelance',
  title: 'MatoStudio — Création de sites web premium orientés conversion',
  description:
    'Un parcours pensé pour présenter mes services, mes projets, mon process et mes offres à des clients qui veulent un site professionnel, moderne et crédible.',
  highlights: [
    'Sites vitrines modernes',
    'Landing pages orientées conversion',
    'Interfaces responsives',
    'Accompagnement technique clair',
  ],
  primaryCta: {
    label: 'Découvrir le parcours freelance',
    href: ROUTES.freelance,
  },
  secondaryCta: {
    label: 'Me contacter',
    href: 'mailto:matomina.nguayila@gmail.com',
  },
} as const
