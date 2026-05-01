import type { CSSProperties } from 'react'

import { ButtonLink } from '@/components/ui/ButtonLink'
import { contactItems } from '@/data/contact.data'
import { siteConfig } from '@/data/site.config'

function revealDelay(delay: number): CSSProperties {
  return {
    '--reveal-delay': `${delay}ms`,
  } as CSSProperties
}

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-panel" data-reveal="soft">
        <div className="section-heading">
          <p className="eyebrow" data-reveal="soft" style={revealDelay(120)}>
            Contact
          </p>

          <h2 id="contact-title" data-reveal="soft" style={revealDelay(240)}>
            Un projet, une opportunité ou une collaboration ?
          </h2>

          <p data-reveal="soft" style={revealDelay(360)}>
            Je construis MatoStudio comme une vitrine professionnelle sérieuse. Pour une mission,
            une opportunité ou un échange autour d’un projet web, le plus simple est de me contacter
            directement.
          </p>
        </div>

        <div className="contact-actions" data-reveal="soft" style={revealDelay(480)}>
          <ButtonLink href={`mailto:${siteConfig.email}`} variant="primary">
            Envoyer un email
          </ButtonLink>

          <ButtonLink
            href={siteConfig.links.github}
            variant="secondary"
            target="_blank"
            rel="noreferrer"
          >
            Voir mon GitHub
          </ButtonLink>
        </div>

        <div className="contact-grid">
          {contactItems.map((item, index) => (
            <a
              className="contact-card"
              href={item.href}
              key={item.id}
              data-reveal="card"
              style={revealDelay((index + 1) * 140)}
            >
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
