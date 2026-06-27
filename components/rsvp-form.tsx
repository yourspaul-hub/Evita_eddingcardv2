"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, ChevronDown, Hotel, ExternalLink, MapPin } from "lucide-react";
import { PremiumBotanicalBorder } from "@/components/premium-botanical-border";
import { weddingConfig } from "@/lib/wedding-config";

const LEAF = "#2D5A1B";
const SAGE = "#4A7A35";
const GOLD = "#C8A951";
const BURGUNDY = "#4A1E2B";
const CREAM = "#FAF7F2";

const NEARBY_HOTELS_URL =
  "https://www.google.com/maps/search/hotels+near+Al-Saj+Convention+Centre+Kazhakkoottam+Thiruvananthapuram";

interface FormData {
  name: string;
  phone: string;
  guests: string;
  accommodation: string;
  foodPreferences: string[];
  specialRequests: string;
}

const emptyForm: FormData = {
  name: "",
  phone: "",
  guests: "1",
  accommodation: "no",
  foodPreferences: [],
  specialRequests: "",
};

const FOOD_OPTIONS = ["Vegetarian", "Non-Vegetarian", "Gluten-Free", "Halal"];

// Shared botanical corner SVG (same design as existing component)
function BotanicalCorner({
  style,
}: {
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      style={{ position: "absolute", opacity: 0.7, zIndex: 2, pointerEvents: "none", ...style }}
    >
      <path
        d="M2 48 Q18 28 36 10 Q42 4 48 2"
        stroke={LEAF}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse
        cx="22"
        cy="28"
        rx="7"
        ry="3"
        fill={LEAF}
        transform="rotate(-45 22 28)"
      />
      <ellipse
        cx="34"
        cy="16"
        rx="6"
        ry="2.5"
        fill={SAGE}
        transform="rotate(-55 34 16)"
      />
      <circle cx="4" cy="46" r="3" fill={GOLD} opacity="0.9" />
      <circle cx="4" cy="46" r="1.5" fill="#E2C97A" />
    </svg>
  );
}

// Diamond divider
function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-2 my-6">
      <div
        className="h-px flex-1"
        style={{ background: `linear-gradient(90deg, transparent, ${GOLD})` }}
      />
      <svg width="12" height="12" viewBox="0 0 12 12">
        <path
          d="M6 0 L7.5 4.5 L12 6 L7.5 7.5 L6 12 L4.5 7.5 L0 6 L4.5 4.5 Z"
          fill={GOLD}
        />
      </svg>
      <div
        className="h-px flex-1"
        style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }}
      />
    </div>
  );
}

