'use client'

import { useState } from 'react'
import { HiOutlineSearch, HiOutlineFilter, HiOutlineLocationMarker } from 'react-icons/hi'
import { FaHospital } from 'react-icons/fa'
import ScrollReveal from '@/components/ScrollReveal'
import HospitalCard from '@/components/HospitalCard'
import { mockHospitals } from '@/utils/mockData'

const cities = ['Tất cả', 'TP.HCM', 'Hà Nội', 'Đà Nẵng']
const serviceFilters = ['Tất cả', 'Cấp cứu 24/7', 'Phẫu thuật', 'Tiêm phòng', 'Cứu hộ động vật hoang dã', 'Spa & Grooming']

export default function HospitalsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState('Tất cả')
  const [selectedService, setSelectedService] = useState('Tất cả')

  const filteredHospitals = mockHospitals.filter((hospital) => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hospital.address.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCity = selectedCity === 'Tất cả' || hospital.city === selectedCity
    const matchesService = selectedService === 'Tất cả' || hospital.services.includes(selectedService)
    return matchesSearch && matchesCity && matchesService
  })

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-[150px]" />
        </div>
        <div className="absolute inset-0 dot-pattern" />

        <div className="relative section-container text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-sm font-medium text-primary-400 mb-6 animate-fade-in">
            🏥 Bệnh viện đối tác
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Bệnh viện <span className="gradient-text">thú y</span>
          </h1>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Tìm bệnh viện thú y gần bạn nhất. Tất cả đều được xác minh và sẵn sàng hỗ trợ cứu hộ.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="relative pb-8">
        <div className="section-container">
          <div className="glass-card p-6 md:p-8">
            {/* Search bar */}
            <div className="relative mb-6">
              <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-500 text-lg" />
              <input
                type="text"
                placeholder="Tìm kiếm bệnh viện theo tên hoặc địa chỉ..."
                className="input-field pl-12 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                id="hospital-search"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-xs font-medium text-dark-500 mb-2 uppercase tracking-wider">
                  <HiOutlineLocationMarker className="inline mr-1" />
                  Thành phố
                </label>
                <div className="flex flex-wrap gap-2">
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => setSelectedCity(city)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedCity === city
                          ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                          : 'text-dark-400 border border-dark-700/30 hover:border-dark-600/50 hover:text-dark-300'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1">
                <label className="block text-xs font-medium text-dark-500 mb-2 uppercase tracking-wider">
                  <HiOutlineFilter className="inline mr-1" />
                  Dịch vụ
                </label>
                <div className="flex flex-wrap gap-2">
                  {serviceFilters.map((service) => (
                    <button
                      key={service}
                      onClick={() => setSelectedService(service)}
                      className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                        selectedService === service
                          ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                          : 'text-dark-400 border border-dark-700/30 hover:border-dark-600/50 hover:text-dark-300'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Grid */}
      <section className="relative pb-20">
        <div className="section-container">
          {/* Results count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-dark-400">
              Tìm thấy <span className="font-semibold text-white">{filteredHospitals.length}</span> bệnh viện
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHospitals.map((hospital, index) => (
              <ScrollReveal key={hospital.id} delay={index * 80}>
                <HospitalCard hospital={hospital} />
              </ScrollReveal>
            ))}
          </div>

          {filteredHospitals.length === 0 && (
            <div className="text-center py-20">
              <FaHospital className="text-5xl text-dark-700 mx-auto mb-4" />
              <p className="text-dark-500 mb-2">Không tìm thấy bệnh viện phù hợp</p>
              <p className="text-xs text-dark-600">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
