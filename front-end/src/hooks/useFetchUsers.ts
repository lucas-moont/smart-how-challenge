'use client'

import { useQuery } from '@tanstack/react-query'
import { randomUserApi } from '../services/randomUserAPI'

export const mapUser = (user: ApiUser): User => ({
  id: user.login.uuid,
  name: `${user.name.first} ${user.name.last}`,
  username: user.login.username,
  email: user.email,
  phone: user.phone,
  picture: user.picture.large,
  country: user.location.country,
  state: user.location.state,
  city: user.location.city,
  birthDate: user.dob.date,
})


export const useFetchUsers = (results: number = 10) => {
  return useQuery<User[]>({
    queryKey: ['users', results],
    queryFn: async () => {
      const response = await randomUserApi.get(`?results=${results}`)
      const users = response.data.results as ApiUser[]
      return users.map(mapUser)
    },
    staleTime: Infinity,          
    refetchOnWindowFocus: false,      
  })
}