// Styled input wrapper
function FieldLabel({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      className="block text-xs tracking-widest uppercase mb-2"
      style={{
        fontFamily: "'Cormorant Garamond', 'Cormorant', serif",
        color: BURGUNDY,
        letterSpacing: "0.14em",
        fontWeight: 600,
      }}
    >
      {children}
      {required && (
        <span style={{ color: GOLD, marginLeft: 4 }}>*</span>
      )}
    </label>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: 8,
  background: "#FFFDF9",
  border: `1px solid ${GOLD}60`,
  color: BURGUNDY,
  fontFamily: "'Cormorant Garamond', 'Cormorant', serif",
  fontSize: "1rem",
  outline: "none",
  transition: "border-color 0.2s",
};

export function RSVPForm() {
  if (!weddingConfig.rsvp.enabled) return null;

  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const toggleFood = (pref: string) => {
    setFormData((prev) => ({
      ...prev,
      foodPreferences: prev.foodPreferences.includes(pref)
        ? prev.foodPreferences.filter((p) => p !== pref)
        : [...prev.foodPreferences, pref],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setIsSubmitted(true);
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or contact us at 2wearthehope@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative py-20 px-6"
      style={{ background: "linear-gradient(160deg, #FAF7F2 0%, #F5EFE6 60%, #FAF7F2 100%)" }}
    >
      {/* ── Top border ── */}
      <PremiumBotanicalBorder variant="light" style={{ marginBottom: "2.5rem" }} />

      <div className="max-w-xl mx-auto">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{
              fontFamily: "'Cormorant Garamond','Cormorant',serif",
              color: `rgba(107,45,62,0.55)`,
              letterSpacing: "0.35em",
            }}
          >
            Kindly Reply
          </p>
          <h2
            style={{
              fontFamily: "'CAC Champagne','Great Vibes',cursive",
              fontSize: "clamp(2.2rem,8vw,3.6rem)",
              color: BURGUNDY,
              lineHeight: 1.1,
              marginBottom: "0.3rem",
            }}
          >
            RSVP
          </h2>
          <p
            className="italic text-base"
            style={{ fontFamily: "'Cormorant Garamond','Cormorant',serif", color: "rgba(107,45,62,0.6)" }}
          >
            Please respond by{" "}
            <strong style={{ color: GOLD }}>{weddingConfig.rsvp.deadline}</strong>
          </p>
        </motion.div>

        {/* ── Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.9)",
            boxShadow: "0 4px 48px rgba(74,30,43,0.09), inset 0 1px 0 rgba(200,169,81,0.15)",
          }}
        >
          {/* Gold ornamental frame */}
          <div
            style={{
              position: "absolute",
              inset: "10px",
              border: `1.5px solid rgba(200,169,81,0.45)`,
              borderRadius: "14px",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "14px",
              border: `0.5px solid rgba(200,169,81,0.22)`,
              borderRadius: "10px",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          {/* Botanical corners */}
          <BotanicalCorner style={{ top: 10, left: 10 }} />
          <BotanicalCorner style={{ top: 10, right: 10, transform: "scaleX(-1)" }} />
          <BotanicalCorner style={{ bottom: 10, left: 10, transform: "scaleY(-1)" }} />
          <BotanicalCorner style={{ bottom: 10, right: 10, transform: "scale(-1,-1)" }} />

          {/* ── Inner content ── */}
          <div style={{ position: "relative", zIndex: 3 }}>

            {/* Default state: invite text + button */}
            {!isSubmitted && (
              <div className="px-10 pt-10 pb-6 text-center">
                <p
                  className="text-base italic leading-relaxed mb-6"
                  style={{
                    fontFamily: "'Cormorant Garamond','Cormorant',serif",
                    color: "rgba(107,45,62,0.65)",
                    maxWidth: 380,
                    margin: "0 auto 1.5rem",
                  }}
                >
                  We joyfully request the honour of your presence. Please let us know if you&apos;ll be joining us for this cherished celebration.
                </p>

                <button
                  onClick={() => setIsExpanded((v) => !v)}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-300"
                  style={{
                    background: isExpanded
                      ? "transparent"
                      : `linear-gradient(135deg, #6B2D3E, ${BURGUNDY})`,
                    color: isExpanded ? BURGUNDY : GOLD,
                    border: `1.5px solid ${isExpanded ? GOLD : "transparent"}`,
                    fontFamily: "'Cormorant Garamond','Cormorant',serif",
                    fontSize: "0.95rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    boxShadow: isExpanded ? "none" : "0 4px 20px rgba(107,45,62,0.25)",
                  }}
                >
                  {isExpanded ? "Close" : "RSVP Now"}
                  <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </button>
              </div>
            )}

            {/* ── Collapsible form ── */}
            <AnimatePresence>
              {isExpanded && !isSubmitted && (
                <motion.div
                  key="form"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <GoldDivider />

                  <form onSubmit={handleSubmit} className="px-10 pb-10 space-y-6">

                    {/* Full Name */}
                    <div>
                      <FieldLabel required>Full Name</FieldLabel>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = GOLD)}
                        onBlur={(e) => (e.target.style.borderColor = `${GOLD}60`)}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <FieldLabel>Phone Number</FieldLabel>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = GOLD)}
                        onBlur={(e) => (e.target.style.borderColor = `${GOLD}60`)}
                      />
                    </div>

                    {/* Number of Guests */}
                    <div>
                      <FieldLabel required>Number of Guests</FieldLabel>
                      <div style={{ position: "relative" }}>
                        <select
                          required
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          style={{
                            ...inputStyle,
                            appearance: "none",
                            cursor: "pointer",
                            paddingRight: "40px",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = GOLD)}
                          onBlur={(e) => (e.target.style.borderColor = `${GOLD}60`)}
                        >
                          {[1, 2, 3, 4, 5].map((n) => (
                            <option key={n} value={n}>
                              {n} {n === 1 ? "Guest" : "Guests"}
                            </option>
                          ))}
                          <option value="6+">6+ Guests</option>
                        </select>
                        <ChevronDown
                          size={16}
                          style={{
                            position: "absolute",
                            right: 14,
                            top: "50%",
                            transform: "translateY(-50%)",
                            color: GOLD,
                            pointerEvents: "none",
                          }}
                        />
                      </div>
                    </div>

                    {/* Accommodation */}
                    <div>
                      <FieldLabel>Accommodation Needed?</FieldLabel>
                      <div className="flex gap-6">
                        {[
                          { val: "no", label: "No, I'm sorted" },
                          { val: "yes", label: "Yes, I need help" },
                        ].map(({ val, label }) => {
                          const active = formData.accommodation === val;
                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => setFormData({ ...formData, accommodation: val })}
                              className="flex items-center gap-2"
                              style={{
                                fontFamily: "'Cormorant Garamond','Cormorant',serif",
                                fontSize: "1rem",
                                color: active ? BURGUNDY : "rgba(107,45,62,0.5)",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: 0,
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-flex",
                                  width: 20,
                                  height: 20,
                                  borderRadius: "50%",
                                  border: `1.5px solid ${active ? GOLD : `${GOLD}60`}`,
                                  background: active ? GOLD : "transparent",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  transition: "all 0.2s",
                                  flexShrink: 0,
                                }}
                              >
                                {active && (
                                  <span
                                    style={{
                                      width: 8,
                                      height: 8,
                                      borderRadius: "50%",
                                      background: "#fff",
                                      display: "block",
                                    }}
                                  />
                                )}
                              </span>
                              {label}
                            </button>
                          );
                        })}
                      </div>

                      {/* Hotels panel */}
                      <AnimatePresence>
                        {formData.accommodation === "yes" && (
                          <motion.div
                            key="hotels"
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 p-5 rounded-xl"
                            style={{
                              background: "linear-gradient(135deg, #F5EFE6, #FAF7F2)",
                              border: `1px solid ${GOLD}30`,
                            }}
                          >
                            <div className="flex items-start gap-3 mb-3">
                              <Hotel size={18} style={{ color: LEAF, flexShrink: 0, marginTop: 2 }} />
                              <p
                                className="text-sm leading-relaxed"
                                style={{
                                  fontFamily: "'Cormorant Garamond','Cormorant',serif",
                                  color: "rgba(107,45,62,0.75)",
                                }}
                              >
                                Several comfortable hotels are located within a short distance of Al-Saj Convention Centre. Browse options on Google Maps:
                              </p>
                            </div>
                            <a
                              href={NEARBY_HOTELS_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-200"
                              style={{
                                background: `linear-gradient(135deg, ${LEAF}, ${SAGE})`,
                                color: CREAM,
                                fontFamily: "'Cormorant Garamond','Cormorant',serif",
                                fontSize: "0.88rem",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                textDecoration: "none",
                                boxShadow: "0 3px 14px rgba(45,90,27,0.22)",
                              }}
                            >
                              <MapPin size={14} />
                              Explore Nearby Hotels
                              <ExternalLink size={12} />
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Food Preferences */}
                    <div>
                      <FieldLabel>Food Preferences</FieldLabel>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(2, 1fr)",
                          gap: "10px",
                        }}
                      >
                        {FOOD_OPTIONS.map((pref) => {
                          const selected = formData.foodPreferences.includes(pref);
                          return (
                            <button
                              key={pref}
                              type="button"
                              onClick={() => toggleFood(pref)}
                              style={{
                                padding: "10px 16px",
                                borderRadius: 8,
                                background: selected
                                  ? `linear-gradient(135deg, ${BURGUNDY}15, ${BURGUNDY}25)`
                                  : "#FFFDF9",
                                border: `1.5px solid ${selected ? GOLD : `${GOLD}45`}`,
                                color: selected ? BURGUNDY : "rgba(107,45,62,0.5)",
                                fontFamily: "'Cormorant Garamond','Cormorant',serif",
                                fontSize: "0.95rem",
                                fontWeight: selected ? 600 : 400,
                                cursor: "pointer",
                                textAlign: "left",
                                transition: "all 0.2s",
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                              }}
                            >
                              <span style={{ color: GOLD, fontSize: "0.75rem" }}>
                                {selected ? "✦" : "◉"}
                              </span>
                              {pref}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <FieldLabel>Special Requests or Allergies</FieldLabel>
                      <textarea
                        value={formData.specialRequests}
                        onChange={(e) =>
                          setFormData({ ...formData, specialRequests: e.target.value })
                        }
                        placeholder="Any dietary requirements, mobility needs, or requests we should know about…"
                        rows={3}
                        style={{
                          ...inputStyle,
                          resize: "none",
                          lineHeight: 1.6,
                        }}
                        onFocus={(e) => (e.target.style.borderColor = GOLD)}
                        onBlur={(e) => (e.target.style.borderColor = `${GOLD}60`)}
                      />
                    </div>

                    {/* Error */}
                    {submitError && (
                      <p
                        className="text-center text-sm"
                        style={{
                          fontFamily: "'Cormorant Garamond','Cormorant',serif",
                          color: "#C0392B",
                        }}
                      >
                        {submitError}
                      </p>
                    )}

                    {/* Submit */}
                    <div className="text-center pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-3 px-10 py-3.5 rounded-full transition-all duration-300"
                        style={{
                          background: isSubmitting
                            ? "rgba(107,45,62,0.5)"
                            : `linear-gradient(135deg, #6B2D3E, ${BURGUNDY})`,
                          color: GOLD,
                          border: "none",
                          fontFamily: "'Cormorant Garamond','Cormorant',serif",
                          fontSize: "1rem",
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          boxShadow: isSubmitting
                            ? "none"
                            : "0 4px 24px rgba(107,45,62,0.28)",
                          cursor: isSubmitting ? "not-allowed" : "pointer",
                        }}
                      >
                        {isSubmitting ? (
                          "Sending…"
                          <>
                            <Send size={15} />
                            Confirm Attendance
                          </>
                        )}
                      </button>
                      <p
                        className="italic text-xs mt-3"
                        style={{
                          fontFamily: "'Cormorant Garamond','Cormorant',serif",
                          color: "rgba(107,45,62,0.45)",
                        }}
                      >
                        Kindly reply by {weddingConfig.rsvp.deadline}
                      </p>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Thank You state ── */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="px-10 py-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.1, stiffness: 200 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-5"
                  style={{
                    background: `linear-gradient(135deg, ${LEAF}20, ${SAGE}30)`,
                    border: `1.5px solid ${LEAF}40`,
                  }}
                >
                  <CheckCircle size={28} style={{ color: LEAF }} />
                </motion.div>

                <h3
                  style={{
                    fontFamily: "'CAC Champagne','Great Vibes',cursive",
                    fontSize: "clamp(1.8rem,6vw,2.8rem)",
                    color: BURGUNDY,
                    marginBottom: "0.75rem",
                  }}
                >
                  Thank You!
                </h3>

                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: "'Cormorant Garamond','Cormorant',serif",
                    color: "rgba(107,45,62,0.7)",
                    maxWidth: 340,
                    margin: "0 auto",
                  }}
                >
                  We&apos;ve received your RSVP,{" "}
                  <strong style={{ color: GOLD }}>{formData.name}</strong>.<br />
                  We look forward to celebrating this beautiful day with you!
                </p>

                <div className="flex items-center justify-center gap-3 mt-6">
                  <div style={{ width: 32, height: 1, background: GOLD }} />
                  <span style={{ color: GOLD, fontSize: "1rem" }}>♦</span>
                  <div style={{ width: 32, height: 1, background: GOLD }} />
                </div>

                <p
                  className="italic text-xs mt-4"
                  style={{
                    fontFamily: "'Cormorant Garamond','Cormorant',serif",
                    color: "rgba(107,45,62,0.4)",
                  }}
                >
                  A confirmation will be sent to your provided contact details
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* ── Closing note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center italic text-sm mt-6"
          style={{
            fontFamily: "'Cormorant Garamond','Cormorant',serif",
            color: "rgba(107,45,62,0.4)",
          }}
        >
          We look forward to celebrating this beautiful day with you
        </motion.p>
      </div>

      {/* ── Bottom border ── */}
      <PremiumBotanicalBorder variant="light" style={{ marginTop: "2.5rem" }} />
    </section>
  );
}
