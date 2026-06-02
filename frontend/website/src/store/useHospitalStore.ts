import { useState, useCallback } from 'react'
import { Hospital } from '@/types'

interface HospitalStoreState {
  hospitals: Hospital[]
  selectedHospital: Hospital | null
  filters: {
    city: string
    service: string
    verified: boolean
  }
  isLoading: boolean
}

export function useHospitalStore() {
  const [state, setState] = useState<HospitalStoreState>({
    hospitals: [],
    selectedHospital: null,
    filters: {
      city: 'Tất cả',
      service: 'Tất cả',
      verified: true,
    },
    isLoading: false,
  })

  const setHospitals = useCallback((hospitals: Hospital[]) => {
    setState((prev) => ({ ...prev, hospitals }))
  }, [])

  const addHospital = useCallback((hospital: Hospital) => {
    setState((prev) => ({
      ...prev,
      hospitals: [...prev.hospitals, hospital],
    }))
  }, [])

  const updateHospital = useCallback((id: string, updates: Partial<Hospital>) => {
    setState((prev) => ({
      ...prev,
      hospitals: prev.hospitals.map((h) => (h.id === id ? { ...h, ...updates } : h)),
    }))
  }, [])

  const deleteHospital = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      hospitals: prev.hospitals.filter((h) => h.id !== id),
    }))
  }, [])

  const selectHospital = useCallback((hospital: Hospital | null) => {
    setState((prev) => ({ ...prev, selectedHospital: hospital }))
  }, [])

  const setFilters = useCallback((filters: Partial<HospitalStoreState['filters']>) => {
    setState((prev) => ({
      ...prev,
      filters: { ...prev.filters, ...filters },
    }))
  }, [])

  const setIsLoading = useCallback((isLoading: boolean) => {
    setState((prev) => ({ ...prev, isLoading }))
  }, [])

  return {
    ...state,
    setHospitals,
    addHospital,
    updateHospital,
    deleteHospital,
    selectHospital,
    setFilters,
    setIsLoading,
  }
}
