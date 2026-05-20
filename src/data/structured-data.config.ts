import { siteConfig } from '@/data/site.config'
import { siteUrl } from '@/data/seo.config'

export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteConfig.name,
  url: siteUrl,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  areaServed: 'France',
  serviceType: [
    'Création de site web',
    'Développement front-end React',
    'Refonte de site web',
    'Optimisation SEO technique',
    'Développement web mobile',
  ],
  sameAs: [siteConfig.links.github].filter(Boolean),
} as const
