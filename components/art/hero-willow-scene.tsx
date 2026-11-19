/**
 * Hero scene: "Under the willow".
 * Wide desktop composition (green clinic front door, flower window box with curled tabby,
 * weeping willow canopy, scruffy terrier on the step, rabbit peeking from carrier,
 * and paw-print trail from the garden gate). On narrow mobile widths it frames cleanly
 * around the willow fronds, green front door and terrier.
 */
export function HeroWillowScene({
  className = '',
  compact = false,
}: {
  className?: string;
  /** Crops tightly to the green door, terrier and willow fronds for mobile hero above-the-fold. */
  compact?: boolean;
}) {
  return (
    <svg
      viewBox={compact ? '115 24 440 390' : '0 0 680 510'}
      fill="none"
      className={className}
      role="img"
      aria-label="Illustration of Willow Paws Vet Clinic: a leafy weeping willow overhanging a green front door, a grinning scruffy terrier on the doorstep, a tabby cat sleeping in the flower-boxed window, and a rabbit peeking from a carrier beside a paw-printed garden path."
    >
      {/* Warm garden sky backdrop */}
      <rect x="8" y="16" width="664" height="478" rx="34" fill="var(--sage-wash)" stroke="var(--line)" strokeWidth="2" />

      {/* Soft distant park trees (Laurelhurst Park silhouette) */}
      <ellipse cx="115" cy="215" rx="74" ry="52" fill="var(--willow)" opacity="0.28" />
      <ellipse cx="565" cy="198" rx="84" ry="62" fill="var(--willow)" opacity="0.24" />

      {/* Warm cream clapboard clinic facade */}
      <path
        d="M118 118 H 494 V 384 H 118 Z"
        fill="var(--card)"
        stroke="var(--ink)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* Roof fascia & subtle eaves shadow */}
      <path d="M98 118 L 306 52 L 516 118 Z" fill="var(--cork)" stroke="var(--ink)" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M118 118 H 494 V 131 H 118 Z" fill="var(--willow)" opacity="0.28" />

      {/* Subtle horizontal clapboard siding lines */}
      <path
        d="M120 165 H 492 M120 205 H 492 M120 245 H 492 M120 285 H 492 M120 325 H 492"
        stroke="var(--line)"
        strokeWidth="1.2"
        opacity="0.7"
      />

      {/* Clinic window on the left with curled sleeping tabby cat */}
      <g>
        <rect x="148" y="176" width="116" height="106" rx="10" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.4" />
        {/* Warm lamplit interior glow */}
        <rect x="156" y="184" width="100" height="90" rx="6" fill="var(--blush)" opacity="0.45" />
        {/* Window muntins */}
        <path d="M206 184 V 274 M156 226 H 256" stroke="var(--ink)" strokeWidth="2" />
        {/* Sleeping tabby cat curled on sill */}
        <g transform="translate(174 238)">
          <ellipse cx="30" cy="24" rx="22" ry="13" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="2" />
          {/* Tabby stripes */}
          <path d="M22 14 C 24 18, 25 22, 23 26 M30 12 C 32 16, 32 21, 31 25 M38 14 C 40 18, 40 22, 38 25" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
          {/* Cat head tucked on paws */}
          <circle cx="14" cy="21" r="10.5" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="2" />
          <path d="M6 15 L 5 6 L 13 12 Z M16 12 L 22 6 L 23 15 Z" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="1.8" strokeLinejoin="round" />
          {/* Closed happy eyes */}
          <path d="M9 21 Q 11 23, 13 21 M16 21 Q 18 23, 20 21" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" />
          {/* Curled tail */}
          <path d="M49 28 C 58 29, 58 19, 49 20" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
        </g>
        {/* Wooden flower window box */}
        <path d="M138 282 H 274 L 266 312 H 146 Z" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M144 294 H 268" stroke="var(--ink)" strokeWidth="1.4" opacity="0.45" />
        {/* Trailing greenery & blooms */}
        <circle cx="162" cy="278" r="9" fill="var(--willow)" stroke="var(--ink)" strokeWidth="1.8" />
        <circle cx="184" cy="275" r="10" fill="var(--primary)" stroke="var(--ink)" strokeWidth="1.8" />
        <circle cx="212" cy="278" r="9" fill="var(--willow)" stroke="var(--ink)" strokeWidth="1.8" />
        <circle cx="238" cy="275" r="10" fill="var(--primary)" stroke="var(--ink)" strokeWidth="1.8" />
        <circle cx="256" cy="279" r="8" fill="var(--willow)" stroke="var(--ink)" strokeWidth="1.8" />
        <circle cx="174" cy="272" r="4" fill="var(--card)" stroke="var(--ink)" strokeWidth="1.4" />
        <circle cx="226" cy="271" r="4.5" fill="var(--blush)" stroke="var(--ink)" strokeWidth="1.4" />
        <circle cx="247" cy="274" r="3.8" fill="var(--card)" stroke="var(--ink)" strokeWidth="1.4" />
      </g>

      {/* Clinic's signature arched green front door */}
      <g>
        {/* Outer wooden doorframe */}
        <path
          d="M312 384 V 196 C 312 152, 434 152, 434 196 V 384 Z"
          fill="var(--card)"
          stroke="var(--ink)"
          strokeWidth="2.6"
        />
        {/* Leaf-green panelled door */}
        <path
          d="M322 384 V 199 C 322 164, 424 164, 424 199 V 384 Z"
          fill="var(--primary)"
          stroke="var(--ink)"
          strokeWidth="2.2"
        />
        {/* Fanlight transom glass */}
        <path
          d="M336 202 C 336 177, 410 177, 410 202 Z"
          fill="var(--paper)"
          stroke="var(--ink)"
          strokeWidth="2"
        />
        <path d="M373 184 V 202 M352 190 L 373 202 M394 190 L 373 202" stroke="var(--ink)" strokeWidth="1.6" />
        {/* Lower recessed door panels */}
        <rect x="336" y="220" width="32" height="62" rx="4" fill="var(--primary-strong)" opacity="0.55" stroke="var(--ink)" strokeWidth="1.8" />
        <rect x="378" y="220" width="32" height="62" rx="4" fill="var(--primary-strong)" opacity="0.55" stroke="var(--ink)" strokeWidth="1.8" />
        <rect x="336" y="294" width="32" height="68" rx="4" fill="var(--primary-strong)" opacity="0.55" stroke="var(--ink)" strokeWidth="1.8" />
        <rect x="378" y="294" width="32" height="68" rx="4" fill="var(--primary-strong)" opacity="0.55" stroke="var(--ink)" strokeWidth="1.8" />
        {/* Warm brass doorknob */}
        <circle cx="412" cy="292" r="5" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="1.8" />
        {/* Clinic plaque "2814" beside door */}
        <rect x="278" y="218" width="26" height="36" rx="6" fill="var(--card)" stroke="var(--ink)" strokeWidth="1.8" />
        <text x="291" y="241" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-display)" fontSize="10" fontWeight="600">
          2814
        </text>
        {/* Warm glowing porch lantern */}
        <path d="M446 196 H 460 V 210" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="460" cy="222" r="18" fill="var(--apricot)" opacity="0.22" />
        <rect x="451" y="210" width="18" height="22" rx="6" fill="var(--blush)" stroke="var(--ink)" strokeWidth="2" />
        <circle cx="460" cy="221" r="4" fill="var(--apricot)" />
      </g>

      {/* Garden ground & stone path */}
      <path d="M8 384 H 672 V 460 C 672 479, 657 494, 638 494 H 42 C 23 494, 8 479, 8 460 Z" fill="var(--willow)" opacity="0.34" />
      <path d="M8 384 H 672" stroke="var(--ink)" strokeWidth="2.2" />

      {/* Curved stone garden path from front gate to clinic step */}
      <path
        d="M174 494 C 218 450, 294 426, 336 402 H 416 C 392 436, 332 464, 296 494 Z"
        fill="var(--card)"
        stroke="var(--ink)"
        strokeWidth="2"
      />
      {/* Stone doorstep */}
      <rect x="302" y="378" width="144" height="22" rx="7" fill="var(--cork)" stroke="var(--ink)" strokeWidth="2.2" />

      {/* Paw-print trail leading from the garden gate up to the door */}
      {[
        { x: 222, y: 472, r: 44 },
        { x: 256, y: 454, r: 52 },
        { x: 288, y: 438, r: 48 },
        { x: 320, y: 420, r: 42 },
      ].map((p) => (
        <g key={`${p.x}-${p.y}`} transform={`translate(${p.x} ${p.y}) rotate(${p.r}) scale(0.7)`}>
          <circle cx="-6" cy="-7" r="2.6" fill="var(--apricot)" />
          <circle cx="0" cy="-10" r="2.6" fill="var(--apricot)" />
          <circle cx="6" cy="-7" r="2.6" fill="var(--apricot)" />
          <ellipse cx="0" cy="0" rx="5.5" ry="4.5" fill="var(--apricot)" />
        </g>
      ))}

      {/* Low wooden garden fence & gate on left */}
      <g stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round">
        <rect x="28" y="346" width="14" height="62" rx="4" fill="var(--card)" />
        <rect x="52" y="352" width="14" height="56" rx="4" fill="var(--card)" />
        <rect x="76" y="352" width="14" height="56" rx="4" fill="var(--card)" />
        <rect x="100" y="346" width="14" height="62" rx="4" fill="var(--card)" />
        <rect x="24" y="366" width="94" height="8" rx="3" fill="var(--cork)" />
        <rect x="24" y="390" width="94" height="8" rx="3" fill="var(--cork)" />
      </g>

      {/* Rabbit peeking calmly from a vented pet carrier beside the gate */}
      <g transform="translate(128 358)">
        {/* Carrier body */}
        <rect x="0" y="18" width="92" height="54" rx="14" fill="var(--willow)" stroke="var(--ink)" strokeWidth="2.2" />
        <path d="M0 44 H 92" stroke="var(--ink)" strokeWidth="2" />
        {/* Carrier handle */}
        <path d="M30 18 C 30 6, 62 6, 62 18" stroke="var(--ink)" strokeWidth="2.4" strokeLinecap="round" />
        {/* Side air vents */}
        <rect x="14" y="26" width="14" height="6" rx="3" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.5" />
        <rect x="64" y="26" width="14" height="6" rx="3" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.5" />
        {/* Open door flap */}
        <circle cx="46" cy="46" r="19" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2" />
        {/* Curious rabbit with upright ears */}
        <ellipse cx="40" cy="24" rx="4.5" ry="13" transform="rotate(-10 40 24)" fill="var(--card)" stroke="var(--ink)" strokeWidth="2" />
        <ellipse cx="52" cy="24" rx="4.5" ry="13" transform="rotate(10 52 24)" fill="var(--card)" stroke="var(--ink)" strokeWidth="2" />
        <ellipse cx="40" cy="25" rx="2" ry="7" transform="rotate(-10 40 25)" fill="var(--blush)" />
        <ellipse cx="52" cy="25" rx="2" ry="7" transform="rotate(10 52 25)" fill="var(--blush)" />
        <circle cx="46" cy="43" r="12.5" fill="var(--card)" stroke="var(--ink)" strokeWidth="2" />
        <circle cx="41" cy="41" r="2" fill="var(--ink)" />
        <circle cx="51" cy="41" r="2" fill="var(--ink)" />
        <path d="M44 46 H 48 L 46 48.5 Z" fill="var(--apricot)" />
        {/* Little paws resting on doorway */}
        <ellipse cx="38" cy="56" rx="5" ry="3.2" fill="var(--card)" stroke="var(--ink)" strokeWidth="1.8" />
        <ellipse cx="54" cy="56" rx="5" ry="3.2" fill="var(--card)" stroke="var(--ink)" strokeWidth="1.8" />
      </g>

      {/* Scruffy terrier sitting happily on the clinic step with a cone-less grin */}
      <g transform="translate(332 292)">
        {/* Wagging scruffy tail */}
        <path d="M74 74 C 90 66, 94 50, 86 44" stroke="var(--ink)" strokeWidth="5.5" strokeLinecap="round" />
        <path d="M74 74 C 90 66, 94 50, 86 44" stroke="var(--apricot)" strokeWidth="3" strokeLinecap="round" />
        {/* Seated body */}
        <path
          d="M24 54 C 14 68, 16 94, 34 94 H 66 C 80 94, 82 70, 70 54 Z"
          fill="var(--blush)"
          stroke="var(--ink)"
          strokeWidth="2.3"
          strokeLinejoin="round"
        />
        {/* Chest fluff */}
        <path d="M35 56 C 39 68, 54 68, 58 56" fill="var(--card)" stroke="var(--ink)" strokeWidth="1.8" />
        {/* Apricot neckerchief */}
        <path d="M27 52 Q 46 62, 65 52 L 54 67 Q 46 70, 38 67 Z" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
        {/* Front legs & paws */}
        <path d="M36 68 V 95 M56 68 V 95" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" />
        <ellipse cx="34" cy="95" rx="7.5" ry="4.5" fill="var(--card)" stroke="var(--ink)" strokeWidth="2" />
        <ellipse cx="58" cy="95" rx="7.5" ry="4.5" fill="var(--card)" stroke="var(--ink)" strokeWidth="2" />
        {/* Floppy scruffy ears */}
        <path d="M24 22 C 12 24, 10 42, 18 46 C 24 48, 28 38, 27 28 Z" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M68 22 C 80 24, 82 42, 74 46 C 68 48, 64 38, 65 28 Z" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="2.2" strokeLinejoin="round" />
        {/* Scruffy terrier head with tufts */}
        <path
          d="M23 30 C 23 14, 34 8, 46 10 C 58 8, 69 14, 69 30 C 69 46, 59 54, 46 54 C 33 54, 23 46, 23 30 Z"
          fill="var(--blush)"
          stroke="var(--ink)"
          strokeWidth="2.3"
        />
        {/* Cute scruffy ear-top & chin tufts */}
        <path d="M40 9 L 44 3 L 48 9 L 53 4 L 55 10" fill="var(--blush)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
        {/* Patch around left eye */}
        <ellipse cx="35" cy="29" rx="9" ry="7.5" fill="var(--apricot)" opacity="0.65" />
        {/* Snout */}
        <ellipse cx="46" cy="40" rx="13" ry="9" fill="var(--card)" stroke="var(--ink)" strokeWidth="1.8" />
        {/* Kind calm eyes */}
        <circle cx="36" cy="29" r="2.7" fill="var(--ink)" />
        <circle cx="56" cy="29" r="2.7" fill="var(--ink)" />
        <circle cx="35.2" cy="28.2" r="0.8" fill="var(--card)" />
        <circle cx="55.2" cy="28.2" r="0.8" fill="var(--card)" />
        {/* Nose & warm grin */}
        <ellipse cx="46" cy="36.5" rx="4.5" ry="3.2" fill="var(--ink)" />
        <path d="M46 40 V 43 M39 42.5 C 42 47, 50 47, 53 42.5" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Large weeping willow trunk on the right + sweeping overhanging fronds */}
      <g>
        {/* Willow trunk */}
        <path
          d="M542 406 C 548 332, 540 240, 526 150 C 548 136, 578 130, 598 144 C 588 228, 592 324, 614 406 Z"
          fill="var(--cork)"
          stroke="var(--ink)"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        {/* Gentle bark grain lines */}
        <path d="M558 190 C 562 246, 562 308, 558 370 M578 210 C 574 268, 578 326, 588 378" stroke="var(--ink)" strokeWidth="1.5" opacity="0.45" strokeLinecap="round" />

        {/* Sweeping willow bough across the top */}
        <path
          d="M668 58 C 560 32, 412 18, 250 38 C 165 48, 92 66, 38 86"
          stroke="var(--willow-deep)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M652 94 C 556 70, 444 62, 336 74"
          stroke="var(--willow-deep)"
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        {/* Canopy leaf clouds */}
        <ellipse cx="564" cy="96" rx="92" ry="52" fill="var(--willow)" stroke="var(--ink)" strokeWidth="2" />
        <ellipse cx="478" cy="70" rx="82" ry="42" fill="var(--primary)" opacity="0.88" stroke="var(--ink)" strokeWidth="2" />
        <ellipse cx="364" cy="52" rx="74" ry="34" fill="var(--willow)" stroke="var(--ink)" strokeWidth="2" />
        <ellipse cx="242" cy="54" rx="68" ry="30" fill="var(--primary)" opacity="0.85" stroke="var(--ink)" strokeWidth="2" />
        <ellipse cx="132" cy="68" rx="62" ry="28" fill="var(--willow)" stroke="var(--ink)" strokeWidth="2" />

        {/* Cascading willow fronds hanging across the top of the scene */}
        {[
          { x: 96, y: 74, len: 92, leaves: 4 },
          { x: 158, y: 64, len: 72, leaves: 3 },
          { x: 228, y: 58, len: 88, leaves: 4 },
          { x: 306, y: 56, len: 76, leaves: 3 },
          { x: 422, y: 76, len: 102, leaves: 4 },
          { x: 486, y: 88, len: 148, leaves: 6 },
          { x: 528, y: 112, len: 170, leaves: 6 },
          { x: 616, y: 112, len: 186, leaves: 7 },
          { x: 648, y: 92, len: 156, leaves: 6 },
        ].map((f, idx) => (
          <g key={f.x}>
            <path
              d={`M${f.x} ${f.y} Q ${f.x + (idx % 2 === 0 ? 10 : -10)} ${f.y + f.len * 0.5}, ${f.x + (idx % 2 === 0 ? 4 : -4)} ${f.y + f.len}`}
              stroke="var(--willow-deep)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            {Array.from({ length: f.leaves }).map((_, j) => {
              const ly = f.y + 16 + j * ((f.len - 22) / Math.max(f.leaves, 1));
              const side = (idx + j) % 2 === 0 ? 1 : -1;
              return (
                <path
                  key={`${f.x}-${j}`}
                  d={`M${f.x + (idx % 2 === 0 ? 4 : -4)} ${ly} C ${f.x + side * 14} ${ly + 3}, ${f.x + side * 16} ${ly + 12}, ${f.x + side * 4} ${ly + 20} C ${f.x - side * 2} ${ly + 13}, ${f.x - side * 2} ${ly + 5}, ${f.x + (idx % 2 === 0 ? 4 : -4)} ${ly} Z`}
                  fill={(idx + j) % 3 === 0 ? 'var(--primary)' : 'var(--willow)'}
                  stroke="var(--ink)"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              );
            })}
          </g>
        ))}
      </g>

      {/* Fallen willow leaves on the garden grass */}
      <ellipse cx="472" cy="436" rx="9" ry="3.5" transform="rotate(-18 472 436)" fill="var(--willow)" stroke="var(--ink)" strokeWidth="1.4" />
      <ellipse cx="508" cy="454" rx="8" ry="3.2" transform="rotate(14 508 454)" fill="var(--apricot)" stroke="var(--ink)" strokeWidth="1.4" />
      <ellipse cx="566" cy="442" rx="9" ry="3.5" transform="rotate(-8 566 442)" fill="var(--willow)" stroke="var(--ink)" strokeWidth="1.4" />
    </svg>
  );
}
