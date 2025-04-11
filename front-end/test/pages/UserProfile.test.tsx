import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import UserProfilePage from '../../src/app/[locale]/user/[id]/page'
import { FavoriteUsersProvider } from '../../src/lib/favorites/FavoriteUsersContext'
import { SELECTED_USER_KEY } from '../../src/lib/profile/selectedUser'


jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  usePathname: () => '/en/user/123',
  useParams: () => ({ id: '123' }),
}))

// Mock de usuário simples
const mockUser = {
  id: '123',
  name: 'John Smith',
  username: 'johnsmith',
  email: 'john@example.com',
  city: 'New York',
  country: 'USA',
  phone: '987654321',
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

describe('UserProfilePage (/en)', () => {
  it('should show name and e-mail from user', () => {
    renderPage()

    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
  })

  it('should tell that no user was found', () => {
    localStorage.removeItem(SELECTED_USER_KEY)
    renderPage()

    expect(screen.getAllByText('User not found').length).toBeGreaterThan(0)
  })
})
