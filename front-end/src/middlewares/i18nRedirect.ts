import { NextRequest, NextResponse } from 'next/server'
import { i18nConfig } from 'lib/i18n/config/i18n'

export function localeMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const hasLocale = i18nConfig.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )

  if (!hasLocale) {
    const defaultLocale = i18nConfig.defaultLocale
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    )
  }

  return NextResponse.next()
}
