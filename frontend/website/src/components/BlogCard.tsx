import { BlogPost } from '@/types'
import Link from 'next/link'
import { HiOutlineArrowRight, HiOutlineClock, HiOutlineCalendar } from 'react-icons/hi'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.id}`}>
      <article className="glass-card overflow-hidden group cursor-pointer h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl opacity-30">📖</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 to-transparent" />
          
          {/* Category badge */}
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-primary-500/20 text-primary-400 border border-primary-500/30">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-primary-400 transition-colors duration-300">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-dark-400 mb-4 line-clamp-2 flex-1">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-3 text-xs text-dark-500 mb-4 border-t border-dark-700/30 pt-4">
            <div className="flex items-center gap-1">
              <HiOutlineCalendar className="text-primary-500" />
              {new Date(post.date).toLocaleDateString('vi-VN')}
            </div>
            <div className="flex items-center gap-1">
              <HiOutlineClock className="text-accent-500" />
              {post.readTime}
            </div>
            <div className="text-dark-600">
              Bởi {post.author}
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-[10px] font-medium rounded-full bg-dark-800/50 text-dark-400 border border-dark-700/30"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Read more */}
          <div className="flex items-center gap-2 text-sm font-medium text-primary-400 group-hover:text-primary-300 transition-colors mt-auto">
            Đọc thêm
            <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  )
}
