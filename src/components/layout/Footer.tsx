import { Container } from '@/components/ui/Container'
import logo from '@/assets/brand/matostudioagency-logo.png'
import { siteConfig } from '@/data/site.config'

type SocialIconName = 'github' | 'linkedin' | 'instagram' | 'facebook' | 'tiktok'

type SocialLink = {
  label: string
  href: string
  icon: SocialIconName
}

const socials: SocialLink[] = [
  {
    label: 'GitHub',
    href: siteConfig.links.github,
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: siteConfig.links.linkedin,
    icon: 'linkedin',
  },
  {
    label: 'Instagram',
    href: siteConfig.links.instagram,
    icon: 'instagram',
  },
  {
    label: 'Facebook',
    href: siteConfig.links.facebook,
    icon: 'facebook',
  },
  {
    label: 'TikTok',
    href: siteConfig.links.tiktok,
    icon: 'tiktok',
  },
]

function SocialIcon({ name }: { name: SocialIconName }) {
  const paths: Record<SocialIconName, string> = {
    github:
      'M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z',
    linkedin:
      'M4.98 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM.32 8.1h4.3v13.8H.32V8.1Zm7.04 0h4.12v1.9h.06c.57-1.08 1.98-2.22 4.08-2.22 4.36 0 5.17 2.87 5.17 6.6v7.52h-4.3v-6.67c0-1.6-.03-3.64-2.22-3.64-2.22 0-2.56 1.73-2.56 3.52v6.79H7.36V8.1Z',
    instagram:
      'M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm5-2.1a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z',
    facebook:
      'M13.6 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4v3.2h2.8V22h3.4Z',
    tiktok:
      'M16.6 5.1c.7.9 1.7 1.5 2.9 1.7v3.1a7 7 0 0 1-3.1-.8v5.8a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v3.2c-.3-.1-.6-.1-.9-.1a2.3 2.3 0 1 0 2.3 2.3V3.5h3.2c0 .6.1 1.1.2 1.6Z',
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="site-footer__social-svg">
      <path fill="currentColor" d={paths[name]} />
    </svg>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div className="site-footer__brand-block">
          <a href="#accueil" className="site-footer__brand" aria-label="Retour à l’accueil MatoStudio Agency">
            <img src={logo} alt="MatoStudio Agency" />
          </a>

          <p className="site-footer__description silver-text">
            MatoStudio Agency est une agence de développement web premium qui conçoit des sites
            rapides, élégants et orientés conversion pour les marques ambitieuses.
          </p>
        </div>

        <nav className="site-footer__socials" aria-label="Réseaux sociaux MatoStudio Agency">
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href || '#'}
              target={href ? '_blank' : undefined}
              rel={href ? 'noreferrer' : undefined}
              aria-label={label}
              aria-disabled={!href}
              className={!href ? 'is-disabled' : undefined}
            >
              <SocialIcon name={icon} />
            </a>
          ))}
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
