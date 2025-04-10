'use client'

import { FC } from 'react'

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
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  if (totalPages <= 1) return null

  const maxButtonsToShow = 3
  const pages: (number | string)[] = []

  const startPage = Math.max(2, currentPage - 1)
  const endPage = Math.min(totalPages - 1, currentPage + 1)

  pages.push(1)

  if (startPage > 2) {
    pages.push('...')
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  if (endPage < totalPages - 1) {
    pages.push('...')
  }

  if (totalPages > 1) {
    pages.push(totalPages)
  }

  return (
    <div className="flex justify-center items-center gap-2 py-4 text-sm text-gray-700">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-2 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      {pages.map((page, idx) =>
        typeof page === 'number' ? (
          <button
            key={idx}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 border rounded ${
              currentPage === page
                ? 'bg-blue-500 text-white'
                : 'hover:bg-blue-500 hover:text-white'
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={idx} className="px-2">
            ...
          </span>
        )
      )}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-2 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  )
}

export default PaginationNav
