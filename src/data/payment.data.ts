import type { ContactReassuranceItem, PaymentPreviewMethod } from '@/types/agency.types'

export const paymentPreviewMethods: readonly PaymentPreviewMethod[] = [
  {
    title: 'Stripe',
    description: 'Carte bancaire et parcours de règlement sécurisé lors d’une future activation.',
    status: 'Prévu',
  },
  {
    title: 'PayPal',
    description: 'Option complémentaire pour les clients qui préfèrent un portefeuille numérique.',
    status: 'Prévu',
  },
  {
    title: 'Virement',
    description: 'Solution simple pour acompte, solde ou projet validé par devis signé.',
    status: 'Disponible sur devis',
  },
] as const

export const paymentReassuranceItems: readonly ContactReassuranceItem[] = [
  {
    title: 'Validation avant paiement',
    description: 'Le règlement intervient uniquement après cadrage, devis et accord du client.',
  },
  {
    title: 'Aucune clé intégrée',
    description: 'Cette page prépare l’expérience visuelle sans secret, API ou logique backend.',
  },
  {
    title: 'Parcours sécurisé',
    description: 'Les moyens de paiement seront activés avec des prestataires reconnus.',
  },
] as const
