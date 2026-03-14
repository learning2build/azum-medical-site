import Link from "next/link";
import { SERVICES, isServiceComingSoon } from "@/lib/services-config";

export function ServicesOverview() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-[#1f2937] sm:text-4xl">
          Our Core Services
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-[1.7] text-[#4b5563]">
          Comprehensive care designed around your health goals.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) =>
            isServiceComingSoon(service) ? (
              <div
                key={service.slug}
                className="rounded-3xl border border-[#ebe8f0]/80 bg-[#f5f3f9]/40 p-8"
              >
                <h3 className="font-semibold text-[#1f2937]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-[#4b5563]">
                  {service.shortDescription}
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-[#5b4d9e]">
                  Coming soon
                </span>
              </div>
            ) : (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-3xl border border-[#ebe8f0]/80 bg-white p-8 shadow-sm transition-all duration-150 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-[#e1d9f3]"
              >
                <h3 className="font-semibold text-[#1f2937] group-hover:text-[#5b4d9e]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-[#4b5563]">
                  {service.shortDescription}
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-[#5b4d9e] opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more →
                </span>
              </Link>
            )
          )}
        </div>

        <div className="mt-14 flex flex-col items-center">
          <Link
            href="/services"
            className="min-h-[48px] rounded-full border-2 border-[#5b4d9e] px-6 py-3 text-center font-semibold text-[#5b4d9e] transition-all duration-150 ease-out hover:bg-[#5b4d9e] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4d9e]"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
