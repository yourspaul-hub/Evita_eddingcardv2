"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { CornerFlourish } from "@/components/lace-border";
import { weddingConfig } from "@/lib/wedding-config";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg,#4A1E2B 0%,#6B2D3E 60%,#2E1019 100%)",
        minHeight: "100svh",
      }}
    >
      {/* Couple photo overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${weddingConfig.images.couple}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
        }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(46,16,25,0.7) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 md:py-24 min-h-screen justify-center">
        {/* Corner flourishes (now returns null — keeps no visual dots) */}
        <CornerFlourish className="absolute top-6 left-6 opacity-50" />
        <CornerFlourish
          className="absolute top-6 right-6 opacity-50"
          style={{ transform: "scaleX(-1)" } as React.CSSProperties}
        />
        <CornerFlourish
          className="absolute bottom-20 left-6 opacity-50"
          style={{ transform: "scaleY(-1)" } as React.CSSProperties}
        />
        <CornerFlourish
          className="absolute bottom-20 right-6 opacity-50"
          style={{ transform: "scale(-1,-1)" } as React.CSSProperties}
        />

        {/* Outer border frame */}
        <div
          className="absolute inset-6 pointer-events-none"
          style={{ border: "1px solid rgba(200,169,81,0.15)", borderRadius: 2 }}
        />

        {/* Save the Date label */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4 mb-6"
        >
          <div
            className="h-px w-12"
            style={{
              background:
                "linear-gradient(90deg,transparent,rgba(200,169,81,0.7))",
            }}
          />
          <p
            className="font-sans text-xs tracking-widest uppercase"
            style={{ color: "#C8A951", letterSpacing: "0.4em" }}
          >
            {weddingConfig.messages.saveTheDate}
          </p>
          <div
            className="h-px w-12"
            style={{
              background:
                "linear-gradient(90deg,rgba(200,169,81,0.7),transparent)",
            }}
          />
        </motion.div>

        {/* Monogram image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="relative mb-2"
          style={{
            width: "clamp(180px,45vw,300px)",
            height: "clamp(180px,45vw,300px)",
          }}
        >
          <Image
            src="/monogram-light.png"
            alt="R & E Monogram"
            fill
            style={{
              objectFit: "contain",
              filter: "invert(1) brightness(2.8) sepia(0.4)",
              mixBlendMode: "screen",
              opacity: 0.88,
            }}
            priority
          />
        </motion.div>

        {/* Together with families */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-cormorant italic text-sm md:text-base mb-5"
          style={{ color: "rgba(250,247,242,0.6)", letterSpacing: "0.06em" }}
        >
          {weddingConfig.messages.togetherWith}
        </motion.p>

        {/* ── FAMILY BLOCK — Evita first, then Roshan ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="w-full max-w-md mb-6 px-2"
        >
          {/* Evita */}
          <div className="mb-4">
            <h2
              className="font-script mb-1"
              style={{
                fontSize: "clamp(2rem,7vw,3.2rem)",
                color: "rgba(250,247,242,0.96)",
                lineHeight: 1.1,
              }}
            >
              {weddingConfig.family.bride.fullName}
            </h2>
            <p
              className="font-cormorant italic text-xs md:text-sm leading-relaxed"
              style={{ color: "rgba(250,247,242,0.5)" }}
            >
              ({weddingConfig.family.bride.detail})
            </p>
          </div>

          <p
            className="font-cormorant italic text-xl mb-4"
            style={{ color: "rgba(200,169,81,0.8)" }}
          >
            and
          </p>

          {/* Roshan */}
          <div>
            <h2
              className="font-script mb-1"
              style={{
                fontSize: "clamp(2rem,7vw,3.2rem)",
                color: "rgba(250,247,242,0.96)",
                lineHeight: 1.1,
              }}
            >
              {weddingConfig.family.groom.fullName}
            </h2>
            <p
              className="font-cormorant italic text-xs md:text-sm leading-relaxed"
              style={{ color: "rgba(250,247,242,0.5)" }}
            >
              ({weddingConfig.family.groom.detail})
            </p>
          </div>
        </motion.div>

        {/* Gold ornament divider */}
        <div className="flex items-center gap-3 my-2" style={{ width: "min(280px,70%)" }}>
          <div className="flex-1 h-px" style={{ background: "rgba(200,169,81,0.35)" }} />
          <span style={{ color: "rgba(200,169,81,0.6)", fontSize: "0.7rem" }}>❧</span>
          <div className="flex-1 h-px" style={{ background: "rgba(200,169,81,0.35)" }} />
        </div>

        {/* Date in dot format */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="font-playfair mt-4 tracking-widest"
          style={{
            fontSize: "clamp(1.2rem,4vw,1.8rem)",
            color: "#C8A951",
            letterSpacing: "0.25em",
          }}
        >
          {weddingConfig.wedding.dotDate}
        </motion.p>

        {/* Day / time — bolder & larger on mobile */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: "clamp(0.85rem, 3vw, 1rem)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(200,169,81,0.85)",
            marginTop: "0.35rem",
          }}
        >
          {weddingConfig.wedding.dayOfWeek} &nbsp;·&nbsp; {weddingConfig.wedding.time}
        </motion.p>

        {/* Venue */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-5 flex flex-col items-center gap-1"
        >
          {/* "Celebrate with us at" — bolder, visible on mobile */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: "clamp(0.8rem, 2.8vw, 0.9rem)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(200,169,81,0.75)",
            }}
          >
            Celebrate with us at
          </p>
          <a
            href={weddingConfig.wedding.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-1 group"
          >
            <MapPin size={12} style={{ color: "#C8A951" }} />
            <span
              className="font-playfair text-base md:text-lg group-hover:underline"
              style={{
                color: "rgba(250,247,242,0.9)",
                textDecorationColor: "#C8A951",
              }}
            >
              {weddingConfig.wedding.venueFullName}
            </span>
          </a>
          <p
            className="font-sans text-xs mt-1"
            style={{ color: "rgba(250,247,242,0.4)" }}
          >
            {weddingConfig.wedding.venueMapCode}
          </p>
        </motion.div>

        {/* Formal invitation to follow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="font-cormorant italic mt-6 text-sm md:text-base"
          style={{ color: "rgba(200,169,81,0.55)", letterSpacing: "0.05em" }}
        >
          {weddingConfig.messages.formalFollow}
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="mt-10"
          style={{ color: "rgba(200,169,81,0.5)" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </div>
      {/* Hero merges seamlessly into dark Countdown — no border needed */}
    </section>
  );
}
