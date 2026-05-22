import { NavLink, Outlet } from 'react-router-dom'
import { BarChart3, FileText, Home, Settings, Users } from 'lucide-react'

import { Container } from '@/components/ui/Container'
import { ROUTES } from '@/lib/constants/routes'

const dashboardNavItems = [
  {
    label: 'Vue globale',
    href: ROUTES.dashboard,
    icon: Home,
    end: true,
  },
  {
    label: 'Contacts',
    href: ROUTES.dashboardContacts,
    icon: Users,
    end: false,
  },
  {
    label: 'Devis',
    href: ROUTES.dashboardQuotes,
    icon: FileText,
    end: false,
  },
  {
    label: 'Statistiques',
    href: ROUTES.dashboardStats,
    icon: BarChart3,
    end: false,
  },
  {
    label: 'Paramètres',
    href: ROUTES.dashboardSettings,
    icon: Settings,
    end: false,
  },
] as const

export function DashboardLayout() {
  return (
    <main id="main-content" className="dashboard-shell">
      <aside className="dashboard-sidebar" aria-label="Navigation dashboard MatoStudio">
        <div className="dashboard-sidebar__brand">
          <span>MS</span>
          <div>
            <strong>MatoStudio</strong>
            <small>Dashboard admin</small>
          </div>
        </div>

        <nav className="dashboard-nav" aria-label="Pages dashboard">
          {dashboardNavItems.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                className={({ isActive }) =>
                  ['dashboard-nav__link', isActive ? 'is-active' : ''].filter(Boolean).join(' ')
                }
                end={item.end}
                key={item.href}
                to={item.href}
              >
                <Icon size={18} aria-hidden="true" />
                <span>{item.label}</span>
              </NavLink>
            )
          })}
        </nav>
      </aside>

      <section className="dashboard-main" aria-label="Contenu dashboard MatoStudio">
        <Container size="wide" className="dashboard-container">
          <header className="dashboard-topbar">
            <div>
              <p className="section-eyebrow">Espace privé</p>
              <h1>Dashboard MatoStudio</h1>
              <p>
                Pilotage commercial, demandes entrantes, devis, statistiques et préparation API.
              </p>
            </div>
            <span className="dashboard-topbar__status">Template premium prêt pour API</span>
          </header>

          <Outlet />
        </Container>
      </section>
    </main>
  )
}
