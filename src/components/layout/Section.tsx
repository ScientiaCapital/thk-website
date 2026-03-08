import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
  dark?: boolean
}

export function Section({ id, className, children, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-24 px-6',
        dark ? 'bg-navy-950' : 'bg-navy',
        className
      )}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  tag?: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ tag, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn('text-center mb-16', className)}>
      {tag && (
        <span className="inline-block text-xs uppercase tracking-widest font-semibold text-thk-cyan mb-4">
          {tag}
        </span>
      )}
      <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-bold leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
