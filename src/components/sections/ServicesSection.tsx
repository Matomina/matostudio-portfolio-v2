import { services } from '@/data/services.data'

export function ServicesSection() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="section-heading">
        <p className="eyebrow">Services</p>

        <h2 id="services-title">Des services web clairs, utiles et orientés résultat.</h2>

        <p>
          Une offre pensée pour accompagner les indépendants, petites structures et projets
          professionnels qui veulent une présence web sérieuse, moderne et crédible.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.id}>
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
