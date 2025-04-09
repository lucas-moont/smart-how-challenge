'use client'

import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center border-b py-4 px-2">
    {/* Foto */}
    <div className="w-40 flex-shrink-0">
      <Image
        src={user.picture}
        alt={user.name}
        width={50}
        height={50}
        className="rounded-full"
      />
    </div>
  
    {/* Nome */}
    <div className="flex-1 mb-2 md:mb-0">
      <Link
        href={`/user/${user.id}`}
        className="text-blue-600 font-medium hover:underline"
      >
        {user.name}
      </Link>
    </div>
  
    {/* Email */}
    <div className="flex-1 text-sm text-gray-600 mb-2 md:mb-0">{user.email}</div>
  
    {/* País */}
    <div className="w-32 mb-2 md:mb-0">{user.country}</div>
  
    {/* Data de nascimento */}
    <div className="w-40 mb-2 md:mb-0">{user.birthDate}</div>
  
    {/* Favorito */}
    <div className="w-20 text-center">
      <img src="/icons/heart-placeholder.svg" alt="Favorite" className="w-5 h-5 inline-block" />
    </div>
  </div>
  

  )
}

export default UserCard
