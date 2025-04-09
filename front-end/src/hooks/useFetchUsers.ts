'use client'

import { useQuery } from '@tanstack/react-query'
import { randomUserApi } from '@/services/randomUserAPI'

const mapUser = (user: ApiUser): User => ({
  id: user.login.uuid,
  name: `${user.name.first} ${user.name.last}`,
  email: user.email,
  country: user.location.country,
  birthDate: new Date(user.dob.date).toLocaleDateString(),
  picture: user.picture.large,
})

export const useFetchUsers = (results: number = 10) => {
  return useQuery<User[]>({
    queryKey: ['users', results],
    queryFn: async () => {
      const response = await randomUserApi.get(`?results=${results}`)
      const users = response.data.results as ApiUser[]
      return users.map(mapUser)
    },
  })
}
