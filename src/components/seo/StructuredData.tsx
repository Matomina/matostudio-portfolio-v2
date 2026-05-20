import { organizationStructuredData } from '@/data/structured-data.config'

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
    />
  )
}
