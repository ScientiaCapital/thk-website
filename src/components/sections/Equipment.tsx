import { Section, SectionHeader } from '@/components/layout/Section'
import { EquipmentCard } from '@/components/common/EquipmentCard'
import { equipment } from '@/data/equipment'

export function Equipment() {
  return (
    <Section id="equipment">
      <SectionHeader
        tag="Our Equipment"
        title="Professional-Grade Hardware, Remotely Managed"
        description="We use the same Epiphan Pearl encoders trusted by Fortune 500 companies, universities, and hospitals worldwide."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipment.map((item) => (
          <EquipmentCard key={item.name} {...item} />
        ))}
      </div>
    </Section>
  )
}
