import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import UserProfilePage from '../../src/app/[locale]/user/[id]/page'
import { FavoriteUsersProvider } from '../../src/lib/favorites/FavoriteUsersContext'
import { SELECTED_USER_KEY } from '../../src/lib/profile/selectedUser'

// Usuário de teste
const mockUser = {
  id: '123',
  name: 'João Silva',
  username: 'joaosilva',
  email: 'joao@example.com',
  city: 'São Paulo',
  country: 'Brasil',
  phone: '123456789',
  picture: '/user.jpg',
  birthDate: '1990-04-11T00:00:00.000Z',
}

// Variável que será alterada entre os testes
let mockLocale = 'pt'

// Mock global do next/navigation usando a variável acima
jest.mock('next/navigation', () => ({
  usePathname: () => `/${mockLocale}/user/123`,
  useParams: () => ({ id: '123', locale: mockLocale }),
}))

const renderPage = () =>
  render(
    <FavoriteUsersProvider>
      <UserProfilePage />
    </FavoriteUsersProvider>
  )

describe('UserProfile i18n', () => {
  beforeEach(() => {
    localStorage.setItem(SELECTED_USER_KEY, JSON.stringify(mockUser))
  })

  afterEach(() => {
    localStorage.clear()
    jest.resetModules()
  })

  it('should render translation in Portuguese', () => {
    mockLocale = 'pt'
    renderPage()
    expect(
      screen.getByText((content, element) =>
        element?.tagName.toLowerCase() === 'a' &&
        content.includes('Voltar para lista de usuários')
      )
    ).toBeInTheDocument()
  })
  

  it('should render translation in Spanish', () => {
    mockLocale = 'es'
    renderPage()
    expect(
      screen.getByText((content, element) =>
        element?.tagName.toLowerCase() === 'a' &&
        content.includes('Volver a la lista de usuarios')
      )
    ).toBeInTheDocument()
  })
})
