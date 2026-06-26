"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { weddingConfig } from "@/lib/wedding-config";

const GOLD    = "#C8A951";
const GOLD_LT = "#E2C97A";
const LEAF    = "#2D5A1B";
const SAGE    = "#4A7A35";

/* ── Scallop lace edge — horizontal, scales via preserveAspectRatio="none" ── */
function ScallopEdgeH({ reverse = false }: { reverse?: boolean }) {
  return (
    <svg width="100%" height="16" viewBox="0 0 280 16" preserveAspectRatio="none" fill="none" style={{ display: "block" }}>
      {Array.from({ length: 20 }, (_, i) => (
        <path key={i}
          d={reverse
            ? `M ${i * 14} 16 Q ${i * 14 + 7} 2 ${(i + 1) * 14} 16`
            : `M ${i * 14} 0  Q ${i * 14 + 7} 14 ${(i + 1) * 14} 0`}
          stroke={GOLD} strokeWidth="0.9" fill="rgba(200,169,81,0.07)"
        />
      ))}
      <line x1="0" y1={reverse ? "16" : "0"} x2="280" y2={reverse ? "16" : "0"}
        stroke={GOLD} strokeWidth="0.5" opacity="0.6"/>
    </svg>
  );
}

/* ── Botanical corner piece (rotated/mirrored for each corner) ── */
function BotCorner({ style }: { style?: React.CSSProperties }) {
  return (
    <svg width="82" height="82" viewBox="0 0 82 82" fill="none"
      style={{ position: "absolute", pointerEvents: "none", zIndex: 6, ...style }}>
      <path d="M4 78 Q28 50 54 24 Q64 14 78 4" stroke={LEAF} strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      <path d="M28 54 Q20 38 26 28" stroke={LEAF} strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <path d="M50 28 Q56 16 50 10" stroke={LEAF} strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <ellipse cx="40" cy="44" rx="12" ry="5"   fill={LEAF} transform="rotate(-45 40 44)"/>
      <ellipse cx="54" cy="28" rx="11" ry="4.5" fill={LEAF} transform="rotate(-55 54 28)"/>
      <ellipse cx="22" cy="62" rx="9"  ry="3.8" fill={LEAF} transform="rotate(-30 22 62)"/>
      <ellipse cx="66" cy="16" rx="9"  ry="3.8" fill={LEAF} transform="rotate(-65 66 16)"/>
      <ellipse cx="32" cy="36" rx="8"  ry="3.2" fill={SAGE} transform="rotate(-48 32 36)"/>
      <ellipse cx="50" cy="20" rx="7"  ry="3"   fill={SAGE} transform="rotate(-60 50 20)"/>
      <circle cx="7"  cy="75" r="5"   fill={GOLD}/>
      <circle cx="7"  cy="75" r="2.8" fill={GOLD_LT}/>
      <circle cx="7"  cy="75" r="1.2" fill="#FFF8E0"/>
      <circle cx="26" cy="28" r="2.5" fill={GOLD} opacity="0.9"/>
      <circle cx="50" cy="10" r="2.5" fill={GOLD} opacity="0.9"/>
      <circle cx="16" cy="66" r="2"   fill={GOLD} opacity="0.75"/>
      <circle cx="62" cy="24" r="2"   fill={GOLD} opacity="0.7"/>
    </svg>
  );
}

/* ── The physical wedding card ── */
function WeddingCard({ onCardClick }: { onCardClick: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 56px 110px rgba(0,0,0,0.72), 0 0 60px rgba(200,169,81,0.22)" }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      onClick={onCardClick}
      style={{
        width: "clamp(300px, 82vw, 390px)",
        background: "linear-gradient(165deg,#FDFAF2 0%,#F8F0DE 45%,#FDF6EB 80%,#FDFAF2 100%)",
        borderRadius: "4px",
        boxShadow: "0 36px 90px rgba(0,0,0,0.65), 0 0 40px rgba(200,169,81,0.1), inset 0 1px 0 rgba(255,255,255,0.9)",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* Outer gold border */}
      <div style={{ position:"absolute", inset:"12px", border:"1.8px solid rgba(200,169,81,0.88)", borderRadius:"3px", pointerEvents:"none", zIndex:5 }}/>
      {/* Inner gold border */}
      <div style={{ position:"absolute", inset:"17px", border:"0.6px solid rgba(200,169,81,0.45)", borderRadius:"2px", pointerEvents:"none", zIndex:5 }}/>

      {/* Botanical corner ornaments */}
      <BotCorner style={{ top:13, left:13 }}/>
      <BotCorner style={{ top:13, right:13, transform:"scaleX(-1)" }}/>
      <BotCorner style={{ bottom:13, left:13, transform:"scaleY(-1)" }}/>
      <BotCorner style={{ bottom:13, right:13, transform:"scale(-1,-1)" }}/>

      {/* Scallop lace edges (between corners) */}
      <div style={{ position:"absolute", top:"16px", left:"90px", right:"90px", height:"16px", zIndex:4 }}>
        <ScallopEdgeH />
      </div>
      <div style={{ position:"absolute", bottom:"16px", left:"90px", right:"90px", height:"16px", zIndex:4 }}>
        <ScallopEdgeH reverse />
      </div>

      {/* Card content */}
      <div style={{ padding:"86px 52px 70px", textAlign:"center", position:"relative", zIndex:6 }}>
        {/* Monogram */}
        <div style={{ width:88, height:88, margin:"0 auto 12px", position:"relative" }}>
          <Image src="/monogram-light.png" alt="R & E" fill priority
            style={{ objectFit:"contain", filter:"brightness(0.8) sepia(0.25) saturate(0.75)" }}/>
        </div>

        {/* Gold divider */}
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14, justifyContent:"center" }}>
          <div style={{ height:"1px", width:42, background:`linear-gradient(90deg,transparent,${GOLD})` }}/>
          <span style={{ color:GOLD, fontSize:"0.7rem" }}>✦</span>
          <div style={{ height:"1px", width:42, background:`linear-gradient(90deg,${GOLD},transparent)` }}/>
        </div>

        <p style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:"0.67rem", letterSpacing:"0.36em", textTransform:"uppercase", color:"rgba(107,45,62,0.55)", marginBottom:14 }}>
          Save the Date
        </p>

        {/* Names in CAC Champagne */}
        <h1 style={{ fontFamily:"'CAC Champagne','Great Vibes',cursive", fontSize:"clamp(2.5rem,10vw,3.8rem)", color:"#3D1520", lineHeight:1.05, letterSpacing:"0.02em", marginBottom:2 }}>
          {weddingConfig.couple.groomName}
        </h1>
        <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:"1.35rem", color:"rgba(200,169,81,0.85)", marginBottom:2 }}>&amp;</p>
        <h1 style={{ fontFamily:"'CAC Champagne','Great Vibes',cursive", fontSize:"clamp(2.5rem,10vw,3.8rem)", color:"#3D1520", lineHeight:1.05, letterSpacing:"0.02em", marginBottom:24 }}>
          {weddingConfig.couple.brideName}
        </h1>

        {/* Botanical mid-divider */}
        <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:18 }}>
          <div style={{ height:"1px", flex:1, background:`linear-gradient(90deg,transparent,rgba(45,90,27,0.5))` }}/>
          <svg width="36" height="22" viewBox="0 0 36 22" fill="none">
            <path d="M2 11 Q9 2 18 11 Q27 20 34 11" stroke={LEAF} strokeWidth="1.4" fill="none"/>
            <ellipse cx="10"  cy="6.5"  rx="6.5" ry="2.8" fill={LEAF} transform="rotate(-30 10 6.5)"  opacity="0.9"/>
            <ellipse cx="26"  cy="15.5" rx="6.5" ry="2.8" fill={LEAF} transform="rotate( 30 26 15.5)" opacity="0.9"/>
            <circle  cx="18"  cy="11"   r="2.8"  fill={GOLD}/>
            <circle  cx="18"  cy="11"   r="1.3"  fill={GOLD_LT}/>
          </svg>
          <div style={{ height:"1px", flex:1, background:`linear-gradient(90deg,rgba(45,90,27,0.5),transparent)` }}/>
        </div>

        {/* Date */}
        <p style={{ fontFamily:"'Playfair Display',serif", fontWeight:500, fontSize:"1.05rem", letterSpacing:"0.22em", color:"#3D1520", opacity:0.78, marginBottom:4 }}>
          {weddingConfig.wedding.dotDate}
        </p>
        <p style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:"0.82rem", letterSpacing:"0.1em", color:"rgba(107,45,62,0.55)", marginBottom:28 }}>
          {weddingConfig.wedding.dayOfWeek} · {weddingConfig.wedding.time}
        </p>

        {/* Pulsing open CTA */}
        <motion.div animate={{ opacity:[0.45,0.95,0.45] }} transition={{ duration:2.6, repeat:Infinity }}>
          <div style={{
            display:"inline-block", padding:"8px 24px", borderRadius:"20px",
            border:`1px solid rgba(200,169,81,0.65)`,
            fontFamily:"'Montserrat',sans-serif", fontSize:"0.6rem",
            letterSpacing:"0.28em", textTransform:"uppercase",
            color:"rgba(107,45,62,0.68)",
          }}>
            Open Invitation
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ── Main exported component ── */
export function EnvelopeScreen({ onOpen }: { onOpen: () => void }) {
  const [clicked, setClicked] = useState(false);
  const [petals, setPetals] = useState<{ id:number; left:string; delay:string; dur:string }[]>([]);

  useEffect(() => {
    setPetals(Array.from({ length:14 }, (_,i) => ({
      id: i,
      left:  `${Math.random() * 100}%`,
      delay: `${Math.random() * 12}s`,
      dur:   `${8 + Math.random() * 6}s`,
    })));
  }, []);

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);
    setTimeout(onOpen, 950);
  };

  return (
    <AnimatePresence>
      {!clicked && (
        <motion.div
          key="wedding-card-splash"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(7px)" }}
          transition={{ duration: 0.85 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer select-none"
          style={{ background: "linear-gradient(145deg,#160810 0%,#2E1019 45%,#1c0e14 100%)" }}
          onClick={handleClick}
        >
          {/* Falling petals */}
          {petals.map(p => (
            <span key={p.id} className="petal"
              style={{ left:p.left, animationDelay:p.delay, animationDuration:p.dur, fontSize:"0.95rem" }}>
              🌸
            </span>
          ))}

          {/* Warm ambient glow behind card */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background:"radial-gradient(ellipse 70% 55% at center,rgba(200,169,81,0.11) 0%,transparent 65%)" }}/>

          {/* The physical invitation card — lifts in on load, folds away on click */}
          <motion.div
            initial={{ opacity:0, y:28, scale:0.95 }}
            animate={{ opacity:1, y:0, scale:1 }}
            exit={{ opacity:0, y:-24, scale:1.04, rotateX:14 }}
            transition={{ delay:0.18, duration:0.9, ease:"easeOut" }}
            style={{ perspective:"1300px" }}
          >
            <WeddingCard onCardClick={handleClick} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
