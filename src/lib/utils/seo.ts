import { seoConfig, siteUrl, type SeoRouteKey } from '@/data/seo.config'

const DEFAULT_IMAGE = '/social-preview/matostudio-og.png'

function updateMetaByName(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('name', name)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function updateMetaByProperty(property: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('property', property)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function updateCanonical(url: string) {
  let element = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }

  element.setAttribute('href', url)
}

export function updateSeoMetadata(routeKey: SeoRouteKey) {
  const metadata = seoConfig[routeKey]
  const canonicalUrl = `${siteUrl}${metadata.path === '/' ? '' : metadata.path}`

  document.title = metadata.title

  updateMetaByName('description', metadata.description)
  updateMetaByName('twitter:title', metadata.title)
  updateMetaByName('twitter:description', metadata.description)
  updateMetaByName('twitter:image', DEFAULT_IMAGE)
  updateMetaByProperty('og:title', metadata.title)
  updateMetaByProperty('og:description', metadata.description)
  updateMetaByProperty('og:url', canonicalUrl)
  updateMetaByProperty('og:image', DEFAULT_IMAGE)
  updateCanonical(canonicalUrl)
}
