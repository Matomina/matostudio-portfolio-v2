import { siteConfig } from '@/data/site.config'

import { ButtonLink } from '@/components/ui/ButtonLink'

const highlights = ['React', 'TypeScript', 'Vite', 'Design premium'] as const

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="home-title">
      <p className="eyebrow">MatoStudio Portfolio V2</p>

      <h1 id="home-title">Construire une présence web professionnelle, claire et premium.</h1>

      <p className="hero-description">{siteConfig.description}</p>

      <div className="hero-actions" aria-label="Actions principales">
        <ButtonLink href={`mailto:${siteConfig.email}`} variant="primary">
          Me contacter
        </ButtonLink>

        <ButtonLink
          href={siteConfig.links.github}
          variant="secondary"
          target="_blank"
          rel="noreferrer"
        >
          Voir GitHub
        </ButtonLink>
      </div>

      <div className="hero-stack" aria-label="Technologies principales">
        {highlights.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  )
}
