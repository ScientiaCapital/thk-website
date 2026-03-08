import {
  Video,
  Film,
  Smartphone,
  GraduationCap,
  Globe,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  price: string
  unit: string
  gradient: string
}

export const managedServices: Service[] = [
  {
    icon: Video,
    title: 'VIaaS - Managed Encoder',
    description: 'We deploy a Pearl encoder at your location and manage it 24/7. Recording, streaming, and monitoring included.',
    price: '$50-75 USD',
    unit: 'per device/month',
    gradient: 'bg-gradient-cyan',
  },
  {
    icon: GraduationCap,
    title: 'Always-On Lecture Capture',
    description: 'Automated lecture recording with calendar integration. Every class captured, every time.',
    price: '$75 USD',
    unit: 'per room/month',
    gradient: 'bg-gradient-blue',
  },
  {
    icon: Globe,
    title: 'Cloud Management',
    description: 'Epiphan Edge cloud integration for remote scheduling, monitoring, and firmware updates.',
    price: 'Included',
    unit: 'with VIaaS',
    gradient: 'bg-gradient-purple',
  },
]

export const eventServices: Service[] = [
  {
    icon: Video,
    title: 'Multi-Camera Livestreaming',
    description: 'Professional multi-camera switching and encoding for conferences, graduations, and events.',
    price: 'From $5,000 MXN',
    unit: 'per event',
    gradient: 'bg-gradient-cyan',
  },
  {
    icon: Film,
    title: '4K Video Production',
    description: 'Cinematic video production for commercials, documentaries, and promotional content.',
    price: 'From $15,000 MXN',
    unit: 'per project',
    gradient: 'bg-gradient-blue',
  },
  {
    icon: Smartphone,
    title: 'Social Media Streaming',
    description: 'Optimized streams for YouTube, Facebook, Instagram, and TikTok.',
    price: 'From $3,000 MXN',
    unit: 'per event',
    gradient: 'bg-gradient-green',
  },
  {
    icon: Wrench,
    title: 'Equipment Rental',
    description: 'Pearl encoders, PTZ cameras, and production gear for your team.',
    price: 'From $2,000 MXN',
    unit: 'per day',
    gradient: 'bg-gradient-orange',
  },
]
