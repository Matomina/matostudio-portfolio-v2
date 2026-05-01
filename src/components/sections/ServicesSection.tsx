import type { CSSProperties } from 'react'

import { services } from '@/data/services.data'

function revealDelay(delay: number): CSSProperties {
  return {
    '--reveal-delay': `${delay}ms`,
  } as CSSProperties
}

export function ServicesSection() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="section-heading">
        <p className="eyebrow" data-reveal="soft">
          Services
        </p>

        <h2 id="services-title" data-reveal="soft" style={revealDelay(120)}>
          Des services web clairs, utiles et orientés résultat.
        </h2>

        <p data-reveal="soft" style={revealDelay(240)}>
          Une offre pensée pour accompagner les indépendants, petites structures et projets
          professionnels qui veulent une présence web sérieuse, moderne et crédible.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <article
            className="service-card"
            key={service.id}
            data-reveal="card"
            style={revealDelay(index * 140)}
          >
            <div>
              <p className="service-card__index">{service.id.replaceAll('-', ' / ')}</p>
              <h3>{service.title}</h3>
            </div>

            <p>{service.description}</p>

            <ul>
              {service.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
