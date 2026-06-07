import { lazy, Suspense, type ReactElement } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import { RequireAuth } from '@/components/admin/RequireAuth'
import { SeoManager } from '@/components/seo/SeoManager'
import { WhatsAppFloatingButton } from '@/components/ui/WhatsAppFloatingButton'
import { ROUTES } from '@/lib/constants/routes'
import { HomePage } from '@/pages/HomePage'

const ContactPage = lazy(() =>
  import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })),
)
const FreelancePage = lazy(() =>
  import('@/pages/FreelancePage').then((m) => ({ default: m.FreelancePage })),
)
const JobPage = lazy(() => import('@/pages/JobPage').then((m) => ({ default: m.JobPage })))
const LegalPage = lazy(() => import('@/pages/LegalPage').then((m) => ({ default: m.LegalPage })))
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
)
const PaymentPage = lazy(() =>
  import('@/pages/PaymentPage').then((m) => ({ default: m.PaymentPage })),
)
const PrivacyPage = lazy(() =>
  import('@/pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })),
)
const QuotePage = lazy(() => import('@/pages/QuotePage').then((m) => ({ default: m.QuotePage })))

const AdminLoginPage = lazy(() =>
  import('@/pages/admin/AdminLoginPage').then((m) => ({ default: m.AdminLoginPage })),
)
const AdminDashboardPage = lazy(() =>
  import('@/pages/admin/AdminDashboardPage').then((m) => ({ default: m.AdminDashboardPage })),
)
const AdminLeadDetailPage = lazy(() =>
  import('@/pages/admin/AdminLeadDetailPage').then((m) => ({ default: m.AdminLeadDetailPage })),
)

function PublicLayout() {
  return (
    <>
      <Outlet />
      <WhatsAppFloatingButton />
    </>
  )
}

function withSeo(element: ReactElement) {
  return (
    <Suspense fallback={null}>
      <SeoManager />
      {element}
    </Suspense>
  )
}

function withAuth(element: ReactElement) {
  return (
    <Suspense fallback={null}>
      <RequireAuth>{element}</RequireAuth>
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: ROUTES.home, element: withSeo(<HomePage />) },
      { path: ROUTES.contact, element: withSeo(<ContactPage />) },
      { path: ROUTES.quote, element: withSeo(<QuotePage />) },
      { path: ROUTES.payment, element: withSeo(<PaymentPage />) },
      { path: ROUTES.freelance, element: withSeo(<FreelancePage />) },
      { path: ROUTES.job, element: withSeo(<JobPage />) },
      { path: ROUTES.legal, element: withSeo(<LegalPage />) },
      { path: ROUTES.privacy, element: withSeo(<PrivacyPage />) },
      { path: '*', element: withSeo(<NotFoundPage />) },
    ],
  },
  {
    path: ROUTES.adminLogin,
    element: (
      <Suspense fallback={null}>
        <AdminLoginPage />
      </Suspense>
    ),
  },
  {
    path: ROUTES.adminDashboard,
    element: withAuth(<AdminDashboardPage />),
  },
  {
    path: '/admin/leads/:id',
    element: withAuth(<AdminLeadDetailPage />),
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
