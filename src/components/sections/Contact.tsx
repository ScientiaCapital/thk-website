import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react'

interface ContactDetailProps {
  icon: typeof MapPin
  label: string
  value: string
  href?: string
}

function ContactDetail({ icon: Icon, label, value, href }: ContactDetailProps) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-thk-cyan" />
      </div>
      <div>
        <div className="text-xs text-slate-500 uppercase tracking-wider">{label}</div>
        <div className="text-slate-200">{value}</div>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block hover:opacity-80 transition-opacity">
        {content}
      </a>
    )
  }

  return content
}

export function Contact() {
  return (
    <Section id="contact">
      <div className="text-center mb-16">
        <span className="inline-block text-xs uppercase tracking-widest font-semibold text-thk-cyan mb-4">
          Get Started
        </span>
        <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-bold leading-tight mb-4">
          Let's Work Together
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Ready to eliminate missed recordings? Reach out for a free consultation.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold">Contact Information</h3>
          <p className="text-slate-400">
            Reach out anytime. We are based in Mexico City and deploy equipment throughout the metropolitan area.
          </p>

          <div className="space-y-6">
            <ContactDetail icon={MapPin} label="Location" value="Mexico City, CDMX" />
            <ContactDetail
              icon={Mail}
              label="Email"
              value="hello@thkenterprises.com"
              href="mailto:hello@thkenterprises.com"
            />
            <ContactDetail
              icon={Phone}
              label="WhatsApp"
              value="+52 55 0000 0000"
              href="https://wa.me/525500000000"
            />
            <ContactDetail icon={Clock} label="Availability" value="Weekends - US Business Hours" />
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 bg-navy-950 border border-blue-500/10 rounded-2xl p-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full Name *
              </label>
              <Input id="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email *
              </label>
              <Input id="email" type="email" placeholder="you@organization.com" required />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone / WhatsApp
              </label>
              <Input id="phone" placeholder="+52 55 ____" />
            </div>
            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium">
                What do you need?
              </label>
              <select
                id="service"
                className="flex h-11 w-full rounded-xl border border-blue-500/15 bg-navy-950 px-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-thk-cyan focus:ring-1 focus:ring-thk-cyan/30 transition-colors duration-200"
              >
                <option value="">Select a service</option>
                <option value="viaas">VIaaS - Managed Encoder</option>
                <option value="lecture">Always-On Lecture Capture</option>
                <option value="livestream">Multi-Camera Livestreaming</option>
                <option value="video">4K Video Production</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Tell us about your needs *
            </label>
            <Textarea
              id="message"
              placeholder="How many rooms/locations? What are you recording?"
              required
            />
          </div>

          <Button className="w-full" size="lg">
            Send Message <Send className="w-4 h-4 ml-2" />
          </Button>

          <p className="text-xs text-slate-500 text-center">
            Free consultation. We respond within 24 hours. No spam, ever.
          </p>
        </form>
      </div>
    </Section>
  )
}
