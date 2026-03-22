import Image from "next/image";
import Link from "next/link";
import { SERVICE_HERO_BOOKING_BUTTON_CLASS } from "@/lib/service-hero-booking-cta";
import { SITE_CONFIG } from "@/lib/site-config";

const btnPrimary =
  "inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#5b4d9e] px-6 py-3 font-sans text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#7d6fbe] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4d9e] sm:text-base";

export function HolisticWellnessServiceContent() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center px-4 py-11 text-center sm:py-12 lg:py-14">
        <Image
          src="/services/holistic-wellness/hero-046.jpg"
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
            Empowering Your Wellness Journey
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-balance text-white/95 sm:text-xl">
            Achieve balance with a comprehensive approach to health and
            well-being.
          </p>
          <a
            href={SITE_CONFIG.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${SERVICE_HERO_BOOKING_BUTTON_CLASS} mt-8`}
          >
            Start Your Wellness Journey Today
          </a>
        </div>
      </section>

      <section className="border-t border-[#ebe8f0] bg-white py-14 lg:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[#1f2937] sm:text-3xl">
              Meal Prep Guidance for Optimal Nutrition.
            </h2>
            <p className="mt-4 text-base leading-[1.75] text-[#4b5563] sm:text-lg">
              Customized meal plans, shopping tips, and portion control advice
              tailored to your needs.
            </p>
            <Link href="/contact" className={`${btnPrimary} mt-6`}>
              Get Your Personalized Meal Plan
            </Link>
          </div>
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[#ebe8f0] shadow-sm">
            <Image
              src="/services/holistic-wellness/meal-prep-047.jpg"
              alt="Healthy meal preparation and nutrition planning"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-[#ebe8f0] bg-[#faf9f7] py-14 lg:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[#ebe8f0] shadow-sm lg:order-1">
            <Image
              src="/services/holistic-wellness/weight-goals-014.jpg"
              alt="Support for achieving healthy weight goals"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:order-2">
            <h2 className="font-serif text-2xl font-semibold text-[#1f2937] sm:text-3xl">
              Achieve Your Weight Goals with Support.
            </h2>
            <p className="mt-4 text-base leading-[1.75] text-[#4b5563] sm:text-lg">
              Weight loss coaching, metabolic assessments, and long-term success
              strategies—so you can build habits that last.
            </p>
            <Link href="/contact" className={`${btnPrimary} mt-6`}>
              Start Your Weight Management Program
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
