import type { ReactNode } from 'react';
import {
  healthPlans,
  PLAN_SPECIES_IDS,
  PLAN_SPECIES_LABELS,
} from '../content/health-plans';
import { PawStamp } from './art/paw-stamp';
import { SpeciesBadgeArt } from './art/species-badges';
import { HealthPlanCard } from './health-plan-card';
import { SiteLink } from './site-link';

export interface PlanStep {
  title: string;
  body: string;
}

export interface PlanFaq {
  question: string;
  answer: string;
}

/** Three stamped steps explaining how the monthly Pet Health Plan works. */
export function HowItWorksBand({
  eyebrow,
  heading,
  steps,
}: {
  eyebrow: ReactNode;
  heading: ReactNode;
  steps: readonly PlanStep[];
}) {
  return (
    <section className="py-12 sm:py-14">
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2.5 text-[clamp(1.85rem,3.4vw,2.65rem)] text-ink">{heading}</h2>

        <ol className="m-0 mt-8 grid list-none gap-6 p-0 md:grid-cols-3">
          {steps.map((step, idx) => (
            <li
              key={step.title}
              className="flex flex-col rounded-[1.45rem] border-2 border-line bg-card p-6 shadow-xs"
            >
              <PawStamp label={String(idx + 1)} className="h-16 w-16" />
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** All health plans grouped by species, each rendered as a signature paw-stamp record card. */
export function PlansBySpeciesSection({
  heading,
  intro,
}: {
  heading: ReactNode;
  intro: ReactNode;
}) {
  return (
    <section className="border-y-2 border-line bg-sage-wash/75 py-12 sm:py-16">
      <div className="wrap">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink">{heading}</h2>
          <p className="mt-2.5 text-base text-muted">{intro}</p>
        </div>

        <div className="mt-10 space-y-12">
          {PLAN_SPECIES_IDS.map(speciesId => {
            const group = healthPlans.filter(p => p.species === speciesId);
            return (
              <div key={speciesId} id={`plans-${speciesId}`}>
                <div className="mb-5 flex items-center gap-3">
                  <SpeciesBadgeArt species={speciesId} className="h-12 w-12 shrink-0" />
                  <h3 className="font-display text-3xl text-ink">
                    {PLAN_SPECIES_LABELS[speciesId]}
                  </h3>
                </div>

                <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                  {group.map(plan => (
                    <HealthPlanCard key={plan.id} plan={plan} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Crossed-out exclusions clinic note + folded record-tab FAQs (<details>). */
export function ExclusionsAndFaqSection({
  exclusionsHeading,
  exclusionsIntro,
  exclusions,
  faqHeading,
  faqs,
  ctaHeading,
  ctaBody,
  ctaLabel,
}: {
  exclusionsHeading: ReactNode;
  exclusionsIntro: ReactNode;
  exclusions: readonly string[];
  faqHeading: ReactNode;
  faqs: readonly PlanFaq[];
  ctaHeading: ReactNode;
  ctaBody: ReactNode;
  ctaLabel: ReactNode;
}) {
  return (
    <section className="py-14 sm:py-16">
      <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
        {/* Crossed-out clinic note for what is not included */}
        <aside
          aria-labelledby="exclusions-heading"
          className="record-card p-6 sm:p-7"
        >
          <div className="relative z-10">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="eyebrow">Good to know</p>
                <h2 id="exclusions-heading" className="mt-2 font-display text-2xl text-ink">
                  {exclusionsHeading}
                </h2>
              </div>
              <span className="record-hole shrink-0" aria-hidden="true" />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{exclusionsIntro}</p>
            <ul className="m-0 mt-5 space-y-2.5 list-none p-0">
              {exclusions.map(item => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-semibold text-ink"
                >
                  <span
                    className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-alert-border bg-alert-bg text-xs font-extrabold text-alert"
                    aria-hidden="true"
                  >
                    ×
                  </span>
                  <span className="line-through decoration-alert/60 decoration-2">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Folded record-tab FAQs using native <details> (no heading inside <summary>) */}
        <section aria-labelledby="plan-faq-heading" className="space-y-3">
          <h2 id="plan-faq-heading" className="mb-4 font-display text-3xl text-ink">
            {faqHeading}
          </h2>
          {faqs.map(faq => (
            <details key={faq.question} className="faq-tab">
              <summary>{faq.question}</summary>
              <div className="px-5 pt-0 pb-5 pl-12 text-sm leading-relaxed text-muted">
                <p className="m-0">{faq.answer}</p>
              </div>
            </details>
          ))}
        </section>
      </div>

      {/* Bottom CTA band */}
      <div className="wrap mt-14">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[1.75rem] border-2 border-line bg-cork p-7 sm:p-9">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl text-ink sm:text-3xl">{ctaHeading}</h2>
            <p className="mt-2 text-base text-muted">{ctaBody}</p>
          </div>
          <SiteLink href="/contact/" className="button">
            {ctaLabel}
          </SiteLink>
        </div>
      </div>
    </section>
  );
}
