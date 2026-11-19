import type { OpeningHours } from '../lib/hours.ts';

export interface PostalAddressData {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface EmergencyPartner {
  /** Partner ER name (fictitious sample data). */
  name: string;
  /** Full street address. */
  address: string;
  /** Single source of truth for the ER phone number across the site. */
  phone: string;
  /** Plain-English opening note. */
  hoursNote: string;
  /** Brief distance/driving hint from the clinic. */
  directionsNote: string;
}

export interface Business {
  /** Public display name; also update site.config.json's name when renaming. */
  name: string;
  /** Short wordmark name used in the header. */
  shortName: string;
  /** Short headline for the home page. */
  tagline: string;
  /** Plain-text introduction used by fallback metadata and JSON-LD. */
  introduction: string;
  /** Public contact address, never a private notification destination. */
  email: string;
  /** Public clinic phone number. */
  phone: string;
  /** Full formatted street address for display and map queries. */
  address: string;
  /** Structured address for VeterinaryCare JSON-LD. */
  postalAddress: PostalAddressData;
  /** Public landmark for directions and the optional map embed. */
  landmark: string;
  /** Short directions note from the landmark. */
  directions: string;
  /** Parking and outdoor pet relief area note. */
  parkingNote: string;
  /** Coordinates for Laurelhurst Park's north edge (used in JSON-LD). */
  geo: { latitude: number; longitude: number };
  /** Seven weekdays, Monday–Sunday; omit opens/closes for closed days. */
  hours: OpeningHours[];
  /** After-hours 24-hour emergency partner (clinic is never open overnight). */
  emergencyPartner: EmergencyPartner;
  /** Contact copy metadata; the hosted form supports name, email and message only. */
  enquiries: {
    /** Contact page heading. */
    title: string;
    /** No booking, payment or delivery promises. */
    introduction: string;
    /** Suggestions for the message, not additional form inputs. */
    usefulToInclude: string[];
  };
}

/** Build a clean tel: href from a formatted phone string. */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}

export const business: Business = {
  name: 'Willow Paws Vet Clinic',
  shortName: 'Willow Paws',
  tagline: 'Gentle, unhurried care for every paw, claw and whisker.',
  introduction:
    'An independent neighbourhood veterinary clinic beside Laurelhurst Park in Portland, where the same vets and nurses get to know your dog, cat, rabbit or small pet.',
  email: 'hello@next-vet-caring.jamstacks.net',
  phone: '(503) 555-0142',
  address: '2814 SE Ankeny St, Portland, OR 97214',
  postalAddress: {
    streetAddress: '2814 SE Ankeny St',
    addressLocality: 'Portland',
    addressRegion: 'OR',
    postalCode: '97214',
    addressCountry: 'US',
  },
  landmark: 'Laurelhurst Park, Portland, OR',
  directions:
    'Find our green front door under the weeping willow on SE Ankeny St, directly along the north edge of Laurelhurst Park between SE 28th and SE 30th Ave.',
  parkingNote:
    'Free street parking right outside on SE Ankeny St, plus a fenced pet relief patch beside the garden gate.',
  geo: {
    latitude: 45.5228,
    longitude: -122.6254,
  },
  hours: [
    { day: 'Monday', opens: '08:00', closes: '18:30' },
    { day: 'Tuesday', opens: '08:00', closes: '18:30' },
    { day: 'Wednesday', opens: '08:00', closes: '18:30' },
    { day: 'Thursday', opens: '08:00', closes: '18:30' },
    { day: 'Friday', opens: '08:00', closes: '18:30' },
    { day: 'Saturday', opens: '09:00', closes: '14:00' },
    { day: 'Sunday' },
  ],
  emergencyPartner: {
    name: 'Riverbend 24-Hour Animal ER',
    address: '1190 SE Water Ave, Portland, OR 97214',
    phone: '(503) 555-0199',
    hoursNote: 'Open 24 hours every day, including nights, Sundays and holidays.',
    directionsNote: 'About 10 minutes west from Laurelhurst Park along SE Morrison or SE Stark St.',
  },
  enquiries: {
    title: 'Request an appointment',
    introduction:
      'Send an enquiry for a routine visit, new-patient registration, Pet Health Plan question or records transfer. We will reply to confirm a time.',
    usefulToInclude: [
      'Your pet’s name, species, breed and age',
      'The reason for the visit or question',
      'Preferred days and times — and a vet, if you have one in mind',
      'Whether you are a new client transferring from another clinic',
      'Your phone number if you would like us to call you back',
    ],
  },
};
