// src/lib/i18n.js
import { createContext, useContext } from 'react'

const TranslationsContext = createContext({})

export function TranslationsProvider({ translations, children }) {
  return (
    <TranslationsContext.Provider value={translations}>
      {children}
    </TranslationsContext.Provider>
  )
}

export function useTranslation(ns) {
  const all = useContext(TranslationsContext)
  return {
    t: key => (all[ns]?.[key] ?? key)
  }
}
