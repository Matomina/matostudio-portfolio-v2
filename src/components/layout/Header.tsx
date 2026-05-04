import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink, Link as RouterLink } from 'react-router-dom'

import matostudioLogo from '@/assets/brand/matostudio-logo.png'
import { navigationItems } from '@/data/navigation.data'
import { siteConfig } from '@/data/site.config'
import { ROUTES } from '@/lib/constants/routes'

import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/ui/Container'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMobileMenu() {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    document.body.classList.toggle('is-mobile-menu-open', isMenuOpen)

    return () => {
      document.body.classList.remove('is-mobile-menu-open')
    }
  }, [isMenuOpen])

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <RouterLink to={ROUTES.home} className="site-header__brand" aria-label="Retour à l’accueil">
          <img src={matostudioLogo} alt={siteConfig.name} />
        </RouterLink>

        <nav className="site-header__nav" aria-label="Navigation principale">
          {navigationItems.map((item) => (
            <NavLink
              to={item.href}
              key={item.href}
              end={item.href === ROUTES.home}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <ButtonLink
          href={`mailto:${siteConfig.email}`}
          variant="primary"
          className="site-header__cta"
        >
          Me contacter
        </ButtonLink>

        <button
          className="site-header__menu-button"
          type="button"
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </Container>

      <div
        className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
      >
        <Container className="mobile-menu__inner">
          <nav className="mobile-menu__nav" aria-label="Navigation mobile">
            {navigationItems.map((item) => (
              <NavLink
                to={item.href}
                key={item.href}
                end={item.href === ROUTES.home}
                onClick={closeMobileMenu}
                className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <ButtonLink
            href={`mailto:${siteConfig.email}`}
            variant="primary"
            className="mobile-menu__cta"
            onClick={closeMobileMenu}
          >
            Me contacter
          </ButtonLink>
        </Container>
      </div>
    </header>
  )
}
