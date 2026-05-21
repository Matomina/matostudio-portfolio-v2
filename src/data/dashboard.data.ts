export const dashboardStats = [
  {
    label: 'Leads actifs',
    value: '24',
    detail: '+6 cette semaine',
  },
  {
    label: 'Devis en attente',
    value: '8',
    detail: 'A relancer sous 48h',
  },
  {
    label: 'Potentiel estime',
    value: '18 450 EUR',
    detail: 'Pipeline indicatif',
  },
  {
    label: 'Taux de conversion',
    value: '32%',
    detail: 'Objectif : 40%',
  },
] as const

export const dashboardContacts = [
  {
    name: 'Client vitrine premium',
    email: 'lead-001',
    projectType: 'Site vitrine premium',
    status: 'Nouveau',
    date: 'Aujourd hui',
  },
  {
    name: 'Refonte locale SEO',
    email: 'lead-002',
    projectType: 'Refonte et SEO local',
    status: 'Contacte',
    date: 'Hier',
  },
  {
    name: 'Independant service',
    email: 'lead-003',
    projectType: 'Landing page conversion',
    status: 'A qualifier',
    date: 'Cette semaine',
  },
] as const

export const dashboardQuotes = [
  {
    name: 'Site premium 5 pages',
    estimate: '1 290 EUR',
    deadline: 'Standard',
    status: 'Nouveau devis',
    priority: 'Haute',
  },
  {
    name: 'Refonte complete',
    estimate: '2 450 EUR',
    deadline: 'Rapide',
    status: 'A relancer',
    priority: 'Moyenne',
  },
  {
    name: 'Tunnel conversion',
    estimate: '980 EUR',
    deadline: 'Flexible',
    status: 'En discussion',
    priority: 'Normale',
  },
] as const

export const dashboardTasks = [
  'Qualifier les nouvelles demandes entrantes',
  'Transformer les estimations en devis formels',
  'Suivre les relances commerciales',
  'Preparer la persistance PostgreSQL avant donnees reelles',
] as const

export const dashboardSettings = [
  {
    title: 'Notifications email',
    description: 'Centraliser les alertes contact et devis dans la boite MatoStudio.',
    status: 'A connecter',
  },
  {
    title: 'Base PostgreSQL',
    description: 'Stocker contacts, devis, statuts et historique de suivi.',
    status: 'Prochaine phase',
  },
  {
    title: 'Authentification admin',
    description: 'Proteger toutes les routes dashboard avec une session admin securisee.',
    status: 'A planifier',
  },
] as const
