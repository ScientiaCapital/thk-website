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

type T4 = { en: string; es: string; zh: string; ru: string }

interface VerticalData {
  icon: LucideIcon
  color: string
  useCases: T4[]
  equipment: {
    name: T4
    desc: T4
    icon: LucideIcon
  }[]
  pricing: T4
}

const verticalData: Record<string, VerticalData> = {
  universities: {
    icon: GraduationCap,
    color: 'from-blue-500 to-cyan-400',
    useCases: [
      { en: 'Automated lecture capture', es: 'Captura automática de clases', zh: '自动课程录制', ru: 'Автоматическая запись лекций' },
      { en: 'Graduation livestreaming', es: 'Streaming de graduaciones', zh: '毕业典礼直播', ru: 'Трансляция выпускных' },
      { en: 'LMS integration (Canvas, Blackboard)', es: 'Integración LMS (Canvas, Blackboard)', zh: 'LMS 集成 (Canvas, Blackboard)', ru: 'Интеграция с LMS (Canvas, Blackboard)' },
      { en: 'Hybrid classroom support', es: 'Soporte para aulas híbridas', zh: '混合教室支持', ru: 'Поддержка гибридных аудиторий' },
      { en: 'Research presentations', es: 'Presentaciones de investigación', zh: '研究报告录制', ru: 'Исследовательские презентации' },
    ],
    equipment: [
      {
        name: { en: 'Pearl Nexus', es: 'Pearl Nexus', zh: 'Pearl Nexus', ru: 'Pearl Nexus' },
        desc: { en: 'Best for lecture halls - 3 inputs, rackmount', es: 'Ideal para auditorios - 3 entradas, rackmount', zh: '最适合大教室 - 3路输入，机架式', ru: 'Для лекционных залов - 3 входа, стоечный' },
        icon: Monitor,
      },
      {
        name: { en: 'EC20 PTZ Camera', es: 'Cámara PTZ EC20', zh: 'EC20 PTZ 摄像机', ru: 'PTZ-камера EC20' },
        desc: { en: 'Auto-tracking for professors', es: 'Seguimiento automático de profesores', zh: '自动追踪教授', ru: 'Автотрекинг преподавателя' },
        icon: Camera,
      },
      {
        name: { en: 'Epiphan Cloud', es: 'Epiphan Cloud', zh: 'Epiphan Cloud', ru: 'Epiphan Cloud' },
        desc: { en: 'Schedule recordings by class calendar', es: 'Programa grabaciones por calendario', zh: '按课程表安排录制', ru: 'Планирование записей по расписанию' },
        icon: Cloud,
      },
    ],
    pricing: { en: 'From $75 USD/room/month', es: 'Desde $75 USD/sala/mes', zh: '每教室每月 $75 美元起', ru: 'От $75 USD/аудитория/месяц' },
  },
  k12: {
    icon: BookOpen,
    color: 'from-green-500 to-emerald-400',
    useCases: [
      { en: 'School plays and performances', es: 'Obras de teatro y presentaciones', zh: '校园演出和表演', ru: 'Школьные спектакли и концерты' },
      { en: 'Sports events', es: 'Eventos deportivos', zh: '体育赛事', ru: 'Спортивные мероприятия' },
      { en: 'Parent broadcasts', es: 'Transmisiones para padres', zh: '家长直播', ru: 'Трансляции для родителей' },
      { en: 'Award ceremonies', es: 'Ceremonias de premiación', zh: '颁奖典礼', ru: 'Церемонии награждения' },
      { en: 'Board meetings', es: 'Reuniones de consejo', zh: '董事会会议', ru: 'Заседания совета' },
    ],
    equipment: [
      {
        name: { en: 'Pearl Mini', es: 'Pearl Mini', zh: 'Pearl Mini', ru: 'Pearl Mini' },
        desc: { en: 'Portable for different venues', es: 'Portátil para diferentes lugares', zh: '便携式，适用于不同场地', ru: 'Портативный для разных площадок' },
        icon: Radio,
      },
      {
        name: { en: 'EC20 PTZ Camera', es: 'Cámara PTZ EC20', zh: 'EC20 PTZ 摄像机', ru: 'PTZ-камера EC20' },
        desc: { en: 'Easy to set up, great zoom', es: 'Fácil de instalar, gran zoom', zh: '易于安装，出色变焦', ru: 'Простая установка, отличный зум' },
        icon: Camera,
      },
    ],
    pricing: { en: 'From $50 USD/device/month', es: 'Desde $50 USD/equipo/mes', zh: '每设备每月 $50 美元起', ru: 'От $50 USD/устройство/месяц' },
  },
  corporate: {
    icon: Building2,
    color: 'from-purple-500 to-violet-400',
    useCases: [
      { en: 'Town hall meetings', es: 'Reuniones town hall', zh: '全体员工大会', ru: 'Общие собрания' },
      { en: 'Training sessions', es: 'Sesiones de capacitación', zh: '培训课程', ru: 'Тренинги' },
      { en: 'Product launches', es: 'Lanzamientos de productos', zh: '产品发布', ru: 'Запуски продуктов' },
      { en: 'Internal communications', es: 'Comunicaciones internas', zh: '内部沟通', ru: 'Внутренние коммуникации' },
      { en: 'Executive briefings', es: 'Briefings ejecutivos', zh: '高管简报', ru: 'Брифинги руководства' },
    ],
    equipment: [
      {
        name: { en: 'Pearl Nexus', es: 'Pearl Nexus', zh: 'Pearl Nexus', ru: 'Pearl Nexus' },
        desc: { en: 'Professional boardroom setup', es: 'Configuración profesional para sala de juntas', zh: '专业会议室配置', ru: 'Профессиональная установка в переговорной' },
        icon: Monitor,
      },
      {
        name: { en: 'Multiple PTZ Cameras', es: 'Múltiples Cámaras PTZ', zh: '多台 PTZ 摄像机', ru: 'Несколько PTZ-камер' },
        desc: { en: 'Cover entire conference rooms', es: 'Cubrir salas de conferencias completas', zh: '覆盖整个会议室', ru: 'Охват всего конференц-зала' },
        icon: Camera,
      },
      {
        name: { en: 'Epiphan Cloud', es: 'Epiphan Cloud', zh: 'Epiphan Cloud', ru: 'Epiphan Cloud' },
        desc: { en: 'Remote management for IT teams', es: 'Gestión remota para equipos de TI', zh: 'IT 团队远程管理', ru: 'Удалённое управление для IT-команд' },
        icon: Cloud,
      },
    ],
    pricing: { en: 'From $75 USD/room/month', es: 'Desde $75 USD/sala/mes', zh: '每会议室每月 $75 美元起', ru: 'От $75 USD/комната/месяц' },
  },
  worship: {
    icon: Church,
    color: 'from-amber-500 to-yellow-400',
    useCases: [
      { en: 'Weekly service streaming', es: 'Streaming de servicios semanales', zh: '每周礼拜直播', ru: 'Еженедельные трансляции служб' },
      { en: 'Multi-campus broadcasts', es: 'Transmisiones multi-campus', zh: '多场所广播', ru: 'Трансляции на несколько площадок' },
      { en: 'Special events (weddings, funerals)', es: 'Eventos especiales (bodas, funerales)', zh: '特别活动（婚礼、葬礼）', ru: 'Особые мероприятия (свадьбы, похороны)' },
      { en: 'Community outreach', es: 'Alcance comunitario', zh: '社区外展', ru: 'Общественные мероприятия' },
      { en: 'Volunteer-friendly operation', es: 'Operación amigable para voluntarios', zh: '志愿者友好操作', ru: 'Простое управление для волонтёров' },
    ],
    equipment: [
      {
        name: { en: 'Pearl Mini', es: 'Pearl Mini', zh: 'Pearl Mini', ru: 'Pearl Mini' },
        desc: { en: 'Simple for volunteers to operate', es: 'Simple para que los voluntarios operen', zh: '志愿者轻松操作', ru: 'Простое управление для волонтёров' },
        icon: Radio,
      },
      {
        name: { en: 'PTZ Camera', es: 'Cámara PTZ', zh: 'PTZ 摄像机', ru: 'PTZ-камера' },
        desc: { en: 'Cover stage and congregation', es: 'Cubrir escenario y congregación', zh: '覆盖舞台和会众', ru: 'Охват сцены и зала' },
        icon: Camera,
      },
    ],
    pricing: { en: 'From $50 USD/device/month', es: 'Desde $50 USD/equipo/mes', zh: '每设备每月 $50 美元起', ru: 'От $50 USD/устройство/месяц' },
  },
  legal: {
    icon: Scale,
    color: 'from-slate-500 to-gray-400',
    useCases: [
      { en: 'Depositions', es: 'Deposiciones', zh: '证词录制', ru: 'Показания' },
      { en: 'Court hearings', es: 'Audiencias judiciales', zh: '法庭听证', ru: 'Судебные слушания' },
      { en: 'Remote testimony', es: 'Testimonio remoto', zh: '远程证词', ru: 'Удалённые показания' },
      { en: 'Secure archives', es: 'Archivos seguros', zh: '安全存档', ru: 'Защищённые архивы' },
      { en: 'Evidence recording', es: 'Grabación de evidencia', zh: '证据录制', ru: 'Запись доказательств' },
    ],
    equipment: [
      {
        name: { en: 'Pearl Nexus', es: 'Pearl Nexus', zh: 'Pearl Nexus', ru: 'Pearl Nexus' },
        desc: { en: 'Secure, reliable recording', es: 'Grabación segura y confiable', zh: '安全可靠的录制', ru: 'Надёжная защищённая запись' },
        icon: Monitor,
      },
      {
        name: { en: 'Fixed Cameras', es: 'Cámaras Fijas', zh: '固定摄像机', ru: 'Фиксированные камеры' },
        desc: { en: 'Multiple angles for evidence', es: 'Múltiples ángulos para evidencia', zh: '多角度证据采集', ru: 'Несколько ракурсов для доказательств' },
        icon: Camera,
      },
      {
        name: { en: 'Local Storage', es: 'Almacenamiento Local', zh: '本地存储', ru: 'Локальное хранилище' },
        desc: { en: 'Secure on-premise recording', es: 'Grabación segura en sitio', zh: '安全的本地录制', ru: 'Безопасная запись на месте' },
        icon: Monitor,
      },
    ],
    pricing: { en: 'Custom pricing', es: 'Precio personalizado', zh: '定制报价', ru: 'Индивидуальная цена' },
  },
  events: {
    icon: Music,
    color: 'from-pink-500 to-rose-400',
    useCases: [
      { en: 'Multi-day conferences', es: 'Conferencias de varios días', zh: '多日会议', ru: 'Многодневные конференции' },
      { en: 'Trade shows', es: 'Ferias comerciales', zh: '展览会', ru: 'Выставки' },
      { en: 'Galas and fundraisers', es: 'Galas y recaudaciones', zh: '晚宴和募捐活动', ru: 'Торжества и благотворительные вечера' },
      { en: 'Live switching', es: 'Switching en vivo', zh: '实时切换', ru: 'Живое переключение' },
      { en: 'Instant replay', es: 'Repetición instantánea', zh: '即时回放', ru: 'Мгновенный повтор' },
    ],
    equipment: [
      {
        name: { en: 'Pearl Nexus', es: 'Pearl Nexus', zh: 'Pearl Nexus', ru: 'Pearl Nexus' },
        desc: { en: 'Multi-camera switching', es: 'Switching multi-cámara', zh: '多机位切换', ru: 'Многокамерное переключение' },
        icon: Monitor,
      },
      {
        name: { en: 'Multiple PTZ Cameras', es: 'Múltiples Cámaras PTZ', zh: '多台 PTZ 摄像机', ru: 'Несколько PTZ-камер' },
        desc: { en: 'Cover all event areas', es: 'Cubrir todas las áreas del evento', zh: '覆盖所有活动区域', ru: 'Охват всех зон мероприятия' },
        icon: Camera,
      },
      {
        name: { en: 'Pearl Mini (backup)', es: 'Pearl Mini (respaldo)', zh: 'Pearl Mini（备用）', ru: 'Pearl Mini (резерв)' },
        desc: { en: 'Redundancy for critical events', es: 'Redundancia para eventos críticos', zh: '关键活动的冗余备份', ru: 'Резервирование для важных мероприятий' },
        icon: Radio,
      },
    ],
    pricing: { en: 'From $5,000 MXN/event', es: 'Desde $5,000 MXN/evento', zh: '每场活动 $5,000 墨西哥比索起', ru: 'От $5,000 MXN/мероприятие' },
  },
  healthcare: {
    icon: Stethoscope,
    color: 'from-red-500 to-orange-400',
    useCases: [
      { en: 'Medical training', es: 'Capacitación médica', zh: '医学培训', ru: 'Медицинское обучение' },
      { en: 'Surgical recording', es: 'Grabación de cirugías', zh: '手术录制', ru: 'Запись операций' },
      { en: 'Telemedicine', es: 'Telemedicina', zh: '远程医疗', ru: 'Телемедицина' },
      { en: 'CME presentations', es: 'Presentaciones CME', zh: 'CME 演示', ru: 'Презентации CME' },
      { en: 'Patient education', es: 'Educación al paciente', zh: '患者教育', ru: 'Обучение пациентов' },
    ],
    equipment: [
      {
        name: { en: 'Pearl Nexus', es: 'Pearl Nexus', zh: 'Pearl Nexus', ru: 'Pearl Nexus' },
        desc: { en: 'HIPAA-ready secure recording', es: 'Grabación segura lista para HIPAA', zh: '符合 HIPAA 的安全录制', ru: 'Запись с поддержкой HIPAA' },
        icon: Monitor,
      },
      {
        name: { en: 'Medical-grade Cameras', es: 'Cámaras de Grado Médico', zh: '医疗级摄像机', ru: 'Камеры медицинского класса' },
        desc: { en: 'High detail for procedures', es: 'Alto detalle para procedimientos', zh: '手术过程的高清细节', ru: 'Высокая детализация для процедур' },
        icon: Camera,
      },
    ],
    pricing: { en: 'Custom pricing', es: 'Precio personalizado', zh: '定制报价', ru: 'Индивидуальная цена' },
  },
  government: {
    icon: Landmark,
    color: 'from-indigo-500 to-blue-400',
    useCases: [
      { en: 'Council meetings', es: 'Reuniones de consejo', zh: '议会会议', ru: 'Заседания совета' },
      { en: 'Public hearings', es: 'Audiencias públicas', zh: '公开听证', ru: 'Публичные слушания' },
      { en: 'Transparency archives', es: 'Archivos de transparencia', zh: '透明度档案', ru: 'Архивы прозрачности' },
      { en: 'Press conferences', es: 'Conferencias de prensa', zh: '新闻发布会', ru: 'Пресс-конференции' },
      { en: 'Inter-agency meetings', es: 'Reuniones inter-agencias', zh: '跨部门会议', ru: 'Межведомственные совещания' },
    ],
    equipment: [
      {
        name: { en: 'Pearl Nexus', es: 'Pearl Nexus', zh: 'Pearl Nexus', ru: 'Pearl Nexus' },
        desc: { en: 'Permanent installation', es: 'Instalación permanente', zh: '永久安装', ru: 'Постоянная установка' },
        icon: Monitor,
      },
      {
        name: { en: 'Multiple Fixed Cameras', es: 'Múltiples Cámaras Fijas', zh: '多台固定摄像机', ru: 'Несколько фиксированных камер' },
        desc: { en: 'Cover all participants', es: 'Cubrir a todos los participantes', zh: '覆盖所有参与者', ru: 'Охват всех участников' },
        icon: Camera,
      },
      {
        name: { en: 'Epiphan Cloud', es: 'Epiphan Cloud', zh: 'Epiphan Cloud', ru: 'Epiphan Cloud' },
        desc: { en: 'Auto-publish to transparency portal', es: 'Auto-publicar en portal de transparencia', zh: '自动发布到透明度门户', ru: 'Автопубликация на портал прозрачности' },
        icon: Cloud,
      },
    ],
    pricing: { en: 'From $75 USD/room/month', es: 'Desde $75 USD/sala/mes', zh: '每会议室每月 $75 美元起', ru: 'От $75 USD/комната/месяц' },
  },
  broadcast: {
    icon: Tv,
    color: 'from-cyan-500 to-teal-400',
    useCases: [
      { en: 'Studio production', es: 'Producción de estudio', zh: '演播室制作', ru: 'Студийное производство' },
      { en: 'News broadcasts', es: 'Transmisiones de noticias', zh: '新闻广播', ru: 'Новостные передачи' },
      { en: 'Live programming', es: 'Programación en vivo', zh: '现场节目', ru: 'Прямой эфир' },
      { en: 'Remote feeds', es: 'Feeds remotos', zh: '远程信号源', ru: 'Удалённые каналы' },
      { en: 'Multi-platform streaming', es: 'Streaming multi-plataforma', zh: '多平台直播', ru: 'Мультиплатформенный стриминг' },
    ],
    equipment: [
      {
        name: { en: 'Pearl Nexus (multiple)', es: 'Pearl Nexus (múltiples)', zh: 'Pearl Nexus（多台）', ru: 'Pearl Nexus (несколько)' },
        desc: { en: 'Production-grade encoding', es: 'Encoding de grado producción', zh: '制作级编码', ru: 'Кодирование продакшн-класса' },
        icon: Monitor,
      },
      {
        name: { en: 'Professional Cameras', es: 'Cámaras Profesionales', zh: '专业摄像机', ru: 'Профессиональные камеры' },
        desc: { en: 'Broadcast quality', es: 'Calidad de transmisión', zh: '广播级画质', ru: 'Вещательное качество' },
        icon: Camera,
      },
      {
        name: { en: 'Epiphan Cloud', es: 'Epiphan Cloud', zh: 'Epiphan Cloud', ru: 'Epiphan Cloud' },
        desc: { en: 'Fleet management', es: 'Gestión de flota', zh: '设备群管理', ru: 'Управление парком устройств' },
        icon: Cloud,
      },
    ],
    pricing: { en: 'Custom pricing', es: 'Precio personalizado', zh: '定制报价', ru: 'Индивидуальная цена' },
  },
  nonprofit: {
    icon: Users,
    color: 'from-emerald-500 to-green-400',
    useCases: [
      { en: 'Donor events', es: 'Eventos para donantes', zh: '捐赠者活动', ru: 'Мероприятия для доноров' },
      { en: 'Awareness campaigns', es: 'Campañas de concientización', zh: '公益宣传', ru: 'Информационные кампании' },
      { en: 'Virtual fundraisers', es: 'Recaudaciones virtuales', zh: '虚拟募捐', ru: 'Виртуальный сбор средств' },
      { en: 'Board meetings', es: 'Reuniones de consejo', zh: '董事会会议', ru: 'Заседания правления' },
      { en: 'Impact videos', es: 'Videos de impacto', zh: '影响力视频', ru: 'Видео о результатах' },
    ],
    equipment: [
      {
        name: { en: 'Pearl Mini', es: 'Pearl Mini', zh: 'Pearl Mini', ru: 'Pearl Mini' },
        desc: { en: 'Budget-friendly, portable', es: 'Económico, portátil', zh: '经济实惠，便携', ru: 'Бюджетный, портативный' },
        icon: Radio,
      },
      {
        name: { en: 'PTZ Camera', es: 'Cámara PTZ', zh: 'PTZ 摄像机', ru: 'PTZ-камера' },
        desc: { en: 'Versatile for different events', es: 'Versátil para diferentes eventos', zh: '适用于各类活动', ru: 'Универсальная для разных мероприятий' },
        icon: Camera,
      },
    ],
    pricing: { en: 'From $50 USD/device/month', es: 'Desde $50 USD/equipo/mes', zh: '每设备每月 $50 美元起', ru: 'От $50 USD/устройство/месяц' },
  },
}

