import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { lang, setLang, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t('nav.managed'), href: '#managed' },
    { label: t('nav.production'), href: '#services' },
    { label: t('nav.equipment'), href: '#equipment' },
    { label: t('nav.industries'), href: '#verticals' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  return (
    <nav
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-navy/95 backdrop-blur-xl border-b border-blue-500/10 shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-display font-bold text-white text-lg">
            T
          </div>
          <span className="font-display font-bold text-lg text-white group-hover:text-thk-cyan transition-colors">
            THK
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-400 hover:text-thk-cyan transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Language Toggle */}
          <li className="flex items-center gap-0.5 ml-2 border border-blue-500/20 rounded-lg overflow-hidden">
            {([['en', 'EN'], ['es', 'ES'], ['zh', '中'], ['ru', 'РУ']] as const).map(([code, label]) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={cn(
                  'px-2 py-1.5 text-xs font-medium transition-all',
                  lang === code
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white'
                    : 'text-slate-400 hover:text-white'
                )}
              >
                {label}
              </button>
            ))}
          </li>

          <li>
            <Button size="sm" asChild>
              <a href="#contact">{t('nav.quote')}</a>
            </Button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          {/* Mobile Language Toggle */}
          <div className="flex items-center gap-0.5 border border-blue-500/20 rounded-lg overflow-hidden">
            {([['en', 'EN'], ['es', 'ES'], ['zh', '中'], ['ru', 'РУ']] as const).map(([code, label]) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={cn(
                  'px-1.5 py-1 text-xs font-medium transition-all',
                  lang === code
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white'
                    : 'text-slate-400 hover:text-white'
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute inset-x-0 top-[72px] bg-navy/98 backdrop-blur-xl border-b border-blue-500/10',
          'transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-thk-cyan transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <Button className="mt-2" asChild>
            <a href="#contact" onClick={() => setIsOpen(false)}>{t('nav.quote')}</a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
