import Image from "next/image";
import Link from "next/link";
import { SERVICE_HERO_BOOKING_BUTTON_CLASS } from "@/lib/service-hero-booking-cta";
import { SITE_CONFIG } from "@/lib/site-config";

const btnSecondary =
  "inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-white/90 bg-white/10 px-6 py-3 font-sans text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base";

export function WeightManagementServiceContent() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center px-4 py-11 text-center sm:py-12 lg:py-14">
        <Image
          src="/services/weight-management/hero-013.jpg"
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
            Weight Management
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-balance text-white/95 sm:text-xl">
            A research-based, medically supervised path to lasting results—
            launching soon at AZUM Medical.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className={btnSecondary}>
              Get notified
            </Link>
            <a
              href={SITE_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={SERVICE_HERO_BOOKING_BUTTON_CLASS}
            >
              Book an appointment
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-[#ebe8f0] bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-[#1f2937] sm:text-3xl">
            Weight Loss Program{" "}
            <span className="text-[#5b4d9e]">(Coming Soon)</span>
          </h2>
          <p className="mt-6 text-base leading-[1.75] text-[#4b5563] sm:text-lg">
            AZUM Medical will be providing a research-based, medically
            supervised weight loss program.
          </p>
          <p className="mt-4 text-base leading-[1.75] text-[#4b5563] sm:text-lg">
            Based on individual metabolic rates, we will create a personalized
            plan for each client for losing weight by combining{" "}
            <strong className="font-semibold text-[#1f2937]">
              one-on-one weight loss education and counseling
            </strong>{" "}
            and{" "}
            <strong className="font-semibold text-[#1f2937]">
              prescription appetite suppressants (including GLP-1)
            </strong>
            .
          </p>
          <p className="mt-4 text-base leading-[1.75] text-[#4b5563] sm:text-lg">
            The program will also include access to an exercise program and group
            workout sessions. Stay tuned!
          </p>
        </div>
      </section>
    </>
  );
}
