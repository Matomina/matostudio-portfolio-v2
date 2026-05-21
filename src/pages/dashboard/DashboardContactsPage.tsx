import { Mail, PhoneCall } from 'lucide-react'

import { dashboardContacts } from '@/data/dashboard.data'

export function DashboardContactsPage() {
  return (
    <div className="dashboard-page">
      <section className="dashboard-card dashboard-panel">
        <div className="dashboard-panel__header">
          <div>
            <p className="section-eyebrow">Contacts</p>
            <h2>Suivi des demandes entrantes</h2>
            <p>Template prepare pour afficher les contacts persistants quand PostgreSQL sera connecte.</p>
          </div>
          <PhoneCall size={30} aria-hidden="true" />
        </div>

        <div className="dashboard-table" role="table" aria-label="Contacts MatoStudio">
          <div className="dashboard-table__row dashboard-table__row--head" role="row">
            <span role="columnheader">Prospect</span>
            <span role="columnheader">Projet</span>
            <span role="columnheader">Statut</span>
            <span role="columnheader">Date</span>
          </div>

          {dashboardContacts.map((contact) => (
            <article className="dashboard-table__row" role="row" key={contact.email}>
              <span role="cell">
                <strong>{contact.name}</strong>
                <small>
                  <Mail size={14} aria-hidden="true" />
                  {contact.email}
                </small>
              </span>
              <span role="cell">{contact.projectType}</span>
              <span role="cell">
                <mark>{contact.status}</mark>
              </span>
              <span role="cell">{contact.date}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
