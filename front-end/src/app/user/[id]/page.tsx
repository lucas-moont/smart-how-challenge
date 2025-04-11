"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { getSelectedUser } from "@/lib/profile/selectedUser"
import UserProfileDetails from "@/components/UserProfileDetails"

const UserProfilePage = () => {
  const [user, setUser] = useState<User | null>(null)

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
      <UserProfileDetails user={user} />
    </div>
  )
}

export default UserProfilePage
