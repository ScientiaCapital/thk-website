import { ExternalLink, Mail } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  const footerLinks = [
    { label: t('nav.managed'), href: '#managed' },
    { label: t('nav.production'), href: '#services' },
    { label: t('nav.equipment'), href: '#equipment' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  return (
    <footer className="bg-navy border-t border-blue-500/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Partner Badge */}
        <div className="flex justify-center mb-8">
          <a
            href="https://www.epiphan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-navy-950 border border-blue-500/10 hover:border-cyan-400/30 transition-colors"
          >
            <span className="text-sm text-slate-400">{t('footer.epiphan').split(' ')[0]}</span>
            <span className="text-sm font-semibold text-thk-cyan">Epiphan Video</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-display font-bold text-white text-sm">
                T
              </div>
              <span className="font-display font-bold text-lg">THK Enterprises</span>
            </div>
            <p className="text-sm text-slate-500">
              {t('footer.rights')}
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-thk-cyan transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-950 border border-blue-500/10 hover:border-thk-cyan hover:text-thk-cyan transition-all text-slate-400"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">{t('nav.contact')}</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
