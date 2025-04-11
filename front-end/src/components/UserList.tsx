'use client'

import { FC, useEffect } from 'react'
import UserCard from '../components/UserCard'
import { useFetchUsers } from '../hooks/useFetchUsers'
import { useFavoriteUsersContext } from '../lib/favorites/FavoriteUsersContext'
import { useTranslation } from '../lib/hooks/useTranslation'

type Props = {
  search: string
  showFavoritesOnly?: boolean
  itemsPerPage: number
  currentPage: number
  onTotalCountChange: (total: number) => void
}

const UserList: FC<Props> = ({
  search,
  showFavoritesOnly = false,
  itemsPerPage,
  currentPage,
  onTotalCountChange,
}) => {
  const { data: users = [], isLoading, isError } = useFetchUsers(50)
  const { favoriteUsers } = useFavoriteUsersContext()
  const { t } = useTranslation()


  const baseUsers = showFavoritesOnly ? favoriteUsers : users

  const filteredUsers = baseUsers.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage)

  useEffect(() => {
    onTotalCountChange(filteredUsers.length)
  }, [filteredUsers.length, onTotalCountChange])

  if (isLoading && !showFavoritesOnly) {
    return (
      <div
        className="text-center py-4 text-gray-500"
        role="status"
        aria-live="polite"
      >
        {t('loadingUsers')}
      </div>
    )
  }

  if (isError) {
    return (
      <div
        className="text-center py-4 text-red-500"
        role="alert"
        aria-live="assertive"
      >
        {t('failedToFetch')}
      </div>
    )
  }

  return (
    <section aria-label={t('userDirectory')} className="border overflow-hidden rounded-lg divide-y">
      <div className="hidden sm:flex text-gray-500 font-semibold px-2 py-2 border-b bg-gray-50">
        <div className="w-20">{t('photo')}</div>
        <div className="flex-1">{t('fullName')}</div>
        <div className="flex-1">{t('email')}</div>
        <div className="w-32">{t('country')}</div>
        <div className="w-40">{t('birthDate')}</div>
        <div className="w-20 text-center">{t('favorite')}</div>
      </div>

      {paginatedUsers.length === 0 ? (
        <div className="text-center text-gray-500 py-4" role="status">
          {t('noUsersFound')}
        </div>
      ) : (
        paginatedUsers.map((user) => <UserCard key={user.id} user={user} />)
      )}

      <div className="text-sm text-gray-500 px-2 py-2" aria-live="polite">
        {t('showingCount', {
          count: paginatedUsers.length,
          total: filteredUsers.length,
        })}
      </div>
    </section>
  )
}

export default UserList
