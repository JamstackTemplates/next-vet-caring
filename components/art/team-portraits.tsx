import type { PortraitVariant } from '../../content/team';

interface PortraitSpec {
  skin: string;
  hair: string;
  scrub: string;
  scrubTrim: string;
  backdrop: string;
}

const PORTRAIT_SPECS: Record<PortraitVariant, PortraitSpec> = {
  braid: { skin: '#8D5838', hair: '#211A18', scrub: 'var(--primary)', scrubTrim: 'var(--willow)', backdrop: 'var(--sage-wash)' },
  beard: { skin: '#C68C64', hair: '#2A221E', scrub: 'var(--willow-deep)', scrubTrim: 'var(--apricot)', backdrop: 'var(--cork)' },
  bob: { skin: '#F0CEB5', hair: '#C8924C', scrub: 'var(--primary)', scrubTrim: 'var(--blush)', backdrop: 'var(--sage-wash)' },
  bun: { skin: '#E9BEA0', hair: '#5A3626', scrub: 'var(--willow)', scrubTrim: 'var(--primary)', backdrop: 'var(--cork)' },
  crop: { skin: '#AA6E48', hair: '#1E1D21', scrub: 'var(--willow-deep)', scrubTrim: 'var(--willow)', backdrop: 'var(--sage-wash)' },
  curly: { skin: '#D9A784', hair: '#4B3222', scrub: 'var(--apricot)', scrubTrim: 'var(--card)', backdrop: 'var(--cork)' },
};

/**
 * Six distinct illustrated head-and-shoulders portraits in clinic scrubs,
 * each with a miniature drawing of their own pet tucked at the shoulder
 * inside a leaf-edged oval frame.
 */
