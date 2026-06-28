"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, ChevronDown, Hotel, ExternalLink, MapPin } from "lucide-react";
import { PremiumBotanicalBorder } from "@/components/premium-botanical-border";
import { weddingConfig } from "@/lib/wedding-config";

const LEAF = "#2D5A1B";
const GOLD = "#C8A951";
const BURGUNDY = "#4A1E2B";
const CREAM = "#FAF7F2";

const WEB3FORMS_KEY = "1dbd3504-3b35-4b90-b947-e8821527c0b9";

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

const FOOD_OPTIONS = ["Vegetarian", "Non-Vegetarian", "Jain"];

function BotanicalCorner({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="56" height="56" viewBox="0 0 56 56" fill="none"
      style={{ transform: flip ? "scale(-1,1)" : undefined, opacity: 0.55 }}
    >
      <path d="M4 52 Q8 32 28 28 Q32 8 52 4" stroke={LEAF} strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <ellipse cx="18" cy="36" rx="6" ry="3" fill={LEAF} opacity="0.5" transform="rotate(-40 18 36)" />
      <ellipse cx="34" cy="18" rx="6" ry="3" fill={LEAF} opacity="0.5" transform="rotate(-50 34 18)" />
      <ellipse cx="10" cy="46" rx="4" ry="2" fill={LEAF} opacity="0.4" transform="rotate(-20 10 46)" />
      <ellipse cx="46" cy="10" rx="4" ry="2" fill={LEAF} opacity="0.4" transform="rotate(-70 46 10)" />
    </svg>
  );
}

function GoldDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "16px 0" }}>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, transparent, ${GOLD})` }} />
      <span style={{ color: GOLD, fontSize: 10 }}>â—†</span>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to left, transparent, ${GOLD})` }} />
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label style={{
      display: "block", marginBottom: 6, fontSize: 10,
      letterSpacing: "0.18em", textTransform: "uppercase",
      color: "rgba(74,30,43,0.6)", fontFamily: "sans-serif",
    }}>
      {children}
    </label>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "10px 14px", borderRadius: 6,
  border: `1px solid ${GOLD}55`, background: "#FFFDF9",
  color: BURGUNDY, fontSize: 14, fontFamily: "Georgia, serif",
  outline: "none", boxSizing: "border-box",
};

