import { Report } from '@/types'
import { HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi'
import { FaPaw } from 'react-icons/fa'

const conditionConfig: Record<string, { label: string; class: string; color: string }> = {
  CRITICAL: { label: 'Nguy kịch', class: 'badge-critical', color: 'from-rose-500 to-rose-600' },
  INJURED: { label: 'Bị thương', class: 'badge-injured', color: 'from-orange-500 to-orange-600' },
  SICK: { label: 'Bị bệnh', class: 'badge-sick', color: 'from-amber-500 to-amber-600' },
  LOST: { label: 'Bị lạc', class: 'badge-lost', color: 'from-blue-500 to-blue-600' },
  ABANDONED: { label: 'Bị bỏ rơi', class: 'badge-abandoned', color: 'from-purple-500 to-purple-600' },
}

const statusConfig: Record<string, { label: string; class: string }> = {
  PENDING: { label: 'Chờ xử lý', class: 'badge-pending' },
  ASSIGNED: { label: 'Đã phân công', class: 'badge-in-progress' },
  IN_PROGRESS: { label: 'Đang cứu hộ', class: 'badge-in-progress' },
  COMPLETED: { label: 'Hoàn thành', class: 'badge-completed' },
  CANCELLED: { label: 'Đã hủy', class: 'badge bg-dark-600/50 text-dark-400 border border-dark-600/30' },
}

interface AnimalCardProps {
  report: Report
}

export default function AnimalCard({ report }: AnimalCardProps) {
  const condition = conditionConfig[report.condition] || conditionConfig.INJURED
  const status = statusConfig[report.status] || statusConfig.PENDING

  const timeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    if (diffHours < 1) return 'Vừa xong'
    if (diffHours < 24) return `${diffHours} giờ trước`
    const diffDays = Math.floor(diffHours / 24)
    return `${diffDays} ngày trước`
  }

  return (
    <div className="glass-card overflow-hidden group" id={`report-card-${report.id}`}>
      {/* Image placeholder with gradient */}
      <div className={`relative h-48 bg-gradient-to-br ${condition.color} opacity-80 flex items-center justify-center overflow-hidden`}>
        <FaPaw className="text-white/20 text-7xl group-hover:scale-110 transition-transform duration-700" />
        
        {/* Condition badge */}
        <div className="absolute top-4 left-4">
          <span className={condition.class}>{condition.label}</span>
        </div>

        {/* Priority indicator */}
        {(report.priority === 'CRITICAL' || report.priority === 'HIGH') && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-rose-500/30 backdrop-blur-sm border border-rose-500/40 text-[10px] font-bold text-rose-300 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
              {report.priority === 'CRITICAL' ? 'Khẩn cấp' : 'Ưu tiên'}
            </span>
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
        
        {/* Animal type label */}
        <div className="absolute bottom-4 left-4">
          <span className="text-white font-bold text-lg">{report.animalType}</span>
          {report.species && (
            <span className="text-white/60 text-sm ml-2">• {report.species}</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-white mb-2 line-clamp-1 group-hover:text-primary-400 transition-colors duration-300">
          {report.title}
        </h3>
        <p className="text-sm text-dark-400 mb-4 line-clamp-2 leading-relaxed">
          {report.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-dark-500 mb-4">
          <span className="flex items-center gap-1.5">
            <HiOutlineLocationMarker className="text-primary-500" />
            <span className="line-clamp-1">{report.address}</span>
          </span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-dark-800/50">
          <span className={status.class}>{status.label}</span>
          <span className="flex items-center gap-1 text-xs text-dark-500">
            <HiOutlineClock />
            {timeAgo(report.createdAt)}
          </span>
        </div>
      </div>
    </div>
  )
}
