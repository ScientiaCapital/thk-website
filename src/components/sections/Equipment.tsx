import { Section, SectionHeader } from '@/components/layout/Section'
import { EquipmentCard } from '@/components/common/EquipmentCard'
import { Monitor, Radio, Camera, Cloud, Bot, Server } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export function Equipment() {
  const { t } = useLanguage()

  const equipment = [
    {
      icon: Monitor,
      name: t('equipment.nexus.name'),
      description: t('equipment.nexus.desc'),
      badge: t('equipment.nexus.badge'),
      link: 'https://www.epiphan.com/products/pearl-nexus/',
    },
    {
      icon: Radio,
      name: t('equipment.mini.name'),
      description: t('equipment.mini.desc'),
      badge: t('equipment.mini.badge'),
      link: 'https://www.epiphan.com/products/pearl-mini/',
    },
    {
      icon: Camera,
      name: t('equipment.camera.name'),
      description: t('equipment.camera.desc'),
      badge: t('equipment.camera.badge'),
      link: 'https://www.epiphan.com/products/lumio/',
    },
    {
      icon: Cloud,
      name: t('equipment.cloud.name'),
      description: t('equipment.cloud.desc'),
      badge: t('equipment.cloud.badge'),
      link: 'https://www.epiphan.com/products/epiphan-cloud/',
    },
    {
      icon: Bot,
      name: t('equipment.ai.name'),
      description: t('equipment.ai.desc'),
      badge: t('equipment.ai.badge'),
    },
    {
      icon: Server,
      name: t('equipment.ops.name'),
      description: t('equipment.ops.desc'),
      badge: t('equipment.ops.badge'),
    },
  ]

  return (
    <Section id="equipment">
      <SectionHeader
        tag={t('equipment.tag')}
        title={t('equipment.title')}
        description={t('equipment.subtitle')}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipment.map((item) => (
          <EquipmentCard key={item.name} {...item} />
        ))}
      </div>
    </Section>
  )
}
