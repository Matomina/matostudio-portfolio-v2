import type { ReactNode } from 'react'

import { AuthProvider } from '@/app/providers/AuthProvider'
import { LanguageProvider } from '@/app/providers/LanguageProvider'
import { ThemeProvider } from '@/app/providers/ThemeProvider'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>{children}</AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}
