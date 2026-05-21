import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Container } from '@/components/ui/Container'
import { SkipLink } from '@/components/ui/SkipLink'
import { siteConfig } from '@/data/site.config'
import { ROUTES } from '@/lib/constants/routes'

const legalSections = [
  {
    title: 'Éditeur du site',
    content: [
      `Le présent site est édité par ${siteConfig.name}, activité indépendante spécialisée dans la conception, le développement, l’optimisation et la maintenance de sites web modernes.`,
      'Nom commercial : MatoStudio. Activité principale : développement web, programmation informatique, création et maintenance de solutions numériques.',
      'Le numéro SIREN/SIRET, l’adresse administrative complète et les informations définitives de l’entreprise seront précisés après finalisation administrative et publication officielle de l’activité.',
    ],
  },
  {
    title: 'Responsable de la publication',
    content: [
      'Le responsable de la publication est le représentant de MatoStudio Agency.',
      `Contact principal : ${siteConfig.email}.`,
      `Téléphone : ${siteConfig.phone}.`,
    ],
  },
  {
    title: 'Hébergement et déploiement',
    content: [
      'Le site est destiné à être déployé sur une infrastructure moderne adaptée aux sites web front-end et aux éventuels services backend associés.',
      'Les informations définitives relatives à l’hébergeur, notamment sa dénomination, son adresse et ses coordonnées, seront complétées après mise en production finale du site.',
      'En cas d’utilisation de services tiers comme Vercel, Render, Cloudflare, OVH ou tout autre prestataire technique, chaque service conserve ses propres conditions, politiques de sécurité et engagements de disponibilité.',
    ],
  },
  {
    title: 'Propriété intellectuelle',
    content: [
      'L’ensemble des textes, interfaces, composants, logos, éléments graphiques, illustrations, animations, maquettes, codes sources visibles, contenus éditoriaux et éléments de marque présents sur ce site sont protégés par le droit de la propriété intellectuelle.',
      'Toute reproduction, adaptation, extraction, diffusion, modification ou réutilisation totale ou partielle sans autorisation écrite préalable est interdite.',
      'Les marques, logos, noms de services ou outils tiers éventuellement mentionnés restent la propriété de leurs titulaires respectifs.',
    ],
  },
  {
    title: 'Conditions d’utilisation du site',
    content: [
      'L’utilisateur s’engage à utiliser le site de manière normale, loyale et conforme à la réglementation applicable.',
      'Toute tentative d’accès non autorisé, de perturbation du service, d’extraction automatisée abusive ou d’utilisation frauduleuse est interdite.',
      'Les informations présentées sur le site sont fournies à titre informatif et peuvent évoluer sans préavis afin de refléter les offres, projets, prestations ou obligations légales applicables.',
    ],
  },
  {
    title: 'Responsabilité',
    content: [
      'MatoStudio Agency s’efforce de fournir des informations fiables, exactes et régulièrement mises à jour.',
      'Malgré le soin apporté au contenu, des erreurs, omissions ou indisponibilités temporaires peuvent survenir. MatoStudio Agency ne saurait être tenu responsable d’un usage inapproprié des informations présentes sur le site.',
      'Les liens externes éventuellement présents sur le site mènent vers des ressources tierces. MatoStudio Agency ne contrôle pas ces ressources et ne peut garantir leur disponibilité, leur exactitude ou leur conformité permanente.',
    ],
  },
  {
    title: 'Données personnelles',
    content: [
      'Les traitements de données personnelles réalisés depuis ce site sont décrits dans la politique de confidentialité.',
      'Cette politique détaille notamment les données collectées, les finalités, les bases légales, la durée de conservation, les destinataires éventuels et les droits des personnes concernées.',
    ],
    link: { href: ROUTES.privacy, label: 'Consulter la politique de confidentialité' },
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
              Cette page présente les informations relatives à l’édition, la responsabilité, la
              propriété intellectuelle, l’hébergement et l’utilisation du site {siteConfig.name}.
            </p>
          </section>

          <section className="legal-content" aria-label="Détails des mentions légales">
            {legalSections.map((section) => (
              <article className="legal-card" key={section.title}>
                <h2>{section.title}</h2>
                {section.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.link ? <a href={section.link.href}>{section.link.label}</a> : null}
              </article>
            ))}

            <article className="legal-card legal-card--highlight">
              <h2>Contact légal</h2>
              <p>
                Pour toute demande relative au site, à ses contenus ou aux présentes mentions
                légales, vous pouvez contacter MatoStudio Agency à l’adresse suivante :{' '}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
              </p>
              <p>
                Ces mentions légales sont fournies dans une logique de conformité professionnelle.
                Elles devront être complétées avec les informations administratives définitives de
                l’entreprise après validation officielle.
              </p>
            </article>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  )
}
