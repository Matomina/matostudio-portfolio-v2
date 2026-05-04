import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/ui/Container'
import { SkipLink } from '@/components/ui/SkipLink'
import { ROUTES } from '@/lib/constants/routes'

export function NotFoundPage() {
  return (
    <>
      <SkipLink />
      <Header />

      <main id="main-content">
        <Container className="page-shell">
          <section className="status-section" aria-labelledby="not-found-title">
            <p className="section-eyebrow">Erreur 404</p>
            <h1 id="not-found-title">Page introuvable</h1>
            <p>La page demandée n’existe pas ou a été déplacée.</p>

            <ButtonLink href={ROUTES.home} variant="primary">
              Retour à l’accueil
            </ButtonLink>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  )
}
