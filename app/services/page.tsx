import type { Metadata } from 'next';
import { PageHead } from '../../components/page-head';
import { ServicesDirectory } from '../../components/services-directory';
import { SiteLink } from '../../components/site-link';
import { services } from '../../content/services';
import { absoluteUrl } from '../../lib/paths';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Wellness exams, vaccinations, dental care, routine surgery, in-house diagnostics and nurse clinics for dogs, cats, rabbits and small pets, with clear from-prices in USD.',
  alternates: { canonical: absoluteUrl('/services/') },
};

export default function ServicesPage() {
  return (
    <>
      <PageHead eyebrow="Services & prices" title="Unhurried veterinary care, priced plainly">
        <p className="m-0">
          Everything we do under our willow tree — from first puppy and kitten visits to rabbit
          tooth checks and nurse nail clinics. Filter by species to jump straight to what fits
          your pet.
        </p>
      </PageHead>

      <ServicesDirectory
        items={services}
        filterLabel="Filter by species"
        pricingNote="All listed figures are “from” prices in USD to help you plan ahead. Because weight, age and clinical findings vary from pet to pet, your vet will always give you a clear written quote after examining your animal before any extra treatment goes ahead."
      />

      <section className="pb-14">
        <div className="wrap">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-[1.75rem] border-2 border-line bg-sage-wash p-7 sm:p-9">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl text-ink sm:text-3xl">
                Not sure which appointment to ask for?
              </h2>
              <p className="mt-2 text-base text-muted">
                Tell us what you have noticed and which days work best. We will reply to suggest
                the right appointment length and confirm a time.
              </p>
            </div>
            <SiteLink href="/contact/" className="button">
              Request an appointment
            </SiteLink>
          </div>
        </div>
      </section>
    </>
  );
}
