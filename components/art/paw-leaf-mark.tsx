import type { SVGProps } from 'react';

/** Brand mark: paw print whose largest pad is a veined willow leaf. */
export function PawLeafMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <ellipse cx="16.5" cy="27" rx="5.2" ry="6.8" transform="rotate(-18 16.5 27)" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="2.2" />
      <ellipse cx="26.5" cy="18.5" rx="5.2" ry="7" transform="rotate(-6 26.5 18.5)" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="2.2" />
      <ellipse cx="38" cy="18.5" rx="5.2" ry="7" transform="rotate(7 38 18.5)" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="2.2" />
      <ellipse cx="47.5" cy="27" rx="5.2" ry="6.8" transform="rotate(19 47.5 27)" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="2.2" />
      <path
        d="M32 29 C43 29, 50 37, 46 47 C43 53, 35 55, 32 52 C29 55, 21 53, 18 47 C14 37, 21 29, 32 29 Z"
        fill="var(--primary)"
        stroke="var(--ink)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M32 32.5 C32 38, 32 45, 32 50.5 M32 39 L26.5 43 M32 42 L37.5 45"
        stroke="var(--card)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
