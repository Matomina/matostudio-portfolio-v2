import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { QuoteSimulator } from '@/components/sections/QuoteSimulator'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SkipLink } from '@/components/ui/SkipLink'
import { freelancePageContent } from '@/data/freelance.data'
import { useLanguage } from '@/hooks/useLanguage'

function getFreelanceTitleParts(title: string) {
  const [brand, subtitle] = title.split('—').map((part) => part.trim())

  return {
    brand: brand || 'MatoStudio',
    subtitle: subtitle || title.replace('MatoStudio', '').trim(),
  }
}

export function FreelancePage() {
  const { copy } = useLanguage()
  const heroCopy = copy.freelancePage
  const titleParts = getFreelanceTitleParts(heroCopy.heroTitle)
  const { hero, problem, services, offers, process, projects, reassurance, faq, contact } =
    freelancePageContent

  return (
    <>
      <SkipLink />
      <Header />

      <main id="main-content">
        <section className="freelance-hero page-shell" aria-labelledby="freelance-title">
          <Container className="freelance-hero__layout" size="wide">
            <div className="freelance-hero__content">
              <p className="section-eyebrow">{heroCopy.heroEyebrow}</p>
              <h1 id="freelance-title" className="freelance-hero__title">
                <span className="freelance-hero__title-brand">{titleParts.brand}</span>
                <span className="freelance-hero__title-subtitle">{titleParts.subtitle}</span>
              </h1>
              <p className="freelance-hero__description">{heroCopy.heroDescription}</p>
              <div className="hero-actions">
                <ButtonLink href={hero.primaryCta.href} size="lg">
                  {heroCopy.primaryCta}
                </ButtonLink>
                <ButtonLink href={hero.secondaryCta.href} variant="secondary" size="lg">
                  {heroCopy.secondaryCta}
                </ButtonLink>
              </div>
            </div>

            <Card className="freelance-hero__panel" padding="lg" variant="premium">
              <p className="freelance-hero__panel-kicker">
                MatoStudio accompagne votre presence web
              </p>
              <div className="freelance-hero__stats">
                {hero.stats.map((stat) => (
                  <div className="freelance-stat" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </Card>
          </Container>
        </section>

        <section className="freelance-section" aria-labelledby="problem-title">
          <Container>
            <SectionHeader
              eyebrow={problem.eyebrow}
              title={problem.title}
              description={problem.description}
              className="freelance-section__header"
            />

            <div className="freelance-grid freelance-grid--three">
              {problem.pains.map((pain) => (
                <Card isInteractive key={pain.title}>
                  <h3>{pain.title}</h3>
                  <p>{pain.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="freelance-section" id="services" aria-labelledby="services-title">
          <Container>
            <SectionHeader
              eyebrow={services.eyebrow}
              title={services.title}
              description={services.description}
              className="freelance-section__header"
            />

            <div className="freelance-grid freelance-grid--four">
              {services.items.map((service, index) => (
                <Card isInteractive key={service.title}>
                  <p className="freelance-index">0{index + 1}</p>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="freelance-list">
                    {service.deliverables.map((deliverable) => (
                      <li key={deliverable}>{deliverable}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="freelance-section" aria-labelledby="offers-title">
          <Container>
            <SectionHeader
              eyebrow={offers.eyebrow}
              title={offers.title}
              description={offers.description}
              className="freelance-section__header"
            />

            <div className="freelance-grid freelance-grid--three">
              {offers.plans.map((plan) => (
                <Card
                  className="freelance-offer"
                  isInteractive
                  key={plan.name}
                  padding="lg"
                  variant={plan.highlighted ? 'premium' : 'surface'}
                >
                  <div>
                    <p className="freelance-index">{plan.name}</p>
                    <h3>{plan.price}</h3>
                    <p>{plan.description}</p>
                  </div>
                  <ul className="freelance-list">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="freelance-section quote-simulator-section">
          <Container>
            <QuoteSimulator />
          </Container>
        </section>

        <section className="freelance-section" aria-labelledby="process-title">
          <Container>
            <SectionHeader
              eyebrow={process.eyebrow}
              title={process.title}
              className="freelance-section__header"
            />

            <div className="freelance-process">
              {process.steps.map((step) => (
                <Card className="freelance-process__step" key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="freelance-section" aria-labelledby="projects-title">
          <Container>
            <SectionHeader
              eyebrow={projects.eyebrow}
              title={projects.title}
              className="freelance-section__header"
            />

            <div className="freelance-grid freelance-grid--three">
              {projects.items.map((project) => (
                <Card
                  className="freelance-project-card"
                  isInteractive
                  key={project.title}
                  padding="lg"
                  variant="strong"
                >
                  <p className="freelance-index">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="freelance-stack">
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <ButtonLink
                    href={project.href}
                    isExternal
                    size="sm"
                    variant="secondary"
                    className="freelance-project-card__link"
                  >
                    {project.ctaLabel}
                  </ButtonLink>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="freelance-section" aria-labelledby="reassurance-title">
          <Container>
            <Card className="freelance-reassurance" padding="lg" variant="premium">
              <SectionHeader
                eyebrow={reassurance.eyebrow}
                title={reassurance.title}
                className="freelance-section__header"
              />
              <div className="freelance-grid freelance-grid--four">
                {reassurance.items.map((item) => (
                  <div className="freelance-proof" key={item}>
                    <span>✓</span>
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
            </Card>
          </Container>
        </section>

        <section className="freelance-section" aria-labelledby="faq-title">
          <Container>
            <SectionHeader
              eyebrow={faq.eyebrow}
              title={faq.title}
              className="freelance-section__header"
            />

            <div className="freelance-faq">
              {faq.items.map((item) => (
                <Card key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section
          className="freelance-section freelance-section--final"
          aria-labelledby="contact-title"
        >
          <Container>
            <Card className="freelance-contact" padding="lg" variant="premium">
              <p className="section-eyebrow">{contact.eyebrow}</p>
              <h2 id="contact-title">{contact.title}</h2>
              <p>{contact.description}</p>
              <strong>{contact.email}</strong>

              <div className="hero-actions">
                <ButtonLink href={contact.primaryCta.href} size="lg">
                  {contact.primaryCta.label}
                </ButtonLink>
                <ButtonLink href={contact.secondaryCta.href} variant="secondary" size="lg">
                  {contact.secondaryCta.label}
                </ButtonLink>
              </div>
            </Card>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  )
}
