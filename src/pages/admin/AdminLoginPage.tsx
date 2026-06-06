import { type FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '@/hooks/useAuth'
import { adminLogin } from '@/lib/api/admin'
import { ROUTES } from '@/lib/constants/routes'

type LoginStatus = 'idle' | 'submitting' | 'error'

export function AdminLoginPage() {
  const [status, setStatus] = useState<LoginStatus>('idle')
  const { checkSession } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const password = new FormData(event.currentTarget).get('password') as string

    setStatus('submitting')

    try {
      await adminLogin(password)
      await checkSession()
      navigate(ROUTES.adminDashboard, { replace: true })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-card__header">
          <p className="section-eyebrow">Administration</p>
          <h1>MatoStudio</h1>
          <p>Accès réservé</p>
        </div>

        <form className="admin-login-card__form" onSubmit={handleSubmit}>
          <label className="form-field" htmlFor="admin-password">
            <span>Mot de passe</span>
            <input
              id="admin-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              autoFocus
            />
          </label>

          {status === 'error' && (
            <p className="admin-login-card__error" role="alert">
              Mot de passe incorrect.
            </p>
          )}

          <button
            className="button button-primary button-lg"
            type="submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Connexion…' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  )
}
