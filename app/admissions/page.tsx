import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admissions - EduMax Kids | No Admission Fees',
  description: 'Admissions open for Pre-Nursery, Nursery, and Kindergarten classes. No admission fees at EduMax Kids, Faridabad.',
}

export default function AdmissionsPage() {
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
            <span className="text-white">Admissions</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Admissions</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Give your child the best start in their educational journey
          </p>
        </div>
      </section>

      {/* Admissions Open Banner - Elegant Design */}
      <section className="py-12 bg-secondary/10">
        <div className="container">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-secondary/20">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
              <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
                Now Enrolling
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Admissions Open!
            </h2>
            <p className="text-charcoal-light text-lg mb-8 max-w-2xl mx-auto">
              Enroll your child in our nurturing learning environment
            </p>
            <div className="inline-block bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-xl shadow-lg">
              <span className="text-3xl font-serif font-bold">NO ADMISSION FEES</span>
            </div>
          </div>
        </div>
      </section>

      {/* Classes We Offer */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Classes We Offer</h2>
            <p className="section-subtitle mx-auto">
              Age-appropriate programs designed for holistic development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Pre-Nursery',
                age: '2.5 - 3.5 Years',
                description: 'A gentle introduction to the school environment. We focus on sensory exploration, basic motor skills, and social interaction in a playful, loving atmosphere.',
                icon: '🌱',
              },
              {
                title: 'Nursery',
                age: '3.5 - 4.5 Years',
                description: 'Building foundational skills through stories, songs, and activities. Children develop language skills, creativity, and begin early literacy and numeracy concepts.',
                icon: '📚',
              },
              {
                title: 'Kindergarten (KG)',
                age: '4.5 - 5.5 Years',
                description: 'Preparing children for formal schooling with a structured curriculum covering reading, writing, mathematics, and environmental awareness while maintaining the joy of learning.',
                icon: '🎓',
              },
            ].map((classInfo, index) => (
              <div
                key={index}
                className="bg-cream/50 p-8 rounded-2xl border border-accent/30 hover:shadow-xl hover:bg-white transition-all duration-300 group"
              >
                <span className="text-5xl mb-6 block">{classInfo.icon}</span>
                <h3 className="text-2xl font-serif text-primary mb-2">{classInfo.title}</h3>
                <p className="text-secondary font-medium mb-4">Age: {classInfo.age}</p>
                <p className="text-charcoal-light leading-relaxed">{classInfo.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Enroll */}
      <section className="section bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Enroll at EduMax Kids?</h2>
            <p className="section-subtitle mx-auto">
              Discover what makes us the preferred choice for early education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4">Zero Admission Fees</h3>
              <p className="text-charcoal-light leading-relaxed">
                We believe quality education should be accessible. That&apos;s why we&apos;ve completely eliminated 
                admission fees, making it easier for families to enroll their children without financial burden.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4">Safe & Nurturing Environment</h3>
              <p className="text-charcoal-light leading-relaxed">
                Our campus is designed with child safety as the priority. From secure premises to trained 
                staff, we ensure your child is in safe, caring hands throughout the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Admission Process</h2>
            <p className="section-subtitle mx-auto">
              Simple and straightforward steps to enroll your child
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Inquiry', desc: 'Contact us via phone, WhatsApp, or visit the school' },
              { step: '2', title: 'Campus Visit', desc: 'Schedule a tour to see our facilities and meet our team' },
              { step: '3', title: 'Registration', desc: 'Complete the registration form with required documents' },
              { step: '4', title: 'Welcome!', desc: 'Your child is now part of the EduMax Kids family!' },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-bold">
                  {item.step}
                </div>
                <h4 className="font-serif text-lg mb-2">{item.title}</h4>
                <p className="text-charcoal-light text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-accent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="section bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Documents Required</h2>
            <p className="section-subtitle mx-auto">
              Please bring the following documents for registration
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              'Birth Certificate (Original + Photocopy)',
              '4 Passport Size Photographs of Child',
              'Aadhar Card of Child (Photocopy)',
              'Aadhar Card of Parents (Photocopy)',
              '2 Passport Size Photographs of Both Parents',
              'Address Proof (Any Government ID)',
            ].map((doc, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                <svg className="w-6 h-6 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-charcoal text-sm">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Fee Structure</h2>
            <p className="section-subtitle mx-auto">
              Transparent and affordable pricing for quality education
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-cream/50 rounded-2xl p-8 md:p-12 text-center border border-accent/30">
            <div className="mb-8">
              <span className="text-6xl font-serif font-bold text-primary">₹0</span>
              <p className="text-secondary font-semibold mt-2">Admission Fees</p>
            </div>
            <p className="text-charcoal-light mb-8">
              For detailed information about tuition fees and other charges, please contact us directly. 
              We offer flexible payment options to suit your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919958864300" className="btn btn-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <a
                href="https://wa.me/919958864300?text=Hi!%20I%20am%20interested%20in%20admissions%20at%20EduMax%20Kids."
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#25D366] text-white hover:bg-[#1da851]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Ready to Enroll Your Child?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Take the first step towards a bright future. Contact us today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn bg-white text-primary hover:bg-cream">
              Contact Us
            </Link>
            <a
              href="https://wa.me/919958864300?text=Hi!%20I%20am%20interested%20in%20admissions%20at%20EduMax%20Kids."
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#25D366] text-white hover:bg-[#1da851]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Inquire on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

