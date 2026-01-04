'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Check if we're on the homepage (light background) or inner pages (dark hero)
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Determine text colors based on page and scroll state
  const showLightText = !isHomePage && !isScrolled
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between">
          <Logo 
            showTagline={!isScrolled} 
            variant={showLightText ? 'light' : 'default'}
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`relative text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? showLightText ? 'text-white' : 'text-primary'
                          : showLightText
                          ? 'text-white/80 hover:text-white'
                          : 'text-charcoal hover:text-primary'
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <span className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full ${showLightText ? 'bg-secondary-light' : 'bg-secondary'}`} />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <Link href="/admissions" className="btn btn-primary text-sm">
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`w-6 h-0.5 transition-all duration-300 ${
                  showLightText ? 'bg-white' : 'bg-primary'
                } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`w-6 h-0.5 transition-all duration-300 ${
                  showLightText ? 'bg-white' : 'bg-primary'
                } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`w-6 h-0.5 transition-all duration-300 ${
                  showLightText ? 'bg-white' : 'bg-primary'
                } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 text-lg font-medium transition-colors ${
                    isActive ? 'text-primary' : 'text-charcoal hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
            <Link
              href="/admissions"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn btn-primary w-full text-center mt-4"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
