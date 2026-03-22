import Image from "next/image";
import Link from "next/link";
import { SERVICE_HERO_BOOKING_BUTTON_CLASS } from "@/lib/service-hero-booking-cta";
import { SITE_CONFIG } from "@/lib/site-config";

const STEPS = [
  {
    src: "/services/telemedicine/step-schedule.jpg",
    alt: "Scheduling a virtual medical appointment online",
    title: "Schedule Your Appointment",
    body: "Easily schedule your virtual appointment online at your convenience. Simply choose your preferred time, and connect with our healthcare professionals from the comfort of your home.",
  },
  {
    src: "/services/telemedicine/step-join.jpg",
    alt: "Patient joining a video visit with a healthcare provider",
    title: "Join Your Virtual Consultation",
    body: "Log in to your account using your secure credentials, and select your scheduled appointment. During the session, you'll connect with your healthcare provider via video or chat, discussing your health concerns, treatment options, and next steps—all from the comfort of your home.",
  },
  {
    src: "/services/telemedicine/step-followup.jpg",
    alt: "Follow-up care and prescription support after a telemedicine visit",
    title: "Follow-Up Care & Prescriptions",
    body: "After your consultation, you'll receive follow-up instructions, prescriptions, and personalized health advice to support your care and well-being.",
  },
] as const;

const BENEFITS = [
  "Access to healthcare without travel.",
  "Shorter wait times.",
  "Confidential and secure.",
  "Available anytime, anywhere.",
] as const;

export function TelemedicineServiceContent() {
  return (
    <>
      {/* Hero — adapted from azummedical.com/telemedicine-options/ */}
      <section className="relative flex flex-col items-center justify-center px-4 py-11 text-center sm:py-12 lg:py-14">
        <Image
          src="/services/telemedicine/hero-049.jpg"
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
            Convenient, Accessible Telemedicine Services
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-balance text-white/95 sm:text-xl">
            Your health, at your convenience. Consult with trusted medical
            professionals from the comfort of your home.
          </p>
          <a
            href={SITE_CONFIG.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${SERVICE_HERO_BOOKING_BUTTON_CLASS} mt-8`}
          >
            Schedule Now
          </a>
        </div>
      </section>

      {/* Three steps with imagery */}
      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-10">
            {STEPS.map((step) => (
              <div
                key={step.title}
                className="flex flex-col items-center text-center md:items-stretch md:text-left"
              >
                <div className="relative mb-5 aspect-square w-full max-w-[20rem] overflow-hidden rounded-2xl border border-[#ebe8f0] bg-[#faf9f7] shadow-sm md:max-w-none">
                  <Image
                    src={step.src}
                    alt={step.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h2 className="font-serif text-xl font-semibold text-[#1f2937] sm:text-2xl">
                  {step.title}
                </h2>
                <p className="mt-3 text-sm leading-[1.7] text-[#4b5563] sm:text-base">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why telemedicine + wide image */}
      <section className="border-t border-[#ebe8f0] bg-[#faf9f7] py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[#ebe8f0] shadow-sm lg:order-2">
              <Image
                src="/services/telemedicine/benefits.jpg"
                alt="Healthcare professional supporting a patient remotely"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="lg:order-1">
              <h2 className="font-serif text-2xl font-semibold text-[#5b4d9e] underline decoration-[#dcd4ef] decoration-2 underline-offset-4 sm:text-3xl">
                Why Choose Telemedicine?
              </h2>
              <ul className="mt-6 space-y-3 text-[#4b5563]">
                {BENEFITS.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5b4d9e]"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#ebe8f0] bg-white py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg text-[#4b5563]">
            We use a secure, HIPAA-compliant platform for virtual visits. Ideal
            for follow-ups, medication reviews, minor concerns, and routine
            questions when an in-person exam isn&apos;t required.
          </p>
        </div>
      </section>
    </>
  );
}
