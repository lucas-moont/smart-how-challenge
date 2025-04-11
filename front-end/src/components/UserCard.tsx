'use client'

import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useFavoriteUsersContext } from '@/lib/favorites/FavoriteUsersContext'

type Props = {
  user: User
}

const UserCard: FC<Props> = ({ user }) => {
  const { isFavorite, toggleFavorite } = useFavoriteUsersContext()

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:items-center border-b py-4 px-2 text-center sm:text-left">
      {/* Foto */}
      <div className="w-full sm:w-20 flex justify-center sm:justify-start mb-2 sm:mb-0">
        <Image
          src={user.picture}
          alt={user.name}
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>

      {/* Nome */}
      <div className="w-full sm:flex-1 mb-2 sm:mb-0">
        <Link
          href={`/user/${user.id}`}
          className="text-blue-600 font-medium hover:underline"
        >
          {user.name}
        </Link>
      </div>

      {/* Email */}
      <div className="w-full sm:flex-1 text-sm text-gray-600 mb-2 sm:mb-0">
        {user.email}
      </div>

      {/* País */}
      <div className="w-full sm:w-32 mb-2 sm:mb-0">{user.country}</div>

      {/* Data de nascimento */}
      <div className="w-full sm:w-40 mb-2 sm:mb-0">{user.birthDate}</div>

      {/* Favoritar */}
      <div className="w-full sm:w-20 flex justify-center sm:justify-center">
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
            className="inline-block"
          />
        </button>
      </div>
    </div>
  )
}

export default UserCard
