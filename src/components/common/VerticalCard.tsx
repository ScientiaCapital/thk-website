import type { LucideIcon } from 'lucide-react'

interface VerticalCardProps {
  icon: LucideIcon
  name: string
  description: string
}

export function VerticalCard({ icon: Icon, name, description }: VerticalCardProps) {
  return (
    <div className="group bg-navy border border-blue-500/10 rounded-xl p-5 text-center transition-all duration-300 hover:border-cyan-400/30 hover:-translate-y-0.5">
      <Icon className="w-7 h-7 mx-auto mb-3 text-thk-cyan group-hover:scale-110 transition-transform" />
      <h3 className="text-sm font-semibold mb-1">{name}</h3>
      <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
    </div>
  )
}
