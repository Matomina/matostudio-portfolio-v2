import { lazy, Suspense, type ReactElement } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { SeoManager } from '@/components/seo/SeoManager'
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

function withSeo(element: ReactElement) {
  return (
    <Suspense fallback={null}>
      <SeoManager />
      {element}
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: withSeo(<HomePage />),
  },
  {
    path: ROUTES.contact,
    element: withSeo(<ContactPage />),
  },
  {
    path: ROUTES.quote,
    element: withSeo(<QuotePage />),
  },
  {
    path: ROUTES.payment,
    element: withSeo(<PaymentPage />),
  },
  {
    path: ROUTES.freelance,
    element: withSeo(<FreelancePage />),
  },
  {
    path: ROUTES.job,
    element: withSeo(<JobPage />),
  },
  {
    path: ROUTES.legal,
    element: withSeo(<LegalPage />),
  },
  {
    path: ROUTES.privacy,
    element: withSeo(<PrivacyPage />),
  },
  {
    path: '*',
    element: withSeo(<NotFoundPage />),
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
