import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/ui/Container'
import { SkipLink } from '@/components/ui/SkipLink'
import matostudioAgencyLogo from '@/assets/brand/matostudioagency-logo.png'
import { freelancePageContent } from '@/data/freelance.data'
import { jobPageContent } from '@/data/job.data'
import { ROUTES } from '@/lib/constants/routes'

const portfolioEntries = [
  {
    title: 'Projet client et freelance',
    eyebrow: freelancePageContent.hero.eyebrow,
    description:
      'Un parcours pense pour presenter les offres MatoStudio Agency, rassurer les clients et generer des demandes de projet qualifiees.',
    href: ROUTES.freelance,
    ctaLabel: 'Voir l offre freelance',
  },
  {
    title: 'Profil developpeur et emploi',
    eyebrow: jobPageContent.hero.eyebrow,
    description:
      'Un espace plus sobre pour valoriser les competences, les projets techniques et le serieux professionnel aupres des recruteurs.',
    href: ROUTES.job,
    ctaLabel: 'Voir le profil emploi',
  },
] as const

const trustItems = [
  'Sites premium',
  'React et TypeScript',
  'UX mobile-first',
  'Livraison professionnelle',
] as const

export function HomePage() {
  return (
    <>
      <SkipLink />
      <Header />

      <main id="main-content" className="home-page">
        <Container className="home-hero">
          <div className="home-hero__content">
            <p className="section-eyebrow">MatoStudio Agency</p>

            <img src={matostudioAgencyLogo} alt="MatoStudio Agency" className="home-hero__logo" />

            <h1 id="home-title">Une presence web premium, claire et pensee pour convertir.</h1>

            <p className="home-hero__description">
              MatoStudio Agency concoit des sites modernes, rapides et coherents avec l image de
              marque de chaque projet. Une base professionnelle, deux parcours lisibles : client et
              recruteur.
            </p>

            <div className="home-hero__actions" aria-label="Choix du parcours portfolio">
              <ButtonLink href={ROUTES.freelance} variant="primary" size="lg">
                Je suis un client
              </ButtonLink>

              <ButtonLink href={ROUTES.job} variant="secondary" size="lg">
                Je suis recruteur
              </ButtonLink>
            </div>
          </div>

          <div className="home-hero__panel" aria-label="Positionnement MatoStudio Agency">
            {trustItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Container>

        <Container className="home-paths" aria-labelledby="home-paths-title">
          <div className="section-header home-paths__header">
            <p className="section-header__eyebrow">Deux acces, une meme exigence</p>
            <h2 id="home-paths-title" className="section-header__title">
              Choisis le parcours qui correspond a ton besoin.
            </h2>
            <p className="section-header__description">
              Le site reste coherent visuellement, mais chaque entree garde un message adapte a son
              audience.
            </p>
          </div>

          <div className="home-paths__grid">
            {portfolioEntries.map((entry) => (
              <article className="home-path-card" key={entry.href}>
                <p className="home-path-card__eyebrow">{entry.eyebrow}</p>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>

                <ButtonLink href={entry.href} variant="secondary">
                  {entry.ctaLabel}
                </ButtonLink>
              </article>
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </>
  )
}
