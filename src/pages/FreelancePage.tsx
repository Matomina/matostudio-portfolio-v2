import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/ui/Container'
import { SkipLink } from '@/components/ui/SkipLink'
import { freelancePageContent } from '@/data/freelance.data'

export function FreelancePage() {
  return (
    <>
      <SkipLink />
      <Header />

      <main id="main-content">
        <Container className="page-shell">
          <section className="status-section" aria-labelledby="freelance-title">
            <p className="section-eyebrow">{freelancePageContent.eyebrow}</p>

            <h1 id="freelance-title">{freelancePageContent.title}</h1>

            <p>{freelancePageContent.description}</p>

            <div className="status-grid">
              {freelancePageContent.highlights.map((highlight) => (
                <article className="status-card" key={highlight}>
                  <span>{highlight}</span>
                </article>
              ))}
            </div>

            <div className="hero-actions">
              <ButtonLink href={freelancePageContent.secondaryCta.href} variant="primary">
                {freelancePageContent.secondaryCta.label}
              </ButtonLink>
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  )
}
