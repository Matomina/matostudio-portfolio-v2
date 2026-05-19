import { useMemo, useState } from 'react'

import { Card } from '@/components/ui/Card'

type QuoteBase = {
  name: string
  price: string
  description: string
  amount: number | null
}

type QuoteOption = {
  label: string
  price: string
  amount: number
}

type QuoteSimulatorContent = {
  base: readonly QuoteBase[]
  options: readonly QuoteOption[]
  result: {
    label: string
    value: string
    note: string
    customNote: string
  }
}

type QuoteSimulatorSectionProps = {
  content: QuoteSimulatorContent
}

const currencyFormatter = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

export function QuoteSimulatorSection({ content }: QuoteSimulatorSectionProps) {
  const firstPricedOffer = content.base.find((item) => typeof item.amount === 'number')
  const [selectedBaseName, setSelectedBaseName] = useState(firstPricedOffer?.name ?? content.base[0]?.name)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const selectedBase = content.base.find((item) => item.name === selectedBaseName) ?? content.base[0]
  const isCustomQuote = selectedBase?.amount === null

  const total = useMemo(() => {
    if (!selectedBase || isCustomQuote) {
      return null
    }

    const optionsTotal = content.options
      .filter((option) => selectedOptions.includes(option.label))
      .reduce((sum, option) => sum + option.amount, 0)

    return selectedBase.amount + optionsTotal
  }, [content.options, isCustomQuote, selectedBase, selectedOptions])

  const toggleOption = (label: string) => {
    setSelectedOptions((currentOptions) =>
      currentOptions.includes(label)
        ? currentOptions.filter((option) => option !== label)
        : [...currentOptions, label],
    )
  }

  return (
    <Card className="quote-simulator" padding="lg" variant="premium">
      <div className="quote-simulator__grid">
        <div className="quote-simulator__column">
          <p className="quote-simulator__label">Base projet</p>
          <div className="quote-simulator__cards" role="radiogroup" aria-label="Base du projet web">
            {content.base.map((item) => {
              const isSelected = item.name === selectedBaseName

              return (
                <button
                  className={`quote-simulator__item ${isSelected ? 'is-selected' : ''}`}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  key={item.name}
                  onClick={() => {
                    setSelectedBaseName(item.name)
                  }}
                >
                  <span>
                    <strong className="quote-simulator__item-title">{item.name}</strong>
                    <small>{item.description}</small>
                  </span>
                  <strong>{item.price}</strong>
                </button>
              )
            })}
          </div>
        </div>

        <div className="quote-simulator__column">
          <p className="quote-simulator__label">Options possibles</p>
          <div className="quote-simulator__options">
            {content.options.map((option) => {
              const isSelected = selectedOptions.includes(option.label)

              return (
                <button
                  className={`quote-simulator__option ${isSelected ? 'is-selected' : ''}`}
                  type="button"
                  aria-pressed={isSelected}
                  key={option.label}
                  disabled={isCustomQuote}
                  onClick={() => {
                    toggleOption(option.label)
                  }}
                >
                  <span>{option.label}</span>
                  <strong>{option.price}</strong>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="quote-simulator__result" aria-live="polite">
        <p>{isCustomQuote ? 'Projet sur mesure' : content.result.label}</p>
        <strong>{total === null ? 'Sur devis' : currencyFormatter.format(total)}</strong>
        <span>{isCustomQuote ? content.result.customNote : content.result.note}</span>
      </div>
    </Card>
  )
}
