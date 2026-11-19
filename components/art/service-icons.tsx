import type { ServiceCategoryId } from '../../content/services';

/** Five bespoke clinic category icons: stethoscope, tooth & brush, suture & leaf, microscope, clippers & scale. */
export function ServiceCategoryIcon({
  category,
  className = 'h-12 w-12',
}: {
  category: ServiceCategoryId;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="4" width="56" height="56" rx="16" fill="var(--sage-wash)" stroke="var(--ink)" strokeWidth="2" />

      {category === 'wellness' && (
        /* Stethoscope coil */
        <g stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 15 V 27 C 20 35, 34 35, 34 27 V 15" />
          <circle cx="20" cy="14" r="2.2" fill="var(--apricot)" />
          <circle cx="34" cy="14" r="2.2" fill="var(--apricot)" />
          <path d="M27 33 V 41 C 27 48, 43 49, 44 41 V 34" />
          <circle cx="44" cy="30" r="6.5" fill="var(--willow)" />
          <circle cx="44" cy="30" r="2.4" fill="var(--card)" />
        </g>
      )}

      {category === 'dental' && (
        /* Toothbrush and gleaming tooth */
        <g stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M20 22 C 20 16, 28 15, 31 19 C 34 15, 42 16, 42 22 C 42 30, 39 43, 35 45 C 33 46, 32 38, 31 38 C 30 38, 29 46, 27 45 C 23 43, 20 30, 20 22 Z"
            fill="var(--card)"
          />
          <path d="M16 49 L 47 36" stroke="var(--primary)" strokeWidth="4" />
          <path d="M16 49 L 47 36" strokeWidth="2" />
          <path d="M40 36 L 47 33 L 49 38 L 42 41 Z" fill="var(--apricot)" />
          <path d="M46 18 L 48 22 L 52 24 L 48 26 L 46 30 L 44 26 L 40 24 L 44 22 Z" fill="var(--apricot)" strokeWidth="1.5" />
        </g>
      )}

      {category === 'surgery' && (
        /* Tidy suture stitch and willow leaf */
        <g stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 44 C 24 34, 34 26, 48 20" strokeDasharray="3 4" />
          <path d="M21 34 L 27 41 M28 28 L 34 35 M35 23 L 40 30" stroke="var(--apricot)" strokeWidth="2.6" />
          <path
            d="M36 47 C 37 36, 47 31, 52 34 C 52 43, 44 49, 36 47 Z"
            fill="var(--willow)"
          />
          <path d="M36 47 L 48 36" strokeWidth="1.6" />
        </g>
      )}

      {category === 'diagnostics' && (
        /* Clinic microscope */
        <g stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 49 H 46" strokeWidth="2.8" />
          <path d="M36 49 C 45 45, 46 31, 37 26" />
          <rect x="27" y="15" width="8" height="19" rx="3" transform="rotate(-18 31 24)" fill="var(--willow)" />
          <path d="M21 38 H 37" strokeWidth="2.6" />
          <circle cx="38" cy="27" r="3" fill="var(--apricot)" />
          <path d="M25 38 L 23 44 H 35" fill="var(--card)" />
        </g>
      )}

      {category === 'nurse' && (
        /* Clinic scale and tidy nail clippers */
        <g stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="14" y="34" width="36" height="15" rx="5" fill="var(--card)" />
          <path d="M22 34 V 30 H 42 V 34" fill="var(--willow)" />
          <circle cx="32" cy="41.5" r="4.5" fill="var(--apricot)" />
          <path d="M32 41.5 L 34.5 39.5" strokeWidth="1.8" />
          {/* Gentle clippers motif above scale */}
          <path d="M22 23 C 28 21, 34 19, 41 14 M22 17 C 29 19, 35 21, 42 24" stroke="var(--primary)" strokeWidth="2.4" />
          <circle cx="32" cy="19.5" r="2" fill="var(--card)" />
        </g>
      )}
    </svg>
  );
}
