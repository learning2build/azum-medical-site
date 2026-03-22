import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

const PHILOSOPHY_INTRO =
  "Our core purpose, values, and long-term aspiration include 5 vital elements:";

const PHILOSOPHY_PILLARS = [
  {
    title: "Patient-Centered Care",
    body: "To provide compassionate, high-quality healthcare that prioritizes the well-being of our patients and their families, ensuring every individual receives personalized attention and support.",
  },
  {
    title: "Community Health",
    body: "To be a leading healthcare provider in our community, dedicated to improving health outcomes through accessible, innovative, and holistic medical services.",
  },
  {
    title: "Quality and Excellence",
    body: "To deliver exceptional medical care through advanced technology and evidence-based practices, fostering a culture of excellence and continuous improvement in all we do.",
  },
  {
    title: "Education and Empowerment",
    body: "To empower our patients through education and preventive care, fostering healthier communities by encouraging informed health choices and active participation in their wellness journey.",
  },
  {
    title: "Inclusive Care",
    body: "To create a welcoming and inclusive environment where all patients feel valued and respected, providing equitable access to comprehensive healthcare services for everyone from A to Z!",
  },
] as const;

const APPROACH_CARDS = [
  {
    src: "/about/approach-patient-006.jpg",
    alt: "Patient-centered care at AZUM Medical",
    title: "Patient-Centered Care.",
  },
  {
    src: "/about/approach-evidence-037.jpg",
    alt: "Evidence-based medical treatments",
    title: "Evidence-Based Treatments.",
  },
  {
    src: "/about/approach-community-036.jpg",
    alt: "Community-focused healthcare",
    title: "Community Focused.",
  },
] as const;

export function AboutPageContent() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center px-4 py-11 text-center sm:py-12 lg:py-14">
        <Image
          src="/about/hero-019.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#5b4d9e]/88 to-[#4a3d82]/90"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="font-serif text-2xl font-semibold leading-snug text-balance text-white sm:text-[1.625rem] lg:text-[1.75rem]">
            About Us
          </h1>
        </div>
      </section>

      <section className="border-t border-[#ebe8f0] bg-white py-14 lg:py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[#ebe8f0] shadow-sm lg:aspect-[4/3]">
            <Image
              src="/about/philosophy-009.jpg"
              alt="Care team at AZUM Medical"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[#1f2937] sm:text-3xl">
              Practice Philosophy at Azum Medical
            </h2>
            <p className="mt-4 text-base font-medium text-[#1f2937]">
              {PHILOSOPHY_INTRO}
            </p>
            <ul className="mt-6 space-y-5">
              {PHILOSOPHY_PILLARS.map((item) => (
                <li key={item.title}>
                  <p className="text-sm leading-relaxed text-[#4b5563] sm:text-base">
                    <span className="font-semibold text-[#5b4d9e]">
                      {item.title}:
                    </span>{" "}
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-[#ebe8f0] bg-[#faf9f7] py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-2xl font-semibold text-[#1f2937] sm:text-3xl">
            Our Approach to Care
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {APPROACH_CARDS.map((card) => (
              <div
                key={card.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#ebe8f0] bg-white shadow-sm"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="px-4 py-4 text-center font-serif text-lg font-semibold text-[#1f2937] sm:text-xl">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#ebe8f0] bg-white py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg text-[#4b5563]">
            Ready to experience care built around you?
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] rounded-full bg-[#5b4d9e] px-6 py-3 text-center font-semibold text-white shadow-[0_2px_12px_rgba(74,61,130,0.35)] transition-all duration-150 hover:bg-[#4a3d82] hover:shadow-[0_4px_16px_rgba(74,61,130,0.4)]"
            >
              Book an Appointment
            </a>
            <Link
              href="/contact"
              className="min-h-[48px] rounded-full border-2 border-[#5b4d9e] px-6 py-3 text-center font-semibold text-[#5b4d9e] transition-all duration-150 hover:bg-[#5b4d9e] hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
