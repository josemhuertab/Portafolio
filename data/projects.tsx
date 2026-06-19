import React from 'react'

export interface ProjectImage {
  light: string
  dark: string
  alt: string
}

export interface Project {
  title: string
  description: string
  images: ProjectImage[]
  url: string
  type: 'personal' | 'collaboration'
  role?: string
  highlights?: string[]
  technologies: {
    name: string
    icon: string
  }[]
}

export const TechIcons = {
  nextjs: 'nextjs',
  react: 'react',
  typescript: 'typescript',
  tailwind: 'tailwind',
  vuetify: 'vuetify',
  vuejs: 'vuejs',
  firebase: 'firebase',
  springboot: 'springboot',
  java: 'java',
} as const

export const TechIcon: React.FC<{ name: string; className?: string }> = ({ name, className = '' }) => {
  const icons: Record<string, JSX.Element> = {
    nextjs: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.0971-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-1.7436-2.6769-1.7471-2.6769v2.5897c0 2.3598.0093 2.6001.0633 2.6906.0375.0631.1562.1351.2323.1478.0961.0188 1.9781-.0026 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608z"/>
      </svg>
    ),
    vuejs: (
      <svg width="20" height="20" viewBox="0 0 256 221" className={className}>
        <path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z" fill="#41B883"/>
        <path d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z" fill="#41B883"/>
        <path d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z" fill="#35495E"/>
      </svg>
    ),
    react: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#61DAFB" className={className}>
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
      </svg>
    ),
    typescript: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#3178C6" className={className}>
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
      </svg>
    ),
    tailwind: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#06B6D4" className={className}>
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
      </svg>
    ),
    vuetify: (
      <svg width="20" height="20" viewBox="0 0 24 24" className={className}>
        <path d="M7.094 0L12 10.188L16.906 0H21l-9 19.5L3 0h4.094z" fill="#1867C0"/>
        <path d="M12 10.188L7.094 0H3l9 19.5z" fill="#1867C0" opacity="0.7"/>
        <path d="M12 10.188L16.906 0H21l-9 19.5z" fill="#AEDDFF"/>
      </svg>
    ),
    firebase: (
      <svg width="20" height="20" viewBox="0 0 24 24" className={className}>
        <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z" fill="#FFA611"/>
      </svg>
    ),
    springboot: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#6DB33F" className={className}>
        <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.16 5.623-7.027 6.679-1.956.722-5.492 1.424-5.493 1.424a5.28 5.28 0 0 1-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21zm.042-13.28a9.212 9.212 0 0 1 .48 5.318c-.146.65-.387 1.287-.73 1.898-.04-.05-.08-.1-.12-.149-1.038-1.238-2.367-2.163-3.837-2.682a11.78 11.78 0 0 0-2.198-.506 9.236 9.236 0 0 1 6.405-3.879z"/>
      </svg>
    ),
    java: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#ED8B00" className={className}>
        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0 0 .07-.063.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832 0 6.836-2.274-2.051-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.189-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0 0 .553.457 3.393.639"/>
      </svg>
    ),
  }

  return icons[name] || null
}

