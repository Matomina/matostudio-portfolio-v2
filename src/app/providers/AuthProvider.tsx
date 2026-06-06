import { useCallback, useEffect, useState, type ReactNode } from 'react'

import { AuthContext } from '@/contexts/auth.context'
import { adminGetMe, adminLogout } from '@/lib/api/admin'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  const checkSession = useCallback(async () => {
    try {
      await adminGetMe()
      setIsAuthenticated(true)
    } catch {
      setIsAuthenticated(false)
    } finally {
      setLoading(false)
    }
  }, [])

  const logout = useCallback(async () => {
    try {
      await adminLogout()
    } finally {
      setIsAuthenticated(false)
    }
  }, [])

  useEffect(() => {
    let cancelled = false
    adminGetMe()
      .then(() => {
        if (!cancelled) setIsAuthenticated(true)
      })
      .catch(() => {
        if (!cancelled) setIsAuthenticated(false)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, logout, checkSession }}>
      {children}
    </AuthContext.Provider>
  )
}
