import { useState } from 'react'
import { Section, SectionHeader } from '@/components/layout/Section'
import { VerticalCard } from '@/components/common/VerticalCard'
import { VerticalDetail } from './VerticalDetail'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  GraduationCap,
  BookOpen,
  Building2,
  Church,
  Scale,
  Music,
  Stethoscope,
  Landmark,
  Tv,
  Users,
} from 'lucide-react'

export function Verticals() {
  const { t } = useLanguage()
  const [selectedVertical, setSelectedVertical] = useState<string | null>(null)

  const verticals = [
    { key: 'universities', icon: GraduationCap, name: t('verticals.universities'), description: t('verticals.universities.desc') },
    { key: 'k12', icon: BookOpen, name: t('verticals.k12'), description: t('verticals.k12.desc') },
    { key: 'corporate', icon: Building2, name: t('verticals.corporate'), description: t('verticals.corporate.desc') },
    { key: 'worship', icon: Church, name: t('verticals.worship'), description: t('verticals.worship.desc') },
    { key: 'legal', icon: Scale, name: t('verticals.legal'), description: t('verticals.legal.desc') },
    { key: 'events', icon: Music, name: t('verticals.events'), description: t('verticals.events.desc') },
    { key: 'healthcare', icon: Stethoscope, name: t('verticals.healthcare'), description: t('verticals.healthcare.desc') },
    { key: 'government', icon: Landmark, name: t('verticals.government'), description: t('verticals.government.desc') },
    { key: 'broadcast', icon: Tv, name: t('verticals.broadcast'), description: t('verticals.broadcast.desc') },
    { key: 'nonprofit', icon: Users, name: t('verticals.nonprofit'), description: t('verticals.nonprofit.desc') },
  ]

  return (
    <Section id="verticals" dark>
      <SectionHeader
        tag={t('verticals.tag')}
        title={t('verticals.title')}
        description={t('verticals.subtitle')}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {verticals.map((vertical) => (
          <VerticalCard
            key={vertical.key}
            icon={vertical.icon}
            name={vertical.name}
            description={vertical.description}
            onClick={() => setSelectedVertical(vertical.key)}
          />
        ))}
      </div>

      <VerticalDetail
        verticalKey={selectedVertical}
        onClose={() => setSelectedVertical(null)}
      />
    </Section>
  )
}
