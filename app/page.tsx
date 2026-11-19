import type { Metadata } from 'next';
import { PawTrailDivider } from '../components/art/paw-trail-divider';
import { HomeSections } from '../components/home-sections';
import { absoluteUrl } from '../lib/paths';
import { businessStructuredData, jsonLd } from '../lib/structured-data';

export const metadata: Metadata = {
  alternates: { canonical: absoluteUrl('/') },
};

export default function HomePage() {
  return (
    <>
      <HomeSections.Hero
        heading="Gentle, unhurried care for every paw, claw and whisker."
        intro="An independent neighbourhood vet clinic beside Laurelhurst Park where the same vets and nurses take time to get to know your pet."
        primaryAction="Request an appointment"
        emergencyAction="Emergency? What to do after hours"
      />

      <PawTrailDivider />

      <HomeSections.SpeciesBand
        eyebrow="What we look after"
        heading="Dogs, cats, rabbits and small pets — each with room to settle"
        intro="Pick your companion to filter our clinic price list and see what we look after every week."
      />

      <HomeSections.ServicesNoticeboard
        eyebrow="Clinic noticeboard"
        heading="Everyday care with clear from-prices"
        intro="Six visits our neighbours ask about most. A plain written quote always follows an exam before any extra treatment."
        ctaLabel="See all services & prices"
      />

      <PawTrailDivider flip />

      <HomeSections.PlanTeaserBand
        eyebrow="Monthly Pet Health Plan"
        heading="Routine exams, boosters and monthly prevention on one stamped card"
        body={
          <>
            <p className="m-0">
              Spread the cost of yearly checkups, vaccinations, parasite cover and four nurse
              clinics across twelve steady monthly payments, plus a member discount on other
              listed services.
            </p>
            <p className="m-0">
              Plans are arranged directly with Leo at our front desk or by email enquiry — never
              billed online.
            </p>
          </>
        }
        ctaLabel="Explore all health plans"
      />

      <HomeSections.TeamPreviewBand
        eyebrow="Meet the team"
        heading="Familiar faces who remember your pet’s favourite treats"
        intro="Three vets, two certified veterinary nurses and one practice coordinator — small enough that your animal sees the same gentle hands."
        ctaLabel="Meet everyone & clinic days"
      />

      <PawTrailDivider />

      <HomeSections.FirstVisitBand
        eyebrow="Your first visit"
        heading="Three calm steps from first hello to the weighing scale"
        steps={[
          {
            title: 'Send an enquiry',
            body: 'Tell us your pet’s name, species, age and what you would like us to look at — by form, email or phone.',
          },
          {
            title: 'We confirm a time by reply',
            body: 'Leo checks our vets’ clinic days and replies with a calm appointment slot that suits you both.',
          },
          {
            title: 'Bring any previous records',
            body: 'Share past vaccine cards or ask us to request notes from your previous vet so we start with the full picture.',
          },
        ]}
      />

      <HomeSections.VisitUsBand
        eyebrow="Visit us"
        heading="Right beside Laurelhurst Park, with clear after-hours cover"
        directionsHeading="Find our green front door"
        erHeading="When we are closed"
        erNote="We are never open overnight. For urgent help after hours, on Sundays or holidays, call our 24-hour partner directly:"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(businessStructuredData()) }}
      />
    </>
  );
}
