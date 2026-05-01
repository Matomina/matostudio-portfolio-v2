import matostudioLogo from '@/assets/brand/matostudio-logo.png'
import { siteConfig } from '@/data/site.config'

import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/ButtonLink'

import { navigationItems } from '@/data/navigation.data'

export function Header() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a href="/" className="site-header__brand" aria-label="Retour à l’accueil">
          <img src={matostudioLogo} alt={siteConfig.name} />
        </a>

        <nav className="site-header__nav" aria-label="Navigation principale">
          {navigationItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonLink
          href={`mailto:${siteConfig.email}`}
          variant="primary"
          className="site-header__cta"
        >
          Me contacter
        </ButtonLink>
      </Container>
    </header>
  )
}
