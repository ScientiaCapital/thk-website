import { useState, FormEvent } from 'react'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Clock, Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react'
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

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/REPLACE_WITH_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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
            <ContactDetail icon={Clock} label={t('contact.availability')} value={t('contact.availability.value')} />
          </div>

          {/* Chat nudge card */}
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-thk-cyan" />
              </div>
              <div>
                <p className="font-semibold text-slate-200 mb-1">{t('chat.cta.label')}</p>
                <p className="text-sm text-slate-400 mb-3">{t('contact.form.note')}</p>
                <Button
                  size="sm"
                  className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10"
                  variant="outline"
                  onClick={() => window.dispatchEvent(new CustomEvent('thk:open-chat'))}
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  {t('hero.cta.quote')}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-navy-950 border border-blue-500/10 rounded-2xl p-8">
          {/* Success state */}
          {status === 'success' && (
            <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <p className="text-sm text-emerald-400">{t('contact.form.success')}</p>
            </div>
          )}

          {/* Error state */}
          {status === 'error' && (
            <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
              <p className="text-sm text-red-400">{t('contact.form.error')}</p>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                {t('contact.form.name')} *
              </label>
              <Input id="name" name="name" placeholder={t('contact.form.name')} required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                {t('contact.form.email')} *
              </label>
              <Input id="email" name="email" type="email" placeholder="tu@organizacion.com" required />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                {t('contact.form.phone')}
              </label>
              <Input id="phone" name="phone" placeholder="+52 55 ____" />
            </div>
            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium">
                {t('contact.form.service')}
              </label>
              <select
                id="service"
                name="service"
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
              name="message"
              placeholder={t('contact.form.message.placeholder')}
              required
            />
          </div>

          <Button
            className="w-full"
            size="lg"
            disabled={status === 'sending' || status === 'success'}
          >
            {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
            {status !== 'sending' && <Send className="w-4 h-4 ml-2" />}
          </Button>

          <p className="text-xs text-slate-500 text-center">
            {t('contact.form.disclaimer')}
          </p>
        </form>
      </div>
    </Section>
  )
}
