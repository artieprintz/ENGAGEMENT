import React from 'react';

/**
 * Traditional South Indian Kuthuvilakku (Brass Standing Lamp)
 * Intricately crafted with multi-tier bell base, ornate stem, 
 * five-face oil bowl, radiant flames, and ornamental Annapakshi crown.
 */
export const Kuthuvilakku: React.FC<{ className?: string; height?: number }> = ({
  className = "w-20 md:w-28",
  height = 240,
}) => {
  return (
    <svg
      viewBox="0 0 120 320"
      height={height}
      className={`select-none drop-shadow-[0_4px_12px_rgba(212,163,67,0.35)] ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Traditional South Indian Kuthuvilakku Brass Lamp"
    >
      <defs>
        <linearGradient id="brassGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9b6e1e" />
          <stop offset="25%" stopColor="#d8a742" />
          <stop offset="50%" stopColor="#fff3bf" />
          <stop offset="75%" stopColor="#cfa038" />
          <stop offset="100%" stopColor="#7a4f0f" />
        </linearGradient>
        <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffe680" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#ff9900" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ff5500" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="flameColor" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#fff275" />
          <stop offset="70%" stopColor="#ff8c00" />
          <stop offset="100%" stopColor="#d63000" />
        </radialGradient>
      </defs>

      {/* Topmost Annapakshi (Celestial Swan / Bird) */}
      <path
        d="M60 22 C64 16, 74 16, 74 24 C74 30, 68 34, 60 38 C52 34, 46 30, 46 24 C46 16, 56 16, 60 22 Z"
        fill="url(#brassGold)"
      />
      {/* Crown Crest finial */}
      <path d="M60 10 L63 20 L57 20 Z" fill="url(#brassGold)" />
      <circle cx="60" cy="8" r="2.5" fill="#ffe28a" />

      {/* Main Top Deepam Bowl */}
      <ellipse cx="60" cy="50" rx="32" ry="7" fill="url(#brassGold)" stroke="#6a4409" strokeWidth="0.8" />
      <path
        d="M28 50 C28 62, 92 62, 92 50 C92 42, 28 42, 28 50 Z"
        fill="url(#brassGold)"
      />
      
      {/* Center Lamp Flame & Radiance */}
      <g className="flame-flicker">
        <circle cx="60" cy="40" r="16" fill="url(#lampGlow)" />
        <path
          d="M60 27 C57 34, 54 38, 54 44 C54 49, 57 52, 60 52 C63 52, 66 49, 66 44 C66 38, 63 34, 60 27 Z"
          fill="url(#flameColor)"
        />
        <ellipse cx="60" cy="46" rx="2.5" ry="4" fill="#ffffff" opacity="0.85" />
      </g>

      {/* Left Wick Flame */}
      <g className="flame-flicker" style={{ animationDelay: '0.4s' }}>
        <circle cx="34" cy="45" r="9" fill="url(#lampGlow)" />
        <path
          d="M34 37 C32 41, 30 43, 30 47 C30 50, 32 52, 34 52 C36 52, 38 50, 38 47 C38 43, 36 41, 34 37 Z"
          fill="url(#flameColor)"
        />
      </g>

      {/* Right Wick Flame */}
      <g className="flame-flicker" style={{ animationDelay: '0.8s' }}>
        <circle cx="86" cy="45" r="9" fill="url(#lampGlow)" />
        <path
          d="M86 37 C84 41, 82 43, 82 47 C82 50, 84 52, 86 52 C88 52, 90 50, 90 47 C90 43, 88 41, 86 37 Z"
          fill="url(#flameColor)"
        />
      </g>

      {/* Upper Neck and Bead Rings */}
      <path d="M52 56 L68 56 L64 74 L56 74 Z" fill="url(#brassGold)" />
      <ellipse cx="60" cy="74" rx="10" ry="3.5" fill="url(#brassGold)" />
      <ellipse cx="60" cy="80" rx="14" ry="4" fill="url(#brassGold)" />

      {/* Second Tier Decorative Disc */}
      <ellipse cx="60" cy="98" rx="24" ry="6" fill="url(#brassGold)" stroke="#744a0b" strokeWidth="0.5" />
      <path d="M36 98 C36 106, 84 106, 84 98 Z" fill="url(#brassGold)" />

      {/* Main Fluted Stem */}
      <path d="M55 106 L65 106 L63 190 L57 190 Z" fill="url(#brassGold)" />
      {/* Decorative Ridges along Stem */}
      <ellipse cx="60" cy="130" rx="9" ry="3" fill="url(#brassGold)" />
      <ellipse cx="60" cy="155" rx="8.5" ry="3" fill="url(#brassGold)" />
      <ellipse cx="60" cy="180" rx="11" ry="3.5" fill="url(#brassGold)" />

      {/* Lower Decorative Sphere / Kalasam Element */}
      <circle cx="60" cy="205" r="14" fill="url(#brassGold)" />
      <ellipse cx="60" cy="205" rx="15" ry="4" fill="url(#brassGold)" stroke="#6a4409" strokeWidth="0.5" />

      {/* Flared Pedestal Neck */}
      <path d="M52 217 L68 217 L74 245 L46 245 Z" fill="url(#brassGold)" />
      <ellipse cx="60" cy="245" rx="18" ry="4.5" fill="url(#brassGold)" />

      {/* Multi-tier Bell Base */}
      <path d="M42 248 C42 248, 26 270, 20 286 L100 286 C94 270, 78 248, 78 248 Z" fill="url(#brassGold)" />
      
      {/* Base Rim with Engraved Scallops */}
      <path d="M18 286 L102 286 L104 298 L16 298 Z" fill="url(#brassGold)" />
      <ellipse cx="60" cy="298" rx="46" ry="6" fill="url(#brassGold)" stroke="#6a4409" strokeWidth="1" />
      
      {/* Tripod Feet (Traditional 3 elephant-foot/lion-foot bases) */}
      <path d="M22 298 L18 312 L30 312 L28 298 Z" fill="url(#brassGold)" />
      <path d="M55 298 L53 314 L67 314 L65 298 Z" fill="url(#brassGold)" />
      <path d="M92 298 L90 312 L102 312 L98 298 Z" fill="url(#brassGold)" />
    </svg>
  );
};

/**
 * South Indian Temple Arch & Mandapam Frame
 * Features Kalasams, ornamental Makara-thoranam curls, 
 * scalloped arches, and antique gold gradients.
 */
export const TempleArch: React.FC<{ children?: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Top Gopuram & Thoranam Header */}
      <div className="w-full flex flex-col items-center pointer-events-none">
        <svg
          viewBox="0 0 900 140"
          className="w-full max-w-4xl h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="archGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8d6215" />
              <stop offset="20%" stopColor="#cf9e38" />
              <stop offset="50%" stopColor="#ffea9f" />
              <stop offset="80%" stopColor="#cf9e38" />
              <stop offset="100%" stopColor="#8d6215" />
            </linearGradient>
            <linearGradient id="kalasamGold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fff5cb" />
              <stop offset="50%" stopColor="#d4a343" />
              <stop offset="100%" stopColor="#7a4f0f" />
            </linearGradient>
          </defs>

          {/* Central Gopuram Kalasams */}
          {/* Main Center Kalasam */}
          <path d="M450 6 L453 18 L447 18 Z" fill="url(#kalasamGold)" />
          <circle cx="450" cy="5" r="3.5" fill="#ffeaa7" />
          <ellipse cx="450" cy="22" rx="7" ry="4" fill="url(#kalasamGold)" />
          <path d="M442 24 C442 34, 458 34, 458 24 Z" fill="url(#kalasamGold)" />
          <ellipse cx="450" cy="36" rx="14" ry="7" fill="url(#kalasamGold)" />
          <path d="M434 38 C434 50, 466 50, 466 38 Z" fill="url(#kalasamGold)" />

          {/* Left Flanking Kalasam */}
          <circle cx="410" cy="18" r="2.5" fill="#ffeaa7" />
          <ellipse cx="410" cy="28" rx="5" ry="3" fill="url(#kalasamGold)" />
          <path d="M404 29 C404 38, 416 38, 416 29 Z" fill="url(#kalasamGold)" />
          <ellipse cx="410" cy="40" rx="9" ry="5" fill="url(#kalasamGold)" />

          {/* Right Flanking Kalasam */}
          <circle cx="490" cy="18" r="2.5" fill="#ffeaa7" />
          <ellipse cx="490" cy="28" rx="5" ry="3" fill="url(#kalasamGold)" />
          <path d="M484 29 C484 38, 496 38, 496 29 Z" fill="url(#kalasamGold)" />
          <ellipse cx="490" cy="40" rx="9" ry="5" fill="url(#kalasamGold)" />

          {/* Main Grand Arch Curve */}
          <path
            d="M 60 135 C 180 50, 320 45, 450 45 C 580 45, 720 50, 840 135"
            stroke="url(#archGold)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Inner Accent Line */}
          <path
            d="M 80 135 C 195 62, 325 58, 450 58 C 575 58, 705 62, 820 135"
            stroke="url(#archGold)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          {/* Outer Scalloped Lace (Traditional temple koodu / arch petals) */}
          <path
            d="M 120 120 Q 150 90, 180 102 Q 220 78, 260 85 Q 300 68, 340 70 Q 390 56, 450 56 Q 510 56, 560 70 Q 600 68, 640 85 Q 680 78, 720 102 Q 750 90, 780 120"
            stroke="url(#archGold)"
            strokeWidth="2.5"
            fill="none"
          />

          {/* Decorative Hanging Bell Motifs under arch */}
          {[220, 310, 400, 450, 500, 590, 680].map((cx, i) => (
            <g key={i}>
              <line x1={cx} y1="80" x2={cx} y2="105" stroke="url(#archGold)" strokeWidth="1.2" />
              <path
                d={`M ${cx - 5} 105 L ${cx + 5} 105 L ${cx + 7} 115 L ${cx - 7} 115 Z`}
                fill="url(#kalasamGold)"
              />
              <circle cx={cx} cy="118" r="2" fill="#ffeaa7" />
            </g>
          ))}
        </svg>
      </div>

      {children}
    </div>
  );
};

/**
 * Traditional Jasmine (Malli Poo) and Mango Leaf Thoranam
 * Suspended across the top as an auspicious South Indian wedding welcome.
 */
export const JasmineGarlandBanner: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`w-full overflow-hidden pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 1200 60"
        className="w-full h-10 md:h-14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="mangoLeaf" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e5c2b" />
            <stop offset="50%" stopColor="#2e7d32" />
            <stop offset="100%" stopColor="#14401c" />
          </linearGradient>
          <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b38222" />
            <stop offset="50%" stopColor="#ffea9f" />
            <stop offset="100%" stopColor="#b38222" />
          </linearGradient>
        </defs>

        {/* Hanging rope/string */}
        <path
          d="M0 6 Q 150 18, 300 8 Q 450 20, 600 8 Q 750 20, 900 8 Q 1050 20, 1200 6"
          stroke="url(#goldRibbon)"
          strokeWidth="3"
        />

        {/* Mango Leaves hanging down */}
        {[50, 150, 250, 350, 450, 550, 650, 750, 850, 950, 1050, 1150].map((x, i) => (
          <path
            key={`leaf-${i}`}
            d={`M ${x - 7} 10 C ${x - 9} 24, ${x} 46, ${x} 48 C ${x} 46, ${x + 9} 24, ${x + 7} 10 Z`}
            fill="url(#mangoLeaf)"
            stroke="#113618"
            strokeWidth="0.5"
          />
        ))}

        {/* Strands of fresh Jasmine flowers (clusters of white dots with orange kanakambaram accents) */}
        {Array.from({ length: 48 }).map((_, i) => {
          const x = 15 + i * 25;
          const y = 8 + Math.sin(i * 0.4) * 5;
          const isOrange = i % 4 === 0;
          return (
            <g key={`jasmine-${i}`}>
              <circle
                cx={x}
                cy={y}
                r={isOrange ? 3.5 : 3}
                fill={isOrange ? "#ff7824" : "#ffffff"}
                filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))"
              />
              <circle
                cx={x}
                cy={y + 5}
                r={2.5}
                fill={isOrange ? "#e65100" : "#fffbf0"}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

/**
 * Auspicious Kalasam / Purna Kumbham Motif
 * Traditional bronze pot with mango leaves and coconut,
 * symbolizing divine grace, prosperity, and auspicious start.
 */
export const AuspiciousKalasam: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
    >
      <defs>
        <linearGradient id="kalasamBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3db8f" />
          <stop offset="40%" stopColor="#cf9e38" />
          <stop offset="100%" stopColor="#875810" />
        </linearGradient>
        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2e7d32" />
          <stop offset="100%" stopColor="#14421b" />
        </linearGradient>
      </defs>

      {/* Coconut on top */}
      <circle cx="50" cy="30" r="16" fill="#8d5b2d" stroke="#5d3916" strokeWidth="1.5" />
      <path d="M50 14 L50 24" stroke="#5d3916" strokeWidth="2" strokeLinecap="round" />
      <path d="M44 17 L50 24 L56 17" stroke="#5d3916" strokeWidth="1.5" />

      {/* Tilak / Kumkum on coconut */}
      <circle cx="50" cy="30" r="3.5" fill="#c62828" />

      {/* Mango Leaves fanning out */}
      <path d="M30 42 C24 30, 26 20, 36 24 C40 28, 44 38, 44 42 Z" fill="url(#leafGrad)" />
      <path d="M70 42 C76 30, 74 20, 64 24 C60 28, 56 38, 56 42 Z" fill="url(#leafGrad)" />
      <path d="M22 46 C16 38, 20 28, 30 35 Z" fill="url(#leafGrad)" />
      <path d="M78 46 C84 38, 80 28, 70 35 Z" fill="url(#leafGrad)" />

      {/* Brass Pot Neck & Rim */}
      <ellipse cx="50" cy="46" rx="22" ry="5" fill="url(#kalasamBody)" stroke="#6a4409" strokeWidth="1" />
      <path d="M34 46 L38 54 L62 54 L66 46 Z" fill="url(#kalasamBody)" />
      <ellipse cx="50" cy="54" rx="16" ry="3.5" fill="url(#kalasamBody)" />

      {/* Pot Rounded Belly */}
      <path
        d="M26 62 C22 80, 78 80, 74 62 C74 54, 26 54, 26 62 Z"
        fill="url(#kalasamBody)"
        stroke="#6a4409"
        strokeWidth="1"
      />

      {/* Decorative Swastik / Kolam on Pot belly */}
      <circle cx="50" cy="67" r="7" stroke="#872323" strokeWidth="1.2" fill="#faf2dc" />
      <circle cx="50" cy="67" r="2.5" fill="#872323" />

      {/* Base Ring */}
      <ellipse cx="50" cy="80" rx="18" ry="4" fill="url(#kalasamBody)" stroke="#6a4409" strokeWidth="0.8" />
    </svg>
  );
};

/**
 * Auspicious Banana Leaves (Vazhai Ilai) Side Accent
 * Traditional sign of prosperity and celebration flanking South Indian doorways.
 */
export const BananaLeavesDecor: React.FC<{ side?: 'left' | 'right'; className?: string }> = ({
  side = 'left',
  className = "",
}) => {
  const isLeft = side === 'left';
  return (
    <svg
      viewBox="0 0 100 240"
      className={`w-16 md:w-24 h-auto pointer-events-none select-none opacity-85 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: isLeft ? 'none' : 'scaleX(-1)' }}
    >
      <defs>
        <linearGradient id="bananaLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e6b2f" />
          <stop offset="50%" stopColor="#2e8c3e" />
          <stop offset="100%" stopColor="#124a1f" />
        </linearGradient>
      </defs>

      {/* Main arching trunk / stem */}
      <path
        d="M10 240 C12 180, 20 120, 48 30"
        stroke="#4a7c2b"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Top large arching banana leaf */}
      <path
        d="M48 30 C58 10, 85 8, 95 24 C85 45, 60 55, 48 30 Z"
        fill="url(#bananaLeafGrad)"
        stroke="#1a4d22"
        strokeWidth="0.8"
      />
      {/* Mid leaf */}
      <path
        d="M36 80 C60 62, 92 68, 98 88 C82 104, 52 108, 36 80 Z"
        fill="url(#bananaLeafGrad)"
        stroke="#1a4d22"
        strokeWidth="0.8"
      />
      {/* Lower leaf */}
      <path
        d="M26 140 C52 125, 88 132, 92 152 C76 166, 44 168, 26 140 Z"
        fill="url(#bananaLeafGrad)"
        stroke="#1a4d22"
        strokeWidth="0.8"
      />

      {/* Gold ribbon tied around trunk (Kalyana Vazhai) */}
      <path d="M6 190 Q 15 186, 24 190" stroke="#d4a343" strokeWidth="4" />
      <path d="M7 195 Q 16 191, 25 195" stroke="#ffeaa7" strokeWidth="2" />
    </svg>
  );
};

/**
 * Luxury Filigree Gold Divider with center lotus and flourish
 */
export const GoldFiligreeDivider: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center my-6 select-none ${className}`}>
      <svg
        viewBox="0 0 400 36"
        className="w-full max-w-sm md:max-w-md h-7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="divGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c5942f" stopOpacity="0" />
            <stop offset="20%" stopColor="#cf9e38" />
            <stop offset="50%" stopColor="#fff1b8" />
            <stop offset="80%" stopColor="#cf9e38" />
            <stop offset="100%" stopColor="#c5942f" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Horizontal Tapered Lines */}
        <line x1="20" y1="18" x2="170" y2="18" stroke="url(#divGold)" strokeWidth="1.5" />
        <line x1="230" y1="18" x2="380" y2="18" stroke="url(#divGold)" strokeWidth="1.5" />

        {/* Left Scroll Ornament */}
        <path
          d="M 130 18 Q 150 10, 160 18 Q 170 24, 180 18"
          stroke="url(#divGold)"
          strokeWidth="1.2"
          fill="none"
        />

        {/* Right Scroll Ornament */}
        <path
          d="M 270 18 Q 250 10, 240 18 Q 230 24, 220 18"
          stroke="url(#divGold)"
          strokeWidth="1.2"
          fill="none"
        />

        {/* Center Auspicious Diamond and Star Symbol ✦ */}
        <polygon points="200,8 206,18 200,28 194,18" fill="url(#divGold)" />
        <circle cx="200" cy="18" r="2.5" fill="#ffffff" />
        <circle cx="188" cy="18" r="1.8" fill="#ffd875" />
        <circle cx="212" cy="18" r="1.8" fill="#ffd875" />
      </svg>
    </div>
  );
};

/**
 * Traditional South Indian Temple Corner Motif
 */
export const TraditionalCorner: React.FC<{ position: 'tl' | 'tr' | 'bl' | 'br'; className?: string }> = ({
  position,
  className = "",
}) => {
  let transform = "";
  if (position === 'tr') transform = "scaleX(-1)";
  if (position === 'bl') transform = "scaleY(-1)";
  if (position === 'br') transform = "scale(-1, -1)";

  return (
    <svg
      viewBox="0 0 60 60"
      className={`w-10 h-10 md:w-14 md:h-14 pointer-events-none select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform }}
    >
      <defs>
        <linearGradient id="cornerGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff0b3" />
          <stop offset="50%" stopColor="#cf9e38" />
          <stop offset="100%" stopColor="#7a4f0f" />
        </linearGradient>
      </defs>
      <path d="M4 56 L4 12 C4 7.5, 7.5 4, 12 4 L56 4" stroke="url(#cornerGold)" strokeWidth="2.5" />
      <path d="M10 50 L10 16 C10 12.5, 12.5 10, 16 10 L50 10" stroke="url(#cornerGold)" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M4 4 Q 18 18, 24 24" stroke="url(#cornerGold)" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="3" fill="url(#cornerGold)" />
      <circle cx="28" cy="10" r="1.8" fill="#ffeaa7" />
      <circle cx="10" cy="28" r="1.8" fill="#ffeaa7" />
    </svg>
  );
};
