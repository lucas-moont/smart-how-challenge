'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getSelectedUser } from '@/lib/profile/selectedUser'
import { getTimeSinceLastBirthday } from '@utils/dateUtils'
import { getAge } from '@utils/dateUtils'
import { useFavoriteUsersContext } from '@/lib/favorites/FavoriteUsersContext'

const UserProfilePage = () => {
  const [user, setUser] = useState<User | null>(null)
  const { isFavorite, toggleFavorite } = useFavoriteUsersContext()

  useEffect(() => {
    const selected = getSelectedUser()
    setUser(selected)
  }, [])

  if (!user) {
    return (
      <div className="p-6">
        <p className="text-gray-600">Usuário não encontrado.</p>
        <Link href="/" className="text-blue-600 hover:underline mt-2 inline-block">
          Voltar para usuários
        </Link>
      </div>
    )
  }

  return (
    <div className="p-6">
      <Link href="/" className="text-blue-600 hover:underline text-sm mb-4 inline-block">
        ← Back to Users
      </Link>

      <div className="border rounded-lg p-6 flex flex-col sm:flex-row sm:items-start gap-4 relative">
        <div className="flex-shrink-0">
          <Image
            src={user.picture}
            alt={user.name}
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-500 text-sm">{user.username}</p>

          <div className="mt-4 text-sm space-y-2">
            <div className="flex items-center gap-2">
              <Image src="/icons/email.svg" alt="Email" width={16} height={16} />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/location.svg" alt="Location" width={16} height={16} />
              <span>{user.city}, {user.country}</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/phone.svg" alt="Phone" width={16} height={16} />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-start gap-2">
              <Image src="/icons/calendar.svg" alt="Birthday" width={16} height={16} />
              <div>
                <p>
                  {user.birthDate} ({getAge(user.birthDate)} years old)
                </p>
                <p className="text-gray-500 text-xs">
                  {getTimeSinceLastBirthday(user.birthDate)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Favorite */}
        <div className="absolute top-4 right-4">
          <button onClick={() => toggleFavorite(user)}>
            <Image
              src={
                isFavorite(user.id)
                  ? '/icons/heart-filled.svg'
                  : '/icons/heart-svgrepo-com.svg'
              }
              alt="Favorite"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserProfilePage
