import type { LeadStatus } from '@/types/admin'
import { LEAD_STATUS_LABELS } from '@/types/admin'

interface LeadStatusBadgeProps {
  status: LeadStatus
}

const statusModifiers: Record<LeadStatus, string> = {
  new: 'badge--new',
  to_call: 'badge--to-call',
  in_discussion: 'badge--in-discussion',
  quote_sent: 'badge--quote-sent',
  won: 'badge--won',
  lost: 'badge--lost',
  archived: 'badge--archived',
}

export function LeadStatusBadge({ status }: LeadStatusBadgeProps) {
  return (
    <span className={`lead-status-badge ${statusModifiers[status]}`}>
      {LEAD_STATUS_LABELS[status]}
    </span>
  )
}
