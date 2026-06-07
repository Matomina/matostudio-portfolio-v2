import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '@/hooks/useAuth'
import { LeadStatusBadge } from '@/components/admin/LeadStatusBadge'
import { StatsCard } from '@/components/admin/StatsCard'
import { adminGetLeads, adminGetStats } from '@/lib/api/admin'
import type { AdminStats, Lead } from '@/types/admin'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

export function AdminDashboardPage() {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [stats, setStats] = useState<AdminStats | null>(null)
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    Promise.all([adminGetStats(), adminGetLeads()])
      .then(([s, l]) => {
        setStats(s)
        setLeads(l)
      })
      .catch(() => setError('Impossible de charger les données.'))
      .finally(() => setLoading(false))
  }, [])

  async function handleLogout() {
    await logout()
    navigate('/admin/login', { replace: true })
  }

  return (
    <div className="admin-layout">
      <header className="admin-header">
        <div className="admin-header__brand">
          <span className="section-eyebrow">Administration</span>
          <strong>MatoStudio</strong>
        </div>
        <button
          type="button"
          className="admin-header__logout button button-ghost"
          onClick={handleLogout}
        >
          Déconnexion
        </button>
      </header>

      <main className="admin-main">
        <div className="admin-section-header">
          <h1>Tableau de bord</h1>
        </div>

        {loading && (
          <div className="admin-state-empty">
            <p>Chargement…</p>
          </div>
        )}

        {error && (
          <div className="admin-state-error" role="alert">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && stats && (
          <div className="admin-dashboard-card">
            <div className="admin-stats-grid">
              <StatsCard label="Total demandes" value={stats.total} accent />
              <StatsCard label="Nouvelles" value={stats.new} />
              <StatsCard label="À rappeler" value={stats.to_call} />
              <StatsCard label="En discussion" value={stats.in_discussion} />
              <StatsCard label="Devis envoyé" value={stats.quote_sent} />
              <StatsCard label="Gagnées" value={stats.won} />
              <StatsCard label="Contact" value={stats.contact} />
              <StatsCard label="Devis" value={stats.quote} />
            </div>

            <div className="admin-leads-section">
              <h2>Demandes reçues</h2>

              {leads.length === 0 ? (
                <div className="admin-state-empty">
                  <p>Aucune demande reçue pour l'instant.</p>
                </div>
              ) : (
                <div className="admin-table-wrapper">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Type</th>
                        <th scope="col">Projet</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date</th>
                        <th scope="col">Statut</th>
                        <th scope="col">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads.map((lead) => (
                        <tr key={lead.id}>
                          <td className="admin-table__name">{lead.name}</td>
                          <td>
                            <span
                              className={`admin-type-badge ${lead.type === 'quote' ? 'admin-type-badge--quote' : ''}`}
                            >
                              {lead.type === 'quote' ? 'Devis' : 'Contact'}
                            </span>
                          </td>
                          <td className="admin-table__project">{lead.projectType}</td>
                          <td className="admin-table__email">
                            <a href={`mailto:${lead.email}`} onClick={(e) => e.stopPropagation()}>
                              {lead.email}
                            </a>
                          </td>
                          <td className="admin-table__date">{formatDate(lead.createdAt)}</td>
                          <td>
                            <LeadStatusBadge status={lead.status} />
                          </td>
                          <td>
                            <Link className="admin-table__view-link" to={`/admin/leads/${lead.id}`}>
                              Voir
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
