import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { SITE_CONFIG } from "@/lib/site-config";

/** Add filenames here; put the actual files in site/public/location/ (e.g. .webp from original site) */
const LOCATION_PHOTOS = ["location-1.webp", "location-2.webp", "location-3.webp"];

export const metadata = {
  title: "Contact & Location | AZUM Medical",
  description:
    "Visit AZUM Medical in Houston. Address, hours, phone, email, and directions. Book an appointment online.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-24 md:pb-0">
        {/* Hero / intro — matches azummedical.com/location */}
        <section className="bg-[#faf9f7] py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl font-semibold text-[#1f2937] sm:text-5xl">
              Our Location
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-[1.7] text-[#4b5563]">
              Visit us for personalized care in a comfortable, welcoming
              environment.
            </p>
            <p className="mt-2 text-lg text-[#4b5563]">
              You can find us at:
            </p>
          </div>
        </section>

        {/* Address, hours, contact + map */}
        <section className="bg-white py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
              {/* Left: Address, hours, contact */}
              <div className="space-y-10 lg:col-span-2">
                <div className="rounded-2xl border border-[#ebe8f0]/80 bg-[#faf9f7]/50 p-6 shadow-sm">
                  <h2 className="font-semibold text-[#1f2937]">Address</h2>
                  <p className="mt-3 text-[#4b5563] leading-relaxed">
                    {SITE_CONFIG.address.display}
                  </p>
                  <a
                    href={SITE_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-[#5b4d9e] hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>

                <div className="rounded-2xl border border-[#ebe8f0]/80 bg-[#faf9f7]/50 p-6 shadow-sm">
                  <h2 className="font-semibold text-[#1f2937]">
                    Hours of Operation
                  </h2>
                  <p className="mt-3 text-[#4b5563]">
                    {SITE_CONFIG.hours.weekdays}
                  </p>
                  <p className="mt-1 text-[#4b5563]">
                    {SITE_CONFIG.hours.weekends}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#ebe8f0]/80 bg-[#faf9f7]/50 p-6 shadow-sm">
                  <h2 className="font-semibold text-[#1f2937]">Contact Info</h2>
                  <ul className="mt-3 space-y-3 text-[#4b5563]">
                    <li>
                      <span className="font-medium text-[#1f2937]">Toll Free:</span>{" "}
                      <a
                        href={SITE_CONFIG.phone.tollFreeTel}
                        className="text-[#5b4d9e] hover:underline"
                      >
                        {SITE_CONFIG.phone.tollFree} (2986)
                      </a>
                    </li>
                    <li>
                      <span className="font-medium text-[#1f2937]">Local:</span>{" "}
                      <a
                        href={SITE_CONFIG.phone.localTel}
                        className="text-[#5b4d9e] hover:underline"
                      >
                        {SITE_CONFIG.phone.local} (2986)
                      </a>
                    </li>
                    <li>
                      <span className="font-medium text-[#1f2937]">Email:</span>{" "}
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-[#5b4d9e] hover:underline"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right: Map embed */}
              <div className="lg:col-span-3">
                <div className="overflow-hidden rounded-2xl border border-[#ebe8f0]/80 shadow-sm">
                  <iframe
                    title="AZUM Medical location map"
                    src="https://www.google.com/maps?q=17115+Red+Oak+Drive+Suite+213+Houston+TX+77090&output=embed"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block w-full"
                  />
                </div>
                <p className="mt-3 text-sm text-[#4b5563]">
                  <a
                    href={SITE_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#5b4d9e] hover:underline"
                  >
                    Get directions
                  </a>
                </p>

                {/* Location photos — add files to site/public/location/ */}
                {LOCATION_PHOTOS.length > 0 && (
                  <div className="mt-10">
                    <h2 className="font-semibold text-[#1f2937]">
                      Our office
                    </h2>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {LOCATION_PHOTOS.map((filename) => (
                        <div
                          key={filename}
                          className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#ebe8f0]/80 bg-[#f5f3f9]/50"
                        >
                          <Image
                            src={`/location/${filename}`}
                            alt=""
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[#ebe8f0] bg-[#faf9f7] py-14">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-lg text-[#4b5563]">
              Ready to schedule? Book an appointment online or call us.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href={SITE_CONFIG.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] rounded-full bg-[#5b4d9e] px-8 py-3 font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#4a3d82] hover:shadow-md"
              >
                Book an Appointment
              </a>
              <a
                href={SITE_CONFIG.phone.tollFreeTel}
                className="min-h-[48px] rounded-full border-2 border-[#5b4d9e] px-8 py-3 font-semibold text-[#5b4d9e] transition-all duration-150 hover:bg-[#5b4d9e] hover:text-white"
              >
                Call {SITE_CONFIG.phone.tollFree}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
