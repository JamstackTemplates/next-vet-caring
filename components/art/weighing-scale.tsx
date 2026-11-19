/** Clinic weighing scale motif with a calm dog sitting on it, paired with "Your first visit". */
export function WeighingScaleArt({ className = 'h-44 w-48' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 190"
      fill="none"
      className={className}
      role="img"
      aria-label="Illustration of a calm dog sitting on a clinic weighing scale."
    >
      {/* Soft sage backdrop circle */}
      <circle cx="110" cy="100" r="78" fill="var(--sage-wash)" stroke="var(--line)" strokeWidth="1.8" strokeDasharray="5 5" />

      {/* Clinic weighing platform */}
      <rect x="28" y="138" width="144" height="24" rx="8" fill="var(--card)" stroke="var(--ink)" strokeWidth="2.2" />
      <rect x="38" y="132" width="124" height="10" rx="4" fill="var(--willow)" stroke="var(--ink)" strokeWidth="2" />
      {/* Scale rubber feet */}
      <rect x="42" y="162" width="18" height="6" rx="3" fill="var(--ink)" />
      <rect x="140" y="162" width="18" height="6" rx="3" fill="var(--ink)" />

      {/* Readout post & dial display on the right */}
      <path d="M172 150 H 188 V 74" stroke="var(--ink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="160" y="42" width="52" height="36" rx="9" fill="var(--card)" stroke="var(--ink)" strokeWidth="2.2" />
      <rect x="167" y="50" width="38" height="20" rx="4" fill="var(--sage-wash)" stroke="var(--ink)" strokeWidth="1.5" />
      <text x="186" y="64" textAnchor="middle" fill="var(--primary-ink)" fontFamily="var(--font-display)" fontSize="11" fontWeight="600">
        24 lb
      </text>

      {/* Calm dog sitting neatly on the scale mat */}
      <g transform="translate(52 46)">
        {/* Wagging tail */}
        <path d="M84 68 C 98 62, 102 48, 94 42" stroke="var(--ink)" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M84 68 C 98 62, 102 48, 94 42" stroke="var(--apricot)" strokeWidth="2.2" strokeLinecap="round" />
        {/* Body */}
        <path
          d="M24 52 C 16 66, 20 86, 36 86 H 74 C 86 86, 88 66, 76 50 C 66 38, 34 38, 24 52 Z"
          fill="var(--apricot)"
          stroke="var(--ink)"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        {/* Chest & front paws */}
        <path d="M36 52 C 40 66, 56 66, 60 52" fill="var(--card)" />
        <path d="M38 66 V 86 M56 66 V 86" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" />
        <ellipse cx="36" cy="86" rx="7" ry="4" fill="var(--card)" stroke="var(--ink)" strokeWidth="2" />
        <ellipse cx="58" cy="86" rx="7" ry="4" fill="var(--card)" stroke="var(--ink)" strokeWidth="2" />
        {/* Leaf-green collar & heart tag */}
        <path d="M30 46 Q 48 53, 66 46" stroke="var(--primary)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="48" cy="54" r="3.5" fill="var(--card)" stroke="var(--ink)" strokeWidth="1.6" />
        {/* Floppy ears */}
        <path d="M26 20 C 16 24, 15 40, 22 44 C 28 46, 30 34, 29 24 Z" fill="var(--blush)" stroke="var(--ink)" strokeWidth="2" />
        <path d="M70 20 C 80 24, 81 40, 74 44 C 68 46, 66 34, 67 24 Z" fill="var(--blush)" stroke="var(--ink)" strokeWidth="2" />
        {/* Head */}
        <circle cx="48" cy="26" r="21" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="2.2" />
        <ellipse cx="48" cy="34" rx="11" ry="8" fill="var(--card)" stroke="var(--ink)" strokeWidth="1.6" />
        <circle cx="40" cy="24" r="2.4" fill="var(--ink)" />
        <circle cx="56" cy="24" r="2.4" fill="var(--ink)" />
        <ellipse cx="48" cy="31" rx="4" ry="2.8" fill="var(--ink)" />
        <path d="M43 36 Q 48 39.5, 53 36" stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" />
      </g>
    </svg>
  );
}
