'use client';

import { useEffect, useState } from 'react';
import { formatClock, openingStatus, type Day, type OpeningHours } from '../lib/hours';
import { site } from '../lib/site';

/** Ruled clinic hours table that highlights today in the browser while showing the full table without JS. */
export function HoursTable({
  hours,
  className = '',
}: {
  hours: readonly OpeningHours[];
  className?: string;
}) {
  const [today, setToday] = useState<Day | null>(null);

  useEffect(() => {
    const update = () => setToday(openingStatus(hours, site.timeZone).today);
    update();
    const timer = setInterval(update, 60_000);
    return () => clearInterval(timer);
  }, [hours]);

  return (
    <table className={`w-full border-collapse text-left text-[0.95rem] ${className}`}>
      <caption className="sr-only">Clinic opening hours</caption>
      <tbody>
        {hours.map(entry => {
          const isToday = today === entry.day;
          const closed = !entry.opens || !entry.closes;
          return (
            <tr
              key={entry.day}
              data-today={isToday ? 'true' : undefined}
              className={`border-b border-line/80 last:border-b-0 ${isToday ? 'bg-sage-wash/80 font-bold text-ink' : ''}`}
            >
              <th scope="row" className="py-2.5 pr-4 pl-2.5 font-semibold">
                <span>{entry.day}</span>
                {isToday ? (
                  <span className="ml-2 inline-block rounded-full bg-apricot/25 px-2 py-0.5 text-xs font-extrabold uppercase tracking-wide text-apricot-ink">
                    Today
                  </span>
                ) : null}
              </th>
              <td className={`py-2.5 pr-2.5 text-right tabular-nums ${closed ? 'text-muted italic' : ''}`}>
                {closed ? 'Closed' : `${formatClock(entry.opens!)} – ${formatClock(entry.closes!)}`}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
