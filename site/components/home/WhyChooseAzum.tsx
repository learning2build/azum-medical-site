const VALUE_PILLARS = [
  {
    title: "Personalized Attention",
    description: "Patients are treated as individuals, not numbers.",
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: "Wellness-Centered Approach",
    description: "Focus on prevention and long-term health.",
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Welcoming Environment",
    description: "A comfortable clinic where patients feel heard.",
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    title: "Modern, Convenient Care",
    description: "Easy scheduling and telemedicine options.",
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

export function WhyChooseAzum() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-[#1f2937] sm:text-4xl">
          Why Patients Choose AZUM
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-[1.7] text-[#4b5563]">
          What sets us apart in your healthcare journey.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col items-center rounded-3xl border border-[#ebe8f0]/80 bg-[#faf9f7] p-8 text-center transition-all duration-150 ease-out hover:shadow-md"
            >
              <div className="text-[#5b4d9e]">{pillar.icon}</div>
              <h3 className="mt-4 font-semibold text-[#1f2937]">
                {pillar.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-[#4b5563]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
