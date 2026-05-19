import { ArrowRight, BadgeEuro, CreditCard, ShieldCheck } from 'lucide-react'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { QuoteSimulator } from '@/components/sections/QuoteSimulator'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SkipLink } from '@/components/ui/SkipLink'
import { useLanguage } from '@/hooks/useLanguage'
import { ROUTES } from '@/lib/constants/routes'

export function QuotePage() {
  const { copy } = useLanguage()
  const quoteCopy = copy.quotePage

  return (
    <>
      <SkipLink />
      <Header />

      <main id="main-content" className="conversion-page quote-page">
        <section className="premium-hero" aria-labelledby="quote-page-title">
          <Container size="narrow">
            <Reveal className="premium-hero__content">
              <p className="section-eyebrow">{quoteCopy.heroEyebrow}</p>
              <h1 id="quote-page-title">{quoteCopy.heroTitle}</h1>
              <p>{quoteCopy.heroDescription}</p>

              <div className="premium-hero__trust" aria-label="Garanties du simulateur">
                {quoteCopy.proofs.map((proof) => (
                  <span key={proof}>
                    <ShieldCheck size={16} aria-hidden="true" />
                    {proof}
                  </span>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <Container size="wide">
          <QuoteSimulator />
        </Container>

        <section
          className="premium-section premium-section--compact"
          aria-labelledby="quote-next-title"
        >
          <Container>
            <div className="premium-cta-band">
              <BadgeEuro size={34} aria-hidden="true" />
              <div>
                <p className="section-eyebrow">{quoteCopy.nextEyebrow}</p>
                <h2 id="quote-next-title">{quoteCopy.nextTitle}</h2>
                <p>{quoteCopy.nextDescription}</p>
              </div>
              <div className="premium-cta-band__actions">
                <ButtonLink href={ROUTES.contact} variant="primary" size="lg">
                  <span className="button__label">{quoteCopy.contactCta}</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href={ROUTES.payment} variant="secondary" size="lg">
                  <span className="button__icon" aria-hidden="true">
                    <CreditCard size={16} />
                  </span>
                  <span className="button__label">{quoteCopy.paymentCta}</span>
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  )
}
