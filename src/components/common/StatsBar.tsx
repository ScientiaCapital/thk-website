import { AnimatedCounter } from './AnimatedCounter'

interface StatItemProps {
  value: number | string
  prefix?: string
  suffix?: string
  label: string
}

function StatItem({ value, prefix, suffix, label }: StatItemProps) {
  return (
    <div className="bg-navy-950 p-6 text-center">
      <div className="font-display text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        {prefix}
        {typeof value === 'number' ? (
          <AnimatedCounter end={value} duration={2000} decimals={value % 1 !== 0 ? 1 : 0} />
        ) : (
          value
        )}
        {suffix}
      </div>
      <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">
        {label}
      </div>
    </div>
  )
}

export function StatsBar() {
  return (
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-blue-500/10 rounded-2xl overflow-hidden">
      <StatItem value={99.9} suffix="%" label="Uptime SLA" />
      <StatItem value="24/7" label="Cloud Monitoring" />
      <StatItem value={3} label="Languages" />
      <StatItem value={50} prefix="$" label="USD / Mo / Device" />
    </div>
  )
}
