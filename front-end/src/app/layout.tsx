import '../styles/globals.css'
import { ReactNode } from 'react'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import { FavoriteUsersProvider } from '@/lib/favorites/FavoriteUsersContext'

export const metadata = {
  title: 'Random User App',
  description: 'Desafio Frontend',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <FavoriteUsersProvider>
            {children}
          </FavoriteUsersProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
