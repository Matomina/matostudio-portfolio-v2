import { siteConfig } from '@/data/site.config'

import type { ContactItem } from '@/types/contact.types'

export const contactItems: readonly ContactItem[] = [
  {
    id: 'email',
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    id: 'phone',
    label: 'Téléphone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replaceAll(' ', '')}`,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/Matomina',
    href: siteConfig.links.github,
  },
] as const
