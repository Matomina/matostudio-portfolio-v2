import type { AdminStats, Lead, LeadStatus } from '@/types/admin'

const TIMEOUT_MS = 10_000

function getApiBaseUrl() {
  return (import.meta.env.VITE_API_URL ?? 'http://localhost:3000').replace(/\/$/, '')
}

export class AdminApiError extends Error {
  constructor(readonly status: number) {
    super(`Admin API error: ${status}`)
    this.name = 'AdminApiError'
  }
}

async function adminFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const response = await fetch(`${getApiBaseUrl()}${endpoint}`, {
      ...options,
      credentials: 'include',
      headers: { 'Content-Type': 'application/json', ...options.headers },
      signal: controller.signal,
    })

    if (!response.ok) {
      throw new AdminApiError(response.status)
    }

    return response.json() as Promise<T>
  } finally {
    clearTimeout(timeout)
  }
}

export async function adminLogin(password: string): Promise<void> {
  await adminFetch('/api/admin/auth/login', {
    method: 'POST',
    body: JSON.stringify({ password }),
  })
}

export async function adminLogout(): Promise<void> {
  await adminFetch('/api/admin/auth/logout', { method: 'POST' })
}

export async function adminGetMe(): Promise<{ role: string }> {
  return adminFetch<{ success: boolean; role: string }>('/api/admin/auth/me')
}

export async function adminGetStats(): Promise<AdminStats> {
  const data = await adminFetch<{ success: boolean; stats: AdminStats }>('/api/admin/stats')
  return data.stats
}

export async function adminGetLeads(filters?: { type?: string; status?: string }): Promise<Lead[]> {
  const params = new URLSearchParams()
  if (filters?.type) params.set('type', filters.type)
  if (filters?.status) params.set('status', filters.status)
  const qs = params.size > 0 ? `?${params.toString()}` : ''
  const data = await adminFetch<{ success: boolean; leads: Lead[] }>(`/api/admin/leads${qs}`)
  return data.leads
}

export async function adminGetLead(id: string): Promise<Lead> {
  const data = await adminFetch<{ success: boolean; lead: Lead }>(`/api/admin/leads/${id}`)
  return data.lead
}

export async function adminUpdateLeadStatus(id: string, status: LeadStatus): Promise<Lead> {
  const data = await adminFetch<{ success: boolean; lead: Lead }>(`/api/admin/leads/${id}/status`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  })
  return data.lead
}

export async function adminUpdateLeadNote(id: string, internalNote: string): Promise<Lead> {
  const data = await adminFetch<{ success: boolean; lead: Lead }>(`/api/admin/leads/${id}/note`, {
    method: 'PATCH',
    body: JSON.stringify({ internalNote }),
  })
  return data.lead
}
