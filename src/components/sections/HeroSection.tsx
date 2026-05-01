import { heroData } from '@/data/hero.data'
import { siteConfig } from '@/data/site.config'

import { ButtonLink } from '@/components/ui/ButtonLink'

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="home-title">
      <p className="eyebrow">{heroData.eyebrow}</p>

      <h1 id="home-title">{heroData.title}</h1>

      <p className="hero-description">{heroData.description}</p>

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
        {heroData.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  )
}
