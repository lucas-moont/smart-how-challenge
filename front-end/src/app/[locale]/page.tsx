'use client'

import { useState } from 'react'
import UserList from '@/components/UserList'
import UserSearchBar from '@/components/UserSearchBar'
import PaginationControls from '@/components/PaginationControls'
import PaginationNav from '@/components/PaginationNav'
import { useTranslation } from '@/lib/hooks/useTranslation'

export default function HomePage() {
  const { t } = useTranslation()

  const [search, setSearch] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalItems, setTotalItems] = useState(0)

  const handleViewFavorites = () => {
    setShowFavoritesOnly((prev) => !prev)
  }

  return (
    <main className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{t('userDirectory')}</h1>

      <UserSearchBar defaultValue={search} onSubmit={(value) => setSearch(value)} />

      <PaginationControls
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={setItemsPerPage}
        onViewFavorites={handleViewFavorites}
        isShowingFavorites={showFavoritesOnly}
      />

      <UserList
        search={search}
        showFavoritesOnly={showFavoritesOnly}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onTotalCountChange={setTotalItems}
      />

      <PaginationNav
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </main>
  )
}
