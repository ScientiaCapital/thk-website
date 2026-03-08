import { Section, SectionHeader } from '@/components/layout/Section'
import { DollarSign, Globe2, Zap, Settings, Bot, BarChart } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export function WhyThk() {
  const { t } = useLanguage()

  const features = [
    {
      icon: DollarSign,
      title: t('why.cost.title'),
      description: t('why.cost.desc'),
    },
    {
      icon: Globe2,
      title: t('why.trilingual.title'),
      description: t('why.trilingual.desc'),
    },
    {
      icon: Zap,
      title: t('why.uptime.title'),
      description: t('why.uptime.desc'),
    },
    {
      icon: Settings,
      title: t('why.managed.title'),
      description: t('why.managed.desc'),
    },
    {
      icon: Bot,
      title: t('why.ai.title'),
      description: t('why.ai.desc'),
    },
    {
      icon: BarChart,
      title: t('why.analytics.title'),
      description: t('why.analytics.desc'),
    },
  ]

  return (
    <Section id="why-thk">
      <SectionHeader
        tag={t('why.tag')}
        title={t('why.title')}
        description={t('why.subtitle')}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex gap-4 p-6 rounded-2xl border border-blue-500/10 bg-navy-950 transition-all duration-300 hover:border-cyan-400/30"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center shrink-0">
              <feature.icon className="w-6 h-6 text-thk-cyan" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
