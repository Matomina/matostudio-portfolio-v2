import { Facebook, Github, Instagram, Linkedin } from 'lucide-react'

import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/data/site.config'
import logo from '@/assets/brand/matostudio-logo.png'

const socials = [
  {
    label: 'GitHub',
    href: siteConfig.links.github,
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: siteConfig.links.linkedin,
    icon: Linkedin,
  },
  {
    label: 'Instagram',
    href: siteConfig.links.instagram,
    icon: Instagram,
  },
  {
    label: 'Facebook',
    href: siteConfig.links.facebook,
    icon: Facebook,
  },
] as const

function TikTokIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="site-footer__social-svg">
      <path
        fill="currentColor"
        d="M16.6 5.1c.7.9 1.7 1.5 2.9 1.7v3.1a7 7 0 0 1-3.1-.8v5.8a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v3.2c-.3-.1-.6-.1-.9-.1a2.3 2.3 0 1 0 2.3 2.3V3.5h3.2c0 .6.1 1.1.2 1.6Z"
      />
    </svg>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div className="site-footer__brand-block">
          <a href="#accueil" className="site-footer__brand" aria-label="Retour à l’accueil MatoStudio">
            <img src={logo} alt="MatoStudio" />
          </a>

          <p className="site-footer__description silver-text">
            MatoStudio conçoit des sites web premium, rapides et orientés conversion pour donner
            une présence digitale solide aux marques ambitieuses.
          </p>
        </div>

        <nav className="site-footer__socials" aria-label="Réseaux sociaux MatoStudio">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href || '#'}
              target={href ? '_blank' : undefined}
              rel={href ? 'noreferrer' : undefined}
              aria-label={label}
              aria-disabled={!href}
              className={!href ? 'is-disabled' : undefined}
            >
              <Icon aria-hidden="true" size={18} strokeWidth={2.1} />
            </a>
          ))}

          <a
            href={siteConfig.links.tiktok || '#'}
            target={siteConfig.links.tiktok ? '_blank' : undefined}
            rel={siteConfig.links.tiktok ? 'noreferrer' : undefined}
            aria-label="TikTok"
            aria-disabled={!siteConfig.links.tiktok}
            className={!siteConfig.links.tiktok ? 'is-disabled' : undefined}
          >
            <TikTokIcon />
          </a>
        </nav>
      </Container>

      <Container className="site-footer__copyright">
        <p>
          © {currentYear} {siteConfig.name}. Tous droits réservés.
        </p>
      </Container>
    </footer>
  )
}
