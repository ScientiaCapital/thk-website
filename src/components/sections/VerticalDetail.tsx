import { Modal } from '@/components/ui/modal'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
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
  Monitor,
  Radio,
  Camera,
  Cloud,
  CheckCircle,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'

interface VerticalDetailProps {
  verticalKey: string | null
  onClose: () => void
}

interface VerticalData {
  icon: LucideIcon
  color: string
  useCases: { en: string; es: string }[]
  equipment: {
    name: { en: string; es: string }
    desc: { en: string; es: string }
    icon: LucideIcon
  }[]
  pricing: { en: string; es: string }
}

const verticalData: Record<string, VerticalData> = {
  universities: {
    icon: GraduationCap,
    color: 'from-blue-500 to-cyan-400',
    useCases: [
      { en: 'Automated lecture capture', es: 'Captura automática de clases' },
      { en: 'Graduation livestreaming', es: 'Streaming de graduaciones' },
      { en: 'LMS integration (Canvas, Blackboard)', es: 'Integración LMS (Canvas, Blackboard)' },
      { en: 'Hybrid classroom support', es: 'Soporte para aulas híbridas' },
      { en: 'Research presentations', es: 'Presentaciones de investigación' },
    ],
    equipment: [
      {
        name: { en: 'Pearl Nexus', es: 'Pearl Nexus' },
        desc: { en: 'Best for lecture halls - 3 inputs, rackmount', es: 'Ideal para auditorios - 3 entradas, rackmount' },
        icon: Monitor,
      },
      {
        name: { en: 'EC20 PTZ Camera', es: 'Cámara PTZ EC20' },
        desc: { en: 'Auto-tracking for professors', es: 'Seguimiento automático de profesores' },
        icon: Camera,
      },
      {
        name: { en: 'Epiphan Cloud', es: 'Epiphan Cloud' },
        desc: { en: 'Schedule recordings by class calendar', es: 'Programa grabaciones por calendario' },
        icon: Cloud,
      },
    ],
    pricing: { en: 'From $75 USD/room/month', es: 'Desde $75 USD/sala/mes' },
  },
  k12: {
    icon: BookOpen,
    color: 'from-green-500 to-emerald-400',
    useCases: [
      { en: 'School plays and performances', es: 'Obras de teatro y presentaciones' },
      { en: 'Sports events', es: 'Eventos deportivos' },
      { en: 'Parent broadcasts', es: 'Transmisiones para padres' },
      { en: 'Award ceremonies', es: 'Ceremonias de premiación' },
      { en: 'Board meetings', es: 'Reuniones de consejo' },
    ],
    equipment: [
      {
        name: { en: 'Pearl Mini', es: 'Pearl Mini' },
        desc: { en: 'Portable for different venues', es: 'Portátil para diferentes lugares' },
        icon: Radio,
      },
      {
        name: { en: 'EC20 PTZ Camera', es: 'Cámara PTZ EC20' },
        desc: { en: 'Easy to set up, great zoom', es: 'Fácil de instalar, gran zoom' },
        icon: Camera,
      },
    ],
    pricing: { en: 'From $50 USD/device/month', es: 'Desde $50 USD/equipo/mes' },
  },
  corporate: {
    icon: Building2,
    color: 'from-purple-500 to-violet-400',
    useCases: [
      { en: 'Town hall meetings', es: 'Reuniones town hall' },
      { en: 'Training sessions', es: 'Sesiones de capacitación' },
      { en: 'Product launches', es: 'Lanzamientos de productos' },
      { en: 'Internal communications', es: 'Comunicaciones internas' },
      { en: 'Executive briefings', es: 'Briefings ejecutivos' },
    ],
    equipment: [
      {
        name: { en: 'Pearl Nexus', es: 'Pearl Nexus' },
        desc: { en: 'Professional boardroom setup', es: 'Configuración profesional para sala de juntas' },
        icon: Monitor,
      },
      {
        name: { en: 'Multiple PTZ Cameras', es: 'Múltiples Cámaras PTZ' },
        desc: { en: 'Cover entire conference rooms', es: 'Cubrir salas de conferencias completas' },
        icon: Camera,
      },
      {
        name: { en: 'Epiphan Cloud', es: 'Epiphan Cloud' },
        desc: { en: 'Remote management for IT teams', es: 'Gestión remota para equipos de TI' },
        icon: Cloud,
      },
    ],
    pricing: { en: 'From $75 USD/room/month', es: 'Desde $75 USD/sala/mes' },
  },
  worship: {
    icon: Church,
    color: 'from-amber-500 to-yellow-400',
    useCases: [
      { en: 'Weekly service streaming', es: 'Streaming de servicios semanales' },
      { en: 'Multi-campus broadcasts', es: 'Transmisiones multi-campus' },
      { en: 'Special events (weddings, funerals)', es: 'Eventos especiales (bodas, funerales)' },
      { en: 'Community outreach', es: 'Alcance comunitario' },
      { en: 'Volunteer-friendly operation', es: 'Operación amigable para voluntarios' },
    ],
    equipment: [
      {
        name: { en: 'Pearl Mini', es: 'Pearl Mini' },
        desc: { en: 'Simple for volunteers to operate', es: 'Simple para que los voluntarios operen' },
        icon: Radio,
      },
      {
        name: { en: 'PTZ Camera', es: 'Cámara PTZ' },
        desc: { en: 'Cover stage and congregation', es: 'Cubrir escenario y congregación' },
        icon: Camera,
      },
    ],
    pricing: { en: 'From $50 USD/device/month', es: 'Desde $50 USD/equipo/mes' },
  },
  legal: {
    icon: Scale,
    color: 'from-slate-500 to-gray-400',
    useCases: [
      { en: 'Depositions', es: 'Deposiciones' },
      { en: 'Court hearings', es: 'Audiencias judiciales' },
      { en: 'Remote testimony', es: 'Testimonio remoto' },
      { en: 'Secure archives', es: 'Archivos seguros' },
      { en: 'Evidence recording', es: 'Grabación de evidencia' },
    ],
    equipment: [
      {
        name: { en: 'Pearl Nexus', es: 'Pearl Nexus' },
        desc: { en: 'Secure, reliable recording', es: 'Grabación segura y confiable' },
        icon: Monitor,
      },
      {
        name: { en: 'Fixed Cameras', es: 'Cámaras Fijas' },
        desc: { en: 'Multiple angles for evidence', es: 'Múltiples ángulos para evidencia' },
        icon: Camera,
      },
      {
        name: { en: 'Local Storage', es: 'Almacenamiento Local' },
        desc: { en: 'Secure on-premise recording', es: 'Grabación segura en sitio' },
        icon: Monitor,
      },
    ],
    pricing: { en: 'Custom pricing', es: 'Precio personalizado' },
  },
  events: {
    icon: Music,
    color: 'from-pink-500 to-rose-400',
    useCases: [
      { en: 'Multi-day conferences', es: 'Conferencias de varios días' },
      { en: 'Trade shows', es: 'Ferias comerciales' },
      { en: 'Galas and fundraisers', es: 'Galas y recaudaciones' },
      { en: 'Live switching', es: 'Switching en vivo' },
      { en: 'Instant replay', es: 'Repetición instantánea' },
    ],
    equipment: [
      {
        name: { en: 'Pearl Nexus', es: 'Pearl Nexus' },
        desc: { en: 'Multi-camera switching', es: 'Switching multi-cámara' },
        icon: Monitor,
      },
      {
        name: { en: 'Multiple PTZ Cameras', es: 'Múltiples Cámaras PTZ' },
        desc: { en: 'Cover all event areas', es: 'Cubrir todas las áreas del evento' },
        icon: Camera,
      },
      {
        name: { en: 'Pearl Mini (backup)', es: 'Pearl Mini (respaldo)' },
        desc: { en: 'Redundancy for critical events', es: 'Redundancia para eventos críticos' },
        icon: Radio,
      },
    ],
    pricing: { en: 'From $5,000 MXN/event', es: 'Desde $5,000 MXN/evento' },
  },
  healthcare: {
    icon: Stethoscope,
    color: 'from-red-500 to-orange-400',
    useCases: [
      { en: 'Medical training', es: 'Capacitación médica' },
      { en: 'Surgical recording', es: 'Grabación de cirugías' },
      { en: 'Telemedicine', es: 'Telemedicina' },
      { en: 'CME presentations', es: 'Presentaciones CME' },
      { en: 'Patient education', es: 'Educación al paciente' },
    ],
    equipment: [
      {
        name: { en: 'Pearl Nexus', es: 'Pearl Nexus' },
        desc: { en: 'HIPAA-ready secure recording', es: 'Grabación segura lista para HIPAA' },
        icon: Monitor,
      },
      {
        name: { en: 'Medical-grade Cameras', es: 'Cámaras de Grado Médico' },
        desc: { en: 'High detail for procedures', es: 'Alto detalle para procedimientos' },
        icon: Camera,
      },
    ],
    pricing: { en: 'Custom pricing', es: 'Precio personalizado' },
  },
  government: {
    icon: Landmark,
    color: 'from-indigo-500 to-blue-400',
    useCases: [
      { en: 'Council meetings', es: 'Reuniones de consejo' },
      { en: 'Public hearings', es: 'Audiencias públicas' },
      { en: 'Transparency archives', es: 'Archivos de transparencia' },
      { en: 'Press conferences', es: 'Conferencias de prensa' },
      { en: 'Inter-agency meetings', es: 'Reuniones inter-agencias' },
    ],
    equipment: [
      {
        name: { en: 'Pearl Nexus', es: 'Pearl Nexus' },
        desc: { en: 'Permanent installation', es: 'Instalación permanente' },
        icon: Monitor,
      },
      {
        name: { en: 'Multiple Fixed Cameras', es: 'Múltiples Cámaras Fijas' },
        desc: { en: 'Cover all participants', es: 'Cubrir a todos los participantes' },
        icon: Camera,
      },
      {
        name: { en: 'Epiphan Cloud', es: 'Epiphan Cloud' },
        desc: { en: 'Auto-publish to transparency portal', es: 'Auto-publicar en portal de transparencia' },
        icon: Cloud,
      },
    ],
    pricing: { en: 'From $75 USD/room/month', es: 'Desde $75 USD/sala/mes' },
  },
  broadcast: {
    icon: Tv,
    color: 'from-cyan-500 to-teal-400',
    useCases: [
      { en: 'Studio production', es: 'Producción de estudio' },
      { en: 'News broadcasts', es: 'Transmisiones de noticias' },
      { en: 'Live programming', es: 'Programación en vivo' },
      { en: 'Remote feeds', es: 'Feeds remotos' },
      { en: 'Multi-platform streaming', es: 'Streaming multi-plataforma' },
    ],
    equipment: [
      {
        name: { en: 'Pearl Nexus (multiple)', es: 'Pearl Nexus (múltiples)' },
        desc: { en: 'Production-grade encoding', es: 'Encoding de grado producción' },
        icon: Monitor,
      },
      {
        name: { en: 'Professional Cameras', es: 'Cámaras Profesionales' },
        desc: { en: 'Broadcast quality', es: 'Calidad de transmisión' },
        icon: Camera,
      },
      {
        name: { en: 'Epiphan Cloud', es: 'Epiphan Cloud' },
        desc: { en: 'Fleet management', es: 'Gestión de flota' },
        icon: Cloud,
      },
    ],
    pricing: { en: 'Custom pricing', es: 'Precio personalizado' },
  },
  nonprofit: {
    icon: Users,
    color: 'from-emerald-500 to-green-400',
    useCases: [
      { en: 'Donor events', es: 'Eventos para donantes' },
      { en: 'Awareness campaigns', es: 'Campañas de concientización' },
      { en: 'Virtual fundraisers', es: 'Recaudaciones virtuales' },
      { en: 'Board meetings', es: 'Reuniones de consejo' },
      { en: 'Impact videos', es: 'Videos de impacto' },
    ],
    equipment: [
      {
        name: { en: 'Pearl Mini', es: 'Pearl Mini' },
        desc: { en: 'Budget-friendly, portable', es: 'Económico, portátil' },
        icon: Radio,
      },
      {
        name: { en: 'PTZ Camera', es: 'Cámara PTZ' },
        desc: { en: 'Versatile for different events', es: 'Versátil para diferentes eventos' },
        icon: Camera,
      },
    ],
    pricing: { en: 'From $50 USD/device/month', es: 'Desde $50 USD/equipo/mes' },
  },
}

