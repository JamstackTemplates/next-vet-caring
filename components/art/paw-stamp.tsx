import type { SVGProps } from 'react';

/** Rubber-stamp paw print with slightly uneven inked ring; used on record cards and First Visit steps. */
export function PawStamp({
  tone = 'apricot',
  label,
  className = '',
  ...rest
}: SVGProps<SVGSVGElement> & {
  tone?: 'apricot' | 'leaf';
  /** Optional short numeral or tally (e.g. "1" or "×12") stamped beneath/inside the ring. */
  label?: string;
}) {
  const ink = tone === 'leaf' ? 'var(--primary)' : 'var(--apricot)';
  const textInk = tone === 'leaf' ? 'var(--primary-ink)' : 'var(--apricot-ink)';

  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true" {...rest}>
      {/* Slightly uneven rubber-stamp circular ring */}
      <path
        d="M32 5 C 47 4.2, 59.5 16.5, 58.8 31.8 C 58.1 47.4, 46.8 59.4, 31.4 58.8 C 16.2 58.2, 4.6 46.5, 5.2 31.4 C 5.8 16.4, 17.5 5.8, 32 5 Z"
        stroke={ink}
        strokeWidth="2.4"
        strokeDasharray="16 2.2 26 1.8 18 2.5"
        strokeLinecap="round"
        opacity="0.9"
      />
      <circle
        cx="32"
        cy="32"
        r="23.5"
        stroke={ink}
        strokeWidth="1"
        strokeDasharray="3 4"
        opacity="0.55"
      />
      {label ? (
        <>
          {/* Compact paw perched above the stamped numeral */}
          <g transform="translate(32 23) scale(0.56)">
            <ellipse cx="-14" cy="-9" rx="4.5" ry="6" transform="rotate(-18 -14 -9)" fill={ink} />
            <ellipse cx="-4.5" cy="-15" rx="4.5" ry="6.2" transform="rotate(-6 -4.5 -15)" fill={ink} />
            <ellipse cx="5.5" cy="-15" rx="4.5" ry="6.2" transform="rotate(6 5.5 -15)" fill={ink} />
            <ellipse cx="14.5" cy="-9" rx="4.5" ry="6" transform="rotate(18 14.5 -9)" fill={ink} />
            <path d="M0 -6 C 10 -6, 15 1, 12 9 C 9 14, 3 15, 0 12.5 C -3 15, -9 14, -12 9 C -15 1, -10 -6, 0 -6 Z" fill={ink} />
          </g>
          <text
            x="32"
            y="49"
            textAnchor="middle"
            fill={textInk}
            fontFamily="var(--font-display)"
            fontWeight="650"
            fontSize={label.length > 2 ? '13.5' : '16'}
          >
            {label}
          </text>
        </>
      ) : (
        <g transform="translate(32 34) scale(0.9)">
          <ellipse cx="-13" cy="-9" rx="4.5" ry="6" transform="rotate(-18 -13 -9)" fill={ink} opacity="0.92" />
          <ellipse cx="-4.5" cy="-15.5" rx="4.6" ry="6.4" transform="rotate(-7 -4.5 -15.5)" fill={ink} opacity="0.95" />
          <ellipse cx="5" cy="-15.5" rx="4.6" ry="6.4" transform="rotate(7 5 -15.5)" fill={ink} opacity="0.9" />
          <ellipse cx="13.5" cy="-9" rx="4.5" ry="6" transform="rotate(18 13.5 -9)" fill={ink} opacity="0.94" />
          <path
            d="M0 -5.5 C 9.5 -5.5, 15 1.5, 12 9.5 C 9.5 14.5, 3 15.5, 0 13 C -3 15.5, -9.5 14.5, -12 9.5 C -15 1.5, -9.5 -5.5, 0 -5.5 Z"
            fill={ink}
            opacity="0.92"
          />
          {/* Subtle paper grain flecks for authentic inked rubber-stamp edge */}
          <circle cx="-6" cy="4" r="1" fill="var(--card)" opacity="0.45" />
          <circle cx="5" cy="7" r="0.9" fill="var(--card)" opacity="0.4" />
          <circle cx="1" cy="-1" r="0.8" fill="var(--card)" opacity="0.35" />
        </g>
      )}
    </svg>
  );
}
