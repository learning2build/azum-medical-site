import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = {
  title: "Services | AZUM Medical",
  description:
    "Primary care, wellness, chronic condition management, and telemedicine at AZUM Medical.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-24 md:pb-0">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-semibold text-[#1f2937]">
            Our Services
          </h1>
          <p className="mt-6 text-lg text-[#4b5563]">
            Content for this page is coming soon. In the meantime, please{" "}
            <a
              href={SITE_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#5b4d9e] hover:underline"
            >
              book an appointment
            </a>{" "}
            or{" "}
            <a
              href="/contact"
              className="font-semibold text-[#5b4d9e] hover:underline"
            >
              contact us
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
