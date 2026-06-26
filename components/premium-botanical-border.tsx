import React from "react";

const GOLD    = "#C8A951";
const GOLD_LT = "#E2C97A";
const LEAF    = "#2D5A1B";
const SAGE    = "#4A7A35";

interface Props {
  variant?: "light" | "dark";
  style?: React.CSSProperties;
  className?: string;
}

/**
 * Premium horizontal botanical border with double gold rules and green-gold floral motifs.
 * Use variant="dark" on burgundy/dark sections, variant="light" on cream sections.
 */
export function PremiumBotanicalBorder({ variant = "light", style, className }: Props) {
  const isDark = variant === "dark";
  const gA = isDark ? "rgba(200,169,81,1)"    : "rgba(200,169,81,0.88)";
  const gB = isDark ? "rgba(200,169,81,0.55)" : "rgba(200,169,81,0.4)";
  const L  = isDark ? "#4A7A35" : LEAF;
  const S  = isDark ? "#5B8C42" : SAGE;

  return (
    <div style={{ width: "100%", ...style }} className={className}>
      {/* Top double gold rule */}
      <div style={{ borderTop: `1.5px solid ${gA}` }} />
      <div style={{ borderTop: `0.5px solid ${gB}`, marginTop: 3 }} />

      {/* Botanical band */}
      <div style={{ display: "flex", alignItems: "center", padding: "10px 24px" }}>
        {/* Left vine arm */}
        <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,transparent,rgba(45,90,27,0.55))` }} />

        {/* Center botanical motif */}
        <svg width="320" height="40" viewBox="0 0 320 40" fill="none" style={{ flexShrink: 0 }}>
          {/* Flowing vine */}
          <path d="M0 20 Q40 8 80 20 Q120 32 160 20 Q200 8 240 20 Q280 32 320 20"
            stroke={L} strokeWidth="1.7" fill="none" />

          {/* Center medallion */}
          <circle cx="160" cy="20" r="9"   stroke={GOLD} strokeWidth="1.3" fill="rgba(200,169,81,0.1)" />
          <circle cx="160" cy="20" r="5"   fill={GOLD} />
          <circle cx="160" cy="20" r="2.5" fill={GOLD_LT} />
          <circle cx="160" cy="20" r="1"   fill="#FFF8E0" />

          {/* Inner flanking leaves */}
          <ellipse cx="136" cy="15" rx="11" ry="4.5" fill={L} transform="rotate(-22 136 15)" />
          <ellipse cx="184" cy="25" rx="11" ry="4.5" fill={L} transform="rotate( 22 184 25)" />
          <ellipse cx="142" cy="27" rx="9"  ry="3.8" fill={S} transform="rotate( 18 142 27)" opacity="0.9"/>
          <ellipse cx="178" cy="13" rx="9"  ry="3.8" fill={S} transform="rotate(-18 178 13)" opacity="0.9"/>

          {/* Quarter-point gold diamonds */}
          <path d="M 80 15 L 85 20 L 80 25 L 75 20 Z" fill={GOLD} opacity="0.88"/>
          <path d="M240 15 L245 20 L240 25 L235 20 Z" fill={GOLD} opacity="0.88"/>

          {/* Quarter-point leaf clusters */}
          <ellipse cx="54"  cy="15" rx="9" ry="3.5" fill={L} transform="rotate(-24  54 15)" />
          <ellipse cx="58"  cy="25" rx="8" ry="3"   fill={S} transform="rotate( 24  58 25)" opacity="0.88"/>
          <ellipse cx="262" cy="15" rx="9" ry="3.5" fill={L} transform="rotate(-24 262 15)" />
          <ellipse cx="266" cy="25" rx="8" ry="3"   fill={S} transform="rotate( 24 266 25)" opacity="0.88"/>

          {/* Edge diamonds */}
          <path d="M 16 17 L 20 20 L 16 23 L 12 20 Z" fill={GOLD} opacity="0.72"/>
          <path d="M304 17 L308 20 L304 23 L300 20 Z" fill={GOLD} opacity="0.72"/>
        </svg>

        {/* Right vine arm */}
        <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,rgba(45,90,27,0.55),transparent)` }} />
      </div>

      {/* Bottom double gold rule */}
      <div style={{ borderBottom: `0.5px solid ${gB}` }} />
      <div style={{ borderBottom: `1.5px solid ${gA}`, marginTop: 3 }} />
    </div>
  );
}
