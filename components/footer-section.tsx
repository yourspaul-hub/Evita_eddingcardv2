"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";
import { LaceBorderTop } from "@/components/lace-border";
import { weddingConfig } from "@/lib/wedding-config";

const LEAF = "#2D5A1B";
const SAGE = "#4A7A35";

function FooterVine() {
  return (
    <svg width="220" height="22" viewBox="0 0 220 22" fill="none" style={{ opacity: 0.55, margin: "0 auto" }}>
      <path d="M0 11 Q55 3 110 11 Q165 19 220 11" stroke={LEAF} strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <ellipse cx="45" cy="7" rx="7" ry="3" fill={LEAF} opacity="0.65" transform="rotate(-18 45 7)"/>
      <ellipse cx="110" cy="15" rx="6" ry="2.8" fill={SAGE} opacity="0.6" transform="rotate(12 110 15)"/>
      <ellipse cx="175" cy="7" rx="7" ry="3" fill={LEAF} opacity="0.65" transform="rotate(-22 175 7)"/>
    </svg>
  );
}

export function FooterSection() {
  return (
    <>
      <LaceBorderTop fromColor="#FAF7F2" toColor="#4A1E2B" height={64} />
      <section style={{ background: "linear-gradient(180deg,#4A1E2B,#2E1019)" }} className="py-20 px-6">
        <div className="max-w-lg mx-auto text-center">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-cormorant italic text-lg mb-4" style={{ color: "rgba(200,169,81,0.6)" }}>
            {weddingConfig.messages.closingLine}
          </motion.p>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative mx-auto mb-6" style={{ width: 160, height: 160 }}>
            <Image src="/monogram-light.png" alt="R & E" fill style={{ objectFit: "contain", filter: "invert(1) brightness(2.5) sepia(0.35)", mixBlendMode: "screen", opacity: 0.75 }} />
          </motion.div>

          {/* ── Names in CAC Champagne font ── */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-1"
            style={{
              fontFamily: "'CAC Champagne', 'Great Vibes', cursive",
              fontSize: "clamp(2.8rem, 10vw, 4.5rem)",
              color: "rgba(250,247,242,0.92)",
              lineHeight: 1.1,
              letterSpacing: "0.03em",
            }}
          >
            {weddingConfig.couple.groomName}
          </motion.h2>
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="font-cormorant italic text-2xl" style={{ color: "rgba(200,169,81,0.6)" }}>&amp;</motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mt-1 mb-6"
            style={{
              fontFamily: "'CAC Champagne', 'Great Vibes', cursive",
              fontSize: "clamp(2.8rem, 10vw, 4.5rem)",
              color: "rgba(250,247,242,0.92)",
              lineHeight: 1.1,
              letterSpacing: "0.03em",
            }}
          >
            {weddingConfig.couple.brideName}
          </motion.h2>

          {/* Green botanical vine divider */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <FooterVine />
          </motion.div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.45 }} className="font-playfair mt-4 mb-1" style={{ color: "#C8A951", letterSpacing: "0.18em", fontSize: "1.05rem" }}>
            {weddingConfig.wedding.dotDate}
          </motion.p>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="font-sans text-xs mb-2" style={{ color: "rgba(200,169,81,0.5)" }}>
            {weddingConfig.wedding.venueFullName} · {weddingConfig.wedding.venueAddress}
          </motion.p>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }} className="mt-10 flex items-center justify-center gap-4">
            <div className="h-px flex-1" style={{ background: "linear-gradient(90deg,transparent,rgba(200,169,81,0.3))" }} />
            <Heart size={16} className="heartbeat" style={{ color: "#C8A951" }} fill="#C8A951" />
            <div className="h-px flex-1" style={{ background: "linear-gradient(90deg,rgba(200,169,81,0.3),transparent)" }} />
          </motion.div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="font-sans text-xs mt-5" style={{ color: "rgba(200,169,81,0.25)" }}>
            Made with love ♥
          </motion.p>
        </div>
      </section>
    </>
  );
}
