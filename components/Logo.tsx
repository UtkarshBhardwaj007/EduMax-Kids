import Link from 'next/link'

interface LogoProps {
  className?: string
  showTagline?: boolean
  variant?: 'default' | 'light'
}

export default function Logo({ className = '', showTagline = true, variant = 'default' }: LogoProps) {
  const isLight = variant === 'light'
  
  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      {/* Elegant Monogram Mark - Blue E, Red M with leaf accent */}
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Circular background & border - white background on dark pages */}
        <div className={`absolute inset-0 rounded-full border-2 transition-colors duration-300 ${
          isLight 
            ? 'bg-white border-white/50 shadow-md' 
            : 'bg-transparent border-charcoal/20 group-hover:border-primary'
        }`} />
        
        {/* EM Monogram */}
        <span className="relative font-serif text-2xl font-bold tracking-tight flex">
          <span className="text-[#2D4B9A]">E</span>
          <span className="text-[#E85C4A]">M</span>
        </span>
        
        {/* Small leaf accent */}
        <svg 
          className={`absolute -right-0.5 bottom-1 w-3 h-3 ${isLight ? 'text-primary' : 'text-primary'}`}
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8.17 20C12.29 20 15.12 17.17 16.55 14.16C18.32 10.56 18.64 6.44 17 8Z"/>
        </svg>
      </div>
      
      {/* Wordmark */}
      <div className="flex flex-col">
        <span className={`font-serif text-xl md:text-2xl font-bold tracking-tight leading-none ${isLight ? 'text-white' : ''}`}>
          <span className={isLight ? 'text-white' : 'text-[#2D4B9A]'}>Edu</span>
          <span className={isLight ? 'text-white' : 'text-[#2D4B9A]'}>Max</span>
          {' '}
          <span className={isLight ? 'text-secondary-light' : 'text-[#E85C4A]'}>Kids</span>
        </span>
        {showTagline && (
          <span className={`text-[10px] md:text-xs tracking-widest uppercase ${isLight ? 'text-white/70' : 'text-charcoal-light'}`}>
            Where Learning Begins
          </span>
        )}
      </div>
    </Link>
  )
}
