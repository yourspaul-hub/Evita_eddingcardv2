import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Evita & Roshan Wedding — evitawedsroshan.com";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const monogramBuf = readFileSync(join(process.cwd(), "public/monogram-light.png"));
  const monogramSrc = `data:image/png;base64,${monogramBuf.toString("base64")}`;
  const fontData   = readFileSync(join(process.cwd(), "public/GreatVibes.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg,#3D1520 0%,#6B2D3E 45%,#2E1019 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Gold border frame */}
        <div style={{ position: "absolute", inset: "24px", border: "1px solid rgba(200,169,81,0.35)", display: "flex" }} />
        <div style={{ position: "absolute", inset: "30px", border: "0.5px solid rgba(200,169,81,0.18)", display: "flex" }} />

        {/* Website URL */}
        <p style={{ color: "rgba(200,169,81,0.72)", fontSize: 24, letterSpacing: "0.3em", textTransform: "uppercase", margin: "0 0 28px", display: "flex" }}>
          evitawedsroshan.com
        </p>

        {/* Monogram */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={monogramSrc} width={150} height={150} alt="R & E" style={{ objectFit: "contain", marginBottom: 20, opacity: 0.88 }} />

        {/* Names in cursive gold — Evita first */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 style={{ color: "#C8A951", fontSize: 108, margin: 0, lineHeight: 1.05, display: "flex", fontFamily: "Great Vibes" }}>
            Evita
          </h1>
          <p style={{ color: "rgba(200,169,81,0.6)", fontSize: 38, margin: "2px 0 6px", fontStyle: "italic", display: "flex" }}>
            &amp;
          </p>
          <h1 style={{ color: "#C8A951", fontSize: 108, margin: 0, lineHeight: 1.05, display: "flex", fontFamily: "Great Vibes" }}>
            Roshan
          </h1>
        </div>

        {/* Gold divider */}
        <div style={{ width: 220, height: 1, background: "rgba(200,169,81,0.45)", margin: "22px 0 18px", display: "flex" }} />

        {/* Date */}
        <p style={{ color: "#C8A951", fontSize: 26, letterSpacing: "0.3em", margin: 0, display: "flex" }}>
          29 · 08 · 2026
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [{ name: "Great Vibes", data: fontData.buffer, style: "normal" }],
    }
  );
}
