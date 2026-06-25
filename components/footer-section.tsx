"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";
import { LaceBorderTop } from "@/components/lace-border";
import { weddingConfig } from "@/lib/wedding-config";

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
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-script mb-1" style={{ fontSize: "clamp(2.5rem,9vw,4rem)", color: "rgba(250,247,242,0.92)", lineHeight: 1.1 }}>
            {weddingConfig.couple.groomName}
          </motion.h2>
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="font-cormorant italic text-2xl" style={{ color: "rgba(200,169,81,0.6)" }}>&amp;</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }} className="font-script mt-1 mb-6" style={{ fontSize: "clamp(2.5rem,9vw,4rem)", color: "rgba(250,247,242,0.92)", lineHeight: 1.1 }}>
            {weddingConfig.couple.brideName}
          </motion.h2>
          <div className="flex items-center gap-3 mx-auto mb-2" style={{ width: "min(240px,70%)" }}>
            <div className="flex-1 h-px" style={{ background: "rgba(200,169,81,0.3)" }} />
            <span style={{ color: "rgba(200,169,81,0.5)", fontSize: "0.7rem" }}>❧</span>
            <div className="flex-1 h-px" style={{ background: "rgba(200,169,81,0.3)" }} />
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="font-playfair mt-6 mb-1" style={{ color: "#C8A951", letterSpacing: "0.18em", fontSize: "1.05rem" }}>
            {weddingConfig.wedding.dotDate}
          </motion.p>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="font-sans text-xs mb-2" style={{ color: "rgba(200,169,81,0.5)" }}>
            {weddingConfig.wedding.venueFullName} · {weddingConfig.wedding.venueAddress}
          </motion.p>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="inline-block mt-5 px-6 py-2 rounded-full font-sans text-xs tracking-widest uppercase" style={{ border: "1px solid rgba(200,169,81,0.25)", color: "rgba(200,169,81,0.6)", letterSpacing: "0.2em" }}>
            {weddingConfig.messages.dressCode}
          </motion.div>
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
