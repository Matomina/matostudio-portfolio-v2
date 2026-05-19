import { useMemo, useState, type ChangeEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

import { ButtonLink } from '@/components/ui/ButtonLink'
import { quoteDeadlines, quoteOptions, quoteProjectTypes } from '@/data/quote-simulator.data'
import { useLanguage } from '@/hooks/useLanguage'
import { ROUTES } from '@/lib/constants/routes'
import { calculateQuoteEstimate, formatQuoteAmount } from '@/lib/utils/quoteEstimate'

import type { QuoteDeadlineId, QuoteOptionId, QuoteProjectTypeId } from '@/types/agency.types'

const quickPageCounts = [1, 3, 5, 8, 12] as const

function clampPageCount(value: number) {
  if (Number.isNaN(value)) {
    return 1
  }

  return Math.min(20, Math.max(1, Math.round(value)))
}

export function QuoteSimulator() {
  const shouldReduceMotion = useReducedMotion()
  const { copy } = useLanguage()
  const simulatorCopy = copy.quoteSimulator
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [selectedProjectTypeId, setSelectedProjectTypeId] =
    useState<QuoteProjectTypeId>('premium-showcase')
  const [pageCount, setPageCount] = useState(5)
  const [selectedOptionIds, setSelectedOptionIds] = useState<QuoteOptionId[]>([
    'local-seo',
    'advanced-form',
  ])
  const [selectedDeadlineId, setSelectedDeadlineId] = useState<QuoteDeadlineId>('standard')

  const selectedProjectType =
    quoteProjectTypes.find((projectType) => projectType.id === selectedProjectTypeId) ??
    quoteProjectTypes[0]
  const selectedDeadline =
    quoteDeadlines.find((deadline) => deadline.id === selectedDeadlineId) ?? quoteDeadlines[0]
  const selectedOptions = useMemo(
    () => quoteOptions.filter((option) => selectedOptionIds.includes(option.id)),
    [selectedOptionIds],
  )
  const estimate = useMemo(
    () =>
      calculateQuoteEstimate({
        projectType: selectedProjectType,
        pageCount,
        options: selectedOptions,
        deadline: selectedDeadline,
      }),
    [pageCount, selectedDeadline, selectedOptions, selectedProjectType],
  )

  const isFirstStep = currentStepIndex === 0
  const isLastStep = currentStepIndex === simulatorCopy.steps.length - 1

  function goToPreviousStep() {
    setCurrentStepIndex((current) => Math.max(0, current - 1))
  }

  function goToNextStep() {
    setCurrentStepIndex((current) => Math.min(simulatorCopy.steps.length - 1, current + 1))
  }

  function updatePageCount(event: ChangeEvent<HTMLInputElement>) {
    setPageCount(clampPageCount(Number(event.target.value)))
  }

  function toggleOption(optionId: QuoteOptionId) {
    setSelectedOptionIds((currentIds) =>
      currentIds.includes(optionId)
        ? currentIds.filter((currentId) => currentId !== optionId)
        : [...currentIds, optionId],
    )
  }

  return (
    <motion.section
      className="quote-simulator"
      aria-labelledby="quote-simulator-title"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="quote-simulator__shell">
        <div className="quote-simulator__topline">
          <div>
            <p className="section-eyebrow">{simulatorCopy.eyebrow}</p>
            <h2 id="quote-simulator-title">{simulatorCopy.title}</h2>
          </div>

          <div className="quote-simulator__total" aria-live="polite">
            <span>{simulatorCopy.estimate}</span>
            <strong>{formatQuoteAmount(estimate.total)}</strong>
          </div>
        </div>

        <ol className="quote-steps" aria-label={simulatorCopy.stepsAria}>
          {simulatorCopy.steps.map((step, index) => (
            <li
              className={[
                'quote-steps__item',
                index === currentStepIndex ? 'is-active' : '',
                index < currentStepIndex ? 'is-complete' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              key={step}
            >
              <span>{index + 1}</span>
              {step}
            </li>
          ))}
        </ol>

        <div className="quote-step-panel">{renderCurrentStep()}</div>

        <div className="quote-simulator__controls">
          <button
            className="quote-control quote-control--secondary"
            type="button"
            onClick={goToPreviousStep}
            disabled={isFirstStep}
          >
            {simulatorCopy.back}
          </button>

          {isLastStep ? (
            <ButtonLink href={ROUTES.contact} variant="primary" size="lg">
              {simulatorCopy.requestQuote}
            </ButtonLink>
          ) : (
            <button
              className="quote-control quote-control--primary"
              type="button"
              onClick={goToNextStep}
            >
              {simulatorCopy.continue}
            </button>
          )}
        </div>
      </div>
    </motion.section>
  )

  function renderCurrentStep() {
    if (currentStepIndex === 0) {
      return (
        <div className="quote-choice-grid quote-choice-grid--projects">
          {quoteProjectTypes.map((projectType) => {
            const isSelected = projectType.id === selectedProjectTypeId
            const projectTypeCopy = simulatorCopy.projectTypes[projectType.id]

            return (
              <button
                className={`quote-choice ${isSelected ? 'is-selected' : ''}`}
                type="button"
                key={projectType.id}
                aria-pressed={isSelected}
                onClick={() => setSelectedProjectTypeId(projectType.id)}
              >
                <span>{projectTypeCopy.label}</span>
                <strong>
                  {copy.common.base} {formatQuoteAmount(projectType.basePrice)}
                </strong>
                <small>
                  {projectType.includedPages}{' '}
                  {projectType.includedPages > 1 ? copy.common.pages : copy.common.page}{' '}
                  {copy.common.included}
                </small>
                <p>{projectTypeCopy.description}</p>
              </button>
            )
          })}
        </div>
      )
    }

    if (currentStepIndex === 1) {
      return (
        <div className="quote-pages-step">
          <div className="quote-pages-step__counter">
            <label htmlFor="quote-page-count">{simulatorCopy.pageCount}</label>
            <input
              id="quote-page-count"
              min="1"
              max="20"
              type="number"
              value={pageCount}
              onChange={updatePageCount}
            />
          </div>

          <div className="quote-page-presets" aria-label={simulatorCopy.quickChoicesAria}>
            {quickPageCounts.map((count) => (
              <button
                className={pageCount === count ? 'is-selected' : ''}
                type="button"
                key={count}
                onClick={() => setPageCount(count)}
              >
                {count} {count > 1 ? copy.common.pages : copy.common.page}
              </button>
            ))}
          </div>

          <p className="quote-context-note">
            {simulatorCopy.pageContext
              .replace(
                '{includedPages}',
                `${selectedProjectType.includedPages} ${
                  selectedProjectType.includedPages > 1 ? copy.common.pages : copy.common.page
                }`,
              )
              .replace('{extraPagePrice}', formatQuoteAmount(selectedProjectType.extraPagePrice))}
          </p>
        </div>
      )
    }

    if (currentStepIndex === 2) {
      return (
        <div className="quote-choice-grid quote-choice-grid--options">
          {quoteOptions.map((option) => {
            const isSelected = selectedOptionIds.includes(option.id)
            const optionCopy = simulatorCopy.options[option.id]

            return (
              <label className={`quote-option ${isSelected ? 'is-selected' : ''}`} key={option.id}>
                <input
                  checked={isSelected}
                  type="checkbox"
                  onChange={() => toggleOption(option.id)}
                />
                <span>{optionCopy.label}</span>
                <strong>{formatQuoteAmount(option.price)}</strong>
                <p>{optionCopy.description}</p>
              </label>
            )
          })}
        </div>
      )
    }

    if (currentStepIndex === 3) {
      return (
        <div className="quote-choice-grid quote-choice-grid--deadlines">
          {quoteDeadlines.map((deadline) => {
            const isSelected = deadline.id === selectedDeadlineId
            const deadlineCopy = simulatorCopy.deadlines[deadline.id]

            return (
              <button
                className={`quote-choice ${isSelected ? 'is-selected' : ''}`}
                type="button"
                key={deadline.id}
                aria-pressed={isSelected}
                onClick={() => setSelectedDeadlineId(deadline.id)}
              >
                <span>{deadlineCopy.label}</span>
                <strong>
                  {deadline.multiplier === 1 ? copy.common.base : `x ${deadline.multiplier}`}
                </strong>
                <p>{deadlineCopy.description}</p>
              </button>
            )
          })}
        </div>
      )
    }

    return (
      <div className="quote-summary">
        <div className="quote-summary__main">
          <p className="section-eyebrow">{simulatorCopy.summaryEyebrow}</p>
          <h3>{formatQuoteAmount(estimate.total)}</h3>
          <p>{simulatorCopy.summaryNote}</p>
        </div>

        <dl className="quote-summary__details">
          <div>
            <dt>{simulatorCopy.baseChosen}</dt>
            <dd>
              {simulatorCopy.projectTypes[selectedProjectType.id].label} ·{' '}
              {formatQuoteAmount(estimate.basePrice)}
            </dd>
          </div>
          <div>
            <dt>{simulatorCopy.pagesLabel}</dt>
            <dd>
              {pageCount} {pageCount > 1 ? copy.common.pages : copy.common.page} ·{' '}
              {simulatorCopy.supplement} {formatQuoteAmount(estimate.extraPagesPrice)}
            </dd>
          </div>
          <div>
            <dt>{simulatorCopy.selectedOptions}</dt>
            <dd>
              {selectedOptions.length > 0
                ? selectedOptions.map((option) => simulatorCopy.options[option.id].label).join(', ')
                : copy.common.none}
            </dd>
          </div>
          <div>
            <dt>{simulatorCopy.desiredDeadline}</dt>
            <dd>
              {simulatorCopy.deadlines[selectedDeadline.id].label} · {simulatorCopy.adjustment}{' '}
              {formatQuoteAmount(estimate.deadlineAdjustment)}
            </dd>
          </div>
        </dl>
      </div>
    )
  }
}
