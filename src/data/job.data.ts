import { ROUTES } from '@/lib/constants/routes'

export const jobPageContent = {
  hero: {
    eyebrow: 'Portfolio emploi',
    title: 'Développeur web & web mobile — profil orienté projet, qualité et progression',
    description:
      'Je recherche une opportunité pour contribuer à des projets web sérieux, apprendre vite au contact d une équipe et apporter une méthode de travail propre : Git, documentation, composants réutilisables, tests de base et amélioration continue.',
    primaryCta: {
      label: 'Me contacter',
      href: 'mailto:matomina.nguayila@gmail.com?subject=Opportunite%20developpeur%20web',
    },
    secondaryCta: {
      label: 'Voir mon GitHub',
      href: 'https://github.com/Matomina',
    },
    stats: [
      { value: 'React', label: 'front-end moderne' },
      { value: 'Python', label: 'back-end Flask / FastAPI' },
      { value: 'Git', label: 'workflow pro' },
    ],
  },
  profile: {
    eyebrow: 'Profil',
    title: 'Un développeur en construction professionnelle, avec une vraie rigueur de projet',
    description:
      'Mon objectif est de livrer des interfaces utiles, maintenables et bien structurées. Je travaille avec une logique de preuves : branches dédiées, commits propres, CI, documentation, audit et amélioration progressive.',
    highlights: [
      {
        title: 'Front-end structuré',
        description: 'React, TypeScript, composants, responsive design et intégration soignée.',
      },
      {
        title: 'Back-end applicatif',
        description: 'Flask, FastAPI, logique métier, routes, base de données et API simples.',
      },
      {
        title: 'Méthode professionnelle',
        description: 'GitHub, branches, PR, vérifications, README, roadmap et suivi de qualité.',
      },
    ],
  },
  skills: {
    eyebrow: 'Compétences',
    title: 'Une base full stack orientée web et applications métier',
    groups: [
      {
        title: 'Front-end',
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vite', 'Responsive design'],
      },
      {
        title: 'Back-end',
        items: ['Python', 'Flask', 'FastAPI', 'SQL', 'PostgreSQL', 'API REST', 'Authentification'],
      },
      {
        title: 'Qualité projet',
        items: ['Git', 'GitHub', 'Pull Requests', 'CI', 'ESLint', 'Prettier', 'Documentation'],
      },
      {
        title: 'Produit & UX',
        items: ['Arborescence', 'Design system', 'Accessibilité', 'SEO de base', 'Parcours utilisateur'],
      },
    ],
  },
  stack: {
    eyebrow: 'Stack',
    title: 'Technologies utilisées sur mes projets récents',
    items: [
      'React',
      'TypeScript',
      'Vite',
      'Python',
      'Flask',
      'FastAPI',
      'PostgreSQL',
      'GitHub Actions',
      'Vercel',
      'Render',
    ],
  },
  projects: {
    eyebrow: 'Projets GitHub',
    title: 'Des projets concrets pour démontrer la progression et la capacité de livraison',
    items: [
      {
        title: 'MangaBook',
        type: 'Application web full stack',
        description:
          'Projet applicatif avec authentification, catalogue, favoris, historique, forum et logique d administration.',
        stack: ['Flask', 'PostgreSQL', 'Jinja2', 'SCSS'],
        links: {
          github: 'https://github.com/Matomina/flask-manga-book',
          demo: 'https://manga-book-style.netlify.app/',
        },
      },
      {
        title: 'AS Transports',
        type: 'Site vitrine client',
        description:
          'Site professionnel orienté conversion avec parcours devis, réassurance, formulaire et déploiement front/back.',
        stack: ['React', 'Vite', 'Render', 'SEO local'],
        links: {
          github: 'https://github.com/Matomina',
          demo: '',
        },
      },
      {
        title: 'MatoStudio Portfolio V2',
        type: 'Portfolio professionnel multi-parcours',
        description:
          'Socle React + TypeScript avec routing, design system, deux parcours distincts, CI et documentation projet.',
        stack: ['React', 'TypeScript', 'Design system', 'CI'],
        links: {
          github: 'https://github.com/Matomina/matostudio-portfolio-v2',
          demo: ROUTES.home,
        },
      },
    ],
  },
  timeline: {
    eyebrow: 'Parcours',
    title: 'Une progression structurée vers un niveau professionnel',
    steps: [
      {
        title: 'Formation développeur web et web mobile',
        description:
          'Préparation du titre professionnel avec projets, dossier, maquettes, architecture et démonstrations techniques.',
      },
      {
        title: 'Projets personnels et clients',
        description:
          'Construction de projets concrets pour pratiquer la livraison, le versioning, la documentation et la qualité.',
      },
      {
        title: 'Montée en compétence full stack',
        description:
          'Renforcement progressif sur React, TypeScript, Python, API, base de données, déploiement et CI.',
      },
    ],
  },
  softSkills: {
    eyebrow: 'Savoir-être',
    title: 'Une posture sérieuse, fiable et orientée amélioration',
    items: [
      'Communication claire sur l état d avancement',
      'Capacité à demander, vérifier et documenter',
      'Rigueur dans les branches, commits et validations',
      'Volonté d apprendre vite et de progresser durablement',
    ],
  },
  contact: {
    eyebrow: 'Contact recruteur',
    title: 'Discutons d une opportunité ou d une immersion professionnelle',
    description:
      'Je peux présenter mes projets, expliquer mes choix techniques et montrer ma méthode de travail sur GitHub.',
    email: 'matomina.nguayila@gmail.com',
    github: 'https://github.com/Matomina',
    linkedin: 'https://www.linkedin.com/',
    cv: '#',
    primaryCta: {
      label: 'Me contacter',
      href: 'mailto:matomina.nguayila@gmail.com?subject=Contact%20recrutement%20developpeur%20web',
    },
    secondaryCta: {
      label: 'Voir le parcours freelance',
      href: ROUTES.freelance,
    },
  },
} as const
