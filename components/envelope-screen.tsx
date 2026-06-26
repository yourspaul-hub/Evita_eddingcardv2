"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { weddingConfig } from "@/lib/wedding-config";

const LEAF = "#2D5A1B";
const SAGE  = "#4A7A35";

export function EnvelopeScreen({ onOpen }: { onOpen: () => void }) {
  const [clicked, setClicked] = useState(false);
  const [petals, setPetals] = useState<{ id: number; left: string; delay: string; dur: string }[]>([]);

  useEffect(() => {
    setPetals(Array.from({ length: 14 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      dur: `${7 + Math.random() * 6}s`,
    })));
  }, []);

  const handleClick = () => { setClicked(true); setTimeout(onOpen, 900); };

  return (
    <AnimatePresence>
      {!clicked && (
        <motion.div
          key="envelope"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer select-none"
          style={{ background: "linear-gradient(160deg, #2E1019 0%, #4A1E2B 50%, #2E1019 100%)" }}
          onClick={handleClick}
        >
          {/* Petals */}
          {petals.map(p => (
            <span key={p.id} className="petal" style={{ left: p.left, animationDelay: p.delay, animationDuration: p.dur, fontSize: "0.9rem" }}>🌸</span>
          ))}

          {/* Radial glow */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(200,169,81,0.15) 0%, transparent 65%)" }} />

          {/* Dark green botanical corner sprigs */}
          {/* Top-left */}
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" style={{ position: "absolute", top: 12, left: 12, opacity: 0.5 }}>
            <path d="M8 90 Q30 50 70 20 Q82 12 94 8" stroke={LEAF} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <ellipse cx="42" cy="50" rx="10" ry="5" fill={LEAF} opacity="0.65" transform="rotate(-45 42 50)"/>
            <ellipse cx="62" cy="34" rx="9" ry="4.5" fill={LEAF} opacity="0.6" transform="rotate(-60 62 34)"/>
            <ellipse cx="26" cy="68" rx="8" ry="4" fill={SAGE} opacity="0.5" transform="rotate(-30 26 68)"/>
            <ellipse cx="78" cy="22" rx="7" ry="3.5" fill={LEAF} opacity="0.55" transform="rotate(-70 78 22)"/>
          </svg>
          {/* Top-right */}
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" style={{ position: "absolute", top: 12, right: 12, opacity: 0.5, transform: "scaleX(-1)" }}>
            <path d="M8 90 Q30 50 70 20 Q82 12 94 8" stroke={LEAF} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <ellipse cx="42" cy="50" rx="10" ry="5" fill={LEAF} opacity="0.65" transform="rotate(-45 42 50)"/>
            <ellipse cx="62" cy="34" rx="9" ry="4.5" fill={LEAF} opacity="0.6" transform="rotate(-60 62 34)"/>
            <ellipse cx="26" cy="68" rx="8" ry="4" fill={SAGE} opacity="0.5" transform="rotate(-30 26 68)"/>
          </svg>
          {/* Bottom-left */}
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ position: "absolute", bottom: 12, left: 12, opacity: 0.4, transform: "scaleY(-1)" }}>
            <path d="M8 72 Q25 40 55 18 Q65 10 74 6" stroke={LEAF} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <ellipse cx="34" cy="40" rx="8" ry="4" fill={LEAF} opacity="0.6" transform="rotate(-42 34 40)"/>
            <ellipse cx="50" cy="26" rx="7" ry="3.5" fill={SAGE} opacity="0.55" transform="rotate(-58 50 26)"/>
          </svg>
          {/* Bottom-right */}
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ position: "absolute", bottom: 12, right: 12, opacity: 0.4, transform: "scale(-1,-1)" }}>
            <path d="M8 72 Q25 40 55 18 Q65 10 74 6" stroke={LEAF} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <ellipse cx="34" cy="40" rx="8" ry="4" fill={LEAF} opacity="0.6" transform="rotate(-42 34 40)"/>
            <ellipse cx="50" cy="26" rx="7" ry="3.5" fill={SAGE} opacity="0.55" transform="rotate(-58 50 26)"/>
          </svg>

          {/* Outer gold border frames */}
          <div className="absolute inset-8 pointer-events-none rounded-sm" style={{ border: "1px solid rgba(200,169,81,0.2)" }} />
          <div className="absolute inset-10 pointer-events-none rounded-sm" style={{ border: "1px solid rgba(200,169,81,0.1)" }} />

          {/* Card */}
          <motion.div
            animate={clicked ? { scaleY: 0.02, opacity: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center text-center px-10 py-14"
            style={{ maxWidth: 380, width: "90%" }}
          >
            {/* Top ornament with tiny leaves */}
            <div className="flex items-center gap-3 mb-8 w-full">
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(200,169,81,0.6))" }} />
              <span style={{ color: "#C8A951", fontSize: 18 }}>✦</span>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(200,169,81,0.6), transparent)" }} />
            </div>

            {/* Monogram */}
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative mb-6 flex items-center justify-center"
              style={{ width: 140, height: 140 }}
            >
              <Image
                src="/monogram-light.png"
                alt="R & E Monogram"
                width={140}
                height={140}
                style={{
                  filter: "invert(1) brightness(2.5) sepia(0.35)",
                  mixBlendMode: "screen",
                  opacity: 0.95,
                  objectFit: "contain",
                }}
                priority
              />
            </motion.div>

            {/* Save The Date label */}
            <p className="font-sans text-xs tracking-widest uppercase mb-5" style={{ color: "rgba(200,169,81,0.7)", letterSpacing: "0.35em" }}>
              {weddingConfig.messages.saveTheDate}
            </p>

            {/* Names in CAC Champagne font */}
            <h1
              className="mb-2"
              style={{
                fontFamily: "'CAC Champagne', 'Great Vibes', cursive",
                fontSize: "clamp(2.4rem, 9vw, 3.2rem)",
                color: "rgba(250,247,242,0.95)",
                lineHeight: 1.1,
                letterSpacing: "0.03em",
              }}
            >
              {weddingConfig.couple.groomName}
            </h1>
            <p className="font-cormorant italic text-xl mb-2" style={{ color: "rgba(200,169,81,0.8)" }}>&amp;</p>
            <h1
              className="mb-6"
              style={{
                fontFamily: "'CAC Champagne', 'Great Vibes', cursive",
                fontSize: "clamp(2.4rem, 9vw, 3.2rem)",
                color: "rgba(250,247,242,0.95)",
                lineHeight: 1.1,
                letterSpacing: "0.03em",
              }}
            >
              {weddingConfig.couple.brideName}
            </h1>

            {/* Date */}
            <p className="font-playfair tracking-widest mb-2" style={{ color: "#C8A951", letterSpacing: "0.2em", fontSize: "1.1rem" }}>
              {weddingConfig.wedding.dotDate}
            </p>

            {/* Bottom ornament */}
            <div className="flex items-center gap-3 mt-6 mb-8 w-full">
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(200,169,81,0.6))" }} />
              <span style={{ color: "#C8A951", fontSize: 18 }}>✦</span>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(200,169,81,0.6), transparent)" }} />
            </div>

            {/* Tap cue */}
            <motion.div animate={{ opacity: [0.5, 1, 0.5], y: [0, -4, 0] }} transition={{ duration: 2.2, repeat: Infinity }}
              className="flex flex-col items-center gap-2">
              <div className="px-7 py-2.5 rounded-full font-sans text-xs tracking-widest uppercase"
                style={{ border: "1px solid rgba(200,169,81,0.5)", color: "#C8A951", letterSpacing: "0.25em" }}>
                Open Invitation
              </div>
              <span style={{ color: "rgba(200,169,81,0.4)", fontSize: 10, letterSpacing: "0.15em" }}>tap anywhere to continue</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
