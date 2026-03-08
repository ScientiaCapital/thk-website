import type { LucideIcon } from 'lucide-react'
import { ChevronRight } from 'lucide-react'

interface VerticalCardProps {
  icon: LucideIcon
  name: string
  description: string
  onClick?: () => void
}

export function VerticalCard({ icon: Icon, name, description, onClick }: VerticalCardProps) {
  return (
    <button
      onClick={onClick}
      className="group bg-navy border border-blue-500/10 rounded-xl p-5 text-center transition-all duration-300 hover:border-cyan-400/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/5 cursor-pointer w-full"
    >
      <Icon className="w-7 h-7 mx-auto mb-3 text-thk-cyan group-hover:scale-110 transition-transform" />
      <h3 className="text-sm font-semibold mb-1">{name}</h3>
      <p className="text-xs text-slate-500 leading-relaxed mb-2">{description}</p>
      <div className="flex items-center justify-center gap-1 text-xs text-thk-cyan opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Details</span>
        <ChevronRight className="w-3 h-3" />
      </div>
    </button>
  )
}
