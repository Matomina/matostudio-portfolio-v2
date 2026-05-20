import type { QuoteDeadlineId, QuoteOptionId, QuoteProjectTypeId } from '@/types/agency.types'

export type Language = 'fr' | 'en' | 'zh' | 'ru'

export type NavigationItemId = 'home' | 'quote' | 'freelance' | 'job'
export type FooterLinkId = 'contact' | 'quote' | 'payment' | 'legal' | 'privacy'

type LocalizedFormOptions = {
  projectTypes: Record<string, string>
  budgets: Record<string, string>
  timelines: Record<string, string>
}

export type TranslationCopy = {
  languageName: string
  navigation: Record<NavigationItemId, string>
  header: {
    homeAria: string
    navAria: string
    mobileNavAria: string
    menuOpen: string
    menuClose: string
    contact: string
    themeToLight: string
    themeToDark: string
    languageToggle: string
  }
  footer: {
    brandAria: string
    description: string
    linksAria: string
    socialsAria: string
    copyright: string
    links: Record<FooterLinkId, string>
  }
  common: {
    page: string
    pages: string
    included: string
    base: string
    none: string
  }
  home: {
    eyebrow: string
    title: string
    description: string
    clientCta: string
    recruiterCta: string
    trustItems: readonly string[]
    pathsEyebrow: string
    pathsTitle: string
    pathsDescription: string
    paths: readonly {
      title: string
      eyebrow: string
      description: string
      hrefId: 'freelance' | 'job'
      ctaLabel: string
    }[]
  }
  contactPage: {
    heroEyebrow: string
    heroTitle: string
    heroDescription: string
    estimateCta: string
    directCta: string
    formEyebrow: string
    formTitle: string
    formDescription: string
    fields: {
      name: string
      email: string
      phone: string
      projectType: string
      budget: string
      timeline: string
      message: string
      select: string
      placeholder: string
    }
    options: LocalizedFormOptions
    submit: string
    initialStatus: string
    preparedStatus: string
    sideTitle: string
    sideDescription: string
    reassuranceEyebrow: string
    reassuranceTitle: string
    reassuranceItems: readonly {
      title: string
      description: string
    }[]
  }
  quotePage: {
    heroEyebrow: string
    heroTitle: string
    heroDescription: string
    proofs: readonly string[]
    nextEyebrow: string
    nextTitle: string
    nextDescription: string
    contactCta: string
    paymentCta: string
  }
  paymentPage: {
    heroEyebrow: string
    heroTitle: string
    heroDescription: string
    quoteCta: string
    simulateCta: string
    methodsEyebrow: string
    methodsTitle: string
    methodsDescription: string
    securityEyebrow: string
    securityTitle: string
    securityDescription: string
    methods: readonly {
      title: string
      description: string
      status: string
    }[]
    reassuranceItems: readonly {
      title: string
      description: string
    }[]
  }
  freelancePage: {
    heroEyebrow: string
    heroTitle: string
    heroDescription: string
    primaryCta: string
    secondaryCta: string
  }
  jobPage: {
    heroEyebrow: string
    heroTitle: string
    heroDescription: string
    primaryCta: string
    secondaryCta: string
  }
  quoteSimulator: {
    steps: readonly string[]
    eyebrow: string
    title: string
    estimate: string
    back: string
    continue: string
    requestQuote: string
    stepsAria: string
    pageCount: string
    quickChoicesAria: string
    pageContext: string
    summaryEyebrow: string
    summaryNote: string
    baseChosen: string
    pagesLabel: string
    supplement: string
    selectedOptions: string
    desiredDeadline: string
    adjustment: string
    projectTypes: Record<QuoteProjectTypeId, { label: string; description: string }>
    options: Record<QuoteOptionId, { label: string; description: string }>
    deadlines: Record<QuoteDeadlineId, { label: string; description: string }>
  }
}
