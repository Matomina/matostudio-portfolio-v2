import type { ReactNode } from 'react'

import { LanguageProvider } from '@/app/providers/LanguageProvider'
import { ThemeProvider } from '@/app/providers/ThemeProvider'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  )
}
