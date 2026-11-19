/** Reusable hanging weeping-willow fronds along the top edge of key bands, page heads and the footer. */
export function WillowFrondBorder({
  className = '',
  tone = 'garden',
}: {
  className?: string;
  /** 'garden' for oat/sage surfaces, 'canopy' for deep green bands such as Footer or After Hours. */
  tone?: 'garden' | 'canopy';
}) {
  const stemColor = tone === 'canopy' ? '#A7CF8F' : 'var(--willow-deep)';
  const leafLight = tone === 'canopy' ? '#9EC383' : 'var(--willow)';
  const leafDark = tone === 'canopy' ? '#6F9F5E' : 'var(--primary)';
  const outline = tone === 'canopy' ? '#132A19' : 'var(--ink)';

  const strands = [
    { x: 46, len: 54, curve: 8, leaves: [14, 28, 42] },
    { x: 112, len: 74, curve: -10, leaves: [16, 30, 44, 58] },
    { x: 184, len: 48, curve: 7, leaves: [14, 28, 40] },
    { x: 266, len: 66, curve: -8, leaves: [14, 29, 44, 57] },
    { x: 348, len: 42, curve: 6, leaves: [12, 26] },
    { x: 432, len: 70, curve: -9, leaves: [16, 30, 46, 60] },
    { x: 524, len: 50, curve: 8, leaves: [14, 28, 42] },
    { x: 612, len: 62, curve: -7, leaves: [16, 31, 47] },
    { x: 704, len: 44, curve: 6, leaves: [14, 29] },
    { x: 788, len: 74, curve: -10, leaves: [16, 31, 46, 61] },
    { x: 878, len: 52, curve: 7, leaves: [14, 29, 43] },
    { x: 966, len: 66, curve: -8, leaves: [15, 30, 45, 58] },
    { x: 1054, len: 46, curve: 6, leaves: [14, 28, 40] },
    { x: 1138, len: 68, curve: -9, leaves: [16, 32, 47, 60] },
  ];

  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 84"
        preserveAspectRatio="xMidYMin slice"
        className="block h-12 w-full sm:h-16"
        fill="none"
      >
        <path
          d="M0 4 Q 280 14, 600 5 T 1200 6"
          stroke={stemColor}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {strands.map((strand, i) => (
          <g key={strand.x}>
            <path
              d={`M${strand.x} 2 Q ${strand.x + strand.curve} ${strand.len * 0.55}, ${strand.x + strand.curve * 0.45} ${strand.len}`}
              stroke={stemColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            {strand.leaves.map((ly, j) => {
              const side = (i + j) % 2 === 0 ? 1 : -1;
              const cx = strand.x + strand.curve * (ly / strand.len) * 0.65;
              const fill = (i + j) % 3 === 0 ? leafDark : leafLight;
              return (
                <path
                  key={`${strand.x}-${ly}`}
                  d={`M${cx} ${ly} C ${cx + side * 12} ${ly + 3}, ${cx + side * 16} ${ly + 11}, ${cx + side * 4} ${ly + 18} C ${cx - side * 2} ${ly + 12}, ${cx - side * 2} ${ly + 5}, ${cx} ${ly} Z`}
                  fill={fill}
                  stroke={outline}
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              );
            })}
          </g>
        ))}
      </svg>
    </div>
  );
}
