import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Container } from '@/components/ui/Container'
import { SkipLink } from '@/components/ui/SkipLink'
import { siteConfig } from '@/data/site.config'

const privacySections = [
  {
    title: 'Données collectées',
    content:
      'Le site peut collecter les informations transmises volontairement via un formulaire de contact ou un lien de contact direct : nom, adresse e-mail, téléphone, message et informations utiles à la demande.',
  },
  {
    title: 'Finalité du traitement',
    content:
      'Les données sont utilisées uniquement pour répondre aux demandes, préparer un échange commercial, assurer le suivi d’un projet ou améliorer la qualité de service.',
  },
  {
    title: 'Durée de conservation',
    content:
      'Les données de contact sont conservées pendant la durée nécessaire au traitement de la demande, puis archivées ou supprimées selon leur utilité administrative, commerciale ou légale.',
  },
  {
    title: 'Confidentialité',
    content:
      'Les informations transmises ne sont pas vendues ni cédées à des tiers. Elles restent strictement utilisées dans le cadre de la relation entre le visiteur et MatoStudio.',
  },
  {
    title: 'Droits des utilisateurs',
    content:
      'Conformément à la réglementation applicable, chaque utilisateur peut demander l’accès, la rectification ou la suppression de ses données en contactant MatoStudio par e-mail.',
  },
]

export function PrivacyPage() {
  return (
    <>
      <SkipLink />
      <Header />

      <main id="main-content">
        <Container className="page-shell legal-page-shell">
          <section className="legal-hero" aria-labelledby="privacy-title">
            <p className="section-eyebrow">Confidentialité</p>
            <h1 id="privacy-title">Politique de confidentialité</h1>
            <p>
              Cette page présente de façon claire la manière dont MatoStudio traite les données
              personnelles transmises depuis le site portfolio.
            </p>
          </section>

          <section className="legal-content" aria-label="Détails de la politique de confidentialité">
            {privacySections.map((section) => (
              <article className="legal-card" key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </article>
            ))}

            <article className="legal-card legal-card--highlight">
              <h2>Contact</h2>
              <p>
                Pour toute demande relative aux données personnelles, vous pouvez contacter MatoStudio à
                l’adresse suivante :{' '}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
              </p>
            </article>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  )
}
