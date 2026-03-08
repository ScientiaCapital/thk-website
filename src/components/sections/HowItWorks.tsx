import { Section, SectionHeader } from '@/components/layout/Section'
import { Upload, Link2, Eye, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    number: '01',
    title: 'Setup',
    description: 'We help you get Epiphan Pearl encoders configured and connected at your location.',
  },
  {
    icon: Link2,
    number: '02',
    title: 'Connect',
    description: 'Plug in your HDMI sources (laptops, cameras, document cams) and connect to your network.',
  },
  {
    icon: Eye,
    number: '03',
    title: 'Monitor',
    description: 'AI-powered monitoring watches your encoders and alerts us if anything needs attention.',
  },
  {
    icon: Sparkles,
    number: '04',
    title: 'Record',
    description: 'Focus on your content. The system handles recording, streaming, and archiving.',
  },
]

export function HowItWorks() {
  return (
    <Section id="how-it-works" dark>
      <SectionHeader
        tag="How It Works"
        title="Simple Setup, Reliable Recording"
        description="Our goal: make professional video infrastructure accessible to organizations of any size."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="relative bg-navy border border-blue-500/10 rounded-2xl p-6 transition-all duration-300 hover:border-cyan-400/30 hover:-translate-y-1"
          >
            {/* Step number */}
            <div className="absolute -top-4 -right-2 text-6xl font-display font-bold text-blue-500/10">
              {step.number}
            </div>

            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-4">
              <step.icon className="w-6 h-6 text-thk-cyan" />
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>

            {/* Connector line (not on last item) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-blue-500/30 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