const labels = {
  useCases: { en: 'Use Cases', es: 'Casos de Uso', zh: '应用场景', ru: 'Сценарии использования' },
  equipment: { en: 'Recommended Equipment', es: 'Equipo Recomendado', zh: '推荐设备', ru: 'Рекомендуемое оборудование' },
  requestQuote: { en: 'Request Quote', es: 'Solicitar Cotización', zh: '请求报价', ru: 'Запросить расценку' },
  close: { en: 'Close', es: 'Cerrar', zh: '关闭', ru: 'Закрыть' },
}

const verticalNames: Record<string, T4> = {
  universities: { en: 'Universities', es: 'Universidades', zh: '高等院校', ru: 'Университеты' },
  k12: { en: 'K-12 Schools', es: 'Escuelas K-12', zh: 'K-12 学校', ru: 'Школы K-12' },
  corporate: { en: 'Corporate', es: 'Corporativo', zh: '企业', ru: 'Корпоративный' },
  worship: { en: 'Houses of Worship', es: 'Iglesias', zh: '宗教场所', ru: 'Религиозные учреждения' },
  legal: { en: 'Legal / Courts', es: 'Legal / Juzgados', zh: '法律/法院', ru: 'Юридический / Суды' },
  events: { en: 'Events & Conferences', es: 'Eventos y Conferencias', zh: '活动与会议', ru: 'Мероприятия и конференции' },
  healthcare: { en: 'Healthcare', es: 'Salud', zh: '医疗', ru: 'Здравоохранение' },
  government: { en: 'Government', es: 'Gobierno', zh: '政府', ru: 'Государственный' },
  broadcast: { en: 'Broadcast', es: 'Broadcast', zh: '广播', ru: 'Вещание' },
  nonprofit: { en: 'Non-Profits', es: 'Sin Fines de Lucro', zh: '非营利组织', ru: 'Некоммерческие' },
}

export function VerticalDetail({ verticalKey, onClose }: VerticalDetailProps) {
  const { lang } = useLanguage()

  if (!verticalKey) return null

  const data = verticalData[verticalKey]
  if (!data) return null

  const Icon = data.icon

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
            {labels.useCases[lang]}
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
            {labels.equipment[lang]}
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
              {labels.requestQuote[lang]} <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button variant="outline" onClick={onClose}>
            {labels.close[lang]}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
