import {
  annualPlanTotal,
  LIFE_STAGE_LABELS,
  type HealthPlan,
} from '../content/health-plans';
import { services } from '../content/services';
import { PawStamp } from './art/paw-stamp';

const serviceById = new Map(services.map(s => [s.id, s]));

/**
 * Signature element: the paw-stamp patient record card.
 * Shows punched hole, Shantell Sans pet note, monthly price, computed annual total,
 * and inked apricot paw stamps sized directly from the plan's included counts.
 */
export function HealthPlanCard({
  plan,
  tilted = false,
  className = '',
}: {
  plan: HealthPlan;
  tilted?: boolean;
  className?: string;
}) {
  const annual = annualPlanTotal(plan);
  let animatedStampAssigned = false;

  return (
    <article
      tabIndex={0}
      aria-label={`${plan.name} health plan, $${plan.monthlyPrice} per month`}
      className={`record-card paw-stamp-card p-6 sm:p-7 ${tilted ? 'lg:rotate-[1.2deg]' : ''} ${className}`}
    >
      {/* Top record header with punched binder hole and handwritten pet name */}
      <div className="relative z-10 flex items-start justify-between gap-4 border-b-2 border-line pb-4">
        <div>
          <span className="inline-flex items-center rounded-full bg-sage-wash px-3 py-0.5 text-xs font-extrabold uppercase tracking-wider text-primary-ink">
            {LIFE_STAGE_LABELS[plan.lifeStage]}
          </span>
          <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{plan.name}</h3>
          <p className="hand-note mt-1 text-base text-apricot-ink">
            Patient card · {plan.cardPetExample}
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="record-hole" aria-hidden="true" />
          <div className="text-right">
            <p className="font-display text-3xl leading-none font-semibold text-primary-ink sm:text-4xl">
              ${plan.monthlyPrice}
              <span className="text-base font-medium text-muted">/mo</span>
            </p>
            <p className="mt-1 text-xs font-bold text-muted" data-annual-total={annual}>
              ${annual} / year (12 monthly payments)
            </p>
          </div>
        </div>
      </div>

      {/* Included items rendered as a paw-print rubber-stamp grid */}
      <div className="relative z-10 mt-5 space-y-3">
        <p className="text-xs font-extrabold uppercase tracking-[0.09em] text-muted">
          Included stamps each year
        </p>
        <ul className="m-0 grid list-none gap-3 p-0">
          {plan.includes.map(inc => {
            const service = serviceById.get(inc.serviceId);
            const serviceName = service?.name ?? inc.serviceId;
            const useTally = inc.count > 4;
            const stampCount = useTally ? 1 : inc.count;

            return (
              <li
                key={inc.serviceId}
                className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 border-b border-dotted border-line pb-2.5 last:border-b-0 last:pb-0"
              >
                <div className="min-w-0 flex-1">
                  <span className="text-[0.95rem] font-bold text-ink">{serviceName}</span>
                  <span className="ml-2 text-xs font-semibold text-muted">
                    {inc.count === 12 ? 'Monthly (×12)' : `×${inc.count} / year`}
                  </span>
                </div>
                <div
                  className="flex shrink-0 items-center gap-1"
                  aria-label={`${inc.count} ${serviceName} included per year`}
                >
                  {useTally ? (
                    <PawStamp
                      label={`×${inc.count}`}
                      className="h-10 w-10 -rotate-3"
                    />
                  ) : (
                    Array.from({ length: stampCount }).map((_, idx) => {
                      const shouldAnimate = !animatedStampAssigned && idx === stampCount - 1;
                      if (shouldAnimate) animatedStampAssigned = true;
                      return (
                        <PawStamp
                          key={idx}
                          className={`h-8 w-8 ${idx % 2 === 0 ? '-rotate-6' : 'rotate-6'} ${
                            shouldAnimate ? 'paw-stamp-press' : ''
                          }`}
                        />
                      );
                    })
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Member discount & enquiry footer */}
      <div className="relative z-10 mt-5 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-sage-wash/80 px-3.5 py-2.5 text-sm">
        <span className="font-bold text-primary-ink">
          +{plan.memberDiscountPercent}% off other listed services
        </span>
        <span className="hand-note text-xs text-muted">Next due: stamped at each visit</span>
      </div>

      {plan.note ? (
        <p className="relative z-10 mt-3 text-sm leading-snug text-muted">{plan.note}</p>
      ) : null}
    </article>
  );
}
