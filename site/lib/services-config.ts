/**
 * Services content — single source for nav, homepage cards, and service pages.
 * Content informed by azummedical.com (preventative, chronic care, telemedicine).
 */

export const SERVICES = [
  {
    slug: "preventative-care",
    title: "Preventative Care",
    shortDescription:
      "Proactive health screenings and wellness checks to keep you feeling your best.",
    description:
      "Stay ahead of your health with regular screenings, wellness exams, and preventive care designed to maintain long-term health and vitality.",
    body: [
      "At AZUM Medical we believe prevention is the best medicine. Our preventative care services include annual wellness visits, age-appropriate health screenings, immunizations, and lifestyle counseling to help you stay healthy for years to come.",
      "We focus on identifying risk factors early and working with you on a personalized plan—whether that’s nutrition, exercise, or managing stress—so you can thrive.",
    ],
  },
  {
    slug: "acute-care",
    title: "Acute Care",
    shortDescription:
      "Same-day and urgent care for illness, injury, and sudden health concerns.",
    description:
      "When you need prompt attention for an illness or injury, we’re here to provide timely, compassionate acute care.",
    body: [
      "Our acute care services cover common illnesses such as colds, flu, infections, and minor injuries. We offer same-day or next-day appointments when possible so you can get the care you need without a long wait.",
      "Whether you have a sore throat, urinary tract infection, or a sprain, our team will evaluate you, recommend treatment, and follow up as needed—all within a familiar, patient-centered setting.",
    ],
  },
  {
    slug: "chronic-condition-management",
    title: "Chronic Condition Management",
    shortDescription:
      "Personalized care for diabetes, hypertension, and other long-term conditions.",
    description:
      "We help you take control of chronic conditions like diabetes and hypertension with personalized, ongoing care.",
    body: [
      "Managing a chronic condition can feel overwhelming. At AZUM Medical we work with you to create a clear, sustainable plan that fits your life. We support conditions such as diabetes, hypertension, high cholesterol, asthma, and other metabolic or long-term health needs.",
      "Through regular check-ins, medication management, and lifestyle guidance, we aim to improve your day-to-day well-being and reduce the risk of complications.",
    ],
  },
  {
    slug: "telemedicine",
    title: "Telemedicine",
    shortDescription:
      "Connect with your healthcare provider from the comfort of your home.",
    description:
      "Healthcare at your fingertips—connect with your provider via secure video visits from home.",
    body: [
      "Telemedicine visits let you see your provider without traveling to the office. They’re ideal for follow-ups, medication reviews, minor illnesses, and routine questions when an in-person exam isn’t required.",
      "We use a secure, HIPAA-compliant platform so you can have a private, face-to-face conversation with your doctor from your phone, tablet, or computer. Schedule a telemedicine visit when it’s convenient for you.",
    ],
  },
  {
    slug: "holistic-wellness",
    title: "Holistic Wellness Services",
    shortDescription:
      "Whole-person care that supports mind, body, and lifestyle for lasting wellness.",
    description:
      "Our holistic wellness approach addresses the whole person—physical health, stress, sleep, and lifestyle—so you can feel your best.",
    body: [
      "Holistic wellness at AZUM Medical goes beyond treating symptoms. We look at nutrition, activity, sleep, stress, and mental well-being to create a plan that fits your life and goals.",
      "Whether you want to optimize energy, improve sleep, or build sustainable healthy habits, we work with you to design a personalized path to lasting wellness.",
    ],
  },
  {
    slug: "weight-management",
    title: "Weight Management",
    shortDescription:
      "Personalized support to reach and maintain a healthy weight in a sustainable way.",
    description:
      "Structured, compassionate support to help you reach your weight goals through evidence-based strategies and ongoing care.",
    body: [
      "Our weight management program is designed around you—your health history, goals, and lifestyle. We combine medical oversight with practical guidance on nutrition, activity, and behavior so you can make lasting changes.",
      "We focus on sustainable habits and overall health, not quick fixes. Regular check-ins help keep you on track and adjust the plan as needed.",
    ],
  },
  {
    slug: "dot-physicals",
    title: "DOT Physicals",
    shortDescription:
      "Department of Transportation physical exams for commercial drivers.",
    description: "DOT physical examinations for commercial driver’s license requirements.",
    body: [],
    comingSoon: true,
  },
  {
    slug: "immigration-physicals",
    title: "Immigration Physicals",
    shortDescription:
      "Civil surgeon exams required for immigration and green card applications.",
    description: "Immigration physical examinations performed by a designated civil surgeon.",
    body: [],
    comingSoon: true,
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];

export function getServiceBySlug(slug: string) {
  const s = SERVICES.find((s) => s.slug === slug);
  return s && !("comingSoon" in s && s.comingSoon) ? s : null;
}

/** Slugs for services that have a dedicated page (excludes coming soon). */
export function getAvailableServiceSlugs(): ServiceSlug[] {
  return SERVICES.filter(
    (s) => !("comingSoon" in s && s.comingSoon)
  ).map((s) => s.slug);
}

export function getAllServiceSlugs(): ServiceSlug[] {
  return SERVICES.map((s) => s.slug);
}

export function isServiceComingSoon(
  s: (typeof SERVICES)[number]
): s is (typeof SERVICES)[number] & { comingSoon: true } {
  return "comingSoon" in s && s.comingSoon === true;
}
