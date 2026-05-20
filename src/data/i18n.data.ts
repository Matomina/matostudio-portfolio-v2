import type { Language, TranslationCopy } from '@/types/language.types'

export const defaultLanguage: Language = 'fr'

const sharedOptions = {
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
}

const quoteProjectTypes = {
  'essential-showcase': {
    label: 'Site vitrine essentiel',
    description: 'Une présence professionnelle claire, rapide et crédible.',
  },
  'premium-showcase': {
    label: 'Site premium',
    description: 'Une vitrine persuasive avec un parcours orienté conversion.',
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
    description: 'Un besoin spécifique avec structure ou accompagnement dédié.',
  },
}

const quoteOptions = {
  'local-seo': {
    label: 'SEO local',
    description: 'Structure et contenus clés pour une meilleure visibilité locale.',
  },
  'content-writing': {
    label: 'Rédaction de contenu',
    description: 'Aide à la formulation des sections principales.',
  },
  'advanced-form': {
    label: 'Formulaire avancé',
    description: 'Champs qualifiants ou parcours guidé côté front.',
  },
  'premium-animations': {
    label: 'Animations premium',
    description: 'Micro-interactions élégantes sans nuire à la lisibilité.',
  },
  maintenance: {
    label: 'Maintenance',
    description: 'Préparation d’un suivi après livraison.',
  },
  'future-payment': {
    label: 'Paiement futur',
    description: 'Préparation visuelle pour une future intégration sécurisée.',
  },
}

const quoteDeadlines = {
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
}

