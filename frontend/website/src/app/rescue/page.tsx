'use client'

import { useState } from 'react'
import { FaPaw, FaCamera, FaMapMarkerAlt } from 'react-icons/fa'
import { HiOutlinePhotograph, HiOutlineLocationMarker, HiOutlineExclamation, HiOutlineChevronDown } from 'react-icons/hi'
import ScrollReveal from '@/components/ScrollReveal'
import AnimalCard from '@/components/AnimalCard'
import { mockReports } from '@/utils/mockData'
import type { AnimalCondition, Priority } from '@/types'

const animalTypes = ['Chó', 'Mèo', 'Chim', 'Rùa', 'Khỉ', 'Rắn', 'Thỏ', 'Khác']

const conditionOptions: { value: AnimalCondition; label: string; desc: string }[] = [
  { value: 'CRITICAL', label: '🔴 Nguy kịch', desc: 'Tình trạng rất nghiêm trọng, cần cứu hộ ngay' },
  { value: 'INJURED', label: '🟠 Bị thương', desc: 'Có vết thương rõ ràng, cần chăm sóc y tế' },
  { value: 'SICK', label: '🟡 Bị bệnh', desc: 'Có dấu hiệu bệnh, cần khám chữa' },
  { value: 'LOST', label: '🔵 Bị lạc', desc: 'Có vẻ là thú cưng bị lạc chủ' },
  { value: 'ABANDONED', label: '🟣 Bị bỏ rơi', desc: 'Bị bỏ rơi, cần được chăm sóc' },
]

