import type { QuoteEstimate, QuoteEstimateInput } from '@/types/agency.types'

function roundToNearestTen(amount: number) {
  return Math.round(amount / 10) * 10
}

export function calculateQuoteEstimate({
  projectType,
  pageCount,
  options,
  deadline,
}: QuoteEstimateInput): QuoteEstimate {
  const normalizedPageCount = Math.max(1, Math.round(pageCount))
  const extraPages = Math.max(0, normalizedPageCount - projectType.includedPages)
  const extraPagesPrice = extraPages * projectType.extraPagePrice
  const optionsTotal = options.reduce((total, option) => total + option.price, 0)
  const subtotal = projectType.basePrice + extraPagesPrice + optionsTotal
  const adjustedTotal = roundToNearestTen(subtotal * deadline.multiplier)
  const deadlineAdjustment = adjustedTotal - subtotal

  return {
    basePrice: projectType.basePrice,
    extraPages,
    extraPagesPrice,
    optionsTotal,
    deadlineAdjustment,
    total: adjustedTotal,
  }
}

export function formatQuoteAmount(amount: number) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount)
}
