import { createContext } from 'react'

export interface AuthState {
  isAuthenticated: boolean
  loading: boolean
  logout: () => Promise<void>
  checkSession: () => Promise<void>
}

export const AuthContext = createContext<AuthState | null>(null)
