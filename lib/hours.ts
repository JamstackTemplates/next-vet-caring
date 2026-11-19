/** Weekly opening-hours model. Time zone stays in site.config.json. */
export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;
export type Day = typeof DAYS[number];

export interface OpeningHours {
  /** Every weekday occurs exactly once. */
  day: Day;
  /** Inclusive local HH:MM (24-hour); omit both times for a closed day. */
  opens?: string;
  /** Exclusive local HH:MM (24-hour); overnight intervals are deliberately unsupported. */
  closes?: string;
}

export interface OpeningStatus {
  state: 'open' | 'closed' | 'unknown';
  label: string;
  today: Day | null;
}

const clock = /^([01]\d|2[0-3]):[0-5]\d$/;
const minutes = (value: string) => Number(value.slice(0, 2)) * 60 + Number(value.slice(3));

/** Format local HH:MM into warm clinic 12-hour text, e.g. "08:00" -> "8:00 am", "18:30" -> "6:30 pm". */
export function formatClock(value: string): string {
  if (!clock.test(value)) return value;
  const hour24 = Number(value.slice(0, 2));
  const minute = value.slice(3);
  const period = hour24 >= 12 ? 'pm' : 'am';
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return `${hour12}:${minute} ${period}`;
}

export function validateHours(hours: readonly OpeningHours[]): void {
  for (const day of DAYS) {
    const matches = hours.filter(entry => entry.day === day);
    if (matches.length !== 1) throw new Error(`hours: ${day} must occur exactly once`);
    const { opens, closes } = matches[0];
    if (opens === undefined && closes === undefined) continue;
    if (!opens || !closes || !clock.test(opens) || !clock.test(closes) || minutes(opens) >= minutes(closes)) {
      throw new Error(`hours: ${day} needs HH:MM opening before closing; overnight service is unsupported`);
    }
  }
  if (hours.length !== 7) throw new Error('hours: expected seven weekdays');
}

/** Browser callers supply the clock; build/static views never compute current availability. */
export function openingStatus(hours: readonly OpeningHours[], timeZone: string, now = new Date()): OpeningStatus {
  const fallback: OpeningStatus = { state: 'unknown', label: 'See opening hours', today: null };
  if (!timeZone) return fallback;
  validateHours(hours);
  let parts: Intl.DateTimeFormatPart[];
  try {
    parts = new Intl.DateTimeFormat('en-US', {
      timeZone,
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hourCycle: 'h23',
    }).formatToParts(now);
  } catch {
    return fallback;
  }
  const part = (type: string) => parts.find(entry => entry.type === type)?.value ?? '';
  const todayName = part('weekday') as Day;
  const index = DAYS.indexOf(todayName);
  if (index < 0) return fallback;
  const current = Number(part('hour')) * 60 + Number(part('minute'));
  const today = hours.find(entry => entry.day === DAYS[index])!;
  if (today.opens && today.closes && current >= minutes(today.opens) && current < minutes(today.closes)) {
    return { state: 'open', label: `Open now · closes ${formatClock(today.closes)}`, today: todayName };
  }
  for (let offset = 0; offset <= 7; offset++) {
    const day = DAYS[(index + offset) % 7];
    const entry = hours.find(value => value.day === day)!;
    if (entry.opens && (offset > 0 || current < minutes(entry.opens))) {
      return {
        state: 'closed',
        label: `Closed · opens ${offset === 0 ? 'today' : day} ${formatClock(entry.opens)}`,
        today: todayName,
      };
    }
  }
  return { state: 'closed', label: 'Closed · see opening hours', today: todayName };
}

/** Convenience label helper used by badges and tests. */
export function openingLabel(hours: readonly OpeningHours[], timeZone: string, now = new Date()): string {
  return openingStatus(hours, timeZone, now).label;
}
