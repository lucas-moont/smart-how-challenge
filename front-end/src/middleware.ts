export { localeMiddleware as middleware } from '@/middlewares/i18nRedirect'

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico|icons|.*\\..*).*)',
  ],
}
