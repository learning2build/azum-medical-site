import { SITE_CONFIG } from "@/lib/site-config";

export function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-[#5b4d9e] to-[#4a3d82] pt-20 pb-12 lg:pt-24 lg:pb-14">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl font-semibold leading-tight text-white sm:text-3xl">
          Transform Your Health Today with AZUM Medical!
        </h2>
        <p className="mt-6 text-lg leading-[1.7] text-white/90">
          Take the first step toward better health today—book an appointment with us.
        </p>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={SITE_CONFIG.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[48px] rounded-full bg-white px-8 py-4 font-semibold text-[#5b4d9e] transition-all duration-150 ease-out hover:bg-[#faf9f7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            Book Appointment
          </a>
          <a
            href={SITE_CONFIG.phone.tollFreeTel}
            className="w-full min-h-[48px] rounded-full border-2 border-white/60 px-8 py-4 font-semibold text-white transition-all duration-150 ease-out hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            Call the Office
          </a>
        </div>
      </div>
    </section>
  );
}
