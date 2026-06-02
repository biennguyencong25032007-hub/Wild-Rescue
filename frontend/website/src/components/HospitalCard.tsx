import { Hospital } from '@/types'
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineClock, HiOutlineCheckCircle } from 'react-icons/hi'
import { FaHospital } from 'react-icons/fa'
import Link from 'next/link'

interface HospitalCardProps {
  hospital: Hospital
}

export default function HospitalCard({ hospital }: HospitalCardProps) {
  return (
    <Link href={`/hospitals/${hospital.id}`} id={`hospital-card-${hospital.id}`}>
      <div className="glass-card overflow-hidden group h-full">
        {/* Header */}
        <div className="relative h-36 bg-gradient-to-br from-primary-900/80 to-dark-900 flex items-center justify-center overflow-hidden">
          <FaHospital className="text-primary-400/10 text-6xl group-hover:scale-110 transition-transform duration-700" />
          
          {/* Verified badge */}
          {hospital.verified && (
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 text-[10px] font-semibold text-primary-300">
                <HiOutlineCheckCircle className="text-sm" />
                Đã xác minh
              </span>
            </div>
          )}

          {/* Distance */}
          {hospital.distance !== undefined && (
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-dark-900/60 backdrop-blur-sm border border-dark-700/30 text-[10px] font-semibold text-dark-300">
                📍 {hospital.distance} km
              </span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-transparent to-transparent" />
          
          <div className="absolute bottom-3 left-4 right-4">
            <h3 className="font-bold text-white text-lg line-clamp-1 group-hover:text-primary-400 transition-colors duration-300">
              {hospital.name}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Services */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {hospital.services.slice(0, 3).map((service) => (
              <span
                key={service}
                className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20"
              >
                {service}
              </span>
            ))}
            {hospital.services.length > 3 && (
              <span className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-dark-800/50 text-dark-400 border border-dark-700/30">
                +{hospital.services.length - 3}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="space-y-2.5 text-sm">
            <div className="flex items-start gap-2 text-dark-400">
              <HiOutlineLocationMarker className="text-primary-500 mt-0.5 flex-shrink-0" />
              <span className="text-xs line-clamp-2">{hospital.address}</span>
            </div>

            <div className="flex items-center gap-2 text-dark-400">
              <HiOutlinePhone className="text-primary-500 flex-shrink-0" />
              <span className="text-xs">{hospital.phone}</span>
            </div>

            {hospital.operatingHours && (
              <div className="flex items-center gap-2 text-dark-400">
                <HiOutlineClock className="text-primary-500 flex-shrink-0" />
                <span className="text-xs">{hospital.operatingHours}</span>
              </div>
            )}
          </div>

          {/* City tag */}
          <div className="mt-4 pt-3 border-t border-dark-800/50 flex items-center justify-between">
            <span className="text-xs font-medium text-dark-500">{hospital.city}</span>
            <span className="text-xs font-medium text-primary-500 group-hover:text-primary-400 transition-colors">
              Xem chi tiết →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
