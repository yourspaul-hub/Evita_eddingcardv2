"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/lib/wedding-config";

function getTimeLeft() {
  const target = new Date(`${weddingConfig.wedding.date}T10:00:00`).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

function Digit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Card */}
      <div
        style={{
          width: "clamp(72px, 19vw, 110px)",
          height: "clamp(72px, 19vw, 110px)",
          background: "rgba(200,169,81,0.12)",
          border: "1.5px solid rgba(200,169,81,0.45)",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(0,0,0,0.35), inset 0 1px 0 rgba(200,169,81,0.15)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle inner glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, rgba(200,169,81,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(1.9rem, 6.5vw, 3rem)",
            color: "#C8A951",
            lineHeight: 1,
            position: "relative",
            zIndex: 1,
            textShadow: "0 0 20px rgba(200,169,81,0.4)",
          }}
        >
          {display}
        </span>
      </div>

      {/* Label */}
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 500,
          fontSize: "clamp(0.65rem, 2.4vw, 0.8rem)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(200,169,81,0.65)",
          marginTop: "0.5rem",
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #2E1019 0%, #3D1520 50%, #2E1019 100%)",
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}
    >
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ marginBottom: "2.5rem" }}
      >
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(0.7rem, 2.5vw, 0.85rem)",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(200,169,81,0.6)",
            marginBottom: "0.5rem",
          }}
        >
          Counting down to
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
            color: "#E8D5A0",
            margin: 0,
          }}
        >
          Our Wedding Day
        </h2>
        {/* Gold rule */}
        <div
          style={{
            width: "60px",
            height: "1px",
            background: "rgba(200,169,81,0.5)",
            margin: "1rem auto 0",
          }}
        />
      </motion.div>

      {/* Digits row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "clamp(0.75rem, 3vw, 1.5rem)",
          flexWrap: "nowrap",
          maxWidth: "560px",
          margin: "0 auto",
        }}
      >
        <Digit value={timeLeft.days} label="Days" />
        <Digit value={timeLeft.hours} label="Hours" />
        <Digit value={timeLeft.minutes} label="Mins" />
        <Digit value={timeLeft.seconds} label="Secs" />
      </div>

      {/* Date below */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 400,
          fontSize: "clamp(0.85rem, 3vw, 1.1rem)",
          color: "rgba(200,169,81,0.55)",
          letterSpacing: "0.2em",
          marginTop: "2rem",
        }}
      >
        {weddingConfig.wedding.displayDate} &nbsp;·&nbsp; {weddingConfig.wedding.venue}
      </motion.p>
    </section>
  );
}
