import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

interface LogoProps {
  className?: string
  showTagline?: boolean
  variant?: 'default' | 'light'
}

export default function Logo({ className = '', showTagline = true, variant = 'default' }: LogoProps) {
  const isLight = variant === 'light'
  
  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      {/* Logo Image */}
      <div className="relative w-12 h-12 flex-shrink-0">
        <img
          src={getImagePath('/images/logo.png')}
          alt="EduMax Kids Logo"
          className="w-full h-full object-contain rounded-full"
        />
      </div>
      
      {/* Wordmark */}
      <div className="flex flex-col">
        <span className="font-serif text-xl md:text-2xl font-bold tracking-tight leading-none">
          <span className={isLight ? 'text-white' : 'text-[#2B4B9A]'}>EduMax</span>
          {' '}
          <span className={isLight ? 'text-white/90' : 'text-[#E85C4A]'}>Kids</span>
        </span>
        {showTagline && (
          <span className={`text-[10px] md:text-xs tracking-[0.15em] uppercase mt-0.5 ${isLight ? 'text-white/70' : 'text-charcoal-light'}`}>
            Where Learning Begins
          </span>
        )}
      </div>
    </Link>
  )
}
