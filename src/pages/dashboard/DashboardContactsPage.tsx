import { Mail, PhoneCall, Search } from 'lucide-react'
import { useMemo, useState } from 'react'

import { dashboardContacts } from '@/data/dashboard.data'

type ContactStatus = 'Tous' | (typeof dashboardContacts)[number]['status']

const contactStatuses: ContactStatus[] = ['Tous', 'Nouveau', 'Contacté', 'À qualifier', 'À relancer']

export function DashboardContactsPage() {
  const [activeStatus, setActiveStatus] = useState<ContactStatus>('Tous')
  const [search, setSearch] = useState('')

  const filteredContacts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return dashboardContacts.filter((contact) => {
      const matchesStatus = activeStatus === 'Tous' || contact.status === activeStatus
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [contact.name, contact.email, contact.projectType, contact.priority, contact.budget]
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
          <p className="section-eyebrow">Contacts</p>
          <h2>Suivi des demandes entrantes</h2>
          <p>
            Filtrez les prospects, priorisez les relances et préparez la future connexion aux
            contacts persistants de l’API MatoStudio.
          </p>
        </div>
        <PhoneCall size={34} aria-hidden="true" />
      </section>

      <section className="dashboard-card dashboard-panel">
        <div className="dashboard-toolbar" aria-label="Filtres contacts">
          <label className="dashboard-search-field">
            <Search size={17} aria-hidden="true" />
            <span className="sr-only">Rechercher un contact</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Rechercher un prospect, projet, budget..."
            />
          </label>

          <div className="dashboard-filter-group" aria-label="Filtrer par statut">
            {contactStatuses.map((status) => (
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

        <div className="dashboard-table" role="table" aria-label="Contacts MatoStudio">
          <div className="dashboard-table__row dashboard-table__row--head dashboard-table__row--contacts" role="row">
            <span role="columnheader">Prospect</span>
            <span role="columnheader">Projet</span>
            <span role="columnheader">Priorité</span>
            <span role="columnheader">Budget</span>
            <span role="columnheader">Action</span>
          </div>

          {filteredContacts.map((contact) => (
            <article className="dashboard-table__row dashboard-table__row--contacts" role="row" key={contact.id}>
              <span role="cell">
                <strong>{contact.name}</strong>
                <small>
                  <Mail size={14} aria-hidden="true" />
                  {contact.email}
                </small>
              </span>
              <span role="cell">
                {contact.projectType}
                <small>{contact.date}</small>
              </span>
              <span role="cell">
                <mark>{contact.priority}</mark>
                <small>{contact.status}</small>
              </span>
              <span role="cell">{contact.budget}</span>
              <span role="cell">{contact.nextAction}</span>
            </article>
          ))}
        </div>

        {filteredContacts.length === 0 ? (
          <p className="dashboard-empty-state">Aucun contact ne correspond à ces filtres.</p>
        ) : null}
      </section>
    </div>
  )
}
