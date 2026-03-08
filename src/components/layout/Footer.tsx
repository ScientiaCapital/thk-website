import { Youtube, Instagram, Linkedin } from 'lucide-react'
import { footerLinks } from '@/data/navigation'

const socialLinks = [
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="bg-navy border-t border-blue-500/10 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-display font-bold text-white text-sm">
              T
            </div>
            <span className="font-display font-bold text-lg">THK Enterprises</span>
          </div>
          <p className="text-sm text-slate-500">
            2026 THK Enterprises. Mexico City. All rights reserved.
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

        {/* Social */}
        <div className="flex gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 rounded-lg bg-navy-950 border border-blue-500/10 flex items-center justify-center text-slate-400 hover:border-thk-cyan hover:text-thk-cyan transition-all"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
