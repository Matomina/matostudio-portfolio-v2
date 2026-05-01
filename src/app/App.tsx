import { useScrollReveal } from '@/hooks/useScrollReveal'

import { AppRouter } from './router'

export default function App() {
  useScrollReveal()

  return <AppRouter />
}
