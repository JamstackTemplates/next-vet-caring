import type { ReactNode } from 'react';
import { business, telHref } from '../content/business';
import { annualPlanTotal, healthPlans } from '../content/health-plans';
import {
  formatDuration,
  formatServicePrice,
  services,
  SPECIES,
} from '../content/services';
import { team } from '../content/team';
import { PawStamp } from './art/paw-stamp';
import { ServiceCategoryIcon } from './art/service-icons';
import { SpeciesBadgeArt } from './art/species-badges';
import { TeamPortrait } from './art/team-portraits';
import { WeighingScaleArt } from './art/weighing-scale';
import { WillowFrondBorder } from './art/willow-frond-border';
import { HealthPlanCard } from './health-plan-card';
import { HoursTable } from './hours-table';
import { OpenBadge } from './open-badge';
import { SiteLink } from './site-link';
import { TimeZoneNote } from './time-zone-note';

/* 1. Home Hero: split asymmetric layout on oat paper with overhanging willow scene */
function HomeHeroRoot({
  heading,
  intro,
  primaryAction,
  emergencyAction,
}: {
  heading: ReactNode;
  intro: ReactNode;
  primaryAction: ReactNode;
  emergencyAction: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-paper pt-5 pb-10 sm:pt-8 sm:pb-14 lg:pt-10 lg:pb-16">
      <div className="wrap grid items-center gap-7 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1.08fr)] lg:gap-10">
        <div className="relative z-10">
          <OpenBadge hours={business.hours} />

          <h1 className="mt-4 max-w-[14ch] text-[clamp(2.25rem,6.4vw,4.35rem)] leading-[1.05] text-ink">
            {heading}
          </h1>

          <p className="mt-4 max-w-[44ch] text-[clamp(1.02rem,1.5vw,1.18rem)] leading-relaxed text-muted">
            {intro}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <SiteLink href="/contact/" className="button text-base sm:px-6 sm:py-3">
              {primaryAction}
            </SiteLink>
            <SiteLink
              href="/after-hours/"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-alert-ink underline underline-offset-4 hover:text-alert"
            >
              <span>{emergencyAction}</span>
              <span aria-hidden="true">→</span>
            </SiteLink>
          </div>

          {/* Pinned clinic record-card tab with phone and Laurelhurst Park address */}
          <div className="record-card record-card--plain mt-6 inline-grid max-w-full gap-1.5 px-4 py-3 sm:mt-7 sm:grid-cols-2 sm:gap-x-6 sm:px-5">
            <div className="relative z-10">
              <span className="block text-[0.7rem] font-extrabold uppercase tracking-[0.11em] text-muted">
                Call the clinic
              </span>
              <a
                href={telHref(business.phone)}
                className="font-display text-lg font-semibold text-primary-ink no-underline hover:underline"
              >
                {business.phone}
              </a>
            </div>
            <div className="relative z-10 sm:border-l sm:border-line sm:pl-5">
              <span className="block text-[0.7rem] font-extrabold uppercase tracking-[0.11em] text-muted">
                Beside Laurelhurst Park
              </span>
              <span className="text-sm font-bold text-ink">{business.address}</span>
            </div>
          </div>
        </div>

        <div
          role="img"
          aria-label="A scruffy terrier sits by the clinic’s green front door under a weeping willow, with a sleeping tabby in the window."
          className="mx-auto aspect-[44/39] w-full max-w-[24rem] rounded-[2rem] bg-sage-wash bg-(image:--home-hero-art) bg-cover bg-center sm:aspect-[75/56] sm:max-w-none lg:mr-0 lg:ml-0 lg:w-[calc(100%+2.5rem)] xl:w-[calc(100%+4rem)]"
        />
      </div>
    </section>
  );
}

