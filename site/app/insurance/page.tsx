import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { SITE_CONFIG } from "@/lib/site-config";
import Image from "next/image";

export const metadata = {
  title: "Insurance & Payment | AZUM Medical",
  description:
    "Accepted insurance plans, Direct Primary Care membership, self-pay, and telemedicine options. Flexible payment at AZUM Medical.",
};

const PAYMENT_OPTIONS = [
  {
    title: "Insurance payers",
    subtitle: "Price determined by insurer",
    body: "We accept a wide range of commercial insurance plans, as well as Medicare and Medicaid. Since each insurance provider offers multiple plan options, please call our office to confirm that we are in network with your specific plan.",
  },
  {
    title: "Membership option",
    subtitle: "Azum Medical DPC Silver Plan",
    body: "Affordable, relationship-based primary care with predictable monthly pricing and no insurance billing. Pricing: Individual (18 & older) — $199/month; Second Adult — $149/month; Dependents (0–17) — $49/month when enrolled with an adult. Members enjoy extended visits, same- or next-day appointments, and direct access to their provider for ongoing care coordination. The plan covers comprehensive primary care, including preventive care and management of acute and chronic conditions, plus access to discounted labs and imaging at transparent, pre-negotiated rates. We offer 3-month, 6-month, and 12-month agreements for added flexibility.",
  },
  {
    title: "Self-pay",
    subtitle: "In-person visits",
    body: "Self-pay in-person visits are available for $189 per visit, with access to discounted lab services.",
  },
  {
    title: "Telemedicine",
    subtitle: "Virtual visits",
    body: "Telemedicine visits are available for insurance payers. Self-pay telemedicine: $89 per visit for established patients; $125 per visit for new patients. Self-pay patients have access to discounted lab services. Please call the clinic to inquire about pricing for specific labs, as costs may vary by test.",
  },
];

const INSURANCE_PLANS = [
  {
    name: "Blue Cross Blue Shield",
    logoUrl: "https://azummedical.com/wp-content/uploads/2026/01/Blue-Cross-Blue-Shield-Logo-300x169.jpg",
    width: 300,
    height: 169,
  },
  {
    name: "United Healthcare",
    logoUrl: "https://azummedical.com/wp-content/uploads/2026/01/united-healthcare-logo-300x92.png",
    width: 300,
    height: 92,
  },
  {
    name: "Cigna",
    logoUrl: null,
  },
  {
    name: "Aetna",
    logoUrl: "https://azummedical.com/wp-content/uploads/2026/01/aetna.png",
    width: 200,
    height: 80,
  },
  {
    name: "Medicaid",
    logoUrl: "https://azummedical.com/wp-content/uploads/2026/01/medicaid-300x137.jpeg",
    width: 300,
    height: 137,
  },
  {
    name: "Medicare",
    logoUrl: "https://azummedical.com/wp-content/uploads/2026/01/medicare-300x86.png",
    width: 300,
    height: 86,
  },
  {
    name: "Aetna Better Health",
    logoUrl: "https://azummedical.com/wp-content/uploads/2026/01/aetnaBETTERhealth-150x150.png",
    width: 150,
    height: 150,
  },
  {
    name: "UMR",
    logoUrl: "https://azummedical.com/wp-content/uploads/2026/01/UMR-300x167.png",
    width: 300,
    height: 167,
  },
];

export default function InsurancePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-24 md:pb-0">
        {/* Hero */}
        <section className="bg-[#f5f3f8] py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="font-serif text-3xl font-semibold text-[#1f2937] sm:text-4xl">
              We&apos;ve Got You Covered
            </h1>
            <p className="mt-4 text-lg leading-[1.7] text-[#4b5563]">
              Explore our accepted insurance plans and payment options.
            </p>
          </div>
        </section>

        {/* Payment options */}
        <section className="border-b border-[#ebe8f0]/60 bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-[#1f2937] sm:text-3xl">
              Payment options
            </h2>
            <p className="mt-4 text-[#4b5563]">
              We offer a hybrid model—elements from both traditional
              insurance-based care and concierge medicine—so we can fit most
              patients&apos; needs.
            </p>

            <ul className="mt-12 space-y-10">
              {PAYMENT_OPTIONS.map((option, index) => (
                <li key={option.title}>
                  <div className="rounded-2xl border border-[#ebe8f0]/80 bg-[#faf9f7] p-6 sm:p-8">
                    <div className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5b4d9e]/10 font-semibold text-[#5b4d9e]">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-[#1f2937]">
                          {option.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-[#5b4d9e]">
                          {option.subtitle}
                        </p>
                        <p className="mt-4 text-[15px] leading-[1.65] text-[#4b5563]">
                          {option.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-[#ebe8f0]/80 bg-[#f5f3f8] p-6">
              <p className="text-[15px] leading-[1.65] text-[#4b5563]">
                <strong className="text-[#1f2937]">Accepted forms of payment:</strong>{" "}
                Cashier&apos;s check or money order (payable to Azum Medical), debit
                cards, and major credit cards. Card payments are subject to a
                processing fee. Personal checks are not accepted.
              </p>
            </div>
          </div>
        </section>

        {/* Insurance plans we accept */}
        <section className="bg-[#f5f3f8] py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-[#1f2937] sm:text-3xl">
              Insurance plans we accept
            </h2>
            <p className="mt-4 max-w-xl text-[#4b5563]">
              We partner with leading insurance providers to make your care
              affordable and accessible.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {INSURANCE_PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className="flex min-h-[120px] flex-col items-center justify-center rounded-2xl border border-[#ebe8f0]/80 bg-white p-6 shadow-sm transition-all duration-150 ease-out hover:shadow-md"
                >
                  {plan.logoUrl ? (
                    <div className="relative flex h-16 w-full items-center justify-center">
                      <Image
                        src={plan.logoUrl}
                        alt={plan.name}
                        width={plan.width ?? 160}
                        height={plan.height ?? 80}
                        className="max-h-16 w-auto max-w-[140px] object-contain object-center"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <span className="text-center font-semibold text-[#4b5563]">
                      {plan.name}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm font-medium text-[#6b7280]">
              Effective 01/20/2026 · And more — call to verify your plan.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[#ebe8f0]/60 bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-[#1f2937] sm:text-3xl">
              Affordable care for all
            </h2>
            <p className="mt-4 text-lg leading-[1.7] text-[#4b5563]">
              No insurance? We&apos;ve got you covered. We offer Direct Primary
              Care membership, flexible payment options, transparent upfront
              pricing, and self-pay discounts—so quality care is always within
              reach.
            </p>
            <a
              href={SITE_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block min-h-[48px] rounded-full bg-[#5b4d9e] px-8 py-4 font-semibold text-white transition-all duration-150 ease-out hover:bg-[#4a3d82] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4d9e]"
            >
              Schedule an appointment
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
