export const business = {
  name: 'Contabilidad Clara Santiago',
  legalName: 'Contabilidad Clara Santiago',
  city: 'Santiago',
  region: 'Región Metropolitana',
  country: 'CL',
  phone: '+56 9 1234 5678',
  whatsapp: '56912345678',
  email: 'contacto@contabilidadclara.cl',
  address: 'Santiago, Región Metropolitana, Chile',
  hours: 'Lunes a viernes, 09:00 a 18:00',
  siteUrl: import.meta.env.PUBLIC_SITE_URL || 'https://contador-santiago.netlify.app',
  defaultWhatsAppMessage:
    'Hola, quiero cotizar servicios contables para mi negocio en Santiago.'
} as const;

export const navItems = [
  { label: 'Servicios', href: '/services' },
  { label: 'Sobre mí', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contact' }
] as const;

export const services = [
  {
    title: 'Constitución de empresa',
    description:
      'Acompañamiento para iniciar actividades en Chile con pasos claros, documentos requeridos y primeras obligaciones tributarias.'
  },
  {
    title: 'Declaración de impuestos',
    description:
      'Apoyo tributario mensual y anual para emprendedores y pymes, con revisión ordenada antes de presentar.'
  },
  {
    title: 'Contabilidad mensual',
    description:
      'Registro contable, conciliaciones, control del calendario tributario y reportes mensuales para decidir mejor.'
  },
  {
    title: 'Facturación y boletas',
    description:
      'Soporte con facturas electrónicas, boletas, documentos de compra y procesos prácticos ante el SII.'
  },
  {
    title: 'Asesoría tributaria',
    description:
      'Orientación tributaria en lenguaje claro para crecimiento, contratación, flujo de caja y cumplimiento en Chile.'
  },
  {
    title: 'Remuneraciones',
    description:
      'Cálculo de sueldos, documentación laboral, descuentos y obligaciones mensuales para equipos pequeños.'
  }
] as const;

export const differentiators = [
  {
    title: 'Atención personalizada',
    description: 'Atención directa de una contadora independiente que entiende el contexto de tu negocio.'
  },
  {
    title: 'Comunicación clara',
    description: 'Contabilidad explicada en simple, con próximos pasos concretos y sin tecnicismos innecesarios.'
  },
  {
    title: 'Respuesta rápida',
    description: 'Comunicación por WhatsApp para dudas urgentes, vencimientos y solicitudes de documentos.'
  },
  {
    title: 'Enfoque pyme',
    description: 'Servicio pensado para emprendedores, prestadores de servicios y pequeñas empresas en Chile.'
  }
] as const;

export const testimonials = [
  {
    name: 'María Fernanda R.',
    role: 'Dueña de estudio de diseño',
    quote:
      'El proceso se volvió mucho más claro. Por fin entendí qué documentos necesitaba y cuándo importaba cada vencimiento.'
  },
  {
    name: 'Cristóbal V.',
    role: 'Consultor independiente',
    quote:
      'Respuestas rápidas, seguimiento ordenado y consejos muy prácticos para mi contabilidad mensual.'
  },
  {
    name: 'Paula G.',
    role: 'Emprendedora comercial',
    quote:
      'Profesional, cercana y confiable. El apoyo con facturación e impuestos mensuales nos ahorró mucho tiempo.'
  }
] as const;

export const faqs = [
  {
    question: '¿Trabajas con emprendedores fuera de Santiago?',
    answer:
      'Sí. La mayoría de los procesos contables y tributarios se pueden gestionar de forma remota en Chile, con reuniones y revisión de documentos en línea.'
  },
  {
    question: '¿Me puedes ayudar a iniciar una empresa en Chile?',
    answer:
      'Sí. El servicio incluye orientación sobre constitución, inicio de actividades, facturación básica y primeros pasos de cumplimiento.'
  },
  {
    question: '¿Qué información necesito para cotizar?',
    answer:
      'Comparte el giro de tu negocio, volumen mensual aproximado de documentos, si tienes trabajadores y tu situación tributaria actual.'
  },
  {
    question: '¿Esto reemplaza una asesoría legal?',
    answer:
      'No. La orientación contable y tributaria se entrega dentro del ámbito profesional contable. Los temas legales deben revisarse con un abogado.'
  }
] as const;

export function whatsappUrl(message = business.defaultWhatsAppMessage) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