export function TeamPortrait({
  variant,
  alt,
  className = 'h-44 w-36',
  compact = false,
}: {
  variant: PortraitVariant;
  alt: string;
  className?: string;
  /** Hides outer decorative leaves for tiny rota-board portrait chips. */
  compact?: boolean;
}) {
  const spec = PORTRAIT_SPECS[variant];
  const clipId = `portrait-oval-${variant}-${compact ? 'sm' : 'lg'}`;

  return (
    <svg
      viewBox="0 0 160 186"
      fill="none"
      className={className}
      role="img"
      aria-label={alt}
    >
      <defs>
        <clipPath id={clipId}>
          <ellipse cx="80" cy="94" rx="64" ry="78" />
        </clipPath>
      </defs>

      {/* Outer decorative willow leaves around the oval frame */}
      {!compact && (
        <g stroke="var(--ink)" strokeWidth="1.8" strokeLinejoin="round">
          <path d="M22 60 C 6 46, 8 28, 22 24 C 30 34, 30 48, 22 60 Z" fill="var(--willow)" />
          <path d="M16 90 C 2 80, 4 64, 16 60 C 24 70, 24 82, 16 90 Z" fill="var(--primary)" />
          <path d="M138 60 C 154 46, 152 28, 138 24 C 130 34, 130 48, 138 60 Z" fill="var(--willow)" />
          <path d="M144 90 C 158 80, 156 64, 144 60 C 136 70, 136 82, 144 90 Z" fill="var(--primary)" />
          <path d="M56 174 C 66 164, 76 164, 80 178 C 70 184, 60 182, 56 174 Z" fill="var(--willow)" />
          <path d="M104 174 C 94 164, 84 164, 80 178 C 90 184, 100 182, 104 174 Z" fill="var(--willow)" />
        </g>
      )}

      {/* Portrait interior clipped to oval */}
      <g clipPath={`url(#${clipId})`}>
        <rect x="10" y="10" width="140" height="170" fill={spec.backdrop} />

        {/* Subtle clinic wall botanical arc */}
        <circle cx="80" cy="108" r="56" fill="var(--card)" opacity="0.42" />

        {/* Back hair layer per variant */}
        {variant === 'braid' && (
          <g fill={spec.hair} stroke="var(--ink)" strokeWidth="2">
            <ellipse cx="80" cy="64" rx="34" ry="30" />
            {/* Side braid resting over shoulder */}
            <circle cx="48" cy="90" r="8" />
            <circle cx="46" cy="104" r="7.5" />
            <circle cx="48" cy="117" r="7" />
            <circle cx="51" cy="129" r="5.5" />
            <rect x="47" y="133" width="8" height="4" rx="2" fill="var(--apricot)" />
          </g>
        )}
        {variant === 'bob' && (
          <path
            d="M44 68 C 44 36, 116 36, 116 68 L 118 106 C 110 112, 50 112, 42 106 Z"
            fill={spec.hair}
            stroke="var(--ink)"
            strokeWidth="2.2"
          />
        )}
        {variant === 'bun' && (
          <g fill={spec.hair} stroke="var(--ink)" strokeWidth="2.2">
            <circle cx="80" cy="33" r="16" />
            <path d="M68 41 Q 80 35, 92 41" stroke="var(--apricot)" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <ellipse cx="80" cy="66" rx="32" ry="26" />
          </g>
        )}
        {variant === 'curly' && (
          <g fill={spec.hair} stroke="var(--ink)" strokeWidth="2">
            <circle cx="52" cy="58" r="14" />
            <circle cx="64" cy="44" r="15" />
            <circle cx="82" cy="40" r="16" />
            <circle cx="99" cy="46" r="15" />
            <circle cx="109" cy="60" r="13" />
            <circle cx="50" cy="74" r="11" />
            <circle cx="110" cy="74" r="11" />
          </g>
        )}

        {/* Scrub shoulders & V-neck top */}
        <path
          d="M24 176 C 28 134, 48 122, 80 122 C 112 122, 132 134, 136 176 Z"
          fill={spec.scrub}
          stroke="var(--ink)"
          strokeWidth="2.2"
        />
        {/* V-neck opening + clinic badge/stethoscope */}
        <path d="M64 123 L 80 144 L 96 123" fill="var(--card)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M62 123 L 80 147 L 98 123" stroke={spec.scrubTrim} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {/* Pocket on left chest */}
        <rect x="44" y="148" width="20" height="16" rx="3" fill="var(--card)" opacity="0.22" stroke="var(--ink)" strokeWidth="1.6" />

        {/* Stethoscope on vets (braid, beard, bob) */}
        {(variant === 'braid' || variant === 'beard' || variant === 'bob') && (
          <g stroke="var(--ink)" strokeWidth="2.4" strokeLinecap="round">
            <path d="M61 124 C 58 142, 62 152, 68 158" />
            <path d="M99 124 C 102 140, 100 150, 95 156" />
            <circle cx="68" cy="160" r="5" fill="var(--card)" />
          </g>
        )}

        {/* Neck */}
        <rect x="69" y="102" width="22" height="25" rx="9" fill={spec.skin} stroke="var(--ink)" strokeWidth="2" />

        {/* Ears */}
        <circle cx="51" cy="82" r="7" fill={spec.skin} stroke="var(--ink)" strokeWidth="2" />
        <circle cx="109" cy="82" r="7" fill={spec.skin} stroke="var(--ink)" strokeWidth="2" />

        {/* Head oval */}
        <path
          d="M52 72 C 52 46, 108 46, 108 72 C 108 98, 97 112, 80 112 C 63 112, 52 98, 52 72 Z"
          fill={spec.skin}
          stroke="var(--ink)"
          strokeWidth="2.2"
        />

        {/* Front hair / beard styles per variant */}
        {variant === 'braid' && (
          <path d="M51 70 C 54 46, 106 46, 109 70 C 98 58, 66 56, 51 70 Z" fill={spec.hair} stroke="var(--ink)" strokeWidth="2" />
        )}
        {variant === 'beard' && (
          <>
            <path d="M50 70 C 50 42, 110 42, 110 70 C 102 58, 66 54, 50 70 Z" fill={spec.hair} stroke="var(--ink)" strokeWidth="2" />
            {/* Warm trimmed beard */}
            <path
              d="M53 84 C 54 106, 66 116, 80 116 C 94 116, 106 106, 107 84 C 100 94, 92 98, 80 98 C 68 98, 60 94, 53 84 Z"
              fill={spec.hair}
              stroke="var(--ink)"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </>
        )}
        {variant === 'bob' && (
          <path d="M50 72 C 54 44, 108 44, 110 72 C 100 60, 78 58, 62 66 Z" fill={spec.hair} stroke="var(--ink)" strokeWidth="2" />
        )}
        {variant === 'bun' && (
          <path d="M52 68 C 56 46, 104 46, 108 68 C 96 58, 64 58, 52 68 Z" fill={spec.hair} stroke="var(--ink)" strokeWidth="2" />
        )}
        {variant === 'crop' && (
          <path
            d="M50 72 C 48 44, 112 44, 110 72 C 104 60, 92 54, 78 54 C 66 54, 56 60, 50 72 Z"
            fill={spec.hair}
            stroke="var(--ink)"
            strokeWidth="2"
          />
        )}
        {variant === 'curly' && (
          <path d="M52 68 C 60 56, 70 54, 80 57 C 90 54, 100 56, 108 68 C 102 52, 58 52, 52 68 Z" fill={spec.hair} stroke="var(--ink)" strokeWidth="1.8" />
        )}

        {/* Calm kind eyes & eyebrows */}
        <path d="M63 72 Q 68 69, 73 72 M87 72 Q 92 69, 97 72" stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="68" cy="79" r="2.6" fill="var(--ink)" />
        <circle cx="92" cy="79" r="2.6" fill="var(--ink)" />

        {/* Round glasses on Dr Hana (bob) and Ari (crop) for extra visual distinction */}
        {(variant === 'bob' || variant === 'crop') && (
          <g stroke="var(--ink)" strokeWidth="1.8" fill="none">
            <circle cx="68" cy="79" r="8" />
            <circle cx="92" cy="79" r="8" />
            <path d="M76 79 H 84" />
          </g>
        )}

        {/* Soft nose & warm smile */}
        <path d="M80 80 V 87 Q 82 89, 78 89" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" />
        <path
          d="M72 95 Q 80 101, 88 95"
          stroke={variant === 'beard' ? 'var(--card)' : 'var(--ink)'}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Rosy cheeks */}
        <ellipse cx="60" cy="88" rx="4.5" ry="2.5" fill="var(--blush)" opacity="0.55" />
        <ellipse cx="100" cy="88" rx="4.5" ry="2.5" fill="var(--blush)" opacity="0.55" />

        {/* Miniature drawing of each team member's own pet tucked at their right shoulder */}
        <g transform="translate(98 118)">
          {variant === 'braid' && (
            /* Juniper, a gentle greyhound */
            <g>
              <path d="M12 24 C 12 8, 24 2, 32 8 L 38 20 C 40 24, 34 29, 26 28 L 24 44 H 10 Z" fill="var(--cork)" stroke="var(--ink)" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M12 12 C 6 12, 4 20, 9 23" fill="var(--cork)" stroke="var(--ink)" strokeWidth="1.8" />
              <circle cx="23" cy="14" r="1.8" fill="var(--ink)" />
              <circle cx="36" cy="21" r="2.2" fill="var(--ink)" />
            </g>
          )}
          {variant === 'beard' && (
            /* Pickle, a one-eyed tabby */
            <g>
              <circle cx="22" cy="24" r="14" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="1.8" />
              <path d="M11 16 L 10 5 L 19 12 Z M25 12 L 34 5 L 33 16 Z" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="1.8" strokeLinejoin="round" />
              <circle cx="17" cy="22" r="2" fill="var(--ink)" />
              {/* Gentle winking closed right eye */}
              <path d="M25 22 Q 28 24, 31 22" stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M20 27 H 24 L 22 29 Z" fill="var(--blush)" />
            </g>
          )}
          {variant === 'bob' && (
            /* Clover & Moss, fluffy lionhead rabbit */
            <g>
              <ellipse cx="18" cy="10" rx="3.8" ry="10" transform="rotate(-10 18 10)" fill="var(--card)" stroke="var(--ink)" strokeWidth="1.7" />
              <ellipse cx="28" cy="10" rx="3.8" ry="10" transform="rotate(10 28 10)" fill="var(--card)" stroke="var(--ink)" strokeWidth="1.7" />
              <circle cx="23" cy="26" r="13" fill="var(--card)" stroke="var(--ink)" strokeWidth="1.8" />
              <circle cx="18" cy="25" r="1.8" fill="var(--ink)" />
              <circle cx="28" cy="25" r="1.8" fill="var(--ink)" />
              <circle cx="23" cy="29" r="1.8" fill="var(--apricot)" />
            </g>
          )}
          {variant === 'bun' && (
            /* Biscuit, a floppy-eared beagle */
            <g>
              <ellipse cx="11" cy="27" rx="5" ry="10" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="1.7" />
              <ellipse cx="33" cy="27" rx="5" ry="10" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="1.7" />
              <circle cx="22" cy="24" r="12" fill="var(--card)" stroke="var(--ink)" strokeWidth="1.8" />
              <circle cx="18" cy="22" r="1.8" fill="var(--ink)" />
              <circle cx="26" cy="22" r="1.8" fill="var(--ink)" />
              <ellipse cx="22" cy="27" rx="2.6" ry="2" fill="var(--ink)" />
            </g>
          )}
          {variant === 'crop' && (
            /* Pepper, a rescue cockatiel with yellow crest & rosy cheek */
            <g>
              <path d="M22 10 L 20 1 M22 10 L 26 2 M22 10 L 30 5" stroke="var(--apricot)" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M12 36 C 10 20, 16 10, 24 10 C 31 10, 34 19, 32 36 Z" fill="var(--card)" stroke="var(--ink)" strokeWidth="1.8" />
              <circle cx="26" cy="18" r="1.8" fill="var(--ink)" />
              <circle cx="23" cy="23" r="3.4" fill="var(--apricot)" />
              <path d="M31 19 L 36 21 L 31 24 Z" fill="var(--cork)" stroke="var(--ink)" strokeWidth="1.5" strokeLinejoin="round" />
            </g>
          )}
          {variant === 'curly' && (
            /* Rufus, a scruffy sofa-shaped mutt */
            <g>
              <path d="M10 20 L 6 12 L 16 15 M34 20 L 38 12 L 28 15" fill="var(--cork)" stroke="var(--ink)" strokeWidth="1.7" strokeLinejoin="round" />
              <ellipse cx="22" cy="25" rx="14" ry="12" fill="var(--cork)" stroke="var(--ink)" strokeWidth="1.8" />
              <circle cx="17" cy="23" r="1.8" fill="var(--ink)" />
              <circle cx="27" cy="23" r="1.8" fill="var(--ink)" />
              <ellipse cx="22" cy="28" rx="3" ry="2.2" fill="var(--ink)" />
            </g>
          )}
        </g>
      </g>

      {/* Oval frame outline */}
      <ellipse cx="80" cy="94" rx="64" ry="78" stroke="var(--ink)" strokeWidth="2.5" />
      {!compact && (
        <ellipse cx="80" cy="94" rx="58" ry="72" stroke="var(--card)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.7" />
      )}
    </svg>
  );
}
