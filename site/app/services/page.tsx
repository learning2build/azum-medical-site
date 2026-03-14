import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { SITE_CONFIG } from "@/lib/site-config";
import { SERVICES, isServiceComingSoon } from "@/lib/services-config";

export const metadata = {
  title: "Services | AZUM Medical",
  description:
    "Preventative care, acute care, chronic conditions, holistic wellness, weight management, telemedicine, and more at AZUM Medical in Houston.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-24 md:pb-0">
        <section className="bg-[#faf9f7] py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl font-semibold text-[#1f2937] sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-[1.7] text-[#4b5563]">
              Comprehensive care designed around your health goals—from preventive
              screenings to chronic condition management and convenient telemedicine
              visits.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((service) =>
                isServiceComingSoon(service) ? (
                  <div
                    key={service.slug}
                    className="rounded-3xl border border-[#ebe8f0]/80 bg-[#f5f3f9]/40 p-8"
                  >
                    <h2 className="font-semibold text-[#1f2937]">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-[15px] leading-[1.6] text-[#4b5563]">
                      {service.shortDescription}
                    </p>
                    <span className="mt-4 inline-block text-sm font-medium text-[#5b4d9e]">
                      Coming soon
                    </span>
                  </div>
                ) : (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group rounded-3xl border border-[#ebe8f0]/80 bg-white p-8 shadow-sm transition-all duration-150 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-[#e1d9f3]"
                  >
                    <h2 className="font-semibold text-[#1f2937] group-hover:text-[#5b4d9e]">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-[15px] leading-[1.6] text-[#4b5563]">
                      {service.shortDescription}
                    </p>
                    <span className="mt-4 inline-block text-sm font-medium text-[#5b4d9e] group-hover:underline">
                      Learn more →
                    </span>
                  </Link>
                )
              )}
            </div>
          </div>
        </section>

        <section className="border-t border-[#ebe8f0] bg-[#faf9f7] py-14">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-lg text-[#4b5563]">
              Ready to get started? Book an appointment or reach out with questions.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href={SITE_CONFIG.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] rounded-full bg-[#5b4d9e] px-6 py-3 text-center font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#4a3d82] hover:shadow-md"
              >
                Book an Appointment
              </a>
              <Link
                href="/contact"
                className="min-h-[48px] rounded-full border-2 border-[#5b4d9e] px-6 py-3 text-center font-semibold text-[#5b4d9e] transition-all duration-150 hover:bg-[#5b4d9e] hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
