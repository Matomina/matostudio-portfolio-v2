import type { CSSProperties } from 'react'

import { ButtonLink } from '@/components/ui/ButtonLink'
import { heroData } from '@/data/hero.data'
import { siteConfig } from '@/data/site.config'

function revealDelay(delay: number): CSSProperties {
  return {
    '--reveal-delay': `${delay}ms`,
  } as CSSProperties
}

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="home-title">
      <p className="eyebrow" data-reveal="soft">
        {heroData.eyebrow}
      </p>

      <h1 id="home-title" data-reveal="soft" style={revealDelay(120)}>
        {heroData.title}
      </h1>

      <p className="hero-description" data-reveal="soft" style={revealDelay(240)}>
        {heroData.description}
      </p>

      <div
        className="hero-actions"
        aria-label="Actions principales"
        data-reveal="soft"
        style={revealDelay(360)}
      >
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

      <div
        className="hero-stack"
        aria-label="Technologies principales"
        data-reveal="soft"
        style={revealDelay(480)}
      >
        {heroData.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  )
}
