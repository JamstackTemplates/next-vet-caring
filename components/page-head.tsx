import type { ReactNode } from 'react';
import { WillowFrondBorder } from './art/willow-frond-border';

/** Themed inner-page header with optional trailing willow fronds and right-hand artwork. */
export function PageHead({
  eyebrow,
  title,
  children,
  id,
  fronds = true,
  aside,
  tone = 'garden',
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  id?: string;
  /** Show hanging willow fronds along the top edge. */
  fronds?: boolean;
  /** Optional bespoke illustration or accent motif on the right. */
  aside?: ReactNode;
  /** 'garden' (default oat/sage) or 'night' (deep forest green for After hours). */
  tone?: 'garden' | 'night';
}) {
  const isNight = tone === 'night';

  return (
    <header
      className={
        isNight
          ? 'relative overflow-hidden border-b-2 border-[#2C5638] bg-[#163620] text-[#F4F6EA]'
          : 'relative overflow-hidden border-b-2 border-line bg-sage-wash/60'
      }
    >
      {fronds ? <WillowFrondBorder tone={isNight ? 'canopy' : 'garden'} /> : null}

      <div
        className={`wrap grid items-center gap-8 ${fronds ? 'pt-4 pb-10 sm:pb-12' : 'py-10 sm:py-14'} ${
          aside ? 'lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.85fr)]' : ''
        }`}
      >
        <div>
          <p className={`eyebrow ${isNight ? '!text-[#B6D9A5]' : ''}`}>{eyebrow}</p>
          <h1
            id={id}
            className={`mt-3 mb-4 max-w-[18ch] text-[clamp(2.35rem,5.5vw,4.1rem)] ${
              isNight ? 'text-[#FFFDF6]' : 'text-ink'
            }`}
          >
            {title}
          </h1>
          {children ? (
            <div
              className={`max-w-(--measure) text-[clamp(1.02rem,1.45vw,1.18rem)] leading-relaxed ${
                isNight ? 'text-[#D8E5D3]' : 'text-muted'
              }`}
            >
              {children}
            </div>
          ) : null}
        </div>
        {aside ? <div className="flex justify-center lg:justify-end">{aside}</div> : null}
      </div>
    </header>
  );
}
