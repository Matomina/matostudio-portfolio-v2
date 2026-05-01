import { siteConfig } from '@/data/site.config'

import { Container } from '@/components/ui/Container'

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
        </p>

        <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </Container>
    </footer>
  )
}
