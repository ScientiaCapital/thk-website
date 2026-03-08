import {
  Monitor,
  Radio,
  Camera,
  Cloud,
  Bot,
  Server,
  type LucideIcon,
} from 'lucide-react'

export interface Equipment {
  icon: LucideIcon
  name: string
  description: string
  badge: string
  link?: string
}

export const equipment: Equipment[] = [
  {
    icon: Monitor,
    name: 'Epiphan Pearl Nexus',
    description: '1RU rackmount encoder. 3 HD inputs, H.264/H.265, 1TB SSD, full REST API.',
    badge: 'Rackmount - Fleet-Ready',
    link: 'https://www.epiphan.com/products/pearl-nexus/',
  },
  {
    icon: Radio,
    name: 'Epiphan Pearl Mini',
    description: 'Portable all-in-one live production system. Multi-source switching, recording, and streaming.',
    badge: 'Portable - Event-Ready',
    link: 'https://www.epiphan.com/products/pearl-mini/',
  },
  {
    icon: Camera,
    name: 'Epiphan LUMiO PTZ Cameras',
    description: '12x/20x optical zoom PTZ cameras. NDI, SDI, and HDMI output. Remote pan-tilt-zoom.',
    badge: 'Professional PTZ',
    link: 'https://www.epiphan.com/products/lumio/',
  },
  {
    icon: Cloud,
    name: 'Epiphan Cloud',
    description: 'Cloud management platform. Remote scheduling, firmware updates, health monitoring.',
    badge: '24/7 Cloud Control',
    link: 'https://www.epiphan.com/products/epiphan-cloud/',
  },
  {
    icon: Bot,
    name: 'THK AI Operations',
    description: 'Our AI-powered monitoring agents. Automated quality checks and proactive alerts.',
    badge: 'Smart Automation',
  },
  {
    icon: Server,
    name: 'THK Operations Center',
    description: 'Our Mexico City command center. 24/7 monitoring, support, and remote management.',
    badge: 'Operations HQ',
  },
]
