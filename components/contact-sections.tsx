import type { ReactNode } from 'react';
import { business, telHref } from '../content/business';
import { CopyEmail } from './copy-email';
import { GoogleMap } from './google-map';
import { HoursTable } from './hours-table';
import { JamstacksSupportForm } from './jamstacks-support-form';
import { OpenBadge } from './open-badge';
import { SiteLink } from './site-link';
import { TimeZoneNote } from './time-zone-note';

/** Always-visible emergency notice shown above the Contact form in both configured and unconfigured states. */
export function ContactEmergencyNotice({
  heading,
  body,
  afterHoursLinkLabel,
}: {
  heading: ReactNode;
  body: ReactNode;
  afterHoursLinkLabel: ReactNode;
}) {
  return (
    <div className="wrap pt-8">
      <aside
        aria-label="Emergency notice"
        className="flex flex-wrap items-center justify-between gap-4 rounded-[1.4rem] border-2 border-alert-border bg-alert-bg px-5 py-4 text-alert-ink"
      >
        <div className="max-w-3xl">
          <p className="font-display text-lg font-semibold text-ink">{heading}</p>
          <p className="mt-1 text-sm leading-relaxed text-alert-ink">
            {body}{' '}
            <a href={telHref(business.emergencyPartner.phone)} className="font-extrabold text-alert underline">
              {business.emergencyPartner.phone}
            </a>
            .
          </p>
        </div>
        <SiteLink href="/after-hours/" className="button button-alert !min-h-10 !text-sm whitespace-nowrap">
          {afterHoursLinkLabel}
        </SiteLink>
      </aside>
    </div>
  );
}

/** Main two-column Contact layout: record-card form/fallback + message guidance on left; clinic details, hours & map on right. */
export function ContactWorkspace({
  hosted,
  siteId,
  embedUrl,
  formCardHeading,
  formCardReplyNote,
  fallbackHeading,
  fallbackBody,
  guidanceHeading,
  guidanceItems,
  detailsHeading,
  directionsHeading,
}: {
  hosted: boolean;
  siteId: string;
  embedUrl: string;
  formCardHeading: ReactNode;
  formCardReplyNote: ReactNode;
  fallbackHeading: ReactNode;
  fallbackBody: ReactNode;
  guidanceHeading: ReactNode;
  guidanceItems: readonly string[];
  detailsHeading: ReactNode;
  directionsHeading: ReactNode;
}) {
  return (
    <div className="wrap grid gap-10 py-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start">
      {/* Left column: hosted form (or email fallback) inside a record card + handwritten message guidance checklist */}
      <div className="space-y-6">
        <section aria-label="Enquiry form" className="record-card record-card--plain p-6 sm:p-8">
          <div className="relative z-10">
            <div className="mb-4 flex items-start justify-between gap-3 border-b-2 border-line pb-4">
              <div>
                <h2 className="font-display text-2xl text-ink">{formCardHeading}</h2>
                <p className="mt-1 text-sm text-muted">{formCardReplyNote}</p>
              </div>
              <span className="record-hole shrink-0" aria-hidden="true" />
            </div>

            {hosted ? (
              <JamstacksSupportForm siteId={siteId} embedUrl={embedUrl} email={business.email} />
            ) : (
              <div className="rounded-2xl border-2 border-dashed border-line bg-paper p-5">
                <h3 className="font-display text-xl text-ink">{fallbackHeading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{fallbackBody}</p>
                <p className="mt-3">
                  <a className="text-link text-base wrap-anywhere" href={`mailto:${business.email}`}>
                    {business.email}
                  </a>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Handwritten message guidance checklist beside/below the form (never extra inputs) */}
        <section aria-labelledby="message-guidance-heading" className="rounded-[1.5rem] border-2 border-line bg-sage-wash/75 p-6">
          <h2 id="message-guidance-heading" className="hand-note text-xl font-semibold text-primary-ink">
            {guidanceHeading}
          </h2>
          <ul className="m-0 mt-4 space-y-2.5 list-none p-0">
            {guidanceItems.map(item => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                <span
                  className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-apricot"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Right column: public email, phone, address, live open-now status, hours & Laurelhurst Park map */}
      <aside aria-label="Clinic details and directions" className="space-y-6">
        <div className="record-card record-card--plain p-6 sm:p-7">
          <div className="relative z-10 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-display text-2xl text-ink">{detailsHeading}</h2>
              <OpenBadge hours={business.hours} />
            </div>

            <div className="space-y-3 border-y border-line py-4 text-sm">
              <div>
                <span className="block text-xs font-extrabold uppercase tracking-[0.09em] text-muted">
                  Email (always monitored during clinic hours)
                </span>
                <a className="text-link mt-1 inline-block text-base wrap-anywhere" href={`mailto:${business.email}`}>
                  {business.email}
                </a>
                <div className="mt-2.5 flex flex-wrap items-center gap-3">
                  <CopyEmail email={business.email} />
                </div>
              </div>

              <div className="pt-2">
                <span className="block text-xs font-extrabold uppercase tracking-[0.09em] text-muted">
                  Clinic phone
                </span>
                <a
                  className="font-display mt-0.5 inline-block text-xl font-semibold text-primary-ink underline"
                  href={telHref(business.phone)}
                >
                  {business.phone}
                </a>
              </div>

              <div className="pt-2">
                <span className="block text-xs font-extrabold uppercase tracking-[0.09em] text-muted">
                  Address
                </span>
                <p className="mt-0.5 font-bold text-ink">{business.address}</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-display text-lg text-ink">Opening hours</h3>
              <HoursTable hours={business.hours} />
              <TimeZoneNote />
            </div>
          </div>
        </div>

        <div className="rounded-[1.5rem] border-2 border-line bg-card p-6 shadow-xs">
          <h2 className="font-display text-2xl text-ink">{directionsHeading}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">{business.directions}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{business.parkingNote}</p>
          <div className="mt-4 overflow-hidden rounded-2xl border-2 border-line">
            <GoogleMap
              address={business.landmark}
              title={`Map showing ${business.name} beside ${business.landmark}`}
            />
          </div>
        </div>
      </aside>
    </div>
  );
}
