import { mapUser } from "@/hooks/useFetchUsers"

describe('mapUser', () => {
  it('should correctly map an ApiUser to a User', () => {
    const mockApiUser: ApiUser = {
      login: {
        uuid: 'abc-123',
        username: 'cooluser',
      },
      name: {
        first: 'Jane',
        last: 'Doe',
      },
      email: 'jane.doe@example.com',
      phone: '(123) 456-7890',
      picture: {
        large: 'https://example.com/photo.jpg',
      },
      location: {
        country: 'Brazil',
        state: 'São Paulo',
        city: 'Campinas',
      },
      dob: {
        date: '1990-06-15T12:00:00Z',
      },
    }

    const result = mapUser(mockApiUser)

    expect(result).toEqual({
      id: 'abc-123',
      name: 'Jane Doe',
      username: 'cooluser',
      email: 'jane.doe@example.com',
      phone: '(123) 456-7890',
      picture: 'https://example.com/photo.jpg',
      country: 'Brazil',
      state: 'São Paulo',
      city: 'Campinas',
      birthDate: '1990-06-15T12:00:00Z',
    })
  })
})
