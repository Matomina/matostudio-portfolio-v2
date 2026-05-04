import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/ui/Container'
import { SkipLink } from '@/components/ui/SkipLink'
import { jobPageContent } from '@/data/job.data'

export function JobPage() {
  return (
    <>
      <SkipLink />
      <Header />

      <main id="main-content">
        <Container className="page-shell">
          <section className="status-section" aria-labelledby="job-title">
            <p className="section-eyebrow">{jobPageContent.eyebrow}</p>

            <h1 id="job-title">{jobPageContent.title}</h1>

            <p>{jobPageContent.description}</p>

            <div className="status-grid">
              {jobPageContent.highlights.map((highlight) => (
                <article className="status-card" key={highlight}>
                  <span>{highlight}</span>
                </article>
              ))}
            </div>

            <div className="hero-actions">
              <ButtonLink href={jobPageContent.secondaryCta.href} variant="secondary">
                {jobPageContent.secondaryCta.label}
              </ButtonLink>
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  )
}
