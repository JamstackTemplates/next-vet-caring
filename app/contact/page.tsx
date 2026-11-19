import type { Metadata } from 'next';
import {
  ContactEmergencyNotice,
  ContactWorkspace,
} from '../../components/contact-sections';
import { PageHead } from '../../components/page-head';
import { business } from '../../content/business';
import { absoluteUrl } from '../../lib/paths';
import { site } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: business.enquiries.introduction,
  alternates: { canonical: absoluteUrl('/contact/') },
};

export default function ContactPage() {
  const hosted = Boolean(site.jamstacksSite && site.jamstacksEmbedUrl);

  return (
    <>
      <PageHead eyebrow="Contact & enquiries" title="Request an appointment or ask a question">
        <p className="m-0">
          Use this page for routine appointment requests, new-patient registration, Pet Health
          Plan questions and records transfers from another clinic. We’ll reply to confirm a
          time.
        </p>
      </PageHead>

      <ContactEmergencyNotice
        heading="Not for emergencies."
        body={`If your pet needs urgent help, call us during opening hours on ${business.phone} or ${business.emergencyPartner.name} at`}
        afterHoursLinkLabel="After-hours help →"
      />

      <ContactWorkspace
        hosted={hosted}
        siteId={site.jamstacksSite}
        embedUrl={site.jamstacksEmbedUrl}
        formCardHeading="Send an enquiry"
        formCardReplyNote="Appointments and Pet Health Plan requests are enquiries only — we’ll reply to confirm a time and never take online bookings or payments here."
        fallbackHeading="Write to us by email"
        fallbackBody="The hosted enquiry form is not connected on this preview. Send your appointment or Pet Health Plan request directly to our clinic inbox and we’ll reply to confirm a time:"
        guidanceHeading="Helpful notes to pop in your message:"
        guidanceItems={business.enquiries.usefulToInclude}
        detailsHeading="Clinic details"
        directionsHeading="Directions from Laurelhurst Park"
      />
    </>
  );
}