const fr: TranslationCopy = {
  languageName: 'Français',
  navigation: { home: 'Accueil', quote: 'Devis', freelance: 'Freelance', job: 'Emploi' },
  header: {
    homeAria: 'Retour à l’accueil',
    navAria: 'Navigation principale',
    mobileNavAria: 'Navigation mobile',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    contact: 'Contact',
    themeToLight: 'Activer le mode light premium',
    themeToDark: 'Activer le mode dark premium',
    languageToggle: 'Changer de langue',
  },
  footer: {
    brandAria: 'Retour à l’accueil MatoStudio Agency',
    description: 'Agence web premium pour créer des expériences digitales rapides, élégantes et orientées conversion.',
    linksAria: 'Liens de pied de page MatoStudio Agency',
    socialsAria: 'Réseaux sociaux MatoStudio Agency',
    copyright: 'Tous droits réservés.',
    links: {
      contact: 'Contact',
      quote: 'Devis',
      payment: 'Paiement',
      legal: 'Mentions légales',
      privacy: 'Confidentialité',
    },
  },
  common: { page: 'page', pages: 'pages', included: 'incluse', base: 'Base', none: 'Aucune option' },
  home: {
    eyebrow: 'MatoStudio Agency',
    title: 'Une présence web premium, claire et pensée pour convertir.',
    description: 'MatoStudio conçoit des sites modernes, rapides et cohérents avec votre image de marque.',
    clientCta: 'Je suis un client',
    recruiterCta: 'Je suis recruteur',
    trustItems: ['Sites premium', 'React et TypeScript', 'UX mobile-first', 'Livraison professionnelle'],
    pathsEyebrow: 'Deux accès, une même exigence',
    pathsTitle: 'Choisissez le parcours qui correspond à votre besoin.',
    pathsDescription: 'Chaque entrée garde un message adapté à son audience.',
    paths: [
      {
        title: 'Projet client et freelance',
        eyebrow: 'Portfolio freelance',
        description: 'Un parcours pensé pour présenter les offres et générer des demandes qualifiées.',
        hrefId: 'freelance',
        ctaLabel: 'Voir l’offre freelance',
      },
      {
        title: 'Profil développeur et emploi',
        eyebrow: 'Portfolio emploi',
        description: 'Un espace pour valoriser les compétences, les projets techniques et le sérieux professionnel.',
        hrefId: 'job',
        ctaLabel: 'Voir le profil emploi',
      },
    ],
  },
  contactPage: {
    heroEyebrow: 'Contact MatoStudio Agency',
    heroTitle: 'Parlons de votre prochain site premium.',
    heroDescription: 'Décrivez votre besoin. Je vous réponds avec une approche claire, cadrée et professionnelle.',
    estimateCta: 'Estimer mon projet',
    directCta: 'Écrire directement',
    formEyebrow: 'Brief projet',
    formTitle: 'Un formulaire clair pour qualifier la demande.',
    formDescription: 'Le formulaire prépare automatiquement un email complet pour lancer l’échange.',
    fields: {
      name: 'Nom',
      email: 'Email',
      phone: 'Téléphone optionnel',
      projectType: 'Type de projet',
      budget: 'Budget estimé',
      timeline: 'Délai souhaité',
      message: 'Message',
      select: 'Sélectionner',
      placeholder: 'Présentez votre activité, les pages imaginées, les objectifs et les contraintes importantes.',
    },
    options: sharedOptions,
    submit: 'Envoyer ma demande',
    initialStatus: 'Aucun paiement ni donnée sensible ne sont demandés ici.',
    preparedStatus: 'Votre email est prêt. Vérifiez le message puis envoyez-le depuis votre messagerie.',
    sideTitle: 'Un échange cadré, professionnel et rassurant.',
    sideDescription: 'Premier cadrage clair avant engagement : périmètre, contenus, délais, priorités et niveau de finition.',
    reassuranceEyebrow: 'Réassurance',
    reassuranceTitle: 'Vous savez ce qui se passe après l’envoi.',
    reassuranceItems: [
      { title: 'Réponse claire', description: 'Un premier retour lisible sur la faisabilité et la bonne direction.' },
      { title: 'Cadrage du besoin', description: 'Objectifs, pages, contenus et priorités sont clarifiés avant devis.' },
      { title: 'Devis personnalisé', description: 'Chaque estimation est ajustée selon le niveau de finition.' },
      { title: 'Accompagnement pro', description: 'Méthode, communication et vérifications intégrées au projet.' },
    ],
  },
  quotePage: {
    heroEyebrow: 'Devis guidé',
    heroTitle: 'Simulez une première enveloppe pour votre projet web.',
    heroDescription: 'Choisissez le type de projet, le volume de pages, les options et le délai souhaité.',
    proofs: ['Estimation front-end', 'Prix indicatifs', 'Options visibles'],
    nextEyebrow: 'Prochaine étape',
    nextTitle: 'Transformons l’estimation en devis exploitable.',
    nextDescription: 'Le cadrage valide les pages, contenus, options, contraintes et planning réel.',
    contactCta: 'Contacter l’agence',
    paymentCta: 'Voir le paiement prévu',
  },
  paymentPage: {
    heroEyebrow: 'Paiement préparatoire',
    heroTitle: 'Une base visuelle prête pour le futur paiement sécurisé.',
    heroDescription: 'Le paiement sera activé uniquement après validation du devis.',
    quoteCta: 'Demander un devis',
    simulateCta: 'Simuler un budget',
    methodsEyebrow: 'Moyens prévus',
    methodsTitle: 'Plusieurs options, activées seulement après accord.',
    methodsDescription: 'La future intégration restera séparée et sécurisée.',
    securityEyebrow: 'Sécurité',
    securityTitle: 'Pas de paiement réel tant que le devis n’est pas validé.',
    securityDescription: 'Aucune clé secrète, aucun appel backend et aucune transaction réelle ici.',
    methods: [
      { title: 'Stripe', description: 'Carte bancaire et parcours sécurisé.', status: 'Prévu' },
      { title: 'PayPal', description: 'Option complémentaire de paiement.', status: 'Prévu' },
      { title: 'Virement', description: 'Solution simple sur devis signé.', status: 'Disponible sur devis' },
    ],
    reassuranceItems: [
      { title: 'Validation avant paiement', description: 'Paiement après cadrage, devis et accord client.' },
      { title: 'Aucune clé intégrée', description: 'Préparation visuelle sans secret ni API.' },
      { title: 'Parcours sécurisé', description: 'Prestataires reconnus lors de l’activation.' },
    ],
  },
  freelancePage: {
    heroEyebrow: 'Portfolio freelance',
    heroTitle: 'MatoStudio — Sites web premium pour indépendants, artisans et petites entreprises',
    heroDescription: 'Je conçois des sites modernes, rapides et crédibles pour transformer les visiteurs en demandes de contact.',
    primaryCta: 'Demander un devis',
    secondaryCta: 'Voir les services',
  },
  jobPage: {
    heroEyebrow: 'Portfolio emploi',
    heroTitle: 'Développeur web et web mobile — profil orienté projet, qualité et progression',
    heroDescription: 'Je recherche une opportunité pour contribuer à des projets web sérieux avec une méthode propre.',
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
    pageContext: 'La base sélectionnée inclut {includedPages}. Les pages supplémentaires sont estimées à {extraPagePrice} chacune.',
    summaryEyebrow: 'Résumé indicatif',
    summaryNote: 'Cette estimation donne une première enveloppe avant validation finale du devis.',
    baseChosen: 'Base choisie',
    pagesLabel: 'Pages',
    supplement: 'supplément',
    selectedOptions: 'Options sélectionnées',
    desiredDeadline: 'Délai souhaité',
    adjustment: 'ajustement',
    projectTypes: quoteProjectTypes,
    options: quoteOptions,
    deadlines: quoteDeadlines,
  },
}

