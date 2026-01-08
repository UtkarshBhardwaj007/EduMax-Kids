import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-accent/20" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/30 to-transparent" />
        
        {/* Decorative Elements */}
        <div className="absolute top-32 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              {/* Badge - Redesigned */}
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md border border-accent/50">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-charcoal">
                  Admissions Open · No Admission Fees
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                Nurturing{' '}
                <span className="text-secondary">Young Minds</span>
                <br />
                for a Brighter Tomorrow
              </h1>

              <p className="text-lg text-charcoal-light max-w-xl leading-relaxed">
                At EduMax Kids, we believe every child is unique. Our holistic approach 
                combines academic excellence with creative exploration, building confident 
                learners ready for the future.
              </p>

              <div className="flex flex-wrap gap-4 pb-8">
                <Link href="/admissions" className="btn btn-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Apply Now
                </Link>
                <Link href="/about" className="btn btn-outline">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative w-full max-w-xl mx-auto">
                {/* Decorative Frame */}
                <div className="absolute inset-4 bg-gradient-to-br from-primary to-primary-light rounded-3xl transform rotate-2" />
                <div className="absolute inset-4 bg-gradient-to-br from-secondary to-secondary-light rounded-3xl transform -rotate-2 opacity-60" />
                
                {/* Main Image Container */}
                <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-accent/30">
                    <img
                      src={getImagePath('/images/homepage.jpg')}
                      alt="Children celebrating at EduMax Kids"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Reimagined */}
      <section className="relative -mt-8 z-20 pb-16">
        <div className="container">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {/* Stat 1 */}
              <div className="text-center group">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/30 rounded-2xl transform group-hover:scale-110 transition-transform duration-300" />
                  <div className="relative px-6 py-4">
                    <span className="block text-5xl md:text-6xl font-serif font-bold text-primary">25+</span>
                  </div>
                </div>
                <p className="text-charcoal-light font-medium">Years of Excellence</p>
                <p className="text-sm text-charcoal-lighter mt-1">in Early Education</p>
              </div>

              {/* Stat 2 */}
              <div className="text-center group">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary/30 rounded-2xl transform group-hover:scale-110 transition-transform duration-300" />
                  <div className="relative px-6 py-4">
                    <span className="block text-5xl md:text-6xl font-serif font-bold text-secondary">500+</span>
                  </div>
                </div>
                <p className="text-charcoal-light font-medium">Happy Students</p>
                <p className="text-sm text-charcoal-lighter mt-1">& Proud Parents</p>
              </div>

              {/* Stat 3 */}
              <div className="text-center group">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl transform group-hover:scale-110 transition-transform duration-300" />
                  <div className="relative px-6 py-4">
                    <span className="block text-5xl md:text-6xl font-serif font-bold text-primary">₹0</span>
                  </div>
                </div>
                <p className="text-charcoal-light font-medium">Admission Fees</p>
                <p className="text-sm text-charcoal-lighter mt-1">Quality Education for All</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Message from the Principal</h2>
            <p className="section-subtitle mx-auto">
              A visionary leader dedicated to shaping young minds
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Principal Image */}
            <div className="lg:col-span-2">
              <div className="relative max-w-sm mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary to-primary-light rounded-3xl opacity-10" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={getImagePath('/images/principal.png')}
                    alt="Smt. Ratna - Principal & Founder"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                    <p className="text-secondary text-sm font-medium">Founder & Principal</p>
                    <h3 className="text-white text-2xl font-serif">Smt. Ratna</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Principal Content */}
            <div className="lg:col-span-3 space-y-6">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1.5 bg-accent/30 text-primary rounded-full text-sm font-medium">
                  B.Sc.
                </span>
                <span className="px-4 py-1.5 bg-accent/30 text-primary rounded-full text-sm font-medium">
                  M.A.
                </span>
                <span className="px-4 py-1.5 bg-accent/30 text-primary rounded-full text-sm font-medium">
                  N.T.T.
                </span>
                <span className="px-4 py-1.5 bg-accent/30 text-primary rounded-full text-sm font-medium">
                  B.Ed.
                </span>
              </div>

              <blockquote className="text-xl md:text-2xl font-serif text-charcoal leading-relaxed border-l-4 border-secondary pl-6">
                &ldquo;At EduMax Kids, we don&apos;t just teach—we inspire. Every child who walks 
                through our doors is a unique individual with boundless potential. Our mission 
                is to nurture their curiosity, celebrate their achievements, and prepare them 
                for a future filled with possibilities.&rdquo;
              </blockquote>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-4 bg-primary text-white px-6 py-4 rounded-xl">
                  <span className="text-4xl font-serif font-bold text-secondary">25+</span>
                  <div>
                    <p className="font-semibold">Years of Teaching</p>
                    <p className="text-sm text-white/70">Excellence in Education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview - Auto-scrolling */}
      <section className="section bg-cream overflow-hidden">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Life at EduMax Kids</h2>
            <p className="section-subtitle mx-auto">
              Discover the vibrant learning experiences and joyful moments at our school
            </p>
          </div>
        </div>

        {/* Auto-scrolling Gallery */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Container */}
          <div className="flex gap-4 animate-scroll hover:pause-animation">
            {[
              '1000061505.jpg',
              '1000061506.jpg',
              '1000061507.jpg',
              '1000061511.jpg',
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
              // Duplicate for seamless loop
              '1000061505.jpg',
              '1000061506.jpg',
              '1000061507.jpg',
              '1000061511.jpg',
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
            ].map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 md:w-80 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group"
              >
                <img
                  src={getImagePath(`/images/gallery/${img}`)}
                  alt={`School activity ${(index % 16) + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="text-center mt-10">
            <Link href="/gallery" className="btn btn-outline">
              View Full Gallery
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose EduMax Kids?</h2>
            <p className="section-subtitle mx-auto">
              We provide a nurturing environment where children thrive academically and personally
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: 'Expert Faculty',
                description: 'Our experienced teachers are passionate about early childhood education and dedicated to each child\'s growth.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: 'Holistic Development',
                description: 'Beyond academics, we focus on physical, emotional, and social development of every child.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Safe Environment',
                description: 'Child safety is our priority. Our campus is designed with secure facilities and constant supervision.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: 'Modern Curriculum',
                description: 'Our updated curriculum blends traditional values with modern teaching methods for effective learning.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Individual Attention',
                description: 'Small class sizes ensure personalized attention and care for every student\'s unique needs.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Activity-Based Learning',
                description: 'Interactive activities, games, and creative projects make learning fun and engaging for young minds.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-cream/50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif mb-3">{feature.title}</h3>
                <p className="text-charcoal-light leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6">
            Ready to Give Your Child the Best Start?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Admissions are open for Pre-Nursery, Nursery, and K.G. classes. No admission fees!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions" className="btn bg-white text-primary hover:bg-cream">
              Apply Now
            </Link>
            <a
              href="https://wa.me/919958864300"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#25D366] text-white hover:bg-[#1da851]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

