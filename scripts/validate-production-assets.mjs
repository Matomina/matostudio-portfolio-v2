import { existsSync, readFileSync } from 'node:fs'

const requiredFiles = ['public/robots.txt', 'public/sitemap.xml', 'public/favicon/favicon.svg']
const requiredRoutes = [
  'https://matostudio.fr/',
  'https://matostudio.fr/freelance',
  'https://matostudio.fr/emploi',
  'https://matostudio.fr/contact',
  'https://matostudio.fr/devis',
  'https://matostudio.fr/paiement',
  'https://matostudio.fr/mentions-legales',
  'https://matostudio.fr/politique-de-confidentialite',
]

const errors = []

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    errors.push(`Missing required file: ${file}`)
  }
}

if (existsSync('public/robots.txt')) {
  const robots = readFileSync('public/robots.txt', 'utf8')

  if (!robots.includes('User-agent: *')) {
    errors.push('robots.txt must include User-agent: *')
  }

  if (!robots.includes('Sitemap: https://matostudio.fr/sitemap.xml')) {
    errors.push('robots.txt must reference the production sitemap URL')
  }
}

if (existsSync('public/sitemap.xml')) {
  const sitemap = readFileSync('public/sitemap.xml', 'utf8')

  if (!sitemap.includes('http://www.sitemaps.org/schemas/sitemap/0.9')) {
    errors.push('sitemap.xml must use the official sitemap namespace')
  }

  for (const route of requiredRoutes) {
    if (!sitemap.includes(`<loc>${route}</loc>`)) {
      errors.push(`sitemap.xml is missing route: ${route}`)
    }
  }
}

if (errors.length > 0) {
  console.error('Production asset validation failed:')
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}

console.log('Production assets validation passed.')
