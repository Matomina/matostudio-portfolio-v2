import { ArrowRight, CreditCard, Landmark, ShieldCheck, WalletCards } from 'lucide-react'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SkipLink } from '@/components/ui/SkipLink'
import { useLanguage } from '@/hooks/useLanguage'
import { ROUTES } from '@/lib/constants/routes'

const paymentIcons = [CreditCard, WalletCards, Landmark] as const

export function PaymentPage() {
  const { copy } = useLanguage()
  const paymentCopy = copy.paymentPage

  return (
    <>
      <SkipLink />
      <Header />

      <main id="main-content" className="conversion-page payment-page">
        <section className="premium-hero" aria-labelledby="payment-page-title">
          <Container size="narrow">
            <Reveal className="premium-hero__content">
              <p className="section-eyebrow">{paymentCopy.heroEyebrow}</p>
              <h1 id="payment-page-title">{paymentCopy.heroTitle}</h1>
              <p>{paymentCopy.heroDescription}</p>

              <div className="premium-hero__actions">
                <ButtonLink href={ROUTES.contact} variant="primary" size="lg">
                  <span className="button__label">{paymentCopy.quoteCta}</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href={ROUTES.quote} variant="secondary" size="lg">
                  {paymentCopy.simulateCta}
                </ButtonLink>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="premium-section" aria-labelledby="payment-methods-title">
          <Container>
            <div className="section-header premium-centered-header">
              <p className="section-header__eyebrow">{paymentCopy.methodsEyebrow}</p>
              <h2 id="payment-methods-title" className="section-header__title">
                {paymentCopy.methodsTitle}
              </h2>
              <p className="section-header__description">{paymentCopy.methodsDescription}</p>
            </div>

            <div className="premium-card-grid premium-card-grid--three">
              {paymentCopy.methods.map((method, index) => {
                const Icon = paymentIcons[index]

                return (
                  <article className="premium-card payment-method-card" key={method.title}>
                    <Icon size={30} aria-hidden="true" />
                    <span>{method.status}</span>
                    <h3>{method.title}</h3>
                    <p>{method.description}</p>
                  </article>
                )
              })}
            </div>
          </Container>
        </section>

        <section
          className="premium-section premium-section--compact"
          aria-labelledby="payment-security-title"
        >
          <Container>
            <div className="payment-security-panel">
              <div>
                <p className="section-eyebrow">{paymentCopy.securityEyebrow}</p>
                <h2 id="payment-security-title">{paymentCopy.securityTitle}</h2>
                <p>{paymentCopy.securityDescription}</p>
              </div>

              <div className="payment-security-grid">
                {paymentCopy.reassuranceItems.map((item) => (
                  <article key={item.title}>
                    <ShieldCheck size={22} aria-hidden="true" />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  )
}
