"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { PremiumBotanicalBorder } from "@/components/premium-botanical-border";
import { weddingConfig } from "@/lib/wedding-config";

const LEAF = "#2D5A1B";
const SAGE = "#4A7A35";
const GOLD = "#C8A951";

export function RSVPForm() {
  if (!weddingConfig.rsvp.enabled) return null;

  return (
    <section className="py-20 px-6" style={{ background: "#FAF7F2" }}>

      {/* ── Premium botanical top border ── */}
      <PremiumBotanicalBorder variant="light" style={{ marginBottom: "2.5rem" }} />

      <div className="max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.7 }}
        >
          <p className="font-sans text-xs tracking-widest uppercase mb-3"
            style={{ color:"rgba(107,45,62,0.55)", letterSpacing:"0.35em" }}>
            Kindly Reply
          </p>
          <h2 className="font-script mb-1" style={{ fontSize:"clamp(2rem,7vw,3.2rem)", color:"#4A1E2B" }}>
            Will you join us?
          </h2>
          <p className="font-cormorant italic text-base mb-8" style={{ color:"rgba(107,45,62,0.6)" }}>
            Please respond by <strong>{weddingConfig.rsvp.deadline}</strong>
          </p>

          {/* RSVP Contact Card */}
          <motion.div
            initial={{ opacity:0, y:24 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ delay:0.12 }}
            className="rounded-2xl p-10 mb-8 relative overflow-hidden"
            style={{ background: "rgba(255,255,255,0.88)", boxShadow: "0 4px 40px rgba(107,45,62,0.08)" }}
          >
            {/* Green-gold ornamental frame */}
            <div style={{ position:"absolute", inset:"10px", border:`1.5px solid rgba(200,169,81,0.5)`, borderRadius:"12px", pointerEvents:"none", zIndex:1 }}/>
            <div style={{ position:"absolute", inset:"14px", border:`0.5px solid rgba(200,169,81,0.25)`, borderRadius:"10px", pointerEvents:"none", zIndex:1 }}/>

            {/* Corner botanical accents */}
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" style={{ position:"absolute", top:10, left:10, opacity:0.75, zIndex:2 }}>
              <path d="M2 48 Q18 28 36 10 Q42 4 48 2" stroke={LEAF} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <ellipse cx="22" cy="28" rx="7" ry="3" fill={LEAF} transform="rotate(-45 22 28)"/>
              <ellipse cx="34" cy="16" rx="6" ry="2.5" fill={SAGE} transform="rotate(-55 34 16)"/>
              <circle cx="4" cy="46" r="3" fill={GOLD} opacity="0.9"/>
              <circle cx="4" cy="46" r="1.5" fill="#E2C97A"/>
            </svg>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" style={{ position:"absolute", top:10, right:10, opacity:0.75, zIndex:2, transform:"scaleX(-1)" }}>
              <path d="M2 48 Q18 28 36 10 Q42 4 48 2" stroke={LEAF} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <ellipse cx="22" cy="28" rx="7" ry="3" fill={LEAF} transform="rotate(-45 22 28)"/>
              <ellipse cx="34" cy="16" rx="6" ry="2.5" fill={SAGE} transform="rotate(-55 34 16)"/>
              <circle cx="4" cy="46" r="3" fill={GOLD} opacity="0.9"/>
              <circle cx="4" cy="46" r="1.5" fill="#E2C97A"/>
            </svg>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" style={{ position:"absolute", bottom:10, left:10, opacity:0.75, zIndex:2, transform:"scaleY(-1)" }}>
              <path d="M2 48 Q18 28 36 10 Q42 4 48 2" stroke={LEAF} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <ellipse cx="22" cy="28" rx="7" ry="3" fill={LEAF} transform="rotate(-45 22 28)"/>
              <ellipse cx="34" cy="16" rx="6" ry="2.5" fill={SAGE} transform="rotate(-55 34 16)"/>
              <circle cx="4" cy="46" r="3" fill={GOLD} opacity="0.9"/>
              <circle cx="4" cy="46" r="1.5" fill="#E2C97A"/>
            </svg>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" style={{ position:"absolute", bottom:10, right:10, opacity:0.75, zIndex:2, transform:"scale(-1,-1)" }}>
              <path d="M2 48 Q18 28 36 10 Q42 4 48 2" stroke={LEAF} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <ellipse cx="22" cy="28" rx="7" ry="3" fill={LEAF} transform="rotate(-45 22 28)"/>
              <ellipse cx="34" cy="16" rx="6" ry="2.5" fill={SAGE} transform="rotate(-55 34 16)"/>
              <circle cx="4" cy="46" r="3" fill={GOLD} opacity="0.9"/>
              <circle cx="4" cy="46" r="1.5" fill="#E2C97A"/>
            </svg>

            <div style={{ position:"relative", zIndex:3 }}>
              <p className="font-cormorant italic text-base mb-3" style={{ color:"rgba(107,45,62,0.65)" }}>
                To confirm your attendance, please contact
              </p>
              <p className="font-champagne mb-5" style={{ fontFamily:"'CAC Champagne','Great Vibes',cursive", fontSize:"clamp(1.8rem,5vw,2.4rem)", color:"#4A1E2B", letterSpacing:"0.04em", lineHeight:1.2 }}>
                {weddingConfig.rsvp.contactName}
              </p>
              <a href={`tel:${weddingConfig.rsvp.contactPhone}`}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-playfair text-xl transition-all duration-300"
                style={{ background:"linear-gradient(135deg,#6B2D3E,#4A1E2B)", color:"#FAF7F2", boxShadow:"0 4px 24px rgba(107,45,62,0.3)", textDecoration:"none", letterSpacing:"0.05em" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
                <Phone size={18}/> {weddingConfig.rsvp.contactPhone}
              </a>
              <div className="flex items-center justify-center gap-2 mt-8">
                <div className="h-px flex-1" style={{ background:`linear-gradient(90deg,transparent,rgba(45,90,27,0.45))` }}/>
                <svg width="22" height="22" viewBox="0 0 24 24" fill={LEAF} opacity="0.7">
                  <path d="M12 2 C6 2 2 8 2 14 Q6 10 12 12 Q18 10 22 14 C22 8 18 2 12 2Z"/>
                </svg>
                <div className="h-px flex-1" style={{ background:`linear-gradient(90deg,rgba(45,90,27,0.45),transparent)` }}/>
              </div>
            </div>
          </motion.div>

          <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.3 }}
            className="font-cormorant italic text-sm" style={{ color:"rgba(107,45,62,0.45)" }}>
            We look forward to celebrating this beautiful day with you
          </motion.p>
        </motion.div>
      </div>

      {/* ── Premium botanical bottom border ── */}
      <PremiumBotanicalBorder variant="light" style={{ marginTop: "2.5rem" }} />
    </section>
  );
}
