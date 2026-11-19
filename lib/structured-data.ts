import { business } from '../content/business.ts';
import { absoluteUrl } from './paths.ts';
import { site } from './site.ts';

/** VeterinaryCare schema.org JSON-LD derived from content/business.ts. */
export function businessStructuredData() {
  const url = absoluteUrl('/');
  const image = site.url ? `${site.url}/og.png` : undefined;
  const openingHoursSpecification = business.hours
    .filter(entry => entry.opens && entry.closes)
    .map(entry => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${entry.day}`,
      opens: entry.opens,
      closes: entry.closes,
    }));

  return {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    name: business.name,
    description: business.introduction,
    email: business.email,
    telephone: business.phone,
    ...(url ? { url } : {}),
    ...(image ? { image } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.postalAddress.streetAddress,
      addressLocality: business.postalAddress.addressLocality,
      addressRegion: business.postalAddress.addressRegion,
      postalCode: business.postalAddress.postalCode,
      addressCountry: business.postalAddress.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification,
  };
}

/** Prevent content containing a closing script tag from escaping JSON-LD. */
export function jsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
