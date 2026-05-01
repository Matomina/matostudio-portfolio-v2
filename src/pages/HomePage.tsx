const highlights = [
  'Portfolio freelance premium',
  'Développement web moderne',
  'React · TypeScript · Vite',
  'Identité MatoStudio',
] as const

export function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-section" aria-labelledby="home-title">
        <p className="eyebrow">MatoStudio Portfolio V2</p>

        <h1 id="home-title">Construire une présence web professionnelle, claire et premium.</h1>

        <p className="hero-description">
          Base technique stabilisée pour le futur portfolio MatoStudio : architecture React,
          TypeScript, routing, styles globaux, branding et contenus modulaires.
        </p>

        <div className="hero-actions" aria-label="Actions principales">
          <a href="mailto:contact@matostudio.fr" className="button button-primary">
            Me contacter
          </a>

          <a
            href="https://github.com/Matomina"
            className="button button-secondary"
            target="_blank"
            rel="noreferrer"
          >
            Voir GitHub
          </a>
        </div>
      </section>

      <section className="status-section" aria-labelledby="status-title">
        <h2 id="status-title">Socle en cours de construction</h2>

        <div className="status-grid">
          {highlights.map((item) => (
            <article className="status-card" key={item}>
              <span>{item}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
