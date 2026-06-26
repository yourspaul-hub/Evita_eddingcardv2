"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { CornerFlourish } from "@/components/lace-border";
import { weddingConfig } from "@/lib/wedding-config";

const LEAF_GREEN = "#2D5A1B";
const SAGE_GREEN = "#4A7A35";

function LeafSprig({ style }: { style?: React.CSSProperties }) {
  return (
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" style={style}>
      <path d="M10 80 Q30 40 60 20 Q70 14 80 10" stroke={LEAF_GREEN} strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.8"/>
      <ellipse cx="40" cy="44" rx="9" ry="5" fill={LEAF_GREEN} opacity="0.6" transform="rotate(-40 40 44)"/>
      <ellipse cx="56" cy="30" rx="8" ry="4.5" fill={LEAF_GREEN} opacity="0.55" transform="rotate(-55 56 30)"/>
      <ellipse cx="24" cy="60" rx="7" ry="4" fill={LEAF_GREEN} opacity="0.5" transform="rotate(-25 24 60)"/>
      <ellipse cx="68" cy="20" rx="7" ry="4" fill={LEAF_GREEN} opacity="0.5" transform="rotate(-65 68 20)"/>
    </svg>
  );
}

function BotanicalVine() {
  return (
    <svg width="260" height="28" viewBox="0 0 260 28" fill="none" style={{ opacity: 0.65 }}>
      <path d="M0 14 Q65 4 130 14 Q195 24 260 14" stroke={LEAF_GREEN} strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <ellipse cx="50" cy="9" rx="7" ry="3.5" fill={LEAF_GREEN} opacity="0.7" transform="rotate(-20 50 9)"/>
      <ellipse cx="100" cy="18" rx="6" ry="3" fill={LEAF_GREEN} opacity="0.6" transform="rotate(15 100 18)"/>
      <ellipse cx="160" cy="10" rx="7" ry="3" fill={LEAF_GREEN} opacity="0.65" transform="rotate(-25 160 10)"/>
      <ellipse cx="210" cy="18" rx="6" ry="3" fill={SAGE_GREEN} opacity="0.6" transform="rotate(10 210 18)"/>
      <path d="M120 14 Q128 5 136 14" stroke={LEAF_GREEN} strokeWidth="1" fill="none"/>
      <ellipse cx="128" cy="8" rx="5" ry="2.5" fill={LEAF_GREEN} opacity="0.7" transform="rotate(-5 128 8)"/>
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg,#4A1E2B 0%,#6B2D3E 60%,#2E1019 100%)",
        minHeight: "100svh",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${weddingConfig.images.couple}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(46,16,25,0.7) 100%)",
        }}
      />

      {/* Dark green botanical corner accents */}
      <LeafSprig style={{ position: "absolute", top: 16, left: 16, opacity: 0.55, transform: "rotate(0deg)" }} />
      <LeafSprig style={{ position: "absolute", top: 16, right: 16, opacity: 0.55, transform: "rotate(90deg) scaleY(-1)" }} />
      <LeafSprig style={{ position: "absolute", bottom: 80, left: 16, opacity: 0.45, transform: "rotate(-40deg) scaleX(-1)" }} />
      <LeafSprig style={{ position: "absolute", bottom: 80, right: 16, opacity: 0.45, transform: "rotate(130deg)" }} />

      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: "3px",
          background: `linear-gradient(90deg, transparent, ${LEAF_GREEN}, ${SAGE_GREEN}, ${LEAF_GREEN}, transparent)`,
          opacity: 0.6,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 md:py-24 min-h-screen justify-center">
        <CornerFlourish className="absolute top-6 left-6 opacity-30" />
        <CornerFlourish className="absolute top-6 right-6 opacity-30" style={{ transform: "scaleX(-1)" } as React.CSSProperties} />
        <div className="absolute inset-6 pointer-events-none" style={{ border: "1px solid rgba(200,169,81,0.15)", borderRadius: 2 }} />

        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-4 mb-6">
          <div className="h-px w-12" style={{ background: "linear-gradient(90deg,transparent,rgba(200,169,81,0.7))" }} />
          <p className="font-sans text-xs tracking-widest uppercase" style={{ color: "#C8A951", letterSpacing: "0.4em" }}>
            {weddingConfig.messages.saveTheDate}
          </p>
          <div className="h-px w-12" style={{ background: "linear-gradient(90deg,rgba(200,169,81,0.7),transparent)" }} />
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.9 }} className="relative mb-2" style={{ width: "clamp(160px,40vw,260px)", height: "clamp(160px,40vw,260px)" }}>
          <Image src="/monogram-light.png" alt="R & E Monogram" fill style={{ objectFit: "contain", filter: "invert(1) brightness(2.8) sepia(0.4)", mixBlendMode: "screen", opacity: 0.88 }} priority />
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="font-cormorant italic text-sm md:text-base mb-5" style={{ color: "rgba(250,247,242,0.6)", letterSpacing: "0.06em" }}>
          {weddingConfig.messages.togetherWith}
        </motion.p>

        {/* Names in CAC Champagne font */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="w-full max-w-md mb-6 px-2">
          <div className="mb-4">
            <h2
              className="mb-1"
              style={{
                fontFamily: "'CAC Champagne', 'Great Vibes', cursive",
                fontSize: "clamp(2.6rem, 9vw, 4.2rem)",
                color: "rgba(250,247,242,0.96)",
                lineHeight: 1.1,
                letterSpacing: "0.03em",
              }}
            >
              {weddingConfig.family.bride.fullName}
            </h2>
            <p className="font-cormorant italic text-xs md:text-sm leading-relaxed" style={{ color: "rgba(250,247,242,0.5)" }}>
              ({weddingConfig.family.bride.detail})
            </p>
          </div>

          <p className="font-cormorant italic text-xl mb-4" style={{ color: "rgba(200,169,81,0.8)" }}>and</p>

          <div>
            <h2
              className="mb-1"
              style={{
                fontFamily: "'CAC Champagne', 'Great Vibes', cursive",
                fontSize: "clamp(2.6rem, 9vw, 4.2rem)",
                color: "rgba(250,247,242,0.96)",
                lineHeight: 1.1,
                letterSpacing: "0.03em",
              }}
            >
              {weddingConfig.family.groom.fullName}
            </h2>
            <p className="font-cormorant italic text-xs md:text-sm leading-relaxed" style={{ color: "rgba(250,247,242,0.5)" }}>
              ({weddingConfig.family.groom.detail})
            </p>
          </div>
        </motion.div>

        {/* Botanical vine divider */}
        <motion.div initial={{ opacity: 0, scaleX: 0.5 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
          <BotanicalVine />
        </motion.div>

        {/* Caricature illustration */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.9, duration: 1.0, ease: "easeOut" }}
          className="relative my-4"
          style={{ width: "clamp(220px, 58vw, 380px)" }}
        >
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at center, rgba(45,90,27,0.18) 0%, transparent 70%)`,
              transform: "scale(1.15)",
              filter: "blur(18px)",
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              inset: "-4px",
              borderRadius: "50% / 48%",
              border: "1px solid rgba(200,169,81,0.22)",
            }}
          />
          <Image
            src={weddingConfig.images.caricature}
            alt="Evita & Roshan"
            width={380}
            height={475}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 8px 32px rgba(45,90,27,0.3)) drop-shadow(0 0 18px rgba(200,169,81,0.15))",
            }}
          />
          <svg width="40" height="60" viewBox="0 0 40 60" fill="none" style={{ position: "absolute", left: "-28px", bottom: "20%", opacity: 0.6 }}>
            <path d="M30 55 Q10 30 20 5" stroke={LEAF_GREEN} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <ellipse cx="13" cy="20" rx="7" ry="3.5" fill={LEAF_GREEN} opacity="0.7" transform="rotate(30 13 20)"/>
            <ellipse cx="18" cy="38" rx="6" ry="3" fill={LEAF_GREEN} opacity="0.6" transform="rotate(15 18 38)"/>
          </svg>
          <svg width="40" height="60" viewBox="0 0 40 60" fill="none" style={{ position: "absolute", right: "-28px", bottom: "20%", opacity: 0.6, transform: "scaleX(-1)" }}>
            <path d="M30 55 Q10 30 20 5" stroke={LEAF_GREEN} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <ellipse cx="13" cy="20" rx="7" ry="3.5" fill={LEAF_GREEN} opacity="0.7" transform="rotate(30 13 20)"/>
            <ellipse cx="18" cy="38" rx="6" ry="3" fill={LEAF_GREEN} opacity="0.6" transform="rotate(15 18 38)"/>
          </svg>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="font-playfair mt-2 tracking-widest" style={{ fontSize: "clamp(1.2rem,4vw,1.8rem)", color: "#C8A951", letterSpacing: "0.25em" }}>
          {weddingConfig.wedding.dotDate}
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(0.85rem, 3vw, 1rem)", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(200,169,81,0.85)", marginTop: "0.35rem" }}>
          {weddingConfig.wedding.dayOfWeek} &nbsp;·&nbsp; {weddingConfig.wedding.time}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} className="mt-5 flex flex-col items-center gap-1">
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(0.8rem, 2.8vw, 0.9rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(200,169,81,0.75)" }}>
            Celebrate with us at
          </p>
          <a href={weddingConfig.wedding.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-1 group">
            <MapPin size={12} style={{ color: "#C8A951" }} />
            <span className="font-playfair text-base md:text-lg group-hover:underline" style={{ color: "rgba(250,247,242,0.9)", textDecorationColor: "#C8A951" }}>
              {weddingConfig.wedding.venueFullName}
            </span>
          </a>
          <p className="font-sans text-xs mt-1" style={{ color: "rgba(250,247,242,0.4)" }}>
            {weddingConfig.wedding.venueMapCode}
          </p>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="font-cormorant italic mt-6 text-sm md:text-base" style={{ color: "rgba(200,169,81,0.55)", letterSpacing: "0.05em" }}>
          {weddingConfig.messages.formalFollow}
        </motion.p>

        <motion.div animate={{ y: [0, 8, 0], opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 2.2, repeat: Infinity }} className="mt-10" style={{ color: "rgba(200,169,81,0.5)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