const en: TranslationCopy = {
  ...fr,
  languageName: 'English',
  navigation: { home: 'Home', quote: 'Quote', freelance: 'Agency', job: 'Career' },
  header: { ...fr.header, contact: 'Contact', languageToggle: 'Change language' },
  common: { page: 'page', pages: 'pages', included: 'included', base: 'Base', none: 'No option' },
  home: { ...fr.home, title: 'A premium web presence, clear and designed to convert.', clientCta: 'I am a client', recruiterCta: 'I am a recruiter' },
  contactPage: { ...fr.contactPage, heroTitle: 'Let’s talk about your next premium website.', submit: 'Send my request', preparedStatus: 'Your email is ready. Review it, then send it from your mailbox.' },
  quotePage: { ...fr.quotePage, heroTitle: 'Simulate a first budget range for your web project.', contactCta: 'Contact the agency' },
  paymentPage: { ...fr.paymentPage, heroTitle: 'A visual foundation ready for future secure payment.' },
  freelancePage: { ...fr.freelancePage, heroEyebrow: 'Agency portfolio', primaryCta: 'Request a quote', secondaryCta: 'View services' },
  jobPage: { ...fr.jobPage, heroEyebrow: 'Career portfolio', primaryCta: 'Contact me', secondaryCta: 'View my GitHub' },
}

const zh: TranslationCopy = {
  ...fr,
  languageName: '中文',
  navigation: { home: '首页', quote: '报价', freelance: '服务', job: '职业' },
  header: { ...fr.header, contact: '联系', languageToggle: '切换语言' },
  common: { page: '页', pages: '页', included: '已包含', base: '基础', none: '无选项' },
  home: { ...fr.home, title: '高端、清晰、以转化为目标的网站形象。', clientCta: '我是客户', recruiterCta: '我是招聘方' },
  contactPage: { ...fr.contactPage, heroTitle: '聊聊您的下一个高端网站。', submit: '发送需求', preparedStatus: '邮件已准备好，请检查后从邮箱发送。' },
  quotePage: { ...fr.quotePage, heroTitle: '为您的网站项目快速估算预算。', contactCta: '联系工作室' },
  paymentPage: { ...fr.paymentPage, heroTitle: '为未来安全支付准备的视觉基础。' },
  freelancePage: { ...fr.freelancePage, heroEyebrow: '服务作品集', primaryCta: '申请报价', secondaryCta: '查看服务' },
  jobPage: { ...fr.jobPage, heroEyebrow: '职业作品集', primaryCta: '联系我', secondaryCta: '查看 GitHub' },
}

const ru: TranslationCopy = {
  ...fr,
  languageName: 'Русский',
  navigation: { home: 'Главная', quote: 'Смета', freelance: 'Услуги', job: 'Карьера' },
  header: { ...fr.header, contact: 'Контакт', languageToggle: 'Сменить язык' },
  common: { page: 'страница', pages: 'страницы', included: 'включено', base: 'База', none: 'Без опций' },
  home: { ...fr.home, title: 'Премиальное веб-присутствие, ясное и созданное для конверсии.', clientCta: 'Я клиент', recruiterCta: 'Я рекрутер' },
  contactPage: { ...fr.contactPage, heroTitle: 'Обсудим ваш следующий премиальный сайт.', submit: 'Отправить запрос', preparedStatus: 'Письмо готово. Проверьте его и отправьте из почты.' },
  quotePage: { ...fr.quotePage, heroTitle: 'Оцените первый бюджет для вашего веб-проекта.', contactCta: 'Связаться со студией' },
  paymentPage: { ...fr.paymentPage, heroTitle: 'Визуальная база для будущей безопасной оплаты.' },
  freelancePage: { ...fr.freelancePage, heroEyebrow: 'Портфолио услуг', primaryCta: 'Запросить смету', secondaryCta: 'Посмотреть услуги' },
  jobPage: { ...fr.jobPage, heroEyebrow: 'Карьерное портфолио', primaryCta: 'Связаться со мной', secondaryCta: 'Посмотреть GitHub' },
}

export const translations: Record<Language, TranslationCopy> = {
  fr,
  en,
  zh,
  ru,
}
