import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[120px] w-full rounded-xl border border-blue-500/15 bg-navy-950 px-4 py-3 text-sm',
          'text-slate-200 placeholder:text-slate-500',
          'focus:outline-none focus:border-thk-cyan focus:ring-1 focus:ring-thk-cyan/30',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'transition-colors duration-200 resize-none',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
