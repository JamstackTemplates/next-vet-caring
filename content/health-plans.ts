import type { ServiceItem } from './services.ts';

export const PLAN_SPECIES_IDS = ['dog', 'cat', 'rabbit'] as const;
export type PlanSpeciesId = typeof PLAN_SPECIES_IDS[number];

export const LIFE_STAGES = ['young', 'adult', 'senior'] as const;
export type LifeStage = typeof LIFE_STAGES[number];

export interface PlanInclusion {
  /** Must match an existing ServiceItem.id in content/services.ts. */
  serviceId: string;
  /** Number of included visits or monthly doses per 12-month plan year (integer >= 1). */
  count: number;
}

export interface HealthPlan {
  /** Stable URL-safe unique ID. */
  id: string;
  /** Plan title displayed on the record card. */
  name: string;
  /** Species group for this plan. */
  species: PlanSpeciesId;
  /** Life stage badge on the record card. */
  lifeStage: LifeStage;
  /** Monthly fee in whole USD dollars; annual total is always computed as monthlyPrice * 12. */
  monthlyPrice: number;
  /** Services included across a 12-month plan year. */
  includes: PlanInclusion[];
  /** Percentage discount (0–20) on other listed clinic services. */
  memberDiscountPercent: number;
  /** Handwritten sample pet name or note on the stamped record card. */
  cardPetExample: string;
  /** Optional short clarification note. */
  note?: string;
}

export const PLAN_SPECIES_LABELS: Record<PlanSpeciesId, string> = {
  dog: 'Dogs',
  cat: 'Cats',
  rabbit: 'Rabbits',
};

export const LIFE_STAGE_LABELS: Record<LifeStage, string> = {
  young: 'First year',
  adult: 'Adult',
  senior: 'Senior (7+)',
};

export const healthPlans: readonly HealthPlan[] = [
  {
    id: 'sprout-puppy',
    name: 'Sprout (puppy)',
    species: 'dog',
    lifeStage: 'young',
    monthlyPrice: 39,
    includes: [
      { serviceId: 'wellness-exam', count: 2 },
      { serviceId: 'vaccinations', count: 2 },
      { serviceId: 'microchipping', count: 1 },
      { serviceId: 'parasite-plan', count: 12 },
      { serviceId: 'nurse-clinic', count: 4 },
    ],
    memberDiscountPercent: 10,
    cardPetExample: 'Pippin · 14 wks',
    note: 'Built for a puppy’s busy first year, including microchipping and quarterly nurse checks.',
  },
  {
    id: 'willow-dog',
    name: 'Willow (adult dog)',
    species: 'dog',
    lifeStage: 'adult',
    monthlyPrice: 32,
    includes: [
      { serviceId: 'wellness-exam', count: 2 },
      { serviceId: 'vaccinations', count: 1 },
      { serviceId: 'parasite-plan', count: 12 },
      { serviceId: 'nurse-clinic', count: 4 },
    ],
    memberDiscountPercent: 10,
    cardPetExample: 'Milo · 4 yrs',
    note: 'Steady preventative care twice a year with year-round parasite cover.',
  },
  {
    id: 'old-oak-dog',
    name: 'Old Oak (senior dog)',
    species: 'dog',
    lifeStage: 'senior',
    monthlyPrice: 46,
    includes: [
      { serviceId: 'senior-check', count: 2 },
      { serviceId: 'vaccinations', count: 1 },
      { serviceId: 'bloodwork', count: 1 },
      { serviceId: 'parasite-plan', count: 12 },
      { serviceId: 'nurse-clinic', count: 4 },
    ],
    memberDiscountPercent: 15,
    cardPetExample: 'Barnaby · 10 yrs',
    note: 'Longer senior appointments plus annual in-house bloodwork to catch changes early.',
  },
  {
    id: 'sprout-kitten',
    name: 'Sprout (kitten)',
    species: 'cat',
    lifeStage: 'young',
    monthlyPrice: 34,
    includes: [
      { serviceId: 'wellness-exam', count: 2 },
      { serviceId: 'vaccinations', count: 2 },
      { serviceId: 'microchipping', count: 1 },
      { serviceId: 'parasite-plan', count: 12 },
      { serviceId: 'nurse-clinic', count: 4 },
    ],
    memberDiscountPercent: 10,
    cardPetExample: 'Mochi · 12 wks',
    note: 'Calm first-year visits in our cat-only consult room with early vaccines and microchipping.',
  },
  {
    id: 'willow-cat',
    name: 'Willow (adult cat)',
    species: 'cat',
    lifeStage: 'adult',
    monthlyPrice: 28,
    includes: [
      { serviceId: 'wellness-exam', count: 2 },
      { serviceId: 'vaccinations', count: 1 },
      { serviceId: 'parasite-plan', count: 12 },
      { serviceId: 'nurse-clinic', count: 4 },
    ],
    memberDiscountPercent: 10,
    cardPetExample: 'Fern · 5 yrs',
    note: 'Twice-yearly checkups, annual booster and gentle nurse nail and weight checks.',
  },
  {
    id: 'old-oak-cat',
    name: 'Old Oak (senior cat)',
    species: 'cat',
    lifeStage: 'senior',
    monthlyPrice: 42,
    includes: [
      { serviceId: 'senior-check', count: 2 },
      { serviceId: 'vaccinations', count: 1 },
      { serviceId: 'bloodwork', count: 1 },
      { serviceId: 'parasite-plan', count: 12 },
      { serviceId: 'nurse-clinic', count: 4 },
    ],
    memberDiscountPercent: 15,
    cardPetExample: 'Tansy · 12 yrs',
    note: 'Senior kidney, thyroid and joint check-ins alongside yearly in-house bloodwork.',
  },
  {
    id: 'willow-rabbit',
    name: 'Willow (rabbit)',
    species: 'rabbit',
    lifeStage: 'adult',
    monthlyPrice: 22,
    includes: [
      { serviceId: 'wellness-exam', count: 2 },
      { serviceId: 'vaccinations', count: 1 },
      { serviceId: 'rabbit-dental', count: 2 },
      { serviceId: 'nurse-clinic', count: 4 },
    ],
    memberDiscountPercent: 10,
    cardPetExample: 'Clover · 3 yrs',
    note: 'Includes two dedicated cheek-tooth and burr checks each year with our rabbit-savvy vet.',
  },
];

