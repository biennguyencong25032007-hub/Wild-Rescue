import { useContext } from 'react'
import { AppContext } from '@/store/AppContext'

export function useAuth() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAuth must be used within AppProvider')
  }

  const { user, setUser, logout } = context

  return {
    user,
    setUser,
    logout,
    isAuthenticated: !!user,
    isLoading: !user && !context.isAuthChecked,
    isAuthChecked: context.isAuthChecked,
  }
}
