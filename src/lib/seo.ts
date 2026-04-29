import { business } from '@/content/site';

export type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
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
    priceRange: '$$',
    sameAs: []
  };
}
