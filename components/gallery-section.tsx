"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { LaceBorderTop, GradientDivider } from "@/components/lace-border";
import { weddingConfig } from "@/lib/wedding-config";

export function GallerySection() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <LaceBorderTop toColor="#6B2D3E" />
      <section style={{ background: "linear-gradient(180deg,#6B2D3E,#4A1E2B)" }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-12">
            <p className="font-sans text-xs tracking-widest uppercase mb-3"
              style={{ color: "rgba(200,169,81,0.7)", letterSpacing: "0.35em" }}>Our Story</p>
            <h2 className="font-script mb-2" style={{ fontSize: "clamp(2rem,7vw,3.2rem)", color: "rgba(250,247,242,0.92)" }}>
              Moments Together
            </h2>
            <GradientDivider fromColor="rgba(200,169,81,0.6)" toColor="transparent" height={1} />
          </motion.div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {weddingConfig.images.gallery.map((src, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.93 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setLightbox(src)}
                className="relative overflow-hidden rounded-xl cursor-pointer group"
                style={{ aspectRatio: i === 0 || i === 3 ? "3/4" : "1/1" }}>
                <img src={src} alt={`Photo ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                {/* Burgundy hover overlay */}
                <div className="absolute inset-0 transition-all duration-300"
                  style={{ background: "rgba(107,45,62,0)", }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(107,45,62,0.35)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(107,45,62,0)")} />
                {/* Gold border on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ border: "1px solid rgba(200,169,81,0.5)" }} />
              </motion.div>
            ))}
          </div>

          {/* Couple portrait centred below grid */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setLightbox(weddingConfig.images.couplePortrait)}
              style={{ maxWidth: 360, width: "100%", aspectRatio: "4/3" }}>
              <img src={weddingConfig.images.couplePortrait} alt="Roshan & Evita"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(46,16,25,0.6) 0%, transparent 50%)" }} />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="font-script text-2xl" style={{ color: "rgba(250,247,242,0.9)" }}>
                  {weddingConfig.couple.groomName} &amp; {weddingConfig.couple.brideName}
                </span>
              </div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ border: "1px solid rgba(200,169,81,0.5)" }} />
            </div>
          </motion.div>

          {/* Heart */}
          <div className="text-center mt-10">
            <span className="heartbeat text-3xl" style={{ color: "#C8A951", display: "inline-block" }}>&#x2665;</span>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(46,16,25,0.95)" }}
            onClick={() => setLightbox(null)}>
            <motion.img initial={{ scale: 0.88 }} animate={{ scale: 1 }} exit={{ scale: 0.88 }}
              src={lightbox} alt="Wedding photo"
              className="max-w-full max-h-[88vh] rounded-2xl object-contain"
              style={{ boxShadow: "0 0 60px rgba(200,169,81,0.15)" }}
              onClick={e => e.stopPropagation()} />
            <button onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "rgba(200,169,81,0.15)", border: "1px solid rgba(200,169,81,0.4)", color: "#C8A951" }}>
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
