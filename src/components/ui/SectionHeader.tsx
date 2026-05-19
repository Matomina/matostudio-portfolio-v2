type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className = '',
}: SectionHeaderProps) {
  const classNames = ['section-header', className].filter(Boolean).join(' ')

  return (
    <div className={classNames}>
      {eyebrow ? <p className="section-header__eyebrow">{eyebrow}</p> : null}
      <h2 className="section-header__title">{title}</h2>
      {description ? <p className="section-header__description">{description}</p> : null}
    </div>
  )
}
