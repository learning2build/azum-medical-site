/**
 * Site configuration — update these values to change site-wide content.
 * Booking links to the clinic's existing Kareo scheduling system.
 */

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

  // Office hours
  hours: {
    weekdays: "Mon–Thu: 8am–1pm",
    weekends: "Fri–Sun: Office closed (TeleMedicine available)",
  },

  // Social / Reviews
  googleReviewsUrl: "https://www.google.com/search?q=azum+medical+reviews",
} as const;
