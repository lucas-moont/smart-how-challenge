import { renderHook, act } from '@testing-library/react'
import { useFavoriteUsers } from '@/lib/favorites/useFavoriteUsers'

const mockUser: User = {
  id: '123',
  name: 'John Doe',
  email: 'john@example.com',
  country: 'USA',
  birthDate: '01/01/1990',
  picture: 'https://example.com/photo.jpg',
}

describe('useFavoriteUsers', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('adds a user to favorites', () => {
    const { result } = renderHook(() => useFavoriteUsers())

    act(() => {
      result.current.addFavorite(mockUser)
    })

    expect(result.current.favoriteUsers).toHaveLength(1)
    expect(result.current.favoriteUsers[0].id).toBe('123')
  })

  it('removes a user from favorites', () => {
    const { result } = renderHook(() => useFavoriteUsers())

    act(() => {
      result.current.addFavorite(mockUser)
      result.current.removeFavorite('123')
    })

    expect(result.current.favoriteUsers).toHaveLength(0)
  })

  it('persists favorites to localStorage', () => {
    const { result } = renderHook(() => useFavoriteUsers())

    act(() => {
      result.current.addFavorite(mockUser)
    })

    const stored = JSON.parse(localStorage.getItem('favoriteUsers') || '[]')
    expect(stored).toHaveLength(1)
    expect(stored[0].id).toBe('123')
  })

  it('initializes state from localStorage', () => {
    localStorage.setItem('favoriteUsers', JSON.stringify([mockUser]))

    const { result } = renderHook(() => useFavoriteUsers())

    expect(result.current.favoriteUsers).toHaveLength(1)
    expect(result.current.favoriteUsers[0].id).toBe('123')
  })
})
