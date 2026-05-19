import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SkipLink } from '@/components/ui/SkipLink'
import { jobPageContent } from '@/data/job.data'

export function JobPage() {
  const { hero, profile, skills, stack, projects, timeline, softSkills, contact } =
    jobPageContent

  return (
    <>
      <SkipLink />
      <Header />

      <main id="main-content">
        <section className="job-hero page-shell" aria-labelledby="job-title">
          <Container className="job-hero__layout" size="wide">
            <div className="job-hero__content">
              <p className="section-eyebrow">{hero.eyebrow}</p>
              <h1 id="job-title">{hero.title}</h1>
              <p className="job-hero__description">{hero.description}</p>

              <div className="hero-actions">
                <ButtonLink href={hero.primaryCta.href} size="lg">
                  {hero.primaryCta.label}
                </ButtonLink>
                <ButtonLink href={hero.secondaryCta.href} isExternal size="lg" variant="secondary">
                  {hero.secondaryCta.label}
                </ButtonLink>
              </div>
            </div>

            <Card className="job-hero__panel" padding="lg" variant="premium">
              {hero.stats.map((stat) => (
                <div className="job-stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </Card>
          </Container>
        </section>

        <section className="job-section" aria-labelledby="profile-title">
          <Container>
            <SectionHeader
              eyebrow={profile.eyebrow}
              title={profile.title}
              description={profile.description}
              className="job-section__header"
            />

            <div className="job-grid job-grid--three">
              {profile.highlights.map((highlight) => (
                <Card isInteractive key={highlight.title}>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="job-section" aria-labelledby="skills-title">
          <Container>
            <SectionHeader
              eyebrow={skills.eyebrow}
              title={skills.title}
              className="job-section__header"
            />

            <div className="job-grid job-grid--four">
              {skills.groups.map((group) => (
                <Card isInteractive key={group.title}>
                  <h3>{group.title}</h3>
                  <ul className="job-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="job-section" aria-labelledby="stack-title">
          <Container>
            <Card className="job-stack-panel" padding="lg" variant="strong">
              <SectionHeader
                eyebrow={stack.eyebrow}
                title={stack.title}
                className="job-section__header"
              />
              <ul className="job-stack">
                {stack.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          </Container>
        </section>

        <section className="job-section" aria-labelledby="projects-title">
          <Container>
            <SectionHeader
              eyebrow={projects.eyebrow}
              title={projects.title}
              className="job-section__header"
            />

            <div className="job-grid job-grid--three">
              {projects.items.map((project) => (
                <Card isInteractive key={project.title} padding="lg" variant="strong">
                  <p className="job-index">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="job-stack job-stack--compact">
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="job-card-actions">
                    <ButtonLink
                      href={project.links.github}
                      isExternal
                      size="sm"
                      variant="secondary"
                    >
                      GitHub
                    </ButtonLink>
                    {project.links.demo ? (
                      <ButtonLink href={project.links.demo} size="sm" variant="ghost">
                        Démo
                      </ButtonLink>
                    ) : null}
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="job-section" aria-labelledby="timeline-title">
          <Container>
            <SectionHeader
              eyebrow={timeline.eyebrow}
              title={timeline.title}
              className="job-section__header"
            />

            <div className="job-timeline">
              {timeline.steps.map((step) => (
                <Card className="job-timeline__step" key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="job-section" aria-labelledby="soft-skills-title">
          <Container>
            <Card className="job-soft-skills" padding="lg" variant="premium">
              <SectionHeader
                eyebrow={softSkills.eyebrow}
                title={softSkills.title}
                className="job-section__header"
              />
              <div className="job-grid job-grid--four">
                {softSkills.items.map((item) => (
                  <div className="job-proof" key={item}>
                    <span>✓</span>
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
            </Card>
          </Container>
        </section>

        <section className="job-section job-section--final" aria-labelledby="contact-title">
          <Container>
            <Card className="job-contact" padding="lg" variant="premium">
              <p className="section-eyebrow">{contact.eyebrow}</p>
              <h2 id="contact-title">{contact.title}</h2>
              <p>{contact.description}</p>
              <strong>{contact.email}</strong>

              <div className="hero-actions">
                <ButtonLink href={contact.primaryCta.href} size="lg">
                  {contact.primaryCta.label}
                </ButtonLink>
                <ButtonLink href={contact.github} isExternal size="lg" variant="secondary">
                  GitHub
                </ButtonLink>
                <ButtonLink href={contact.secondaryCta.href} size="lg" variant="ghost">
                  {contact.secondaryCta.label}
                </ButtonLink>
              </div>
            </Card>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  )
}
