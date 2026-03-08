import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-hero animate-pulse-slow" />

      {/* Content */}
      <div className="relative z-10 max-w-[850px] mx-auto px-6 py-32 text-center">
        {/* Live badge */}
        <Badge variant="live" className="mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-blink" />
          {t('hero.badge')}
        </Badge>

        {/* Headline */}
        <h1 className="text-[clamp(2.2rem,5.5vw,3.6rem)] font-extrabold leading-[1.1] tracking-tight mb-6 font-display">
          {t('hero.title.1')}{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {t('hero.title.2')}
          </span>{' '}
          {t('hero.title.3')}{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {t('hero.title.4')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-slate-400 max-w-[650px] mx-auto mb-10 leading-relaxed">
          {t('hero.subtitle')}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#verticals">
              {t('hero.cta.industries')} <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#how-it-works">{t('hero.cta.services')}</a>
          </Button>
          <div className="flex flex-col items-center">
            <Button
              variant="outline"
              size="lg"
              className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10"
              onClick={() => window.dispatchEvent(new CustomEvent('thk:open-chat'))}
            >
              {t('hero.cta.quote')}
              <MessageCircle className="w-4 h-4 ml-1" />
            </Button>
            <p className="text-xs text-slate-500 mt-2">{t('hero.cta.chat.sub')}</p>
          </div>
        </div>

        {/* Integration badges — ecosystem signal */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['Epiphan Cloud', 'Kaltura', 'Panopto', 'AWS S3', 'YouTube Live', 'Zoom'].map((tool) => (
            <span key={tool} className="text-xs text-slate-500 border border-blue-500/15 rounded-full px-3 py-1">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
