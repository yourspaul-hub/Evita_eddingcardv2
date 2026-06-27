"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { CornerFlourish } from "@/components/lace-border";
import { PremiumBotanicalBorder } from "@/components/premium-botanical-border";
import { weddingConfig } from "@/lib/wedding-config";

const LEAF_GREEN = "#2D5A1B";
const SAGE_GREEN = "#4A7A35";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg,#4A1E2B 0%,#6B2D3E 60%,#2E1019 100%)",
        minHeight: "100svh",
      }}
    >
      {/* Faint background photo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${weddingConfig.images.couple}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
        }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(46,16,25,0.7) 100%)" }}
      />

      {/* Premium botanical top band */}
      <div className="absolute inset-x-0 top-0" style={{ zIndex: 2 }}>
        <PremiumBotanicalBorder variant="dark" />
      </div>

      {/* Premium botanical bottom band */}
      <div className="absolute inset-x-0 bottom-0" style={{ zIndex: 2 }}>
        <PremiumBotanicalBorder variant="dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-24 md:py-28 min-h-screen justify-center">
        <CornerFlourish className="absolute top-16 left-6 opacity-25" />
        <CornerFlourish className="absolute top-16 right-6 opacity-25" style={{ transform: "scaleX(-1)" } as React.CSSProperties} />
        <div className="absolute inset-8 pointer-events-none" style={{ border: "1px solid rgba(200,169,81,0.12)", borderRadius: 2 }} />

        {/* Save the Date */}
        <motion.div initial={{ opacity:0, y:-16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }}
          className="flex items-center gap-4 mb-6">
          <div className="h-px w-12" style={{ background:"linear-gradient(90deg,transparent,rgba(200,169,81,0.7))" }}/>
          <p className="font-sans text-xs tracking-widest uppercase" style={{ color:"#C8A951", letterSpacing:"0.4em" }}>
            {weddingConfig.messages.saveTheDate}
          </p>
          <div className="h-px w-12" style={{ background:"linear-gradient(90deg,rgba(200,169,81,0.7),transparent)" }}/>
        </motion.div>

        {/* Monogram */}
        <motion.div initial={{ opacity:0, scale:0.85 }} animate={{ opacity:1, scale:1 }} transition={{ delay:0.4, duration:0.9 }}
          className="relative mb-2" style={{ width:"clamp(160px,40vw,260px)", height:"clamp(160px,40vw,260px)" }}>
          <Image src="/monogram-light.png" alt="R & E Monogram" fill style={{ objectFit:"contain", filter:"invert(1) brightness(2.8) sepia(0.4)", mixBlendMode:"screen", opacity:0.88 }} priority/>
        </motion.div>

        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.6 }}
          className="font-cormorant italic text-sm md:text-base mb-5"
          style={{ color:"rgba(250,247,242,0.6)", letterSpacing:"0.06em" }}>
          {weddingConfig.messages.togetherWith}
        </motion.p>

        {/* Full names in CAC Champagne */}
        <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.7 }}
          className="w-full max-w-md mb-6 px-2">
          <div className="mb-4">
            <h2 className="mb-1" style={{ fontFamily:"'CAC Champagne','Great Vibes',cursive", fontSize:"clamp(2.6rem,9vw,4.2rem)", color:"rgba(250,247,242,0.96)", lineHeight:1.1, letterSpacing:"0.03em" }}>
              {weddingConfig.family.bride.fullName}
            </h2>
            <p className="font-cormorant italic text-xs md:text-sm leading-relaxed" style={{ color:"rgba(250,247,242,0.5)" }}>
              ({weddingConfig.family.bride.detail})
            </p>
          </div>
          <p className="font-cormorant italic text-xl mb-4" style={{ color:"rgba(200,169,81,0.8)" }}>and</p>
          <div>
            <h2 className="mb-1" style={{ fontFamily:"'CAC Champagne','Great Vibes',cursive", fontSize:"clamp(2.6rem,9vw,4.2rem)", color:"rgba(250,247,242,0.96)", lineHeight:1.1, letterSpacing:"0.03em" }}>
              {weddingConfig.family.groom.fullName}
            </h2>
            <p className="font-cormorant italic text-xs md:text-sm leading-relaxed" style={{ color:"rgba(250,247,242,0.5)" }}>
              ({weddingConfig.family.groom.detail})
            </p>
          </div>
        </motion.div>

        {/* Premium botanical divider before caricature */}
        <motion.div initial={{ opacity:0, scaleX:0.5 }} animate={{ opacity:1, scaleX:1 }} transition={{ delay:0.8, duration:0.8 }}
          style={{ width:"100%", maxWidth:"560px" }}>
          <PremiumBotanicalBorder variant="dark" />
        </motion.div>

        {/* Caricature illustration */}
        <motion.div
          initial={{ opacity:0, y:24, scale:0.92 }}
          animate={{ opacity:1, y:0, scale:1 }}
          transition={{ delay:0.9, duration:1.0, ease:"easeOut" }}
          className="relative my-4"
          style={{ width:"clamp(220px,58vw,380px)" }}
        >
          <div className="absolute inset-0 rounded-full pointer-events-none"
            style={{ background:"radial-gradient(ellipse at center,rgba(45,90,27,0.18) 0%,transparent 70%)", transform:"scale(1.15)", filter:"blur(18px)" }}/>
          <div className="absolute pointer-events-none"
            style={{ inset:"-4px", borderRadius:"50% / 48%", border:"1px solid rgba(200,169,81,0.22)" }}/>
          <Image
            src={weddingConfig.images.caricature}
            alt="Evita & Roshan"
            width={380} height={475}
            style={{ width:"100%", height:"auto", objectFit:"contain",
              filter:"drop-shadow(0 8px 32px rgba(45,90,27,0.3)) drop-shadow(0 0 18px rgba(200,169,81,0.15))" }}
          />
          <svg width="40" height="60" viewBox="0 0 40 60" fill="none"
            style={{ position:"absolute", left:"-28px", bottom:"20%", opacity:0.7 }}>
            <path d="M30 55 Q10 30 20 5" stroke={LEAF_GREEN} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <ellipse cx="13" cy="20" rx="7" ry="3.5" fill={LEAF_GREEN} opacity="0.85" transform="rotate(30 13 20)"/>
            <ellipse cx="18" cy="38" rx="6" ry="3"   fill={LEAF_GREEN} opacity="0.75" transform="rotate(15 18 38)"/>
          </svg>
          <svg width="40" height="60" viewBox="0 0 40 60" fill="none"
            style={{ position:"absolute", right:"-28px", bottom:"20%", opacity:0.7, transform:"scaleX(-1)" }}>
            <path d="M30 55 Q10 30 20 5" stroke={LEAF_GREEN} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <ellipse cx="13" cy="20" rx="7" ry="3.5" fill={LEAF_GREEN} opacity="0.85" transform="rotate(30 13 20)"/>
            <ellipse cx="18" cy="38" rx="6" ry="3"   fill={LEAF_GREEN} opacity="0.75" transform="rotate(15 18 38)"/>
          </svg>
        </motion.div>

        {/* Date */}
        <motion.p initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.1 }}
          className="font-playfair mt-2 tracking-widest"
          style={{ fontSize:"clamp(1.2rem,4vw,1.8rem)", color:"#C8A951", letterSpacing:"0.25em" }}>
          {weddingConfig.wedding.dotDate}
        </motion.p>
        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.2 }}
          style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:600, fontSize:"clamp(0.85rem,3vw,1rem)", letterSpacing:"0.22em", textTransform:"uppercase", color:"rgba(200,169,81,0.85)", marginTop:"0.35rem" }}>
          {weddingConfig.wedding.dayOfWeek} &nbsp;·&nbsp; {weddingConfig.wedding.time}
        </motion.p>

        {/* Venue */}
        <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.3 }}
          className="mt-5 flex flex-col items-center gap-1">
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:600, fontSize:"clamp(0.8rem,2.8vw,0.9rem)", letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(200,169,81,0.75)" }}>
            Celebrate with us at
          </p>
          <a href={weddingConfig.wedding.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-1 group">
            <MapPin size={12} style={{ color:"#C8A951" }}/>
            <span className="font-playfair text-base md:text-lg group-hover:underline" style={{ color:"rgba(250,247,242,0.9)", textDecorationColor:"#C8A951" }}>
              {weddingConfig.wedding.venueFullName}
            </span>
          </a>
          <p className="font-sans text-xs mt-1" style={{ color:"rgba(250,247,242,0.4)" }}>
            {weddingConfig.wedding.venueMapCode}
          </p>
          <a
            href={weddingConfig.wedding.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 px-5 py-2 rounded-full font-sans text-xs tracking-widest uppercase transition-all duration-200"
            style={{
              border: "1px solid rgba(200,169,81,0.55)",
              color: "#C8A951",
              letterSpacing: "0.2em",
              textDecoration: "none",
              background: "rgba(200,169,81,0.07)",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(200,169,81,0.18)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(200,169,81,0.07)")}
          >
            <MapPin size={11} />
            Get Directions
          </a>
        </motion.div>

        {/* Scroll chevron */}
        <motion.div animate={{ y:[0,8,0], opacity:[0.4,0.9,0.4] }} transition={{ duration:2.2, repeat:Infinity }}
          className="mt-10" style={{ color:"rgba(200,169,81,0.5)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
