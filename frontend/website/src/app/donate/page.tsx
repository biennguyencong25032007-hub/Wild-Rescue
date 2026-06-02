'use client'

import { useState } from 'react'
import { HiOutlineCheck, HiOutlineHeart, HiOutlineGift } from 'react-icons/hi'
import { FaHeart } from 'react-icons/fa'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { mockDonationTiers, mockTestimonials } from '@/utils/mockData'

export default function DonatePage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null)

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
            💛 Quyên góp
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Mỗi quyên góp <span className="gradient-text">cứu sống một sinh linh</span>
          </h1>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Quyên góp của bạn sẽ giúp chúng tôi cứu hộ, điều trị, và chăm sóc những động vật cần giúp đỡ. Cảm ơn bạn vì đóng góp.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/20 to-transparent" />
        <div className="relative section-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Quyên góp của bạn sẽ giúp gì?
              </h2>
              <p className="text-lg text-dark-400">
                Xem cách chúng tôi sử dụng mỗi quyên góp
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                amount: '50,000 đ',
                title: 'Bữa ăn',
                desc: 'Cung cấp một bữa ăn đầy đủ cho động vật được cứu hộ',
                icon: <span className="text-3xl">🍗</span>,
              },
              {
                amount: '200,000 đ',
                title: 'Khám chữa',
                desc: 'Chi phí khám tổng quát và xét nghiệm cơ bản',
                icon: <span className="text-3xl">🩺</span>,
              },
              {
                amount: '500,000 đ',
                title: 'Phẫu thuật',
                desc: 'Chi phí cho một ca phẫu thuật y tế cần thiết',
                icon: <span className="text-3xl">⚕️</span>,
              },
              {
                amount: '1,000,000 đ',
                title: 'Phục hồi toàn bộ',
                desc: 'Chi phí toàn bộ quá trình cứu hộ và phục hồi',
                icon: <span className="text-3xl">❤️</span>,
              },
              {
                amount: '2,000,000 đ',
                title: 'Tái thả tự nhiên',
                desc: 'Chi phí cho chương trình tái thả động vật hoang dã',
                icon: <span className="text-3xl">🌿</span>,
              },
              {
                amount: '5,000,000 đ',
                title: 'Cơ sở cứu hộ',
                desc: 'Đóng góp cho phát triển hạ tầng cứu hộ',
                icon: <span className="text-3xl">🏥</span>,
              },
            ].map((impact, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <div className="glass-card p-6 text-center">
                  <div className="text-5xl mb-4">{impact.icon}</div>
                  <p className="text-sm font-semibold text-primary-400 mb-2">{impact.amount}</p>
                  <h3 className="font-bold text-white mb-2">{impact.title}</h3>
                  <p className="text-sm text-dark-400">{impact.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="relative section-padding">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Chọn cách quyên góp
              </h2>
              <p className="text-lg text-dark-400">
                Các gói quyên góp được thiết kế với các lợi ích khác nhau
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {mockDonationTiers.map((tier, index) => (
              <ScrollReveal key={tier.id} delay={index * 100}>
                <div
                  onClick={() => setSelectedTier(tier.id)}
                  className={`glass-card p-6 cursor-pointer transition-all duration-300 h-full flex flex-col ${
                    selectedTier === tier.id
                      ? 'ring-2 ring-primary-500 bg-primary-500/10'
                      : 'hover:border-primary-500/30'
                  } ${tier.popular ? 'md:scale-105 md:shadow-2xl' : ''}`}
                >
                  {/* Popular badge */}
                  {tier.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-accent-500 to-rose-500 text-xs font-bold text-white">
                        ⭐ PHỔ BIẾN
                      </span>
                    </div>
                  )}

                  {/* Name */}
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>

                  {/* Amount */}
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary-400">
                      {(tier.amount / 1000000).toFixed(1)}M
                    </span>
                    <span className="text-dark-500 text-sm"> / tháng</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-dark-400 mb-6 flex-1">{tier.description}</p>

                  {/* Button */}
                  <button className="btn-secondary w-full mb-6">Chọn gói này</button>

                  {/* Benefits */}
                  <div className="space-y-3">
                    {tier.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex gap-2 items-start">
                        <HiOutlineCheck className="text-primary-400 flex-shrink-0 mt-0.5 text-lg" />
                        <span className="text-xs text-dark-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/50 to-transparent" />
        <div className="relative section-container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="glass-card p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Cách sử dụng quỹ quyên góp</h2>

                <div className="space-y-6">
                  {[
                    { percent: 70, label: 'Cứu hộ & Điều trị', color: 'from-primary-500 to-primary-700' },
                    { percent: 20, label: 'Giáo dục & Nâng cao nhận thức', color: 'from-accent-500 to-accent-700' },
                    { percent: 10, label: 'Chi phí vận hành & Phát triển', color: 'from-rose-500 to-rose-700' },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-white">{item.label}</span>
                        <span className="font-bold text-primary-400">{item.percent}%</span>
                      </div>
                      <div className="h-3 bg-dark-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${item.color} transition-all duration-500`}
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-dark-400 mt-8 text-center">
                  Chúng tôi cam kết minh bạch và trách nhiệm cao nhất trong việc sử dụng quỹ quyên góp.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative section-padding">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Nhà quyên góp đánh giá về chúng tôi
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {mockTestimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={index * 100}>
                <div className="glass-card p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="text-dark-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="text-xs text-dark-500">{testimonial.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-dark-950 to-primary-950" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/10 rounded-full blur-[200px]" />
        </div>
        <div className="absolute inset-0 dot-pattern opacity-40" />

        <div className="relative section-container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center shadow-glow-lg">
                <FaHeart className="text-white text-4xl" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Sự yêu thương của bạn <span className="gradient-text">cứu sống động vật</span>
              </h2>

              <p className="text-lg text-dark-400 mb-10 max-w-xl mx-auto leading-relaxed">
                Mỗi quyên góp, dù nhỏ hay lớn, đều tạo nên một sự khác biệt lớn. Cảm ơn bạn vì là một phần của hành trình bảo vệ động vật của chúng tôi.
              </p>

              <button className="btn-primary text-lg px-12 py-6 mb-6">
                💛 Quyên góp ngay
              </button>

              <p className="text-sm text-dark-500">
                Quyên góp của bạn được bảo mật và có thể được trừ thuế theo luật pháp Việt Nam.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative section-padding">
        <div className="section-container max-w-2xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Câu hỏi về quyên góp</h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              {
                q: 'Tôi có thể hủy quyên góp định kỳ không?',
                a: 'Có, bạn có thể hủy bất cứ lúc nào. Không có phí hủy hoặc cam kết lâu dài.',
              },
              {
                q: 'Quyên góp của tôi có được giảm thuế không?',
                a: 'Có, Wild Rescue là tổ chức từ thiện được công nhận. Bạn có thể yêu cầu chứng chỉ quyên góp để giảm thuế.',
              },
              {
                q: 'Tôi có thể xem báo cáo chi tiêu không?',
                a: 'Có, chúng tôi công bố báo cáo tài chính hàng quý trên trang web của chúng tôi.',
              },
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <details className="glass-card p-6 group">
                  <summary className="cursor-pointer font-semibold text-white flex items-center gap-3 group-open:text-primary-400">
                    <span>{faq.q}</span>
                    <HiOutlineHeart className="ml-auto group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="text-dark-300 mt-4 pl-6">{faq.a}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
