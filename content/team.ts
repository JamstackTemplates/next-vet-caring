import type { Day, OpeningHours } from '../lib/hours.ts';
import { SPECIES_IDS, type SpeciesId } from './services.ts';

export const CLINIC_DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const;
export type ClinicDay = typeof CLINIC_DAYS[number];

export const TEAM_ROLES = ['veterinarian', 'nurse', 'client-care'] as const;
export type TeamRole = typeof TEAM_ROLES[number];

export const PORTRAIT_VARIANTS = ['curly', 'bun', 'crop', 'beard', 'bob', 'braid'] as const;
export type PortraitVariant = typeof PORTRAIT_VARIANTS[number];

export const CLINIC_DAY_INFO: Record<ClinicDay, { short: string; full: Day }> = {
  mon: { short: 'Mon', full: 'Monday' },
  tue: { short: 'Tue', full: 'Tuesday' },
  wed: { short: 'Wed', full: 'Wednesday' },
  thu: { short: 'Thu', full: 'Thursday' },
  fri: { short: 'Fri', full: 'Friday' },
  sat: { short: 'Sat', full: 'Saturday' },
  sun: { short: 'Sun', full: 'Sunday' },
};

export interface TeamMember {
  /** Stable URL-safe unique ID. */
  id: string;
  /** Full display name. */
  name: string;
  /** Role group on the Our team page. */
  role: TeamRole;
  /** Short title or qualification line. */
  credentials: string;
  /** Clinical or practice interests. */
  interests: string[];
  /** Species cared for (must match service species values). */
  species: SpeciesId[];
  /** Days the team member works; every day must be an open clinic day. */
  clinicDays: ClinicDay[];
  /** One-line note about their own companion animal, rendered in handwriting. */
  ownPet: string;
  /** Which bespoke illustrated portrait variant to render. */
  portrait: PortraitVariant;
}

export const team: readonly TeamMember[] = [
  {
    id: 'dr-maren-okafor',
    name: 'Dr Maren Okafor',
    role: 'veterinarian',
    credentials: 'DVM, clinic founder',
    interests: ['soft-tissue surgery', 'anxious dogs'],
    species: ['dog', 'cat'],
    clinicDays: ['mon', 'tue', 'thu', 'fri'],
    ownPet: 'Juniper, a nervous greyhound',
    portrait: 'braid',
  },
  {
    id: 'dr-tomas-reyes',
    name: 'Dr Tomás Reyes',
    role: 'veterinarian',
    credentials: 'DVM',
    interests: ['cats', 'dentistry'],
    species: ['dog', 'cat'],
    clinicDays: ['mon', 'wed', 'thu', 'sat'],
    ownPet: 'Pickle, a one-eyed tabby',
    portrait: 'beard',
  },
  {
    id: 'dr-hana-lindqvist',
    name: 'Dr Hana Lindqvist',
    role: 'veterinarian',
    credentials: 'DVM, rabbit-savvy',
    interests: ['rabbits', 'small pets', 'senior care'],
    species: ['dog', 'cat', 'rabbit', 'small-pet'],
    clinicDays: ['tue', 'wed', 'fri', 'sat'],
    ownPet: 'Clover and Moss, two lionhead rabbits',
    portrait: 'bob',
  },
  {
    id: 'jess-whitlock',
    name: 'Jess Whitlock',
    role: 'nurse',
    credentials: 'CVT, head nurse',
    interests: ['anaesthesia', 'dental'],
    species: ['dog', 'cat', 'rabbit'],
    clinicDays: ['mon', 'tue', 'wed', 'thu'],
    ownPet: 'Biscuit, a beagle who steals socks',
    portrait: 'bun',
  },
  {
    id: 'ari-banerjee',
    name: 'Ari Banerjee',
    role: 'nurse',
    credentials: 'CVT',
    interests: ['nurse clinics', 'nutrition'],
    species: ['dog', 'cat', 'rabbit', 'small-pet'],
    clinicDays: ['wed', 'thu', 'fri', 'sat'],
    ownPet: 'Pepper, a rescue cockatiel',
    portrait: 'crop',
  },
  {
    id: 'leo-marsh',
    name: 'Leo Marsh',
    role: 'client-care',
    credentials: 'Practice coordinator',
    interests: ['health plans', 'records'],
    species: ['dog', 'cat', 'rabbit', 'small-pet'],
    clinicDays: ['mon', 'tue', 'wed', 'thu', 'fri'],
    ownPet: 'Rufus, a sofa-shaped mutt',
    portrait: 'curly',
  },
];

const URL_SAFE_ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function validateTeam(members: readonly TeamMember[], hours: readonly OpeningHours[]): void {
  const seen = new Set<string>();
  const validRoles = new Set<string>(TEAM_ROLES);
  const validPortraits = new Set<string>(PORTRAIT_VARIANTS);
  const validSpecies = new Set<string>(SPECIES_IDS);
  const openDays = new Set<Day>(hours.filter(h => h.opens && h.closes).map(h => h.day));

  for (const member of members) {
    const label = `team member "${member.id || '(missing id)'}"`;
    if (!member.id || !URL_SAFE_ID.test(member.id)) {
      throw new Error(`${label}: id must be URL-safe lowercase letters, digits and hyphens`);
    }
    if (seen.has(member.id)) {
      throw new Error(`${label}: duplicate team member id`);
    }
    seen.add(member.id);

    if (!member.name.trim()) throw new Error(`${label}: name is required`);
    if (!member.credentials.trim()) throw new Error(`${label}: credentials are required`);
    if (!member.ownPet.trim()) throw new Error(`${label}: ownPet is required`);
    if (!validRoles.has(member.role)) throw new Error(`${label}: unknown role "${member.role}"`);
    if (!validPortraits.has(member.portrait)) throw new Error(`${label}: unknown portrait "${member.portrait}"`);
    if (!Array.isArray(member.interests) || member.interests.length === 0) {
      throw new Error(`${label}: interests must list at least one item`);
    }
    if (!Array.isArray(member.species) || member.species.length === 0) {
      throw new Error(`${label}: species must list at least one species`);
    }
    for (const sp of member.species) {
      if (!validSpecies.has(sp)) throw new Error(`${label}: unknown species "${sp}"`);
    }
    if (!Array.isArray(member.clinicDays) || member.clinicDays.length === 0) {
      throw new Error(`${label}: clinicDays must list at least one open clinic day`);
    }
    const daySeen = new Set<string>();
    for (const day of member.clinicDays) {
      const info = CLINIC_DAY_INFO[day];
      if (!info) throw new Error(`${label}: unknown clinicDay "${day}"`);
      if (daySeen.has(day)) throw new Error(`${label}: duplicate clinicDay "${day}"`);
      daySeen.add(day);
      if (!openDays.has(info.full)) {
        throw new Error(`${label}: clinicDay "${day}" (${info.full}) is a closed clinic day`);
      }
    }
  }
}