export function RSVPForm() {
  if (!weddingConfig.rsvp.enabled) return null;

  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const toggleFood = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      foodPreferences: prev.foodPreferences.includes(option)
        ? prev.foodPreferences.filter((f) => f !== option)
        : [...prev.foodPreferences, option],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const body = {
        access_key: WEB3FORMS_KEY,
        subject: `ğŸ’Œ New RSVP â€” ${formData.name} (${formData.guests} guest${formData.guests === "1" ? "" : "s"})`,
        from_name: "Evita & Roshan Wedding",
        Name: formData.name,
        Phone: formData.phone || "â€”",
        "Number of Guests": formData.guests,
        "Accommodation Needed": formData.accommodation === "yes" ? "Yes â€” needs hotel help" : "No â€” sorted",
        "Food Preferences": formData.foodPreferences.length
          ? formData.foodPreferences.join(", ")
          : "None specified",
        "Special Requests": formData.specialRequests || "â€”",
        botcheck: "",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
      });

      const json = await res.json();
      if (json.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-6" style={{ background: CREAM }}>
      <div className="max-w-xl mx-auto">
        {/* Top botanical border */}
        <PremiumBotanicalBorder />

        {/* Header */}
        <div style={{ textAlign: "center", padding: "20px 0 12px" }}>
          <p style={{
            fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase",
            color: "rgba(107,45,62,0.5)", marginBottom: 6, fontFamily: "sans-serif",
          }}>
            Kindly Reply
          </p>
          <h2 style={{ fontFamily: "'CAC Champagne', cursive", color: BURGUNDY, fontSize: 38, margin: 0 }}>
            RSVP
          </h2>
          <p style={{
            fontFamily: "sans-serif", fontSize: 10, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "rgba(107,45,62,0.55)",
            marginTop: 8, marginBottom: 0,
          }}>
            Kindly reply by {weddingConfig.rsvp.deadline}
          </p>
        </div>

        <GoldDivider />

        {/* Card */}
        <div style={{
          border: `1px solid ${GOLD}66`,
          borderRadius: 4,
          padding: 28,
          position: "relative",
          background: "#FFFDF9",
        }}>
          {/* Corners */}
          <div style={{ position: "absolute", top: 8, left: 8 }}><BotanicalCorner /></div>
          <div style={{ position: "absolute", top: 8, right: 8 }}><BotanicalCorner flip /></div>

          {isSubmitted ? (
            /* â”€â”€ Thank You â”€â”€ */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: "center", padding: "24px 0" }}
            >
              <CheckCircle size={48} color={GOLD} style={{ margin: "0 auto 16px" }} />
              <h3 style={{
                fontFamily: "'CAC Champagne', cursive", color: BURGUNDY,
                fontSize: 28, margin: "0 0 8px",
              }}>
                Thank You, {formData.name}!
              </h3>
              <p style={{
                color: "rgba(74,30,43,0.7)", fontFamily: "Georgia, serif",
                fontSize: 14, margin: 0,
              }}>
                We've received your RSVP and can't wait to celebrate with you.
              </p>
            </motion.div>
          ) : (
            <>
              {/* Invite text + toggle button */}
              <div style={{ textAlign: "center", paddingTop: 16, paddingBottom: 8 }}>
                <p style={{
                  fontFamily: "Georgia, serif", color: "rgba(74,30,43,0.75)",
                  fontSize: 14, lineHeight: 1.7, marginBottom: 20,
                }}>
                  We joyfully invite you to celebrate with us.<br />
                  Please let us know if you'll be joining.
                </p>

                <button
                  onClick={() => setIsExpanded((v) => !v)}
                  style={{
                    background: isExpanded ? "transparent" : BURGUNDY,
                    color: isExpanded ? BURGUNDY : GOLD,
                    border: `1px solid ${BURGUNDY}`,
                    borderRadius: 3,
                    padding: "10px 28px",
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontFamily: "sans-serif",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  {isExpanded ? "Close" : "RSVP Now"}
                  <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ display: "flex" }}
                  >
                    <ChevronDown size={14} />
                  </motion.span>
                </button>
              </div>

              {/* Collapsible form */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    key="form"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <GoldDivider />
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>

                      {/* Name */}
                      <div>
                        <FieldLabel>Full Name *</FieldLabel>
                        <input
                          required style={inputStyle} value={formData.name}
                          onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                          placeholder="Your full name"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <FieldLabel>Phone Number</FieldLabel>
                        <input
                          type="tel" style={inputStyle} value={formData.phone}
                          onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                          placeholder="+91 00000 00000"
                        />
                      </div>

                      {/* Guests */}
                      <div>
                        <FieldLabel>Number of Guests *</FieldLabel>
                        <select
                          required style={{ ...inputStyle, cursor: "pointer" }}
                          value={formData.guests}
                          onChange={(e) => setFormData((p) => ({ ...p, guests: e.target.value }))}
                        >
                          {[1, 2, 3, 4, 5, 6].map((n) => (
                            <option key={n} value={String(n)}>
                              {n} {n === 1 ? "guest" : "guests"}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Accommodation */}
                      <div>
                        <FieldLabel>Do you need accommodation assistance?</FieldLabel>
                        <div style={{ display: "flex", gap: 10 }}>
                          {[
                            { val: "yes", label: "Yes please" },
                            { val: "no", label: "No, I'm sorted" },
                          ].map(({ val, label }) => (
                            <button
                              key={val} type="button"
                              onClick={() => setFormData((p) => ({ ...p, accommodation: val }))}
                              style={{
                                flex: 1, padding: "9px 0", borderRadius: 4, fontSize: 12,
                                fontFamily: "sans-serif", cursor: "pointer",
                                border: `1px solid ${formData.accommodation === val ? GOLD : GOLD + "55"}`,
                                background: formData.accommodation === val ? BURGUNDY : "transparent",
                                color: formData.accommodation === val ? GOLD : "rgba(74,30,43,0.65)",
                              }}
                            >
                              {label}
                            </button>
                          ))}
                        </div>

                        {/* Hotel panel */}
                        <AnimatePresence>
                          {formData.accommodation === "yes" && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              style={{ overflow: "hidden" }}
                            >
                              <div style={{
                                marginTop: 10, padding: "12px 14px", borderRadius: 6,
                                border: `1px solid ${GOLD}44`, background: `${GOLD}0A`,
                                display: "flex", alignItems: "flex-start", gap: 10,
                              }}>
                                <Hotel size={16} color={GOLD} style={{ marginTop: 2, flexShrink: 0 }} />
                                <div>
                                  <p style={{
                                    margin: "0 0 6px", fontSize: 12,
                                    color: BURGUNDY, fontFamily: "Georgia, serif",
                                  }}>
                                    Several hotels are available near the venue.
                                  </p>
                                  <a
                                    href={NEARBY_HOTELS_URL}
                                    target="_blank" rel="noopener noreferrer"
                                    style={{
                                      display: "inline-flex", alignItems: "center", gap: 5,
                                      fontSize: 11, color: GOLD, textDecoration: "none",
                                      letterSpacing: "0.1em", textTransform: "uppercase",
                                    }}
                                  >
                                    <MapPin size={11} /> View nearby hotels <ExternalLink size={10} />
                                  </a>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Food Preferences */}
                      <div>
                        <FieldLabel>Food Preferences</FieldLabel>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                          {FOOD_OPTIONS.map((opt) => {
                            const selected = formData.foodPreferences.includes(opt);
                            return (
                              <button
                                key={opt} type="button" onClick={() => toggleFood(opt)}
                                style={{
                                  padding: "9px 8px", borderRadius: 4, fontSize: 12,
                                  fontFamily: "sans-serif", cursor: "pointer",
                                  border: `1px solid ${selected ? GOLD : GOLD + "55"}`,
                                  background: selected ? BURGUNDY : "transparent",
                                  color: selected ÓÓˆœ™Ø˜JÍÌËJH‹ˆ\Ü^Nˆ™›^‹[YÛ’][\Îˆ˜Ù[\ˆ‹ˆ\İYPÛÛ[ˆ˜Ù[\ˆ‹Ø\ˆ‹ˆ_Bˆ‚ˆÜ[ˆİ[O^ŞÈ›ÛÚ^™NˆH_OÜÙ[XİYÈ¸¥áˆˆˆ¸¥áÈŸOÜÜ[ˆÛÜBˆØ]Û‚ˆ
NÂˆJ_BˆÙ]‚ˆÙ]‚‚ˆËÊˆÜXÚX[™\]Y\İÈ
‹ßBˆ]‚ˆšY[X™[”ÜXÚX[™\]Y\İÏÑšY[X™[‚ˆ^\™XBˆ›İÜÏ^ÌßBˆİ[O^ŞÈ‹‹š[œ]İ[K™\Ú^™Nˆ™\XØ[ˆ_Bˆ˜[YO^Ù›Ü›Q]KœÜXÚX[™\]Y\İßBˆÛÚ[™ÙO^ÊJHOˆÙ]›Ü›Q]J

HOˆ
È‹‹œÜXÚX[™\]Y\İÎˆK\™Ù]˜[YHJJ_BˆXÙZÛ\H‘Y]\H™YYËXØÙ\ÜÚXš[]H™\]Z\™[Y[Ë[][™È[Ùx )ˆ‚ˆÏ‚ˆÙ]‚‚ˆËÊˆ\œ›Üˆ
‹ßBˆÜİX›Z]\œ›Üˆ	‰ˆ
ˆİ[O^ŞÈÛÛÜˆˆØÌÎL˜ˆ‹›ÛÚ^™NˆLË›Û˜[Z[NˆœØ[œË\Ù\šYˆ‹X\™Ú[ˆ_O‚ˆÜİX›Z]\œ›ÜŸBˆÜ‚ˆ
_B‚ˆËÊˆİX›Z]
‹ßBˆ]Û‚ˆ\OHœİX›Z]ˆ\ØX›Y^Ú\ÔİX›Z][™ßBˆİ[O^ŞÂˆ˜XÚÙÜ›İ[™ˆ\ÔİX›Z][™ÈÈœ™Ø˜JÍÌËJHˆˆ•T‘ÕS‘KˆÛÛÜˆÓÓ›Ü™\ˆ››Û™H‹›Ü™\”˜Y]\ÎˆËˆY[™ÎˆŒLÜ‹›ÛÚ^™NˆLK]\”ÜXÚ[™ÎˆŒŒ™[H‹ˆ^˜[œÙ›Ü›Nˆ\\˜Ø\ÙH‹›Û˜[Z[NˆœØ[œË\Ù\šYˆ‹ˆİ\œÛÜˆ\ÔİX›Z][™ÈÈ››İX[İÙYˆˆœÚ[\ˆ‹ˆ\Ü^Nˆ™›^‹[YÛ’][\Îˆ˜Ù[\ˆ‹ˆ\İYPÛÛ[ˆ˜Ù[\ˆ‹Ø\ˆÚYˆŒL	H‹ˆ_Bˆ‚ˆÚ\ÔİX›Z][™ÈÈ
ˆ”Ù[™[™ø )ˆ‚ˆ
Hˆ
ˆ‚ˆÙ[™Ú^™O^ÌLßHÏˆÛÛ™š\›H][™[˜ÙBˆÏ‚ˆ
_BˆØ]Û‚ˆÙ›Ü›O‚ˆÛ[İ[Û‹™]‚ˆ
_BˆĞ[š[X]T™\Ù[˜ÙO‚ˆÏ‚ˆ
_BˆÙ]‚‚ˆËÊˆ›İÛH›İ[šXØ[›Ü™\ˆ
‹ßBˆ™[Z][P›İ[šXØ[›Ü™\ˆİ[O^ŞÈX\™Ú[•ÜˆŒ_HÏ‚ˆÙ]‚ˆÜÙXİ[Û‚ˆ
NÂŸB