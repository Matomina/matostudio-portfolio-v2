import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { LeadStatusBadge } from '@/components/admin/LeadStatusBadge'
import { adminGetLead, adminUpdateLeadNote, adminUpdateLeadStatus } from '@/lib/api/admin'
import { ROUTES } from '@/lib/constants/routes'
import { ALL_LEAD_STATUSES, LEAD_STATUS_LABELS } from '@/types/admin'
import type { Lead, LeadStatus } from '@/types/admin'

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function buildMailtoLink(lead: Lead) {
  const subject =
    lead.type === 'quote'
      ? `Suite à votre demande de devis — MatoStudio`
      : `Suite à votre demande de contact — MatoStudio`

  const body =
    `Bonjour ${lead.name},\n\n` +
    `Merci pour votre demande. J'ai bien reçu les informations concernant votre projet${lead.projectType ? ` (${lead.projectType})` : ''}.\n\n` +
    `Je reviens vers vous rapidement.\n\nCordialement,\nMatoStudio`

  return `mailto:${lead.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function parseOptions(options: string | null): string {
  if (!options) return 'Aucune'
  try {
    const arr = JSON.parse(options) as string[]
    return arr.length > 0 ? arr.join(', ') : 'Aucune'
  } catch {
    return options
  }
}

export function AdminLeadDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [lead, setLead] = useState<Lead | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [noteValue, setNoteValue] = useState('')
  const [noteSaving, setNoteSaving] = useState(false)
  const [statusSaving, setStatusSaving] = useState(false)

  useEffect(() => {
    if (!id) return
    adminGetLead(id)
      .then((l) => {
        setLead(l)
        setNoteValue(l.internalNote ?? '')
      })
      .catch(() => setError('Impossible de charger la demande.'))
      .finally(() => setLoading(false))
  }, [id])

  async function handleStatusChange(status: LeadStatus) {
    if (!lead) return
    setStatusSaving(true)
    try {
      const updated = await adminUpdateLeadStatus(lead.id, status)
      setLead(updated)
    } finally {
      setStatusSaving(false)
    }
  }

  async function handleNoteSave() {
    if (!lead) return
    setNoteSaving(true)
    try {
      const updated = await adminUpdateLeadNote(lead.id, noteValue)
      setLead(updated)
    } finally {
      setNoteSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="admin-layout">
        <div className="admin-state-empty">
          <p>Chargement…</p>
        </div>
      </div>
    )
  }

  if (error || !lead) {
    return (
      <div className="admin-layout">
        <div className="admin-state-error" role="alert">
          <p>{error ?? 'Demande introuvable.'}</p>
          <button
            className="button button-secondary"
            onClick={() => navigate(ROUTES.adminDashboard)}
          >
            Retour au dashboard
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-layout">
      <header className="admin-header">
        <button
          className="admin-header__back button button-ghost"
          onClick={() => navigate(ROUTES.adminDashboard)}
        >
          ← Retour
        </button>
        <div className="admin-header__brand">
          <strong>Demande #{lead.id.slice(-6).toUpperCase()}</strong>
        </div>
      </header>

      <main className="admin-main admin-lead-detail">
        <div className="admin-detail-grid">
          <section className="admin-detail-card">
            <div className="admin-detail-card__header">
              <h2>{lead.name}</h2>
              <LeadStatusBadge status={lead.status} />
            </div>

            <dl className="admin-detail-list">
              <div>
                <dt>Type</dt>
                <dd>{lead.type === 'quote' ? 'Demande de devis' : 'Demande de contact'}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${lead.email}`}>{lead.email}</a>
                </dd>
              </div>
              {lead.phone && (
                <div>
                  <dt>Téléphone</dt>
                  <dd>
                    <a href={`tel:${lead.phone}`}>{lead.phone}</a>
                  </dd>
                </div>
              )}
              <div>
                <dt>Type de projet</dt>
                <dd>{lead.projectType}</dd>
              </div>
              {lead.budget && (
                <div>
                  <dt>Budget</dt>
                  <dd>{lead.budget}</dd>
                </div>
              )}
              {lead.timeline && (
                <div>
                  <dt>Délai</dt>
                  <dd>{lead.timeline}</dd>
                </div>
              )}
              {lead.pageCount !== null && (
                <div>
                  <dt>Pages</dt>
                  <dd>{lead.pageCount}</dd>
                </div>
              )}
              {lead.options && (
                <div>
                  <dt>Options</dt>
                  <dd>{parseOptions(lead.options)}</dd>
                </div>
              )}
              {lead.deadline && (
                <div>
                  <dt>Délai souhaité</dt>
                  <dd>{lead.deadline}</dd>
                </div>
              )}
              {lead.estimate !== null && (
                <div>
                  <dt>Estimation</dt>
                  <dd>{lead.estimate.toLocaleString('fr-FR')} €</dd>
                </div>
              )}
              <div>
                <dt>Reçue le</dt>
                <dd>{formatDate(lead.createdAt)}</dd>
              </div>
            </dl>

            {lead.message && (
              <div className="admin-detail-message">
                <h3>Message</h3>
                <p>{lead.message}</p>
              </div>
            )}

            <a className="button button-primary" href={buildMailtoLink(lead)}>
              Répondre par email
            </a>
          </section>

          <aside className="admin-detail-sidebar">
            <div className="admin-sidebar-card">
              <h3>Statut</h3>
              <select
                className="admin-status-select"
                value={lead.status}
                disabled={statusSaving}
                onChange={(e) => handleStatusChange(e.target.value as LeadStatus)}
                aria-label="Changer le statut"
              >
                {ALL_LEAD_STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {LEAD_STATUS_LABELS[s]}
                  </option>
                ))}
              </select>
            </div>

            <div className="admin-sidebar-card">
              <h3>Note interne</h3>
              <textarea
                className="admin-note-textarea"
                value={noteValue}
                rows={6}
                placeholder="Note interne — non visible par le client."
                onChange={(e) => setNoteValue(e.target.value)}
              />
              <button
                className="button button-secondary"
                onClick={handleNoteSave}
                disabled={noteSaving}
              >
                {noteSaving ? 'Enregistrement…' : 'Enregistrer la note'}
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
