'use client'

import { useState } from 'react'
import UserList from '../../components/UserList'
import UserSearchBar from 'components/UserSearchBar'
import PaginationControls from '../../components/PaginationControls'
import PaginationNav from '../../components/PaginationNav'
import { useTranslation } from '../../lib/hooks/useTranslation'
import LanguageSwitcher from '../../components/LanguageSwitcher'

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
    <main
      className="max-w-5xl mx-auto p-4"
      role="main"
      aria-labelledby="page-title"
      id="main-content"
    >
      <LanguageSwitcher />
      <h1 id="page-title" className="text-2xl font-bold mb-4">
        {t('userDirectory')}
      </h1>

      <section aria-label={t('searchSection')}>
        <UserSearchBar
          defaultValue={search}
          onSubmit={(value) => setSearch(value)}
        />
      </section>

      <section aria-label={t('controlsSection')} className="mt-4">
        <PaginationControls
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={setItemsPerPage}
          onViewFavorites={handleViewFavorites}
          isShowingFavorites={showFavoritesOnly}
        />
      </section>

      <section aria-label={t('userListSection')} className="mt-6">
        <UserList
          search={search}
          showFavoritesOnly={showFavoritesOnly}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onTotalCountChange={setTotalItems}
        />
      </section>

      <nav
        aria-label={t('paginationNavigation')}
        className="mt-6"
      >
        <PaginationNav
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </nav>
    </main>
  )
}
