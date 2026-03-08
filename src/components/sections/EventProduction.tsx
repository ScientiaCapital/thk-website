import { Section, SectionHeader } from '@/components/layout/Section'
import { ServiceCard } from '@/components/common/ServiceCard'
import { Video, Film, Smartphone, Wrench } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export function EventProduction() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Video,
      title: t('event.livestream.title'),
      description: t('event.livestream.desc'),
      price: t('event.livestream.price'),
      unit: t('event.livestream.unit'),
      gradient: 'bg-gradient-cyan',
    },
    {
      icon: Film,
      title: t('event.video.title'),
      description: t('event.video.desc'),
      price: t('event.video.price'),
      unit: t('event.video.unit'),
      gradient: 'bg-gradient-blue',
    },
    {
      icon: Smartphone,
      title: t('event.social.title'),
      description: t('event.social.desc'),
      price: t('event.social.price'),
      unit: t('event.social.unit'),
      gradient: 'bg-gradient-green',
    },
    {
      icon: Wrench,
      title: t('event.rental.title'),
      description: t('event.rental.desc'),
      price: t('event.rental.price'),
      unit: t('event.rental.unit'),
      gradient: 'bg-gradient-orange',
    },
  ]

  return (
    <Section id="services" dark>
      <SectionHeader
        tag={t('event.tag')}
        title={t('event.title')}
        description={t('event.subtitle')}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  )
}
