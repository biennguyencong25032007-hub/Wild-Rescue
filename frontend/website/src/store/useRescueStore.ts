import { useState, useCallback } from 'react'
import { Report, ReportStatus } from '@/types'

interface RescueStoreState {
  reports: Report[]
  selectedReport: Report | null
  filters: {
    status: ReportStatus | 'all'
    priority: string
    animalType: string
  }
}

export function useRescueStore() {
  const [state, setState] = useState<RescueStoreState>({
    reports: [],
    selectedReport: null,
    filters: {
      status: 'all',
      priority: 'all',
      animalType: 'all',
    },
  })

  const setReports = useCallback((reports: Report[]) => {
    setState((prev) => ({ ...prev, reports }))
  }, [])

  const addReport = useCallback((report: Report) => {
    setState((prev) => ({
      ...prev,
      reports: [report, ...prev.reports],
    }))
  }, [])

  const updateReport = useCallback((id: string, updates: Partial<Report>) => {
    setState((prev) => ({
      ...prev,
      reports: prev.reports.map((r) => (r.id === id ? { ...r, ...updates } : r)),
    }))
  }, [])

  const deleteReport = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      reports: prev.reports.filter((r) => r.id !== id),
    }))
  }, [])

  const selectReport = useCallback((report: Report | null) => {
    setState((prev) => ({ ...prev, selectedReport: report }))
  }, [])

  const setFilters = useCallback((filters: Partial<RescueStoreState['filters']>) => {
    setState((prev) => ({
      ...prev,
      filters: { ...prev.filters, ...filters },
    }))
  }, [])

  const clearFilters = useCallback(() => {
    setState((prev) => ({
      ...prev,
      filters: {
        status: 'all',
        priority: 'all',
        animalType: 'all',
      },
    }))
  }, [])

  return {
    ...state,
    setReports,
    addReport,
    updateReport,
    deleteReport,
    selectReport,
    setFilters,
    clearFilters,
  }
}
