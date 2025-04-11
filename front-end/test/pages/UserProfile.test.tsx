import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import UserProfilePage from '@/app/[locale]/user/[id]/page'
import { FavoriteUsersProvider } from '@/lib/favorites/FavoriteUsersContext'
import { SELECTED_USER_KEY } from '@/lib/profile/selectedUser'

// Mock de usuário simples
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

beforeEach(() => {
  localStorage.setItem(SELECTED_USER_KEY, JSON.stringify(mockUser))
})

afterEach(() => {
  localStorage.clear()
})

const renderPage = () =>
  render(
    <FavoriteUsersProvider>
      <UserProfilePage />
    </FavoriteUsersProvider>
  )

describe('UserProfilePage', () => {
  it('should show name and e-mail from user', () => {
    renderPage()

    expect(screen.getByText('João Silva')).toBeInTheDocument()
    expect(screen.getByText('joao@example.com')).toBeInTheDocument()
  })

  it('should tell that no user was found', () => {
    localStorage.removeItem(SELECTED_USER_KEY)
    renderPage()

    expect(screen.getByText('Usuário não encontrado.')).toBeInTheDocument()
  })
})
