'use client'

import { useEffect, useState } from 'react'
import UserCard from './UserCard'

type User = {
  id: string
  name: string
  email: string
  country: string
  birthDate: string
  picture: string
}

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    // Mock temporário
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
      }
    ]

    setUsers(mockUsers)
  }, [])

  return (
    <div className="border rounded-lg divide-y">
      <div className="hidden md:flex text-gray-500 font-semibold px-2 py-2 border-b bg-gray-50">
        <div className="w-40">Photo</div>
        <div className="flex-1">Full Name</div>
        <div className="flex-1">Email</div>
        <div className="w-32">Country</div>
        <div className="w-40">Birthdate</div>
        <div className="w-20 text-center">Fav</div>
      </div>



      {/* Lista de usuários */}
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}
