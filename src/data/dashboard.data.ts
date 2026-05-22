export const dashboardStats = [
  {
    label: 'Leads actifs',
    value: '24',
    detail: '+6 cette semaine',
    trend: '+18%',
    tone: 'success',
  },
  {
    label: 'Devis en attente',
    value: '8',
    detail: 'À relancer sous 48h',
    trend: '3 urgents',
    tone: 'warning',
  },
  {
    label: 'Potentiel estimé',
    value: '18 450 €',
    detail: 'Pipeline indicatif',
    trend: '+2 900 €',
    tone: 'premium',
  },
  {
    label: 'Taux de conversion',
    value: '32%',
    detail: 'Objectif : 40%',
    trend: '+4 pts',
    tone: 'info',
  },
] as const

export const dashboardContacts = [
  {
    id: 'lead-001',
    name: 'Client vitrine premium',
    email: 'lead-001@matostudio.local',
    phone: '+33 6 00 00 00 01',
    projectType: 'Site vitrine premium',
    status: 'Nouveau',
    date: 'Aujourd’hui',
    priority: 'Haute',
    budget: '1 200 - 1 800 €',
    nextAction: 'Qualifier le besoin et proposer un créneau découverte.',
  },
  {
    id: 'lead-002',
    name: 'Refonte locale SEO',
    email: 'lead-002@matostudio.local',
    phone: '+33 6 00 00 00 02',
    projectType: 'Refonte et SEO local',
    status: 'Contacté',
    date: 'Hier',
    priority: 'Moyenne',
    budget: '1 800 - 2 500 €',
    nextAction: 'Envoyer une synthèse avec périmètre et options SEO.',
  },
  {
    id: 'lead-003',
    name: 'Indépendant service',
    email: 'lead-003@matostudio.local',
    phone: '+33 6 00 00 00 03',
    projectType: 'Landing page conversion',
    status: 'À qualifier',
    date: 'Cette semaine',
    priority: 'Normale',
    budget: '750 - 1 200 €',
    nextAction: 'Clarifier l’offre, les preuves client et le formulaire.',
  },
  {
    id: 'lead-004',
    name: 'Commerce local',
    email: 'lead-004@matostudio.local',
    phone: '+33 6 00 00 00 04',
    projectType: 'Site vitrine + formulaire devis',
    status: 'À relancer',
    date: 'Il y a 4 jours',
    priority: 'Haute',
    budget: '1 500 - 2 200 €',
    nextAction: 'Relancer avec deux packs simples et un délai de livraison clair.',
  },
] as const

export const dashboardQuotes = [
  {
    id: 'quote-001',
    name: 'Site premium 5 pages',
    client: 'Client vitrine premium',
    estimate: '1 290 €',
    deadline: 'Standard',
    status: 'Nouveau devis',
    priority: 'Haute',
    source: 'Formulaire devis',
    nextAction: 'Transformer en proposition PDF avec acompte.',
  },
  {
    id: 'quote-002',
    name: 'Refonte complète',
    client: 'Refonte locale SEO',
    estimate: '2 450 €',
    deadline: 'Rapide',
    status: 'À relancer',
    priority: 'Moyenne',
    source: 'Contact direct',
    nextAction: 'Relancer avec planning, livrables et options SEO.',
  },
  {
    id: 'quote-003',
    name: 'Tunnel conversion',
    client: 'Indépendant service',
    estimate: '980 €',
    deadline: 'Flexible',
    status: 'En discussion',
    priority: 'Normale',
    source: 'Audit rapide',
    nextAction: 'Valider les sections, CTA et preuves de réassurance.',
  },
  {
    id: 'quote-004',
    name: 'Site vitrine + devis',
    client: 'Commerce local',
    estimate: '1 750 €',
    deadline: 'Standard',
    status: 'À relancer',
    priority: 'Haute',
    source: 'Recommandation',
    nextAction: 'Proposer une option paiement plus tard sans complexifier le MVP.',
  },
] as const

export const dashboardTasks = [
  'Qualifier les nouvelles demandes entrantes',
  'Transformer les estimations en devis formels',
  'Suivre les relances commerciales à 48h',
  'Préparer la persistance PostgreSQL avant données réelles',
] as const

export const dashboardPipeline = [
  {
    label: 'Nouveaux leads',
    value: 24,
    detail: 'Entrées formulaire et contacts directs',
  },
  {
    label: 'Leads qualifiés',
    value: 14,
    detail: 'Besoin, budget et délai compris',
  },
  {
    label: 'Devis envoyés',
    value: 8,
    detail: 'Propositions prêtes à suivre',
  },
  {
    label: 'Clients gagnés',
    value: 3,
    detail: 'Missions prêtes à planifier',
  },
] as const

export const dashboardRevenue = [
  {
    label: 'Pipeline total',
    value: '18 450 €',
    detail: 'Montant potentiel estimé',
  },
  {
    label: 'Devis chauds',
    value: '6 490 €',
    detail: 'Priorité haute ou relance proche',
  },
  {
    label: 'Panier moyen',
    value: '1 537 €',
    detail: 'Basé sur les estimations actives',
  },
] as const

export const dashboardRoadmap = [
  {
    step: 'Phase 1',
    title: 'Dashboard statique premium',
    status: 'En cours',
    detail: 'UI homogène, navigation claire, filtres front et vues métier.',
  },
  {
    step: 'Phase 2',
    title: 'Connexion API MatoStudio',
    status: 'Prochaine étape',
    detail: 'Brancher contacts, devis, statuts et historique réel.',
  },
  {
    step: 'Phase 3',
    title: 'Authentification admin',
    status: 'À planifier',
    detail: 'Protéger les routes dashboard et gérer la session administrateur.',
  },
] as const

export const dashboardSettings = [
  {
    title: 'Notifications email',
    description: 'Centraliser les alertes contact et devis dans la boîte MatoStudio.',
    status: 'À connecter',
    action: 'Préparer SMTP / provider email',
  },
  {
    title: 'Base PostgreSQL',
    description: 'Stocker contacts, devis, statuts, priorités et historique de suivi.',
    status: 'Prochaine phase',
    action: 'Créer le schéma API',
  },
  {
    title: 'Authentification admin',
    description: 'Protéger toutes les routes dashboard avec une session admin sécurisée.',
    status: 'À planifier',
    action: 'Définir stratégie auth',
  },
  {
    title: 'Export commercial',
    description: 'Préparer l’export CSV/PDF des demandes et devis pour le suivi client.',
    status: 'Backlog',
    action: 'Ajouter après persistance',
  },
] as const
