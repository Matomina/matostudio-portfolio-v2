export type LeadType = 'contact' | 'quote'

export type LeadStatus =
  | 'new'
  | 'to_call'
  | 'in_discussion'
  | 'quote_sent'
  | 'won'
  | 'lost'
  | 'archived'

export interface Lead {
  id: string
  type: LeadType
  name: string
  email: string
  phone: string | null
  projectType: string
  budget: string | null
  timeline: string | null
  pageCount: number | null
  options: string | null
  deadline: string | null
  estimate: number | null
  message: string | null
  status: LeadStatus
  internalNote: string | null
  createdAt: string
  updatedAt: string
}

export interface AdminStats {
  total: number
  new: number
  to_call: number
  in_discussion: number
  quote_sent: number
  won: number
  lost: number
  archived: number
  contact: number
  quote: number
}

export const LEAD_STATUS_LABELS: Record<LeadStatus, string> = {
  new: 'Nouveau',
  to_call: 'À rappeler',
  in_discussion: 'En discussion',
  quote_sent: 'Devis envoyé',
  won: 'Gagné',
  lost: 'Perdu',
  archived: 'Archivé',
}

export const ALL_LEAD_STATUSES: LeadStatus[] = [
  'new',
  'to_call',
  'in_discussion',
  'quote_sent',
  'won',
  'lost',
  'archived',
]
