'use client'

import { FC } from 'react'
import { useTranslation } from '@/lib/hooks/useTranslation'

type Props = {
  itemsPerPage: number
  onItemsPerPageChange: (value: number) => void
  onViewFavorites: () => void
  isShowingFavorites: boolean
}

const PaginationControls: FC<Props> = ({
  itemsPerPage,
  onItemsPerPageChange,
  onViewFavorites,
  isShowingFavorites,
}) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 mb-6 gap-4">
      {/* Dropdown */}
      <div className="flex items-center gap-2">
        <label htmlFor="itemsPerPage" className="text-sm text-gray-700 font-medium">
          {t('itemsPerPage')}
        </label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="border border-gray-300 rounded px-2 py-1 text-sm"
          aria-label={t('itemsPerPage')}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </div>

      {/* View Favorites */}
      <button
        onClick={onViewFavorites}
        className="text-sm text-blue-600 hover:underline font-medium"
        aria-pressed={isShowingFavorites}
        aria-label={isShowingFavorites ? t('viewAllUsers') : t('viewFavorites')}
      >
        {isShowingFavorites ? t('viewAllUsers') : t('viewFavorites')}
      </button>
    </div>
  )
}

export default PaginationControls
