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

const enOptions = {
  projectTypes: {
    'site-vitrine': 'Essential showcase website',
    'site-premium': 'Premium website',
    'landing-page': 'Landing page',
    refonte: 'Redesign',
    'sur-mesure': 'Custom project',
  },
  budgets: {
    'moins-1000': 'Under €1,000',
    '1000-2000': '€1,000 to €2,000',
    '2000-4000': '€2,000 to €4,000',
    '4000-plus': '€4,000 and more',
    'a-definir': 'To define together',
  },
  timelines: {
    flexible: 'Flexible',
    '1-mois': 'Within one month',
    '2-3-mois': 'Within 2 to 3 months',
    urgent: 'Priority need',
  },
}

const zhOptions = {
  projectTypes: {
    'site-vitrine': '基础展示网站',
    'site-premium': '高端网站',
    'landing-page': '落地页',
    refonte: '网站改版',
    'sur-mesure': '定制项目',
  },
  budgets: {
    'moins-1000': '低于 1,000 €',
    '1000-2000': '1,000 € 至 2,000 €',
    '2000-4000': '2,000 € 至 4,000 €',
    '4000-plus': '4,000 € 以上',
    'a-definir': '一起确定',
  },
  timelines: {
    flexible: '灵活',
    '1-mois': '一个月内',
    '2-3-mois': '2 至 3 个月内',
    urgent: '优先需求',
  },
}

