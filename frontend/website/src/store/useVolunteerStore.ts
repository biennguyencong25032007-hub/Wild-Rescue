import { useState, useCallback } from 'react'
import { Volunteer } from '@/types'

interface VolunteerStoreState {
  volunteers: Volunteer[]
  selectedVolunteer: Volunteer | null
  isLoading: boolean
}

export function useVolunteerStore() {
  const [state, setState] = useState<VolunteerStoreState>({
    volunteers: [],
    selectedVolunteer: null,
    isLoading: false,
  })

  const setVolunteers = useCallback((volunteers: Volunteer[]) => {
    setState((prev) => ({ ...prev, volunteers }))
  }, [])

  const addVolunteer = useCallback((volunteer: Volunteer) => {
    setState((prev) => ({
      ...prev,
      volunteers: [...prev.volunteers, volunteer],
    }))
  }, [])

  const updateVolunteer = useCallback((id: string, updates: Partial<Volunteer>) => {
    setState((prev) => ({
      ...prev,
      volunteers: prev.volunteers.map((v) => (v.id === id ? { ...v, ...updates } : v)),
    }))
  }, [])

  const deleteVolunteer = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      volunteers: prev.volunteers.filter((v) => v.id !== id),
    }))
  }, [])

  const selectVolunteer = useCallback((volunteer: Volunteer | null) => {
    setState((prev) => ({ ...prev, selectedVolunteer: volunteer }))
  }, [])

  const setIsLoading = useCallback((isLoading: boolean) => {
    setState((prev) => ({ ...prev, isLoading }))
  }, [])

  return {
    ...state,
    setVolunteers,
    addVolunteer,
    updateVolunteer,
    deleteVolunteer,
    selectVolunteer,
    setIsLoading,
  }
}
