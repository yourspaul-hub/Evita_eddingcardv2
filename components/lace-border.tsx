"use client";

import React from "react";

// ─── Seamless gradient dividers (no dots) ────────────────────────────────────

/** Fades from `fromColor` at top into `toColor` at bottom */
export function GradientDivider({
  fromColor,
  toColor,
  height = 60,
}: {
  fromColor: string;
  toColor: string;
  height?: number;
}) {
  return (
    <div
      style={{
        width: "100%",
        height,
        background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
        display: "block",
        lineHeight: 0,
      }}
    />
  );
}

/** Smooth wave from dark→light (place at bottom of a dark section) */
export function LaceBorderBottom({
  fromColor = "#2E1019",
  toColor = "#FAF7F2",
  height = 64,
}: {
  fromColor?: string;
  toColor?: string;
  height?: number;
}) {
  return (
    <div style={{ lineHeight: 0, display: "block", background: fromColor }}>
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", height }}
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}

/** Smooth wave from light→dark (place at top of a dark section) */
export function LaceBorderTop({
  fromColor = "#FAF7F2",
  toColor = "#2E1019",
  height = 64,
}: {
  fromColor?: string;
  toColor?: string;
  height?: number;
}) {
  return (
    <div style={{ lineHeight: 0, display: "block", background: fromColor }}>
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", height }}
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}

/** Thin decorative gold rule — use as a section separator inside a section */
export function GoldRule({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.5rem 0",
        ...style,
      }}
    >
      <div
        style={{
          height: "1px",
          width: "min(320px,60%)",
          background:
            "linear-gradient(to right, transparent, rgba(200,169,81,0.5), transparent)",
        }}
      />
    </div>
  );
}

/** No-op kept for backward compatibility so components that imported CornerFlourish don't break */
export function CornerFlourish({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return null;
}
