import { useEffect, useMemo, useState, type ReactNode } from 'react'

import { LanguageContext, type LanguageContextValue } from '@/app/providers/languageContext'
import { defaultLanguage, translations } from '@/data/i18n.data'

import type { Language } from '@/types/language.types'

const LANGUAGE_STORAGE_KEY = 'matostudio-language'
const languages: Language[] = ['fr', 'en', 'zh', 'ru']

function isLanguage(value: string | null): value is Language {
  return value === 'fr' || value === 'en' || value === 'zh' || value === 'ru'
}

function nextLanguage(language: Language): Language {
  const index = languages.indexOf(language)
  const nextIndex = index === -1 ? 0 : (index + 1) % languages.length

  return languages[nextIndex]
}

function readInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return defaultLanguage
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)

  return isLanguage(storedLanguage) ? storedLanguage : defaultLanguage
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
      toggleLanguage: () => setLanguage((currentLanguage) => nextLanguage(currentLanguage)),
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
