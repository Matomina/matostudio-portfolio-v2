import { useEffect, useMemo, useState, type ReactNode } from 'react'

import { LanguageContext, type LanguageContextValue } from '@/app/providers/languageContext'
import { defaultLanguage, translations } from '@/data/i18n.data'

import type { Language } from '@/types/language.types'

const LANGUAGE_STORAGE_KEY = 'matostudio-language'

function readInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return defaultLanguage
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)

  return storedLanguage === 'en' ? 'en' : defaultLanguage
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(readInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  }, [language])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      copy: translations[language],
      toggleLanguage: () =>
        setLanguage((currentLanguage) => (currentLanguage === 'fr' ? 'en' : 'fr')),
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
