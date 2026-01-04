import Link from 'next/link'
import type { Metadata } from 'next'
import GalleryFilter from '@/components/GalleryFilter'

export const metadata: Metadata = {
  title: 'Gallery - EduMax Kids | School Activities & Events',
  description: 'Explore our vibrant school life through photos of morning assemblies, dance lessons, festival celebrations, and various learning activities.',
}

export default function GalleryPage() {
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

      {/* Gallery Section */}
      <section className="section bg-cream">
        <div className="container">
          <GalleryFilter />
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
    </>
  )
}

