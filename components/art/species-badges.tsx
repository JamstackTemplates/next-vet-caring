import type { SpeciesId } from '../../content/services';

/** Four round illustrated species badges with calm, kind expressions. */
export function SpeciesBadgeArt({
  species,
  className = 'h-20 w-20',
}: {
  species: SpeciesId;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 96 96" fill="none" className={className} aria-hidden="true">
      <circle cx="48" cy="48" r="44" fill="var(--card)" stroke="var(--ink)" strokeWidth="2.2" />
      <circle cx="48" cy="48" r="39" stroke="var(--willow)" strokeWidth="1.6" strokeDasharray="4 4" />

      {species === 'dog' && (
        <g>
          {/* Soft sage backdrop arc */}
          <circle cx="48" cy="52" r="28" fill="var(--sage-wash)" />
          {/* Floppy ears */}
          <path d="M26 38 C 16 42, 15 59, 22 65 C 27 68, 31 60, 31 50 Z" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M70 38 C 80 42, 81 59, 74 65 C 69 68, 65 60, 65 50 Z" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="2.2" strokeLinejoin="round" />
          {/* Dog head */}
          <path d="M29 44 C 29 29, 40 24, 48 24 C 56 24, 67 29, 67 44 C 67 60, 59 69, 48 69 C 37 69, 29 60, 29 44 Z" fill="var(--blush)" stroke="var(--ink)" strokeWidth="2.2" />
          {/* Forehead patch */}
          <path d="M31 37 C 35 28, 44 26, 47 33 C 49 38, 42 42, 34 42 Z" fill="var(--apricot)" opacity="0.65" />
          {/* Muzzle */}
          <ellipse cx="48" cy="56" rx="13" ry="9.5" fill="var(--card)" stroke="var(--ink)" strokeWidth="1.8" />
          {/* Calm eyes */}
          <circle cx="39" cy="44" r="2.6" fill="var(--ink)" />
          <circle cx="57" cy="44" r="2.6" fill="var(--ink)" />
          <circle cx="38.2" cy="43.2" r="0.8" fill="var(--card)" />
          <circle cx="56.2" cy="43.2" r="0.8" fill="var(--card)" />
          {/* Nose & gentle smile */}
          <ellipse cx="48" cy="52.5" rx="4.5" ry="3.2" fill="var(--ink)" />
          <path d="M48 55.5 V 59 M43 59.5 C 45 62, 48 61, 48 59 C 48 61, 51 62, 53 59.5" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
          {/* Leaf neckerchief */}
          <path d="M36 69 Q 48 76, 60 69 L 55 77 Q 48 80, 41 77 Z" fill="var(--primary)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
        </g>
      )}

      {species === 'cat' && (
        <g>
          <circle cx="48" cy="52" r="28" fill="var(--sage-wash)" />
          {/* Pointed ears */}
          <path d="M29 42 L 24 21 L 41 31 Z" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M67 42 L 72 21 L 55 31 Z" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M30 37 L 28 26 L 37 32 Z" fill="var(--blush)" />
          <path d="M66 37 L 68 26 L 59 32 Z" fill="var(--blush)" />
          {/* Rounded cat head */}
          <ellipse cx="48" cy="51" rx="22" ry="19" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="2.2" />
          {/* Tabby forehead stripes */}
          <path d="M48 33 V 39 M42 34 L 44 39 M54 34 L 52 39" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
          {/* Cheek fur shade */}
          <ellipse cx="48" cy="57" rx="13" ry="8" fill="var(--card)" opacity="0.88" />
          {/* Content eyes */}
          <circle cx="39" cy="48" r="2.5" fill="var(--ink)" />
          <circle cx="57" cy="48" r="2.5" fill="var(--ink)" />
          <circle cx="38.2" cy="47.2" r="0.8" fill="var(--card)" />
          <circle cx="56.2" cy="47.2" r="0.8" fill="var(--card)" />
          {/* Pink nose & mouth */}
          <path d="M45 54 H 51 L 48 57.5 Z" fill="var(--blush)" stroke="var(--ink)" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M44 60 Q 48 62.5, 52 60" stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" />
          {/* Whiskers */}
          <path d="M22 52 H 34 M23 57 L 34 56 M62 52 H 74 M62 56 L 73 57" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" />
        </g>
      )}

      {species === 'rabbit' && (
        <g>
          <circle cx="48" cy="55" r="26" fill="var(--sage-wash)" />
          {/* Upright long ears */}
          <ellipse cx="38" cy="31" rx="6.5" ry="18" transform="rotate(-8 38 31)" fill="var(--card)" stroke="var(--ink)" strokeWidth="2.2" />
          <ellipse cx="38.5" cy="32" rx="3" ry="11" transform="rotate(-8 38.5 32)" fill="var(--blush)" />
          <ellipse cx="58" cy="31" rx="6.5" ry="18" transform="rotate(8 58 31)" fill="var(--card)" stroke="var(--ink)" strokeWidth="2.2" />
          <ellipse cx="57.5" cy="32" rx="3" ry="11" transform="rotate(8 57.5 32)" fill="var(--blush)" />
          {/* Round bunny head */}
          <ellipse cx="48" cy="57" rx="20" ry="17" fill="var(--card)" stroke="var(--ink)" strokeWidth="2.2" />
          {/* Soft ear-base shadow */}
          <ellipse cx="35" cy="60" rx="5.5" ry="3.2" fill="var(--blush)" opacity="0.7" />
          <ellipse cx="61" cy="60" rx="5.5" ry="3.2" fill="var(--blush)" opacity="0.7" />
          {/* Calm dark eyes */}
          <circle cx="39" cy="54" r="2.5" fill="var(--ink)" />
          <circle cx="57" cy="54" r="2.5" fill="var(--ink)" />
          <circle cx="38.2" cy="53.2" r="0.8" fill="var(--card)" />
          <circle cx="56.2" cy="53.2" r="0.8" fill="var(--card)" />
          {/* Twitchy Y-nose */}
          <path d="M45.5 59.5 H 50.5 L 48 62.5 Z" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M48 62.5 V 65.5 M44 66 Q 48 68, 52 66" stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" />
          {/* Little clover leaf sprig */}
          <path d="M64 67 C 69 62, 74 66, 68 71" fill="var(--willow)" stroke="var(--ink)" strokeWidth="1.6" />
        </g>
      )}

      {species === 'small-pet' && (
        <g>
          <circle cx="48" cy="53" r="27" fill="var(--sage-wash)" />
          {/* Round guinea pig / hamster ears */}
          <circle cx="30" cy="37" r="7" fill="var(--blush)" stroke="var(--ink)" strokeWidth="2.2" />
          <circle cx="30" cy="37" r="3.4" fill="var(--apricot)" opacity="0.55" />
          <circle cx="66" cy="37" r="7" fill="var(--blush)" stroke="var(--ink)" strokeWidth="2.2" />
          <circle cx="66" cy="37" r="3.4" fill="var(--apricot)" opacity="0.55" />
          {/* Plump pear-shaped guinea pig face */}
          <path d="M27 53 C 27 37, 36 31, 48 31 C 60 31, 69 37, 69 53 C 69 66, 60 73, 48 73 C 36 73, 27 66, 27 53 Z" fill="var(--card)" stroke="var(--ink)" strokeWidth="2.2" />
          {/* Tricolour cheek patches */}
          <path d="M28 48 C 33 41, 40 42, 39 51 C 38 58, 32 61, 28 56 Z" fill="var(--apricot)" opacity="0.78" />
          <path d="M68 48 C 63 41, 56 42, 57 51 C 58 58, 64 61, 68 56 Z" fill="var(--willow)" opacity="0.65" />
          {/* Rosy cheek blushes */}
          <ellipse cx="35" cy="59" rx="4.5" ry="2.8" fill="var(--blush)" />
          <ellipse cx="61" cy="59" rx="4.5" ry="2.8" fill="var(--blush)" />
          {/* Eyes */}
          <circle cx="39" cy="50" r="2.5" fill="var(--ink)" />
          <circle cx="57" cy="50" r="2.5" fill="var(--ink)" />
          <circle cx="38.2" cy="49.2" r="0.8" fill="var(--card)" />
          <circle cx="56.2" cy="49.2" r="0.8" fill="var(--card)" />
          {/* Little nose & happy mouth */}
          <ellipse cx="48" cy="57" rx="3.4" ry="2.4" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="1.6" />
          <path d="M44.5 62 Q 48 64.5, 51.5 62" stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" />
          {/* Tiny whiskers */}
          <path d="M24 58 L 32 58 M64 58 L 72 58" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      )}
    </svg>
  );
}
