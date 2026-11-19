import { NotFoundBeagleScene } from '../components/art/not-found-beagle';
import { SiteLink } from '../components/site-link';

export default function NotFound() {
  return (
    <section className="wrap py-14 sm:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div>
          <p className="eyebrow">404 · End of the scent trail</p>
          <h1 className="mt-3 text-[clamp(2.5rem,6vw,4.2rem)] text-ink">
            This trail went cold
          </h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
            Our clinic beagle sniffed all the way to the willow leaves, but that page isn’t
            here. Pick a fresh path below to get back on track.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <SiteLink href="/" className="button">
              Back to Home
            </SiteLink>
            <SiteLink href="/services/" className="button button-quiet">
              Browse Services
            </SiteLink>
            <SiteLink href="/after-hours/" className="button button-alert">
              After hours &amp; ER
            </SiteLink>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <NotFoundBeagleScene className="w-full max-w-[30rem]" />
        </div>
      </div>
    </section>
  );
}
