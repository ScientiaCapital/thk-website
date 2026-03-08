import { Section, SectionHeader } from '@/components/layout/Section'
import { ServiceCard } from '@/components/common/ServiceCard'
import { eventServices } from '@/data/services'

export function EventProduction() {
  return (
    <Section id="services" dark>
      <SectionHeader
        tag="Event Production"
        title="Professional Video Production for Every Occasion"
        description="From multi-camera livestreams to cinematic video production, we bring your vision to life."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {eventServices.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  )
}
