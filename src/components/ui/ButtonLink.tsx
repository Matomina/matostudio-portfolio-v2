import type { AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

type ButtonLinkVariant = 'primary' | 'secondary' | 'ghost'
type ButtonLinkSize = 'sm' | 'md' | 'lg'

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonLinkVariant
  size?: ButtonLinkSize
  isExternal?: boolean
}

const variantClassNames: Record<ButtonLinkVariant, string> = {
  primary: 'button-primary',
  secondary: 'button-secondary',
  ghost: 'button-ghost',
}

const sizeClassNames: Record<ButtonLinkSize, string> = {
  sm: 'button-sm',
  md: 'button-md',
  lg: 'button-lg',
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  isExternal = false,
  rel,
  target,
  href,
  ...rest
}: ButtonLinkProps) {
  const classNames = ['button', variantClassNames[variant], sizeClassNames[size], className]
    .filter(Boolean)
    .join(' ')

  if (!isExternal && typeof href === 'string' && href.startsWith('/')) {
    return (
      <Link to={href} className={classNames} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={classNames}
      rel={isExternal ? (rel ?? 'noreferrer') : rel}
      target={isExternal ? (target ?? '_blank') : target}
      {...rest}
    >
      {children}
    </a>
  )
}
