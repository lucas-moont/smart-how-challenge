'use client'

import { FC, useEffect } from 'react'
import UserCard from './UserCard'
import useFilterFavUsers from '@/hooks/useFilterFavUsers'
import { useFetchUsers } from '@/hooks/useFetchUsers'

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

  const filteredBySearch = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  const filteredUsers = useFilterFavUsers(filteredBySearch, showFavoritesOnly)

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage)

  useEffect(() => {
    onTotalCountChange(filteredUsers.length)
  }, [filteredUsers.length, onTotalCountChange])

  if (isLoading) {
    return <div className="text-center py-4 text-gray-500">Loading users...</div>
  }

  if (isError) {
    return <div className="text-center py-4 text-red-500">Failed to fetch users.</div>
  }

  return (
    <div className="border overflow-hidden rounded-lg divide-y">
      <div className="hidden sm:flex text-gray-500 font-semibold px-2 py-2 border-b bg-gray-50">
        <div className="w-20">Photo</div>
        <div className="flex-1">Full Name</div>
        <div className="flex-1">Email</div>
        <div className="w-32">Country</div>
        <div className="w-40">Birth Date</div>
        <div className="w-20 text-center">Actions</div>
      </div>

      {paginatedUsers.length === 0 ? (
        <div className="text-center text-gray-500 py-4">No users found.</div>
      ) : (
        paginatedUsers.map((user) => <UserCard key={user.id} user={user} />)
      )}

      <div className="text-sm text-gray-500 px-2 py-2">
        Showing {paginatedUsers.length} of {filteredUsers.length} users
      </div>
    </div>
  )
}

export default UserList
