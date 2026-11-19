export const SPECIES_IDS = ['dog', 'cat', 'rabbit', 'small-pet'] as const;
export type SpeciesId = typeof SPECIES_IDS[number];

export const SERVICE_CATEGORY_IDS = ['wellness', 'dental', 'surgery', 'diagnostics', 'nurse'] as const;
export type ServiceCategoryId = typeof SERVICE_CATEGORY_IDS[number];

export interface SpeciesMeta {
  id: SpeciesId;
  label: string;
  pluralLabel: string;
  homeNote: string;
}

export interface ServiceCategoryMeta {
  id: ServiceCategoryId;
  label: string;
  summary: string;
}

export interface ServiceItem {
  /** Stable URL-safe unique ID (lowercase letters, digits, hyphens). */
  id: string;
  /** Display name shown on the clinic price list. */
  name: string;
  /** Grouping on the Services page. */
  category: ServiceCategoryId;
  /** One or more species groups seen for this service. */
  species: SpeciesId[];
  /** One-sentence plain-English summary. */
  summary: string;
  /** Whole USD dollars; 0 renders "Included after surgery here"; null renders "Priced after exam". */
  fromPrice: number | null;
  /** Typical appointment duration in minutes. */
  durationMinutes: number;
  /** Featured on the Home noticeboard. */
  featured: boolean;
  /** False keeps the service listed with a "Paused, ask us" label. */
  available: boolean;
}

export const SPECIES: readonly SpeciesMeta[] = [
  { id: 'dog', label: 'Dog', pluralLabel: 'Dogs', homeNote: 'Calm consults, floor mats & slow greetings' },
  { id: 'cat', label: 'Cat', pluralLabel: 'Cats', homeNote: 'Quiet cat-only consult room & warm towels' },
  { id: 'rabbit', label: 'Rabbit', pluralLabel: 'Rabbits', homeNote: 'Rabbit-savvy vets, dental checks & gentle handling' },
  { id: 'small-pet', label: 'Small pet', pluralLabel: 'Small pets', homeNote: 'Guinea pigs, hamsters, rats & pocket companions' },
];

export const SERVICE_CATEGORIES: readonly ServiceCategoryMeta[] = [
  {
    id: 'wellness',
    label: 'Wellness',
    summary: 'Unhurried nose-to-tail exams, tailored vaccinations and preventative care at every life stage.',
  },
  {
    id: 'dental',
    label: 'Dental',
    summary: 'Gentle oral care, full scale-and-polish procedures and specialist rabbit tooth checks.',
  },
  {
    id: 'surgery',
    label: 'Surgery',
    summary: 'Day-case routine procedures with dedicated nurse monitoring and warm recovery beds.',
  },
  {
    id: 'diagnostics',
    label: 'Diagnostics',
    summary: 'In-house lab work and calm imaging so you get clear answers without long waits.',
  },
  {
    id: 'nurse',
    label: 'Nurse clinics',
    summary: 'Practical, reassuring appointments with our certified veterinary technicians.',
  },
];