export default function RescuePage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    animalType: '',
    species: '',
    condition: '' as AnimalCondition | '',
    priority: 'MEDIUM' as Priority,
    address: '',
    latitude: '',
    longitude: '',
    images: [] as File[],
  })

  const [activeTab, setActiveTab] = useState<'report' | 'list'>('report')
  const [filterStatus, setFilterStatus] = useState('all')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const filteredReports = filterStatus === 'all' 
    ? mockReports 
    : mockReports.filter(r => r.status === filterStatus)

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
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-sm font-medium text-rose-400 mb-6 animate-fade-in">
            🆘 Cứu hộ khẩn cấp
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Báo cáo <span className="gradient-text">cứu hộ</span>
          </h1>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Bạn phát hiện động vật cần giúp đỡ? Hãy tạo báo cáo ngay để đội cứu hộ có thể hỗ trợ nhanh nhất.
          </p>
        </div>
      </section>

      {/* Tab switch */}
      <section className="relative pb-20">
        <div className="section-container">
          <div className="flex items-center justify-center gap-2 mb-12">
            {[
              { id: 'report', label: '📝 Tạo báo cáo', icon: null },
              { id: 'list', label: '📋 Danh sách báo cáo', icon: null },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'report' | 'list')}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                    : 'text-dark-400 hover:text-dark-300 hover:bg-dark-800/50 border border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Report Form */}
          {activeTab === 'report' && (
            <ScrollReveal>
              <div className="max-w-3xl mx-auto">
                {submitted ? (
                  <div className="glass-card p-12 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                      <FaPaw className="text-white text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Báo cáo thành công! 🎉</h3>
                    <p className="text-dark-400 mb-6">
                      Cảm ơn bạn đã gửi báo cáo. Đội cứu hộ sẽ liên hệ trong thời gian sớm nhất.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-primary"
                    >
                      Tạo báo cáo mới
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-xl font-bold text-white mb-2">Thông tin cứu hộ</h2>
                      <p className="text-sm text-dark-400">Vui lòng cung cấp thông tin chi tiết để đội cứu hộ hỗ trợ tốt nhất</p>
                    </div>

                    {/* Title */}
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">
                        Tiêu đề báo cáo <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ví dụ: Chó bị thương trên đường Nguyễn Huệ"
                        className="input-field"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      />
                    </div>

                    {/* Animal type & species */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-dark-300 mb-2">
                          Loại động vật <span className="text-rose-400">*</span>
                        </label>
                        <div className="relative">
                          <select
                            required
                            className="input-field appearance-none pr-10"
                            value={formData.animalType}
                            onChange={(e) => setFormData({ ...formData, animalType: e.target.value })}
                          >
                            <option value="">Chọn loại</option>
                            {animalTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                          <HiOutlineChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-500" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-300 mb-2">
                          Giống/Loài (nếu biết)
                        </label>
                        <input
                          type="text"
                          placeholder="Ví dụ: Chó ta, Mèo Ba Tư..."
                          className="input-field"
                          value={formData.species}
                          onChange={(e) => setFormData({ ...formData, species: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Condition */}
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-3">
                        Tình trạng <span className="text-rose-400">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {conditionOptions.map((option) => (
                          <label
                            key={option.value}
                            className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                              formData.condition === option.value
                                ? 'border-primary-500/50 bg-primary-500/10'
                                : 'border-dark-700/30 bg-dark-900/30 hover:border-dark-600/50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="condition"
                              value={option.value}
                              checked={formData.condition === option.value}
                              onChange={() => setFormData({ ...formData, condition: option.value })}
                              className="sr-only"
                            />
                            <div>
                              <p className="text-sm font-medium text-white">{option.label}</p>
                              <p className="text-xs text-dark-500 mt-0.5">{option.desc}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">
                        Mô tả chi tiết <span className="text-rose-400">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Mô tả tình trạng động vật, hoàn cảnh phát hiện, điều đặc biệt cần lưu ý..."
                        className="textarea-field"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      />
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">
                        <HiOutlineLocationMarker className="inline mr-1" />
                        Địa chỉ <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nhập địa chỉ nơi phát hiện động vật"
                        className="input-field"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      />
                      <button
                        type="button"
                        className="mt-2 inline-flex items-center gap-2 text-xs text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        <FaMapMarkerAlt />
                        Sử dụng vị trí hiện tại
                      </button>
                    </div>

                    {/* Image upload placeholder */}
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">
                        <HiOutlinePhotograph className="inline mr-1" />
                        Hình ảnh
                      </label>
                      <div className="border-2 border-dashed border-dark-700/50 rounded-xl p-8 text-center hover:border-primary-500/30 transition-colors cursor-pointer">
                        <FaCamera className="text-3xl text-dark-600 mx-auto mb-3" />
                        <p className="text-sm text-dark-400">Kéo thả hoặc nhấn để chọn ảnh</p>
                        <p className="text-xs text-dark-600 mt-1">PNG, JPG tối đa 10MB, tối đa 5 ảnh</p>
                      </div>
                    </div>

                    {/* Warning */}
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-accent-500/10 border border-accent-500/20">
                      <HiOutlineExclamation className="text-accent-400 text-xl flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-accent-300">Lưu ý an toàn</p>
                        <p className="text-xs text-dark-400 mt-1">
                          Giữ khoảng cách an toàn với động vật hoang dã. Không cố gắng bắt hoặc di chuyển nếu không có kinh nghiệm.
                        </p>
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full btn-primary text-lg py-5 ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                      id="rescue-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Đang gửi...
                        </>
                      ) : (
                        '🆘 Gửi báo cáo cứu hộ'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          )}

          {/* Report List */}
          {activeTab === 'list' && (
            <div>
              {/* Filters */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                {[
                  { value: 'all', label: 'Tất cả' },
                  { value: 'PENDING', label: 'Chờ xử lý' },
                  { value: 'IN_PROGRESS', label: 'Đang cứu hộ' },
                  { value: 'COMPLETED', label: 'Hoàn thành' },
                ].map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setFilterStatus(filter.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      filterStatus === filter.value
                        ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                        : 'text-dark-400 hover:text-dark-300 border border-dark-700/30 hover:border-dark-600/50'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Reports grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredReports.map((report, index) => (
                  <ScrollReveal key={report.id} delay={index * 80}>
                    <AnimalCard report={report} />
                  </ScrollReveal>
                ))}
              </div>

              {filteredReports.length === 0 && (
                <div className="text-center py-20">
                  <FaPaw className="text-5xl text-dark-700 mx-auto mb-4" />
                  <p className="text-dark-500">Không có báo cáo nào</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
