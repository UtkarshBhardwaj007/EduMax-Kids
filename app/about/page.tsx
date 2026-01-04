import Link from 'next/link'
import type { Metadata } from 'next'
import { getImagePath } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'About Us - EduMax Kids | Premier Primary School',
  description: 'Learn about EduMax Kids, our mission, vision, and the visionary leadership of Smt. Ratna with 25+ years of teaching excellence.',
}

export default function AboutPage() {
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
            <span className="text-white">About Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">About EduMax Kids</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Nurturing young minds since our inception, we&apos;re committed to excellence in early childhood education.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Story</h2>
              <p className="section-subtitle mx-auto">Building the foundation for tomorrow&apos;s leaders</p>
            </div>

            <div className="prose prose-lg max-w-none text-charcoal-light">
              <p className="text-lg leading-relaxed mb-6">
                EduMax Kids was founded with a singular vision: to create a nurturing educational environment 
                where every child can discover their potential and develop a lifelong love for learning. Under 
                the visionary leadership of Smt. Ratna, our school has grown to become a trusted name in early 
                childhood education in Faridabad.
              </p>
              <p className="text-lg leading-relaxed">
                We believe that the early years are the most crucial in a child&apos;s development. That&apos;s why 
                we&apos;ve created a curriculum that balances academic excellence with creative exploration, physical 
                activity, and emotional development. Our approach ensures that every child receives the 
                personalized attention they need to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Mission & Vision</h2>
            <p className="section-subtitle mx-auto">Guiding principles that drive everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-t-4 border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif mb-4">Our Mission</h3>
              <p className="text-charcoal-light leading-relaxed">
                To provide a safe, nurturing, and stimulating environment where children develop academically, 
                socially, and emotionally. We strive to instill a love for learning, foster creativity, and 
                build the confidence children need to succeed in their educational journey and beyond.
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-t-4 border-secondary">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif mb-4">Our Vision</h3>
              <p className="text-charcoal-light leading-relaxed">
                To be the leading primary school that transforms young lives through innovative education, 
                compassionate care, and a commitment to excellence. We envision a community where every 
                child is empowered to reach their full potential and become confident, curious, and caring individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal Profile */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Meet Our Founder</h2>
            <p className="section-subtitle mx-auto">A visionary educator with a passion for nurturing young minds</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/50 to-primary/10 rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={getImagePath('/images/principal.png')}
                  alt="Smt. Ratna - Principal & Founder of EduMax Kids"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">
                  Founder & Principal
                </p>
                <h3 className="text-4xl font-serif text-primary mb-2">Smt. Ratna</h3>
                <p className="text-charcoal-light text-lg">Visionary Educator & Academic Leader</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-accent/30 text-primary rounded-lg text-sm font-medium">B.Sc.</span>
                <span className="px-4 py-2 bg-accent/30 text-primary rounded-lg text-sm font-medium">M.A.</span>
                <span className="px-4 py-2 bg-accent/30 text-primary rounded-lg text-sm font-medium">N.T.T.</span>
                <span className="px-4 py-2 bg-accent/30 text-primary rounded-lg text-sm font-medium">B.Ed.</span>
              </div>

              <blockquote className="text-lg text-charcoal leading-relaxed italic border-l-4 border-secondary pl-6 py-2">
                &ldquo;Education is not just about filling minds with information—it&apos;s about igniting curiosity, 
                nurturing creativity, and building character. At EduMax Kids, we don&apos;t just teach children; 
                we inspire them to dream big and give them the tools to turn those dreams into reality.&rdquo;
              </blockquote>

              <div className="bg-primary text-white p-6 rounded-xl flex items-center gap-6">
                <span className="text-5xl font-serif font-bold text-secondary">25+</span>
                <div>
                  <p className="font-semibold text-lg">Years of Teaching Excellence</p>
                  <p className="text-white/70 text-sm">Dedicated to Early Childhood Education</p>
                </div>
              </div>

              <div className="bg-cream/70 p-6 rounded-xl">
                <h4 className="font-serif text-lg mb-4 text-primary">Professional Background</h4>
                <ul className="space-y-2 text-charcoal-light">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Bachelor of Science (B.Sc.)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Master of Arts (M.A.)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Nursery Teacher Training (N.T.T.)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Bachelor of Education (B.Ed.)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    25+ years of experience in education
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Specialized in early childhood development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle mx-auto">The principles that guide our approach to education</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Love & Care', description: 'Every interaction is infused with warmth and genuine care for each child\'s well-being.', icon: '❤️' },
              { title: 'Inclusivity', description: 'We celebrate diversity and ensure every child feels valued and respected.', icon: '🤝' },
              { title: 'Curiosity', description: 'We nurture natural curiosity, encouraging children to explore the world.', icon: '🔍' },
              { title: 'Excellence', description: 'We strive for excellence in everything we do, setting high standards.', icon: '⭐' },
              { title: 'Community', description: 'We build strong partnerships with families, creating a supportive community.', icon: '👨‍👩‍👧‍👦' },
              { title: 'Creativity', description: 'We encourage creative expression through art, music, and imaginative play.', icon: '🎨' },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl font-serif mb-3">{value.title}</h3>
                <p className="text-charcoal-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Ready to Join Our Family?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Give your child the best start in their educational journey. Admissions are open!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions" className="btn bg-white text-primary hover:bg-cream">
              Apply Now
            </Link>
            <Link href="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

