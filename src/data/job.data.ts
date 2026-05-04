import { ROUTES } from '@/lib/constants/routes'

export const jobPageContent = {
  eyebrow: 'Portfolio emploi',
  title: 'Développeur web & web mobile — profil technique pour recruteurs',
  description:
    'Un parcours plus sobre et professionnel pour présenter mes compétences, mes projets GitHub, mon évolution, mon CV et ma capacité à intégrer une équipe.',
  highlights: [
    'React, TypeScript et intégration front-end',
    'Back-end Flask / FastAPI selon les projets',
    'Architecture propre et documentation',
    'Culture GitHub, CI et qualité projet',
  ],
  primaryCta: {
    label: 'Voir le parcours emploi',
    href: ROUTES.job,
  },
  secondaryCta: {
    label: 'Voir mon GitHub',
    href: 'https://github.com/Matomina',
  },
} as const
