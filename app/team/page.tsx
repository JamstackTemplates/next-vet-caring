import type { Metadata } from 'next';
import { PawTrailDivider } from '../../components/art/paw-trail-divider';
import { PageHead } from '../../components/page-head';
import { SiteLink } from '../../components/site-link';
import {
  RotaBoardSection,
  SupportTeamSection,
  TeamPeekingPortraits,
  VeterinariansSection,
} from '../../components/team-sections';
import { team } from '../../content/team';
import { absoluteUrl } from '../../lib/paths';

export const metadata: Metadata = {
  title: 'Our team',
  description:
    'Meet the veterinarians, certified veterinary technicians and client care coordinator at Willow Paws Vet Clinic, and see which days each person is in.',
  alternates: { canonical: absoluteUrl('/team/') },
};

export default function TeamPage() {
  const vets = team.filter(m => m.role === 'veterinarian');
  const nurses = team.filter(m => m.role === 'nurse');
  const clientCare = team.filter(m => m.role === 'client-care');

  return (
    <>
      <PageHead
        eyebrow="Our team"
        title="The people your pet gets to know by scent and voice"
        aside={<TeamPeekingPortraits members={vets} />}
      >
        <p className="m-0">
          We keep our team deliberately small and independent so anxious dogs, shy cats and
          curious rabbits see the same calm faces visit after visit.
        </p>
      </PageHead>

      <VeterinariansSection
        eyebrow="Veterinarians"
        heading="Three vets with complementary strengths"
        intro="Let us know in your enquiry if you would like to see a specific vet — especially for rabbit dentistry or an extra-nervous dog."
        vets={vets}
      />

      <SupportTeamSection
        eyebrow="Nurses & client care"
        heading="Certified veterinary technicians and our front desk"
        intro="Our nurses run calm nail, ear and weight clinics alongside anaesthetic care, while Leo looks after health plans and record transfers."
        nurses={nurses}
        clientCare={clientCare}
      />

      <PawTrailDivider />

      <RotaBoardSection
        eyebrow="Weekly clinic rota"
        heading="Which days is my vet in?"
        intro="Use our regular weekly rota below when picking preferred days for your appointment enquiry."
        sundayNote="Sunday: Closed for routine visits — after-hours emergencies are cared for by Riverbend 24-Hour Animal ER."
        members={team}
      />

      <section className="pb-14">
        <div className="wrap">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-[1.75rem] border-2 border-line bg-cork p-7 sm:p-9">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl text-ink sm:text-3xl">
                Would you like to request a specific vet?
              </h2>
              <p className="mt-2 text-base text-muted">
                Mention their name and your preferred days in your message and we will reply to
                confirm a time.
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
