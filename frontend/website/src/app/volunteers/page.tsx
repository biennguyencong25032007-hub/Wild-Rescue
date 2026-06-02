'use client'

import { useState } from 'react'
import { HiOutlineSearch, HiOutlineStar, HiOutlineCheckCircle, HiOutlineXCircle } from 'react-icons/hi'
import { FaUser } from 'react-icons/fa'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { mockVolunteers } from '@/utils/mockData'

export default function VolunteersPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredVolunteers = mockVolunteers.filter((volunteer) => {
    const user = volunteer.user
    return (
      user?.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      volunteer.bio?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      volunteer.expertise.some(exp => exp.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-accent-500/5 rounded-full blur-[120px]" />
        </div>
        <div className="absolute inset-0 dot-pattern" />

        <div className="relative section-container text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-sm font-medium text-primary-400 mb-6 animate-fade-in">
            ❤️ Tình nguyện viên
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Mạng lưới <span className="gradient-text">tình nguyện viên</span>
          </h1>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Những người anh hùng bên những chú thú cần giúp đỡ. Hãy tham gia đội ngũ của chúng tôi.
          </p>

          {/* CTA */}
          <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Link href="#register" className="btn-primary text-lg px-10 py-5">
              ✍️ Đăng ký tình nguyện
            </Link>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="relative pb-8">
        <div className="section-container">
          <ScrollReveal>
            <div className="glass-card p-6 md:p-8">
              <div className="relative">
                <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-500 text-lg" />
                <input
                  type="text"
                  placeholder="Tìm kiếm tình nguyện viên..."
                  className="input-field pl-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Volunteers Grid */}
      <section className="relative pb-20">
        <div className="section-container">
          {/* Results count */}
          <div className="mb-8">
            <p className="text-sm text-dark-400">
              Tìm thấy <span className="font-semibold text-white">{filteredVolunteers.length}</span> tình nguyện viên
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVolunteers.map((volunteer, index) => (
              <ScrollReveal key={volunteer.id} delay={index * 80}>
                <div className="glass-card overflow-hidden group cursor-pointer hover:border-primary-500/30 transition-all duration-300 h-full flex flex-col">
                  {/* Header background */}
                  <div className="h-24 bg-gradient-to-br from-primary-500/20 to-accent-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 dot-pattern opacity-20" />
                    {volunteer.verified && (
                      <div className="absolute top-3 right-3 z-10">
                        <HiOutlineCheckCircle className="text-primary-400 text-2xl" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col -mt-8 relative z-10">
                    {/* Avatar */}
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center border-4 border-dark-950 shadow-lg">
                      <FaUser className="text-white text-2xl" />
                    </div>

                    {/* Name & Role */}
                    <h3 className="text-lg font-bold text-white text-center mb-1">
                      {volunteer.user?.fullName || 'Tình nguyện viên'}
                    </h3>
                    <p className="text-xs text-dark-500 text-center mb-4">
                      {volunteer.verified ? '✓ Xác minh' : 'Chưa xác minh'}
                    </p>

                    {/* Bio */}
                    <p className="text-sm text-dark-400 text-center mb-4 line-clamp-2">
                      {volunteer.bio || 'Tình nguyện viên'}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center justify-center gap-2 mb-4 pb-4 border-b border-dark-700/30">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <HiOutlineStar
                            key={i}
                            className={`text-lg ${i < Math.floor(volunteer.rating) ? 'text-accent-400 fill-accent-400' : 'text-dark-700'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-white">{volunteer.rating.toFixed(1)}</span>
                      <span className="text-xs text-dark-500">({volunteer.reviews})</span>
                    </div>

                    {/* Expertise */}
                    <div className="mb-4">
                      <p className="text-xs font-medium text-dark-500 mb-2 uppercase tracking-wider">Kỹ năng</p>
                      <div className="flex flex-wrap gap-2">
                        {volunteer.expertise.slice(0, 2).map((exp) => (
                          <span
                            key={exp}
                            className="px-2 py-1 text-xs font-medium rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20"
                          >
                            {exp}
                          </span>
                        ))}
                        {volunteer.expertise.length > 2 && (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-dark-800/50 text-dark-400">
                            +{volunteer.expertise.length - 2}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Certifications */}
                    {volunteer.certifications.length > 0 && (
                      <div className="mb-4">
                        <p className="text-xs font-medium text-dark-500 mb-2 uppercase tracking-wider">Chứng chỉ</p>
                        <div className="flex items-center gap-1">
                          <HiOutlineCheckCircle className="text-primary-400" />
                          <span className="text-xs text-dark-300">
                            {volunteer.certifications.length} chứng chỉ
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Contact button */}
                    <button className="btn-secondary w-full mt-auto">
                      Liên hệ
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Empty state */}
          {filteredVolunteers.length === 0 && (
            <div className="text-center py-20">
              <FaUser className="text-5xl text-dark-700 mx-auto mb-4" />
              <p className="text-dark-500 mb-2">Không tìm thấy tình nguyện viên phù hợp</p>
              <p className="text-xs text-dark-600">Thử thay đổi từ khóa tìm kiếm</p>
            </div>
          )}
        </div>
      </section>

      {/* Register Section */}
      <section className="relative section-padding overflow-hidden" id="register">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-dark-950 to-primary-950" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/10 rounded-full blur-[200px]" />
        </div>
        <div className="absolute inset-0 dot-pattern opacity-40" />

        <div className="relative section-container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Trở thành <span className="gradient-text">tình nguyện viên</span>
              </h2>

              <p className="text-lg text-dark-400 mb-12 max-w-xl mx-auto leading-relaxed">
                Bạn có đam mê bảo vệ động vật? Hãy gia nhập mạng lưới tình nguyện viên Wild Rescue và cùng chúng tôi cứu sống hàng ngàn sinh linh mỗi năm.
              </p>

              <div className="glass-card p-8 md:p-12 mb-8">
                <h3 className="text-2xl font-bold text-white mb-8">Quy trình đăng ký đơn giản</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      step: '01',
                      title: 'Điền thông tin',
                      desc: 'Cung cấp thông tin cá nhân và kỹ năng của bạn',
                    },
                    {
                      step: '02',
                      title: 'Xác minh',
                      desc: 'Đội ngũ kiểm tra hồ sơ của bạn',
                    },
                    {
                      step: '03',
                      title: 'Bắt đầu tình nguyện',
                      desc: 'Nhận thông báo về các vụ cứu hộ',
                    },
                  ].map((item) => (
                    <div key={item.step} className="text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold">
                        {item.step}
                      </div>
                      <h4 className="font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-dark-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/contact" className="btn-primary text-lg px-10 py-5">
                ✍️ Đăng ký ngay
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
