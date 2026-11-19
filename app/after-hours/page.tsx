import type { Metadata } from 'next';
import {
  AfterHoursHero,
  CarrierChecklistAndFollowUp,
  TriageComparisonSection,
} from '../../components/after-hours-sections';
import { absoluteUrl } from '../../lib/paths';

export const metadata: Metadata = {
  title: 'After hours & emergencies',
  description:
    'What to do when Willow Paws Vet Clinic is closed: 24-hour emergency contact for Riverbend 24-Hour Animal ER, urgent signs to act on straight away, and what to bring.',
  alternates: { canonical: absoluteUrl('/after-hours/') },
};

export default function AfterHoursPage() {
  return (
    <>
      <AfterHoursHero
        eyebrow="After-hours & urgent care"
        heading="When our porch lamp is on and the clinic is closed"
        intro="Willow Paws is a daytime neighbourhood clinic and is never open overnight or on Sundays. If your pet needs urgent care right now, call our 24-hour Portland partner straight away."
        partnerLabel="24-hour emergency vet partner — call first so triage is ready"
      />

      <TriageComparisonSection
        urgentHeading="Call the ER straight away if…"
        urgentIntro="Do not wait for morning if you notice any of the signs below. Calling Riverbend while you gather your keys lets their triage nurses prepare a warm table."
        urgentItems={[
          'Laboured, noisy or open-mouth breathing (especially in cats or rabbits)',
          'Collapse, pale or bluish gums, sudden weakness or inability to stand',
          'Seizures, severe disorientation or sudden loss of balance',
          'Repeated retching without bringing anything up, or a tight, swollen tummy',
          'Straining to urinate without passing anything — urgent in male cats',
          'A rabbit or guinea pig that has stopped eating or passing droppings for over 8 hours',
          'Suspected poisoning (grapes, lilies, xylitol, rodent bait, human medicines)',
          'Deep bleeding wounds, road accidents, eye injuries or bites from another animal',
        ]}
        waitHeading="It can usually wait until we open if…"
        waitIntro="If your pet is bright, breathing easily and comfortable, these issues can usually be seen during our regular clinic hours. Still unsure? Call the ER nurse line for peace of mind."
        waitItems={[
          'A torn nail that has stopped bleeding and is clean',
          'Mild, one-off soft stool or a single vomit in a bright adult dog or cat',
          'Ear scratching, mild head shaking or itchy paws without sudden swelling',
          'A small, quiet skin lump you noticed while brushing',
          'Routine prescription refills or mild stiffness in a familiar senior pet',
          'Missed routine vaccination boosters or annual parasite top-ups',
        ]}
      />

      <CarrierChecklistAndFollowUp
        checklistHeading="What to bring to the ER"
        checklistItems={[
          'A secure carrier for cats, rabbits and small pets (lined with a familiar-smelling towel)',
          'A snug collar or harness and short leash for dogs',
          'Any current medications, packaging of anything your pet may have swallowed, or a photo of the label',
          'Your phone and, if handy, your pet’s most recent vaccine or discharge summary',
          'For rabbits and guinea pigs: a small handful of hay and their bonded companion if they travel together calmly',
        ]}
        followUpHeading="How we follow up the next working day"
        followUpBody="Tell Riverbend 24-Hour Animal ER that you are a Willow Paws family. They send us your pet’s full clinical notes, lab results and X-rays overnight, and our team reviews them as soon as we open so we can call you to arrange calm follow-up care here."
        formReminderHeading="Our contact form and email are not monitored for emergencies"
        formReminderBody="Please never send an email or website enquiry if your pet is unwell right now. Always telephone our clinic during opening hours or call Riverbend 24-Hour Animal ER directly at any hour."
      />
    </>
  );
}
