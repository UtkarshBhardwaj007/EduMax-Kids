'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    childAge: '',
    inquiry: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Build WhatsApp message
    let message = `Hi! I'm interested in EduMax Kids.\n\n`
    message += `*Parent Name:* ${formData.parentName}\n`
    message += `*Phone:* ${formData.phone}\n`
    if (formData.email) message += `*Email:* ${formData.email}\n`
    if (formData.childName) message += `*Child's Name:* ${formData.childName}\n`
    if (formData.childAge) message += `*Child's Age:* ${formData.childAge}\n`
    if (formData.inquiry) message += `*Inquiry Type:* ${formData.inquiry}\n`
    if (formData.message) message += `\n*Message:*\n${formData.message}`

    // Open WhatsApp
    const whatsappURL = `https://wa.me/919958864300?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, '_blank')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Parent&apos;s Name *
          </label>
          <input
            type="text"
            required
            value={formData.parentName}
            onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
            className="w-full px-4 py-3 border-2 border-accent/50 rounded-xl focus:border-primary focus:outline-none transition-colors"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border-2 border-accent/50 rounded-xl focus:border-primary focus:outline-none transition-colors"
            placeholder="+91 99999 99999"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border-2 border-accent/50 rounded-xl focus:border-primary focus:outline-none transition-colors"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Child&apos;s Name
          </label>
          <input
            type="text"
            value={formData.childName}
            onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
            className="w-full px-4 py-3 border-2 border-accent/50 rounded-xl focus:border-primary focus:outline-none transition-colors"
            placeholder="Enter child's name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Child&apos;s Age
          </label>
          <select
            value={formData.childAge}
            onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
            className="w-full px-4 py-3 border-2 border-accent/50 rounded-xl focus:border-primary focus:outline-none transition-colors bg-white"
          >
            <option value="">Select age group</option>
            <option value="2.5 - 3 Years (Pre-Nursery)">2.5 - 3 Years (Pre-Nursery)</option>
            <option value="3.5 - 4 Years (Nursery)">3.5 - 4 Years (Nursery)</option>
            <option value="4.5 - 5 Years (KG)">4.5 - 5 Years (KG)</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Inquiry Type
          </label>
          <select
            value={formData.inquiry}
            onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
            className="w-full px-4 py-3 border-2 border-accent/50 rounded-xl focus:border-primary focus:outline-none transition-colors bg-white"
          >
            <option value="">Select inquiry type</option>
            <option value="Admission Inquiry">Admission Inquiry</option>
            <option value="Schedule a Visit">Schedule a Visit</option>
            <option value="Fee Information">Fee Information</option>
            <option value="General Query">General Query</option>
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">
          Your Message
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 border-2 border-accent/50 rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
          placeholder="Tell us more about your inquiry..."
        />
      </div>

      <button type="submit" className="btn btn-primary w-full md:w-auto">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Send via WhatsApp
      </button>
    </form>
  )
}

