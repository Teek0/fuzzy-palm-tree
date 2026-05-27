export const business = {
  name: 'Rosario Contable',
  legalName: 'Rosario Trincado',
  city: 'Santiago',
  region: 'Región Metropolitana',
  country: 'CL',
  phone: '+56 9 0000 0000',
  whatsapp: '56900000000',
  email: 'contacto.rcontable@gmail.com',
  address: 'Santiago, Región Metropolitana, Chile',
  hours: 'Lunes a viernes, 09:00 a 18:00',
  siteUrl: import.meta.env.PUBLIC_SITE_URL || 'https://rosariocontable.cl',
  yearsExperience: '40+',
  defaultWhatsAppMessage:
    'Hola Rosario, quiero consultar por apoyo contable y financiero para mi negocio.'
} as const;

export const featureFlags = {
  blogEnabled: false
} as const;

const allNavItems = [
  { label: 'Servicios', href: '/services' },
  { label: 'Sobre mí', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Hablemos', href: '/contact' }
] as const;

export const navItems = allNavItems.filter((item) => featureFlags.blogEnabled || item.href !== '/blog');

export const services = [
  {
    title: 'Personas naturales',
    description:
      'Apoyo en declaraciones de impuestos, orden financiero y orientación tributaria clara para tomar mejores decisiones.'
  },
  {
    title: 'Pymes y MIPYMES',
    description:
      'Acompañamiento experto para empresas de 0 a 400 trabajadores que necesitan ordenar su administración y mejorar resultados.'
  },
  {
    title: 'Declaraciones de impuestos',
    description:
      'Revisión y apoyo en obligaciones tributarias mensuales y anuales, con foco en cumplimiento y claridad.'
  },
  {
    title: 'Cuentas por cobrar y pagar',
    description:
      'Análisis de cobros, pagos, compromisos pendientes y alertas para mejorar el flujo de caja.'
  },
  {
    title: 'Informes financieros',
    description:
      'Reportes claros del estado financiero, resultados y puntos estratégicos para gestionar con mejor información.'
  },
  {
    title: 'Diagnóstico inicial',
    description:
      'Evaluación contable y financiera de compras, ventas, costos, rentabilidad y procesos administrativos.'
  }
] as const;

export const differentiators = [
  {
    title: 'Atención personalizada',
    description: 'Trabajo cercano, híbrido y presencial según lo que necesites resolver.'
  },
  {
    title: 'Enfoque financiero',
    description: 'Análisis de flujo de caja, costos, rentabilidad y administración para mejorar resultados.'
  },
  {
    title: 'Informes claros',
    description: 'Información simple para entender qué está pasando y decidir con más tranquilidad.'
  },
  {
    title: 'Valores competitivos',
    description: 'Servicios con valores bajo el mercado, pensados para personas naturales y MIPYMES.'
  }
] as const;

export const testimonials = [
  {
    name: 'María Fernanda R.',
    role: 'Dueña de estudio de diseño',
    quote:
      'Ahora tenemos claridad sobre costos, pagos pendientes y decisiones que antes se tomaban a ciegas.'
  },
  {
    name: 'Cristóbal V.',
    role: 'Consultor independiente',
    quote:
      'La evaluación inicial permitió detectar desorden administrativo y priorizar mejoras concretas.'
  },
  {
    name: 'Paula G.',
    role: 'Emprendedora comercial',
    quote:
      'Los informes nos ayudaron a revisar cobranza, pagos y resultados con mucha más tranquilidad.'
  }
] as const;

export const faqs = [
  {
    question: '¿El servicio es presencial o remoto?',
    answer:
      'El servicio es híbrido y presencial. La modalidad se define según el tipo de apoyo, ubicación y necesidades de cada cliente.'
  },
  {
    question: '¿Con qué tipo de empresas trabajas?',
    answer:
      'Trabajo con personas naturales, pymes y MIPYMES de 0 a 400 trabajadores que necesitan ordenar su administración y gestión financiera.'
  },
  {
    question: '¿Qué incluye la evaluación inicial?',
    answer:
      'Incluye revisión de compras, ventas, cuentas por cobrar y pagar, costos, flujo de caja, rentabilidad y procesos administrativos.'
  },
  {
    question: '¿Los valores son accesibles?',
    answer:
      'Sí. La propuesta considera valores competitivos y bajo el mercado para facilitar el acceso a apoyo contable y financiero.'
  }
] as const;

export function whatsappUrl(message = business.defaultWhatsAppMessage) {
  if (!business.whatsapp) {
    return `mailto:${business.email}?subject=${encodeURIComponent('Consulta por servicios contables')}&body=${encodeURIComponent(message)}`;
  }

  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
