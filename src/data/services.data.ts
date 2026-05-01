import type { Service } from '@/types/service.types'

export const services: readonly Service[] = [
  {
    id: 'site-vitrine',
    title: 'Site vitrine professionnel',
    description:
      'Création de sites modernes, responsive et orientés conversion pour présenter une activité, rassurer les visiteurs et générer des contacts.',
    features: ['Design responsive', 'Structure claire', 'SEO de base', 'Formulaire de contact'],
  },
  {
    id: 'portfolio',
    title: 'Portfolio développeur / freelance',
    description:
      'Construction de portfolios premium pour valoriser un profil, des projets, des compétences et une identité professionnelle.',
    features: [
      'Identité visuelle',
      'Projets détaillés',
      'Parcours clair',
      'Optimisation GitHub/LinkedIn',
    ],
  },
  {
    id: 'refonte',
    title: 'Refonte front-end',
    description:
      'Amélioration d’un site existant avec une meilleure structure, un design plus propre, une expérience mobile optimisée et un code plus maintenable.',
    features: ['Audit UI/UX', 'Nettoyage CSS', 'Composants réutilisables', 'Performance'],
  },
  {
    id: 'integration',
    title: 'Intégration React',
    description:
      'Développement d’interfaces React structurées, évolutives et maintenables avec Vite, TypeScript et une architecture propre.',
    features: ['React', 'TypeScript', 'Vite', 'Architecture composants'],
  },
] as const
