'use client'

import Link from 'next/link'
import { useState } from 'react'
import { getImagePath } from '@/lib/utils'

const galleryImages = [
  'IMG-20260106-WA0006.jpg',
  'IMG-20260106-WA0007.jpg',
  'IMG-20260106-WA0008.jpg',
  'IMG-20260106-WA0009.jpg',
  'IMG-20260106-WA0010.jpg',
  'IMG-20260106-WA0011.jpg',
  'IMG-20260106-WA0012.jpg',
  'IMG-20260106-WA0013.jpg',
  'IMG-20260106-WA0014.jpg',
  'IMG-20260106-WA0015.jpg',
  'IMG-20260106-WA0016.jpg',
  'IMG-20260106-WA0017.jpg',
  'IMG-20260106-WA0018.jpg',
  'IMG-20260106-WA0019.jpg',
  'IMG-20260106-WA0020.jpg',
  'IMG-20260106-WA0021.jpg',
  'IMG-20260106-WA0022.jpg',
  'IMG-20260106-WA0023.jpg',
  'IMG-20260106-WA0024.jpg',
  'IMG-20260106-WA0025.jpg',
  'IMG-20260106-WA0026.jpg',
  'IMG-20260106-WA0027.jpg',
  'IMG-20260106-WA0028.jpg',
  'IMG-20260106-WA0029.jpg',
  'IMG-20260106-WA0030.jpg',
  'IMG-20260106-WA0031.jpg',
  'IMG-20260106-WA0032.jpg',
  'IMG-20260106-WA0033.jpg',
]

export default function GalleryPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number>(0)

  const openLightbox = (img: string, index: number) => {
    setLightboxImage(img)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (lightboxIndex + 1) % galleryImages.length
      : (lightboxIndex - 1 + galleryImages.length) % galleryImages.length
    setLightboxIndex(newIndex)
    setLightboxImage(galleryImages[newIndex])
  }

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-secondary rounded-full" />
          <div className="absolute bottom-10 right-20 w-48 h-48 bg-accent rounded-full" />
        </div>
        
        <div className="container relative z-10 text-center">
          <nav className="flex justify-center items-center gap-2 mb-6 text-sm">
            <Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
            <span className="text-white/50">/</span>
            <span className="text-white">Gallery</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Gallery</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Capturing precious moments of learning, fun, and celebration at EduMax Kids
          </p>
        </div>
      </section>

      {/* Gallery Section - Masonry Style */}
      <section className="section bg-cream">
        <div className="container">
          {/* Masonry Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                onClick={() => openLightbox(img, index)}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={getImagePath(`/images/gallery/${img}`)}
                  alt={`School memory ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex items-center gap-2 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <span className="text-sm font-medium">View</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Want Your Child to be Part of These Memories?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Join our vibrant community and give your child unforgettable experiences!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions" className="btn bg-white text-primary hover:bg-cream">
              Apply Now
            </Link>
            <Link href="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white hover:text-secondary transition-colors z-10"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors p-2 bg-black/30 rounded-full"
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors p-2 bg-black/30 rounded-full"
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={getImagePath(`/images/gallery/${lightboxImage}`)}
              alt={`School memory`}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <p className="text-white/70 text-center mt-4 text-sm">
              {lightboxIndex + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
