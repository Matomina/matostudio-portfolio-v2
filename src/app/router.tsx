import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ROUTES } from '@/lib/constants/routes'
import { FreelancePage } from '@/pages/FreelancePage'
import { HomePage } from '@/pages/HomePage'
import { JobPage } from '@/pages/JobPage'
import { LegalPage } from '@/pages/LegalPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <HomePage />,
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
    path: '*',
    element: <NotFoundPage />,
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
