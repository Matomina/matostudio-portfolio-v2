import { describe, expect, it } from 'vitest'

import type { QuoteDeadline, QuoteOption, QuoteProjectType } from '@/types/agency.types'
import { calculateQuoteEstimate, formatQuoteAmount } from './quoteEstimate'

// --- project type fixtures ---

const essential: QuoteProjectType = {
  id: 'essential-showcase',
  label: 'Site vitrine essentiel',
  description: '',
  basePrice: 690,
  includedPages: 3,
  extraPagePrice: 120,
}

const premium: QuoteProjectType = {
  id: 'premium-showcase',
  label: 'Site premium',
  description: '',
  basePrice: 1290,
  includedPages: 6,
  extraPagePrice: 150,
}

// --- deadline fixtures ---

const standard: QuoteDeadline = {
  id: 'standard',
  label: 'Standard',
  description: '',
  multiplier: 1,
}
const flexible: QuoteDeadline = {
  id: 'flexible',
  label: 'Flexible',
  description: '',
  multiplier: 0.95,
}
const priority: QuoteDeadline = {
  id: 'priority',
  label: 'Prioritaire',
  description: '',
  multiplier: 1.15,
}
const express: QuoteDeadline = {
  id: 'express',
  label: 'Express',
  description: '',
  multiplier: 1.25,
}

// --- option fixtures ---

const seo: QuoteOption = { id: 'local-seo', label: 'SEO local', description: '', price: 180 }
const content: QuoteOption = {
  id: 'content-writing',
  label: 'Rédaction',
  description: '',
  price: 260,
}

// ---

