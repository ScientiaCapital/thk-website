import {
  GraduationCap,
  BookOpen,
  Building2,
  Church,
  Scale,
  Music,
  Stethoscope,
  Landmark,
  Tv,
  Users,
  type LucideIcon,
} from 'lucide-react'

export interface Vertical {
  icon: LucideIcon
  name: string
  description: string
  useCases: string[]
}

export const verticals: Vertical[] = [
  {
    icon: GraduationCap,
    name: 'Universities',
    description: 'Automated lecture capture and graduation streaming',
    useCases: ['Lecture capture', 'LMS integration', 'Hybrid learning', 'Graduation ceremonies'],
  },
  {
    icon: BookOpen,
    name: 'K-12 Schools',
    description: 'School events and parent broadcasts',
    useCases: ['School plays', 'Sports events', 'Parent broadcasts', 'Award ceremonies'],
  },
  {
    icon: Building2,
    name: 'Corporate',
    description: 'Town halls, training, and product launches',
    useCases: ['Town halls', 'Training videos', 'Product demos', 'Internal comms'],
  },
  {
    icon: Church,
    name: 'Houses of Worship',
    description: 'Weekly service streaming and community broadcasts',
    useCases: ['Weekly services', 'Multi-campus', 'Volunteer-friendly', 'Special events'],
  },
  {
    icon: Scale,
    name: 'Legal / Courts',
    description: 'Depositions, hearings, and secure recordings',
    useCases: ['Depositions', 'Court hearings', 'Secure archives', 'Remote testimony'],
  },
  {
    icon: Music,
    name: 'Events & Conferences',
    description: 'Multi-day conferences, galas, and trade shows',
    useCases: ['Multi-camera', 'RTMP/SRT', 'Instant replay', 'Live switching'],
  },
  {
    icon: Stethoscope,
    name: 'Healthcare',
    description: 'Medical training, telemedicine, and procedures',
    useCases: ['HIPAA compliance', 'Surgical recording', 'Telemedicine', 'CME training'],
  },
  {
    icon: Landmark,
    name: 'Government',
    description: 'Public meetings, council sessions, and archives',
    useCases: ['Council meetings', 'Public hearings', 'Transparency', 'Archives'],
  },
  {
    icon: Tv,
    name: 'Broadcast',
    description: 'Studio production and live programming',
    useCases: ['Studio production', 'News broadcasts', 'Live programming', 'Remote feeds'],
  },
  {
    icon: Users,
    name: 'Non-Profits',
    description: 'Donor events and awareness campaigns',
    useCases: ['Donor galas', 'Awareness campaigns', 'Virtual events', 'Fundraisers'],
  },
]
