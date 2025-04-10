'use client'

export const filterFavoriteUsers = (
  users: User[],
  showOnlyFavorites: boolean
): User[] => {
  if (!showOnlyFavorites) return users

  if (typeof window === 'undefined') return []

  const stored = localStorage.getItem('favoriteUsers')
  if (!stored) return []

  try {
    const favorites: User[] = JSON.parse(stored)
    if (!Array.isArray(favorites)) return []

    const favoriteIds = favorites.map((fav) => fav.id)
    return users.filter((user) => favoriteIds.includes(user.id))
  } catch {
    return []
  }
}
