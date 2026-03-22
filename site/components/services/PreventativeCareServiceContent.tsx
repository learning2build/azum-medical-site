import Image from "next/image";
import Link from "next/link";
import { SERVICE_HERO_BOOKING_BUTTON_CLASS } from "@/lib/service-hero-booking-cta";
import { SITE_CONFIG } from "@/lib/site-config";

/** Maps azummedical.com/blog-collection/ → this site’s wellness hub */
const WELLNESS_HREF = "/wellness-insights";

const btnPrimary =
  "inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#5b4d9e] px-6 py-3 font-sans text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#4a3d82] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4d9e] sm:text-base";

const btnSecondary =
  "inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-[#5b4d9e] bg-white px-6 py-3 font-sans text-sm font-semibold text-[#5b4d9e] transition-all duration-200 hover:bg-[#f5f3f9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4d9e] sm:text-base";

export function PreventativeCareServiceContent() {
  return (
    <>
      {/* Hero — from azummedical.com/preventive-care/ */}
      <section className="relative flex flex-col items-center justify-center px-4 py-11 text-center sm:py-12 lg:py-14">
        <Image
          src="/services/preventative-care/hero-038.jpg"
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
            Preventive Care for Lifelong Health.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-balance text-white/95 sm:text-xl">
            Stay proactive about your health with our personalized preventive
            care services.
          </p>
          <a
            href={SITE_CONFIG.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${SERVICE_HERO_BOOKING_BUTTON_CLASS} mt-8`}
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Women’s health — text + image */}
      <section className="border-t border-[#ebe8f0] bg-white py-14 lg:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-2xl font-semibold text-[#1f2937] sm:text-3xl">
              Empowering Women&apos;s Health.
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-[#4b5563] sm:text-lg">
              We offer a range of personalized care services, including health
              screenings, family planning, and menopause care. Our goal is to
              provide compassionate, comprehensive support for every stage of
              life.
            </p>
            <Link href={WELLNESS_HREF} className={`${btnPrimary} mt-6`}>
              Learn More
            </Link>
          </div>
          <div className="relative order-1 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#ebe8f0] shadow-sm lg:order-2">
            <Image
              src="/services/preventative-care/womens-health-039.jpg"
              alt="Woman consulting with a healthcare provider about preventive care"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Annual physicals — image left, copy right */}
      <section className="border-t border-[#ebe8f0] bg-[#faf9f7] py-14 lg:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-[#ebe8f0] shadow-sm sm:mx-auto lg:mx-0 lg:max-w-none lg:aspect-[3/4]">
            <Image
              src="/services/preventative-care/annual-physicals-040.jpg"
              alt="Doctor and patient during an annual wellness visit"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="font-serif text-2xl font-semibold text-[#1f2937] sm:text-3xl">
              Why Annual Physicals Matter.
            </h2>
            <p className="mt-2 text-sm font-medium text-[#5b4d9e] sm:text-base">
              Benefits of yearly check-ups for long-term health.
            </p>
            <a
              href={SITE_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnPrimary} mt-6`}
            >
              Book now
            </a>
            <p className="mt-6 text-base leading-[1.75] text-[#4b5563] sm:text-lg">
              A comprehensive health checkup including vital sign monitoring,
              screenings, immunizations, and personalized preventive care to
              support your overall well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Vaccinations — image left, copy + CTA right */}
      <section className="border-t border-[#ebe8f0] bg-white py-14 lg:pb-16 lg:pt-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[#ebe8f0] shadow-sm lg:aspect-[4/3]">
            <Image
              src="/services/preventative-care/vaccinations-041.jpg"
              alt="Healthcare professional preparing a vaccination"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <div>
            <h3 className="font-serif text-xl font-semibold text-[#1f2937] sm:text-2xl">
              Stay Protected with Vaccinations.
            </h3>
            <p className="mt-4 text-base leading-[1.75] text-[#4b5563] sm:text-lg">
              Get your flu, COVID-19, and childhood vaccines today—your health
              matters at every stage of life!
            </p>
            <Link href="/contact" className={`${btnSecondary} mt-6`}>
              Check Vaccine Availability
            </Link>
            <p className="mt-3 text-sm text-[#6b7280]">
              Contact the clinic to confirm vaccine availability and scheduling.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
