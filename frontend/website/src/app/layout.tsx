import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import EmergencyBanner from '@/components/EmergencyBanner'

export const metadata: Metadata = {
  title: {
    default: 'Wild Rescue - Giải cứu Động vật Hoang dã',
    template: '%s | Wild Rescue',
  },
  description:
    'Nền tảng kết nối cộng đồng giải cứu động vật hoang dã. Báo cáo, cứu hộ và bảo vệ động vật cùng Wild Rescue.',
  keywords: [
    'cứu hộ động vật',
    'giải cứu động vật hoang dã',
    'bệnh viện thú y',
    'tình nguyện viên',
    'bảo vệ động vật',
    'wild rescue',
    'animal rescue vietnam',
  ],
  authors: [{ name: 'Wild Rescue Team' }],
  openGraph: {
    title: 'Wild Rescue - Giải cứu Động vật Hoang dã',
    description: 'Nền tảng kết nối cộng đồng giải cứu động vật hoang dã.',
    url: 'https://wildrescue.app',
    siteName: 'Wild Rescue',
    locale: 'vi_VN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="min-h-screen bg-dark-950 text-dark-200 antialiased">
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <EmergencyBanner />
      </body>
    </html>
  )
}
