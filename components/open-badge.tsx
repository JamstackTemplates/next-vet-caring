'use client';

import { useEffect, useState } from 'react';
import { openingStatus, type OpeningHours, type OpeningStatus } from '../lib/hours';
import { site } from '../lib/site';

const NEUTRAL: OpeningStatus = { state: 'unknown', label: 'See opening hours', today: null };

/** Live clinic open-now pill. Neutral static output; browser refreshes every minute in the clinic zone. */
export function OpenBadge({
  hours,
  className = '',
}: {
  hours: readonly OpeningHours[];
  className?: string;
}) {
  const [status, setStatus] = useState<OpeningStatus>(NEUTRAL);

  useEffect(() => {
    const update = () => setStatus(openingStatus(hours, site.timeZone));
    update();
    const timer = setInterval(update, 60_000);
    return () => clearInterval(timer);
  }, [hours]);

  const dotColor =
    status.state === 'open'
      ? 'bg-primary'
      : status.state === 'closed'
        ? 'bg-apricot'
        : 'bg-willow';

  return (
    <span
      data-open-state={status.state}
      className={`inline-flex items-center gap-2 rounded-full border-2 border-apricot/65 bg-card px-3.5 py-1.5 text-sm font-bold text-ink shadow-xs ${className}`}
    >
      <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${dotColor}`} aria-hidden="true" />
      <span>{status.label}</span>
    </span>
  );
}
