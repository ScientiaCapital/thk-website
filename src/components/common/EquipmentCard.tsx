import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface EquipmentCardProps {
  icon: LucideIcon
  name: string
  description: string
  badge: string
  link?: string
}

export function EquipmentCard({ icon: Icon, name, description, badge, link }: EquipmentCardProps) {
  const content = (
    <>
      <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center">
        <Icon className="w-8 h-8 text-thk-cyan group-hover:scale-110 transition-transform" />
      </div>
      <h3 className="font-semibold mb-2 flex items-center justify-center gap-2">
        {name}
        {link && <ExternalLink className="w-3 h-3 text-slate-500" />}
      </h3>
      <p className="text-sm text-slate-500 mb-4 leading-relaxed">{description}</p>
      <Badge variant="success" className="text-[10px]">
        {badge}
      </Badge>
    </>
  )

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-navy-950 border border-blue-500/10 rounded-2xl p-6 text-center transition-all duration-300 hover:border-cyan-400/30 hover:-translate-y-1 group"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="bg-navy-950 border border-blue-500/10 rounded-2xl p-6 text-center transition-all duration-300 hover:border-cyan-400/30 group">
      {content}
    </div>
  )
}
