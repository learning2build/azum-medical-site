import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

const btnHero =
  "inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#5b4d9e] px-6 py-3 font-sans text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#7d6fbe] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base";

const ACUTE_ITEMS = [
  {
    title: "Sports Physicals",
    body: "Comprehensive evaluations to ensure you’re ready for peak performance.",
  },
  {
    title: "Urinary Tract Infections (UTIs)",
    body: "Prompt diagnosis and treatment to relieve discomfort.",
  },
  {
    title: "Treatment for Minor Burns or Skin Infections",
    body: "Expert care to promote healing and prevent complications.",
  },
  {
    title: "Ear Pain Management",
    body: "Diagnosis and treatment for ear-related discomfort.",
  },
  {
    title: "And Much More…",
    body: "Additional acute concerns—ask our team how we can help.",
  },
] as const;

export function AcuteCareServiceContent() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center px-4 py-11 text-center sm:py-12 lg:py-14">
        <Image
          src="/services/acute-care/hero-058.jpg"
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
          <Link
            href="/services"
            className="text-sm font-medium text-white/90 hover:text-white hover:underline"
          >
            ← All Services
          </Link>
          <h1 className="mt-4 font-serif text-2xl font-semibold leading-snug text-balance text-white sm:text-[1.625rem] lg:text-[1.75rem]">
            Acute Care Services
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-balance text-white/95 sm:text-xl">
            Fast, reliable care for non-life-threatening issues—when you need
            it.
          </p>
        </div>
      </section>

      <section className="border-t border-[#ebe8f0] bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-[1.75] text-[#4b5563]">
            At AZUM Medical, we provide comprehensive acute care services
            designed to address a variety of non-life-threatening medical issues
            promptly and effectively. Our experienced medical team is here to
            ensure you receive the care you need when you need it.
          </p>
          <h2 className="mt-10 font-serif text-2xl font-semibold text-[#1f2937]">
            Our Acute Care Services Include:
          </h2>
          <ul className="mt-6 space-y-5">
            {ACUTE_ITEMS.map((item) => (
              <li key={item.title} className="border-b border-[#ebe8f0]/80 pb-5 last:border-0">
                <p className="font-semibold text-[#1f2937]">{item.title}</p>
                <p className="mt-1.5 text-base leading-relaxed text-[#4b5563]">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg font-medium text-[#1f2937]">
            Whatever your acute medical need, we&apos;re here to help!
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
            Visit us for fast, reliable, and professional care tailored to your
            needs.
          </p>
          <a
            href={SITE_CONFIG.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnHero} mt-8 bg-[#5b4d9e] hover:bg-[#7d6fbe]`}
          >
            Book Now
          </a>
        </div>
      </section>
    </>
  );
}
