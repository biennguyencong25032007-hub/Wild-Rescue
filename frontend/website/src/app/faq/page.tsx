'use client'

import { useState } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi'
import ScrollReveal from '@/components/ScrollReveal'
import { mockFAQs } from '@/utils/mockData'

const faqs = {
  'Chung': mockFAQs.filter(faq => faq.category === 'Chung'),
  'Sử dụng': mockFAQs.filter(faq => faq.category === 'Sử dụng'),
  'Cứu hộ': mockFAQs.filter(faq => faq.category === 'Cứu hộ'),
  'Tình nguyện': mockFAQs.filter(faq => faq.category === 'Tình nguyện'),
  'Chi phí': mockFAQs.filter(faq => faq.category === 'Chi phí'),
  'Nhận nuôi': mockFAQs.filter(faq => faq.category === 'Nhận nuôi'),
  'Quyên góp': mockFAQs.filter(faq => faq.category === 'Quyên góp'),
}

export default function FAQPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('Chung')

  const currentFAQs = faqs[selectedCategory as keyof typeof faqs] || []

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
            ❓ Câu hỏi thường gặp
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Những <span className="gradient-text">câu hỏi phổ biến</span>
          </h1>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Tìm câu trả lời cho những câu hỏi về Wild Rescue, quy trình cứu hộ, và cách tham gia.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="relative section-padding">
        <div className="section-container max-w-3xl mx-auto">
          {/* Category tabs */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {Object.keys(faqs).map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category)
                    setExpandedId(null)
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                      : 'text-dark-400 border border-dark-700/30 hover:border-dark-600/50 hover:text-dark-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* FAQ Items */}
          <div className="space-y-4">
            {currentFAQs.map((faq, index) => (
              <ScrollReveal key={faq.id} delay={index * 50}>
                <div
                  className="glass-card overflow-hidden transition-all duration-300 hover:border-primary-500/30"
                >
                  <button
                    onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                    className="w-full p-6 flex items-start gap-4 hover:bg-dark-900/50 transition-colors"
                  >
                    <div className="flex-1 text-left">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary-400">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`flex-shrink-0 text-primary-500 transition-transform duration-300 ${
                        expandedId === faq.id ? 'rotate-180' : ''
                      }`}
                    >
                      <HiOutlineChevronDown className="text-2xl" />
                    </div>
                  </button>

                  {/* Answer */}
                  {expandedId === faq.id && (
                    <div className="px-6 pb-6 border-t border-dark-700/30 animate-fade-in">
                      <p className="text-dark-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Empty state */}
          {currentFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-dark-500">Không có câu hỏi trong danh mục này</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-dark-950 to-primary-950" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/10 rounded-full blur-[200px]" />
        </div>
        <div className="absolute inset-0 dot-pattern opacity-40" />

        <div className="relative section-container">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Không tìm thấy câu trả lời?
              </h2>
              <p className="text-lg text-dark-400 mb-8">
                Hãy liên hệ với đội hỗ trợ của chúng tôi ngay
              </p>
              <a href="/contact" className="btn-primary text-lg px-10 py-5 inline-block">
                📧 Liên hệ chúng tôi
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
