import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, Mail, Phone, ShieldCheck } from 'lucide-react'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SkipLink } from '@/components/ui/SkipLink'
import {
  contactBudgetOptions,
  contactProjectTypeOptions,
  contactTimelineOptions,
} from '@/data/contact-form.data'
import { siteConfig } from '@/data/site.config'
import { useLanguage } from '@/hooks/useLanguage'
import { ROUTES } from '@/lib/constants/routes'

function readFormValue(formData: FormData, name: string) {
  const value = formData.get(name)

  return typeof value === 'string' ? value.trim() : ''
}

function buildMailtoUrl(form: HTMLFormElement, recipient: string) {
  const formData = new FormData(form)
  const name = readFormValue(formData, 'name')
  const email = readFormValue(formData, 'email')
  const phone = readFormValue(formData, 'phone') || 'Non renseigné'
  const projectType = readFormValue(formData, 'projectType')
  const budget = readFormValue(formData, 'budget')
  const timeline = readFormValue(formData, 'timeline')
  const message = readFormValue(formData, 'message')

  const subject = `Nouvelle demande MatoStudio - ${name}`
  const body = [
    'Bonjour MatoStudio,',
    '',
    'Je souhaite vous contacter pour un projet web.',
    '',
    `Nom : ${name}`,
    `Email : ${email}`,
    `Téléphone : ${phone}`,
    `Type de projet : ${projectType}`,
    `Budget estimé : ${budget}`,
    `Délai souhaité : ${timeline}`,
    '',
    'Message :',
    message,
    '',
    'Merci,',
    name,
  ].join('\n')

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function ContactPage() {
  const [isPrepared, setIsPrepared] = useState(false)
  const { copy } = useLanguage()
  const contactCopy = copy.contactPage

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsPrepared(true)
    window.location.href = buildMailtoUrl(event.currentTarget, siteConfig.email)
  }

  return (
    <>
      <SkipLink />
      <Header />

      <main id="main-content" className="conversion-page contact-page">
        <section className="premium-hero" aria-labelledby="contact-page-title">
          <Container size="narrow">
            <Reveal className="premium-hero__content">
              <p className="section-eyebrow">{contactCopy.heroEyebrow}</p>
              <h1 id="contact-page-title">{contactCopy.heroTitle}</h1>
              <p>{contactCopy.heroDescription}</p>

              <div className="premium-hero__actions">
                <ButtonLink href={ROUTES.quote} variant="primary" size="lg">
                  <span className="button__label">{contactCopy.estimateCta}</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href={`mailto:${siteConfig.email}`} variant="secondary" size="lg">
                  {contactCopy.directCta}
                </ButtonLink>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="premium-section" aria-labelledby="contact-form-title">
          <Container className="contact-page__layout" size="wide">
            <form
              className="premium-form"
              aria-labelledby="contact-form-title"
              onSubmit={handleSubmit}
            >
              <div className="premium-form__header">
                <p className="section-eyebrow">{contactCopy.formEyebrow}</p>
                <h2 id="contact-form-title">{contactCopy.formTitle}</h2>
                <p>{contactCopy.formDescription}</p>
              </div>

              <div className="form-grid">
                <label className="form-field" htmlFor="contact-name">
                  <span>{contactCopy.fields.name}</span>
                  <input id="contact-name" name="name" type="text" autoComplete="name" required />
                </label>

                <label className="form-field" htmlFor="contact-email">
                  <span>{contactCopy.fields.email}</span>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </label>

                <label className="form-field" htmlFor="contact-phone">
                  <span>{contactCopy.fields.phone}</span>
                  <input id="contact-phone" name="phone" type="tel" autoComplete="tel" />
                </label>

                <label className="form-field" htmlFor="contact-project-type">
                  <span>{contactCopy.fields.projectType}</span>
                  <select id="contact-project-type" name="projectType" defaultValue="" required>
                    <option value="" disabled>
                      {contactCopy.fields.select}
                    </option>
                    {contactProjectTypeOptions.map((option) => (
                      <option value={option.value} key={option.value}>
                        {contactCopy.options.projectTypes[option.value] ?? option.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="form-field" htmlFor="contact-budget">
                  <span>{contactCopy.fields.budget}</span>
                  <select id="contact-budget" name="budget" defaultValue="" required>
                    <option value="" disabled>
                      {contactCopy.fields.select}
                    </option>
                    {contactBudgetOptions.map((option) => (
                      <option value={option.value} key={option.value}>
                        {contactCopy.options.budgets[option.value] ?? option.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="form-field" htmlFor="contact-timeline">
                  <span>{contactCopy.fields.timeline}</span>
                  <select id="contact-timeline" name="timeline" defaultValue="" required>
                    <option value="" disabled>
                      {contactCopy.fields.select}
                    </option>
                    {contactTimelineOptions.map((option) => (
                      <option value={option.value} key={option.value}>
                        {contactCopy.options.timelines[option.value] ?? option.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="form-field form-field--full" htmlFor="contact-message">
                  <span>{contactCopy.fields.message}</span>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={7}
                    placeholder={contactCopy.fields.placeholder}
                    required
                  />
                </label>
              </div>

              <div className="premium-form__footer">
                <button className="button button-primary button-lg" type="submit">
                  <span className="button__label">{contactCopy.submit}</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </button>

                <p className="form-status" aria-live="polite">
                  {isPrepared ? contactCopy.preparedStatus : contactCopy.initialStatus}
                </p>
              </div>
            </form>

            <aside className="premium-side-panel" aria-label="Contact direct et garanties">
              <div className="premium-side-panel__card">
                <ShieldCheck size={28} aria-hidden="true" />
                <h2>{contactCopy.sideTitle}</h2>
                <p>{contactCopy.sideDescription}</p>
              </div>

              <div className="contact-direct">
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail size={18} aria-hidden="true" />
                  {siteConfig.email}
                </a>
                <a href={`tel:${siteConfig.phone.replaceAll(' ', '')}`}>
                  <Phone size={18} aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </div>
            </aside>
          </Container>
        </section>

        <section
          className="premium-section premium-section--compact"
          aria-labelledby="contact-proof-title"
        >
          <Container>
            <div className="section-header premium-centered-header">
              <p className="section-header__eyebrow">{contactCopy.reassuranceEyebrow}</p>
              <h2 id="contact-proof-title" className="section-header__title">
                {contactCopy.reassuranceTitle}
              </h2>
            </div>

            <div className="premium-card-grid premium-card-grid--four">
              {contactCopy.reassuranceItems.map((item) => (
                <article className="premium-card" key={item.title}>
                  <CheckCircle2 size={22} aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  )
}
