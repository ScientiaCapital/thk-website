import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

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
  const { t } = useLanguage()

  return (
    <Section id="contact">
      <div className="text-center mb-16">
        <span className="inline-block text-xs uppercase tracking-widest font-semibold text-thk-cyan mb-4">
          {t('contact.tag')}
        </span>
        <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-bold leading-tight mb-4">
          {t('contact.title')}
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold">{t('contact.info')}</h3>
          <p className="text-slate-400">
            {t('contact.info.desc')}
          </p>

          <div className="space-y-6">
            <ContactDetail icon={MapPin} label={t('contact.location')} value="Ciudad de México, CDMX" />
            <ContactDetail
              icon={Mail}
              label={t('contact.email')}
              value="hello@thkenterprises.com"
              href="mailto:hello@thkenterprises.com"
            />
            <ContactDetail
              icon={Phone}
              label={t('contact.whatsapp')}
              value="+52 55 0000 0000"
              href="https://wa.me/525500000000"
            />
            <ContactDetail icon={Clock} label={t('contact.availability')} value={t('contact.availability.value')} />
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 bg-navy-950 border border-blue-500/10 rounded-2xl p-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                {t('contact.form.name')} *
              </label>
              <Input id="name" placeholder={t('contact.form.name')} required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                {t('contact.form.email')} *
              </label>
              <Input id="email" type="email" placeholder="tu@organizacion.com" required />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                {t('contact.form.phone')}
              </label>
              <Input id="phone" placeholder="+52 55 ____" />
            </div>
            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium">
                {t('contact.form.service')}
              </label>
              <select
                id="service"
                className="flex h-11 w-full rounded-xl border border-blue-500/15 bg-navy-950 px-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-thk-cyan focus:ring-1 focus:ring-thk-cyan/30 transition-colors duration-200"
              >
                <option value="">{t('contact.form.service.select')}</option>
                <option value="viaas">{t('contact.form.service.viaas')}</option>
                <option value="lecture">{t('contact.form.service.lecture')}</option>
                <option value="livestream">{t('contact.form.service.livestream')}</option>
                <option value="video">{t('contact.form.service.video')}</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              {t('contact.form.message')} *
            </label>
            <Textarea
              id="message"
              placeholder={t('contact.form.message.placeholder')}
              required
            />
          </div>

          <Button className="w-full" size="lg">
            {t('contact.form.submit')} <Send className="w-4 h-4 ml-2" />
          </Button>

          <p className="text-xs text-slate-500 text-center">
            {t('contact.form.disclaimer')}
          </p>
        </form>
      </div>
    </Section>
  )
}
