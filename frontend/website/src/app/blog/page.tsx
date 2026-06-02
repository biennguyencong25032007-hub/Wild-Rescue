'use client'

import { useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import ScrollReveal from '@/components/ScrollReveal'
import BlogCard from '@/components/BlogCard'
import { mockBlogPosts } from '@/utils/mockData'

const categories = ['Tất cả', 'Hướng dẫn', 'Câu chuyện', 'Kiến thức', 'Tin tức']

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Tất cả')

  const filteredPosts = mockBlogPosts.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === 'Tất cả' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
            📖 Blog & Kiến thức
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Kiến thức về <span className="gradient-text">bảo vệ động vật</span>
          </h1>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Khám phá hướng dẫn, câu chuyện cứu hộ, và những kiến thức bổ ích về động vật hoang dã.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="relative pb-8">
        <div className="section-container">
          <ScrollReveal>
            <div className="glass-card p-6 md:p-8">
              {/* Search bar */}
              <div className="relative mb-6">
                <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-500 text-lg" />
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết..."
                  className="input-field pl-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Category filter */}
              <div>
                <label className="block text-xs font-medium text-dark-500 mb-3 uppercase tracking-wider">
                  Danh mục
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
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
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative pb-20">
        <div className="section-container">
          {/* Results count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-dark-400">
              Tìm thấy <span className="font-semibold text-white">{filteredPosts.length}</span> bài viết
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 80}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>

          {/* Empty state */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">📭</div>
              <p className="text-dark-500 mb-2">Không tìm thấy bài viết phù hợp</p>
              <p className="text-xs text-dark-600">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
