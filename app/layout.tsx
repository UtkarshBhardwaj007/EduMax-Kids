import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'

const basePath = process.env.NODE_ENV === 'production' ? '/EduMax-Kids' : ''

export const metadata: Metadata = {
  title: 'EduMax Kids - Premier Primary School | Admissions Open',
  description: 'EduMax Kids is a premier primary school in Faridabad offering quality education for Pre-Nursery, Nursery, and Kindergarten. No admission fees. Join us for a nurturing learning environment.',
  keywords: 'primary school, nursery, kindergarten, pre-nursery, Faridabad, education, EduMax Kids, no admission fees',
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
      <head>
        <link rel="icon" href={`${basePath}/favicon.svg`} type="image/svg+xml" />
        <link rel="shortcut icon" href={`${basePath}/favicon.svg`} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={`${basePath}/favicon.svg`} />
      </head>
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

