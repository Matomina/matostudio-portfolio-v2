import { BarChart3 } from 'lucide-react'

import {
  dashboardPipeline,
  dashboardRevenue,
  dashboardStats,
} from '@/data/dashboard.data'

export function DashboardStatsPage() {
  const maxPipelineValue = Math.max.apply(
    null,
    dashboardPipeline.map((item) => item.value),
  )

  return (
    <div className="dashboard-page">
      <section className="dashboard-hero-card">
        <div>
          <p className="section-eyebrow">Indicateurs</p>
          <h2>Vue des résultats</h2>
          <p>
            Suivez la performance commerciale du portfolio MatoStudio avant la connexion aux
            données réelles du backend.
          </p>
        </div>
        <BarChart3 size={34} aria-hidden="true" />
      </section>

      <section
        className="dashboard-grid dashboard-grid--stats"
        aria-label="Indicateurs clés"
      >
        {dashboardStats.map((stat) => (
          <article
            className={`dashboard-card dashboard-stat-card is-${stat.tone}`}
            key={stat.label}
          >
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <p>{stat.detail}</p>
            <small>{stat.trend}</small>
          </article>
        ))}
      </section>

      <section className="dashboard-grid dashboard-grid--two dashboard-grid--align-start">
        <article className="dashboard-card dashboard-panel">
          <div className="dashboard-panel__header">
            <div>
              <p className="section-eyebrow">Conversion</p>
              <h2>Pipeline commercial</h2>
            </div>
          </div>

          <div className="dashboard-chart-list">
            {dashboardPipeline.map((item) => (
              <article className="dashboard-chart-row" key={item.label}>
                <div>
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </div>
                <progress
                  value={item.value}
                  max={maxPipelineValue}
                  aria-label={item.label}
                />
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </article>

        <article className="dashboard-card dashboard-panel">
          <div className="dashboard-panel__header">
            <div>
              <p className="section-eyebrow">Business</p>
              <h2>Lecture revenus</h2>
            </div>
          </div>

          <div className="dashboard-revenue-grid dashboard-revenue-grid--stacked">
            {dashboardRevenue.map((item) => (
              <article className="dashboard-revenue-card" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </article>
      </section>
    </div>
  )
}
