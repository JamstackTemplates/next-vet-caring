/** Night-time clinic porch scene with a single lit lamp, moon over willow and glowing ER phone handset. */
export function AfterHoursLampScene({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 300"
      fill="none"
      className={className}
      role="img"
      aria-label="Illustration of Willow Paws clinic at night with a single warm porch lamp under the crescent moon and a glowing telephone handset."
    >
      {/* Deep evening sky */}
      <rect x="6" y="6" width="408" height="288" rx="26" fill="#102819" stroke="#395E44" strokeWidth="2" />

      {/* Crescent moon & gentle stars */}
      <path
        d="M84 44 C 68 47, 58 62, 62 78 C 66 93, 82 102, 97 96 C 83 96, 74 84, 75 70 C 76 58, 82 49, 84 44 Z"
        fill="#F4E3B2"
        stroke="#F9F2D9"
        strokeWidth="1.6"
      />
      <circle cx="132" cy="54" r="2" fill="#F4E3B2" opacity="0.85" />
      <circle cx="164" cy="38" r="1.5" fill="#F4E3B2" opacity="0.65" />
      <circle cx="52" cy="112" r="1.6" fill="#F4E3B2" opacity="0.6" />
      <circle cx="298" cy="46" r="2" fill="#F4E3B2" opacity="0.75" />

      {/* Night willow fronds silhouette */}
      <g stroke="#4E7B55" strokeWidth="2" strokeLinecap="round" opacity="0.85">
        <path d="M402 24 C 330 22, 260 32, 204 54" strokeWidth="4" />
        <path d="M242 42 Q 236 86, 240 124" />
        <path d="M276 34 Q 282 88, 274 134" />
        <path d="M318 28 Q 312 96, 320 156" />
        <path d="M356 26 Q 364 104, 354 176" />
        <path d="M386 30 Q 380 112, 388 186" />
      </g>

      {/* Clinic porch wall at night */}
      <rect x="34" y="106" width="198" height="162" rx="8" fill="#1A3A25" stroke="#537A5D" strokeWidth="2" />
      <path d="M22 108 L 132 68 L 244 108 Z" fill="#152F1E" stroke="#537A5D" strokeWidth="2" strokeLinejoin="round" />

      {/* Arched clinic door at rest */}
      <path d="M74 268 V 162 C 74 132, 146 132, 146 162 V 268 Z" fill="#235733" stroke="#759E7C" strokeWidth="2" />
      <path d="M84 164 C 84 146, 136 146, 136 164 Z" fill="#294F35" stroke="#759E7C" strokeWidth="1.6" />
      <circle cx="136" cy="212" r="3.8" fill="#EFA470" />

      {/* Warm porch lamp & cone of golden light */}
      <path d="M168 148 H 184 V 160" stroke="#A7C4AB" strokeWidth="2.2" strokeLinecap="round" />
      <polygon points="184,180 126,268 242,268" fill="#F2B872" opacity="0.16" />
      <circle cx="184" cy="172" r="24" fill="#F2B872" opacity="0.22" />
      <rect x="174" y="158" width="20" height="24" rx="7" fill="#FAD7A0" stroke="#F6F3E7" strokeWidth="2" />
      <circle cx="184" cy="170" r="5" fill="#FFFDF6" />

      {/* Glowing telephone handset card on the right */}
      <g transform="translate(264 150)">
        <circle cx="58" cy="54" r="52" fill="#EFA470" opacity="0.14" />
        <circle cx="58" cy="54" r="40" fill="#203F2A" stroke="#EFA470" strokeWidth="2.2" strokeDasharray="5 4" />
        {/* Warm glowing handset */}
        <path
          d="M40 36 C 36 42, 37 56, 49 68 C 61 80, 75 81, 81 77 L 85 71 C 87 69, 86 65, 83 64 L 74 60 C 71 59, 68 60, 66 62 L 64 64 C 58 61, 53 56, 50 50 L 52 48 C 54 46, 55 43, 54 40 L 50 31 C 49 28, 45 27, 43 29 Z"
          fill="#EFA470"
          stroke="#FFFDF6"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Signal waves */}
        <path d="M68 32 C 76 34, 82 40, 84 48 M71 24 C 83 27, 91 35, 93 46" stroke="#FAD7A0" strokeWidth="2.2" strokeLinecap="round" />
      </g>

      {/* Quiet night ground */}
      <path d="M18 268 H 402" stroke="#537A5D" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
