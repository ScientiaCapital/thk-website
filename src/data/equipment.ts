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
}

export const equipment: Equipment[] = [
  {
    icon: Monitor,
    name: 'Epiphan Pearl Nexus',
    description: '1RU rackmount encoder. 3 HD inputs, H.264/H.265, 1TB SSD, full REST API.',
    badge: 'Rackmount - Fleet-Ready',
  },
  {
    icon: Radio,
    name: 'Epiphan Pearl Mini',
    description: 'Portable all-in-one live production system. Multi-source switching, recording, and streaming.',
    badge: 'Portable - Event-Ready',
  },
  {
    icon: Camera,
    name: 'Epiphan EC20 PTZ Camera',
    description: '20x optical zoom PTZ camera. NDI, SDI, and HDMI output. Remote pan-tilt-zoom.',
    badge: 'ISE 2026 Featured',
  },
  {
    icon: Cloud,
    name: 'Epiphan Edge Cloud',
    description: 'Cloud management platform. Remote scheduling, firmware updates, health monitoring.',
    badge: '24/7 Cloud Control',
  },
  {
    icon: Bot,
    name: 'AI Operations Center',
    description: 'Raspberry Pi 5 cluster running local AI agents. Automated monitoring and quality checks.',
    badge: 'Smart Automation',
  },
  {
    icon: Server,
    name: 'Home Server Rack',
    description: 'Our command center. Pearl Nexus encoder, network switch, UPS, and AI compute.',
    badge: 'Operations HQ',
  },
]
