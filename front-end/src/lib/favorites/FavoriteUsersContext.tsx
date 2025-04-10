'use client'

import { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import { useFavoriteUsers } from './useFavoriteUsers'

type FavoriteUsersContextType = ReturnType<typeof useFavoriteUsers>

const FavoriteUsersContext = createContext<FavoriteUsersContextType | null>(null)

export const FavoriteUsersProvider = ({ children }: { children: ReactNode }) => {
  const [isHydrated, setIsHydrated] = useState(false)
  const value = useFavoriteUsers()

  useEffect(() => {
    // Aguarda até o componente estar montado no client
    setIsHydrated(true)
  }, [])

  if (!isHydrated) return null // 🛑 Evita renderizar antes da hidratação

  return (
    <FavoriteUsersContext.Provider value={value}>
      {children}
    </FavoriteUsersContext.Provider>
  )
}

export const useFavoriteUsersContext = () => {
  const context = useContext(FavoriteUsersContext)
  if (!context) {
    throw new Error('useFavoriteUsersContext must be used within a FavoriteUsersProvider')
  }
  return context
}
