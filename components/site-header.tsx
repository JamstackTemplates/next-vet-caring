'use client';

import { useRef } from 'react';
import { DarkModeToggle } from 'jamstacks';
import { business, telHref } from '../content/business';
import { PawLeafMark } from './art/paw-leaf-mark';
import { SiteLink } from './site-link';

const NAV_ITEMS = [
  { href: '/services/', label: 'Services' },
  { href: '/team/', label: 'Our team' },
  { href: '/health-plan/', label: 'Health plan' },
  { href: '/after-hours/', label: 'After hours' },
  { href: '/contact/', label: 'Contact' },
] as const;

export function SiteHeader() {
  const menuRef = useRef<HTMLDivElement>(null);

  function closeMobileMenu() {
    const el = menuRef.current as (HTMLDivElement & { hidePopover?: () => void }) | null;
    if (el && typeof el.hidePopover === 'function') {
      try {
        el.hidePopover();
      } catch {
        // Ignore if popover is already closed.
      }
    }
  }

  return (
    <header className="sticky top-0 z-30 bg-paper/95 backdrop-blur-sm">
      {/* Slim always-visible emergency strip linking to /after-hours/ */}
      <div className="bg-alert-strip-bg text-alert-strip-ink">
        <div className="wrap flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-1.5 text-xs sm:text-[0.84rem]">
          <SiteLink
            href="/after-hours/"
            className="inline-flex items-center gap-2 font-bold text-alert-strip-ink no-underline hover:underline"
          >
            <svg viewBox="0 0 18 18" className="h-4 w-4 shrink-0" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="8" fill="currentColor" opacity="0.2" />
              <path d="M9 4.5 V 13.5 M4.5 9 H 13.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
            <span>Emergency? What to do after hours</span>
            <span aria-hidden="true">→</span>
          </SiteLink>
          <span className="hidden text-alert-strip-ink/90 sm:inline">
            24-hr partner ER:{' '}
            <a
              href={telHref(business.emergencyPartner.phone)}
              className="font-bold text-alert-strip-ink underline"
            >
              {business.emergencyPartner.phone}
            </a>
          </span>
        </div>
      </div>

      {/* Main clinic oat navigation bar with a faint paw/bone motif and a scalloped awning edge */}
      <div className="header-bar">
        <div className="wrap flex min-h-18 items-center justify-between gap-3 py-2">
          <SiteLink
            href="/"
            className="group inline-flex shrink-0 items-center gap-2.5 text-ink no-underline hover:no-underline"
          >
            <PawLeafMark className="h-10 w-10 shrink-0" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.35rem] font-semibold tracking-tight text-ink sm:text-[1.5rem]">
                {business.shortName}
              </span>
              <span className="mt-0.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-muted">
                Vet Clinic
              </span>
            </span>
          </SiteLink>

          {/* Single semantic navigation landmark across narrow and wide layouts */}
          <nav aria-label="Main" className="flex items-center gap-2">
            {/* Desktop inline navigation */}
            <ul className="m-0 hidden list-none items-center gap-1 p-0 lg:flex">
              {NAV_ITEMS.map(item => (
                <li key={item.href}>
                  <SiteLink href={item.href} markCurrent="page" className="nav-link whitespace-nowrap">
                    {item.label}
                  </SiteLink>
                </li>
              ))}
            </ul>

            <SiteLink
              href="/contact/"
              className="button hidden !min-h-10 !px-4 !py-2 !text-[0.9rem] whitespace-nowrap xl:inline-flex"
            >
              Request an appointment
            </SiteLink>

            <div className="no-print flex items-center gap-2">
              <DarkModeToggle />

              {/* Narrow-screen native Popover menu trigger */}
              <button
                type="button"
                className="site-menu-trigger inline-flex min-h-10 items-center gap-2 rounded-full border-2 border-line bg-card px-3.5 py-1.5 font-display text-sm font-semibold text-ink lg:hidden"
                popoverTarget="site-mobile-menu"
                popoverTargetAction="toggle"
                aria-controls="site-mobile-menu"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
                  <path d="M3 5.5 H 17 M3 10 H 17 M3 14.5 H 17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
                <span>Menu</span>
              </button>
            </div>

            {/* Native top-layer popover menu for narrow screens (placed immediately after trigger) */}
            <div
              id="site-mobile-menu"
              ref={menuRef}
              popover="auto"
              className="site-menu-popover lg:hidden"
            >
              <div className="mb-3 flex items-center justify-between border-b border-line pb-2.5">
                <span className="font-display text-base font-semibold text-ink">{business.name}</span>
                <button
                  type="button"
                  popoverTarget="site-mobile-menu"
                  popoverTargetAction="hide"
                  className="rounded-full border border-line bg-paper px-2.5 py-1 text-xs font-bold text-ink"
                >
                  Close
                </button>
              </div>
              <ul className="m-0 grid list-none gap-1 p-0">
                {NAV_ITEMS.map(item => (
                  <li key={item.href}>
                    <SiteLink
                      href={item.href}
                      markCurrent="page"
                      onClick={closeMobileMenu}
                      className="nav-link w-full justify-between py-2.5 text-base"
                    >
                      {item.label}
                    </SiteLink>
                  </li>
                ))}
              </ul>
              <div className="mt-4 grid gap-2 border-t border-line pt-3.5">
                <SiteLink href="/contact/" onClick={closeMobileMenu} className="button w-full text-center">
                  Request an appointment
                </SiteLink>
                <a
                  href={telHref(business.phone)}
                  className="text-center text-sm font-bold text-primary-ink underline"
                >
                  Call clinic: {business.phone}
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="header-awning" aria-hidden="true" />
      </div>
    </header>
  );
}