export const services: readonly ServiceItem[] = [
  {
    id: 'wellness-exam',
    name: 'Wellness exam',
    category: 'wellness',
    species: ['dog', 'cat', 'rabbit', 'small-pet'],
    summary: 'A relaxed nose-to-tail check with weight, heart, coat, eyes, ears and time for every question.',
    fromPrice: 68,
    durationMinutes: 30,
    featured: true,
    available: true,
  },
  {
    id: 'puppy-kitten-course',
    name: 'Puppy and kitten first visits',
    category: 'wellness',
    species: ['dog', 'cat'],
    summary: 'A gentle starter bundle covering first exams, early vaccines, growth tracking and settling-in tips.',
    fromPrice: 145,
    durationMinutes: 30,
    featured: false,
    available: true,
  },
  {
    id: 'vaccinations',
    name: 'Core vaccinations',
    category: 'wellness',
    species: ['dog', 'cat', 'rabbit'],
    summary: 'Up-to-date core protection tailored to your pet’s age, park walks and indoor-outdoor habits.',
    fromPrice: 42,
    durationMinutes: 15,
    featured: true,
    available: true,
  },
  {
    id: 'microchipping',
    name: 'Microchipping',
    category: 'wellness',
    species: ['dog', 'cat', 'rabbit'],
    summary: 'Quick ISO microchip placement with registration guidance so a lost friend finds home fast.',
    fromPrice: 55,
    durationMinutes: 15,
    featured: false,
    available: true,
  },
  {
    id: 'parasite-plan',
    name: 'Flea, tick and worm prevention',
    category: 'wellness',
    species: ['dog', 'cat', 'rabbit'],
    summary: 'Weight-checked monthly protection chosen for Pacific Northwest seasons and household safety.',
    fromPrice: 24,
    durationMinutes: 15,
    featured: false,
    available: true,
  },
  {
    id: 'senior-check',
    name: 'Senior health check',
    category: 'wellness',
    species: ['dog', 'cat'],
    summary: 'Longer mobility, dental, blood pressure and organ check-in to keep older companions comfortable.',
    fromPrice: 165,
    durationMinutes: 45,
    featured: true,
    available: true,
  },
  {
    id: 'dental-cleaning',
    name: 'Dental scale and polish',
    category: 'dental',
    species: ['dog', 'cat'],
    summary: 'Full-mouth charting, ultrasonic scaling and polishing under nurse-monitored anaesthesia.',
    fromPrice: 395,
    durationMinutes: 120,
    featured: true,
    available: true,
  },
  {
    id: 'rabbit-dental',
    name: 'Rabbit tooth and burr check',
    category: 'dental',
    species: ['rabbit', 'small-pet'],
    summary: 'Careful cheek-tooth and incisor inspection to catch spurs early and keep hay eating effortless.',
    fromPrice: 85,
    durationMinutes: 30,
    featured: false,
    available: true,
  },
  {
    id: 'spay-neuter',
    name: 'Spay and neuter',
    category: 'surgery',
    species: ['dog', 'cat', 'rabbit'],
    summary: 'Day-case routine neutering with tailored pain relief, warm blankets and a home recovery guide.',
    fromPrice: 320,
    durationMinutes: 240,
    featured: true,
    available: true,
  },
  {
    id: 'lump-removal',
    name: 'Lump removal',
    category: 'surgery',
    species: ['dog', 'cat'],
    summary: 'Assessment and surgical removal of skin or soft-tissue masses with optional lab histology.',
    fromPrice: null,
    durationMinutes: 120,
    featured: false,
    available: true,
  },
  {
    id: 'bloodwork',
    name: 'In-house bloodwork',
    category: 'diagnostics',
    species: ['dog', 'cat', 'rabbit'],
    summary: 'Same-day organ, blood cell and pre-anaesthetic screening analysed right here in our lab.',
    fromPrice: 120,
    durationMinutes: 20,
    featured: false,
    available: true,
  },
  {
    id: 'digital-xray',
    name: 'Digital X-ray',
    category: 'diagnostics',
    species: ['dog', 'cat', 'rabbit', 'small-pet'],
    summary: 'Low-dose digital radiographs for joints, chests and tummies, reviewed with you on screen.',
    fromPrice: 210,
    durationMinutes: 60,
    featured: false,
    available: true,
  },
  {
    id: 'ultrasound',
    name: 'Ultrasound',
    category: 'diagnostics',
    species: ['dog', 'cat'],
    summary: 'Gentle abdominal ultrasound imaging with our visiting sonographer by prior arrangement.',
    fromPrice: null,
    durationMinutes: 45,
    featured: false,
    available: false,
  },
  {
    id: 'nurse-clinic',
    name: 'Nurse clinic: nails, weight and ears',
    category: 'nurse',
    species: ['dog', 'cat', 'rabbit', 'small-pet'],
    summary: 'Unhurried nail trims, weight checks, ear peeks and bandage swaps with lots of treats.',
    fromPrice: 28,
    durationMinutes: 20,
    featured: true,
    available: true,
  },
  {
    id: 'post-op-check',
    name: 'Post-op check and stitch removal',
    category: 'nurse',
    species: ['dog', 'cat', 'rabbit'],
    summary: 'Follow-up wound check and comfortable stitch removal after any surgery performed at Willow Paws.',
    fromPrice: 0,
    durationMinutes: 15,
    featured: false,
    available: true,
  },
];

export function formatServicePrice(service: Pick<ServiceItem, 'fromPrice'>): string {
  if (service.fromPrice === 0) return 'Included after surgery here';
  if (service.fromPrice === null) return 'Priced after exam';
  return `From $${service.fromPrice}`;
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const rem = minutes % 60;
  return rem === 0 ? `${hours} hr` : `${hours} hr ${rem} min`;
}

export function isSpeciesId(value: string | null | undefined): value is SpeciesId {
  return typeof value === 'string' && (SPECIES_IDS as readonly string[]).includes(value);
}

const URL_SAFE_ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function validateServices(items: readonly ServiceItem[]): void {
  const seen = new Set<string>();
  const validCategories = new Set<string>(SERVICE_CATEGORY_IDS);
  const validSpecies = new Set<string>(SPECIES_IDS);

  for (const item of items) {
    const label = `service "${item.id || '(missing id)'}"`;
    if (!item.id || !URL_SAFE_ID.test(item.id)) {
      throw new Error(`${label}: id must be URL-safe lowercase letters, digits and hyphens`);
    }
    if (seen.has(item.id)) {
      throw new Error(`${label}: duplicate service id`);
    }
    seen.add(item.id);

    if (!item.name.trim()) throw new Error(`${label}: name is required`);
    if (!item.summary.trim()) throw new Error(`${label}: summary is required`);
    if (!validCategories.has(item.category)) {
      throw new Error(`${label}: unknown category "${item.category}"`);
    }
    if (!Array.isArray(item.species) || item.species.length === 0) {
      throw new Error(`${label}: species must list at least one species`);
    }
    for (const sp of item.species) {
      if (!validSpecies.has(sp)) throw new Error(`${label}: unknown species "${sp}"`);
    }
    if (item.fromPrice !== null && (!Number.isInteger(item.fromPrice) || item.fromPrice < 0)) {
      throw new Error(`${label}: fromPrice must be a non-negative integer USD amount or null`);
    }
    if (!Number.isInteger(item.durationMinutes) || item.durationMinutes <= 0) {
      throw new Error(`${label}: durationMinutes must be a positive integer`);
    }
  }
}
