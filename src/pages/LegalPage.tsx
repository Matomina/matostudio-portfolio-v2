import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Container } from '@/components/ui/Container'
import { SkipLink } from '@/components/ui/SkipLink'
import { siteConfig } from '@/data/site.config'
import { ROUTES } from '@/lib/constants/routes'

const legalSections = [
  {
    title: 'Éditeur du site',
    content:
      'Le site est édité par MatoStudio, activité indépendante spécialisée dans la conception, le développement et la maintenance de sites web modernes, performants et orientés résultats.',
  },
  {
    title: 'Responsable de publication',
    content:
      'Le responsable de publication est le représentant de MatoStudio. Pour toute question relative au site ou à son contenu, un contact peut être effectué par e-mail.',
  },
  {
    title: 'Hébergement',
    content:
      'Les informations définitives relatives à l’hébergeur du site seront précisées avant la mise en production finale, selon la plateforme de déploiement retenue.',
  },
  {
    title: 'Propriété intellectuelle',
    content:
      'Les textes, visuels, logos, éléments graphiques, interfaces, composants et contenus présents sur ce site sont protégés. Toute reproduction ou réutilisation non autorisée est interdite.',
  },
  {
    title: 'Responsabilité',
    content:
      'MatoStudio s’efforce de fournir des informations fiables et à jour. Toutefois, le site peut évoluer et certaines informations peuvent être modifiées, complétées ou retirées sans préavis.',
  },
]

export function LegalPage() {
  return (
    <>
      <SkipLink />
      <Header />

      <main id="main-content">
        <Container className="page-shell legal-page-shell">
          <section className="legal-hero" aria-labelledby="legal-title">
            <p className="section-eyebrow">Informations légales</p>
            <h1 id="legal-title">Mentions légales</h1>
            <p>
              Cette page regroupe les informations essentielles concernant l’édition, la
              responsabilité, la propriété intellectuelle et le contact du site {siteConfig.name}.
            </p>
          </section>

          <section className="legal-content" aria-label="Détails des mentions légales">
            {legalSections.map((section) => (
              <article className="legal-card" key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </article>
            ))}

            <article className="legal-card legal-card--highlight">
              <h2>Contact légal</h2>
              <p>
                Pour toute demande relative aux mentions légales, vous pouvez contacter MatoStudio à
                l’adresse suivante : <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
              </p>
            </article>

            <article className="legal-card">
              <h2>Données personnelles</h2>
              <p>
                Le traitement des données personnelles est détaillé dans la{' '}
                <a href={ROUTES.privacy}>politique de confidentialité</a>.
              </p>
            </article>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  )
}
