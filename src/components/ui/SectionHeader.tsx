import { motion, useReducedMotion } from 'framer-motion'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ eyebrow, title, description, className = '' }: SectionHeaderProps) {
  const shouldReduceMotion = useReducedMotion()
  const classNames = ['section-header', className].filter(Boolean).join(' ')

  return (
    <motion.div
      className={classNames}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow ? <p className="section-header__eyebrow">{eyebrow}</p> : null}
      <h2 className="section-header__title">{title}</h2>
      {description ? <p className="section-header__description">{description}</p> : null}
    </motion.div>
  )
}
