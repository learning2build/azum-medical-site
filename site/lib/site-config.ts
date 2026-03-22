/**
 * Site configuration — update these values to change site-wide content.
 * Booking links to the clinic's existing Kareo scheduling system.
 */

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Azum+Medical+Reviews" as const;

export const SITE_CONFIG = {
  // External booking (Kareo)
  bookingUrl: "https://practice.kareo.com/azummedical",

  // Contact
  phone: {
    tollFree: "877-333-AZUM",
    tollFreeTel: "tel:+18773332986",
    local: "346-999-AZUM",
    localTel: "tel:+13469992986",
  },
  email: "info@azummedical.com",

  // Location — used for Hero kicker and TrustStrip
  locationCity: "Houston",

  // Address (line1 for compact display; addressDisplay for Contact/Location page)
  address: {
    line1: "17115 Red Oak Dr Ste 213",
    line2: "Houston, TX",
    zip: "77090",
    line3: "Houston, TX",
    /** Display format for Contact / Location page (matches azummedical.com/location) */
    display: "17115 Red Oak Drive, Suite 213, Houston, TX 77090",
  },
  /** Google Maps URL for directions (no API key required) */
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=17115+Red+Oak+Drive+Suite+213+Houston+TX+77090",

  // Office hours (structured for footer, contact, etc.)
  hours: {
    weekday: { days: "Mon–Thu", time: "8:00 AM – 1:00 PM" },
    weekend: {
      days: "Fri–Sun",
      status: "Closed",
      note: "Telemedicine available",
    },
  },

  // Social / Reviews (footer icons + testimonials link)
  googleReviewsUrl: GOOGLE_REVIEWS_URL,
  /** Matches azummedical.com footer; opens in new tab from site footer. */
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61587047326376",
    instagram: "https://www.instagram.com/azum_medical/",
    youtube: "https://www.youtube.com/@Azum_Medical",
    linkedin: "https://www.linkedin.com/azum-medical/",
    google: GOOGLE_REVIEWS_URL,
  },
} as const;
