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
      "Preventive care for lifelong health—women’s health support, annual physicals, immunizations, and personalized wellness at AZUM Medical in Houston.",
    body: [
      "Stay proactive about your health with personalized preventive care, including screenings, family planning, menopause support, annual physicals, and vaccinations.",
      "We combine vital sign monitoring, recommended screenings, and lifestyle guidance so you can build long-term well-being with a team you trust.",
    ],
  },
  {
    slug: "acute-care",
    title: "Acute Care",
    shortDescription:
      "Same-day and urgent care for illness, injury, and sudden health concerns.",
    description:
      "Comprehensive acute care at AZUM Medical for non-life-threatening issues—sports physicals, UTIs, minor burns and skin infections, ear pain, and more.",
    body: [
      "We address a variety of non-life-threatening medical issues promptly and effectively, with an experienced team focused on the care you need when you need it.",
      "Services include sports physicals, urinary tract infection care, treatment for minor burns or skin infections, ear pain management, and more—visit us for fast, reliable, professional care.",
    ],
  },
  {
    slug: "chronic-condition-management",
    title: "Chronic Condition Management",
    shortDescription:
      "Personalized care for diabetes, hypertension, and other long-term conditions.",
    description:
      "Chronic disease management at AZUM Medical—diabetes care, hypertension support, and cholesterol management for better quality of life.",
    body: [
      "Manage your health and your future with comprehensive diabetes care, blood pressure monitoring with lifestyle and medication support, and cholesterol screenings with heart-healthy guidance.",
      "Our approach empowers you to live well despite chronic conditions through personalized plans and ongoing support.",
    ],
  },
  {
    slug: "telemedicine",
    title: "Telemedicine",
    shortDescription:
      "Connect with your healthcare provider from the comfort of your home.",
    description:
      "Convenient telemedicine at AZUM Medical—schedule online, join secure virtual visits, and get follow-up care from home.",
    body: [
      "Your health, at your convenience. Consult with trusted medical professionals from the comfort of your home using our secure, HIPAA-compliant platform.",
      "Schedule your virtual visit online, join by video or chat, then receive follow-up instructions and prescriptions as needed—without travel when an in-person exam isn’t required.",
    ],
  },
  {
    slug: "holistic-wellness",
    title: "Holistic Wellness Services",
    shortDescription:
      "Whole-person care that supports mind, body, and lifestyle for lasting wellness.",
    description:
      "Holistic wellness at AZUM Medical—meal prep guidance, nutrition support, and weight goals coaching for a balanced, healthy life.",
    body: [
      "Empower your wellness journey with a comprehensive approach: customized meal plans, shopping tips, portion guidance, and support for sustainable weight goals.",
      "We combine coaching, metabolic awareness, and practical strategies so you can thrive long term.",
    ],
  },
  {
    slug: "weight-management",
    title: "Weight Management",
    shortDescription:
      "Personalized support to reach and maintain a healthy weight in a sustainable way.",
    description:
      "Medically supervised weight management at AZUM Medical—research-based program with counseling and GLP-1 options coming soon.",
    body: [
      "Our upcoming weight loss program will pair one-on-one education and counseling with prescription appetite support (including GLP-1), tailored to your metabolism.",
      "Exercise access and group workout sessions will be part of the offering. Contact us or book an appointment for care today; program details coming soon.",
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
