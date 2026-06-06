interface StatsCardProps {
  label: string
  value: number
  accent?: boolean
}

export function StatsCard({ label, value, accent = false }: StatsCardProps) {
  return (
    <div className={`admin-stats-card ${accent ? 'admin-stats-card--accent' : ''}`}>
      <span className="admin-stats-card__value">{value}</span>
      <span className="admin-stats-card__label">{label}</span>
    </div>
  )
}