export const projects: Project[] = [
  {
    title: 'Spendly',
    description: 'PWA de gestión financiera personal con dashboard analítico, movimientos, ahorros y compras a crédito. Construida con Vue 3, Pinia y Firebase.',
    images: [
      {
        light: '/images/projects/spendly/spendly-login-dark.png',
        dark: '/images/projects/spendly/spendly-login-light.png',
        alt: 'Pantalla de inicio de sesión de Spendly',
      },
      {
        light: '/images/projects/spendly/spendly-dashboard-dark.png',
        dark: '/images/projects/spendly/spendly-dashboard-light.png',
        alt: 'Dashboard principal con resumen financiero',
      },
      {
        light: '/images/projects/spendly/spendly-movimientos-dark.png',
        dark: '/images/projects/spendly/spendly-movimientos-light.png',
        alt: 'Registro y listado de movimientos',
      },
      {
        light: '/images/projects/spendly/spendly-ahorros-dark.png',
        dark: '/images/projects/spendly/spendly-ahorros-light.png',
        alt: 'Módulo de control de ahorros',
      },
      {
        light: '/images/projects/spendly/spendly-comprastarjetacredito-dark.png',
        dark: '/images/projects/spendly/spendly-comprastarjetacredito-light.png',
        alt: 'Gestión de compras con tarjeta de crédito',
      },
    ],
    url: 'https://spendlywebsite.vercel.app',
    type: 'personal',
    highlights: [
      'Modo demo con proxy transparente: servicios interceptan todas las operaciones y las redirigen a un store en memoria sin modificar la lógica de negocio',
      'Suscripciones en tiempo real con Firestore onSnapshot y fallback automático ante índices compuestos faltantes',
      'Conversión multi-divisa con tasas en vivo, caché en localStorage y refresco automático cada hora',
      'PWA instalable con Workbox, soporte offline y Firebase Auth completo (reautenticación, verificación de email, Storage)',
    ],
    technologies: [
      { name: 'Vue.js', icon: TechIcons.vuejs },
      { name: 'Tailwind CSS', icon: TechIcons.tailwind },
      { name: 'Firebase', icon: TechIcons.firebase },
    ],
  },
  {
    title: 'Psic. Benjamín Troncoso',
    description: 'Landing page profesional para psicólogo clínico. Site orientado a conversión con integración de Meta Pixel, formulario de contacto vía Resend y animaciones CSS personalizadas.',
    images: [
      {
        light: '/images/projects/psi-btroncoso/inicio.png',
        dark: '/images/projects/psi-btroncoso/inicio.png',
        alt: 'Hero section del sitio del psicólogo',
      },
      {
        light: '/images/projects/psi-btroncoso/sobre-mi.png',
        dark: '/images/projects/psi-btroncoso/sobre-mi.png',
        alt: 'Sección Sobre mí',
      },
      {
        light: '/images/projects/psi-btroncoso/servicios.png',
        dark: '/images/projects/psi-btroncoso/servicios.png',
        alt: 'Sección de servicios y precios',
      },
      {
        light: '/images/projects/psi-btroncoso/testimonios.png',
        dark: '/images/projects/psi-btroncoso/testimonios.png',
        alt: 'Testimonios de pacientes',
      },
      {
        light: '/images/projects/psi-btroncoso/faq.png',
        dark: '/images/projects/psi-btroncoso/faq.png',
        alt: 'Sección de preguntas frecuentes',
      },
      {
        light: '/images/projects/psi-btroncoso/contacto.png',
        dark: '/images/projects/psi-btroncoso/contacto.png',
        alt: 'Formulario de contacto',
      },
    ],
    url: 'https://www.psibenjamintroncoso.cl',
    type: 'personal',
    highlights: [
      'Scroll-reveal con IntersectionObserver en cada sección y entradas escalonadas en cards con animationDelay inline',
      'Integración de Meta Pixel (Facebook Ads) para tracking de eventos Lead y Contact sin bloquear el hilo principal (afterInteractive)',
      'Formulario de contacto con validación, animación shake en errores y envío de emails transaccionales vía Resend',
      '3 schemas JSON-LD (Person, MedicalBusiness, FAQPage) para SEO estructurado y visibilidad en Google',
    ],
    technologies: [
      { name: 'Next.js', icon: TechIcons.nextjs },
      { name: 'TypeScript', icon: TechIcons.typescript },
      { name: 'Tailwind CSS', icon: TechIcons.tailwind },
    ],
  },
]

export const collaborationProjects: Project[] = [
  {
    title: 'SynchroPOS',
    description: 'Sistema POS multi-tenant para PyMEs, retail y gastronomía. Funciona como app web y desktop (Tauri + SQLite) con soporte offline.',
    images: [
      {
        light: '/images/projects/synchropos/synchropos-landing-dark.png',
        dark: '/images/projects/synchropos/synchropos-landing-light.png',
        alt: 'Landing page de SynchroPOS',
      },
      {
        light: '/images/projects/synchropos/synchropos-mododemo-dark.png',
        dark: '/images/projects/synchropos/synchropos-mododemo-light.png',
        alt: 'Pantalla de carga del modo demo',
      },
    ],
    url: 'https://pos.synchrodev.cl',
    type: 'collaboration',
    role: 'Fullstack Frontend',
    highlights: [
      'Landing page de marketing con Framer Motion: animaciones scroll-reveal, navbar con easing personalizado, tabla de planes interactiva con toggle mensual/anual y sección de casos de uso',
      'Modo demo sin backend: página /demo activa un store en memoria, inyecta sesión en localStorage y redirige al dashboard con datos de ejemplo, sin registro ni riesgo de datos reales',
      'Sistema de seguridad por inactividad con React Context: timer configurable por organización (5 min – 5 h), modal bloqueante con countdown MM:SS, debounce de actividad y configuración persistida en Supabase por rol',
      'Correcciones y mejoras de UI en componentes del dashboard y POS, asegurando consistencia visual y responsive en todos los módulos',
    ],
    technologies: [
      { name: 'Next.js', icon: TechIcons.nextjs },
      { name: 'TypeScript', icon: TechIcons.typescript },
      { name: 'Tailwind CSS', icon: TechIcons.tailwind },
    ],
  },
]
