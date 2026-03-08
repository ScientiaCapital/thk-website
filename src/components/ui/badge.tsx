import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-blue-500/10 border border-blue-500/20 text-blue-400',
        success: 'bg-emerald-500/10 border border-emerald-500/15 text-emerald-500',
        secondary: 'bg-slate-500/10 text-slate-400 border border-slate-500/10',
        outline: 'text-foreground border border-slate-600/20',
        live: 'bg-emerald-500/10 border border-emerald-500/15 text-emerald-500',
        cyan: 'bg-cyan-400/10 border border-cyan-400/20 text-cyan-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
