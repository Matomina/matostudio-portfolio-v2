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

const steps = ['Base', 'Options', 'Résumé'] as const

export function QuoteSimulatorSection({ content }: QuoteSimulatorSectionProps) {
  const firstPricedOffer = content.base.find((item) => typeof item.amount === 'number')
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedBaseName, setSelectedBaseName] = useState(firstPricedOffer?.name ?? content.base[0]?.name)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const selectedBase = content.base.find((item) => item.name === selectedBaseName) ?? content.base[0]
  const isCustomQuote = selectedBase?.amount === null

  const selectedOptionItems = useMemo(
    () => content.options.filter((option) => selectedOptions.includes(option.label)),
    [content.options, selectedOptions],
  )

  const total = useMemo(() => {
    if (!selectedBase || isCustomQuote) {
      return null
    }

    const optionsTotal = selectedOptionItems.reduce((sum, option) => sum + option.amount, 0)
    return selectedBase.amount + optionsTotal
  }, [isCustomQuote, selectedBase, selectedOptionItems])

  const toggleOption = (label: string) => {
    setSelectedOptions((currentOptions) =>
      currentOptions.includes(label)
        ? currentOptions.filter((option) => option !== label)
        : [...currentOptions, label],
    )
  }

  const goToPreviousStep = () => {
    setCurrentStep((step) => Math.max(step - 1, 0))
  }

  const goToNextStep = () => {
    setCurrentStep((step) => Math.min(step + 1, steps.length - 1))
  }

  const contactHref = `mailto:matomina.nguayila@gmail.com?subject=${encodeURIComponent(
    'Demande de devis MatoStudio',
  )}&body=${encodeURIComponent(
    `Bonjour MatoStudio,\n\nJe souhaite un devis pour un projet web.\n\nBase choisie : ${selectedBase?.name ?? 'Non defini'}\nOptions : ${
      selectedOptionItems.length > 0
        ? selectedOptionItems.map((option) => option.label).join(', ')
        : 'Aucune option selectionnee'
    }\nEstimation : ${total === null ? 'Sur devis' : currencyFormatter.format(total)}\n\nMerci.`,
  )}`

  return (
    <Card className="quote-estimator" padding="lg" variant="premium">
      <div className="quote-estimator__progress" aria-label="Progression de la simulation de devis">
        {steps.map((step, index) => (
          <span
            className={`quote-estimator__progress-step ${index <= currentStep ? 'is-active' : ''}`}
            key={step}
            aria-label={`Etape ${index + 1}: ${step}`}
          />
        ))}
      </div>

      <div className="quote-estimator__body">
        {currentStep === 0 && (
          <div className="quote-estimator__step">
            <p className="quote-estimator__step-kicker">Etape 1 sur 3</p>
            <h3>Choisissez la base de votre projet</h3>
            <div className="quote-estimator__choices" role="radiogroup" aria-label="Base du projet web">
              {content.base.map((item) => {
                const isSelected = item.name === selectedBaseName

                return (
                  <button
                    className={`quote-estimator__choice ${isSelected ? 'is-selected' : ''}`}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    key={item.name}
                    onClick={() => {
                      setSelectedBaseName(item.name)
                      if (item.amount === null) {
                        setSelectedOptions([])
                      }
                    }}
                  >
                    <strong>{item.name}</strong>
                    <small>{item.description}</small>
                    <strong>{item.price}</strong>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="quote-estimator__step">
            <p className="quote-estimator__step-kicker">Etape 2 sur 3</p>
            <h3>Ajoutez les options utiles</h3>
            <p>
              {isCustomQuote
                ? 'Les options seront cadrees directement avec vous pour un projet sur mesure.'
                : 'Selectionnez uniquement ce qui correspond a votre besoin reel.'}
            </p>
            <div className="quote-estimator__choices">
              {content.options.map((option) => {
                const isSelected = selectedOptions.includes(option.label)

                return (
                  <button
                    className={`quote-estimator__choice ${isSelected ? 'is-selected' : ''}`}
                    type="button"
                    aria-pressed={isSelected}
                    key={option.label}
                    disabled={isCustomQuote}
                    onClick={() => {
                      toggleOption(option.label)
                    }}
                  >
                    <strong>{option.label}</strong>
                    <small>{option.price}</small>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="quote-estimator__step quote-estimator__summary">
            <p className="quote-estimator__step-kicker">Etape 3 sur 3</p>
            <h3>Résumé de votre estimation</h3>
            <div className="quote-estimator__summary-grid">
              <div className="quote-estimator__summary-card">
                <span>Base projet</span>
                <strong>{selectedBase?.name}</strong>
                <span>{selectedBase?.price}</span>
              </div>
              <div className="quote-estimator__summary-card">
                <span>Options</span>
                <strong>{selectedOptionItems.length}</strong>
                <span>
                  {selectedOptionItems.length > 0
                    ? selectedOptionItems.map((option) => option.label).join(', ')
                    : 'Aucune option selectionnee'}
                </span>
              </div>
              <div className="quote-estimator__summary-card">
                <span>Type de devis</span>
                <strong>{isCustomQuote ? 'Sur mesure' : 'Indicatif'}</strong>
                <span>{isCustomQuote ? 'Cadrage necessaire' : 'Budget estime automatiquement'}</span>
              </div>
            </div>

            <div className="quote-estimator__total" aria-live="polite">
              <span>{isCustomQuote ? 'Projet sur mesure' : content.result.label}</span>
              <strong>{total === null ? 'Sur devis' : currencyFormatter.format(total)}</strong>
              <span>{isCustomQuote ? content.result.customNote : content.result.note}</span>
            </div>

            <a className="quote-estimator__contact" href={contactHref}>
              Demander ce devis
            </a>
          </div>
        )}
      </div>

      <div className="quote-estimator__navigation" aria-label="Navigation du simulateur de devis">
        <button type="button" onClick={goToPreviousStep} disabled={currentStep === 0}>
          Retour
        </button>
        <button type="button" onClick={goToNextStep} disabled={currentStep === steps.length - 1}>
          Continuer
        </button>
      </div>
    </Card>
  )
}
