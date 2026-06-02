import axios from 'axios'

const API_URL = process.env.API_URL || 'http://localhost:3001/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

// Request interceptor for auth token
api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('wild_rescue_token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('wild_rescue_token')
      }
    }
    return Promise.reject(error)
  }
)

export default api

// API helper functions
export const reportApi = {
  getAll: (params?: Record<string, string | number>) => api.get('/reports', { params }),
  getById: (id: string) => api.get(`/reports/${id}`),
  create: (data: FormData) => api.post('/reports', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
}

export const hospitalApi = {
  getAll: (params?: Record<string, string | number>) => api.get('/hospitals', { params }),
  getById: (id: string) => api.get(`/hospitals/${id}`),
}

export const volunteerApi = {
  getAll: () => api.get('/volunteers'),
  register: (data: Record<string, unknown>) => api.post('/volunteers', data),
}

export const authApi = {
  login: (data: { email: string; password: string }) => api.post('/auth/login', data),
  register: (data: { email: string; password: string; fullName: string; phone?: string }) =>
    api.post('/auth/register', data),
}
