import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { StatsBar } from '@/components/common/StatsBar'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-hero animate-pulse-slow" />

      {/* Content */}
      <div className="relative z-10 max-w-[850px] mx-auto px-6 py-32 text-center">
        {/* Live badge */}
        <Badge variant="live" className="mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-blink" />
          Managed Video Infrastructure for Every Industry
        </Badge>

        {/* Headline */}
        <h1 className="text-[clamp(2.2rem,5.5vw,3.6rem)] font-extrabold leading-[1.1] tracking-tight mb-6 font-display">
          Professional{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            video infrastructure
          </span>{' '}
          for universities, healthcare, corporations, government, and beyond —{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            never miss a moment
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-slate-400 max-w-[650px] mx-auto mb-10 leading-relaxed">
          THK deploys Epiphan Pearl encoders and manages them 24/7 from Mexico City.
          From lecture capture to corporate town halls, courtroom recordings to live events —
          we serve 10+ industries with enterprise-grade video at a fraction of the cost.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg">
            Explore Industries <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="lg">
            View Services
          </Button>
          <Button variant="outline" size="lg">
            Get a Quote
          </Button>
        </div>

        {/* Stats bar */}
        <StatsBar />
      </div>
    </section>
  )
}