/* 2. "What we look after": full-bleed sage-wash band with four species along a curving garden path */
function SpeciesBandRoot({
  eyebrow,
  heading,
  intro,
}: {
  eyebrow: ReactNode;
  heading: ReactNode;
  intro: ReactNode;
}) {
  const offsets = ['lg:translate-y-0', 'lg:-translate-y-5', 'lg:translate-y-3', 'lg:-translate-y-3'];

  return (
    <section className="relative overflow-hidden border-y-2 border-line bg-sage-wash py-14 sm:py-16">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-2.5 text-[clamp(1.9rem,3.6vw,2.8rem)] text-ink">{heading}</h2>
          <p className="mt-3 text-base text-muted">{intro}</p>
        </div>

        <div className="relative mt-10">
          {/* Curving dotted garden path connecting the four species badges on desktop */}
          <svg
            viewBox="0 0 1100 120"
            className="pointer-events-none absolute top-14 left-0 hidden h-28 w-full lg:block"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M70 72 C 260 112, 370 22, 550 58 C 720 92, 850 18, 1030 56"
              stroke="var(--willow-deep)"
              strokeWidth="3"
              strokeDasharray="7 8"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>

          <ul className="relative z-10 m-0 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:py-4">
            {SPECIES.map((sp, idx) => (
              <li key={sp.id} className={offsets[idx]}>
                <SiteLink
                  href={`/services/?species=${sp.id}`}
                  className="group flex flex-col items-center rounded-[1.5rem] border-2 border-line bg-card px-5 py-6 text-center no-underline shadow-sm transition-colors hover:border-primary hover:bg-paper"
                >
                  <SpeciesBadgeArt species={sp.id} className="h-24 w-24 shrink-0" />
                  <h3 className="mt-4 font-display text-2xl font-semibold text-ink group-hover:text-primary-ink">
                    {sp.pluralLabel}
                  </h3>
                  <p className="mt-1.5 text-sm leading-snug text-muted">{sp.homeNote}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary-ink underline decoration-primary/45 underline-offset-4 group-hover:decoration-primary">
                    See {sp.pluralLabel.toLowerCase()} services <span aria-hidden="true">→</span>
                  </span>
                </SiteLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* 3. Featured services: clinic cork-tinted noticeboard with pinned, slightly rotated note cards */
function ServicesNoticeboardRoot({
  eyebrow,
  heading,
  intro,
  ctaLabel,
}: {
  eyebrow: ReactNode;
  heading: ReactNode;
  intro: ReactNode;
  ctaLabel: ReactNode;
}) {
  const featured = services.filter(s => s.featured);
  const noteStyles = [
    'lg:col-span-5 lg:-rotate-[1deg]',
    'lg:col-span-4 lg:rotate-[0.9deg]',
    'lg:col-span-3 lg:-rotate-[0.7deg]',
    'lg:col-span-4 lg:rotate-[1deg]',
    'lg:col-span-4 lg:-rotate-[0.8deg]',
    'lg:col-span-4 lg:rotate-[0.6deg]',
  ];

  return (
    <section className="py-14 sm:py-16">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-[2rem] border-2 border-line bg-cork shadow-md">
          <WillowFrondBorder />

          <div className="px-5 pt-2 pb-9 sm:px-9 sm:pb-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <p className="eyebrow">{eyebrow}</p>
                <h2 className="mt-2 text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink">{heading}</h2>
                <p className="mt-2.5 text-base text-muted">{intro}</p>
              </div>
              <SiteLink href="/services/" className="button button-quiet">
                {ctaLabel}
              </SiteLink>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
              {featured.map((item, idx) => (
                <article
                  key={item.id}
                  data-service-id={item.id}
                  className={`relative rounded-[1.25rem] border-2 border-line bg-card p-5 shadow-sm ${
                    noteStyles[idx % noteStyles.length]
                  }`}
                >
                  {/* Pinned cork thumbtack */}
                  <span
                    className="notice-pin absolute -top-2 left-1/2 -translate-x-1/2"
                    aria-hidden="true"
                  />

                  <div className="flex items-start justify-between gap-3 pt-1">
                    <ServiceCategoryIcon category={item.category} className="h-11 w-11 shrink-0" />
                    <div className="text-right">
                      {!item.available ? (
                        <span className="inline-block rounded-full bg-alert-bg px-2.5 py-0.5 text-xs font-bold text-alert-ink">
                          Paused, ask us
                        </span>
                      ) : null}
                      <p className="font-display text-2xl font-semibold text-primary-ink">
                        {formatServicePrice(item)}
                      </p>
                      <p className="text-xs font-bold text-muted">
                        Typical visit · {formatDuration(item.durationMinutes)}
                      </p>
                    </div>
                  </div>

                  <h3 className="mt-3.5 font-display text-xl font-semibold text-ink">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 4. Health plan teaser: oversized price numeral + tilted signature Willow dog record card */
function PlanTeaserBandRoot({
  eyebrow,
  heading,
  body,
  ctaLabel,
}: {
  eyebrow: ReactNode;
  heading: ReactNode;
  body: ReactNode;
  ctaLabel: ReactNode;
}) {
  const featuredPlan = healthPlans.find(p => p.id === 'willow-dog') ?? healthPlans[0];
  const annual = annualPlanTotal(featuredPlan);

  return (
    <section className="relative overflow-hidden border-y-2 border-line bg-sage-wash/75 pb-14 sm:pb-18">
      <WillowFrondBorder />

      <div className="wrap grid items-center gap-10 pt-4 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-2.5 text-[clamp(1.95rem,3.8vw,2.9rem)] text-ink">{heading}</h2>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-display text-[clamp(3.2rem,6vw,4.8rem)] leading-none font-semibold text-primary-ink">
              ${featuredPlan.monthlyPrice}
            </span>
            <div>
              <span className="block font-display text-xl font-semibold text-ink">
                per month · {featuredPlan.name}
              </span>
              <span className="block text-sm font-semibold text-muted">
                ${annual} / year · plans for dogs, cats &amp; rabbits
              </span>
            </div>
          </div>

          <div className="mt-5 space-y-3 text-base text-muted">{body}</div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <SiteLink href="/health-plan/" className="button">
              {ctaLabel}
            </SiteLink>
            <span className="hand-note text-sm text-apricot-ink">
              Ask at reception or by email — never billed online
            </span>
          </div>
        </div>

        <HealthPlanCard plan={featuredPlan} tilted />
      </div>
    </section>
  );
}

/* 5. Meet the team: three portraits stepped diagonally with handwritten ownPet captions */
function TeamPreviewBandRoot({
  eyebrow,
  heading,
  intro,
  ctaLabel,
}: {
  eyebrow: ReactNode;
  heading: ReactNode;
  intro: ReactNode;
  ctaLabel: ReactNode;
}) {
  // One vet, one nurse, one more vet as specified in PLAN.md
  const previewIds = ['dr-maren-okafor', 'jess-whitlock', 'dr-tomas-reyes'];
  const previewMembers = previewIds
    .map(id => team.find(m => m.id === id))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

  const steps = ['md:translate-y-0', 'md:translate-y-8', 'md:translate-y-16'];

  return (
    <section className="py-14 sm:py-16 md:pb-28">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-2.5 text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink">{heading}</h2>
            <p className="mt-2.5 text-base text-muted">{intro}</p>
          </div>
          <SiteLink href="/team/" className="button button-quiet">
            {ctaLabel}
          </SiteLink>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {previewMembers.map((member, idx) => (
            <article
              key={member.id}
              className={`flex flex-col items-center rounded-[1.6rem] border-2 border-line bg-card px-6 py-7 text-center shadow-sm ${steps[idx]}`}
            >
              <TeamPortrait
                variant={member.portrait}
                alt={`Illustrated portrait of ${member.name} with ${member.ownPet}`}
                className="h-44 w-38"
              />
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink">{member.name}</h3>
              <p className="mt-1 text-sm font-bold text-primary-ink">{member.credentials}</p>
              <p className="mt-2 text-sm text-muted">
                Interests: {member.interests.join(', ')}
              </p>
              <p className="hand-note mt-4 rounded-xl bg-sage-wash/75 px-3.5 py-2 text-sm text-ink">
                Home companion: {member.ownPet}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 6. "Your first visit": horizontal 3-step paw-stamp timeline with clinic weighing scale at end */
export interface FirstVisitStep {
  title: string;
  body: string;
}

function FirstVisitBandRoot({
  eyebrow,
  heading,
  steps,
}: {
  eyebrow: ReactNode;
  heading: ReactNode;
  steps: readonly FirstVisitStep[];
}) {
  return (
    <section className="border-y-2 border-line bg-cork/70 py-14 sm:py-16">
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2.5 text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink">{heading}</h2>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_14rem]">
          <ol className="relative m-0 grid list-none gap-6 p-0 md:grid-cols-3">
            {/* Dotted stitch connector across the 3 paw stamps on desktop */}
            <li
              aria-hidden="true"
              className="pointer-events-none absolute top-9 right-16 left-16 hidden border-t-2 border-dashed border-apricot/60 md:block"
            />
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative z-10 flex gap-4 md:flex-col md:items-start md:gap-3"
              >
                <PawStamp
                  label={String(index + 1)}
                  className="h-18 w-18 shrink-0 rounded-full bg-card p-1 shadow-xs"
                />
                <div className="rounded-2xl border-2 border-line bg-card p-4 shadow-xs">
                  <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex justify-center">
            <WeighingScaleArt className="h-44 w-52" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* 7. Visit us: ruled hours record card + Laurelhurst Park directions & alert-edged ER note */
function VisitUsBandRoot({
  eyebrow,
  heading,
  directionsHeading,
  erHeading,
  erNote,
}: {
  eyebrow: ReactNode;
  heading: ReactNode;
  directionsHeading: ReactNode;
  erHeading: ReactNode;
  erNote: ReactNode;
}) {
  return (
    <section className="py-14 sm:py-16">
      <div className="wrap">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-2.5 text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink">{heading}</h2>
          </div>
          <OpenBadge hours={business.hours} />
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          {/* Hours record card */}
          <div className="record-card record-card--plain p-6 sm:p-7">
            <div className="relative z-10">
              <div className="mb-4 flex items-center justify-between border-b-2 border-line pb-3">
                <h3 className="font-display text-2xl font-semibold text-ink">Clinic opening hours</h3>
                <span className="record-hole" aria-hidden="true" />
              </div>
              <HoursTable hours={business.hours} />
              <TimeZoneNote />
            </div>
          </div>

          {/* Address, park directions & alert-edged emergency partner card */}
          <div className="flex flex-col justify-between gap-6">
            <div className="rounded-[1.5rem] border-2 border-line bg-card p-6 shadow-xs">
              <h3 className="font-display text-2xl font-semibold text-ink">{directionsHeading}</h3>
              <p className="mt-2 font-bold text-primary-ink">{business.address}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{business.directions}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{business.parkingNote}</p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <SiteLink href="/contact/" className="button">
                  Request an appointment
                </SiteLink>
                <a href={telHref(business.phone)} className="text-link text-sm">
                  Call {business.phone}
                </a>
              </div>
            </div>

            <aside
              aria-label="After-hours emergency partner"
              className="rounded-[1.5rem] border-2 border-alert-border bg-alert-bg p-5 text-alert-ink"
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.09em] text-alert">
                {erHeading}
              </p>
              <p className="mt-1.5 font-display text-xl font-semibold text-ink">
                {business.emergencyPartner.name}
              </p>
              <p className="mt-1 text-sm text-alert-ink">{erNote}</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                <a
                  href={telHref(business.emergencyPartner.phone)}
                  className="font-display text-2xl font-semibold text-alert underline"
                >
                  {business.emergencyPartner.phone}
                </a>
                <SiteLink href="/after-hours/" className="text-sm font-bold text-alert-ink underline">
                  After-hours guide →
                </SiteLink>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export const HomeSections = {
  Hero: HomeHeroRoot,
  SpeciesBand: SpeciesBandRoot,
  ServicesNoticeboard: ServicesNoticeboardRoot,
  PlanTeaserBand: PlanTeaserBandRoot,
  TeamPreviewBand: TeamPreviewBandRoot,
  FirstVisitBand: FirstVisitBandRoot,
  VisitUsBand: VisitUsBandRoot,
};
