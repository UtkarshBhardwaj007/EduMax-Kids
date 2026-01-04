'use client'

import { useState } from 'react'
import Image from 'next/image'

const categories = [
  { id: 'all', name: 'All' },
  { id: 'assembly', name: 'Morning Assembly' },
  { id: 'dance', name: 'Dance Lessons' },
  { id: 'christmas', name: 'Christmas' },
  { id: 'holi', name: 'Holi' },
  { id: 'diwali', name: 'Diwali' },
  { id: 'raksha', name: 'Raksha Bandhan' },
  { id: 'activities', name: 'Activities' },
]

const galleryItems = [
  { id: 1, category: 'assembly', title: 'Morning Assembly', desc: 'Starting the day with positivity', image: 'https://picsum.photos/seed/morning1/600/600' },
  { id: 2, category: 'assembly', title: 'Morning Prayer', desc: 'Building values and discipline', image: 'https://picsum.photos/seed/morning2/600/600' },
  { id: 3, category: 'dance', title: 'Dance Performance', desc: 'Expressing through movement', image: 'https://picsum.photos/seed/dance1/600/600' },
  { id: 4, category: 'dance', title: 'Dance Practice', desc: 'Learning rhythm and coordination', image: 'https://picsum.photos/seed/dance2/600/600' },
  { id: 5, category: 'christmas', title: 'Christmas Celebration', desc: 'Joy and festivities', image: 'https://picsum.photos/seed/christmas1/600/600' },
  { id: 6, category: 'christmas', title: 'Santa\'s Visit', desc: 'Spreading holiday cheer', image: 'https://picsum.photos/seed/christmas2/600/600' },
  { id: 7, category: 'holi', title: 'Holi Festival', desc: 'Festival of colors', image: 'https://picsum.photos/seed/holi1/600/600' },
  { id: 8, category: 'holi', title: 'Colors of Joy', desc: 'Celebrating together', image: 'https://picsum.photos/seed/holi2/600/600' },
  { id: 9, category: 'diwali', title: 'Diwali Celebration', desc: 'Festival of lights', image: 'https://picsum.photos/seed/diwali1/600/600' },
  { id: 10, category: 'diwali', title: 'Diwali Decor', desc: 'Rangoli and diyas', image: 'https://picsum.photos/seed/diwali2/600/600' },
  { id: 11, category: 'raksha', title: 'Raksha Bandhan', desc: 'Bond of love', image: 'https://picsum.photos/seed/raksha1/600/600' },
  { id: 12, category: 'raksha', title: 'Rakhi Making', desc: 'Crafting with love', image: 'https://picsum.photos/seed/raksha2/600/600' },
  { id: 13, category: 'activities', title: 'Classroom Learning', desc: 'Interactive education', image: 'https://picsum.photos/seed/class1/600/600' },
  { id: 14, category: 'activities', title: 'Art & Craft', desc: 'Creative expression', image: 'https://picsum.photos/seed/art1/600/600' },
  { id: 15, category: 'activities', title: 'Outdoor Play', desc: 'Physical development', image: 'https://picsum.photos/seed/play1/600/600' },
  { id: 16, category: 'activities', title: 'Sports Day', desc: 'Fun and fitness', image: 'https://picsum.photos/seed/sports1/600/600' },
  { id: 17, category: 'activities', title: 'Reading Time', desc: 'Love for books', image: 'https://picsum.photos/seed/read1/600/600' },
  { id: 18, category: 'activities', title: 'Music Class', desc: 'Rhythm and melody', image: 'https://picsum.photos/seed/music1/600/600' },
]

export default function GalleryFilter() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null)

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <>
      {/* Filter Tabs - Modern Design */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeCategory === cat.id
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-charcoal hover:bg-accent/30 border border-charcoal-lighter/30'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setLightboxImage({ src: item.image, title: item.title })}
            className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h4 className="text-white font-semibold text-sm md:text-base">{item.title}</h4>
              <p className="text-white/70 text-xs md:text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-secondary transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <Image
              src={lightboxImage.src.replace('600/600', '1200/900')}
              alt={lightboxImage.title}
              width={1200}
              height={900}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">{lightboxImage.title}</p>
          </div>
        </div>
      )}
    </>
  )
}

