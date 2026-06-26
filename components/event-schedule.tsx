"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/lib/wedding-config";
import { LaceBorderBottom } from "@/components/lace-border";
import { PremiumBotanicalBorder } from "@/components/premium-botanical-border";

const GOLD     = "#C8A951";
const GOLD_DIM = "rgba(200,169,81,0.55)";
const CREAM    = "#E8D5A0";
const LEAF     = "#2D5A1B";

function TimelineDot() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink:0, position:"relative", zIndex:1 }}>
      <circle cx="7" cy="7" r="5"   stroke={GOLD} strokeWidth="1.5" fill="rgba(200,169,81,0.2)"/>
      <circle cx="7" cy="7" r="2.5" fill={GOLD}/>
    </svg>
  );
}

export function EventSchedule() {
  return (
    <section style={{ background:"linear-gradient(180deg,#2E1019 0%,#251018 100%)", padding:"0 0 0", textAlign:"center" }}>

      {/* ── Premium botanical header border ── */}
      <PremiumBotanicalBorder variant="dark" style={{ marginBottom: 0 }} />

      {/* Section heading */}
      <motion.div
        initial={{ opacity:0, y:12 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:0.7 }}
        style={{ padding:"3rem 1.5rem 2.5rem" }}
      >
        <p style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:"clamp(0.7rem,2.5vw,0.82rem)", letterSpacing:"0.28em", textTransform:"uppercase", color:GOLD_DIM, marginBottom:"0.5rem" }}>
          Join us for
        </p>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontWeight:400, fontStyle:"italic", fontSize:"clamp(1.8rem,5vw,2.6rem)", color:CREAM, margin:0 }}>
          Order of Ceremony
        </h2>
      </motion.div>

      {/* Timeline */}
      <div style={{ maxWidth:"560px", margin:"0 auto", position:"relative", textAlign:"left", padding:"0 1.5rem" }}>
        <div style={{
          position:"absolute", left:"calc(1.5rem + 84px)", top:0, bottom:0, width:"1px",
          background:`linear-gradient(to bottom,transparent,rgba(45,90,27,0.38) 10%,rgba(200,169,81,0.2) 50%,rgba(45,90,27,0.38) 90%,transparent)`,
          pointerEvents:"none",
        }}/>

        {weddingConfig.events.map((event, i) => (
          <motion.div key={i}
            initial={{ opacity:0, x:-16 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, margin:"-40px" }}
            transition={{ duration:0.5, delay:i * 0.08 }}
            style={{ display:"flex", alignItems:"center", gap:"1.2rem", paddingBottom: i < weddingConfig.events.length - 1 ? "1.8rem" : "2rem", position:"relative" }}
          >
            <div style={{ width:"72px", flexShrink:0, textAlign:"right" }}>
              <span style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:600, fontSize:"clamp(0.78rem,2.8vw,0.9rem)", color:GOLD, letterSpacing:"0.04em", whiteSpace:"nowrap" }}>
                {event.time}
              </span>
            </div>
            <TimelineDot />
            <p style={{ fontFamily:"'Playfair Display',serif", fontWeight:500, fontSize:"clamp(0.92rem,3.2vw,1.05rem)", color:CREAM, margin:0, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>
              {event.title}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Venue block */}
      <motion.div
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        viewport={{ once:true }}
        transition={{ duration:0.7, delay:0.3 }}
        style={{ padding:"1rem 1.5rem 0", textAlign:"center" }}
      >
        <PremiumBotanicalBorder variant="dark" style={{ marginBottom:"1.4rem" }}/>

        <p style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:"clamp(0.75rem,2.6vw,0.88rem)", letterSpacing:"0.22em", textTransform:"uppercase", color:GOLD_DIM, margin:"0 0 0.3rem" }}>
          Venue
        </p>
        <a href={weddingConfig.wedding.googleMapsUrl} target="_blank" rel="noopener noreferrer"
          style={{ fontFamily:"'Playfair Display',serif", fontWeight:400, fontStyle:"italic", fontSize:"clamp(1rem,3.5vw,1.25rem)", color:CREAM, textDecoration:"none" }}>
          {weddingConfig.wedding.venueFullName}
        </a>
        <p style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:"clamp(0.78rem,2.6vw,0.9rem)", color:"rgba(232,213,160,0.5)", margin:"0.3rem 0 0", letterSpacing:"0.05em" }}>
          {weddingConfig.wedding.venueAddress}
        </p>
      </motion.div>

      <LaceBorderBottom fromColor="#251018" toColor="#FAF7F2" height={72} />
    </section>
  );
}
