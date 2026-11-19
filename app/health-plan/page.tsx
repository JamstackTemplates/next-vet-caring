import type { Metadata } from 'next';
import { PawStamp } from '../../components/art/paw-stamp';
import {
  ExclusionsAndFaqSection,
  HowItWorksBand,
  PlansBySpeciesSection,
} from '../../components/health-plan-sections';
import { PageHead } from '../../components/page-head';
import { absoluteUrl } from '../../lib/paths';

export const metadata: Metadata = {
  title: 'Pet Health Plan',
  description:
    'A monthly preventative Pet Health Plan for dogs, cats and rabbits covering yearly wellness exams, boosters, monthly parasite prevention, nurse clinics and a member discount.',
  alternates: { canonical: absoluteUrl('/health-plan/') },
};

export default function HealthPlanPage() {
  return (
    <>
      <PageHead
        eyebrow="Monthly Pet Health Plan"
        title="Preventative care kept tidy on one stamped card"
        aside={
          <div className="relative flex flex-col items-center">
            <PawStamp className="h-36 w-36 -rotate-6 sm:h-44 sm:w-44" />
            <span className="hand-note -mt-2 text-sm text-apricot-ink">
              Stamped at every visit
            </span>
          </div>
        }
      >
        <p className="m-0">
          Budget smoothly for routine exams, vaccinations, year-round parasite cover and four
          nurse clinics each year — arranged directly with our clinic team at the front desk or
          by email enquiry.
        </p>
      </PageHead>

      <HowItWorksBand
        eyebrow="How the plan works"
        heading="Three straightforward rules, with no online checkout"
        steps={[
          {
            title: '12 steady monthly payments',
            body: 'Each plan spreads a full year of preventative visits and parasite cover across twelve equal monthly payments arranged at the clinic.',
          },
          {
            title: 'Ask at the desk or by email',
            body: 'Nothing is enrolled or billed on this website. Send us an enquiry or chat with Leo at reception and we will walk through the paperwork together.',
          },
          {
            title: 'Cancel any time after 12 months',
            body: 'Plans run in 12-month periods so all annual vaccines and checks stay balanced. After your first year, you can stop with a month’s notice.',
          },
        ]}
      />

      <PlansBySpeciesSection
        heading="Choose by species and life stage"
        intro="Every paw stamp represents an included visit or monthly dose in your 12-month plan year. Hover or focus a card to stamp a paw."
      />

      <ExclusionsAndFaqSection
        exclusionsHeading="What is not included"
        exclusionsIntro="Our Pet Health Plan is a preventative care plan, not pet insurance. These items remain separate (though your member discount applies to other listed clinic services):"
        exclusions={[
          'After-hours or daytime emergencies and hospitalisation',
          'Surgery other than items explicitly listed on your plan card',
          'Specialist referrals and external imaging centres',
          'Pet insurance claims or third-party policy administration',
        ]}
        faqHeading="Common questions about the plan"
        faqs={[
          {
            question: 'How do I ask to join a Pet Health Plan?',
            answer:
              'Use our Contact page to send an enquiry with your pet’s name, species and age, or ask Leo next time you visit the desk. We will reply with the plan details and confirm your first visit — nothing is charged or activated on this website.',
          },
          {
            question: 'Is the Pet Health Plan the same as pet insurance?',
            answer:
              'No. The plan covers predictable, routine preventative care like checkups, vaccines, parasite prevention and nurse clinics. Many of our families pair it with separate accident-and-illness pet insurance for unexpected emergencies.',
          },
          {
            question: 'Can my pet switch from Sprout to Willow or Old Oak next year?',
            answer:
              'Yes. When your 12-month period renews, your vet will recommend whether it is time to step up from a puppy or kitten plan to an adult plan, or move to our senior Old Oak plan with yearly bloodwork.',
          },
          {
            question: 'Do rabbits and small pets qualify for a plan?',
            answer:
              'Rabbits have their own Willow (rabbit) plan including two cheek-tooth and burr checks each year. Because guinea pigs, hamsters and other small pets have widely varied needs, we price their visits individually on our Services page.',
          },
          {
            question: 'What happens if I move away before 12 months are up?',
            answer:
              'Let Leo know as soon as your plans change. We simply reconcile the value of any included exams or treatments already used against the monthly payments received so far, with no surprise penalty fees.',
          },
        ]}
        ctaHeading="Thinking about a health plan for your pet?"
        ctaBody="Tell us your pet’s name, species and age in an enquiry. We will reply with a clear breakdown and help you choose the right card — no online payment required."
        ctaLabel="Ask about joining"
      />
    </>
  );
}
