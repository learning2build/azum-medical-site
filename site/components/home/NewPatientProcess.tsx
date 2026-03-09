export function NewPatientProcess() {
  return (
    <section className="bg-[#f5f3f8] py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-[#1f2937] sm:text-4xl">
          Becoming a Patient Is Simple
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-[1.7] text-[#4b5563]">
          We&apos;ve streamlined the process so you can focus on what matters —
          your health.
        </p>

        <div className="mt-14 flex flex-col gap-8 sm:flex-row sm:items-stretch sm:gap-10">
          {/* Step 1: Get started — asymmetric shape (soft on top-left & bottom-right) */}
          <div className="flex flex-1 flex-col rounded-tl-[1.75rem] rounded-br-[1.75rem] rounded-tr-md rounded-bl-md border border-[#ebe8f0]/80 bg-white p-8 shadow-sm transition-all duration-150 ease-out hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#5b4d9e]/10 text-[#5b4d9e]">
              <svg
                className="h-6 w-6"
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
            </div>
            <h3 className="font-semibold text-[#1f2937]">Get started</h3>
            <p className="mt-3 text-[15px] leading-[1.6] text-[#4b5563]">
              Book a time that works for you through our online scheduler, then
              complete your intake forms securely before your visit.
            </p>
          </div>

          <div
            className="hidden shrink-0 items-center sm:flex"
            aria-hidden="true"
          >
            <svg
              className="h-6 w-6 text-[#c9c0e0]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>

          {/* Step 2: Your first visit — asymmetric shape (soft on top-right & bottom-left) */}
          <div className="flex flex-1 flex-col rounded-tr-[1.75rem] rounded-bl-[1.75rem] rounded-tl-md rounded-br-md border border-[#ebe8f0]/80 bg-white p-8 shadow-sm transition-all duration-150 ease-out hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#5b4d9e]/10 text-[#5b4d9e]">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-[#1f2937]">Your first visit</h3>
            <p className="mt-3 text-[15px] leading-[1.6] text-[#4b5563]">
              Meet with your doctor in a comfortable, personalized visit focused
              on your health goals, then work together to create a long-term
              care plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
