import type { ReactElement } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { SeoManager } from '@/components/seo/SeoManager'
import { ROUTES } from '@/lib/constants/routes'
import { ContactPage } from '@/pages/ContactPage'
import { FreelancePage } from '@/pages/FreelancePage'
import { HomePage } from '@/pages/HomePage'
import { JobPage } from '@/pages/JobPage'
import { LegalPage } from '@/pages/LegalPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { PaymentPage } from '@/pages/PaymentPage'
import { PrivacyPage } from '@/pages/PrivacyPage'
import { QuotePage } from '@/pages/QuotePage'

function withSeo(element: ReactElement) {
  return (
    <>
      <SeoManager />
      {element}
    </>
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
