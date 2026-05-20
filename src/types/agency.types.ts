export type SelectOption = {
  value: string
  label: string
}

export type ContactReassuranceItem = {
  title: string
  description: string
}

export type QuoteProjectTypeId =
  | 'essential-showcase'
  | 'premium-showcase'
  | 'landing-page'
  | 'redesign'
  | 'custom-project'

export type QuoteOptionId =
  | 'local-seo'
  | 'content-writing'
  | 'advanced-form'
  | 'premium-animations'
  | 'maintenance'
  | 'future-payment'

export type QuoteDeadlineId = 'flexible' | 'standard' | 'priority' | 'express'

export type QuoteProjectType = {
  id: QuoteProjectTypeId
  label: string
  description: string
  basePrice: number
  includedPages: number
  extraPagePrice: number
}

export type QuoteOption = {
  id: QuoteOptionId
  label: string
  description: string
  price: number
}

export type QuoteDeadline = {
  id: QuoteDeadlineId
  label: string
  description: string
  multiplier: number
}

export type QuoteEstimateInput = {
  projectType: QuoteProjectType
  pageCount: number
  options: readonly QuoteOption[]
  deadline: QuoteDeadline
}

export type QuoteEstimate = {
  basePrice: number
  extraPages: number
  extraPagesPrice: number
  optionsTotal: number
  deadlineAdjustment: number
  total: number
}

export type PaymentPreviewMethod = {
  title: string
  description: string
  status: string
}
