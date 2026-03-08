import { Section, SectionHeader } from '@/components/layout/Section'
import { VerticalCard } from '@/components/common/VerticalCard'
import { verticals } from '@/data/verticals'

export function Verticals() {
  return (
    <Section id="verticals" dark>
      <SectionHeader
        tag="Industries We Serve"
        title="Built for Organizations That Cannot Afford to Miss a Moment"
        description="We serve organizations that need reliable video but don't have the budget for a full-time AV team."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {verticals.map((vertical) => (
          <VerticalCard
            key={vertical.name}
            icon={vertical.icon}
            name={vertical.name}
            description={vertical.description}
          />
        ))}
      </div>
    </Section>
  )
}
