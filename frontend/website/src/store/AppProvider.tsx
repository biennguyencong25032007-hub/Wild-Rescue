'use client'

import React, { ReactNode, useState, useCallback } from 'react'
import { AppContext, AppContextType } from './AppContext'
import { User } from '@/types'
import { Notification } from '@/hooks/useNotification'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  // Auth state
  const [storedUser, setStoredUser, clearStoredUser] = useLocalStorage<User | null>('wild_rescue_user', null)
  const [user, setUserState] = useState<User | null>(storedUser)
  const [isAuthChecked, setIsAuthChecked] = useState(false)

  // Notifications state
  const [notifications, setNotifications] = useState<Notification[]>([])

  // Filters state
  const [filters, setFiltersState] = useState({
    searchQuery: '',
    selectedCategory: 'Tất cả',
    selectedStatus: 'all',
  })

  // Loading state
  const [isLoading, setIsLoading] = useState(false)

  // Auth actions
  const setUser = useCallback(
    (newUser: User | null) => {
      setUserState(newUser)
      if (newUser) {
        setStoredUser(newUser)
      } else {
        clearStoredUser()
      }
      setIsAuthChecked(true)
    },
    [setStoredUser, clearStoredUser],
  )

  const logout = useCallback(() => {
    setUserState(null)
    clearStoredUser()
    setNotifications([])
  }, [clearStoredUser])

  // Notification actions
  const addNotification = useCallback((notification: Notification) => {
    setNotifications((prev) => [...prev, notification])
  }, [])

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id))
  }, [])

  const clearNotifications = useCallback(() => {
    setNotifications([])
  }, [])

  // Filter actions
  const setFilters = useCallback((newFilters: Partial<typeof filters>) => {
    setFiltersState((prev) => ({ ...prev, ...newFilters }))
  }, [])

  const value: AppContextType = {
    // Auth
    user,
    isAuthChecked,
    setUser,
    logout,

    // Notifications
    notifications,
    addNotification,
    removeNotification,
    clearNotifications,

    // Filters
    filters,
    setFilters,

    // Loading
    isLoading,
    setIsLoading,
  }

  // Check auth status on mount (simulate checking stored session)
  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        // In production, verify token with backend
        if (storedUser) {
          setUserState(storedUser)
        }
      } catch (error) {
        console.error('Auth check failed:', error)
        clearStoredUser()
      } finally {
        setIsAuthChecked(true)
      }
    }

    checkAuth()
  }, [])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
