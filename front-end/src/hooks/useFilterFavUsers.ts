'use client'

const useFilterFavUsers = (users: any[], showOnlyFavorites: boolean) => {
  if (!showOnlyFavorites) return users

  if (typeof window === 'undefined') return [] // Evita erro no SSR

  const stored = localStorage.getItem('favoriteUsers')
  if (!stored) return [] // Não há favoritos salvos

  const favorites: string[] = JSON.parse(stored)
  if (!Array.isArray(favorites)) return []

  return users.filter((user) => favorites.includes(user.id))
}

export default useFilterFavUsers
