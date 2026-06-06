import { apiFetch } from './client'

export type ContactPayload = {
  name: string
  email: string
  phone: string
  projectType: string
  budget: string
  timeline: string
  message: string
}

export function sendContactRequest(payload: ContactPayload): Promise<void> {
  return apiFetch('/api/contact', payload)
}
