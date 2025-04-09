'use client'

import { useState } from 'react'
import UserList from '@/components/UserList'
import UserSearchBar from '@/components/UserSearchBar'

export default function HomePage() {
  const [search, setSearch] = useState('')

  return (
    <main className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Directory</h1>

      <UserSearchBar defaultValue={search} onSubmit={(value) => setSearch(value)} />
      <UserList search={search} />
    </main>
  )
}
