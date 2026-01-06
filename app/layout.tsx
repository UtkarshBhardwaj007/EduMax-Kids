import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'

export const metadata: Metadata = {
  title: 'EduMax Kids - Premier Primary School | Admissions Open',
  description: 'EduMax Kids is a premier primary school in Faridabad offering quality education for Pre-Nursery, Nursery, and Kindergarten. No admission fees. Join us for a nurturing learning environment.',
  keywords: 'primary school, nursery, kindergarten, pre-nursery, Faridabad, education, EduMax Kids, no admission fees',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'EduMax Kids - Premier Primary School',
    description: 'Nurturing young minds for a brighter tomorrow. Admissions open for Pre-Nursery, Nursery, and K.G. classes.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  )
}

