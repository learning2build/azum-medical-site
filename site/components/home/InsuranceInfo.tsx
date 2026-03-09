import Link from "next/link";
import Image from "next/image";

const INSURANCE_PLANS_PREVIEW = [
  {
    name: "Blue Cross Blue Shield",
    logoUrl:
      "https://azummedical.com/wp-content/uploads/2026/01/Blue-Cross-Blue-Shield-Logo-300x169.jpg",
    width: 120,
    height: 68,
  },
  {
    name: "United Healthcare",
    logoUrl:
      "https://azummedical.com/wp-content/uploads/2026/01/united-healthcare-logo-300x92.png",
    width: 100,
    height: 31,
  },
  {
    name: "Aetna",
    logoUrl: "https://azummedical.com/wp-content/uploads/2026/01/aetna.png",
    width: 80,
    height: 32,
  },
  {
    name: "Cigna",
    logoUrl: null,
  },
  {
    name: "Medicare",
    logoUrl:
      "https://azummedical.com/wp-content/uploads/2026/01/medicare-300x86.png",
    width: 90,
    height: 26,
  },
  {
    name: "Medicaid",
    logoUrl:
      "https://azummedical.com/wp-content/uploads/2026/01/medicaid-300x137.jpeg",
    width: 80,
    height: 37,
  },
];

export function InsuranceInfo() {
  return (
    <section className="bg-[#f5f3f8] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-[#1f2937] sm:text-4xl">
          Insurance & Payment
        </h2>
        <div className="mt-6 max-w-xl">
          <p className="text-lg leading-[1.7] text-[#4b5563]">
            We accept many major insurance plans and offer flexible options for
            patients—including Direct Primary Care membership and self-pay.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          {INSURANCE_PLANS_PREVIEW.map((plan) =>
            plan.logoUrl ? (
              <div
                key={plan.name}
                className="flex h-14 w-28 items-center justify-center rounded-xl border border-[#ebe8f0]/80 bg-white px-4 shadow-sm"
              >
                <Image
                  src={plan.logoUrl}
                  alt={plan.name}
                  width={plan.width}
                  height={plan.height}
                  className="max-h-10 w-auto max-w-[100px] object-contain object-center"
                  unoptimized
                />
              </div>
            ) : (
              <div
                key={plan.name}
                className="flex h-14 min-w-[7rem] items-center justify-center rounded-xl border border-[#ebe8f0]/80 bg-white px-4 text-center text-sm font-semibold text-[#4b5563] shadow-sm"
              >
                {plan.name}
              </div>
            )
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link
            href="/insurance"
            className="inline-flex min-h-[44px] items-center font-semibold text-[#5b4d9e] transition-colors hover:text-[#4a3d82] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4d9e]"
          >
            See all plans & payment options →
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center text-[#4b5563] transition-colors hover:text-[#5b4d9e] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4d9e]"
          >
            Contact us to verify your plan
          </Link>
        </div>
      </div>
    </section>
  );
}
