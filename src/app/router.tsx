import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <HomePage />,
  },
  {
    path: ROUTES.contact,
    element: <ContactPage />,
  },
  {
    path: ROUTES.quote,
    element: <QuotePage />,
  },
  {
    path: ROUTES.payment,
    element: <PaymentPage />,
  },
  {
    path: ROUTES.freelance,
    element: <FreelancePage />,
  },
  {
    path: ROUTES.job,
    element: <JobPage />,
  },
  {
    path: ROUTES.legal,
    element: <LegalPage />,
  },
  {
    path: ROUTES.privacy,
    element: <PrivacyPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
