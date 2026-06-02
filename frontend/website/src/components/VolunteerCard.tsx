import { Volunteer } from '@/types'
import { HiOutlineStar, HiOutlineCheckCircle, HiOutlineBadgeCheck } from 'react-icons/hi'
import { FaUserCircle } from 'react-icons/fa'

interface VolunteerCardProps {
  volunteer: Volunteer
}

export default function VolunteerCard({ volunteer }: VolunteerCardProps) {
  return (
    <div className="glass-card p-6 text-center group" id={`volunteer-card-${volunteer.id}`}>
      {/* Avatar */}
      <div className="relative w-20 h-20 mx-auto mb-4">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500/30 to-primary-700/30 border border-primary-500/20 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <FaUserCircle className="text-primary-400/60 text-5xl" />
        </div>
        {volunteer.verified && (
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary-500 border-2 border-dark-900 flex items-center justify-center">
            <HiOutlineCheckCircle className="text-white text-xs" />
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors">
        {volunteer.user?.fullName || 'Tình nguyện viên'}
      </h3>

      {/* Rating */}
      <div className="flex items-center justify-center gap-1 mb-3">
        <HiOutlineStar className="text-accent-400 text-sm" />
        <span className="text-sm font-medium text-accent-400">{volunteer.rating.toFixed(1)}</span>
        <span className="text-xs text-dark-500">({volunteer.reviews} đánh giá)</span>
      </div>

      {/* Bio */}
      <p className="text-xs text-dark-400 mb-4 line-clamp-2 leading-relaxed">
        {volunteer.bio}
      </p>

      {/* Expertise tags */}
      <div className="flex flex-wrap justify-center gap-1.5 mb-4">
        {volunteer.expertise.slice(0, 2).map((exp) => (
          <span
            key={exp}
            className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20"
          >
            {exp}
          </span>
        ))}
      </div>

      {/* Certifications */}
      {volunteer.certifications.length > 0 && (
        <div className="pt-3 border-t border-dark-800/50">
          <div className="flex items-center justify-center gap-1 text-xs text-dark-500">
            <HiOutlineBadgeCheck className="text-primary-500" />
            <span>{volunteer.certifications.length} chứng chỉ</span>
          </div>
        </div>
      )}
    </div>
  )
}
