import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Container } from '@/components/ui/Container'
import { SkipLink } from '@/components/ui/SkipLink'

export function LegalPage() {
  return (
    <>
      <SkipLink />
      <Header />

      <main id="main-content">
        <Container className="page-shell">
          <section className="status-section" aria-labelledby="legal-title">
            <p className="section-eyebrow">Informations légales</p>
            <h1 id="legal-title">Mentions légales</h1>
            <p>
              Cette page servira de base pour les informations légales du portfolio MatoStudio
              lorsque le site sera prêt pour la production.
            </p>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  )
}
