import type { Language, TranslationCopy } from '@/types/language.types'

export const defaultLanguage: Language = 'fr'

export const translations: Record<Language, TranslationCopy> = {
  fr: {
    languageName: 'Français',
    navigation: {
      home: 'Accueil',
      quote: 'Devis',
      freelance: 'Freelance',
      job: 'Emploi',
    },
    header: {
      homeAria: 'Retour à l’accueil',
      navAria: 'Navigation principale',
      mobileNavAria: 'Navigation mobile',
      menuOpen: 'Ouvrir le menu',
      menuClose: 'Fermer le menu',
      contact: 'Contact',
      themeToLight: 'Activer le mode clair',
      themeToDark: 'Activer le mode sombre',
      languageToggle: 'Passer le site en anglais',
    },
    footer: {
      brandAria: 'Retour à l’accueil MatoStudio Agency',
      description:
        'Une agence de développement web premium pour créer des expériences digitales rapides, élégantes et cohérentes avec votre image.',
      linksAria: 'Liens de pied de page MatoStudio Agency',
      socialsAria: 'Réseaux sociaux MatoStudio Agency',
      copyright: 'Tous droits réservés.',
      links: {
        contact: 'Contact',
        quote: 'Devis',
        payment: 'Paiement',
        legal: 'Mentions légales',
        privacy: 'Politique de confidentialité',
      },
    },
    common: {
      page: 'page',
      pages: 'pages',
      included: 'incluse',
      base: 'Base',
      none: 'Aucune option',
    },
    home: {
      eyebrow: 'MatoStudio Agency',
      title: 'Une présence web premium, claire et pensée pour convertir.',
      description:
        'MatoStudio Agency conçoit des sites modernes, rapides et cohérents avec l’image de marque de chaque projet. Une base professionnelle, deux parcours lisibles : client et recruteur.',
      clientCta: 'Je suis un client',
      recruiterCta: 'Je suis recruteur',
      trustItems: [
        'Sites premium',
        'React et TypeScript',
        'UX mobile-first',
        'Livraison professionnelle',
      ],
      pathsEyebrow: 'Deux accès, une même exigence',
      pathsTitle: 'Choisis le parcours qui correspond à ton besoin.',
      pathsDescription:
        'Le site reste cohérent visuellement, mais chaque entrée garde un message adapté à son audience.',
      paths: [
        {
          title: 'Projet client et freelance',
          eyebrow: 'Portfolio freelance',
          description:
            'Un parcours pensé pour présenter les offres MatoStudio Agency, rassurer les clients et générer des demandes de projet qualifiées.',
          hrefId: 'freelance',
          ctaLabel: 'Voir l’offre freelance',
        },
        {
          title: 'Profil développeur et emploi',
          eyebrow: 'Portfolio emploi',
          description:
            'Un espace plus sobre pour valoriser les compétences, les projets techniques et le sérieux professionnel auprès des recruteurs.',
          hrefId: 'job',
          ctaLabel: 'Voir le profil emploi',
        },
      ],
    },
    contactPage: {
      heroEyebrow: 'Contact MatoStudio Agency',
      heroTitle: 'Parlons de votre prochain site premium.',
      heroDescription:
        'Décrivez votre besoin en quelques minutes. L’objectif est simple : comprendre votre activité, cadrer la bonne approche et préparer un devis clair, sans pression inutile.',
      estimateCta: 'Estimer mon projet',
      directCta: 'Écrire directement',
      formEyebrow: 'Brief projet',
      formTitle: 'Un formulaire clair pour qualifier la demande.',
      formDescription:
        'Les informations restent côté interface pour l’instant. Vous pouvez aussi envoyer votre demande directement par e-mail.',
      fields: {
        name: 'Nom',
        email: 'Email',
        phone: 'Téléphone optionnel',
        projectType: 'Type de projet',
        budget: 'Budget estimé',
        timeline: 'Délai souhaité',
        message: 'Message',
        select: 'Sélectionner',
        placeholder:
          'Présentez votre activité, les pages imaginées, les objectifs et les contraintes importantes.',
      },
      options: {
        projectTypes: {
          'site-vitrine': 'Site vitrine essentiel',
          'site-premium': 'Site premium',
          'landing-page': 'Landing page',
          refonte: 'Refonte',
          'sur-mesure': 'Projet sur mesure',
        },
        budgets: {
          'moins-1000': 'Moins de 1 000 €',
          '1000-2000': '1 000 € à 2 000 €',
          '2000-4000': '2 000 € à 4 000 €',
          '4000-plus': '4 000 € et plus',
          'a-definir': 'À définir ensemble',
        },
        timelines: {
          flexible: 'Flexible',
          '1-mois': 'Dans le mois',
          '2-3-mois': 'Dans 2 à 3 mois',
          urgent: 'Besoin prioritaire',
        },
      },
      submit: 'Préparer ma demande',
      initialStatus: 'Aucun paiement ni donnée sensible ne sont demandés ici.',
      preparedStatus:
        'Votre demande est prête côté interface. Pour l’envoi réel, utilisez le contact direct.',
      sideTitle: 'Un échange cadré, professionnel et rassurant.',
      sideDescription:
        'MatoStudio Agency privilégie un premier cadrage clair avant tout engagement : périmètre, contenus, délais, priorités et niveau de finition.',
      reassuranceEyebrow: 'Réassurance',
      reassuranceTitle: 'Vous savez ce qui se passe après l’envoi.',
      reassuranceItems: [
        {
          title: 'Réponse claire',
          description:
            'Un premier retour lisible pour comprendre la faisabilité et la bonne direction.',
        },
        {
          title: 'Cadrage du besoin',
          description:
            'Objectifs, pages, contenus, délais et priorités sont clarifiés avant le devis.',
        },
        {
          title: 'Devis personnalisé',
          description:
            'Chaque estimation est ajustée selon le niveau de finition et les contraintes.',
        },
        {
          title: 'Accompagnement professionnel',
          description:
            'Méthode, communication et vérifications sont intégrées au déroulé du projet.',
        },
      ],
    },
    quotePage: {
      heroEyebrow: 'Devis guidé',
      heroTitle: 'Simulez une première enveloppe pour votre projet web.',
      heroDescription:
        'Choisissez le type de projet, le volume de pages, les options et le délai souhaité. Le résultat donne une base de discussion avant le devis final.',
      proofs: [
        'Estimation automatique côté front',
        'Prix indicatifs et ajustables',
        'Options visibles avant le cadrage',
      ],
      nextEyebrow: 'Prochaine étape',
      nextTitle: 'Transformons l’estimation en devis exploitable.',
      nextDescription:
        'Après simulation, le cadrage permet de valider les pages, contenus, options, contraintes et éventuel paiement futur.',
      contactCta: 'Contacter l’agence',
      paymentCta: 'Voir le paiement prévu',
    },
    paymentPage: {
      heroEyebrow: 'Paiement préparatoire',
      heroTitle: 'Une base visuelle prête pour le futur paiement sécurisé.',
      heroDescription:
        'Le paiement en ligne sera activé uniquement après validation du devis. Pour l’instant, cette page prépare l’expérience et rassure sans intégrer Stripe, PayPal, secret ou API.',
      quoteCta: 'Demander un devis',
      simulateCta: 'Simuler un budget',
      methodsEyebrow: 'Moyens prévus',
      methodsTitle: 'Plusieurs options, activées seulement après accord.',
      methodsDescription:
        'La future intégration restera séparée de cette préparation visuelle et nécessitera une configuration sécurisée dédiée.',
      securityEyebrow: 'Sécurité',
      securityTitle: 'Pas de paiement réel tant que le devis n’est pas validé.',
      securityDescription:
        'Cette étape ne contient aucune clé secrète, aucun appel backend et aucune logique de transaction. Elle sert de socle design pour la prochaine phase.',
      methods: [
        {
          title: 'Stripe',
          description:
            'Carte bancaire et parcours de règlement sécurisé lors d’une future activation.',
          status: 'Prévu',
        },
        {
          title: 'PayPal',
          description:
            'Option complémentaire pour les clients qui préfèrent un portefeuille numérique.',
          status: 'Prévu',
        },
        {
          title: 'Virement',
          description: 'Solution simple pour acompte, solde ou projet validé par devis signé.',
          status: 'Disponible sur devis',
        },
      ],
      reassuranceItems: [
        {
          title: 'Validation avant paiement',
          description:
            'Le règlement intervient uniquement après cadrage, devis et accord du client.',
        },
        {
          title: 'Aucune clé intégrée',
          description:
            'Cette page prépare l’expérience visuelle sans secret, API ou logique backend.',
        },
        {
          title: 'Parcours sécurisé',
          description: 'Les moyens de paiement seront activés avec des prestataires reconnus.',
        },
      ],
    },
    freelancePage: {
      heroEyebrow: 'Portfolio freelance',
      heroTitle:
        'MatoStudio — Sites web premium pour indépendants, artisans et petites entreprises',
      heroDescription:
        'Je conçois des sites modernes, rapides et crédibles pour aider les professionnels à présenter leur activité, rassurer leurs clients et transformer plus de visiteurs en demandes de contact.',
      primaryCta: 'Demander un devis',
      secondaryCta: 'Voir les services',
    },
    jobPage: {
      heroEyebrow: 'Portfolio emploi',
      heroTitle: 'Développeur web & web mobile — profil orienté projet, qualité et progression',
      heroDescription:
        'Je recherche une opportunité pour contribuer à des projets web sérieux, apprendre vite au contact d’une équipe et apporter une méthode de travail propre.',
      primaryCta: 'Me contacter',
      secondaryCta: 'Voir mon GitHub',
    },
    quoteSimulator: {
      steps: ['Projet', 'Pages', 'Options', 'Délai', 'Résumé'],
      eyebrow: 'Simulateur guidé',
      title: 'Construisez une première estimation en quelques choix.',
      estimate: 'Estimation',
      back: 'Retour',
      continue: 'Continuer',
      requestQuote: 'Demander ce devis',
      stepsAria: 'Étapes du simulateur',
      pageCount: 'Nombre de pages estimé',
      quickChoicesAria: 'Choix rapides du nombre de pages',
      pageContext:
        'La base sélectionnée inclut {includedPages}. Les pages supplémentaires sont estimées à {extraPagePrice} chacune.',
      summaryEyebrow: 'Résumé indicatif',
      summaryNote:
        'Cette estimation donne une première enveloppe. Le devis final est validé après cadrage du besoin, analyse des contenus, contraintes techniques et planning réel.',
      baseChosen: 'Base choisie',
      pagesLabel: 'Pages',
      supplement: 'supplément',
      selectedOptions: 'Options sélectionnées',
      desiredDeadline: 'Délai souhaité',
      adjustment: 'ajustement',
      projectTypes: {
        'essential-showcase': {
          label: 'Site vitrine essentiel',
          description: 'Une présence professionnelle claire, rapide et crédible.',
        },
        'premium-showcase': {
          label: 'Site premium',
          description: 'Une vitrine plus persuasive avec un parcours orienté conversion.',
        },
        'landing-page': {
          label: 'Landing page',
          description: 'Une page ciblée pour une offre, une campagne ou une demande de devis.',
        },
        redesign: {
          label: 'Refonte',
          description: 'Repenser un site existant pour améliorer clarté, image et conversion.',
        },
        'custom-project': {
          label: 'Projet sur mesure',
          description:
            'Un besoin spécifique avec structure, fonctionnalités ou accompagnement dédié.',
        },
      },
      options: {
        'local-seo': {
          label: 'SEO local',
          description: 'Structure, contenus clés et signaux locaux pour une meilleure visibilité.',
        },
        'content-writing': {
          label: 'Rédaction de contenu',
          description: 'Aide à la formulation des sections principales et messages de conversion.',
        },
        'advanced-form': {
          label: 'Formulaire avancé',
          description: 'Champs qualifiants, parcours guidé ou logique conditionnelle côté front.',
        },
        'premium-animations': {
          label: 'Animations premium',
          description: 'Micro-interactions et transitions élégantes, sans nuire à la lisibilité.',
        },
        maintenance: {
          label: 'Maintenance',
          description:
            'Préparation d’un suivi après livraison pour corrections et petites évolutions.',
        },
        'future-payment': {
          label: 'Intégration paiement future',
          description: 'Préparation visuelle et technique pour une future intégration sécurisée.',
        },
      },
      deadlines: {
        flexible: {
          label: 'Flexible',
          description: 'Planning confortable, idéal pour affiner le contenu.',
        },
        standard: {
          label: 'Standard',
          description: 'Cadence équilibrée après réception des contenus.',
        },
        priority: {
          label: 'Prioritaire',
          description: 'Projet à organiser rapidement avec validations rapprochées.',
        },
        express: {
          label: 'Express',
          description: 'Délai très court, à confirmer selon la disponibilité.',
        },
      },
    },
  },
  en: {
    languageName: 'English',
    navigation: {
      home: 'Home',
      quote: 'Quote',
      freelance: 'Agency',
      job: 'Career',
    },
    header: {
      homeAria: 'Back to home',
      navAria: 'Primary navigation',
      mobileNavAria: 'Mobile navigation',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      contact: 'Contact',
      themeToLight: 'Enable light mode',
      themeToDark: 'Enable dark mode',
      languageToggle: 'Switch the website to French',
    },
    footer: {
      brandAria: 'Back to MatoStudio Agency home',
      description:
        'A premium web development agency crafting fast, elegant digital experiences aligned with your brand.',
      linksAria: 'MatoStudio Agency footer links',
      socialsAria: 'MatoStudio Agency social networks',
      copyright: 'All rights reserved.',
      links: {
        contact: 'Contact',
        quote: 'Quote',
        payment: 'Payment',
        legal: 'Legal notice',
        privacy: 'Privacy policy',
      },
    },
    common: {
      page: 'page',
      pages: 'pages',
      included: 'included',
      base: 'Base',
      none: 'No option',
    },
    home: {
      eyebrow: 'MatoStudio Agency',
      title: 'A premium web presence, clear and designed to convert.',
      description:
        'MatoStudio Agency designs modern, fast websites aligned with each project’s brand. One professional foundation, two clear paths: client and recruiter.',
      clientCta: 'I am a client',
      recruiterCta: 'I am a recruiter',
      trustItems: [
        'Premium websites',
        'React and TypeScript',
        'Mobile-first UX',
        'Professional delivery',
      ],
      pathsEyebrow: 'Two paths, one standard',
      pathsTitle: 'Choose the path that matches your need.',
      pathsDescription:
        'The website stays visually consistent while each entry keeps a message tailored to its audience.',
      paths: [
        {
          title: 'Client and agency projects',
          eyebrow: 'Agency portfolio',
          description:
            'A path designed to present MatoStudio Agency offers, reassure clients and generate qualified project requests.',
          hrefId: 'freelance',
          ctaLabel: 'View agency offer',
        },
        {
          title: 'Developer and career profile',
          eyebrow: 'Career portfolio',
          description:
            'A quieter space to highlight skills, technical projects and professional reliability for recruiters.',
          hrefId: 'job',
          ctaLabel: 'View career profile',
        },
      ],
    },
    contactPage: {
      heroEyebrow: 'Contact MatoStudio Agency',
      heroTitle: 'Let’s talk about your next premium website.',
      heroDescription:
        'Describe your need in a few minutes. The goal is simple: understand your activity, frame the right approach and prepare a clear quote without unnecessary pressure.',
      estimateCta: 'Estimate my project',
      directCta: 'Email directly',
      formEyebrow: 'Project brief',
      formTitle: 'A clear form to qualify the request.',
      formDescription:
        'The information stays front-end only for now. You can also send your request directly by email.',
      fields: {
        name: 'Name',
        email: 'Email',
        phone: 'Optional phone',
        projectType: 'Project type',
        budget: 'Estimated budget',
        timeline: 'Desired timeline',
        message: 'Message',
        select: 'Select',
        placeholder: 'Introduce your activity, imagined pages, goals and important constraints.',
      },
      options: {
        projectTypes: {
          'site-vitrine': 'Essential showcase website',
          'site-premium': 'Premium website',
          'landing-page': 'Landing page',
          refonte: 'Redesign',
          'sur-mesure': 'Custom project',
        },
        budgets: {
          'moins-1000': 'Less than €1,000',
          '1000-2000': '€1,000 to €2,000',
          '2000-4000': '€2,000 to €4,000',
          '4000-plus': '€4,000 and more',
          'a-definir': 'To define together',
        },
        timelines: {
          flexible: 'Flexible',
          '1-mois': 'Within a month',
          '2-3-mois': 'Within 2 to 3 months',
          urgent: 'Priority need',
        },
      },
      submit: 'Prepare my request',
      initialStatus: 'No payment or sensitive data is requested here.',
      preparedStatus:
        'Your request is ready in the interface. For real sending, use direct contact.',
      sideTitle: 'A framed, professional and reassuring conversation.',
      sideDescription:
        'MatoStudio Agency favors a clear first framing before any commitment: scope, content, deadlines, priorities and level of finish.',
      reassuranceEyebrow: 'Reassurance',
      reassuranceTitle: 'You know what happens after sending.',
      reassuranceItems: [
        {
          title: 'Clear reply',
          description: 'A readable first answer to understand feasibility and the right direction.',
        },
        {
          title: 'Need framing',
          description:
            'Goals, pages, content, timeline and priorities are clarified before quoting.',
        },
        {
          title: 'Personalized quote',
          description: 'Each estimate is adjusted to the level of finish and project constraints.',
        },
        {
          title: 'Professional support',
          description: 'Method, communication and checks are built into the project flow.',
        },
      ],
    },
    quotePage: {
      heroEyebrow: 'Guided quote',
      heroTitle: 'Simulate a first budget range for your web project.',
      heroDescription:
        'Choose the project type, page volume, options and desired timeline. The result gives a discussion base before the final quote.',
      proofs: [
        'Automatic front-end estimate',
        'Indicative and adjustable pricing',
        'Visible options before scoping',
      ],
      nextEyebrow: 'Next step',
      nextTitle: 'Turn the estimate into a usable quote.',
      nextDescription:
        'After the simulation, scoping validates pages, content, options, constraints and any future payment flow.',
      contactCta: 'Contact the agency',
      paymentCta: 'View planned payment',
    },
    paymentPage: {
      heroEyebrow: 'Payment preview',
      heroTitle: 'A visual foundation ready for future secure payment.',
      heroDescription:
        'Online payment will only be activated after quote approval. For now, this page prepares the experience and reassures without integrating Stripe, PayPal, secrets or APIs.',
      quoteCta: 'Request a quote',
      simulateCta: 'Simulate a budget',
      methodsEyebrow: 'Planned methods',
      methodsTitle: 'Several options, activated only after agreement.',
      methodsDescription:
        'The future integration will remain separate from this visual preparation and require a dedicated secure configuration.',
      securityEyebrow: 'Security',
      securityTitle: 'No real payment until the quote is approved.',
      securityDescription:
        'This step contains no secret key, backend call or transaction logic. It acts as a design base for the next phase.',
      methods: [
        {
          title: 'Stripe',
          description:
            'Card payment and secure checkout flow when a future activation is approved.',
          status: 'Planned',
        },
        {
          title: 'PayPal',
          description: 'A complementary option for clients who prefer a digital wallet.',
          status: 'Planned',
        },
        {
          title: 'Bank transfer',
          description: 'A simple option for deposit, balance or a quote-approved project.',
          status: 'Available by quote',
        },
      ],
      reassuranceItems: [
        {
          title: 'Approval before payment',
          description: 'Payment happens only after framing, quote and client agreement.',
        },
        {
          title: 'No embedded keys',
          description:
            'This page prepares the visual experience without secrets, APIs or backend logic.',
        },
        {
          title: 'Secure flow',
          description: 'Payment methods will be activated with recognized providers.',
        },
      ],
    },
    freelancePage: {
      heroEyebrow: 'Agency portfolio',
      heroTitle: 'MatoStudio — Premium websites for independents, artisans and small businesses',
      heroDescription:
        'I design modern, fast and credible websites that help professionals present their activity, reassure clients and turn more visitors into contact requests.',
      primaryCta: 'Request a quote',
      secondaryCta: 'View services',
    },
    jobPage: {
      heroEyebrow: 'Career portfolio',
      heroTitle: 'Web and mobile web developer — project, quality and growth oriented',
      heroDescription:
        'I am looking for an opportunity to contribute to serious web projects, learn quickly with a team and bring a clean working method.',
      primaryCta: 'Contact me',
      secondaryCta: 'View my GitHub',
    },
    quoteSimulator: {
      steps: ['Project', 'Pages', 'Options', 'Timeline', 'Summary'],
      eyebrow: 'Guided simulator',
      title: 'Build a first estimate in a few choices.',
      estimate: 'Estimate',
      back: 'Back',
      continue: 'Continue',
      requestQuote: 'Request this quote',
      stepsAria: 'Simulator steps',
      pageCount: 'Estimated number of pages',
      quickChoicesAria: 'Quick page-count choices',
      pageContext:
        'The selected base includes {includedPages}. Additional pages are estimated at {extraPagePrice} each.',
      summaryEyebrow: 'Indicative summary',
      summaryNote:
        'This estimate gives a first budget range. The final quote is approved after scoping the need, content, technical constraints and real timeline.',
      baseChosen: 'Selected base',
      pagesLabel: 'Pages',
      supplement: 'supplement',
      selectedOptions: 'Selected options',
      desiredDeadline: 'Desired timeline',
      adjustment: 'adjustment',
      projectTypes: {
        'essential-showcase': {
          label: 'Essential showcase website',
          description: 'A clear, fast and credible professional presence.',
        },
        'premium-showcase': {
          label: 'Premium website',
          description: 'A more persuasive showcase with a conversion-focused path.',
        },
        'landing-page': {
          label: 'Landing page',
          description: 'A focused page for an offer, campaign or quote request.',
        },
        redesign: {
          label: 'Redesign',
          description: 'Rethink an existing website to improve clarity, image and conversion.',
        },
        'custom-project': {
          label: 'Custom project',
          description: 'A specific need with dedicated structure, features or support.',
        },
      },
      options: {
        'local-seo': {
          label: 'Local SEO',
          description: 'Structure, key content and local signals for better visibility.',
        },
        'content-writing': {
          label: 'Content writing',
          description: 'Support for key section wording and conversion messages.',
        },
        'advanced-form': {
          label: 'Advanced form',
          description: 'Qualifying fields, guided flow or front-end conditional logic.',
        },
        'premium-animations': {
          label: 'Premium animations',
          description: 'Elegant micro-interactions and transitions without hurting readability.',
        },
        maintenance: {
          label: 'Maintenance',
          description: 'Preparation for post-delivery fixes and small evolutions.',
        },
        'future-payment': {
          label: 'Future payment integration',
          description: 'Visual and technical preparation for a future secure integration.',
        },
      },
      deadlines: {
        flexible: {
          label: 'Flexible',
          description: 'Comfortable planning, ideal to refine content.',
        },
        standard: {
          label: 'Standard',
          description: 'Balanced pace after receiving content.',
        },
        priority: {
          label: 'Priority',
          description: 'Project to organize quickly with close validation cycles.',
        },
        express: {
          label: 'Express',
          description: 'Very short timeline, to confirm depending on availability.',
        },
      },
    },
  },
} as const
