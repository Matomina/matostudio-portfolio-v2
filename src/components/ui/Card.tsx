import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

type CardVariant = 'surface' | 'strong' | 'premium'
type CardPadding = 'sm' | 'md' | 'lg'

type CardProps = Omit<HTMLMotionProps<'article'>, 'children'> & {
  children: ReactNode
  variant?: CardVariant
  padding?: CardPadding
  isInteractive?: boolean
}

const variantClassNames: Record<CardVariant, string> = {
  surface: 'card-surface',
  strong: 'card-strong',
  premium: 'card-premium',
}

const paddingClassNames: Record<CardPadding, string> = {
  sm: 'card-padding-sm',
  md: 'card-padding-md',
  lg: 'card-padding-lg',
}

export function Card({
  children,
  className = '',
  variant = 'surface',
  padding = 'md',
  isInteractive = false,
  ...props
}: CardProps) {
  const shouldReduceMotion = useReducedMotion()
  const classNames = [
    'card',
    variantClassNames[variant],
    paddingClassNames[padding],
    isInteractive ? 'card-interactive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <motion.article
      className={classNames}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.article>
  )
}