/** Compute the 12-month total from monthlyPrice so totals never drift from the monthly figure. */
export function annualPlanTotal(plan: Pick<HealthPlan, 'monthlyPrice'>): number {
  return plan.monthlyPrice * 12;
}

const URL_SAFE_ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function validateHealthPlans(plans: readonly HealthPlan[], availableServices: readonly ServiceItem[]): void {
  const seen = new Set<string>();
  const serviceIds = new Set(availableServices.map(s => s.id));
  const validSpecies = new Set<string>(PLAN_SPECIES_IDS);
  const validStages = new Set<string>(LIFE_STAGES);

  for (const plan of plans) {
    const label = `health plan "${plan.id || '(missing id)'}"`;
    if (!plan.id || !URL_SAFE_ID.test(plan.id)) {
      throw new Error(`${label}: id must be URL-safe lowercase letters, digits and hyphens`);
    }
    if (seen.has(plan.id)) {
      throw new Error(`${label}: duplicate health plan id`);
    }
    seen.add(plan.id);

    if (!plan.name.trim()) throw new Error(`${label}: name is required`);
    if (!validSpecies.has(plan.species)) throw new Error(`${label}: unknown species "${plan.species}"`);
    if (!validStages.has(plan.lifeStage)) throw new Error(`${label}: unknown lifeStage "${plan.lifeStage}"`);
    if (!Number.isInteger(plan.monthlyPrice) || plan.monthlyPrice <= 0) {
      throw new Error(`${label}: monthlyPrice must be a positive integer USD amount`);
    }
    if (!Number.isInteger(plan.memberDiscountPercent) || plan.memberDiscountPercent < 0 || plan.memberDiscountPercent > 20) {
      throw new Error(`${label}: memberDiscountPercent must be an integer between 0 and 20`);
    }
    if (!Array.isArray(plan.includes) || plan.includes.length === 0) {
      throw new Error(`${label}: includes must list at least one service`);
    }
    for (const entry of plan.includes) {
      if (!serviceIds.has(entry.serviceId)) {
        throw new Error(`${label}: included serviceId "${entry.serviceId}" does not exist in services`);
      }
      if (!Number.isInteger(entry.count) || entry.count < 1) {
        throw new Error(`${label}: included service "${entry.serviceId}" count must be an integer of at least 1`);
      }
    }
  }
}
