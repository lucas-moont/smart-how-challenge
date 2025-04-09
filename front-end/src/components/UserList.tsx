'use client'

import { FC, useEffect, useState } from 'react'
import UserCard from './UserCard'

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
}

const UserList: FC<Props> = ({ search }) => {
  const [users, setUsers] = useState<User[]>([])

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
      }
    ]

    setUsers(mockUsers)
  }, [])

  // 👉 Aqui entra o filtro com base na search
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="border rounded-lg divide-y">
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
      {filteredUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}

      {/* Info de contagem */}
      <div className="text-sm text-gray-500 px-2 py-2">
        Showing {filteredUsers.length} of {users.length} users
      </div>
    </div>
  )
}

export default UserList
