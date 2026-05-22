import { ArrowRight, ClipboardList, Euro, PhoneCall, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

import {
  dashboardContacts,
  dashboardPipeline,
  dashboardQuotes,
  dashboardRevenue,
  dashboardStats,
  dashboardTasks,
} from '@/data/dashboard.data'
import { ROUTES } from '@/lib/constants/routes'

export function DashboardOverviewPage() {
  return (
    <div className="dashboard-page">
      <section className="dashboard-hero-card">
        <div>
          <p className="section-eyebrow">Vue globale</p>
          <h2>Pilotage commercial MatoStudio</h2>
          <p>
            Suivez les leads, priorisez les relances, transformez les devis et preparez la future
            connexion a l API MatoStudio.
          </p>
        </div>

        <div className="dashboard-hero-card__actions">
          <Link
            to={ROUTES.dashboardContacts}
            className="dashboard-button dashboard-button--primary"
          >
            Voir les contacts
          </Link>
          <Link to={ROUTES.dashboardQuotes} className="dashboard-button dashboard-button--ghost">
            Suivre les devis
          </Link>
        </div>
      </section>

      <section className="dashboard-grid dashboard-grid--stats" aria-label="Indicateurs principaux">
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
            {dashboardContacts.slice(0, 3).map((contact) => (
              <article className="dashboard-list-item" key={contact.id}>
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
            {dashboardQuotes.slice(0, 3).map((quote) => (
              <article className="dashboard-list-item" key={quote.id}>
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

      <section className="dashboard-grid dashboard-grid--two dashboard-grid--align-start">
        <article className="dashboard-card dashboard-panel">
          <div className="dashboard-panel__header">
            <div>
              <p className="section-eyebrow">Pipeline</p>
              <h2>Avancement commercial</h2>
            </div>
            <TrendingUp size={30} aria-hidden="true" />
          </div>

          <div className="dashboard-pipeline">
            {dashboardPipeline.map((step, index) => (
              <article className="dashboard-pipeline__item" key={step.label}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <strong>{step.label}</strong>
                  <p>{step.detail}</p>
                </div>
                <b>{step.value}</b>
              </article>
            ))}
          </div>
        </article>

        <article className="dashboard-card dashboard-panel">
          <div className="dashboard-panel__header">
            <div>
              <p className="section-eyebrow">Revenus</p>
              <h2>Potentiel estime</h2>
            </div>
            <Euro size={30} aria-hidden="true" />
          </div>

          <div className="dashboard-revenue-grid">
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

      <section className="dashboard-card dashboard-panel dashboard-panel--cta">
        <div>
          <p className="section-eyebrow">Action rapide</p>
          <h2>Transformer les demandes en missions cadrees</h2>
          <p>
            Le dashboard reste pret pour API : l interface est complete et les donnees pourront
            ensuite venir de PostgreSQL via le backend MatoStudio.
          </p>
        </div>
        <PhoneCall size={34} aria-hidden="true" />
      </section>
    </div>
  )
}