export function VerticalDetail({ verticalKey, onClose }: VerticalDetailProps) {
  const { t, lang } = useLanguage()

  if (!verticalKey) return null

  const data = verticalData[verticalKey]
  if (!data) return null

  const Icon = data.icon

  const verticalNames: Record<string, { en: string; es: string }> = {
    universities: { en: 'Universities', es: 'Universidades' },
    k12: { en: 'K-12 Schools', es: 'Escuelas K-12' },
    corporate: { en: 'Corporate', es: 'Corporativo' },
    worship: { en: 'Houses of Worship', es: 'Iglesias' },
    legal: { en: 'Legal / Courts', es: 'Legal / Juzgados' },
    events: { en: 'Events & Conferences', es: 'Eventos y Conferencias' },
    healthcare: { en: 'Healthcare', es: 'Salud' },
    government: { en: 'Government', es: 'Gobierno' },
    broadcast: { en: 'Broadcast', es: 'Broadcast' },
    nonprofit: { en: 'Non-Profits', es: 'Sin Fines de Lucro' },
  }

  return (
    <Modal isOpen={!!verticalKey} onClose={onClose}>
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${data.color} flex items-center justify-center`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{verticalNames[verticalKey][lang]}</h2>
            <Badge variant="cyan">{data.pricing[lang]}</Badge>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-thk-cyan uppercase tracking-wider mb-4">
            {lang === 'es' ? 'Casos de Uso' : 'Use Cases'}
          </h3>
          <ul className="space-y-2">
            {data.useCases.map((useCase, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                {useCase[lang]}
              </li>
            ))}
          </ul>
        </div>

        {/* Recommended Equipment */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-thk-cyan uppercase tracking-wider mb-4">
            {lang === 'es' ? 'Equipo Recomendado' : 'Recommended Equipment'}
          </h3>
          <div className="space-y-3">
            {data.equipment.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-xl bg-navy border border-blue-500/10"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-thk-cyan" />
                </div>
                <div>
                  <div className="font-medium">{item.name[lang]}</div>
                  <div className="text-sm text-slate-500">{item.desc[lang]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button className="flex-1" asChild>
            <a href="#contact">
              {lang === 'es' ? 'Solicitar Cotización' : 'Request Quote'} <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button variant="outline" onClick={onClose}>
            {lang === 'es' ? 'Cerrar' : 'Close'}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
