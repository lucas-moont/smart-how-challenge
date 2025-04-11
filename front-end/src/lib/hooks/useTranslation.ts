'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import en from '../../messages/en.json'
import es from '../../messages/es.json'
import pt from '../../messages/pt.json'

const messages: Record<string, any> = { en, es, pt }

export function useTranslation() {
  const pathname = usePathname()
  let lang: keyof typeof messages = 'en'

  if (pathname.startsWith('/es')) lang = 'es'
  else if (pathname.startsWith('/pt')) lang = 'pt'

  const t = useMemo(() => {
    return (key: string, vars?: Record<string, string | number>) => {
      const keys = key.split('.')
      let template = keys.reduce((obj, k) => obj?.[k], messages[lang])

      if (typeof template !== 'string') return key // fallback

      if (vars) {
        Object.entries(vars).forEach(([k, v]) => {
          template = template.replace(`{${k}}`, String(v))
        })
      }

      return template
    }
  }, [lang])

  return { t, lang }
}
