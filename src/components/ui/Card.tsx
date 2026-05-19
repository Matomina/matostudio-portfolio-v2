import type { HTMLAttributes, ReactNode } from 'react'

type CardVariant = 'surface' | 'strong' | 'premium'
type CardPadding = 'sm' | 'md' | 'lg'

type CardProps = HTMLAttributes<HTMLElement> & {
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
    <article className={classNames} {...props}>
      {children}
    </article>
  )
}
