import { FileText, Search } from 'lucide-react'
import { useMemo, useState } from 'react'

import { dashboardQuotes } from '@/data/dashboard.data'

type QuoteStatus = 'Tous' | (typeof dashboardQuotes)[number]['status']

const quoteStatuses: QuoteStatus[] = ['Tous', 'Nouveau devis', 'À relancer', 'En discussion']

export function DashboardQuotesPage() {
  const [activeStatus, setActiveStatus] = useState<QuoteStatus>('Tous')
  const [search, setSearch] = useState('')

  const filteredQuotes = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return dashboardQuotes.filter((quote) => {
      const matchesStatus = activeStatus === 'Tous' || quote.status === activeStatus
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [quote.name, quote.client, quote.estimate, quote.priority, quote.source]
          .join(' ')
          .toLowerCase()
          .includes(normalizedSearch)

      return matchesStatus && matchesSearch
    })
  }, [activeStatus, search])

  return (
    <div className="dashboard-page">
      <section className="dashboard-hero-card">
        <div>
          <p className="section-eyebrow">Estimations</p>
          <h2>Suivi des demandes chiffrées</h2>
          <p>
            Retrouvez les devis prioritaires, les montants estimés, les sources d’entrée et les
            prochaines actions commerciales.
          </p>
        </div>
        <FileText size={34} aria-hidden="true" />
      </section>

      <section className="dashboard-card dashboard-panel">
        <div className="dashboard-toolbar" aria-label="Filtres devis">
          <label className="dashboard-search-field">
            <Search size={17} aria-hidden="true" />
            <span className="sr-only">Rechercher un devis</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Rechercher un devis, client, montant..."
            />
          </label>

          <div className="dashboard-filter-group" aria-label="Filtrer par statut">
            {quoteStatuses.map((status) => (
              <button
                type="button"
                className={activeStatus === status ? 'is-active' : ''}
                onClick={() => setActiveStatus(status)}
                key={status}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="dashboard-grid dashboard-grid--three">
          {filteredQuotes.map((quote) => (
            <article className="dashboard-card dashboard-quote-card" key={quote.id}>
              <div className="dashboard-quote-card__topline">
                <span>{quote.priority}</span>
                <mark>{quote.status}</mark>
              </div>
              <h3>{quote.name}</h3>
              <strong>{quote.estimate}</strong>
              <p>Client : {quote.client}</p>
              <p>Délai : {quote.deadline}</p>
              <p>Source : {quote.source}</p>
              <small>{quote.nextAction}</small>
            </article>
          ))}
        </div>

        {filteredQuotes.length === 0 ? (
          <p className="dashboard-empty-state">Aucun devis ne correspond à ces filtres.</p>
        ) : null}
      </section>
    </div>
  )
}
