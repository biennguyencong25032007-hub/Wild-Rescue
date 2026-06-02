'use client'

import { ReactNode } from 'react'
import { AppProvider } from '@/store'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import EmergencyBanner from '@/components/EmergencyBanner'
import NotificationContainer from '@/components/NotificationContainer'

export default function RootLayoutClient({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
      <EmergencyBanner />
      <NotificationContainer />
    </AppProvider>
  )
}
