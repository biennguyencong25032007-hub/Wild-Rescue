import { useEffect, useState, useCallback } from 'react'
import { api } from '@/services/api'

interface UseFetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: Record<string, string>
  skip?: boolean
  onSuccess?: (data: any) => void
  onError?: (error: Error) => void
}

interface UseFetchState<T> {
  data: T | null
  loading: boolean
  error: Error | null
  refetch: () => Promise<void>
}

export function useFetch<T = any>(
  url: string,
  options: UseFetchOptions = {},
): UseFetchState<T> {
  const { method = 'GET', headers, skip = false, onSuccess, onError } = options
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetch = useCallback(async () => {
    if (skip) {
      setLoading(false)
      return
    }

    try {
      setLoading(true)
      setError(null)

      const response = await api.request<T>({
        url,
        method,
        headers,
      })

      setData(response.data)
      onSuccess?.(response.data)
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err))
      setError(error)
      onError?.(error)
    } finally {
      setLoading(false)
    }
  }, [url, method, headers, skip, onSuccess, onError])

  useEffect(() => {
    fetch()
  }, [fetch])

  return { data, loading, error, refetch: fetch }
}
