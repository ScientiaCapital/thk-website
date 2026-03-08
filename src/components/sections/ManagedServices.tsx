import { Section, SectionHeader } from '@/components/layout/Section'
import { ServiceCard } from '@/components/common/ServiceCard'
import { Video, GraduationCap, Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export function ManagedServices() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Video,
      title: t('managed.viaas.title'),
      description: t('managed.viaas.desc'),
      price: t('managed.viaas.price'),
      unit: t('managed.viaas.unit'),
      gradient: 'bg-gradient-cyan',
    },
    {
      icon: GraduationCap,
      title: t('managed.lecture.title'),
      description: t('managed.lecture.desc'),
      price: t('managed.lecture.price'),
      unit: t('managed.lecture.unit'),
      gradient: 'bg-gradient-blue',
    },
    {
      icon: Globe,
      title: t('managed.cloud.title'),
      description: t('managed.cloud.desc'),
      price: t('managed.cloud.price'),
      unit: t('managed.cloud.unit'),
      gradient: 'bg-gradient-purple',
    },
  ]

  return (
    <Section id="managed">
      <SectionHeader
        tag={t('managed.tag')}
        title={t('managed.title')}
        description={t('managed.subtitle')}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  )
}
