import type { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '@/hooks/useAuth'
import { ROUTES } from '@/lib/constants/routes'

export function RequireAuth({ children }: { children: ReactElement }) {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return (
      <div className="admin-loading" aria-label="Vérification de la session…">
        <div className="admin-loading__spinner" aria-hidden="true" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.adminLogin} replace />
  }

  return children
}
