'use client'

import Link from 'next/link'
import { FaPaw, FaHeart, FaUsers, FaTrophy } from 'react-icons/fa'
import { HiOutlineArrowRight } from 'react-icons/hi'
import ScrollReveal from '@/components/ScrollReveal'
import StatsCounter from '@/components/StatsCounter'
import { stats, mockTestimonials } from '@/utils/mockData'

export default function AboutPage() {
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
            🌿 Về Wild Rescue
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Sứ mệnh cứu hộ <span className="gradient-text">động vật</span>
          </h1>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Wild Rescue là nền tảng kết nối cộng đồng giải cứu động vật hoang dã, hướng tới một Việt Nam nơi các loài vật được bảo vệ và chăm sóc.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <ScrollReveal>
              <div>
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                  <FaPaw className="text-white text-3xl" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Sứ mệnh</h2>
                <p className="text-lg text-dark-300 leading-relaxed">
                  Chúng tôi tin rằng mỗi sinh linh đều có giá trị và xứng đáng được yêu thương. Wild Rescue tồn tại để kết nối những trái tim nhân ái với những chú thú cần giúp đỡ, tạo nên một mạng lưới bảo vệ động vật toàn quốc.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center">
                  <FaHeart className="text-white text-3xl" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Tầm nhìn</h2>
                <p className="text-lg text-dark-300 leading-relaxed">
                  Tầm nhìn của chúng tôi là một thế giới nơi không còn động vật bị bỏ rơi hay bị tổn thương. Thông qua công nghệ, cộng đồng, và hành động, chúng tôi muốn biến bảo vệ động vật thành một phần không thể tách rời của xã hội Việt Nam.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Core Values */}
          <ScrollReveal>
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Giá trị cốt lõi</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <FaPaw className="text-3xl" />,
                    title: 'Trách nhiệm',
                    desc: 'Chúng tôi cam kết phục vụ với trách nhiệm cao nhất, đặt lợi ích của động vật lên hàng đầu.',
                  },
                  {
                    icon: <FaHeart className="text-3xl" />,
                    title: 'Tính nhân đạo',
                    desc: 'Hành động của chúng tôi được thúc đẩy bởi lòng yêu thương và đồng cảm với mọi sinh linh.',
                  },
                  {
                    icon: <FaUsers className="text-3xl" />,
                    title: 'Cộng đồng',
                    desc: 'Sức mạnh của chúng tôi đến từ sự hợp lực của cộng đồng - mỗi người đều quan trọng.',
                  },
                ].map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center text-primary-400">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-dark-300">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative section-padding">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/20 to-transparent" />
        <div className="relative section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <StatsCounter end={stats.animalsRescued} label="Động vật đã cứu" suffix="+" icon={<FaPaw className="text-2xl" />} />
            <StatsCounter end={stats.hospitals} label="Bệnh viện đối tác" icon={<FaTrophy className="text-2xl" />} />
            <StatsCounter end={stats.volunteers} label="Tình nguyện viên" icon={<FaUsers className="text-2xl" />} />
            <StatsCounter end={stats.cities} label="Tỉnh thành" icon={<FaHeart className="text-2xl" />} />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/50 to-transparent" />
        <div className="relative section-container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="glass-card p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-6">Hành trình của chúng tôi</h2>
                <p className="text-lg text-dark-300 leading-relaxed mb-4">
                  Wild Rescue được thành lập từ một nhu cầu đơn giản nhưng cấp thiết: cần có một nền tảng để kết nối những người yêu thương động vật với những sinh linh đang cần giúp đỡ. Những vụ cứu hộ động vật bị bỏ rơi hay bị thương trên đường phố luôn gặp khó khăn trong việc tìm được sự hỗ trợ nhanh chóng và chuyên nghiệp.
                </p>
                <p className="text-lg text-dark-300 leading-relaxed mb-4">
                  Với mục đích thay đổi tình hình này, chúng tôi phát triển một nền tảng tích hợp mà cho phép bất kỳ ai phát hiện động vật cần giúp đỡ có thể báo cáo tức thời, kết nối với tình nguyện viên gần nhất, và chuyển động vật đến bệnh viện thú y phù hợp.
                </p>
                <p className="text-lg text-dark-300 leading-relaxed">
                  Từ khi ra mắt, Wild Rescue đã cứu sống hơn 1,200 động vật, hợp tác với 56 bệnh viện thú y uy tín, và huy động hơn 300 tình nguyện viên tích cực. Nhưng hành trình của chúng tôi vẫn còn rất dài, và chúng tôi cần bạn.
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Những lời chứng thực
              </h2>
              <p className="text-lg text-dark-400">
                Nghe từ những người được hưởng lợi từ Wild Rescue
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockTestimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={index * 100}>
                <div className="glass-card p-6 h-full">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg text-accent-400">
                        ⭐
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-dark-300 mb-6 leading-relaxed">"{testimonial.content}"</p>

                  {/* Author */}
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Hãy trở thành một phần của <span className="gradient-text">sự thay đổi</span>
              </h2>

              <p className="text-lg text-dark-400 mb-10">
                Bạn có thể giúp chúng tôi bằng cách báo cáo cứu hộ, tình nguyện, hoặc quyên góp. Mỗi hành động đều tạo nên sự khác biệt.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/rescue" className="btn-primary text-lg px-10 py-5">
                  🆘 Báo cáo cứu hộ
                  <HiOutlineArrowRight />
                </Link>
                <Link href="/volunteers" className="btn-secondary text-lg px-10 py-5">
                  ❤️ Tình nguyện
                </Link>
                <Link href="/donate" className="btn-accent text-lg px-10 py-5">
                  💛 Quyên góp
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