const ruOptions = {
  projectTypes: {
    'site-vitrine': 'Базовый сайт-витрина',
    'site-premium': 'Премиальный сайт',
    'landing-page': 'Лендинг',
    refonte: 'Редизайн',
    'sur-mesure': 'Индивидуальный проект',
  },
  budgets: {
    'moins-1000': 'Менее 1 000 €',
    '1000-2000': 'От 1 000 € до 2 000 €',
    '2000-4000': 'От 2 000 € до 4 000 €',
    '4000-plus': '4 000 € и выше',
    'a-definir': 'Определить вместе',
  },
  timelines: {
    flexible: 'Гибко',
    '1-mois': 'В течение месяца',
    '2-3-mois': 'В течение 2–3 месяцев',
    urgent: 'Приоритетная задача',
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

const enQuoteProjectTypes = {
  'essential-showcase': { label: 'Essential showcase website', description: 'A clear, fast and credible professional presence.' },
  'premium-showcase': { label: 'Premium website', description: 'A persuasive website with a conversion-focused path.' },
  'landing-page': { label: 'Landing page', description: 'A targeted page for an offer, campaign or quote request.' },
  redesign: { label: 'Redesign', description: 'Improve an existing website for clarity, image and conversion.' },
  'custom-project': { label: 'Custom project', description: 'A specific need with a dedicated structure or support.' },
}

const enQuoteOptions = {
  'local-seo': { label: 'Local SEO', description: 'Key structure and content for better local visibility.' },
  'content-writing': { label: 'Content writing', description: 'Support to write the main sections clearly.' },
  'advanced-form': { label: 'Advanced form', description: 'Qualified fields or a guided front-end flow.' },
  'premium-animations': { label: 'Premium animations', description: 'Elegant micro-interactions without hurting readability.' },
  maintenance: { label: 'Maintenance', description: 'Prepare support after delivery.' },
  'future-payment': { label: 'Future payment', description: 'Visual preparation for a secure future integration.' },
}

const enQuoteDeadlines = {
  flexible: { label: 'Flexible', description: 'Comfortable timing, ideal to refine content.' },
  standard: { label: 'Standard', description: 'Balanced pace after receiving the content.' },
  priority: { label: 'Priority', description: 'Project to organize quickly with close validations.' },
  express: { label: 'Express', description: 'Very short timeline, to confirm depending on availability.' },
}

const zhQuoteProjectTypes = {
  'essential-showcase': { label: '基础展示网站', description: '清晰、快速、可信的专业线上形象。' },
  'premium-showcase': { label: '高端网站', description: '以转化为目标的高端展示网站。' },
  'landing-page': { label: '落地页', description: '针对服务、活动或报价请求的页面。' },
  redesign: { label: '网站改版', description: '提升现有网站的清晰度、形象和转化率。' },
  'custom-project': { label: '定制项目', description: '针对特殊需求的专属结构或支持。' },
}

const zhQuoteOptions = {
  'local-seo': { label: '本地 SEO', description: '提升本地可见度的结构和内容。' },
  'content-writing': { label: '内容撰写', description: '帮助优化主要页面文案。' },
  'advanced-form': { label: '高级表单', description: '更精准的字段或引导式流程。' },
  'premium-animations': { label: '高端动效', description: '优雅的微交互，不影响可读性。' },
  maintenance: { label: '维护', description: '为交付后的支持做准备。' },
  'future-payment': { label: '未来支付', description: '为后续安全支付集成做视觉准备。' },
}

const zhQuoteDeadlines = {
  flexible: { label: '灵活', description: '时间充足，适合完善内容。' },
  standard: { label: '标准', description: '收到内容后按平衡节奏推进。' },
  priority: { label: '优先', description: '需要快速组织并密集确认。' },
  express: { label: '加急', description: '非常短的周期，需根据档期确认。' },
}

const ruQuoteProjectTypes = {
  'essential-showcase': { label: 'Базовый сайт-витрина', description: 'Понятное, быстрое и надежное профессиональное присутствие.' },
  'premium-showcase': { label: 'Премиальный сайт', description: 'Убедительный сайт с упором на конверсию.' },
  'landing-page': { label: 'Лендинг', description: 'Целевая страница для предложения, кампании или заявки.' },
  redesign: { label: 'Редизайн', description: 'Улучшение существующего сайта для ясности, имиджа и конверсии.' },
  'custom-project': { label: 'Индивидуальный проект', description: 'Особая задача со специальной структурой или поддержкой.' },
}

const ruQuoteOptions = {
  'local-seo': { label: 'Локальное SEO', description: 'Структура и контент для лучшей локальной видимости.' },
  'content-writing': { label: 'Тексты', description: 'Помощь в формулировке основных разделов.' },
  'advanced-form': { label: 'Расширенная форма', description: 'Квалифицирующие поля или пошаговый путь.' },
  'premium-animations': { label: 'Премиум-анимации', description: 'Элегантные микро-взаимодействия без потери читабельности.' },
  maintenance: { label: 'Поддержка', description: 'Подготовка сопровождения после сдачи.' },
  'future-payment': { label: 'Будущая оплата', description: 'Визуальная подготовка к безопасной интеграции оплаты.' },
}

const ruQuoteDeadlines = {
  flexible: { label: 'Гибко', description: 'Комфортный график для уточнения контента.' },
  standard: { label: 'Стандарт', description: 'Сбалансированный темп после получения материалов.' },
  priority: { label: 'Приоритет', description: 'Быстрая организация проекта с частыми согласованиями.' },
  express: { label: 'Срочно', description: 'Очень короткий срок, зависит от доступности.' },
}

const fr: TranslationCopy = {
  languageName: 'Français',
  navigation: { home: 'Accueil', quote: 'Devis', freelance: 'Freelance', job: 'Emploi' },
  header: {
    homeAria: 'Retour à l’accueil', navAria: 'Navigation principale', mobileNavAria: 'Navigation mobile', menuOpen: 'Ouvrir le menu', menuClose: 'Fermer le menu', contact: 'Contact', themeToLight: 'Activer le mode light premium', themeToDark: 'Activer le mode dark premium', languageToggle: 'Changer de langue',
  },
  footer: {
    brandAria: 'Retour à l’accueil MatoStudio Agency', description: 'Agence web premium pour créer des expériences digitales rapides, élégantes et orientées conversion.', linksAria: 'Liens de pied de page MatoStudio Agency', socialsAria: 'Réseaux sociaux MatoStudio Agency', copyright: 'Tous droits réservés.',
    links: { contact: 'Contact', quote: 'Devis', payment: 'Paiement', legal: 'Mentions légales', privacy: 'Confidentialité' },
  },
  common: { page: 'page', pages: 'pages', included: 'incluse', base: 'Base', none: 'Aucune option' },
  home: {
    eyebrow: 'MatoStudio Agency', title: 'Une présence web premium, claire et pensée pour convertir.', description: 'MatoStudio conçoit des sites modernes, rapides et cohérents avec votre image de marque.', clientCta: 'Je suis un client', recruiterCta: 'Je suis recruteur', trustItems: ['Sites premium', 'React et TypeScript', 'UX mobile-first', 'Livraison professionnelle'], pathsEyebrow: 'Deux accès, une même exigence', pathsTitle: 'Choisissez le parcours qui correspond à votre besoin.', pathsDescription: 'Chaque entrée garde un message adapté à son audience.',
    paths: [
      { title: 'Projet client et freelance', eyebrow: 'Parcours freelance', description: 'Un parcours pensé pour présenter vos offres avec clarté, renforcer votre crédibilité et transformer les visiteurs en demandes de projet qualifiées.', hrefId: 'freelance', ctaLabel: 'Voir l’offre freelance' },
      { title: 'Profil développeur et emploi', eyebrow: 'Parcours emploi', description: 'Un espace dédié pour valoriser vos compétences, vos projets techniques et votre sérieux professionnel auprès des recruteurs et des équipes.', hrefId: 'job', ctaLabel: 'Voir le profil emploi' },
    ],
  },
  contactPage: {
    heroEyebrow: 'Contact MatoStudio Agency', heroTitle: 'Parlons de votre prochain site premium.', heroDescription: 'Décrivez votre besoin. Je vous réponds avec une approche claire, cadrée et professionnelle.', estimateCta: 'Estimer mon projet', directCta: 'Écrire directement', formEyebrow: 'Brief projet', formTitle: 'Un formulaire clair pour qualifier la demande.', formDescription: 'Le formulaire prépare automatiquement un email complet pour lancer l’échange.',
    fields: { name: 'Nom', email: 'Email', phone: 'Téléphone optionnel', projectType: 'Type de projet', budget: 'Budget estimé', timeline: 'Délai souhaité', message: 'Message', select: 'Sélectionner', placeholder: 'Présentez votre activité, les pages imaginées, les objectifs et les contraintes importantes.' },
    options: sharedOptions, submit: 'Envoyer ma demande', initialStatus: 'Aucun paiement ni donnée sensible ne sont demandés ici.', preparedStatus: 'Votre email est prêt. Vérifiez le message puis envoyez-le depuis votre messagerie.', sideTitle: 'Un échange cadré, professionnel et rassurant.', sideDescription: 'Premier cadrage clair avant engagement : périmètre, contenus, délais, priorités et niveau de finition.', reassuranceEyebrow: 'Réassurance', reassuranceTitle: 'Vous savez ce qui se passe après l’envoi.',
    reassuranceItems: [
      { title: 'Réponse claire', description: 'Un premier retour lisible sur la faisabilité et la bonne direction.' },
      { title: 'Cadrage du besoin', description: 'Objectifs, pages, contenus et priorités sont clarifiés avant devis.' },
      { title: 'Devis personnalisé', description: 'Chaque estimation est ajustée selon le niveau de finition.' },
      { title: 'Accompagnement pro', description: 'Méthode, communication et vérifications intégrées au projet.' },
    ],
  },
  quotePage: { heroEyebrow: 'Devis guidé', heroTitle: 'Simulez une première enveloppe pour votre projet web.', heroDescription: 'Choisissez le type de projet, le volume de pages, les options et le délai souhaité.', proofs: ['Estimation front-end', 'Prix indicatifs', 'Options visibles'], nextEyebrow: 'Prochaine étape', nextTitle: 'Transformons l’estimation en devis exploitable.', nextDescription: 'Le cadrage valide les pages, contenus, options, contraintes et planning réel.', contactCta: 'Contacter l’agence', paymentCta: 'Voir le paiement prévu' },
  paymentPage: { heroEyebrow: 'Paiement préparatoire', heroTitle: 'Une base visuelle prête pour le futur paiement sécurisé.', heroDescription: 'Le paiement sera activé uniquement après validation du devis.', quoteCta: 'Demander un devis', simulateCta: 'Simuler un budget', methodsEyebrow: 'Moyens prévus', methodsTitle: 'Plusieurs options, activées seulement après accord.', methodsDescription: 'La future intégration restera séparée et sécurisée.', securityEyebrow: 'Sécurité', securityTitle: 'Pas de paiement réel tant que le devis n’est pas validé.', securityDescription: 'Aucune clé secrète, aucun appel backend et aucune transaction réelle ici.', methods: [{ title: 'Stripe', description: 'Carte bancaire et parcours sécurisé.', status: 'Prévu' }, { title: 'PayPal', description: 'Option complémentaire de paiement.', status: 'Prévu' }, { title: 'Virement', description: 'Solution simple sur devis signé.', status: 'Disponible sur devis' }], reassuranceItems: [{ title: 'Validation avant paiement', description: 'Paiement après cadrage, devis et accord client.' }, { title: 'Aucune clé intégrée', description: 'Préparation visuelle sans secret ni API.' }, { title: 'Parcours sécurisé', description: 'Prestataires reconnus lors de l’activation.' }] },
  freelancePage: { heroEyebrow: 'Parcours freelance', heroTitle: 'MatoStudio — Sites web premium pour indépendants, artisans et petites entreprises', heroDescription: 'Je conçois des sites modernes, rapides et crédibles pour transformer les visiteurs en demandes de contact.', primaryCta: 'Demander un devis', secondaryCta: 'Voir les services' },
  jobPage: { heroEyebrow: 'Profil emploi', heroTitle: 'Développeur web et web mobile — profil orienté projet, qualité et progression', heroDescription: 'Je recherche une opportunité pour contribuer à des projets web sérieux avec une méthode propre.', primaryCta: 'Me contacter', secondaryCta: 'Voir mon GitHub' },
  quoteSimulator: { steps: ['Projet', 'Pages', 'Options', 'Délai', 'Résumé'], eyebrow: 'Simulateur guidé', title: 'Construisez une première estimation en quelques choix.', estimate: 'Estimation', back: 'Retour', continue: 'Continuer', requestQuote: 'Demander ce devis', stepsAria: 'Étapes du simulateur', pageCount: 'Nombre de pages estimé', quickChoicesAria: 'Choix rapides du nombre de pages', pageContext: 'La base sélectionnée inclut {includedPages}. Les pages supplémentaires sont estimées à {extraPagePrice} chacune.', summaryEyebrow: 'Résumé indicatif', summaryNote: 'Cette estimation donne une première enveloppe avant validation finale du devis.', baseChosen: 'Base choisie', pagesLabel: 'Pages', supplement: 'supplément', selectedOptions: 'Options sélectionnées', desiredDeadline: 'Délai souhaité', adjustment: 'ajustement', projectTypes: quoteProjectTypes, options: quoteOptions, deadlines: quoteDeadlines },
}

const en: TranslationCopy = {
  languageName: 'English',
  navigation: { home: 'Home', quote: 'Quote', freelance: 'Agency', job: 'Career' },
  header: { homeAria: 'Back to home', navAria: 'Main navigation', mobileNavAria: 'Mobile navigation', menuOpen: 'Open menu', menuClose: 'Close menu', contact: 'Contact', themeToLight: 'Enable premium light mode', themeToDark: 'Enable premium dark mode', languageToggle: 'Change language' },
  footer: { brandAria: 'Back to MatoStudio Agency home', description: 'Premium web agency creating fast, elegant and conversion-focused digital experiences.', linksAria: 'MatoStudio Agency footer links', socialsAria: 'MatoStudio Agency social networks', copyright: 'All rights reserved.', links: { contact: 'Contact', quote: 'Quote', payment: 'Payment', legal: 'Legal notice', privacy: 'Privacy policy' } },
  common: { page: 'page', pages: 'pages', included: 'included', base: 'Base', none: 'No option' },
  home: { eyebrow: 'MatoStudio Agency', title: 'A premium web presence, clear and designed to convert.', description: 'MatoStudio builds modern, fast and brand-consistent websites.', clientCta: 'I am a client', recruiterCta: 'I am a recruiter', trustItems: ['Premium websites', 'React and TypeScript', 'Mobile-first UX', 'Professional delivery'], pathsEyebrow: 'Two paths, one standard', pathsTitle: 'Choose the path that matches your need.', pathsDescription: 'Each entry keeps a message adapted to its audience.', paths: [{ title: 'Client and agency project', eyebrow: 'Agency path', description: 'A path designed to present your offers clearly, strengthen credibility and turn visitors into qualified project requests.', hrefId: 'freelance', ctaLabel: 'View the agency offer' }, { title: 'Developer and career profile', eyebrow: 'Career path', description: 'A dedicated space to highlight skills, technical projects and professional seriousness for recruiters and teams.', hrefId: 'job', ctaLabel: 'View the career profile' }] },
  contactPage: { heroEyebrow: 'Contact MatoStudio Agency', heroTitle: 'Let’s talk about your next premium website.', heroDescription: 'Describe your need. I will reply with a clear, structured and professional approach.', estimateCta: 'Estimate my project', directCta: 'Write directly', formEyebrow: 'Project brief', formTitle: 'A clear form to qualify the request.', formDescription: 'The form automatically prepares a complete email to start the conversation.', fields: { name: 'Name', email: 'Email', phone: 'Optional phone', projectType: 'Project type', budget: 'Estimated budget', timeline: 'Desired timeline', message: 'Message', select: 'Select', placeholder: 'Present your activity, imagined pages, goals and important constraints.' }, options: enOptions, submit: 'Send my request', initialStatus: 'No payment or sensitive data is requested here.', preparedStatus: 'Your email is ready. Review it, then send it from your mailbox.', sideTitle: 'A structured, professional and reassuring exchange.', sideDescription: 'First clear scoping before commitment: scope, content, timing, priorities and level of finish.', reassuranceEyebrow: 'Reassurance', reassuranceTitle: 'You know what happens after sending.', reassuranceItems: [{ title: 'Clear reply', description: 'A first readable return on feasibility and direction.' }, { title: 'Need scoping', description: 'Goals, pages, content and priorities are clarified before the quote.' }, { title: 'Personalized quote', description: 'Each estimate is adjusted according to the finish level.' }, { title: 'Professional support', description: 'Method, communication and checks are integrated into the project.' }] },
  quotePage: { heroEyebrow: 'Guided quote', heroTitle: 'Simulate a first budget range for your web project.', heroDescription: 'Choose the project type, page volume, options and desired timeline.', proofs: ['Front-end estimate', 'Indicative prices', 'Visible options'], nextEyebrow: 'Next step', nextTitle: 'Turn the estimate into a usable quote.', nextDescription: 'Scoping validates pages, content, options, constraints and real schedule.', contactCta: 'Contact the agency', paymentCta: 'View planned payment' },
  paymentPage: { heroEyebrow: 'Payment preparation', heroTitle: 'A visual foundation ready for future secure payment.', heroDescription: 'Payment will only be activated after quote validation.', quoteCta: 'Request a quote', simulateCta: 'Simulate a budget', methodsEyebrow: 'Planned methods', methodsTitle: 'Several options, activated only after agreement.', methodsDescription: 'The future integration will remain separated and secure.', securityEyebrow: 'Security', securityTitle: 'No real payment until the quote is validated.', securityDescription: 'No secret key, no backend call and no real transaction here.', methods: [{ title: 'Stripe', description: 'Card payment and secure flow.', status: 'Planned' }, { title: 'PayPal', description: 'Additional payment option.', status: 'Planned' }, { title: 'Bank transfer', description: 'Simple solution on signed quote.', status: 'Available on quote' }], reassuranceItems: [{ title: 'Validation before payment', description: 'Payment after scoping, quote and client agreement.' }, { title: 'No key embedded', description: 'Visual preparation without secrets or API.' }, { title: 'Secure flow', description: 'Trusted providers when activated.' }] },
  freelancePage: { heroEyebrow: 'Agency path', heroTitle: 'MatoStudio — Premium websites for freelancers, artisans and small businesses', heroDescription: 'I design modern, fast and credible websites to turn visitors into contact requests.', primaryCta: 'Request a quote', secondaryCta: 'View services' },
  jobPage: { heroEyebrow: 'Career profile', heroTitle: 'Web and mobile web developer — project, quality and progression oriented profile', heroDescription: 'I am looking for an opportunity to contribute to serious web projects with a clean method.', primaryCta: 'Contact me', secondaryCta: 'View my GitHub' },
  quoteSimulator: { ...fr.quoteSimulator, steps: ['Project', 'Pages', 'Options', 'Timeline', 'Summary'], eyebrow: 'Guided simulator', title: 'Build a first estimate in a few choices.', estimate: 'Estimate', back: 'Back', continue: 'Continue', requestQuote: 'Request this quote', stepsAria: 'Simulator steps', pageCount: 'Estimated number of pages', quickChoicesAria: 'Quick page count choices', pageContext: 'The selected base includes {includedPages}. Extra pages are estimated at {extraPagePrice} each.', summaryEyebrow: 'Indicative summary', summaryNote: 'This estimate gives a first budget range before final quote validation.', baseChosen: 'Chosen base', pagesLabel: 'Pages', supplement: 'extra', selectedOptions: 'Selected options', desiredDeadline: 'Desired timeline', adjustment: 'adjustment', projectTypes: enQuoteProjectTypes, options: enQuoteOptions, deadlines: enQuoteDeadlines },
}

const zh: TranslationCopy = {
  ...en,
  languageName: '中文',
  navigation: { home: '首页', quote: '报价', freelance: '服务', job: '职业' },
  header: { ...en.header, homeAria: '返回首页', navAria: '主导航', mobileNavAria: '移动导航', menuOpen: '打开菜单', menuClose: '关闭菜单', contact: '联系', themeToLight: '启用高端浅色模式', themeToDark: '启用高端深色模式', languageToggle: '切换语言' },
  footer: { ...en.footer, brandAria: '返回 MatoStudio Agency 首页', description: '高端网站工作室，打造快速、优雅、以转化为目标的数字体验。', linksAria: 'MatoStudio Agency 页脚链接', socialsAria: 'MatoStudio Agency 社交网络', copyright: '版权所有。', links: { contact: '联系', quote: '报价', payment: '支付', legal: '法律声明', privacy: '隐私政策' } },
  common: { page: '页', pages: '页', included: '已包含', base: '基础', none: '无选项' },
  home: { eyebrow: 'MatoStudio Agency', title: '高端、清晰、以转化为目标的网站形象。', description: 'MatoStudio 打造现代、快速并符合品牌形象的网站。', clientCta: '我是客户', recruiterCta: '我是招聘方', trustItems: ['高端网站', 'React 和 TypeScript', '移动优先 UX', '专业交付'], pathsEyebrow: '两个入口，同一标准', pathsTitle: '选择符合您需求的路径。', pathsDescription: '每个入口都保留适合目标受众的信息。', paths: [{ title: '客户与服务项目', eyebrow: '服务路径', description: '清晰展示您的服务，增强可信度，并把访客转化为合格项目咨询。', hrefId: 'freelance', ctaLabel: '查看服务方案' }, { title: '开发者与职业资料', eyebrow: '职业路径', description: '展示技能、技术项目和专业态度，面向招聘方和团队。', hrefId: 'job', ctaLabel: '查看职业资料' }] },
  contactPage: { ...en.contactPage, heroEyebrow: '联系 MatoStudio Agency', heroTitle: '聊聊您的下一个高端网站。', heroDescription: '描述您的需求，我会用清晰、结构化、专业的方式回复。', estimateCta: '估算项目', directCta: '直接写信', formEyebrow: '项目简介', formTitle: '用清晰表单确认需求。', formDescription: '表单会自动准备一封完整邮件来开始沟通。', fields: { name: '姓名', email: '邮箱', phone: '电话（可选）', projectType: '项目类型', budget: '预计预算', timeline: '期望时间', message: '留言', select: '选择', placeholder: '介绍您的业务、页面想法、目标和重要限制。' }, options: zhOptions, submit: '发送需求', initialStatus: '这里不要求付款或敏感信息。', preparedStatus: '邮件已准备好，请检查后从邮箱发送。', sideTitle: '结构清晰、专业且放心的交流。', sideDescription: '承诺前先明确范围、内容、时间、优先级和完成标准。', reassuranceEyebrow: '保障', reassuranceTitle: '发送后您会知道下一步。', reassuranceItems: [{ title: '清晰回复', description: '先给出可行性和方向的明确反馈。' }, { title: '需求梳理', description: '报价前明确目标、页面、内容和优先级。' }, { title: '个性化报价', description: '根据完成度要求调整每个估算。' }, { title: '专业支持', description: '方法、沟通和检查都包含在项目流程中。' }] },
  quotePage: { heroEyebrow: '引导式报价', heroTitle: '为您的网站项目快速估算预算。', heroDescription: '选择项目类型、页面数量、选项和期望时间。', proofs: ['前端估算', '参考价格', '可见选项'], nextEyebrow: '下一步', nextTitle: '把估算转化为可用报价。', nextDescription: '需求梳理会确认页面、内容、选项、限制和真实排期。', contactCta: '联系工作室', paymentCta: '查看支付计划' },
  paymentPage: { ...en.paymentPage, heroEyebrow: '支付准备', heroTitle: '为未来安全支付准备的视觉基础。', heroDescription: '付款只会在报价确认后启用。', quoteCta: '申请报价', simulateCta: '估算预算', methodsEyebrow: '计划方式', methodsTitle: '多种选项，仅在确认后启用。', methodsDescription: '未来集成会保持分离和安全。', securityEyebrow: '安全', securityTitle: '报价未确认前不会产生真实付款。', securityDescription: '这里没有密钥、后端调用或真实交易。', methods: [{ title: 'Stripe', description: '银行卡支付和安全流程。', status: '计划中' }, { title: 'PayPal', description: '补充支付方式。', status: '计划中' }, { title: '银行转账', description: '签署报价后的简单方案。', status: '报价后可用' }], reassuranceItems: [{ title: '付款前确认', description: '先梳理、报价并获得客户同意。' }, { title: '无内嵌密钥', description: '无密钥或 API 的视觉准备。' }, { title: '安全流程', description: '启用时使用可信服务商。' }] },
  freelancePage: { heroEyebrow: '服务路径', heroTitle: 'MatoStudio — 面向自由职业者、工匠和小企业的高端网站', heroDescription: '我设计现代、快速、可信的网站，把访客转化为联系请求。', primaryCta: '申请报价', secondaryCta: '查看服务' },
  jobPage: { heroEyebrow: '职业资料', heroTitle: 'Web 与移动 Web 开发者 — 注重项目、质量和进步的资料', heroDescription: '我希望加入严肃的 Web 项目，并用清晰的方法贡献价值。', primaryCta: '联系我', secondaryCta: '查看 GitHub' },
  quoteSimulator: { ...en.quoteSimulator, steps: ['项目', '页面', '选项', '时间', '总结'], eyebrow: '引导式模拟器', title: '通过几个选择生成初步估算。', estimate: '估算', back: '返回', continue: '继续', requestQuote: '申请此报价', stepsAria: '模拟器步骤', pageCount: '预计页面数量', quickChoicesAria: '快速选择页面数量', pageContext: '所选基础包含 {includedPages}。额外页面按每页 {extraPagePrice} 估算。', summaryEyebrow: '参考总结', summaryNote: '最终报价确认前，这是一个初步预算范围。', baseChosen: '所选基础', pagesLabel: '页面', supplement: '额外', selectedOptions: '所选选项', desiredDeadline: '期望时间', adjustment: '调整', projectTypes: zhQuoteProjectTypes, options: zhQuoteOptions, deadlines: zhQuoteDeadlines },
}

const ru: TranslationCopy = {
  ...en,
  languageName: 'Русский',
  navigation: { home: 'Главная', quote: 'Смета', freelance: 'Услуги', job: 'Карьера' },
  header: { ...en.header, homeAria: 'Вернуться на главную', navAria: 'Главная навигация', mobileNavAria: 'Мобильная навигация', menuOpen: 'Открыть меню', menuClose: 'Закрыть меню', contact: 'Контакт', themeToLight: 'Включить премиальный светлый режим', themeToDark: 'Включить премиальный темный режим', languageToggle: 'Сменить язык' },
  footer: { ...en.footer, brandAria: 'Вернуться на главную MatoStudio Agency', description: 'Премиальная веб-студия для быстрых, элегантных и ориентированных на конверсию цифровых решений.', linksAria: 'Ссылки футера MatoStudio Agency', socialsAria: 'Социальные сети MatoStudio Agency', copyright: 'Все права защищены.', links: { contact: 'Контакт', quote: 'Смета', payment: 'Оплата', legal: 'Правовая информация', privacy: 'Политика конфиденциальности' } },
  common: { page: 'страница', pages: 'страницы', included: 'включено', base: 'База', none: 'Без опций' },
  home: { eyebrow: 'MatoStudio Agency', title: 'Премиальное веб-присутствие, ясное и созданное для конверсии.', description: 'MatoStudio создает современные, быстрые сайты, соответствующие вашему бренду.', clientCta: 'Я клиент', recruiterCta: 'Я рекрутер', trustItems: ['Премиальные сайты', 'React и TypeScript', 'Mobile-first UX', 'Профессиональная сдача'], pathsEyebrow: 'Два пути, один стандарт', pathsTitle: 'Выберите путь, который подходит вашей задаче.', pathsDescription: 'Каждый вход адаптирован под свою аудиторию.', paths: [{ title: 'Клиентский проект и услуги', eyebrow: 'Путь услуг', description: 'Путь для ясной презентации ваших предложений, усиления доверия и превращения посетителей в качественные заявки.', hrefId: 'freelance', ctaLabel: 'Посмотреть услуги' }, { title: 'Профиль разработчика и карьера', eyebrow: 'Карьерный путь', description: 'Пространство для демонстрации навыков, технических проектов и профессионального подхода.', hrefId: 'job', ctaLabel: 'Посмотреть профиль' }] },
  contactPage: { ...en.contactPage, heroEyebrow: 'Контакт MatoStudio Agency', heroTitle: 'Обсудим ваш следующий премиальный сайт.', heroDescription: 'Опишите вашу задачу. Я отвечу ясно, структурированно и профессионально.', estimateCta: 'Оценить проект', directCta: 'Написать напрямую', formEyebrow: 'Бриф проекта', formTitle: 'Понятная форма для уточнения запроса.', formDescription: 'Форма автоматически подготовит полное письмо для начала общения.', fields: { name: 'Имя', email: 'Email', phone: 'Телефон необязательно', projectType: 'Тип проекта', budget: 'Оценочный бюджет', timeline: 'Желаемый срок', message: 'Сообщение', select: 'Выбрать', placeholder: 'Опишите деятельность, предполагаемые страницы, цели и важные ограничения.' }, options: ruOptions, submit: 'Отправить запрос', initialStatus: 'Здесь не запрашиваются платежи или чувствительные данные.', preparedStatus: 'Письмо готово. Проверьте его и отправьте из почты.', sideTitle: 'Структурированный, профессиональный и надежный обмен.', sideDescription: 'Первичное уточнение до обязательств: объем, контент, сроки, приоритеты и уровень отделки.', reassuranceEyebrow: 'Гарантии', reassuranceTitle: 'Вы знаете, что будет после отправки.', reassuranceItems: [{ title: 'Понятный ответ', description: 'Первый ясный отклик по реализуемости и направлению.' }, { title: 'Уточнение задачи', description: 'Цели, страницы, контент и приоритеты уточняются до сметы.' }, { title: 'Индивидуальная смета', description: 'Каждая оценка адаптируется под уровень отделки.' }, { title: 'Профессиональное сопровождение', description: 'Метод, коммуникация и проверки встроены в проект.' }] },
  quotePage: { heroEyebrow: 'Пошаговая смета', heroTitle: 'Оцените первый бюджет для вашего веб-проекта.', heroDescription: 'Выберите тип проекта, объем страниц, опции и желаемый срок.', proofs: ['Front-end оценка', 'Ориентировочные цены', 'Видимые опции'], nextEyebrow: 'Следующий шаг', nextTitle: 'Превратим оценку в рабочую смету.', nextDescription: 'Уточнение подтверждает страницы, контент, опции, ограничения и реальный график.', contactCta: 'Связаться со студией', paymentCta: 'Посмотреть будущую оплату' },
  paymentPage: { ...en.paymentPage, heroEyebrow: 'Подготовка оплаты', heroTitle: 'Визуальная база для будущей безопасной оплаты.', heroDescription: 'Оплата будет активирована только после подтверждения сметы.', quoteCta: 'Запросить смету', simulateCta: 'Оценить бюджет', methodsEyebrow: 'Планируемые способы', methodsTitle: 'Несколько вариантов, включаются только после согласия.', methodsDescription: 'Будущая интеграция останется отдельной и безопасной.', securityEyebrow: 'Безопасность', securityTitle: 'Нет реальной оплаты до подтверждения сметы.', securityDescription: 'Здесь нет секретных ключей, backend-вызовов или реальных транзакций.', methods: [{ title: 'Stripe', description: 'Оплата картой и безопасный путь.', status: 'Планируется' }, { title: 'PayPal', description: 'Дополнительный вариант оплаты.', status: 'Планируется' }, { title: 'Банковский перевод', description: 'Простое решение по подписанной смете.', status: 'Доступно по смете' }], reassuranceItems: [{ title: 'Подтверждение до оплаты', description: 'Оплата после уточнения, сметы и согласия клиента.' }, { title: 'Без встроенных ключей', description: 'Визуальная подготовка без секретов или API.' }, { title: 'Безопасный путь', description: 'Надежные провайдеры при активации.' }] },
  freelancePage: { heroEyebrow: 'Путь услуг', heroTitle: 'MatoStudio — Премиальные сайты для фрилансеров, мастеров и малого бизнеса', heroDescription: 'Я создаю современные, быстрые и надежные сайты, которые превращают посетителей в заявки.', primaryCta: 'Запросить смету', secondaryCta: 'Посмотреть услуги' },
  jobPage: { heroEyebrow: 'Карьерный профиль', heroTitle: 'Web и mobile web разработчик — профиль, ориентированный на проект, качество и рост', heroDescription: 'Я ищу возможность участвовать в серьезных веб-проектах с чистым методом работы.', primaryCta: 'Связаться со мной', secondaryCta: 'Посмотреть GitHub' },
  quoteSimulator: { ...en.quoteSimulator, steps: ['Проект', 'Страницы', 'Опции', 'Срок', 'Итог'], eyebrow: 'Пошаговый симулятор', title: 'Соберите первую оценку за несколько шагов.', estimate: 'Оценка', back: 'Назад', continue: 'Продолжить', requestQuote: 'Запросить эту смету', stepsAria: 'Шаги симулятора', pageCount: 'Оценочное число страниц', quickChoicesAria: 'Быстрый выбор числа страниц', pageContext: 'Выбранная база включает {includedPages}. Дополнительные страницы оцениваются по {extraPagePrice} каждая.', summaryEyebrow: 'Ориентировочный итог', summaryNote: 'Эта оценка дает первый бюджетный диапазон до финальной сметы.', baseChosen: 'Выбранная база', pagesLabel: 'Страницы', supplement: 'дополнительно', selectedOptions: 'Выбранные опции', desiredDeadline: 'Желаемый срок', adjustment: 'корректировка', projectTypes: ruQuoteProjectTypes, options: ruQuoteOptions, deadlines: ruQuoteDeadlines },
}

export const translations: Record<Language, TranslationCopy> = { fr, en, zh, ru }
