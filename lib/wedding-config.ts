// ============================================================
//  WEDDING INVITATION — CUSTOMIZATION CONFIG
//  Edit this file to personalise everything on the website
// ============================================================

export const weddingConfig = {

  // ── COUPLE ──────────────────────────────────────────────
  couple: {
    groomName:     "Roshan",
    groomFullName: "Roshan Abraham",
    brideName:     "Evita",
    brideFullName: "Evita Reny",
    monogramGroom: "R",
    monogramBride: "E",
    tagline:       "Two hearts, one promise",
  },

  // ── FAMILY DETAILS (shown on invite card) ───────────────
  family: {
    // Bride listed first per invitation convention
    bride: {
      fullName: "Evita Reny",
      detail:   "Daughter of Reny Varghese & Sherly Reny, 1401 Tower 8, L&T Emerald Isle, Saki Vihar Road, Powai, Mumbai \u2013 400072",
    },
    groom: {
      fullName: "Roshan Abraham",
      detail:   "Son of Roy Abraham & Reena Abraham, Palamattam House, Mulavana Junction, Kunnukuzhy, Trivandrum",
    },
  },

  // ── WEDDING DATE & VENUE ─────────────────────────────────
  wedding: {
    date:          "2026-08-29",           // ISO format YYYY-MM-DD
    displayDate:   "August 29, 2026",
    dotDate:       "29 \u00b7 08 \u00b7 26",         // dot-format shown on card
    dayOfWeek:     "Saturday",
    time:          "10:00 AM",
    venue:         "Milky Way Hall",
    venueFullName: "Al-Saj Convention Centre, Milky Way Hall",
    venueAddress:  "Kazhakkoottam, Thiruvananthapuram, Kerala 695582",
    venueMapCode:  "HVG9+6P6, Kazhakuttam, Vadakkumbhagam, Kazhakkoottam, Thiruvananthapuram, Kerala 695582",
    googleMapsUrl: "https://maps.google.com/?q=Al-Saj+Convention+Centre+Milky+Way+Hall+Kazhakkoottam+Thiruvananthapuram",
  },

  // ── ORDER OF CEREMONY ────────────────────────────────────
  events: [
    { time: "10:15 AM", title: "Guest Arrival & Seating",   description: "Welcome and seating of guests",          icon: "" },
    { time: "10:30 AM", title: "Opening Prayer",            description: "Welcome and opening prayer service",     icon: "" },
    { time: "10:40 AM", title: "Prayer & Worship",          description: "Praise and worship service",             icon: "" },
    { time: "11:00 AM", title: "Holy Matrimony",            description: "Exchange of vows and rings",             icon: "" },
    { time: "12:15 PM", title: "Closing Prayer",            description: "Closing prayer and blessing",            icon: "" },
    { time: "12:45 PM", title: "Wedding Reception & Lunch", description: "Reception lunch and celebrations",       icon: "" },
  ],

  // ── IMAGES ──────────────────────────────────────────────
  images: {
    couple:        "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1200",
    couplePortrait:"https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=800",
    caricature:    "/caricature.png",
    gallery: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1522204657746-fccce1161d15?auto=format&fit=crop&q=80&w=600",
    ],
  },

  // ── MUSIC ───────────────────────────────────────────────
  music: {
    enabled:  true,
    url:      "/music.mp3",   // Wedding Card — soft piano & strings by Paul Isac
    autoplay: true,
  },

  // ── FONTS ───────────────────────────────────────────────
  fonts: {
    heading:   "Playfair Display",
    script:    "Great Vibes",
    champagne: "CAC Champagne",
    body:      "Montserrat",
  },

  // ── COLORS ──────────────────────────────────────────────
  colors: {
    primary:    "#6B2D3E",
    dark:       "#4A1E2B",
    accent:     "#C8A951",
    cream:      "#FAF7F2",
    text:       "#2C1018",
    darkGreen:  "#1D4019",
    leafGreen:  "#2D5A1B",
    sageGreen:  "#4A7A35",
  },

  // ── RSVP ────────────────────────────────────────────────
  rsvp: {
    enabled:      true,
    deadline:     "July 25, 2026",
    contactPhone: "9930998098",
    contactName:  "Reny Varghese",
    contactEmail: "wedding@example.com",
    formspreeId:  "",
  },

  // ── MESSAGES ────────────────────────────────────────────
  messages: {
    saveTheDate:     "Save The Date",
    formalFollow:    "Formal invitation to follow...",
    togetherWith:    "Together with their families,",
    requestPresence: "joyfully invite you to celebrate the marriage of",
    dressCode:       "Smart Casual \u00b7 Traditional Attire Welcome",
    closingLine:     "Sincerely",
  },
};

export type WeddingConfig = typeof weddingConfig;
