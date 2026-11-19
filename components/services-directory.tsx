'use client';

import { useEffect, useState, type MouseEvent } from 'react';
import {
  formatDuration,
  formatServicePrice,
  isSpeciesId,
  SERVICE_CATEGORIES,
  SPECIES,
  type ServiceItem,
  type SpeciesId,
} from '../content/services';
import { ServiceCategoryIcon } from './art/service-icons';
import { SpeciesBadgeArt } from './art/species-badges';

const speciesLabelById = new Map(SPECIES.map(s => [s.id, s.pluralLabel]));

/**
 * Interactive clinic price list with species filter chips synced to `?species=`.
 * Without JavaScript, all services are listed and the chips act as plain anchor links to categories.
 */
export function ServicesDirectory({
  items,
  filterLabel,
  pricingNote,
}: {
  items: readonly ServiceItem[];
  filterLabel: string;
  pricingNote: string;
}) {
  const [selected, setSelected] = useState<SpeciesId | 'all'>('all');

  useEffect(() => {
    const syncFromLocation = () => {
      const param = new URLSearchParams(window.location.search).get('species');
      setSelected(isSpeciesId(param) ? param : 'all');
    };
    syncFromLocation();
    window.addEventListener('popstate', syncFromLocation);
    return () => window.removeEventListener('popstate', syncFromLocation);
  }, []);

  function chooseSpecies(next: SpeciesId | 'all', event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setSelected(next);
    const url = new URL(window.location.href);
    if (next === 'all') {
      url.searchParams.delete('species');
    } else {
      url.searchParams.set('species', next);
    }
    url.hash = '';
    window.history.replaceState(null, '', url.toString());
  }

  const visibleItems =
    selected === 'all' ? items : items.filter(item => item.species.includes(selected));

  const visibleCategories = SERVICE_CATEGORIES.map(category => ({
    ...category,
    rows: visibleItems.filter(item => item.category === category.id),
  })).filter(group => group.rows.length > 0);

  // Plain anchor targets when JavaScript is disabled
  const noJsAnchorForSpecies: Record<SpeciesId | 'all', string> = {
    all: '#wellness',
    dog: '#wellness',
    cat: '#dental',
    rabbit: '#dental',
    'small-pet': '#nurse',
  };

  return (
    <div>
      {/* Species filter chips band */}
      <div className="border-b-2 border-line bg-paper py-6">
        <div className="wrap">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-bold text-muted" id="species-filter-label">
              {filterLabel}
            </p>
            <p className="text-sm font-bold text-primary-ink" role="status" aria-live="polite">
              Showing {visibleItems.length} {visibleItems.length === 1 ? 'service' : 'services'}
              {selected !== 'all' ? ` for ${speciesLabelById.get(selected)}` : ''}
            </p>
          </div>

          <div
            role="group"
            aria-labelledby="species-filter-label"
            className="mt-4 flex flex-wrap items-center gap-3"
          >
            <a
              href={noJsAnchorForSpecies.all}
              onClick={e => chooseSpecies('all', e)}
              aria-current={selected === 'all' ? 'true' : undefined}
              data-species-chip="all"
              className={`inline-flex min-h-11 items-center gap-2 rounded-full border-2 px-4 py-2 font-display text-sm font-semibold no-underline transition-colors ${
                selected === 'all'
                  ? 'border-primary bg-primary text-on-primary'
                  : 'border-line bg-card text-ink hover:border-willow hover:bg-sage-wash'
              }`}
            >
              <span>All pets</span>
            </a>

            {SPECIES.map(sp => {
              const active = selected === sp.id;
              return (
                <a
                  key={sp.id}
                  href={noJsAnchorForSpecies[sp.id]}
                  onClick={e => chooseSpecies(sp.id, e)}
                  aria-current={active ? 'true' : undefined}
                  data-species-chip={sp.id}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-full border-2 pr-4 pl-2 py-1.5 font-display text-sm font-semibold no-underline transition-colors ${
                    active
                      ? 'border-primary bg-primary text-on-primary'
                      : 'border-line bg-card text-ink hover:border-willow hover:bg-sage-wash'
                  }`}
                >
                  <SpeciesBadgeArt species={sp.id} className="h-8 w-8 shrink-0" />
                  <span>{sp.pluralLabel}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Category bands alternating between card/paper ground and sage-wash */}
      {visibleCategories.map((group, idx) => (
        <section
          key={group.id}
          id={group.id}
          aria-labelledby={`heading-${group.id}`}
          className={`border-b-2 border-line py-12 sm:py-14 ${
            idx % 2 === 1 ? 'bg-sage-wash/75' : 'bg-paper'
          }`}
        >
          <div className="wrap grid gap-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:items-start">
            <div className="flex items-start gap-4 lg:flex-col">
              <ServiceCategoryIcon category={group.id} className="h-16 w-16 shrink-0" />
              <div>
                <h2 id={`heading-${group.id}`} className="font-display text-3xl text-ink">
                  {group.label}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{group.summary}</p>
              </div>
            </div>

            {/* Clinic price list styled as ruled record-card rows with dotted leaders */}
            <div className="record-card record-card--plain p-5 sm:p-7">
              <ul className="relative z-10 m-0 divide-y divide-line list-none p-0">
                {group.rows.map(service => (
                  <li
                    key={service.id}
                    data-service-row={service.id}
                    className="py-4 first:pt-1 last:pb-1"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-xl font-semibold text-ink">
                        {service.name}
                      </h3>
                      {!service.available ? (
                        <span className="inline-flex items-center rounded-full border border-alert-border bg-alert-bg px-2.5 py-0.5 text-xs font-extrabold text-alert-ink">
                          Paused, ask us
                        </span>
                      ) : null}
                      <span
                        className="hidden flex-1 border-b-2 border-dotted border-line sm:inline-block"
                        aria-hidden="true"
                      />
                      <span className="font-display text-xl font-semibold text-primary-ink sm:text-2xl">
                        {formatServicePrice(service)}
                      </span>
                    </div>

                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
                      {service.summary}
                    </p>

                    <div className="mt-2.5 flex flex-wrap items-center gap-2 text-xs font-bold">
                      <span className="rounded-full bg-paper px-2.5 py-1 text-muted border border-line">
                        Typical visit: {formatDuration(service.durationMinutes)}
                      </span>
                      {service.species.map(sp => (
                        <span
                          key={sp}
                          className="rounded-full bg-sage-wash px-2.5 py-1 text-primary-ink"
                        >
                          {speciesLabelById.get(sp)}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* Clear USD pricing note */}
      <div className="wrap py-8">
        <p className="max-w-3xl text-sm leading-relaxed text-muted">{pricingNote}</p>
      </div>
    </div>
  );
}
