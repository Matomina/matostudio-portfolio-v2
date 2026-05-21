import { ArrowRight, ClipboardList } from 'lucide-react'

import {
  dashboardContacts,
  dashboardQuotes,
  dashboardStats,
  dashboardTasks,
} from '@/data/dashboard.data'
import { ROUTES } from '@/lib/constants/routes'
import { Link } from 'react-router-dom'

export function DashboardOverviewPage() {
  return (
    <div className="dashboard-page">
      <section className="dashboard-grid dashboard-grid--stats" aria-label="Indicateurs principaux">
        {dashboardStats.map((stat) => (
          <article className="dashboard-card dashboard-stat-card" key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <p>{stat.detail}</p>
          </article>
        ))}
      </section>

      <section className="dashboard-grid dashboard-grid--two">
        <article className="dashboard-card dashboard-panel">
          <div className="dashboard-panel__header">
            <div>
              <p className="section-eyebrow">Contacts</p>
              <h2>Dernieres demandes</h2>
            </div>
            <Link to={ROUTES.dashboardContacts} className="dashboard-inline-link">
              Voir tout <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="dashboard-list">
            {dashboardContacts.map((contact) => (
              <article className="dashboard-list-item" key={contact.email}>
                <div>
                  <h3>{contact.name}</h3>
                  <p>{contact.projectType}</p>
                </div>
                <span>{contact.status}</span>
              </article>
            ))}
          </div>
        </article>

        <article className="dashboard-card dashboard-panel">
          <div className="dashboard-panel__header">
            <div>
              <p className="section-eyebrow">Devis</p>
              <h2>Estimations recentes</h2>
            </div>
            <Link to={ROUTES.dashboardQuotes} className="dashboard-inline-link">
              Voir tout <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="dashboard-list">
            {dashboardQuotes.map((quote) => (
              <article className="dashboard-list-item" key={quote.name}>
                <div>
                  <h3>{quote.name}</h3>
                  <p>{quote.deadline}</p>
                </div>
                <strong>{quote.estimate}</strong>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="dashboard-card dashboard-panel">
        <div className="dashboard-panel__header">
          <div>
            <p className="section-eyebrow">Methode Mato</p>
            <h2>Priorites operationnelles</h2>
          </div>
          <ClipboardList size={30} aria-hidden="true" />
        </div>

        <div className="dashboard-task-grid">
          {dashboardTasks.map((task, index) => (
            <article className="dashboard-task" key={task}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{task}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
