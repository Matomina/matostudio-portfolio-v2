import { createContext } from 'react'

import type { Language, TranslationCopy } from '@/types/language.types'

export type LanguageContextValue = {
  language: Language
  copy: TranslationCopy
  toggleLanguage: () => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
