"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EnvelopeScreen } from "@/components/envelope-screen";
import { HeroSection } from "@/components/hero-section";
import { CountdownTimer } from "@/components/countdown-timer";
import { EventSchedule } from "@/components/event-schedule";
import { RSVPForm } from "@/components/rsvp-form";
import { FooterSection } from "@/components/footer-section";
import { MusicPlayer } from "@/components/music-player";

export default function WeddingPage() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!opened && <EnvelopeScreen onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      <AnimatePresence>
        {opened && (
          <motion.main
            key="invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ background: "#2E1019" }}
          >
            <HeroSection />
            <CountdownTimer />
            <EventSchedule />
            <RSVPForm />
            <FooterSection />
            {/* autoplay={true} — user has already tapped to open, so browser allows it */}
            <MusicPlayer autoplay={true} />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
