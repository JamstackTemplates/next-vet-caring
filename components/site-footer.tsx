import { business, telHref } from '../content/business';
import { PawLeafMark } from './art/paw-leaf-mark';
import { WillowFrondBorder } from './art/willow-frond-border';
import { SiteLink } from './site-link';
import { TimeZoneNote } from './time-zone-note';

export function SiteFooter() {
  return (
    <footer className="relative mt-16 bg-[#1C4727] text-[#F2F5E8] dark:bg-[#0D1A12]">
      <WillowFrondBorder tone="canopy" className="-mb-2" />

      <div className="wrap grid gap-10 pt-6 pb-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Clinic wordmark & address */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <PawLeafMark className="h-9 w-9 shrink-0 rounded-xl bg-[#F6F3E7] p-1" />
            <span className="font-display text-xl font-semibold text-[#FFFDF6]">{business.name}</span>
          </div>
          <p className="text-sm leading-relaxed text-[#D7E4D1]">{business.directions}</p>
          <p className="text-sm font-semibold text-[#FFFDF6]">{business.address}</p>
        </div>

        {/* Column 2: Opening hours summary */}
        <div>
          <h2 className="font-display text-lg font-semibold text-[#FFFDF6]">Clinic hours</h2>
          <dl className="mt-3 space-y-1.5 text-sm text-[#D7E4D1]">
            <div className="flex justify-between gap-4 border-b border-[#346541] pb-1">
              <dt>Mon – Fri</dt>
              <dd className="font-semibold text-[#FFFDF6]">8:00 am – 6:30 pm</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-[#346541] pb-1">
              <dt>Saturday</dt>
              <dd className="font-semibold text-[#FFFDF6]">9:00 am – 2:00 pm</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Sunday</dt>
              <dd className="italic text-[#BDD0B6]">Closed</dd>
            </div>
          </dl>
          <TimeZoneNote className="text-[#BDD0B6]" />
        </div>

        {/* Column 3: Direct contact & after-hours ER partner */}
        <div className="space-y-3">
          <h2 className="font-display text-lg font-semibold text-[#FFFDF6]">Get in touch</h2>
          <p className="text-sm text-[#D7E4D1]">
            Phone:{' '}
            <a href={telHref(business.phone)} className="font-bold text-[#FFFDF6] underline">
              {business.phone}
            </a>
          </p>
          <p className="text-sm text-[#D7E4D1]">
            Email:{' '}
            <a href={`mailto:${business.email}`} className="font-bold text-[#FFFDF6] underline wrap-anywhere">
              {business.email}
            </a>
          </p>
          <div className="mt-3 rounded-2xl border border-[#8E4940] bg-[#3A1A16] p-3.5 text-sm text-[#F9D8D3]">
            <p className="font-bold text-[#FFFDF6]">After-hours emergencies</p>
            <p className="mt-1 text-xs leading-snug text-[#F4C4BC]">
              {business.emergencyPartner.name} ({business.emergencyPartner.hoursNote})
            </p>
            <p className="mt-1.5">
              <a
                href={telHref(business.emergencyPartner.phone)}
                className="font-display text-base font-semibold text-[#FFFDF6] underline"
              >
                {business.emergencyPartner.phone}
              </a>
            </p>
          </div>
        </div>

        {/* Column 4: Site links */}
        <div>
          <h2 className="font-display text-lg font-semibold text-[#FFFDF6]">Explore</h2>
          <ul className="mt-3 grid list-none gap-2 p-0 text-sm">
            <li><SiteLink href="/services/" className="text-[#E6EFE0] hover:text-[#FFFDF6]">Services &amp; prices</SiteLink></li>
            <li><SiteLink href="/team/" className="text-[#E6EFE0] hover:text-[#FFFDF6]">Our vets &amp; nurses</SiteLink></li>
            <li><SiteLink href="/health-plan/" className="text-[#E6EFE0] hover:text-[#FFFDF6]">Pet Health Plan</SiteLink></li>
            <li><SiteLink href="/after-hours/" className="text-[#E6EFE0] hover:text-[#FFFDF6]">After-hours care</SiteLink></li>
            <li><SiteLink href="/contact/" className="text-[#E6EFE0] hover:text-[#FFFDF6]">Request an appointment</SiteLink></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#2E5D3A]">
        <div className="wrap flex flex-wrap items-center justify-between gap-4 py-5 text-xs text-[#C7D8C0]">
          <p>{business.name} · Sample veterinary clinic site beside Laurelhurst Park, Portland.</p>
          <span title="Made with love by jamstacks.net">
            with <span role="img" aria-label="love">❤️</span>{' '}
            <a className="font-semibold text-[#FFFDF6] no-underline hover:underline" href="https://jamstacks.net">
              jamstacks.net
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
