const SELECTED_USER_KEY = 'selectedUser'

export const saveSelectedUser = (user: User) => {
  localStorage.setItem(SELECTED_USER_KEY, JSON.stringify(user))
}

export const getSelectedUser = (): User | null => {
  if (typeof window === 'undefined') return null
  const stored = localStorage.getItem(SELECTED_USER_KEY)
  return stored ? JSON.parse(stored) : null
}

export const clearSelectedUser = () => {
  localStorage.removeItem(SELECTED_USER_KEY)
}