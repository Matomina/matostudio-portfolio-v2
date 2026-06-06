import { apiFetch } from './client'

export type QuotePayload = {
  name: string
  email: string
  phone: string
  projectType: string
  pageCount: number
  options: string[]
  deadline: string
  estimate: number
  message: string
}

export function sendQuoteRequest(payload: QuotePayload): Promise<void> {
  return apiFetch('/api/quote', payload)
}
