/** Diagonal line of alternating paw prints separating major sections (apricot in light, willow in dark). */
export function PawTrailDivider({
  flip = false,
  className = '',
}: {
  flip?: boolean;
  className?: string;
}) {
  const prints = [
    { x: 64, y: 46, rot: 54, scale: 0.9 },
    { x: 144, y: 31, rot: 72, scale: 0.95 },
    { x: 230, y: 48, rot: 58, scale: 0.92 },
    { x: 318, y: 30, rot: 76, scale: 1 },
    { x: 410, y: 45, rot: 60, scale: 0.94 },
    { x: 500, y: 26, rot: 72, scale: 0.98 },
    { x: 590, y: 42, rot: 62, scale: 0.9 },
    { x: 682, y: 24, rot: 74, scale: 0.96 },
    { x: 774, y: 40, rot: 60, scale: 0.92 },
    { x: 866, y: 22, rot: 74, scale: 0.94 },
  ];

  return (
    <div className={`wrap py-2 select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 940 70"
        className={`mx-auto block h-10 w-full max-w-4xl opacity-85 ${flip ? '-scale-x-100' : ''}`}
        fill="none"
      >
        <path
          d="M24 54 C 240 50, 560 28, 912 18"
          stroke="var(--line)"
          strokeWidth="1.5"
          strokeDasharray="4 7"
          strokeLinecap="round"
        />
        {prints.map((p, idx) => (
          <g
            key={p.x}
            transform={`translate(${p.x} ${p.y}) rotate(${p.rot}) scale(${p.scale})`}
            opacity={0.55 + (idx % 3) * 0.16}
          >
            <ellipse cx="-8" cy="-8" rx="3" ry="4" fill="var(--paw-trail)" />
            <ellipse cx="-2" cy="-12" rx="3" ry="4.2" fill="var(--paw-trail)" />
            <ellipse cx="4.5" cy="-11.5" rx="3" ry="4.2" fill="var(--paw-trail)" />
            <ellipse cx="9.5" cy="-7" rx="3" ry="3.8" fill="var(--paw-trail)" />
            <path
              d="M0 -4 C 6 -4, 9 1, 7 6 C 5 9, 2 9, 0 7.5 C -2 9, -5 9, -7 6 C -9 1, -6 -4, 0 -4 Z"
              fill="var(--paw-trail)"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
