/** 404 illustration: "The trail went cold" — a beagle nose-down following paw prints that stop at a pile of willow leaves. */
export function NotFoundBeagleScene({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 460 320"
      fill="none"
      className={className}
      role="img"
      aria-label="Illustration of a spotted beagle nose-down sniffing along apricot paw prints that stop at a pile of fallen willow leaves."
    >
      {/* Oat & sage meadow backdrop */}
      <rect x="8" y="8" width="444" height="304" rx="28" fill="var(--sage-wash)" stroke="var(--line)" strokeWidth="2" />

      {/* Soft garden ground line */}
      <path d="M24 252 Q 220 242, 436 254" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" />

      {/* Dotted trail of paw prints coming from the left and ending at the leaf pile */}
      <path d="M44 274 C 120 278, 198 268, 294 260" stroke="var(--line)" strokeWidth="1.8" strokeDasharray="4 6" />
      {[
        { x: 64, y: 274, r: 82 },
        { x: 118, y: 272, r: 78 },
        { x: 174, y: 266, r: 80 },
        { x: 228, y: 264, r: 76 },
        { x: 280, y: 258, r: 74 },
      ].map((p) => (
        <g key={p.x} transform={`translate(${p.x} ${p.y}) rotate(${p.r}) scale(0.76)`}>
          <circle cx="-6" cy="-7" r="2.7" fill="var(--apricot)" />
          <circle cx="0" cy="-10" r="2.7" fill="var(--apricot)" />
          <circle cx="6" cy="-7" r="2.7" fill="var(--apricot)" />
          <ellipse cx="0" cy="0" rx="5.6" ry="4.6" fill="var(--apricot)" />
        </g>
      ))}

      {/* Little puzzled question mark floating above the beagle's ear */}
      <text
        x="266"
        y="126"
        fill="var(--apricot-ink)"
        fontFamily="var(--font-hand)"
        fontSize="30"
        fontWeight="600"
      >
        ?
      </text>

      {/* Beagle nose-down sniffing intently */}
      <g transform="translate(88 122)">
        {/* Upright happy beagle tail with white tip */}
        <path d="M36 52 C 18 38, 12 16, 20 6" stroke="var(--ink)" strokeWidth="9" strokeLinecap="round" />
        <path d="M36 52 C 18 38, 12 16, 20 6" stroke="var(--apricot)" strokeWidth="5.5" strokeLinecap="round" />
        <path d="M17 18 C 16 12, 18 8, 20 6" stroke="var(--card)" strokeWidth="5" strokeLinecap="round" />

        {/* Back & front legs */}
        <path d="M52 84 L 46 128 M68 88 L 68 128 M126 88 L 132 128 M142 86 L 154 126" stroke="var(--ink)" strokeWidth="10" strokeLinecap="round" />
        <path d="M52 84 L 46 128 M68 88 L 68 128 M126 88 L 132 128 M142 86 L 154 126" stroke="var(--card)" strokeWidth="6" strokeLinecap="round" />

        {/* Tricolour beagle torso */}
        <path
          d="M34 54 C 46 34, 114 34, 146 58 C 160 68, 158 92, 132 94 H 54 C 32 94, 24 72, 34 54 Z"
          fill="var(--card)"
          stroke="var(--ink)"
          strokeWidth="2.4"
        />
        {/* Saddle spot */}
        <path d="M56 42 C 80 38, 110 42, 118 58 C 108 72, 74 74, 54 62 Z" fill="var(--ink)" opacity="0.82" />
        <path d="M40 52 C 50 44, 62 46, 62 58 C 60 68, 46 70, 38 62 Z" fill="var(--apricot)" />

        {/* Leaf-green collar */}
        <path d="M138 62 L 154 84" stroke="var(--primary)" strokeWidth="7" strokeLinecap="round" />

        {/* Lowered head sniffing the ground */}
        <path
          d="M148 66 C 170 68, 194 86, 204 106 C 209 116, 200 128, 186 126 C 170 124, 152 110, 144 92 Z"
          fill="var(--apricot)"
          stroke="var(--ink)"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        {/* White muzzle tip */}
        <path d="M180 96 C 194 98, 204 106, 204 114 C 202 124, 190 126, 180 122 Z" fill="var(--card)" stroke="var(--ink)" strokeWidth="1.8" />
        {/* Long floppy beagle ear sweeping forward */}
        <path
          d="M158 72 C 154 88, 156 112, 168 118 C 178 122, 184 104, 178 86 Z"
          fill="var(--blush)"
          stroke="var(--ink)"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        {/* Focused eye & sniffing nose */}
        <circle cx="177" cy="94" r="2.4" fill="var(--ink)" />
        <ellipse cx="202" cy="117" rx="5.5" ry="4" fill="var(--ink)" />
        {/* Little sniff lines */}
        <path d="M212 116 L 220 114 M213 122 L 222 123" stroke="var(--muted)" strokeWidth="1.8" strokeLinecap="round" />
      </g>

      {/* Pile of fallen willow leaves where the trail stops */}
      <g transform="translate(310 202)">
        <ellipse cx="56" cy="52" rx="58" ry="18" fill="var(--willow)" opacity="0.55" />
        {[
          { x: 24, y: 42, r: -24, c: 'var(--willow)' },
          { x: 48, y: 34, r: 16, c: 'var(--primary)' },
          { x: 74, y: 42, r: -14, c: 'var(--apricot)' },
          { x: 38, y: 48, r: 28, c: 'var(--primary)' },
          { x: 62, y: 48, r: -26, c: 'var(--willow)' },
          { x: 88, y: 46, r: 18, c: 'var(--willow)' },
          { x: 52, y: 24, r: -8, c: 'var(--apricot)' },
        ].map((leaf, i) => (
          <path
            key={i}
            transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.r})`}
            d="M-16 0 C -8 -8, 8 -8, 18 0 C 8 8, -8 8, -16 0 Z"
            fill={leaf.c}
            stroke="var(--ink)"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        ))}
        {/* Two drifting willow leaves overhead */}
        <path
          d="M46 -44 C 54 -52, 68 -50, 74 -42 C 66 -34, 52 -36, 46 -44 Z"
          fill="var(--willow)"
          stroke="var(--ink)"
          strokeWidth="1.6"
        />
        <path
          d="M84 -78 C 92 -86, 104 -84, 110 -76 C 102 -68, 90 -70, 84 -78 Z"
          fill="var(--primary)"
          stroke="var(--ink)"
          strokeWidth="1.6"
        />
      </g>
    </svg>
  );
}
