const STEPS = [
  {
    number: "1",
    title: "Book an Appointment",
    description: "Choose a convenient time through our online scheduler.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Complete Your Intake Forms",
    description: "Fill out your information securely before your visit.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Meet With Your Doctor",
    description:
      "Enjoy a comfortable, personalized visit focused on your health goals.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Begin Your Care Plan",
    description:
      "Work together to create a long-term plan for your health and wellness.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export function NewPatientProcess() {
  return (
    <section className="bg-[#f5f3f8] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-[#1f2937] sm:text-4xl">
          Becoming a Patient Is Simple
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-[1.7] text-[#4b5563]">
          We&apos;ve streamlined the process so you can focus on what matters —
          your health.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="relative rounded-3xl border border-[#ebe8f0]/80 bg-white p-8 shadow-sm transition-all duration-150 ease-out hover:shadow-md"
            >
              <div className="mb-4 text-[#5b4d9e]">{step.icon}</div>
              <span className="absolute right-6 top-6 text-3xl font-bold text-[#ebe8f0]">
                {step.number}
              </span>
              <h3 className="font-semibold text-[#1f2937]">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-[#4b5563]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
