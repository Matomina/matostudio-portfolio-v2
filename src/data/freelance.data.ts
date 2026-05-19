import { ROUTES } from '@/lib/constants/routes'

export const freelancePageContent = {
  hero: {
    eyebrow: 'Portfolio freelance',
    title: 'MatoStudio — Sites web premium pour independants, artisans et petites entreprises',
    description:
      'Je conçois des sites modernes, rapides et credibles pour aider les professionnels a presenter leur activite, rassurer leurs clients et transformer plus de visiteurs en demandes de contact.',
    primaryCta: {
      label: 'Demander un devis',
      href: 'mailto:matomina.nguayila@gmail.com?subject=Demande%20de%20devis%20MatoStudio',
    },
    secondaryCta: {
      label: 'Voir les services',
      href: '#services',
    },
    stats: [
      { value: '100%', label: 'responsive' },
      { value: 'SEO', label: 'base incluse' },
      { value: 'UX', label: 'orientee conversion' },
    ],
  },
  problem: {
    eyebrow: 'Le vrai probleme',
    title: 'Un site ne doit pas seulement etre beau. Il doit inspirer confiance.',
    description:
      'Beaucoup de professionnels ont une offre solide, mais leur presence en ligne ne transmet pas encore le bon niveau de qualite. MatoStudio transforme cette base en vitrine claire, premium et exploitable.',
    pains: [
      {
        title: 'Image peu professionnelle',
        description:
          'Un design date ou confus peut faire perdre la confiance avant meme le premier contact.',
      },
      {
        title: 'Message pas assez clair',
        description:
          'Le visiteur doit comprendre rapidement votre activite, votre valeur et la prochaine action.',
      },
      {
        title: 'Manque de conversion',
        description:
          'Un bon site doit guider vers un appel, un devis, une reservation ou une prise de contact.',
      },
    ],
  },
  services: {
    eyebrow: 'Services',
    title: 'Des prestations web claires, adaptees aux besoins reels',
    description:
      'Chaque mission est pensee pour livrer une solution propre, maintenable et coherente avec les objectifs du client.',
    items: [
      {
        title: 'Site vitrine premium',
        description:
          'Creation ou refonte de site professionnel pour presenter votre activite avec credibilite.',
        deliverables: ['Design responsive', 'Pages essentielles', 'Structure SEO de base'],
      },
      {
        title: 'Landing page conversion',
        description:
          'Page ciblee pour une offre, une campagne, un service ou une demande de devis.',
        deliverables: ['Hero impactant', 'Arguments de vente', 'CTA visibles'],
      },
      {
        title: 'Refonte UX et design',
        description:
          'Amelioration d un site existant pour gagner en clarte, coherence et professionnalisme.',
        deliverables: ['Audit rapide', 'Structure amelioree', 'Interface modernisee'],
      },
      {
        title: 'Accompagnement technique',
        description:
          'Conseil, corrections, integration et stabilisation pour garder un site fiable dans le temps.',
        deliverables: ['Correctifs cibles', 'Optimisation front', 'Documentation claire'],
      },
    ],
  },
  offers: {
    eyebrow: 'Offres',
    title: 'Des formules simples pour cadrer le projet des le depart',
    description:
      'Les montants sont indicatifs. Chaque devis est ajuste selon le contenu, les fonctionnalites, le delai et le niveau de personnalisation.',
    plans: [
      {
        name: 'Essentiel',
        price: 'A partir de 690 €',
        description: 'Pour lancer une presence professionnelle propre et efficace.',
        features: [
          '1 a 3 pages',
          'Design responsive',
          'Structure claire',
          'Formulaire ou contact direct',
        ],
        highlighted: false,
      },
      {
        name: 'Premium',
        price: 'A partir de 1 290 €',
        description: 'Pour une vitrine plus complete, plus persuasive et plus differenciante.',
        features: [
          '4 a 6 pages',
          'Parcours conversion',
          'Sections de reassurance',
          'SEO technique de base',
        ],
        highlighted: true,
      },
      {
        name: 'Sur mesure',
        price: 'Sur devis',
        description:
          'Pour un besoin specifique, une refonte avancee ou une integration particuliere.',
        features: [
          'Audit',
          'Architecture adaptee',
          'Fonctionnalites ciblees',
          'Accompagnement evolutif',
        ],
        highlighted: false,
      },
    ],
  },
  quoteSimulator: {
    eyebrow: 'Simulation de devis',
    title: 'Calculez une premiere estimation de votre projet web',
    description:
      'Choisissez une base, ajoutez les options utiles et obtenez une estimation immediate. Le devis final reste ajuste apres cadrage precis du besoin.',
    base: [
      {
        name: 'Essentiel',
        price: '690 €',
        amount: 690,
        description: 'Site 1 a 3 pages pour poser une presence web propre et credible.',
      },
      {
        name: 'Premium',
        price: '1 290 €',
        amount: 1290,
        description: 'Site 4 a 6 pages avec parcours de conversion et sections de reassurance.',
      },
      {
        name: 'Sur mesure',
        price: 'Sur devis',
        amount: null,
        description: 'Projet avance, refonte complete, besoin specifique ou integration particuliere.',
      },
    ],
    options: [
      { label: 'Page supplementaire', price: '+150 €', amount: 150 },
      { label: 'Redaction ou optimisation des textes', price: '+280 €', amount: 280 },
      { label: 'SEO local avance', price: '+450 €', amount: 450 },
      { label: 'Formulaire avance ou logique devis', price: '+480 €', amount: 480 },
      { label: 'Animations premium et micro-interactions', price: '+320 €', amount: 320 },
      { label: 'Maintenance premier mois', price: '+49 €', amount: 49 },
    ],
    result: {
      label: 'Estimation immediate',
      value: '690 € — 2 500 €+',
      note: 'Estimation indicative hors hebergement, nom de domaine et contenus non fournis. Le montant final est valide apres cadrage.',
      customNote:
        'Un projet sur mesure doit etre cadre avant estimation : fonctionnalites, nombre de pages, integrations, delai et niveau de design attendu.',
    },
  },
  process: {
    eyebrow: 'Process',
    title: 'Une methode lisible pour avancer sans confusion',
    steps: [
      {
        title: '01 — Cadrage',
        description:
          'On clarifie l objectif, la cible, les contenus, les contraintes et la priorite business.',
      },
      {
        title: '02 — Structure',
        description:
          'Je prepare l arborescence, le parcours utilisateur et les sections importantes.',
      },
      {
        title: '03 — Design et integration',
        description:
          'Je construis une interface responsive, coherente avec votre image et votre offre.',
      },
      {
        title: '04 — Verification et livraison',
        description:
          'On verifie le rendu, les performances, les liens, le responsive et les elements de contact.',
      },
    ],
  },
  projects: {
    eyebrow: 'References',
    title: 'Des projets concrets pour montrer la qualite d execution',
    items: [
      {
        title: 'AS Transports',
        category: 'Site vitrine service local',
        description:
          'Parcours oriente devis, reassurance, formulaire et presentation claire des prestations.',
        stack: ['React', 'Vite', 'SEO local', 'Responsive'],
      },
      {
        title: 'LAVEOO',
        category: 'Site vitrine premium',
        description:
          'Interface moderne pour renforcer la credibilite et la perception professionnelle.',
        stack: ['React', 'Design system', 'Conversion', 'Performance'],
      },
      {
        title: 'MangaBook',
        category: 'Application web full stack',
        description:
          'Projet applicatif complet pour demontrer architecture, logique metier et experience utilisateur.',
        stack: ['Flask', 'PostgreSQL', 'Auth', 'Back-office'],
      },
    ],
  },
  reassurance: {
    eyebrow: 'Reassurance',
    title: 'Un accompagnement professionnel, pas seulement une livraison de fichiers',
    items: [
      'Communication claire et avancee etape par etape',
      'Code versionne sur Git et organisation professionnelle',
      'Verification responsive avant livraison',
      'Documentation et passation selon le besoin',
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions frequentes avant de demarrer',
    items: [
      {
        question: 'Combien de temps prend un site vitrine ?',
        answer:
          'Un site simple peut etre livre en quelques semaines selon la disponibilite des contenus et les validations.',
      },
      {
        question: 'Est-ce que le site sera responsive ?',
        answer: 'Oui. Le responsive mobile, tablette et desktop fait partie de la base de travail.',
      },
      {
        question: 'Puis-je demander une refonte d un site existant ?',
        answer:
          'Oui. On peut repartir d un site existant, garder ce qui fonctionne et reconstruire ce qui bloque.',
      },
      {
        question: 'Le SEO est-il inclus ?',
        answer:
          'La structure SEO de base est prevue. Un travail SEO avance peut etre ajoute selon l objectif.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Vous avez un projet ? On peut cadrer la prochaine etape.',
    description:
      'Envoyez-moi votre besoin, votre activite, votre delai ideal et les pages que vous imaginez. Je vous repondrai avec une premiere orientation claire.',
    email: 'matomina.nguayila@gmail.com',
    primaryCta: {
      label: 'Demander un devis',
      href: 'mailto:matomina.nguayila@gmail.com?subject=Projet%20web%20MatoStudio',
    },
    secondaryCta: {
      label: 'Voir le profil emploi',
      href: ROUTES.job,
    },
  },
} as const
