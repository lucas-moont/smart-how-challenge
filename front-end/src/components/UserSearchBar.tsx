'use client'

import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'lib/hooks/useTranslation'

type Props = {
  defaultValue?: string
  onSubmit: (value: string) => void
}

type FormData = {
  search: string
}

const UserSearchBar: FC<Props> = ({ defaultValue = '', onSubmit }) => {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: { search: defaultValue },
  })

  const { t } = useTranslation()

  const submitHandler = (data: FormData) => {
    onSubmit(data.search)
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4"
      role="search"
      aria-label={t('searchByName')}
    >
      <label htmlFor="search" className="sr-only">
        {t('searchByName')}
      </label>

      <div className="relative w-full">
        <input
          {...register('search')}
          id="search"
          type="text"
          placeholder={t('searchByName')}
          className="w-full border border-gray-300 rounded-md py-2 pl-12 pr-4 bg-[url('/icons/magnifying-glass.svg')] bg-no-repeat bg-[length:20px] bg-[center_left_1rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={t('searchByName')}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        aria-label={t('search')}
      >
        {t('search')}
      </button>
    </form>
  )
}

export default UserSearchBar
