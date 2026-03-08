import { Section, SectionHeader } from '@/components/layout/Section'
import { DollarSign, Globe2, Zap, Settings, Bot, BarChart } from 'lucide-react'

const features = [
  {
    icon: DollarSign,
    title: 'Fraction of the Cost',
    description: '$50-75/month per device vs. $50,000/year for a full-time AV tech.',
  },
  {
    icon: Globe2,
    title: 'Trilingual Support',
    description: 'English, Spanish, and Mandarin support for global organizations.',
  },
  {
    icon: Zap,
    title: 'Zero Downtime',
    description: '99.9% uptime SLA backed by 24/7 monitoring and proactive alerts.',
  },
  {
    icon: Settings,
    title: 'Fully Managed',
    description: 'We handle scheduling, firmware updates, and troubleshooting remotely.',
  },
  {
    icon: Bot,
    title: 'AI-Powered Operations',
    description: 'Our AI agents monitor quality, detect issues, and alert our team instantly.',
  },
  {
    icon: BarChart,
    title: 'Analytics & Reports',
    description: 'Monthly reports on recording success rates, viewer engagement, and usage.',
  },
]

export function WhyThk() {
  return (
    <Section id="why-thk">
      <SectionHeader
        tag="Why THK"
        title="The Unfair Advantage of Managed Video Infrastructure"
        description="We combine enterprise-grade hardware with modern cloud management and AI-powered operations."
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
