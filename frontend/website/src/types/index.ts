export type UserRole = 'ADMIN' | 'HOSPITAL_STAFF' | 'VOLUNTEER' | 'USER'
export type UserStatus = 'ACTIVE' | 'INACTIVE' | 'SUSPENDED' | 'DELETED'
export type AnimalCondition = 'CRITICAL' | 'INJURED' | 'SICK' | 'LOST' | 'ABANDONED'
export type ReportStatus = 'PENDING' | 'ASSIGNED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'
export type Priority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
export type RescueStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'

export interface User {
  id: string
  email: string
  phone?: string
  fullName: string
  avatar?: string
  bio?: string
  role: UserRole
  status: UserStatus
  latitude?: number
  longitude?: number
  address?: string
  createdAt: string
  updatedAt: string
}

export interface Report {
  id: string
  title: string
  description: string
  animalType: string
  species?: string
  condition: AnimalCondition
  latitude: number
  longitude: number
  address: string
  images: string[]
  status: ReportStatus
  priority: Priority
  userId: string
  user?: User
  rescue?: Rescue
  createdAt: string
  updatedAt: string
}

export interface Rescue {
  id: string
  reportId: string
  report?: Report
  volunteerId?: string
  volunteer?: Volunteer
  hospitalId?: string
  hospital?: Hospital
  status: RescueStatus
  startedAt?: string
  completedAt?: string
  notes?: string
  createdAt: string
  updatedAt: string
}

export interface Hospital {
  id: string
  name: string
  email: string
  phone: string
  website?: string
  latitude: number
  longitude: number
  address: string
  city: string
  description?: string
  logo?: string
  verified: boolean
  operatingHours?: string
  services: string[]
  managerId: string
  createdAt: string
  updatedAt: string
  distance?: number
}

export interface Volunteer {
  id: string
  bio?: string
  expertise: string[]
  avatar?: string
  rating: number
  reviews: number
  verified: boolean
  certifications: string[]
  userId: string
  user?: User
  createdAt: string
  updatedAt: string
}

export interface Notification {
  id: string
  type: string
  title: string
  message: string
  data?: Record<string, unknown>
  userId: string
  read: boolean
  readAt?: string
  createdAt: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  tags: string[]
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export interface DonationTier {
  id: string
  name: string
  amount: number
  description: string
  benefits: string[]
  popular?: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  avatar: string
  rating: number
}
