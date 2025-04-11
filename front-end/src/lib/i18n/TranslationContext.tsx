'use client'

import { createContext, useContext } from 'react'
import { useTranslation } from '../hooks/useTranslation'

type TranslationContextType = ReturnType<typeof useTranslation>

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  const translation = useTranslation()

  return (
    <TranslationContext.Provider value={translation}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useI18n = () => {
  const context = useContext(TranslationContext)
  if (!context) throw new Error('useI18n must be used within TranslationProvider')
  return context
}
