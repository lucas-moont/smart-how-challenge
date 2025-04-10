'use client'

import { createContext, useContext, ReactNode } from 'react'
import { useFavoriteUsers } from './useFavoriteUsers'

type FavoriteUsersContextType = ReturnType<typeof useFavoriteUsers>

export const FavoriteUsersContext = createContext<FavoriteUsersContextType | null>(null)

export const FavoriteUsersProvider = ({ children }: { children: ReactNode }) => {
  const value = useFavoriteUsers()

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
