import { render, screen } from '@testing-library/react'
import HomePage from '../../src/app/[locale]/page'
import { TranslationProvider } from '../../src/lib/i18n/TranslationContext'
import { FavoriteUsersProvider } from '../../src/lib/favorites/FavoriteUsersContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Mock necessário pro next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/pt',
}))

const queryClient = new QueryClient()

describe('Home page translations', () => {
  it('renders translated static texts in Portuguese', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <TranslationProvider>
          <FavoriteUsersProvider>
            <HomePage />
          </FavoriteUsersProvider>
        </TranslationProvider>
      </QueryClientProvider>
    )

    expect(await screen.findByPlaceholderText('Buscar por nome')).toBeInTheDocument()
    expect(await screen.findByText('Ver Favoritos')).toBeInTheDocument()
    expect(await screen.findByText('Itens por página')).toBeInTheDocument()
  })
})
