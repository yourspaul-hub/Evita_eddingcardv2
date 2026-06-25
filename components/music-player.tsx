"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "@/lib/wedding-config";

interface MusicPlayerProps {
  autoplay?: boolean;
}

export function MusicPlayer({ autoplay = false }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [visible, setVisible] = useState(false);

  const tryPlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.loop = true;
    audio.play()
      .then(() => {
        setPlaying(true);
        setVisible(true);
      })
      .catch(() => {
        // Browser blocked — show player so user can tap manually
        setVisible(true);
      });
  };

  // Attempt autoplay once the component mounts (user has already interacted)
  useEffect(() => {
    if (autoplay) {
      // Small delay to let the invitation animation settle
      const t = setTimeout(tryPlay, 600);
      return () => clearTimeout(t);
    } else {
      setVisible(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = volume;
      audio.loop = true;
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  if (!weddingConfig.music.enabled) return null;

  return (
    <>
      <audio ref={audioRef} src={weddingConfig.music.url} preload="auto" loop />
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "fixed",
              bottom: "1.25rem",
              right: "1.25rem",
              zIndex: 100,
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "rgba(46,16,25,0.92)",
              border: "1px solid rgba(200,169,81,0.4)",
              borderRadius: "999px",
              padding: "0.45rem 1rem 0.45rem 0.5rem",
              backdropFilter: "blur(12px)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
            }}
          >
            {/* Note icon */}
            <span style={{ color: "rgba(200,169,81,0.75)", fontSize: "0.85rem" }}>♪</span>

            {/* Play / Pause button */}
            <button
              onClick={toggle}
              aria-label={playing ? "Pause music" : "Play music"}
              style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                border: "1px solid rgba(200,169,81,0.5)",
                background: playing ? "rgba(200,169,81,0.18)" : "transparent",
                color: "#C8A951",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "0.7rem",
                flexShrink: 0,
              }}
            >
              {playing ? "❚❚" : "▶"}
            </button>

            {/* Label */}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.72rem",
                color: "rgba(200,169,81,0.75)",
                letterSpacing: "0.08em",
                whiteSpace: "nowrap",
              }}
            >
              {playing ? "Now playing" : "Play music"}
            </span>

            {/* Volume slider */}
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => {
                const v = parseFloat(e.target.value);
                setVolume(v);
                if (audioRef.current) audioRef.current.volume = v;
              }}
              style={{ width: "56px", accentColor: "#C8A951", cursor: "pointer" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
