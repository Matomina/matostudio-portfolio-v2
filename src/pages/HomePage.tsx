import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { HeroSection } from '@/components/sections/HeroSection'
import { Container } from '@/components/ui/Container'

const statusItems = [
  'Architecture React propre',
  'Branding MatoStudio intégré',
  'Styles globaux préparés',
  'Base scalable pour portfolio premium',
] as const

export function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Container className="page-shell">
          <HeroSection />

          <section className="status-section" aria-labelledby="status-title">
            <h2 id="status-title">Socle en cours de construction</h2>

            <div className="status-grid">
              {statusItems.map((item) => (
                <article className="status-card" key={item}>
                  <span>{item}</span>
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
