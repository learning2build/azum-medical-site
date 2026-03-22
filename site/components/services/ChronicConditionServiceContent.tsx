import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

const btnPrimary =
  "inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#5b4d9e] px-6 py-3 font-sans text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#7d6fbe] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4d9e] sm:text-base";

export function ChronicConditionServiceContent() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center px-4 py-11 text-center sm:py-12 lg:py-14">
        <Image
          src="/services/chronic-condition-management/hero-042.jpg"
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
            Effective Chronic Disease Management
            <br />
            for a Better Quality of Life
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-balance text-white/95 sm:text-xl">
            Manage your health, manage your future. Our approach empowers you
            to live well despite chronic conditions.
          </p>
        </div>
      </section>

      {/* Diabetes */}
      <section className="border-t border-[#ebe8f0] bg-white py-14 lg:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[#1f2937] sm:text-3xl lg:text-[1.85rem]">
              Comprehensive Diabetes Care.
            </h2>
            <p className="mt-4 text-base leading-[1.75] text-[#4b5563] sm:text-lg">
              Monitoring blood sugar, personalized care plans, and lifestyle
              support—so you can stay on track with confidence.
            </p>
            <a
              href={SITE_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnPrimary} mt-6`}
            >
              Manage Your Diabetes Today
            </a>
          </div>
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[#ebe8f0] shadow-sm">
            <Image
              src="/services/chronic-condition-management/diabetes-043.jpg"
              alt="Diabetes care and blood sugar monitoring support"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Hypertension */}
      <section className="border-t border-[#ebe8f0] bg-[#faf9f7] py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:max-w-4xl lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-[#1f2937] sm:text-3xl">
            Managing High Blood Pressure.
          </h2>
          <p className="mt-5 text-base leading-[1.75] text-[#4b5563] sm:text-lg">
            We provide comprehensive hypertension care through regular
            monitoring, personalized lifestyle adjustments, and effective
            medication management to help you maintain healthy blood pressure
            and reduce the risk of complications.
          </p>
          <a
            href={SITE_CONFIG.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnPrimary} mt-8`}
          >
            Control Your Blood Pressure Now
          </a>
          <div className="relative mx-auto mt-10 aspect-[3/2] w-full max-w-3xl overflow-hidden rounded-2xl border border-[#ebe8f0] shadow-sm">
            <Image
              src="/services/chronic-condition-management/hypertension-044.jpg"
              alt="Blood pressure monitoring and heart health care"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48rem"
            />
          </div>
        </div>
      </section>

      {/* Cholesterol */}
      <section className="border-t border-[#ebe8f0] bg-white py-14 lg:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div className="lg:pr-4">
            <h2 className="font-serif text-2xl font-semibold text-[#1f2937] sm:text-3xl">
              Cholesterol Management for Heart Health.
            </h2>
            <p className="mt-4 text-base leading-[1.75] text-[#4b5563] sm:text-lg">
              Our services include regular cholesterol screenings, personalized
              medication management, and heart-healthy diet advice to help you
              maintain optimal heart health and reduce the risk of
              cardiovascular disease.
            </p>
            <a
              href={SITE_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnPrimary} mt-6`}
            >
              Start Managing Your Cholesterol
            </a>
          </div>
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-[#ebe8f0] shadow-sm sm:mx-auto lg:mx-0 lg:max-w-none">
            <Image
              src="/services/chronic-condition-management/cholesterol-045.jpg"
              alt="Heart health and cholesterol management counseling"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
