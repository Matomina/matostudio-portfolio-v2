import type { AboutHighlight, AboutPillar } from '@/types/about.types'

export const aboutHighlights: readonly AboutHighlight[] = [
  {
    id: 'profile',
    label: 'Profil',
    value: 'Développeur web & web mobile',
  },
  {
    id: 'focus',
    label: 'Spécialité',
    value: 'Interfaces modernes, responsive et maintenables',
  },
  {
    id: 'method',
    label: 'Méthode',
    value: 'Roadmap, architecture, qualité, amélioration continue',
  },
] as const

export const aboutPillars: readonly AboutPillar[] = [
  {
    id: 'clarity',
    title: 'Clarté',
    description:
      'Chaque projet doit être compréhensible, structuré et facile à maintenir, autant côté utilisateur que côté code.',
  },
  {
    id: 'quality',
    title: 'Qualité',
    description:
      'Le travail est construit étape par étape avec vérification, lint, build, commits propres et documentation.',
  },
  {
    id: 'progression',
    title: 'Progression',
    description:
      'Chaque projet sert aussi à renforcer le niveau professionnel : architecture, design, accessibilité, performance et logique produit.',
  },
] as const
