import { contactItems } from '@/data/contact.data'
import { siteConfig } from '@/data/site.config'

import { ButtonLink } from '@/components/ui/ButtonLink'

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>

          <h2 id="contact-title">Un projet, une opportunité ou une collaboration ?</h2>

          <p>
            Je construis MatoStudio comme une vitrine professionnelle sérieuse. Pour une mission,
            une opportunité ou un échange autour d’un projet web, le plus simple est de me contacter
            directement.
          </p>
        </div>

        <div className="contact-actions">
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
          {contactItems.map((item) => (
            <a className="contact-card" href={item.href} key={item.id}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
