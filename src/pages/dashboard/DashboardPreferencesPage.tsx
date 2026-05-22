import { Settings } from 'lucide-react'

import { dashboardRoadmap, dashboardSettings } from '@/data/dashboard.data'

export function DashboardPreferencesPage() {
  return (
    <div className="dashboard-page">
      <section className="dashboard-hero-card">
        <div>
          <p className="section-eyebrow">Préférences</p>
          <h2>Préparation technique du dashboard</h2>
          <p>
            Centralisez les prochains réglages nécessaires avant de brancher le dashboard sur le
            backend MatoStudio et les données réelles.
          </p>
        </div>
        <Settings size={34} aria-hidden="true" />
      </section>

      <section className="dashboard-grid dashboard-grid--two dashboard-grid--align-start">
        <article className="dashboard-card dashboard-panel">
          <div className="dashboard-panel__header">
            <div>
              <p className="section-eyebrow">Configuration</p>
              <h2>Modules à connecter</h2>
            </div>
          </div>

          <div className="dashboard-settings-list">
            {dashboardSettings.map((setting) => (
              <article className="dashboard-setting-card" key={setting.title}>
                <div>
                  <h3>{setting.title}</h3>
                  <p>{setting.description}</p>
                  <small>{setting.action}</small>
                </div>
                <mark>{setting.status}</mark>
              </article>
            ))}
          </div>
        </article>

        <article className="dashboard-card dashboard-panel">
          <div className="dashboard-panel__header">
            <div>
              <p className="section-eyebrow">Roadmap</p>
              <h2>Étapes dashboard</h2>
            </div>
          </div>

          <div className="dashboard-roadmap">
            {dashboardRoadmap.map((item) => (
              <article className="dashboard-roadmap__item" key={item.step}>
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
                <mark>{item.status}</mark>
              </article>
            ))}
          </div>
        </article>
      </section>
    </div>
  )
}
