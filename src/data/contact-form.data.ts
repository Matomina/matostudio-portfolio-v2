import type { ContactReassuranceItem, SelectOption } from '@/types/agency.types'

export const contactProjectTypeOptions: readonly SelectOption[] = [
  { value: 'site-vitrine', label: 'Site vitrine essentiel' },
  { value: 'site-premium', label: 'Site premium' },
  { value: 'landing-page', label: 'Landing page' },
  { value: 'refonte', label: 'Refonte' },
  { value: 'sur-mesure', label: 'Projet sur mesure' },
] as const

export const contactBudgetOptions: readonly SelectOption[] = [
  { value: 'moins-1000', label: 'Moins de 1 000 €' },
  { value: '1000-2000', label: '1 000 € à 2 000 €' },
  { value: '2000-4000', label: '2 000 € à 4 000 €' },
  { value: '4000-plus', label: '4 000 € et plus' },
  { value: 'a-definir', label: 'À définir ensemble' },
] as const

export const contactTimelineOptions: readonly SelectOption[] = [
  { value: 'flexible', label: 'Flexible' },
  { value: '1-mois', label: 'Dans le mois' },
  { value: '2-3-mois', label: 'Dans 2 à 3 mois' },
  { value: 'urgent', label: 'Besoin prioritaire' },
] as const

export const contactReassuranceItems: readonly ContactReassuranceItem[] = [
  {
    title: 'Réponse claire',
    description: 'Un premier retour lisible pour comprendre la faisabilité et la bonne direction.',
  },
  {
    title: 'Cadrage du besoin',
    description: 'Objectifs, pages, contenus, délais et priorités sont clarifiés avant le devis.',
  },
  {
    title: 'Devis personnalisé',
    description: 'Chaque estimation est ajustée selon le niveau de finition et les contraintes.',
  },
  {
    title: 'Accompagnement professionnel',
    description: 'Méthode, communication et vérifications sont intégrées au déroulé du projet.',
  },
] as const
