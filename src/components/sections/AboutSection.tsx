import { aboutHighlights, aboutPillars } from '@/data/about.data'

export function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="eyebrow">À propos</p>

        <h2 id="about-title">Un profil orienté progression, qualité et projets concrets.</h2>

        <p>
          MatoStudio représente une démarche professionnelle : construire des sites propres, utiles,
          crédibles et pensés pour évoluer sans repartir de zéro à chaque étape.
        </p>
      </div>

      <div className="about-layout">
        <div className="about-panel">
          <p>
            Je construis mon portfolio comme un vrai produit : une base technique stable, une
            architecture claire, des composants réutilisables, des données séparées du rendu et une
            progression validée par des commits propres.
          </p>

          <p>
            L’objectif est de présenter mes compétences de développeur web tout en montrant ma
            capacité à travailler avec méthode, rigueur et vision long terme.
          </p>
        </div>

        <div className="about-highlights">
          {aboutHighlights.map((item) => (
            <article className="about-highlight" key={item.id}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </div>

      <div className="about-pillars">
        {aboutPillars.map((pillar) => (
          <article className="about-pillar" key={pillar.id}>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
