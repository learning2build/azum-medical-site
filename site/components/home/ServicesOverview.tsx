import Link from "next/link";

const SERVICES = [
  {
    title: "Primary Care",
    description:
      "Annual exams, preventive screenings, and ongoing health management.",
  },
  {
    title: "Wellness & Preventive Care",
    description:
      "Proactive care designed to maintain long-term health and vitality.",
  },
  {
    title: "Chronic Condition Management",
    description:
      "Support for conditions such as diabetes, hypertension, and metabolic health.",
  },
  {
    title: "Telemedicine Visits",
    description:
      "Convenient virtual appointments from the comfort of your home.",
  },
];

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
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-[#ebe8f0]/80 bg-white p-8 shadow-sm transition-all duration-150 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-[#ebe8f0]"
            >
              <h3 className="font-semibold text-[#1f2937]">{service.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-[#4b5563]">
                {service.description}
              </p>
            </div>
          ))}
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
