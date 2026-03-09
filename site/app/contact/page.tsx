import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = {
  title: "Contact | AZUM Medical",
  description:
    "Get in touch with AZUM Medical. Call, email, or book an appointment online.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-24 md:pb-0">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-semibold text-[#1f2937]">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg text-[#4b5563]">
            We&apos;re here to help you with any questions or concerns.
          </p>

          <div className="mt-12 space-y-8">
            <div>
              <h2 className="font-semibold text-[#1f2937]">Office Hours</h2>
              <p className="mt-2 text-[#4b5563]">{SITE_CONFIG.hours.weekdays}</p>
              <p className="text-[#4b5563]">{SITE_CONFIG.hours.weekends}</p>
            </div>

            <div>
              <h2 className="font-semibold text-[#1f2937]">Phone</h2>
              <a
                href={SITE_CONFIG.phone.tollFreeTel}
                className="mt-2 block text-lg font-medium text-[#5b4d9e] hover:underline"
              >
                {SITE_CONFIG.phone.tollFree} (toll free)
              </a>
              <a
                href={SITE_CONFIG.phone.localTel}
                className="block text-lg font-medium text-[#5b4d9e] hover:underline"
              >
                {SITE_CONFIG.phone.local} (local)
              </a>
            </div>

            <div>
              <h2 className="font-semibold text-[#1f2937]">Email</h2>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="mt-2 block text-lg font-medium text-[#5b4d9e] hover:underline"
              >
                {SITE_CONFIG.email}
              </a>
            </div>

            <div>
              <h2 className="font-semibold text-[#1f2937]">Location</h2>
              <p className="mt-2 text-[#4b5563]">
                {SITE_CONFIG.address.line1}
                <br />
                {SITE_CONFIG.address.line2} {SITE_CONFIG.address.zip}
              </p>
            </div>

            <div className="pt-4">
              <a
                href={SITE_CONFIG.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block min-h-[48px] rounded-full bg-[#5b4d9e] px-8 py-4 font-semibold text-white transition-all duration-150 ease-out hover:bg-[#4a3d82] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4d9e]"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