describe('calculateQuoteEstimate', () => {
  describe('base calculation', () => {
    it('returns basePrice with no extras when multiplier is 1', () => {
      const result = calculateQuoteEstimate({
        projectType: essential,
        pageCount: 3,
        options: [],
        deadline: standard,
      })
      expect(result).toEqual({
        basePrice: 690,
        extraPages: 0,
        extraPagesPrice: 0,
        optionsTotal: 0,
        deadlineAdjustment: 0,
        total: 690,
      })
    })
  })

  describe('extra pages', () => {
    it('charges for each page beyond includedPages', () => {
      // essential: 3 included, 120/extra — pageCount 5 → 2 extra pages
      const result = calculateQuoteEstimate({
        projectType: essential,
        pageCount: 5,
        options: [],
        deadline: standard,
      })
      expect(result.extraPages).toBe(2)
      expect(result.extraPagesPrice).toBe(240)
      expect(result.total).toBe(930)
    })

    it('does not charge extra when pageCount is below includedPages', () => {
      // premium: 6 included — pageCount 4 → 0 extra
      const result = calculateQuoteEstimate({
        projectType: premium,
        pageCount: 4,
        options: [],
        deadline: standard,
      })
      expect(result.extraPages).toBe(0)
      expect(result.extraPagesPrice).toBe(0)
      expect(result.total).toBe(1290)
    })

    it('rounds non-integer pageCount to nearest integer', () => {
      // round(3.5) = 4 → 1 extra page at 120
      const result = calculateQuoteEstimate({
        projectType: essential,
        pageCount: 3.5,
        options: [],
        deadline: standard,
      })
      expect(result.extraPages).toBe(1)
      expect(result.extraPagesPrice).toBe(120)
      expect(result.total).toBe(810)
    })

    it('enforces a minimum pageCount of 1', () => {
      // max(1, round(0)) = 1 → still within 3 included pages
      const result = calculateQuoteEstimate({
        projectType: essential,
        pageCount: 0,
        options: [],
        deadline: standard,
      })
      expect(result.extraPages).toBe(0)
      expect(result.total).toBe(690)
    })
  })

  describe('options', () => {
    it('adds a single option price to the total', () => {
      const result = calculateQuoteEstimate({
        projectType: essential,
        pageCount: 3,
        options: [seo],
        deadline: standard,
      })
      expect(result.optionsTotal).toBe(180)
      expect(result.total).toBe(870)
    })

    it('sums multiple option prices', () => {
      // seo (180) + content (260) = 440
      const result = calculateQuoteEstimate({
        projectType: essential,
        pageCount: 3,
        options: [seo, content],
        deadline: standard,
      })
      expect(result.optionsTotal).toBe(440)
      expect(result.total).toBe(1130)
    })
  })

  describe('deadline multiplier', () => {
    it('applies flexible discount and rounds total to nearest ten', () => {
      // 690 * 0.95 = 655.5 → round to nearest 10 = 660
      const result = calculateQuoteEstimate({
        projectType: essential,
        pageCount: 3,
        options: [],
        deadline: flexible,
      })
      expect(result.total).toBe(660)
      expect(result.deadlineAdjustment).toBe(-30)
    })

    it('applies priority surcharge and rounds total to nearest ten', () => {
      // 690 * 1.15 = 793.5 → round to nearest 10 = 790
      const result = calculateQuoteEstimate({
        projectType: essential,
        pageCount: 3,
        options: [],
        deadline: priority,
      })
      expect(result.total).toBe(790)
      expect(result.deadlineAdjustment).toBe(100)
    })

    it('applies express surcharge and rounds total to nearest ten', () => {
      // 690 * 1.25 = 862.5 → round to nearest 10 = 860
      const result = calculateQuoteEstimate({
        projectType: essential,
        pageCount: 3,
        options: [],
        deadline: express,
      })
      expect(result.total).toBe(860)
      expect(result.deadlineAdjustment).toBe(170)
    })

    it('deadlineAdjustment equals rounded total minus pre-rounding subtotal', () => {
      // 870 * 1.15 = 1000.5 → 1000. adjustment = 1000 - 870 = 130
      const result = calculateQuoteEstimate({
        projectType: essential,
        pageCount: 3,
        options: [seo],
        deadline: priority,
      })
      expect(result.deadlineAdjustment).toBe(
        result.total - (result.basePrice + result.extraPagesPrice + result.optionsTotal),
      )
    })
  })

  describe('rounding', () => {
    it('total is always a multiple of ten', () => {
      const result = calculateQuoteEstimate({
        projectType: essential,
        pageCount: 3,
        options: [seo],
        deadline: priority,
      })
      expect(result.total % 10).toBe(0)
    })
  })

  describe('combined calculation', () => {
    it('handles extra pages, options, and a deadline multiplier together', () => {
      // premium: 1290 base, 6 included, 150/extra
      // pageCount 8: extraPages = 2, extraPagesPrice = 300
      // option: seo (180) → optionsTotal = 180
      // subtotal = 1290 + 300 + 180 = 1770
      // priority (1.15): 1770 * 1.15 = 2035.5 → round to nearest 10 = 2040
      // deadlineAdjustment = 2040 - 1770 = 270
      const result = calculateQuoteEstimate({
        projectType: premium,
        pageCount: 8,
        options: [seo],
        deadline: priority,
      })
      expect(result.basePrice).toBe(1290)
      expect(result.extraPages).toBe(2)
      expect(result.extraPagesPrice).toBe(300)
      expect(result.optionsTotal).toBe(180)
      expect(result.deadlineAdjustment).toBe(270)
      expect(result.total).toBe(2040)
    })
  })
})

describe('formatQuoteAmount', () => {
  it('returns a string containing the euro sign', () => {
    expect(formatQuoteAmount(690)).toContain('€')
  })

  it('formats amounts without decimal places', () => {
    const formatted = formatQuoteAmount(690)
    expect(formatted).toContain('690')
    expect(formatted).not.toMatch(/[.,]\d/)
  })

  it('formats zero', () => {
    const formatted = formatQuoteAmount(0)
    expect(formatted).toContain('0')
    expect(formatted).toContain('€')
  })

  it('formats amounts above 1000 with a thousands separator', () => {
    const formatted = formatQuoteAmount(1290)
    // fr-FR uses non-breaking space as thousands separator
    expect(formatted).toContain('1')
    expect(formatted).toContain('290')
    expect(formatted).toContain('€')
  })

  it('returns a string type', () => {
    expect(typeof formatQuoteAmount(690)).toBe('string')
  })
})
