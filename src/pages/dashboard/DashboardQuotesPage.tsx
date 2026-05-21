import { FileText } from 'lucide-react'

import { dashboardQuotes } from '@/data/dashboard.data'

export function DashboardQuotesPage() {
  return (
    <div className="dashboard-page">
      <section className="dashboard-card dashboard-panel">
        <div className="dashboard-panel__header">
          <div>
            <p className="section-eyebrow">Estimations</p>
            <h2>Suivi des demandes chiffrees</h2>
            <p>Template pret pour afficher les simulations envoyees depuis le site.</p>
          </div>
          <FileText size={30} aria-hidden="true" />
        </div>

        <div className="dashboard-grid dashboard-grid--three">
          {dashboardQuotes.map((quote) => (
            <article className="dashboard-card dashboard-quote-card" key={quote.name}>
              <div className="dashboard-quote-card__topline">
                <span>{quote.priority}</span>
                <mark>{quote.status}</mark>
              </div>
              <h3>{quote.name}</h3>
              <strong>{quote.estimate}</strong>
              <p>Delai : {quote.deadline}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
