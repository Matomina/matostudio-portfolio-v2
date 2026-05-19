import type { HTMLAttributes, ReactNode } from 'react'

type ContainerSize = 'default' | 'narrow' | 'wide'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  size?: ContainerSize
}

const sizeClassNames: Record<ContainerSize, string> = {
  default: '',
  narrow: 'container-narrow',
  wide: 'container-wide',
}

export function Container({
  children,
  className = '',
  size = 'default',
  ...props
}: ContainerProps) {
  const classNames = ['container', sizeClassNames[size], className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}
