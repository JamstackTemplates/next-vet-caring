import type { ReactNode } from 'react';
import { SPECIES } from '../content/services';
import {
  CLINIC_DAY_INFO,
  type ClinicDay,
  type TeamMember,
} from '../content/team';
import { TeamPortrait } from './art/team-portraits';

const speciesLabelById = new Map(SPECIES.map(s => [s.id, s.pluralLabel]));
const OPEN_WEEK_DAYS: readonly ClinicDay[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

function formatClinicDays(days: readonly ClinicDay[]): string {
  return days.map(d => CLINIC_DAY_INFO[d].short).join(' · ');
}

/** Three miniature portraits peeking into the Our team PageHead. */
export function TeamPeekingPortraits({ members }: { members: readonly TeamMember[] }) {
  return (
    <div className="flex items-end justify-center gap-3 sm:gap-4">
      {members.slice(0, 3).map((member, idx) => (
        <div
          key={member.id}
          className={`flex flex-col items-center ${
            idx === 1 ? '-translate-y-2' : 'translate-y-1'
          }`}
        >
          <TeamPortrait
            variant={member.portrait}
            alt={`Portrait of ${member.name}`}
            className="h-28 w-24 sm:h-32 sm:w-28"
          />
        </div>
      ))}
    </div>
  );
}

/** Veterinarians rendered in an asymmetric 2 + 1 record-card arrangement. */
export function VeterinariansSection({
  eyebrow,
  heading,
  intro,
  vets,
}: {
  eyebrow: ReactNode;
  heading: ReactNode;
  intro: ReactNode;
  vets: readonly TeamMember[];
}) {
  const topPair = vets.slice(0, 2);
  const featuredThird = vets.slice(2);

  return (
    <section className="py-12 sm:py-16">
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2.5 text-[clamp(1.85rem,3.4vw,2.65rem)] text-ink">{heading}</h2>
        <p className="mt-2.5 max-w-2xl text-base text-muted">{intro}</p>

        {/* Asymmetric 2+1 layout */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {topPair.map(vet => (
            <article key={vet.id} className="record-card record-card--plain p-6 sm:p-7">
              <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-start">
                <TeamPortrait
                  variant={vet.portrait}
                  alt={`Illustrated portrait of ${vet.name} with ${vet.ownPet}`}
                  className="mx-auto h-44 w-38 shrink-0 sm:mx-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-ink">{vet.name}</h3>
                      <p className="mt-0.5 text-sm font-bold text-primary-ink">{vet.credentials}</p>
                    </div>
                    <span className="record-hole shrink-0" aria-hidden="true" />
                  </div>

                  <p className="mt-3 text-sm text-muted">
                    <strong className="text-ink">Special interests:</strong>{' '}
                    {vet.interests.join(', ')}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    <strong className="text-ink">Clinic days:</strong>{' '}
                    {formatClinicDays(vet.clinicDays)}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {vet.species.map(sp => (
                      <span
                        key={sp}
                        className="rounded-full bg-sage-wash px-2.5 py-0.5 text-xs font-bold text-primary-ink"
                      >
                        {speciesLabelById.get(sp)}
                      </span>
                    ))}
                  </div>

                  <p className="hand-note mt-4 rounded-xl bg-paper px-3.5 py-2 text-sm text-apricot-ink border border-line">
                    At home: {vet.ownPet}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Third vet spans full width in a horizontal feature card */}
        {featuredThird.map(vet => (
          <article key={vet.id} className="record-card record-card--plain mt-6 p-6 sm:p-8">
            <div className="relative z-10 grid items-center gap-6 md:grid-cols-[12rem_minmax(0,1fr)_minmax(0,0.8fr)]">
              <TeamPortrait
                variant={vet.portrait}
                alt={`Illustrated portrait of ${vet.name} with ${vet.ownPet}`}
                className="mx-auto h-48 w-40 shrink-0"
              />
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {vet.name}
                </h3>
                <p className="mt-1 text-sm font-bold text-primary-ink">{vet.credentials}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  <strong className="text-ink">Special interests:</strong>{' '}
                  {vet.interests.join(', ')}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {vet.species.map(sp => (
                    <span
                      key={sp}
                      className="rounded-full bg-sage-wash px-2.5 py-0.5 text-xs font-bold text-primary-ink"
                    >
                      {speciesLabelById.get(sp)}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-3 border-t border-line pt-4 md:border-t-0 md:border-l md:pt-0 md:pl-6">
                <p className="text-sm text-muted">
                  <strong className="block text-ink">Clinic days</strong>
                  {formatClinicDays(vet.clinicDays)}
                </p>
                <p className="hand-note rounded-xl bg-paper px-3.5 py-2.5 text-sm text-apricot-ink border border-line">
                  At home: {vet.ownPet}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/** Nurses & Client Care as a horizontal row of smaller leaf-edged oval portrait cards. */
export function SupportTeamSection({
  eyebrow,
  heading,
  intro,
  nurses,
  clientCare,
}: {
  eyebrow: ReactNode;
  heading: ReactNode;
  intro: ReactNode;
  nurses: readonly TeamMember[];
  clientCare: readonly TeamMember[];
}) {
  const combined = [...nurses, ...clientCare];

  return (
    <section className="border-y-2 border-line bg-sage-wash/75 py-12 sm:py-16">
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2.5 text-[clamp(1.85rem,3.4vw,2.65rem)] text-ink">{heading}</h2>
        <p className="mt-2.5 max-w-2xl text-base text-muted">{intro}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {combined.map(member => (
            <article
              key={member.id}
              className="flex flex-col items-center rounded-[1.5rem] border-2 border-line bg-card p-6 text-center shadow-xs"
            >
              <TeamPortrait
                variant={member.portrait}
                alt={`Illustrated portrait of ${member.name} with ${member.ownPet}`}
                className="h-36 w-30"
              />
              <span className="mt-3 rounded-full bg-sage-wash px-3 py-0.5 text-xs font-extrabold uppercase tracking-wider text-primary-ink">
                {member.role === 'nurse' ? 'Registered vet nurse' : 'Client care'}
              </span>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{member.name}</h3>
              <p className="text-sm font-bold text-primary-ink">{member.credentials}</p>
              <p className="mt-2 text-sm text-muted">{member.interests.join(' · ')}</p>
              <p className="mt-2 text-xs font-bold text-muted">
                In clinic: {formatClinicDays(member.clinicDays)}
              </p>
              <p className="hand-note mt-4 w-full rounded-xl bg-paper px-3 py-2 text-sm text-apricot-ink border border-line">
                {member.ownPet}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Static Mon–Sat clinic rota board built from team clinicDays at build time (zero JS required). */
export function RotaBoardSection({
  eyebrow,
  heading,
  intro,
  sundayNote,
  members,
}: {
  eyebrow: ReactNode;
  heading: ReactNode;
  intro: ReactNode;
  sundayNote: ReactNode;
  members: readonly TeamMember[];
}) {
  return (
    <section className="py-12 sm:py-16">
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2.5 text-[clamp(1.85rem,3.4vw,2.65rem)] text-ink">{heading}</h2>
        <p className="mt-2.5 max-w-2xl text-base text-muted">{intro}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {OPEN_WEEK_DAYS.map(day => {
            const onDuty = members.filter(m => m.clinicDays.includes(day));
            return (
              <div
                key={day}
                data-rota-day={day}
                className="rounded-[1.35rem] border-2 border-line bg-card p-4 shadow-xs"
              >
                <h3 className="border-b-2 border-line pb-2 font-display text-lg font-semibold text-primary-ink">
                  {CLINIC_DAY_INFO[day].full}
                </h3>
                <ul className="m-0 mt-3 grid list-none gap-2.5 p-0">
                  {onDuty.map(member => (
                    <li
                      key={`${day}-${member.id}`}
                      className="flex items-center gap-2 rounded-xl bg-paper px-2 py-1.5 border border-line/80"
                    >
                      <TeamPortrait
                        variant={member.portrait}
                        alt={member.name}
                        compact
                        className="h-9 w-8 shrink-0"
                      />
                      <div className="min-w-0 leading-tight">
                        <span className="block truncate text-xs font-bold text-ink">
                          {member.name}
                        </span>
                        <span className="block truncate text-[0.7rem] text-muted">
                          {member.role === 'veterinarian'
                            ? 'Vet'
                            : member.role === 'nurse'
                              ? 'Nurse'
                              : 'Reception'}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-5 text-sm text-muted">{sundayNote}</p>
      </div>
    </section>
  );
}
