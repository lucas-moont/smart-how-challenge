'use client'

import { FC } from 'react'
import { useForm } from 'react-hook-form'

type Props = {
  defaultValue?: string
  onSubmit: (value: string) => void
}

type FormData = {
  search: string
}

const UserSearchBar: FC<Props> = ({ defaultValue = '', onSubmit }) => {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: { search: defaultValue }
  })

  const submitHandler = (data: FormData) => {
    onSubmit(data.search)
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4"
    >
      <input
        {...register('search')}
        type="text"
        placeholder="Search by name..."
        className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  )
}

export default UserSearchBar