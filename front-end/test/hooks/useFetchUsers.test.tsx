import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useFetchUsers } from '../../src/hooks/useFetchUsers'

describe('useFetchUsers', () => {
  it('it should search and return users', async () => {
    const queryClient = new QueryClient()

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result } = renderHook(() => useFetchUsers(5), { wrapper })

    await waitFor(() => {
      if (result.current.isError) throw result.current.error
      expect(result.current.isSuccess).toBe(true)
    }, { timeout: 5000 })

    expect(result.current.data).toBeDefined()
    expect(Array.isArray(result.current.data)).toBe(true)
  })
})