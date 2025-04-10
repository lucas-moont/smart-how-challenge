'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'favoriteUsers'

export const useFavoriteUsers = () => {
  const [favoriteUsers, setFavoriteUsers] = useState<User[]>([])
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          setFavoriteUsers(parsed)
        }
      }
    } catch (err) {
      console.error('Failed to parse favorite users from localStorage', err)
    } finally {
      setIsReady(true)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || !isReady) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteUsers))
  }, [favoriteUsers, isReady])

  const isFavorite = (userId: string) => {
    return favoriteUsers.some((user) => user.id === userId)
  }

  const addFavorite = (user: User) => {
    if (!isFavorite(user.id)) {
      setFavoriteUsers((prev) => [...prev, user])
    }
  }

  const removeFavorite = (userId: string) => {
    setFavoriteUsers((prev) => prev.filter((user) => user.id !== userId))
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
    isReady,
  }
}
