import { useEffect, useState } from 'react'
import { Languages, Menu, Moon, Sun, X } from 'lucide-react'
import { NavLink, Link as RouterLink } from 'react-router-dom'

import matostudioLogo from '@/assets/brand/matostudioagency-logo.png'
import { navigationItems } from '@/data/navigation.data'
import { siteConfig } from '@/data/site.config'
import { useLanguage } from '@/hooks/useLanguage'
import { useTheme } from '@/hooks/useTheme'
import { ROUTES } from '@/lib/constants/routes'

import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/ui/Container'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, copy, toggleLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const isDarkTheme = theme === 'dark'

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
        <RouterLink
          to={ROUTES.home}
          className="site-header__brand"
          aria-label={copy.header.homeAria}
        >
          <img src={matostudioLogo} alt={siteConfig.name} />
        </RouterLink>

        <nav className="site-header__nav" aria-label={copy.header.navAria}>
          {navigationItems.map((item) => (
            <NavLink
              to={item.href}
              key={item.href}
              end={item.href === ROUTES.home}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {copy.navigation[item.id]}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions" aria-label="Préférences et contact">
          <button
            className="site-header__tool-button"
            type="button"
            aria-label={isDarkTheme ? copy.header.themeToLight : copy.header.themeToDark}
            onClick={toggleTheme}
          >
            {isDarkTheme ? (
              <Sun size={18} aria-hidden="true" />
            ) : (
              <Moon size={18} aria-hidden="true" />
            )}
          </button>

          <button
            className="site-header__language-button"
            type="button"
            aria-label={copy.header.languageToggle}
            onClick={toggleLanguage}
          >
            <Languages size={17} aria-hidden="true" />
            {language === 'fr' ? 'EN' : 'FR'}
          </button>

          <ButtonLink href={ROUTES.contact} variant="primary" className="site-header__cta">
            {copy.header.contact}
          </ButtonLink>
        </div>

        <button
          className="site-header__menu-button"
          type="button"
          aria-label={isMenuOpen ? copy.header.menuClose : copy.header.menuOpen}
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
          <nav className="mobile-menu__nav" aria-label={copy.header.mobileNavAria}>
            {navigationItems.map((item) => (
              <NavLink
                to={item.href}
                key={item.href}
                end={item.href === ROUTES.home}
                onClick={closeMobileMenu}
                className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              >
                {copy.navigation[item.id]}
              </NavLink>
            ))}
          </nav>

          <div className="mobile-menu__tools" aria-label="Préférences">
            <button
              className="site-header__tool-button"
              type="button"
              aria-label={isDarkTheme ? copy.header.themeToLight : copy.header.themeToDark}
              onClick={toggleTheme}
            >
              {isDarkTheme ? (
                <Sun size={18} aria-hidden="true" />
              ) : (
                <Moon size={18} aria-hidden="true" />
              )}
              <span>{isDarkTheme ? 'Light' : 'Dark'}</span>
            </button>

            <button
              className="site-header__language-button"
              type="button"
              aria-label={copy.header.languageToggle}
              onClick={toggleLanguage}
            >
              <Languages size={17} aria-hidden="true" />
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>

          <ButtonLink
            href={ROUTES.contact}
            variant="primary"
            className="mobile-menu__cta"
            onClick={closeMobileMenu}
          >
            {copy.header.contact}
          </ButtonLink>
        </Container>
      </div>
    </header>
  )
}
