'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'favoriteUsers'

export const useFavoriteUsers = () => {
  const getInitialFavorites = (): User[] => {
    if (typeof window === 'undefined') return []

    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) return parsed
      }
    } catch (err) {
      console.error('Failed to parse favorite users from localStorage', err)
    }

    return []
  }

  const [favoriteUsers, setFavoriteUsers] = useState<User[]>(getInitialFavorites)

  useEffect(() => {
    if (typeof window === 'undefined') return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteUsers))
    console.log('Favorite users saved to localStorage:', favoriteUsers)
  }, [favoriteUsers])

  const isFavorite = (userId: string) => {
    return favoriteUsers.some((user) => user.id === userId)
  }

  const addFavorite = (user: User) => {
    if (!isFavorite(user.id)) {
      setFavoriteUsers((prev) => {
        const updatedFavorites = [...prev, user]
        console.log('User added to favorites:', user, 'New favorites:', updatedFavorites)
        return updatedFavorites
      })
    }
  }

  const removeFavorite = (userId: string) => {
    setFavoriteUsers((prev) => {
      const updatedFavorites = prev.filter((user) => user.id !== userId)
      console.log('User removed from favorites:', userId, 'New favorites:', updatedFavorites)
      return updatedFavorites
    })
  }

  const toggleFavorite = (user: User) => {
    isFavorite(user.id) ? removeFavorite(user.id) : addFavorite(user)
  }

  return {
    favoriteUsers,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
  }
}
