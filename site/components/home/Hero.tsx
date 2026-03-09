import Image from "next/image";
import { SITE_CONFIG } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-br from-[#f5f3f8] via-[#faf9f7] to-[#ebe8f0]">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-sm font-medium uppercase tracking-widest text-[#5b4d9e]">
            Concierge Primary Care in {SITE_CONFIG.locationCity}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.15] text-[#1f2937] sm:text-5xl lg:text-[3.5rem]">
            Your Health, Our Priority
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-[1.7] text-[#4b5563]">
            Compassionate, innovative and modern care focused on prevention, wellness, and
            long-term health. Serving {SITE_CONFIG.locationCity} and surrounding
            communities.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={SITE_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] rounded-full bg-[#5b4d9e] px-8 py-4 text-center font-semibold text-white shadow-md transition-all duration-150 ease-out hover:bg-[#4a3d82] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4d9e] sm:w-auto"
            >
              Book Appointment
            </a>
            <a
              href={SITE_CONFIG.phone.tollFreeTel}
              className="w-full min-h-[48px] rounded-full border-2 border-[#5b4d9e] px-8 py-4 text-center font-semibold text-[#5b4d9e] transition-all duration-150 ease-out hover:bg-[#5b4d9e]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4d9e] sm:w-auto"
            >
              Call the Office
            </a>
          </div>

          <p className="mt-8 text-sm text-[#6b7280]">
            Primary Care • Preventive Wellness • Telemedicine Available
          </p>
        </div>

        {/* Welcome image from /public */}
        <div className="mt-16 flex-1 lg:mt-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#ebe8f0] shadow-lg">
            <Image
              src="/Welcome-page-image.jpg"
              alt="Welcome to AZUM Medical"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
