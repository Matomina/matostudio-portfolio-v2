import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Container } from '@/components/ui/Container'
import { SkipLink } from '@/components/ui/SkipLink'
import { siteConfig } from '@/data/site.config'
import { ROUTES } from '@/lib/constants/routes'

const privacySections = [
  {
    title: 'Responsable du traitement',
    content: [
      `Le responsable du traitement des données collectées via ce site est ${siteConfig.name}.`,
      `Pour toute question relative à vos données personnelles, vous pouvez écrire à : ${siteConfig.email}.`,
    ],
  },
  {
    title: 'Données personnelles collectées',
    content: [
      'Le site peut collecter uniquement les informations transmises volontairement par l’utilisateur via un formulaire, un lien de contact ou une prise de contact directe.',
      'Ces données peuvent inclure : nom, prénom, adresse e-mail, numéro de téléphone, type de projet, budget estimé, délai souhaité, message libre et informations nécessaires à la compréhension de la demande.',
      'Aucune donnée sensible au sens du RGPD n’est demandée sur ce site.',
    ],
  },
  {
    title: 'Finalités du traitement',
    content: [
      'Les données sont utilisées pour répondre aux demandes de contact, préparer un devis, cadrer un projet web, assurer le suivi d’un échange commercial ou professionnel et améliorer la qualité du service.',
      'Les données peuvent également être utilisées pour conserver une trace raisonnable des échanges nécessaires à la gestion administrative ou contractuelle d’un projet.',
    ],
  },
  {
    title: 'Gestion des formulaires de contact et de devis',
    content: [
      'Les formulaires peuvent collecter : nom, email, téléphone, type de projet, budget, délai, nombre de pages, options choisies, estimation calculée et message libre.',
      'Ces données servent uniquement à analyser la demande, répondre au prospect, préparer un devis, organiser un échange commercial ou assurer un suivi précontractuel.',
      'La base légale principale est l’exécution de mesures précontractuelles lorsque l’utilisateur demande un devis ou un échange commercial. L’intérêt légitime peut s’appliquer au suivi raisonnable des demandes entrantes.',
      'Les données ne sont pas utilisées pour de la prospection marketing sans consentement séparé. L’utilisateur doit éviter d’envoyer des informations sensibles dans les champs libres.',
      'Les données sont conservées uniquement le temps nécessaire au traitement de la demande, au suivi commercial raisonnable, ou aux obligations administratives et légales en cas de relation contractuelle.',
    ],
  },
  {
    title: 'Base légale du traitement',
    content: [
      'Les traitements reposent principalement sur l’intérêt légitime de MatoStudio Agency à répondre aux demandes entrantes et à assurer le suivi de ses échanges professionnels.',
      'Lorsque la demande vise la préparation ou l’exécution d’une prestation, le traitement peut également être nécessaire à des mesures précontractuelles ou contractuelles.',
      'Lorsque la loi impose une conservation particulière, le traitement peut reposer sur une obligation légale.',
    ],
  },
  {
    title: 'Durée de conservation',
    content: [
      'Les données liées à une simple demande de contact sont conservées pendant la durée nécessaire au traitement de la demande, puis supprimées ou archivées si aucun échange utile ne se poursuit.',
      'Les données liées à une relation commerciale, un devis, une facture ou un projet peuvent être conservées pendant la durée nécessaire à la gestion administrative, comptable, contractuelle ou légale.',
      'Les durées définitives pourront être précisées selon l’organisation administrative finale de MatoStudio Agency.',
    ],
  },
  {
    title: 'Destinataires des données',
    content: [
      'Les données sont destinées à MatoStudio Agency et ne sont pas vendues, louées ou cédées à des tiers à des fins commerciales.',
      'Certaines données peuvent transiter par des prestataires techniques strictement nécessaires au fonctionnement du site, de l’hébergement, de la messagerie, des formulaires ou des outils de déploiement.',
      'Ces prestataires ne peuvent intervenir que dans la limite de leur rôle technique ou contractuel.',
    ],
  },
  {
    title: 'Cookies et traceurs',
    content: [
      'Le site ne doit pas déposer de cookies publicitaires ou de traceurs marketing sans information préalable et, lorsque cela est requis, sans consentement de l’utilisateur.',
      'Des cookies ou mécanismes techniques strictement nécessaires peuvent être utilisés pour assurer le bon fonctionnement du site, la sécurité, l’affichage ou la mémorisation de préférences indispensables.',
      'Si des outils de mesure d’audience, de publicité, de chat ou de suivi avancé sont ajoutés ultérieurement, cette politique devra être mise à jour et un mécanisme de consentement adapté devra être prévu.',
    ],
  },
  {
    title: 'Sécurité des données',
    content: [
      'MatoStudio Agency met en œuvre des mesures raisonnables pour préserver la confidentialité, l’intégrité et la sécurité des informations transmises.',
      'Aucun système n’étant totalement exempt de risque, l’utilisateur doit éviter de transmettre des informations sensibles ou inutiles via les formulaires ou messages de contact.',
    ],
  },
  {
    title: 'Droits des personnes concernées',
    content: [
      'Conformément au RGPD et à la réglementation applicable, vous pouvez demander l’accès, la rectification, l’effacement, la limitation du traitement ou l’opposition au traitement de vos données personnelles.',
      'Lorsque le traitement repose sur le consentement, vous pouvez retirer ce consentement à tout moment pour l’avenir.',
      `Pour exercer vos droits, contactez MatoStudio Agency à l’adresse : ${siteConfig.email}. Une réponse sera apportée dans les meilleurs délais, conformément aux délais prévus par la réglementation applicable.`,
    ],
  },
  {
    title: 'Réclamation auprès de la CNIL',
    content: [
      'Si vous estimez, après avoir contacté MatoStudio Agency, que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL, autorité française de protection des données personnelles.',
      'Site de la CNIL : https://www.cnil.fr',
    ],
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
            <p className="section-eyebrow">Confidentialité et RGPD</p>
            <h1 id="privacy-title">Politique de confidentialité</h1>
            <p>
              Cette politique explique comment {siteConfig.name} collecte, utilise, conserve et
              protège les données personnelles transmises via le site, dans une logique de
              conformité au RGPD.
            </p>
          </section>

          <section
            className="legal-content"
            aria-label="Détails de la politique de confidentialité"
          >
            {privacySections.map((section) => (
              <article className="legal-card" key={section.title}>
                <h2>{section.title}</h2>
                {section.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}

            <article className="legal-card legal-card--highlight">
              <h2>Contact données personnelles</h2>
              <p>
                Pour toute demande relative à vos données personnelles, vous pouvez contacter
                MatoStudio Agency à l’adresse suivante :{' '}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
              </p>
              <p>
                Cette politique complète les <a href={ROUTES.legal}>mentions légales</a> du site et
                pourra être mise à jour selon l’évolution des services, des outils utilisés ou des
                obligations réglementaires applicables.
              </p>
            </article>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  )
}
