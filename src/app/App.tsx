import { StructuredData } from '@/components/seo/StructuredData'
import { WhatsAppFloatingButton } from '@/components/ui/WhatsAppFloatingButton'
import { useScrollReveal } from '@/hooks/useScrollReveal'

import { AppProviders } from './providers/AppProviders'
import { AppRouter } from './router'

export default function App() {
  useScrollReveal()

  return (
    <AppProviders>
      <StructuredData />
      <AppRouter />
      <WhatsAppFloatingButton />
    </AppProviders>
  )
}
