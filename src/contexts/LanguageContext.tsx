import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navbar
    'nav.managed': 'Managed AV',
    'nav.production': 'Production',
    'nav.equipment': 'Equipment',
    'nav.industries': 'Industries',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.quote': 'Get a Quote',

    // Hero
    'hero.badge': 'Managed Video Infrastructure for Every Industry',
    'hero.title.1': 'Professional',
    'hero.title.2': 'video infrastructure',
    'hero.title.3': 'for universities, healthcare, corporations, government, and beyond —',
    'hero.title.4': 'never miss a moment',
    'hero.subtitle': 'THK deploys Epiphan Pearl encoders and manages them 24/7 from Mexico City. From lecture capture to corporate town halls, courtroom recordings to live events — we serve 10+ industries with enterprise-grade video at a fraction of the cost.',
    'hero.cta.industries': 'Explore Industries',
    'hero.cta.services': 'View Services',
    'hero.cta.quote': 'Get a Quote',

    // Stats
    'stats.industries': 'Industries Served',
    'stats.uptime': 'Uptime SLA',
    'stats.monitoring': 'Cloud Monitoring',
    'stats.price': 'USD / Mo / Device',

    // How It Works
    'how.tag': 'How It Works',
    'how.title': 'From Zero to Streaming in 4 Simple Steps',
    'how.subtitle': 'We handle everything so you can focus on your mission.',
    'how.step1.title': 'Ship & Install',
    'how.step1.desc': 'We ship pre-configured Epiphan Pearl encoders to your location. Simple plug-and-play setup.',
    'how.step2.title': 'Connect & Configure',
    'how.step2.desc': 'Connect to your network and we remotely configure everything: inputs, streaming destinations, schedules.',
    'how.step3.title': 'Monitor 24/7',
    'how.step3.desc': 'Our Mexico City team monitors your equipment around the clock with AI-powered quality checks.',
    'how.step4.title': 'Scale & Grow',
    'how.step4.desc': 'Add more locations anytime. Same flat rate, same quality, same support.',

    // Managed Services
    'managed.tag': 'Managed Services',
    'managed.title': 'Video Infrastructure as a Service',
    'managed.subtitle': 'Enterprise-grade video infrastructure without the enterprise price tag.',

    // Event Production
    'event.tag': 'Event Production',
    'event.title': 'Professional Video Production Services',
    'event.subtitle': 'From live events to polished productions, we bring broadcast quality to every project.',

    // Equipment
    'equipment.tag': 'Our Stack',
    'equipment.title': 'Enterprise-Grade Equipment',
    'equipment.subtitle': 'We deploy and manage professional Epiphan hardware trusted by Fortune 500 companies.',

    // Verticals
    'verticals.tag': 'Industries We Serve',
    'verticals.title': 'Built for Organizations That Cannot Afford to Miss a Moment',
    'verticals.subtitle': 'We serve organizations that need reliable video but don\'t have the budget for a full-time AV team.',
    'verticals.universities': 'Universities',
    'verticals.universities.desc': 'Automated lecture capture and graduation streaming',
    'verticals.k12': 'K-12 Schools',
    'verticals.k12.desc': 'School events and parent broadcasts',
    'verticals.corporate': 'Corporate',
    'verticals.corporate.desc': 'Town halls, training, and product launches',
    'verticals.worship': 'Houses of Worship',
    'verticals.worship.desc': 'Weekly service streaming and community broadcasts',
    'verticals.legal': 'Legal / Courts',
    'verticals.legal.desc': 'Depositions, hearings, and secure recordings',
    'verticals.events': 'Events & Conferences',
    'verticals.events.desc': 'Multi-day conferences, galas, and trade shows',
    'verticals.healthcare': 'Healthcare',
    'verticals.healthcare.desc': 'Medical training, telemedicine, and procedures',
    'verticals.government': 'Government',
    'verticals.government.desc': 'Public meetings, council sessions, and archives',
    'verticals.broadcast': 'Broadcast',
    'verticals.broadcast.desc': 'Studio production and live programming',
    'verticals.nonprofit': 'Non-Profits',
    'verticals.nonprofit.desc': 'Donor events and awareness campaigns',

    // Why THK
    'why.tag': 'Why THK',
    'why.title': 'The Unfair Advantage of Managed Video Infrastructure',
    'why.subtitle': 'We combine enterprise-grade hardware with modern cloud management and AI-powered operations.',
    'why.cost.title': 'Fraction of the Cost',
    'why.cost.desc': '$50-75/month per device vs. $50,000/year for a full-time AV tech.',
    'why.trilingual.title': 'Trilingual Support',
    'why.trilingual.desc': 'English, Spanish, and Mandarin support for global organizations.',
    'why.uptime.title': 'Zero Downtime',
    'why.uptime.desc': '99.9% uptime SLA backed by 24/7 monitoring and proactive alerts.',
    'why.managed.title': 'Fully Managed',
    'why.managed.desc': 'We handle scheduling, firmware updates, and troubleshooting remotely.',
    'why.ai.title': 'AI-Powered Operations',
    'why.ai.desc': 'Our AI agents monitor quality, detect issues, and alert our team instantly.',
    'why.analytics.title': 'Analytics & Reports',
    'why.analytics.desc': 'Monthly reports on recording success rates, viewer engagement, and usage.',

    // About
    'about.tag': 'About THK',
    'about.title': 'Built Different',
    'about.p1': 'THK Enterprises was founded by Timothy, an 11-year-old entrepreneur in Mexico City who saw a gap in the market: organizations need professional video infrastructure but can\'t afford full-time AV staff.',
    'about.p2': 'We leverage Epiphan\'s enterprise-grade Pearl encoders, cloud management, and our own AI monitoring to deliver broadcast-quality video at a fraction of the traditional cost.',
    'about.p3': 'Our virtual sales assistant (powered by Claude) runs 24/7, so we\'re always available — even when Timothy is at school.',

    // Contact
    'contact.tag': 'Get Started',
    'contact.title': 'Let\'s Work Together',
    'contact.subtitle': 'Ready to eliminate missed recordings? Reach out for a free consultation.',
    'contact.info': 'Contact Information',
    'contact.info.desc': 'Reach out anytime. We are based in Mexico City and deploy equipment throughout the metropolitan area.',
    'contact.location': 'Location',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.availability': 'Availability',
    'contact.availability.value': 'Weekends - US Business Hours',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone / WhatsApp',
    'contact.form.service': 'What do you need?',
    'contact.form.service.select': 'Select a service',
    'contact.form.service.viaas': 'VIaaS - Managed Encoder',
    'contact.form.service.lecture': 'Always-On Lecture Capture',
    'contact.form.service.livestream': 'Multi-Camera Livestreaming',
    'contact.form.service.video': '4K Video Production',
    'contact.form.message': 'Tell us about your needs',
    'contact.form.message.placeholder': 'How many rooms/locations? What are you recording?',
    'contact.form.submit': 'Send Message',
    'contact.form.disclaimer': 'Free consultation. We respond within 24 hours. No spam, ever.',

    // Footer
    'footer.rights': 'THK Enterprises. Mexico City. All rights reserved.',
    'footer.epiphan': 'Powered by Epiphan Video',

    // Chat
    'chat.placeholder': 'Ask about our video services...',
    'chat.powered': 'Powered by Claude AI',
  },

  es: {
    // Navbar
    'nav.managed': 'AV Administrado',
    'nav.production': 'Producción',
    'nav.equipment': 'Equipo',
    'nav.industries': 'Industrias',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.quote': 'Cotizar',

    // Hero
    'hero.badge': 'Infraestructura de Video Administrada para Toda Industria',
    'hero.title.1': 'Infraestructura',
    'hero.title.2': 'de video profesional',
    'hero.title.3': 'para universidades, hospitales, corporativos, gobierno y más —',
    'hero.title.4': 'nunca pierdas un momento',
    'hero.subtitle': 'THK instala encoders Epiphan Pearl y los administra 24/7 desde la Ciudad de México. Desde captura de clases hasta juntas corporativas, grabaciones judiciales y eventos en vivo — atendemos más de 10 industrias con video empresarial a una fracción del costo.',
    'hero.cta.industries': 'Ver Industrias',
    'hero.cta.services': 'Ver Servicios',
    'hero.cta.quote': 'Cotizar',

    // Stats
    'stats.industries': 'Industrias Atendidas',
    'stats.uptime': 'SLA de Disponibilidad',
    'stats.monitoring': 'Monitoreo en la Nube',
    'stats.price': 'USD / Mes / Equipo',

    // How It Works
    'how.tag': 'Cómo Funciona',
    'how.title': 'De Cero a Transmitiendo en 4 Simples Pasos',
    'how.subtitle': 'Nosotros nos encargamos de todo para que tú te enfoques en tu misión.',
    'how.step1.title': 'Envío e Instalación',
    'how.step1.desc': 'Enviamos encoders Epiphan Pearl preconfigurados a tu ubicación. Instalación plug-and-play.',
    'how.step2.title': 'Conectar y Configurar',
    'how.step2.desc': 'Conéctalo a tu red y nosotros configuramos todo remotamente: entradas, destinos de streaming, horarios.',
    'how.step3.title': 'Monitoreo 24/7',
    'how.step3.desc': 'Nuestro equipo en CDMX monitorea tu equipo las 24 horas con verificaciones de calidad impulsadas por IA.',
    'how.step4.title': 'Escala y Crece',
    'how.step4.desc': 'Agrega más ubicaciones cuando quieras. Mismo precio, misma calidad, mismo soporte.',

    // Managed Services
    'managed.tag': 'Servicios Administrados',
    'managed.title': 'Infraestructura de Video como Servicio',
    'managed.subtitle': 'Infraestructura de video empresarial sin el precio empresarial.',

    // Event Production
    'event.tag': 'Producción de Eventos',
    'event.title': 'Servicios Profesionales de Producción de Video',
    'event.subtitle': 'Desde eventos en vivo hasta producciones pulidas, llevamos calidad de transmisión a cada proyecto.',

    // Equipment
    'equipment.tag': 'Nuestro Stack',
    'equipment.title': 'Equipo de Grado Empresarial',
    'equipment.subtitle': 'Instalamos y administramos hardware profesional Epiphan usado por empresas Fortune 500.',

    // Verticals
    'verticals.tag': 'Industrias que Atendemos',
    'verticals.title': 'Diseñado para Organizaciones que No Pueden Perder un Momento',
    'verticals.subtitle': 'Atendemos organizaciones que necesitan video confiable pero no tienen presupuesto para un técnico AV de tiempo completo.',
    'verticals.universities': 'Universidades',
    'verticals.universities.desc': 'Captura automática de clases y streaming de graduaciones',
    'verticals.k12': 'Escuelas K-12',
    'verticals.k12.desc': 'Eventos escolares y transmisiones para padres',
    'verticals.corporate': 'Corporativo',
    'verticals.corporate.desc': 'Town halls, capacitación y lanzamientos de productos',
    'verticals.worship': 'Iglesias',
    'verticals.worship.desc': 'Streaming de servicios semanales y transmisiones comunitarias',
    'verticals.legal': 'Legal / Juzgados',
    'verticals.legal.desc': 'Deposiciones, audiencias y grabaciones seguras',
    'verticals.events': 'Eventos y Conferencias',
    'verticals.events.desc': 'Conferencias de varios días, galas y ferias',
    'verticals.healthcare': 'Salud',
    'verticals.healthcare.desc': 'Capacitación médica, telemedicina y procedimientos',
    'verticals.government': 'Gobierno',
    'verticals.government.desc': 'Reuniones públicas, sesiones de consejo y archivos',
    'verticals.broadcast': 'Broadcast',
    'verticals.broadcast.desc': 'Producción de estudio y programación en vivo',
    'verticals.nonprofit': 'Sin Fines de Lucro',
    'verticals.nonprofit.desc': 'Eventos para donantes y campañas de concientización',

    // Why THK
    'why.tag': 'Por Qué THK',
    'why.title': 'La Ventaja Competitiva de la Infraestructura de Video Administrada',
    'why.subtitle': 'Combinamos hardware empresarial con gestión en la nube moderna y operaciones impulsadas por IA.',
    'why.cost.title': 'Fracción del Costo',
    'why.cost.desc': '$50-75/mes por equipo vs. $50,000/año por un técnico AV de tiempo completo.',
    'why.trilingual.title': 'Soporte Trilingüe',
    'why.trilingual.desc': 'Soporte en inglés, español y mandarín para organizaciones globales.',
    'why.uptime.title': 'Cero Tiempo de Inactividad',
    'why.uptime.desc': 'SLA de 99.9% respaldado por monitoreo 24/7 y alertas proactivas.',
    'why.managed.title': 'Completamente Administrado',
    'why.managed.desc': 'Manejamos horarios, actualizaciones de firmware y solución de problemas remotamente.',
    'why.ai.title': 'Operaciones con IA',
    'why.ai.desc': 'Nuestros agentes de IA monitorean calidad, detectan problemas y alertan a nuestro equipo al instante.',
    'why.analytics.title': 'Analíticas y Reportes',
    'why.analytics.desc': 'Reportes mensuales de tasas de grabación exitosa, engagement de viewers y uso.',

    // About
    'about.tag': 'Sobre THK',
    'about.title': 'Construido Diferente',
    'about.p1': 'THK Enterprises fue fundada por Timothy, un emprendedor de 11 años en la Ciudad de México que vio una brecha en el mercado: las organizaciones necesitan infraestructura de video profesional pero no pueden pagar personal AV de tiempo completo.',
    'about.p2': 'Aprovechamos los encoders Pearl de grado empresarial de Epiphan, gestión en la nube y nuestro propio monitoreo con IA para entregar video de calidad de transmisión a una fracción del costo tradicional.',
    'about.p3': 'Nuestro asistente de ventas virtual (impulsado por Claude) funciona 24/7, así que siempre estamos disponibles — incluso cuando Timothy está en la escuela.',

    // Contact
    'contact.tag': 'Empezar',
    'contact.title': 'Trabajemos Juntos',
    'contact.subtitle': '¿Listo para eliminar grabaciones perdidas? Contáctanos para una consulta gratuita.',
    'contact.info': 'Información de Contacto',
    'contact.info.desc': 'Contáctanos cuando quieras. Estamos en la Ciudad de México y desplegamos equipo en toda el área metropolitana.',
    'contact.location': 'Ubicación',
    'contact.email': 'Correo',
    'contact.whatsapp': 'WhatsApp',
    'contact.availability': 'Disponibilidad',
    'contact.availability.value': 'Fines de Semana - Horario de EE.UU.',
    'contact.form.name': 'Nombre Completo',
    'contact.form.email': 'Correo',
    'contact.form.phone': 'Teléfono / WhatsApp',
    'contact.form.service': '¿Qué necesitas?',
    'contact.form.service.select': 'Selecciona un servicio',
    'contact.form.service.viaas': 'VIaaS - Encoder Administrado',
    'contact.form.service.lecture': 'Captura de Clases Siempre Activa',
    'contact.form.service.livestream': 'Livestreaming Multi-Cámara',
    'contact.form.service.video': 'Producción de Video 4K',
    'contact.form.message': 'Cuéntanos sobre tus necesidades',
    'contact.form.message.placeholder': '¿Cuántas salas/ubicaciones? ¿Qué estás grabando?',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.form.disclaimer': 'Consulta gratuita. Respondemos en 24 horas. Sin spam, nunca.',

    // Footer
    'footer.rights': 'THK Enterprises. Ciudad de México. Todos los derechos reservados.',
    'footer.epiphan': 'Impulsado por Epiphan Video',

    // Chat
    'chat.placeholder': 'Pregunta sobre nuestros servicios de video...',
    'chat.powered': 'Impulsado por Claude AI',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[lang][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
