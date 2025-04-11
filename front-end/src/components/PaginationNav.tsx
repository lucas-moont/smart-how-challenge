'use client'

import { FC } from 'react'
import { useTranslation } from 'lib/hooks/useTranslation'

type Props = {
  currentPage: number
  totalItems: number
  itemsPerPage: number
  onPageChange: (page: number) => void
}

const PaginationNav: FC<Props> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const { t } = useTranslation()
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  if (totalPages <= 1) return null

  const pages: (number | string)[] = []
  const startPage = Math.max(2, currentPage - 1)
  const endPage = Math.min(totalPages - 1, currentPage + 1)

  pages.push(1)
  if (startPage > 2) pages.push('...')
  for (let i = startPage; i <= endPage; i++) pages.push(i)
  if (endPage < totalPages - 1) pages.push('...')
  if (totalPages > 1) pages.push(totalPages)

  const baseBtn =
    'px-2 py-1 border rounded focus:outline-none focus-visible:ring focus-visible:ring-blue-300'

  const activeBtn = 'bg-blue-500 text-white ring-2 ring-blue-300'
  const hoverableBtn = 'hover:bg-blue-500 hover:text-white'
  const disabledBtn = 'opacity-50 cursor-not-allowed'

  return (
    <nav
      className="flex justify-center items-center gap-2 py-4 text-sm text-gray-700"
      aria-label={t('paginationNav')}
    >
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`${baseBtn} ${currentPage === 1 ? disabledBtn : hoverableBtn}`}
        aria-label={t('prevPage')}
      >
        {t('prev')}
      </button>

      {pages.map((page, idx) =>
        typeof page === 'number' ? (
          <button
            key={idx}
            onClick={() => onPageChange(page)}
            className={`${baseBtn} ${
              currentPage === page ? activeBtn : hoverableBtn
            }`}
            aria-label={`${t('goToPage')} ${page}`}
            aria-current={currentPage === page ? 'page' : undefined}
          >
            {page}
          </button>
        ) : (
          <span
            key={idx}
            className="px-2 text-gray-500"
            aria-hidden="true"
          >
            …
          </span>
        )
      )}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`${baseBtn} ${
          currentPage === totalPages ? disabledBtn : hoverableBtn
        }`}
        aria-label={t('nextPage')}
      >
        {t('next')}
      </button>
    </nav>
  )
}

export default PaginationNav
