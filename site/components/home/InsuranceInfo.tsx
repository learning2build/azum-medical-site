import Link from "next/link";

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
            patients. Contact our office to confirm your coverage.
          </p>
        </div>

        {/* Insurance logos placeholder — add real logos when available */}
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <div className="flex h-12 w-24 items-center justify-center rounded-lg bg-[#ebe8f0] text-xs text-[#6b7280]">
            Insurance
          </div>
          <div className="flex h-12 w-24 items-center justify-center rounded-lg bg-[#ebe8f0] text-xs text-[#6b7280]">
            Logos
          </div>
          <div className="flex h-12 w-24 items-center justify-center rounded-lg bg-[#ebe8f0] text-xs text-[#6b7280]">
            Here
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center font-semibold text-[#5b4d9e] transition-colors hover:text-[#4a3d82] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4d9e]"
          >
            Contact us to verify your plan →
          </Link>
        </div>
      </div>
    </section>
  );
}
