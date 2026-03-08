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
    'hero.subtitle': 'THK is building affordable managed video infrastructure for organizations that need reliable recordings but can\'t afford full-time AV staff. Using Epiphan Pearl encoders and AI-powered monitoring, we\'re making enterprise video accessible.',
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
    'how.title': 'Simple Setup, Reliable Recording',
    'how.subtitle': 'Our goal: make professional video infrastructure accessible to organizations of any size.',
    'how.step1.title': 'Setup',
    'how.step1.desc': 'We help you get Epiphan Pearl encoders configured and connected at your location.',
    'how.step2.title': 'Connect',
    'how.step2.desc': 'Plug in your HDMI sources (laptops, cameras, document cams) and connect to your network.',
    'how.step3.title': 'Monitor',
    'how.step3.desc': 'AI-powered monitoring watches your encoders and alerts us if anything needs attention.',
    'how.step4.title': 'Record',
    'how.step4.desc': 'Focus on your content. The system handles recording, streaming, and archiving.',

    // Managed Services
    'managed.tag': 'Managed AV',
    'managed.title': 'Video Infrastructure as a Service (VIaaS)',
    'managed.subtitle': 'Professional Epiphan encoders at your location, managed remotely.',
    'managed.viaas.title': 'VIaaS - Managed Encoder',
    'managed.viaas.desc': 'We help deploy a Pearl encoder at your location and manage it remotely. Recording, streaming, and monitoring included.',
    'managed.viaas.price': '$50-75 USD',
    'managed.viaas.unit': 'per device/month',
    'managed.lecture.title': 'Lecture Capture',
    'managed.lecture.desc': 'Automated lecture recording with calendar integration. Every class captured, every time.',
    'managed.lecture.price': '$75 USD',
    'managed.lecture.unit': 'per room/month',
    'managed.cloud.title': 'Cloud Management',
    'managed.cloud.desc': 'Epiphan Cloud integration for remote scheduling, monitoring, and firmware updates.',
    'managed.cloud.price': 'Included',
    'managed.cloud.unit': 'with VIaaS',

    // Event Production
    'event.tag': 'Event Production',
    'event.title': 'Professional Video Production',
    'event.subtitle': 'From livestreams to cinematic video, we bring your vision to life.',
    'event.livestream.title': 'Multi-Camera Livestreaming',
    'event.livestream.desc': 'Professional multi-camera switching and encoding for conferences, graduations, and events.',
    'event.livestream.price': 'From $5,000 MXN',
    'event.livestream.unit': 'per event',
    'event.video.title': '4K Video Production',
    'event.video.desc': 'Cinematic video production for commercials, documentaries, and promotional content.',
    'event.video.price': 'From $15,000 MXN',
    'event.video.unit': 'per project',
    'event.social.title': 'Social Media Streaming',
    'event.social.desc': 'Optimized streams for YouTube, Facebook, Instagram, and TikTok.',
    'event.social.price': 'From $3,000 MXN',
    'event.social.unit': 'per event',
    'event.rental.title': 'Equipment Rental',
    'event.rental.desc': 'Pearl encoders, PTZ cameras, and production gear for your team.',
    'event.rental.price': 'From $2,000 MXN',
    'event.rental.unit': 'per day',

    // Equipment
    'equipment.tag': 'Our Equipment',
    'equipment.title': 'Professional-Grade Hardware',
    'equipment.subtitle': 'We use Epiphan Pearl encoders trusted by organizations worldwide.',
    'equipment.nexus.name': 'Epiphan Pearl Nexus',
    'equipment.nexus.desc': '1RU rackmount encoder. 3 HD inputs, H.264/H.265, 1TB SSD, full REST API.',
    'equipment.nexus.badge': 'Rackmount - Fleet-Ready',
    'equipment.mini.name': 'Epiphan Pearl Mini',
    'equipment.mini.desc': 'Portable all-in-one live production system. Multi-source switching, recording, and streaming.',
    'equipment.mini.badge': 'Portable - Event-Ready',
    'equipment.camera.name': 'Epiphan EC20 PTZ Camera',
    'equipment.camera.desc': '4K60 PTZ camera with 20x optical zoom. NDI, SDI, HDMI, and USB output. Advanced AI tracking.',
    'equipment.camera.badge': 'Professional PTZ',
    'equipment.cloud.name': 'Epiphan Cloud',
    'equipment.cloud.desc': 'Cloud management platform. Remote scheduling, firmware updates, health monitoring.',
    'equipment.cloud.badge': '24/7 Cloud Control',
    'equipment.ai.name': 'THK AI Operations',
    'equipment.ai.desc': 'Our AI-powered monitoring agents. Automated quality checks and proactive alerts.',
    'equipment.ai.badge': 'Smart Automation',
    'equipment.ops.name': 'THK Operations Center',
    'equipment.ops.desc': 'Our Mexico City command center. Monitoring, support, and remote management.',
    'equipment.ops.badge': 'Operations HQ',

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
    'why.uptime.title': 'Reliable Recording',
    'why.uptime.desc': 'AI-powered monitoring catches issues before they become problems.',
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
    'contact.info.desc': 'Reach out to discuss your video infrastructure needs. We\'re a startup based in Mexico City ready to help.',
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
    'contact.form.disclaimer': 'Free consultation. We respond as soon as possible. No spam, ever.',
    'contact.form.note': 'Fill out the form and we\'ll get back to you via email.',

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
    'hero.subtitle': 'THK está construyendo infraestructura de video administrada y accesible para organizaciones que necesitan grabaciones confiables pero no pueden pagar personal AV de tiempo completo. Usando encoders Epiphan Pearl y monitoreo con IA, hacemos el video empresarial accesible.',
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
    'how.title': 'Configuración Simple, Grabación Confiable',
    'how.subtitle': 'Nuestra meta: hacer la infraestructura de video profesional accesible para organizaciones de cualquier tamaño.',
    'how.step1.title': 'Configurar',
    'how.step1.desc': 'Te ayudamos a configurar y conectar los encoders Epiphan Pearl en tu ubicación.',
    'how.step2.title': 'Conectar',
    'how.step2.desc': 'Conecta tus fuentes HDMI (laptops, cámaras, documentos) y conéctalas a tu red.',
    'how.step3.title': 'Monitorear',
    'how.step3.desc': 'El monitoreo con IA vigila tus encoders y nos alerta si algo necesita atención.',
    'how.step4.title': 'Grabar',
    'how.step4.desc': 'Enfócate en tu contenido. El sistema maneja la grabación, streaming y archivo.',

    // Managed Services
    'managed.tag': 'AV Administrado',
    'managed.title': 'Infraestructura de Video como Servicio (VIaaS)',
    'managed.subtitle': 'Encoders Epiphan profesionales en tu ubicación, administrados remotamente.',
    'managed.viaas.title': 'VIaaS - Encoder Administrado',
    'managed.viaas.desc': 'Te ayudamos a instalar un encoder Pearl en tu ubicación y lo administramos remotamente. Grabación, streaming y monitoreo incluidos.',
    'managed.viaas.price': '$50-75 USD',
    'managed.viaas.unit': 'por equipo/mes',
    'managed.lecture.title': 'Captura de Clases',
    'managed.lecture.desc': 'Grabación automática de clases con integración de calendario. Cada clase capturada, siempre.',
    'managed.lecture.price': '$75 USD',
    'managed.lecture.unit': 'por sala/mes',
    'managed.cloud.title': 'Gestión en la Nube',
    'managed.cloud.desc': 'Integración con Epiphan Cloud para programación remota, monitoreo y actualizaciones.',
    'managed.cloud.price': 'Incluido',
    'managed.cloud.unit': 'con VIaaS',

    // Event Production
    'event.tag': 'Producción de Eventos',
    'event.title': 'Producción de Video Profesional',
    'event.subtitle': 'Desde livestreams hasta video cinematográfico, damos vida a tu visión.',
    'event.livestream.title': 'Livestreaming Multi-Cámara',
    'event.livestream.desc': 'Switching y encoding profesional multi-cámara para conferencias, graduaciones y eventos.',
    'event.livestream.price': 'Desde $5,000 MXN',
    'event.livestream.unit': 'por evento',
    'event.video.title': 'Producción de Video 4K',
    'event.video.desc': 'Producción de video cinematográfico para comerciales, documentales y contenido promocional.',
    'event.video.price': 'Desde $15,000 MXN',
    'event.video.unit': 'por proyecto',
    'event.social.title': 'Streaming para Redes',
    'event.social.desc': 'Streams optimizados para YouTube, Facebook, Instagram y TikTok.',
    'event.social.price': 'Desde $3,000 MXN',
    'event.social.unit': 'por evento',
    'event.rental.title': 'Renta de Equipo',
    'event.rental.desc': 'Encoders Pearl, cámaras PTZ y equipo de producción para tu equipo.',
    'event.rental.price': 'Desde $2,000 MXN',
    'event.rental.unit': 'por día',

    // Equipment
    'equipment.tag': 'Nuestro Equipo',
    'equipment.title': 'Hardware de Grado Profesional',
    'equipment.subtitle': 'Usamos encoders Epiphan Pearl confiados por organizaciones en todo el mundo.',
    'equipment.nexus.name': 'Epiphan Pearl Nexus',
    'equipment.nexus.desc': 'Encoder rackmount 1RU. 3 entradas HD, H.264/H.265, 1TB SSD, API REST completa.',
    'equipment.nexus.badge': 'Rackmount - Listo para Flota',
    'equipment.mini.name': 'Epiphan Pearl Mini',
    'equipment.mini.desc': 'Sistema portátil de producción en vivo todo-en-uno. Switching multi-fuente, grabación y streaming.',
    'equipment.mini.badge': 'Portátil - Listo para Eventos',
    'equipment.camera.name': 'Epiphan EC20 PTZ Camera',
    'equipment.camera.desc': 'Cámara PTZ 4K60 con zoom óptico 20x. Salida NDI, SDI, HDMI y USB. Tracking con IA.',
    'equipment.camera.badge': 'PTZ Profesional',
    'equipment.cloud.name': 'Epiphan Cloud',
    'equipment.cloud.desc': 'Plataforma de gestión en la nube. Programación remota, actualizaciones, monitoreo de salud.',
    'equipment.cloud.badge': 'Control 24/7 en la Nube',
    'equipment.ai.name': 'THK AI Operations',
    'equipment.ai.desc': 'Nuestros agentes de monitoreo con IA. Verificaciones de calidad automáticas y alertas proactivas.',
    'equipment.ai.badge': 'Automatización Inteligente',
    'equipment.ops.name': 'Centro de Operaciones THK',
    'equipment.ops.desc': 'Nuestro centro de comando en CDMX. Monitoreo, soporte y gestión remota.',
    'equipment.ops.badge': 'HQ de Operaciones',

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
    'why.uptime.title': 'Grabación Confiable',
    'why.uptime.desc': 'Monitoreo con IA detecta problemas antes de que se conviertan en fallas.',
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
    'contact.info.desc': 'Contáctanos para discutir tus necesidades de infraestructura de video. Somos una startup en la Ciudad de México lista para ayudar.',
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
    'contact.form.disclaimer': 'Consulta gratuita. Respondemos lo antes posible. Sin spam, nunca.',
    'contact.form.note': 'Llena el formulario y te contactaremos por correo.',

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
