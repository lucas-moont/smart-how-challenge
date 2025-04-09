'use client'

import { useState } from 'react'
import UserList from '@/components/UserList'
import UserSearchBar from '@/components/UserSearchBar'
import PaginationControls from '@/components/PaginationControls'

export default function HomePage() {
  const [search, setSearch] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value)
  }

  const handleViewFavorites = () => {
    setShowFavoritesOnly((prev) => !prev)
  }

  return (
    <main className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Directory</h1>

      <UserSearchBar defaultValue={search} onSubmit={(value) => setSearch(value)} />

      <PaginationControls
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
        onViewFavorites={handleViewFavorites}
      />

      <UserList
        search={search}
        showFavoritesOnly={showFavoritesOnly}
        itemsPerPage={itemsPerPage}
      />
    </main>
  )
}
