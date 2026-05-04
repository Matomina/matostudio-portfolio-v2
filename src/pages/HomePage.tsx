import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/ui/Container'
import { SkipLink } from '@/components/ui/SkipLink'
import { freelancePageContent } from '@/data/freelance.data'
import { jobPageContent } from '@/data/job.data'

const portfolioEntries = [
  {
    title: freelancePageContent.title,
    eyebrow: freelancePageContent.eyebrow,
    description: freelancePageContent.description,
    href: freelancePageContent.primaryCta.href,
    ctaLabel: 'Entrer côté freelance',
  },
  {
    title: jobPageContent.title,
    eyebrow: jobPageContent.eyebrow,
    description: jobPageContent.description,
    href: jobPageContent.primaryCta.href,
    ctaLabel: 'Entrer côté emploi',
  },
] as const

export function HomePage() {
  return (
    <>
      <SkipLink />
      <Header />

      <main id="main-content">
        <Container className="page-shell">
          <section className="status-section" aria-labelledby="home-title">
            <p className="section-eyebrow">MatoStudio Portfolio V2</p>

            <h1 id="home-title">Deux portfolios distincts, un seul socle professionnel.</h1>

            <p>
              Ce projet sépare clairement le parcours client freelance et le parcours recruteur,
              tout en gardant une base React, TypeScript et GitHub propre.
            </p>

            <div className="status-grid">
              {portfolioEntries.map((entry) => (
                <article className="status-card" key={entry.href}>
                  <span>{entry.eyebrow}</span>
                  <h2>{entry.title}</h2>
                  <p>{entry.description}</p>

                  <ButtonLink href={entry.href} variant="primary">
                    {entry.ctaLabel}
                  </ButtonLink>
                </article>
              ))}
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  )
}
