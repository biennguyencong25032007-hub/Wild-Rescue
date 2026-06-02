'use client'

import { useState } from 'react'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineCheck } from 'react-icons/hi'
import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa'
import ScrollReveal from '@/components/ScrollReveal'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 5000)
  }

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
            📧 Liên hệ chúng tôi
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Chúng tôi muốn <span className="gradient-text">nghe từ bạn</span>
          </h1>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Có câu hỏi, đề xuất, hay muốn hợp tác? Hãy liên hệ với chúng tôi, chúng tôi sẽ phản hồi sớm nhất.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Thông tin liên hệ</h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary-500/20 text-primary-400">
                        <HiOutlineMail className="text-xl" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <p className="text-dark-400">contact@wildrescue.vn</p>
                      <p className="text-sm text-dark-500">Phản hồi trong vòng 24 giờ</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-accent-500/20 text-accent-400">
                        <HiOutlinePhone className="text-xl" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Hotline</h3>
                      <p className="text-dark-400">1900 WILD (9453)</p>
                      <p className="text-sm text-dark-500">Hỗ trợ 24/7 cho cứu hộ khẩn cấp</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-rose-500/20 text-rose-400">
                        <HiOutlineLocationMarker className="text-xl" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Địa chỉ</h3>
                      <p className="text-dark-400">
                        123 Nguyễn Thị Minh Khai<br />
                        Quận 1, TP. Hồ Chí Minh
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-12 pt-8 border-t border-dark-700/30">
                  <h3 className="font-semibold text-white mb-6">Theo dõi chúng tôi</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: <FaFacebookF />, label: 'Facebook', href: '#' },
                      { icon: <FaInstagram />, label: 'Instagram', href: '#' },
                      { icon: <FaTiktok />, label: 'TikTok', href: '#' },
                      { icon: <FaYoutube />, label: 'YouTube', href: '#' },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-12 h-12 rounded-lg bg-dark-800/50 border border-dark-700/30 flex items-center justify-center text-dark-400 hover:bg-primary-500/20 hover:text-primary-400 hover:border-primary-500/30 transition-all"
                        title={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal>
              <div className="glass-card p-8 md:p-10">
                <h2 className="text-2xl font-bold text-white mb-6">Gửi tin nhắn</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                      <HiOutlineCheck className="text-white text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Tin nhắn đã gửi! ✓</h3>
                    <p className="text-dark-400 mb-6">
                      Cảm ơn bạn! Chúng tôi sẽ phản hồi sớm nhất có thể.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">
                        Họ tên <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nhập họ tên của bạn"
                        className="input-field"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">
                        Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Nhập email của bạn"
                        className="input-field"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">
                        Điện thoại
                      </label>
                      <input
                        type="tel"
                        placeholder="Nhập số điện thoại"
                        className="input-field"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">
                        Chủ đề <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ví dụ: Hợp tác, Hỗ trợ, Phản hồi"
                        className="input-field"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">
                        Tin nhắn <span className="text-rose-400">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Nhập tin nhắn của bạn"
                        className="input-field resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full text-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn'}
                    </button>

                    <p className="text-xs text-dark-500 text-center">
                      Chúng tôi sẽ không chia sẻ thông tin của bạn cho bất kỳ ai.
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 to-primary-950" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="text-dark-400">Bản đồ sẽ được cập nhật sớm</p>
          </div>
        </div>
      </section>
    </>
  )
}
