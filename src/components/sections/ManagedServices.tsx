import { Section, SectionHeader } from '@/components/layout/Section'
import { ServiceCard } from '@/components/common/ServiceCard'
import { managedServices } from '@/data/services'

export function ManagedServices() {
  return (
    <Section id="managed">
      <SectionHeader
        tag="Managed AV"
        title="Video Infrastructure as a Service (VIaaS)"
        description="We deploy professional Epiphan encoders at your location and manage them remotely. No on-site technicians required."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {managedServices.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  )
}
