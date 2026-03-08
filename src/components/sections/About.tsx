import { Section } from '@/components/layout/Section'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/contexts/LanguageContext'

export function About() {
  const { t, lang } = useLanguage()

  return (
    <Section id="about" dark>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image placeholder */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 mx-auto mb-4 flex items-center justify-center font-display font-bold text-white text-3xl">
                T
              </div>
              <p className="text-slate-400 text-sm">
                {{ en: 'THK Operations Center', es: 'Centro de Operaciones THK', zh: 'THK 运营中心', ru: 'Операционный центр THK' }[lang]}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="inline-block text-xs uppercase tracking-widest font-semibold text-thk-cyan mb-4">
            {t('about.tag')}
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-bold leading-tight mb-6">
            {{ en: 'Founded by an 11-Year-Old ', es: 'Fundada por un ', zh: '由一位11岁的', ru: 'Основано 11-летним ' }[lang]}{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {{ en: 'Video Engineer', es: 'Ingeniero de Video de 11 Años', zh: '视频工程师创立', ru: 'видеоинженером' }[lang]}
            </span>
          </h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <Badge variant="cyan">{{ en: 'Epiphan Equipment', es: 'Equipos Epiphan', zh: 'Epiphan 设备', ru: 'Оборудование Epiphan' }[lang]}</Badge>
            <Badge variant="cyan">{{ en: 'Mexico City', es: 'CDMX', zh: '墨西哥城', ru: 'Мехико' }[lang]}</Badge>
            <Badge variant="cyan">{{ en: 'AI + Human', es: 'IA + Humano', zh: 'AI + 人工', ru: 'AI + Человек' }[lang]}</Badge>
            <Badge variant="cyan">{{ en: 'Open Platform', es: 'Plataforma Abierta', zh: '开放平台', ru: 'Открытая платформа' }[lang]}</Badge>
          </div>
        </div>
      </div>
    </Section>
  )
}
