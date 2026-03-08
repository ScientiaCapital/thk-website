import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  price: string
  unit: string
  gradient: string
}

export function ServiceCard({ icon: Icon, title, description, price, unit, gradient }: ServiceCardProps) {
  return (
    <Card gradient={gradient} className="flex flex-col h-full">
      <CardHeader className="pb-4">
        <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-thk-cyan" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <CardDescription className="flex-1">{description}</CardDescription>
        <div className="mt-4 pt-4 border-t border-blue-500/10">
          <span className="text-thk-cyan font-semibold">{price}</span>
          <span className="text-slate-500 text-sm ml-1">{unit}</span>
        </div>
      </CardContent>
    </Card>
  )
}
