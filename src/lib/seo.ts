import { business } from '@/content/site';

export type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
};

export function absoluteUrl(path = '/') {
  return new URL(path, business.siteUrl).toString();
}

export function pageTitle(title: string) {
  return `${title} | ${business.name}`;
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AccountingService'],
    name: business.name,
    legalName: business.legalName,
    url: business.siteUrl,
    image: `${business.siteUrl}/og-image.svg`,
    telephone: business.phone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.city,
      addressRegion: business.region,
      addressCountry: business.country
    },
    areaServed: [
      { '@type': 'City', name: 'Santiago' },
      { '@type': 'Country', name: 'Chile' }
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: business.phone,
      contactType: 'customer service',
      availableLanguage: ['Spanish']
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios contables',
      itemListElement: [
        'Constitución de empresa',
        'Declaración de impuestos',
        'Contabilidad mensual',
        'Facturación y boletas',
        'Asesoría tributaria',
        'Remuneraciones'
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name
        }
      }))
    },
    priceRange: '$$',
    sameAs: []
  };
}
