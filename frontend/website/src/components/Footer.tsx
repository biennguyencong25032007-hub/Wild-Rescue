import Link from 'next/link'
import { FaPaw, FaFacebookF, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'

const footerLinks = {
  platform: [
    { label: 'Báo cáo cứu hộ', href: '/rescue' },
    { label: 'Bệnh viện thú y', href: '/hospitals' },
    { label: 'Tình nguyện viên', href: '/volunteers' },
    { label: 'Quyên góp', href: '/donate' },
  ],
  about: [
    { label: 'Về chúng tôi', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Liên hệ', href: '/contact' },
  ],
  legal: [
    { label: 'Điều khoản sử dụng', href: '#' },
    { label: 'Chính sách bảo mật', href: '#' },
    { label: 'Quy chế hoạt động', href: '#' },
  ],
}

const socialLinks = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
  { icon: FaTiktok, href: '#', label: 'TikTok' },
]

export default function Footer() {
  return (
    <footer className="relative bg-dark-950 border-t border-dark-800/50">
      {/* Background effects */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-[120px]" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent-500/5 rounded-full blur-[100px]" />

      <div className="relative section-container pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-dark-800/50">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <FaPaw className="text-white text-lg" />
              </div>
              <span className="text-xl font-bold gradient-text">Wild Rescue</span>
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed mb-6 max-w-sm">
              Nền tảng kết nối cộng đồng giải cứu động vật hoang dã. Cùng nhau bảo vệ và chăm sóc 
              những sinh linh bé nhỏ cần được giúp đỡ.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a href="tel:1900-WILD" className="flex items-center gap-3 text-sm text-dark-400 hover:text-primary-400 transition-colors">
                <HiOutlinePhone className="flex-shrink-0" />
                <span>1900-WILD (1900-9453)</span>
              </a>
              <a href="mailto:hello@wildrescue.app" className="flex items-center gap-3 text-sm text-dark-400 hover:text-primary-400 transition-colors">
                <HiOutlineMail className="flex-shrink-0" />
                <span>hello@wildrescue.app</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-dark-400">
                <HiOutlineLocationMarker className="flex-shrink-0 mt-0.5" />
                <span>TP. Hồ Chí Minh, Việt Nam</span>
              </div>
            </div>
          </div>

          {/* Platform links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Nền tảng</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Tìm hiểu</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Pháp lý</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-500">
            © {new Date().getFullYear()} Wild Rescue. Tất cả quyền được bảo lưu.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-lg bg-dark-800/60 border border-dark-700/30 flex items-center justify-center text-dark-400 hover:text-primary-400 hover:border-primary-500/30 hover:bg-primary-500/10 transition-all duration-300"
              >
                <social.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
