import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { seoConfig, type SeoRouteKey } from '@/data/seo.config'
import { updateSeoMetadata } from '@/lib/utils/seo'

const routeKeyByPath = Object.entries(seoConfig).reduce<Record<string, SeoRouteKey>>(
  (routeMap, [routeKey, metadata]) => ({
    ...routeMap,
    [metadata.path]: routeKey as SeoRouteKey,
  }),
  {},
)

export function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    updateSeoMetadata(routeKeyByPath[pathname] ?? 'notFound')
  }, [pathname])

  return null
}
