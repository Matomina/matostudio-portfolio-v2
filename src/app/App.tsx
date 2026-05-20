import { useScrollReveal } from '@/hooks/useScrollReveal'

import { WhatsAppFloatingButton } from '@/components/ui/WhatsAppFloatingButton'

import { AppProviders } from './providers/AppProviders'
import { AppRouter } from './router'

export default function App() {
  useScrollReveal()

  return (
    <AppProviders>
      <AppRouter />
      <WhatsAppFloatingButton />
    </AppProviders>
  )
}
