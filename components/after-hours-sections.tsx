import type { ReactNode } from 'react';
import { business, telHref } from '../content/business';
import { AfterHoursLampScene } from './art/after-hours-lamp';
import { WillowFrondBorder } from './art/willow-frond-border';
import { SiteLink } from './site-link';

/** Deep-green night-time header band for After hours with the ER phone number largest on the page. */
export function AfterHoursHero({
  eyebrow,
  heading,
  intro,
  partnerLabel,
}: {
  eyebrow: ReactNode;
  heading: ReactNode;
  intro: ReactNode;
  partnerLabel: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b-2 border-[#2C5638] bg-[#163620] text-[#F4F6EA]">
      <WillowFrondBorder tone="canopy" />

      <div className="wrap grid items-center gap-8 pt-4 pb-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:pb-14">
        <div>
          <p className="eyebrow !text-[#B6D9A5]">{eyebrow}</p>
          <h1 className="mt-3 max-w-[16ch] text-[clamp(2.2rem,5vw,3.6rem)] text-[#FFFDF6]">
            {heading}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#D8E5D3] sm:text-lg">
            {intro}
          </p>

          {/* Largest text on the page: partner ER telephone number as a clear tel: link */}
          <div className="mt-7 rounded-[1.5rem] border-2 border-[#8F4A40] bg-[#3A1A16] p-5 sm:p-6">
            <p className="text-xs font-extrabold uppercase tracking-[0.11em] text-[#F5B7AE]">
              {partnerLabel}
            </p>
            <p className="mt-1 font-display text-xl font-semibold text-[#FFFDF6]">
              {business.emergencyPartner.name}
            </p>
            <a
              href={telHref(business.emergencyPartner.phone)}
              className="mt-2 inline-block font-display text-[clamp(2.5rem,7vw,4.35rem)] leading-none font-semibold tracking-tight text-[#FFFDF6] underline decoration-[#EFA470] decoration-4 underline-offset-8 hover:text-[#FAD7A0]"
            >
              {business.emergencyPartner.phone}
            </a>
            <p className="mt-3 text-sm font-semibold text-[#F6CEC8]">
              {business.emergencyPartner.address} · {business.emergencyPartner.hoursNote}
            </p>
            <p className="mt-1 text-xs text-[#E4B8B1]">
              {business.emergencyPartner.directionsNote}
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <AfterHoursLampScene className="w-full max-w-[26rem]" />
        </div>
      </div>
    </header>
  );
}

/** Contrasting side-by-side triage lists: "Call now if..." vs "Can usually wait if...". */
export function TriageComparisonSection({
  urgentHeading,
  urgentIntro,
  urgentItems,
  waitHeading,
  waitIntro,
  waitItems,
}: {
  urgentHeading: ReactNode;
  urgentIntro: ReactNode;
  urgentItems: readonly string[];
  waitHeading: ReactNode;
  waitIntro: ReactNode;
  waitItems: readonly string[];
}) {
  return (
    <section className="py-12 sm:py-16">
      <div className="wrap grid gap-7 lg:grid-cols-2">
        {/* Urgent column */}
        <article className="rounded-[1.6rem] border-2 border-alert-border bg-alert-bg p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-alert-strip-bg font-display text-xl font-bold text-alert-strip-ink"
              aria-hidden="true"
            >
              !
            </span>
            <h2 className="font-display text-2xl text-ink sm:text-3xl">{urgentHeading}</h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-alert-ink">{urgentIntro}</p>
          <ul className="m-0 mt-5 space-y-3 list-none p-0">
            {urgentItems.map(item => (
              <li key={item} className="flex items-start gap-3 text-[0.95rem] font-semibold text-ink">
                <span
                  className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-alert"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* Usually safe to wait column */}
        <article className="rounded-[1.6rem] border-2 border-willow bg-sage-wash/80 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary"
              aria-hidden="true"
            >
              <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none">
                <path d="M4 11 C 7 6, 13 4, 16 4 C 16 10, 12 15, 6 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M5 15 L 12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <h2 className="font-display text-2xl text-ink sm:text-3xl">{waitHeading}</h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">{waitIntro}</p>
          <ul className="m-0 mt-5 space-y-3 list-none p-0">
            {waitItems.map(item => (
              <li key={item} className="flex items-start gap-3 text-[0.95rem] font-medium text-ink">
                <span
                  className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

/** Carrier checklist and next-working-day continuity + non-emergency form reminder. */
export function CarrierChecklistAndFollowUp({
  checklistHeading,
  checklistItems,
  followUpHeading,
  followUpBody,
  formReminderHeading,
  formReminderBody,
}: {
  checklistHeading: ReactNode;
  checklistItems: readonly string[];
  followUpHeading: ReactNode;
  followUpBody: ReactNode;
  formReminderHeading: ReactNode;
  formReminderBody: ReactNode;
}) {
  return (
    <section className="border-t-2 border-line bg-cork/60 py-12 sm:py-16">
      <div className="wrap grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="record-card p-6 sm:p-7">
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-display text-2xl text-ink">{checklistHeading}</h2>
              <span className="record-hole shrink-0" aria-hidden="true" />
            </div>
            <ul className="m-0 mt-5 space-y-3 list-none p-0">
              {checklistItems.map(item => (
                <li key={item} className="flex items-start gap-3 text-sm font-semibold text-ink">
                  <span
                    className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 border-primary bg-sage-wash text-xs font-extrabold text-primary-ink"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[1.5rem] border-2 border-line bg-card p-6 shadow-xs">
            <h2 className="font-display text-2xl text-ink">{followUpHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{followUpBody}</p>
            <p className="mt-4 text-sm font-bold text-ink">
              During opening hours, call our desk on{' '}
              <a href={telHref(business.phone)} className="text-link">
                {business.phone}
              </a>
              .
            </p>
          </div>

          <aside className="rounded-[1.5rem] border-2 border-alert-border bg-alert-bg p-6">
            <h2 className="font-display text-xl text-ink">{formReminderHeading}</h2>
            <p className="mt-2 text-sm leading-relaxed text-alert-ink">{formReminderBody}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <a
                href={telHref(business.emergencyPartner.phone)}
                className="button button-alert !min-h-10 !text-sm"
              >
                Call ER: {business.emergencyPartner.phone}
              </a>
              <SiteLink href="/contact/" className="text-link text-sm">
                Non-urgent enquiry form
              </SiteLink>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
