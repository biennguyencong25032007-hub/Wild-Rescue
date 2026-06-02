'use client'

import { useNotification } from '@/hooks/useNotification'
import { HiOutlineX } from 'react-icons/hi'
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimesCircle } from 'react-icons/fa'

export default function NotificationContainer() {
  const { notifications, remove } = useNotification()

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <FaCheckCircle className="text-lg text-green-400" />
      case 'error':
        return <FaTimesCircle className="text-lg text-red-400" />
      case 'warning':
        return <FaExclamationCircle className="text-lg text-yellow-400" />
      case 'info':
        return <FaInfoCircle className="text-lg text-blue-400" />
      default:
        return null
    }
  }

  const getStyles = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-900/50 border-green-500/30 text-green-200'
      case 'error':
        return 'bg-red-900/50 border-red-500/30 text-red-200'
      case 'warning':
        return 'bg-yellow-900/50 border-yellow-500/30 text-yellow-200'
      case 'info':
        return 'bg-blue-900/50 border-blue-500/30 text-blue-200'
      default:
        return 'bg-dark-800 border-dark-700'
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`flex items-start gap-3 p-4 rounded-lg border backdrop-blur-sm animate-fade-in-up ${getStyles(notification.type)}`}
        >
          <div className="flex-shrink-0">{getIcon(notification.type)}</div>
          <div className="flex-1 text-sm">{notification.message}</div>
          <button
            onClick={() => remove(notification.id)}
            className="flex-shrink-0 hover:opacity-70 transition-opacity"
          >
            <HiOutlineX className="text-lg" />
          </button>
        </div>
      ))}
    </div>
  )
}
