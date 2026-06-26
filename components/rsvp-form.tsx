"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { weddingConfig } from "@/lib/wedding-config";

// Dark green + leaf accent colors
const LEAF = "#2D5A1B";
const LEAF_DIM = "rgba(45,90,27,0.5)";

// Inline leaf SVG decoration
function LeafAccent({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="80" height="36" viewBox="0 0 80 36" fill="none"
      style={{ transform: flip ? "scaleX(-1)" : undefined, opacity: 0.75 }}
    >
      <path d="M4 32 Q20 8 40 18 Q55 6 76 4" stroke={LEAF} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M40 18 Q30 4 22 10" stroke={LEAF} strokeWidth="1" strokeLinecap="round" fill="none"/>
      <ellipse cx="22" cy="9" rx="5" ry="3" fill={LEAF} opacity="0.7" transform="rotate(-30 22 9)"/>
      <path d="M40 18 Q50 4 58 12" stroke={LEAF} strokeWidth="1" strokeLinecap="round" fill="none"/>
      <ellipse cx="59" cy="11" rx="5" ry="3" fill={LEAF} opacity="0.7" transform="rotate(20 59 11)"/>
      <path d="M40 18 Q36 28 28 30" stroke={LEAF} strokeWidth="1" strokeLinecap="round" fill="none"/>
      <ellipse cx="27" cy="31" rx="5" ry="2.5" fill={LEAF} opacity="0.6" transform="rotate(-10 27 31)"/>
    </svg>
  );
}

export function RSVPForm() {
  if (!weddingConfig.rsvp.enabled) return null;

  return (
    <section className="py-20 px-6" style={{ background: "#FAF7F2" }}>
      <div className="max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Section header */}
          <p
            className="font-sans text-xs tracking-widest uppercase mb-3"
            style={{ color: "rgba(107,45,62,0.55)", letterSpacing: "0.35em" }}
          >
            Kindly Reply
          </p>
          <h2
            className="font-script mb-1"
            style={{ fontSize: "clamp(2rem,7vw,3.2rem)", color: "#4A1E2B" }}
          >
            Will you join us?
          </h2>
          <p
            className="font-cormorant italic text-base mb-4"
            style={{ color: "rgba(107,45,62,0.6)" }}
          >
            Please respond by <strong>{weddingConfig.rsvp.deadline}</strong>
          </p>

          {/* Leaf + ornament divider */}
          <div className="flex items-center justify-center gap-3 mx-auto mb-10">
            <LeafAccent />
            <span style={{ color: "rgba(107,45,62,0.35)", fontSize: "0.7rem" }}>❧</span>
            <LeafAccent flip />
          </div>

          {/* RSVP Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="rounded-2xl p-10 mb-8 relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(107,45,62,0.15)",
              boxShadow: "0 4px 40px rgba(107,45,62,0.08)",
            }}
          >
            {/* Subtle green corner leaf accents */}
            <div className="absolute top-0 left-0 opacity-20 pointer-events-none" style={{ transform: "translate(-8px,-8px)" }}>
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <path d="M0 0 Q40 0 40 40 Q0 40 0 0Z" fill={LEAF}/>
                <path d="M0 0 Q20 0 20 20" stroke="#FAF7F2" strokeWidth="1" fill="none"/>
              </svg>
            </div>
            <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none" style={{ transform: "translate(8px,8px) rotate(180deg)" }}>
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <path d="M0 0 Q40 0 40 40 Q0 40 0 0Z" fill={LEAF}/>
              </svg>
            </div>

            <p
              className="font-cormorant italic text-base mb-3"
              style={{ color: "rgba(107,45,62,0.65)" }}
            >
              To confirm your attendance, please contact
            </p>

            {/* Name */}
            <p
              className="font-champagne mb-5"
              style={{
                fontFamily: "'CAC Champagne', 'Great Vibes', cursive",
                fontSize: "clamp(1.8rem, 5vw, 2.4rem)",
                color: "#4A1E2B",
                letterSpacing: "0.04em",
                lineHeight: 1.2,
              }}
            >
              {weddingConfig.rsvp.contactName}
            </p>

            {/* Phone button */}
            <a
              href={`tel:${weddingConfig.rsvp.contactPhone}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-playfair text-xl transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #6B2D3E, #4A1E2B)",
                color: "#FAF7F2",
                boxShadow: "0 4px 24px rgba(107,45,62,0.3)",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              <Phone size={18} />
              {weddingConfig.rsvp.contactPhone}
            </a>

            {/* Subtle green leaf divider at bottom */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, transparent, ${LEAF_DIM})` }} />
              <svg width="20" height="20" viewBox="0 0 24 24" fill={LEAF} opacity="0.5">
                <path d="M12 2 C6 2 2 8 2 14 Q6 10 12 12 Q18 10 22 14 C22 8 18 2 12 2Z"/>
              </svg>
              <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${LEAF_DIM}, transparent)` }} />
            </div>
          </motion.div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-cormorant italic text-sm"
            style={{ color: "rgba(107,45,62,0.45)" }}
          >
            We look forward to celebrating this beautiful day with you
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
