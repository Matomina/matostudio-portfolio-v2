import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SkipLink } from '@/components/ui/SkipLink'
import matostudioAgencyLogo from '@/assets/brand/matostudioagency-logo.png'
import { useLanguage } from '@/hooks/useLanguage'
import { ROUTES } from '@/lib/constants/routes'

export function HomePage() {
  const { copy } = useLanguage()

  return (
    <>
      <SkipLink />
      <Header />

      <main id="main-content" className="home-page">
        <Container id="accueil" className="home-hero">
          <Reveal className="home-hero__content">
            <p className="section-eyebrow">{copy.home.eyebrow}</p>

            <img src={matostudioAgencyLogo} alt="MatoStudio Agency" className="home-hero__logo" />

            <h1 id="home-title">{copy.home.title}</h1>

            <p className="home-hero__description">{copy.home.description}</p>

            <div className="home-hero__actions" aria-label="Choix du parcours portfolio">
              <ButtonLink href={ROUTES.freelance} variant="primary" size="lg">
                {copy.home.clientCta}
              </ButtonLink>

              <ButtonLink href={ROUTES.job} variant="secondary" size="lg">
                {copy.home.recruiterCta}
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal
            className="home-hero__panel"
            aria-label="Positionnement MatoStudio Agency"
            delay={0.1}
          >
            {copy.home.trustItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </Reveal>
        </Container>

        <Container className="home-paths" aria-labelledby="home-paths-title">
          <Reveal className="section-header home-paths__header">
            <p className="section-header__eyebrow">{copy.home.pathsEyebrow}</p>
            <h2 id="home-paths-title" className="section-header__title">
              {copy.home.pathsTitle}
            </h2>
            <p className="section-header__description">{copy.home.pathsDescription}</p>
          </Reveal>

          <div className="home-paths__grid">
            {copy.home.paths.map((entry, index) => (
              <Reveal className="home-path-card" key={entry.hrefId} delay={index * 0.08}>
                <p className="home-path-card__eyebrow">{entry.eyebrow}</p>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>

                <ButtonLink href={ROUTES[entry.hrefId]} variant="secondary">
                  {entry.ctaLabel}
                </ButtonLink>
              </Reveal>
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </>
  )
}
