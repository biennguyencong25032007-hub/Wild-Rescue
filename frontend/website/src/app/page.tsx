'use client'

import Link from 'next/link'
import { FaPaw, FaHeartbeat, FaHandHoldingHeart, FaHospital, FaUsers, FaMapMarkedAlt } from 'react-icons/fa'
import { HiOutlineArrowRight, HiOutlineChevronDown, HiOutlineStar, HiOutlineShieldCheck } from 'react-icons/hi'
import StatsCounter from '@/components/StatsCounter'
import ScrollReveal from '@/components/ScrollReveal'
import AnimalCard from '@/components/AnimalCard'
import HospitalCard from '@/components/HospitalCard'
import { mockReports, mockHospitals, mockTestimonials, stats } from '@/utils/mockData'

export default function HomePage() {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
        {/* Animated background */}
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[150px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary-700/10 rounded-full blur-[120px] animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[180px]" />
        </div>
        <div className="absolute inset-0 dot-pattern" />

        {/* Floating decorative elements */}
        <div className="absolute top-20 right-10 md:right-20 text-primary-500/10 animate-float">
          <FaPaw className="text-6xl md:text-8xl" />
        </div>
        <div className="absolute bottom-32 left-10 md:left-20 text-primary-500/10 animate-float-delayed">
          <FaHeartbeat className="text-5xl md:text-7xl" />
        </div>

        {/* Hero content */}
        <div className="relative section-container text-center pt-32 pb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-sm font-medium text-primary-400">Nền tảng cứu hộ động vật #1 Việt Nam</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Cùng nhau{' '}
            <span className="gradient-text-hero">giải cứu</span>
            <br />
            <span className="text-white">động vật hoang dã</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-dark-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Kết nối người phát hiện động vật cần giúp đỡ với bệnh viện thú y 
            và tình nguyện viên. Mỗi hành động nhỏ đều tạo nên sự khác biệt.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link href="/rescue" className="btn-primary text-lg px-10 py-5" id="hero-report-btn">
              🆘 Báo cáo cứu hộ
              <HiOutlineArrowRight />
            </Link>
            <Link href="/about" className="btn-secondary text-lg px-10 py-5" id="hero-learn-btn">
              Tìm hiểu thêm
            </Link>
          </div>

          {/* Mini stats */}
          <div className="flex items-center justify-center gap-8 md:gap-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {[
              { value: '1,200+', label: 'Động vật đã cứu' },
              { value: '56', label: 'Bệnh viện đối tác' },
              { value: '328', label: 'Tình nguyện viên' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-dark-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft">
          <HiOutlineChevronDown className="text-dark-500 text-2xl" />
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="relative section-padding" id="stats">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/20 to-transparent" />
        <div className="relative section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <StatsCounter end={stats.animalsRescued} label="Động vật đã cứu" suffix="+" icon={<FaPaw className="text-2xl" />} />
            <StatsCounter end={stats.hospitals} label="Bệnh viện đối tác" icon={<FaHospital className="text-2xl" />} />
            <StatsCounter end={stats.volunteers} label="Tình nguyện viên" icon={<FaUsers className="text-2xl" />} />
            <StatsCounter end={stats.cities} label="Tỉnh thành" icon={<FaMapMarkedAlt className="text-2xl" />} />
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="relative section-padding overflow-hidden" id="how-it-works">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative section-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-sm font-medium text-primary-400 mb-4">
                Quy trình
              </span>
              <h2 className="section-title text-white mb-4">
                Cứu hộ chỉ với <span className="gradient-text">3 bước</span>
              </h2>
              <p className="section-subtitle mx-auto">
                Quy trình đơn giản, nhanh chóng để kết nối bạn với đội ngũ cứu hộ chuyên nghiệp.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

            {[
              {
                step: '01',
                icon: <FaPaw className="text-3xl" />,
                title: 'Phát hiện & Báo cáo',
                description: 'Khi bạn phát hiện động vật cần giúp đỡ, chụp ảnh và tạo báo cáo trên ứng dụng với vị trí GPS chính xác.',
                color: 'from-primary-500 to-emerald-500',
              },
              {
                step: '02',
                icon: <FaHandHoldingHeart className="text-3xl" />,
                title: 'Kết nối & Điều phối',
                description: 'Hệ thống tự động thông báo cho tình nguyện viên gần nhất và đề xuất bệnh viện thú y phù hợp.',
                color: 'from-accent-500 to-amber-500',
              },
              {
                step: '03',
                icon: <FaHeartbeat className="text-3xl" />,
                title: 'Cứu hộ & Chăm sóc',
                description: 'Đội cứu hộ đến hiện trường, đưa động vật đến bệnh viện và theo dõi quá trình phục hồi.',
                color: 'from-rose-500 to-pink-500',
              },
            ].map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 150}>
                <div className="glass-card p-8 text-center relative group">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-dark-900 border border-dark-700/50 rounded-full text-xs font-bold text-dark-400">
                    BƯỚC {item.step}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-dark-400 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== RECENT RESCUES ========== */}
      <section className="relative section-padding" id="recent-rescues">
        <div className="relative section-container">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-sm font-medium text-accent-400 mb-4">
                  Cập nhật
                </span>
                <h2 className="section-title text-white">
                  Các vụ cứu hộ <span className="gradient-text-warm">gần đây</span>
                </h2>
              </div>
              <Link
                href="/rescue"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors group"
              >
                Xem tất cả
                <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockReports.slice(0, 6).map((report, index) => (
              <ScrollReveal key={report.id} delay={index * 100}>
                <AnimalCard report={report} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PARTNER HOSPITALS ========== */}
      <section className="relative section-padding" id="hospitals">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/10 to-transparent" />
        <div className="relative section-container">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-sm font-medium text-primary-400 mb-4">
                  Đối tác
                </span>
                <h2 className="section-title text-white">
                  Bệnh viện thú y <span className="gradient-text">đối tác</span>
                </h2>
              </div>
              <Link
                href="/hospitals"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors group"
              >
                Xem tất cả bệnh viện
                <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockHospitals.slice(0, 3).map((hospital, index) => (
              <ScrollReveal key={hospital.id} delay={index * 100}>
                <HospitalCard hospital={hospital} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="relative section-padding" id="testimonials">
        <div className="relative section-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-sm font-medium text-accent-400 mb-4">
                Phản hồi
              </span>
              <h2 className="section-title text-white mb-4">
                Cộng đồng <span className="gradient-text-warm">nói gì</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockTestimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={index * 100}>
                <div className="glass-card p-6 md:p-8 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <HiOutlineStar key={i} className="text-accent-400 fill-accent-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-sm text-dark-300 leading-relaxed mb-6 flex-grow italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-dark-800/50">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500/30 to-primary-700/30 border border-primary-500/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary-400">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                      <p className="text-xs text-dark-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="relative section-padding overflow-hidden" id="cta">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-dark-950 to-primary-950" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/10 rounded-full blur-[200px]" />
        </div>
        <div className="absolute inset-0 dot-pattern opacity-40" />

        <div className="relative section-container text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-glow-lg animate-pulse-glow">
                <FaHandHoldingHeart className="text-white text-3xl" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Hãy trở thành một phần của{' '}
                <span className="gradient-text">sự thay đổi</span>
              </h2>

              <p className="text-lg text-dark-400 mb-10 max-w-xl mx-auto leading-relaxed">
                Dù là tình nguyện viên, nhà tài trợ hay đơn giản là chia sẻ thông tin — 
                mỗi hành động của bạn đều giúp cứu sống một sinh linh.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/volunteers" className="btn-primary text-lg px-10 py-5" id="cta-volunteer-btn">
                  <HiOutlineShieldCheck className="text-xl" />
                  Đăng ký tình nguyện
                </Link>
                <Link href="/donate" className="btn-accent text-lg px-10 py-5" id="cta-donate-btn">
                  💛 Quyên góp ngay
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
