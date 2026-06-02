import { useContext, useCallback } from 'react'
import { AppContext } from '@/store/AppContext'

export function useNotification() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useNotification must be used within AppProvider')
  }

  const { notifications, addNotification, removeNotification } = context

  const notify = useCallback(
    (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info', duration = 3000) => {
      const id = Date.now().toString()
      addNotification({ id, type, message, duration })

      if (duration > 0) {
        setTimeout(() => {
          removeNotification(id)
        }, duration)
      }

      return id
    },
    [addNotification, removeNotification],
  )

  const success = useCallback((message: string, duration?: number) => notify(message, 'success', duration), [notify])
  const error = useCallback((message: string, duration?: number) => notify(message, 'error', duration), [notify])
  const warning = useCallback((message: string, duration?: number) => notify(message, 'warning', duration), [notify])
  const info = useCallback((message: string, duration?: number) => notify(message, 'info', duration), [notify])

  return {
    notifications,
    notify,
    success,
    error,
    warning,
    info,
    remove: removeNotification,
  }
}
