"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Mail, MessageSquare } from "lucide-react";
import { weddingConfig } from "@/lib/wedding-config";

export function RSVPForm() {
  const [form, setForm] = useState({ name: "", email: "", guests: "1", attending: "yes", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  if (!weddingConfig.rsvp.enabled) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    if (weddingConfig.rsvp.formspreeId) {
      try {
        const res = await fetch(`https://formspree.io/f/${weddingConfig.rsvp.formspreeId}`, {
          method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        });
        setStatus(res.ok ? "sent" : "error");
      } catch { setStatus("error"); }
    } else {
      setTimeout(() => setStatus("sent"), 1000);
    }
  };

  return (
    <section className="py-20 px-6" style={{ background: "#FAF7F2" }}>
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-10">
          <p className="font-sans text-xs tracking-widest uppercase mb-3"
            style={{ color: "rgba(107,45,62,0.55)", letterSpacing: "0.35em" }}>Kindly Reply</p>
          <h2 className="font-script mb-1" style={{ fontSize: "clamp(2rem,7vw,3.2rem)", color: "#4A1E2B" }}>
            Will you join us?
          </h2>
          <p className="font-cormorant italic text-base mb-4" style={{ color: "rgba(107,45,62,0.6)" }}>
            Please respond by <strong>{weddingConfig.rsvp.deadline}</strong>
          </p>
          {/* Inline ornament divider */}
          <div className="flex items-center gap-3 mx-auto" style={{ width: "min(240px,70%)" }}>
            <div className="flex-1 h-px" style={{ background: "rgba(107,45,62,0.2)" }} />
            <span style={{ color: "rgba(107,45,62,0.35)", fontSize: "0.7rem" }}>❧</span>
            <div className="flex-1 h-px" style={{ background: "rgba(107,45,62,0.2)" }} />
          </div>
        </motion.div>

        {/* Form card */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="rounded-2xl p-8 md:p-10"
          style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(107,45,62,0.15)", boxShadow: "0 4px 40px rgba(107,45,62,0.08)" }}>

          {status === "sent" ? (
            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "rgba(107,45,62,0.08)", border: "2px solid #6B2D3E" }}>
                <Check size={26} style={{ color: "#6B2D3E" }} />
              </div>
              <h3 className="font-playfair text-2xl mb-2" style={{ color: "#4A1E2B" }}>Thank you!</h3>
              <p className="font-sans text-sm" style={{ color: "rgba(107,45,62,0.65)" }}>
                We've received your RSVP and can't wait to celebrate with you.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Attending toggle */}
              <div className="flex rounded-xl overflow-hidden" style={{ border: "1px solid rgba(107,45,62,0.25)" }}>
                {["yes", "no"].map(opt => (
                  <button key={opt} type="button" onClick={() => setForm({ ...form, attending: opt })}
                    className="flex-1 py-3 font-sans text-xs tracking-wider uppercase transition-all duration-200"
                    style={{
                      background: form.attending === opt ? "#6B2D3E" : "transparent",
                      color: form.attending === opt ? "#FAF7F2" : "rgba(107,45,62,0.55)",
                      letterSpacing: "0.15em",
                    }}>
                    {opt === "yes" ? "✓  Joyfully Accept" : "✗  Regretfully Decline"}
                  </button>
                ))}
              </div>

              {/* Name */}
              <div>
                <label className="font-sans text-xs uppercase tracking-widest mb-2 block" style={{ color: "rgba(107,45,62,0.55)", letterSpacing: "0.15em" }}>
                  Full Name *
                </label>
                <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name" className="burg-input" />
              </div>

              {/* Email */}
              <div>
                <label className="font-sans text-xs uppercase tracking-widest mb-2 block" style={{ color: "rgba(107,45,62,0.55)", letterSpacing: "0.15em" }}>
                  Email
                </label>
                <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com" className="burg-input" />
              </div>

              {/* Guests */}
              {form.attending === "yes" && (
                <div>
                  <label className="font-sans text-xs uppercase tracking-widest mb-2 block" style={{ color: "rgba(107,45,62,0.55)", letterSpacing: "0.15em" }}>
                    Number of Guests
                  </label>
                  <select value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })}
                    className="burg-input" style={{ appearance: "none" }}>
                    {["1", "2", "3", "4", "5"].map(n => (
                      <option key={n} value={n}>{n} {n === "1" ? "Guest" : "Guests"}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Message */}
              <div>
                <label className="font-sans text-xs uppercase tracking-widest mb-2 block" style={{ color: "rgba(107,45,62,0.55)", letterSpacing: "0.15em" }}>
                  Message (optional)
                </label>
                <textarea rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Share your wishes for the couple…" className="burg-input resize-none" />
              </div>

              {status === "error" && (
                <p className="font-sans text-sm" style={{ color: "#C0392B" }}>Something went wrong. Please try again.</p>
              )}

              <button type="submit" disabled={status === "sending"}
                className="w-full py-4 rounded-xl font-sans text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300"
                style={{ background: "linear-gradient(135deg,#6B2D3E,#4A1E2B)", color: "#FAF7F2", letterSpacing: "0.25em", opacity: status === "sending" ? 0.7 : 1 }}>
                {status === "sending" ? <><span className="animate-spin inline-block">◌</span> Sending…</> : <><Send size={13} /> Send RSVP</>}
              </button>
            </form>
          )}
        </motion.div>

        {/* Contact alternatives */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-8 text-center">
          <p className="font-cormorant italic text-sm mb-4" style={{ color: "rgba(107,45,62,0.5)" }}>
            If you have any questions about the day or your RSVP, please feel free to reach out to
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`tel:${weddingConfig.rsvp.groomPhone}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full font-sans text-xs"
              style={{ border: "1px solid rgba(107,45,62,0.25)", color: "#6B2D3E" }}>
              <MessageSquare size={11} /> {weddingConfig.couple.groomName}: {weddingConfig.rsvp.groomPhone}
            </a>
            <a href={`tel:${weddingConfig.rsvp.bridePhone}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full font-sans text-xs"
              style={{ border: "1px solid rgba(107,45,62,0.25)", color: "#6B2D3E" }}>
              <MessageSquare size={11} /> {weddingConfig.couple.brideName}: {weddingConfig.rsvp.bridePhone}
            </a>
            <a href={`mailto:${weddingConfig.rsvp.contactEmail}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full font-sans text-xs"
              style={{ border: "1px solid rgba(107,45,62,0.25)", color: "#6B2D3E" }}>
              <Mail size={11} /> {weddingConfig.rsvp.contactEmail}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
