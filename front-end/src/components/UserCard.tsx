'use client'

import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useFavoriteUsersContext } from '@/lib/favorites/FavoriteUsersContext'

type User = {
  id: string
  name: string
  email: string
  country: string
  birthDate: string
  picture: string
}

type Props = {
  user: User
}

const UserCard: FC<Props> = ({ user }) => {
  const { isFavorite, toggleFavorite } = useFavoriteUsersContext()

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center border-b py-4 px-2">
      <div className="w-40 p-1 pt-0 pb-0 flex-shrink-0">
        <Image
          src={user.picture}
          alt={user.name}
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>

      <div className="flex-1 p-1 pt-0 pb-0 mb-2 md:mb-0">
        <Link
          href={`/user/${user.id}`}
          className="text-blue-600 font-medium hover:underline"
        >
          {user.name}
        </Link>
      </div>

      <div className="flex-1 p-1 pt-0 pb-0 text-sm text-gray-600 mb-2 md:mb-0">
        {user.email}
      </div>

      <div className="w-32 p-1 pt-0 pb-0 mb-2 md:mb-0">{user.country}</div>

      <div className="w-40 p-1 pt-0 pb-0 mb-2 md:mb-0">{user.birthDate}</div>

      <button
        className="w-20 p-1 pt-0 pb-0 text-center"
        onClick={() => toggleFavorite(user)}
      >
        <Image
          src={
            isFavorite(user.id)
              ? '/icons/heart-filled.svg'
              : '/icons/heart-svgrepo-com.svg'
          }
          alt="Favorite"
          width={20}
          height={20}
          className="inline-block"
        />
      </button>
    </div>
  )
}

export default UserCard
