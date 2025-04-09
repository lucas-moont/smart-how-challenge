'use client'

import { FC, useEffect, useState } from 'react'
import UserCard from './UserCard'
import useFilterFavUsers from '@/hooks/useFilterFavUsers'

type User = {
  id: string
  name: string
  email: string
  country: string
  birthDate: string
  picture: string
}

type Props = {
  search: string
  showFavoritesOnly?: boolean
  itemsPerPage: number
}

const UserList: FC<Props> = ({
  search,
  showFavoritesOnly = false,
  itemsPerPage
}) => {
  const [users, setUsers] = useState<User[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const mockUsers: User[] = [
      {
        id: '1',
        name: 'Mehmet Erbay',
        email: 'mehmet.erbay@example.com',
        country: 'Turkey',
        birthDate: '16/05/1992',
        picture: 'https://randomuser.me/api/portraits/men/75.jpg'
      },
      {
        id: '2',
        name: 'Milomir Anđelković',
        email: 'milomir.andelkovic@example.com',
        country: 'Serbia',
        birthDate: '03/08/2000',
        picture: 'https://randomuser.me/api/portraits/men/76.jpg'
      },
      {
        id: '3',
        name: 'Oscar Hansen',
        email: 'oscar.hansen@example.com',
        country: 'Denmark',
        birthDate: '25/03/1991',
        picture: 'https://randomuser.me/api/portraits/men/78.jpg'
      },
      {
        id: '4',
        name: 'Carlos Lima',
        email: 'carlos.lima@example.com',
        country: 'Brazil',
        birthDate: '12/10/1985',
        picture: 'https://randomuser.me/api/portraits/men/79.jpg'
      },
      {
        id: '5',
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        country: 'USA',
        birthDate: '01/01/1990',
        picture: 'https://randomuser.me/api/portraits/women/80.jpg'
      },
      {
        id: '6',
        name: 'Lucas Rossi',
        email: 'lucas.rossi@example.com',
        country: 'Italy',
        birthDate: '22/07/1988',
        picture: 'https://randomuser.me/api/portraits/men/81.jpg'
      }
    ]

    setUsers(mockUsers)
  }, [])

  const filteredBySearch = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  const filteredUsers = useFilterFavUsers(filteredBySearch, showFavoritesOnly)

  // 🔢 Paginação
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  // ⚠️ Resetar página se o filtro mudar
  useEffect(() => {
    setCurrentPage(1)
  }, [search, showFavoritesOnly, itemsPerPage])

  return (
    <div className="border overflow-hidden rounded-lg divide-y">
      {/* Cabeçalho da "tabela" */}
      <div className="hidden sm:flex text-gray-500 font-semibold px-2 py-2 border-b bg-gray-50">
        <div className="w-20">Photo</div>
        <div className="flex-1">Full Name</div>
        <div className="flex-1">Email</div>
        <div className="w-32">Country</div>
        <div className="w-40">Birth Date</div>
        <div className="w-20 text-center">Actions</div>
      </div>

      {/* Lista de usuários filtrados */}
      {paginatedUsers.length === 0 ? (
        <div className="text-center text-gray-500 py-4">No users found.</div>
      ) : (
        paginatedUsers.map((user) => <UserCard key={user.id} user={user} />)
      )}

      {/* Info de contagem */}
      <div className="text-sm text-gray-500 px-2 py-2">
        Showing {paginatedUsers.length} of {filteredUsers.length} users
      </div>
    </div>
  )
}

export default UserList
