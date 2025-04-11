import '../styles/globals.css'
import { ReactNode } from 'react'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import { FavoriteUsersProvider } from '@/lib/favorites/FavoriteUsersContext'
import { TranslationProvider } from '@/lib/i18n/TranslationContext'

export const metadata = {
  title: 'Random User App',
  description: 'Desafio Frontend',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ReactQueryProvider>
          <FavoriteUsersProvider>
            <TranslationProvider>
              <main role="main" id="main-content" tabIndex={-1}>
                {children}
              </main>
            </TranslationProvider>
          </FavoriteUsersProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}