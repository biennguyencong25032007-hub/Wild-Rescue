import { createContext } from 'react'
import { User } from '@/types'
import { Notification } from '@/hooks/useNotification'

export interface AppContextType {
  // Auth
  user: User | null
  isAuthChecked: boolean
  setUser: (user: User | null) => void
  logout: () => void

  // Notifications
  notifications: Notification[]
  addNotification: (notification: Notification) => void
  removeNotification: (id: string) => void
  clearNotifications: () => void

  // Filters
  filters: {
    searchQuery: string
    selectedCategory: string
    selectedStatus: string
  }
  setFilters: (filters: Partial<AppContextType['filters']>) => void

  // Loading states
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

export const AppContext = createContext<AppContextType | undefined>(undefined)
