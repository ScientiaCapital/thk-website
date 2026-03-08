import { Section } from '@/components/layout/Section'
import { Badge } from '@/components/ui/badge'

export function About() {
  return (
    <Section id="about" dark>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image placeholder */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 mx-auto mb-4 flex items-center justify-center font-display font-bold text-white text-3xl">
                T
              </div>
              <p className="text-slate-400 text-sm">THK Operations Center</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="inline-block text-xs uppercase tracking-widest font-semibold text-thk-cyan mb-4">
            About THK
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-bold leading-tight mb-6">
            Founded by an 11-Year-Old{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Video Engineer
            </span>
          </h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              THK Enterprises was founded by Timothy in Mexico City. What started as a passion for
              video production has grown into a mission: making professional video infrastructure
              accessible to organizations that need it most.
            </p>
            <p>
              We specialize in deploying and managing Epiphan Pearl encoders for schools, churches,
              and businesses throughout Mexico City. Our remote operations model means you get
              enterprise-grade reliability without the enterprise-grade price tag.
            </p>
            <p>
              Every recording matters. A missed lecture can set a student back. A failed church
              stream can disconnect a homebound member. We exist to make sure that never happens.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <Badge variant="cyan">Epiphan Partner</Badge>
            <Badge variant="cyan">Mexico City Based</Badge>
            <Badge variant="cyan">Remote Operations</Badge>
          </div>
        </div>
      </div>
    </Section>
  )
}
