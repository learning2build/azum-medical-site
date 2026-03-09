import { SITE_CONFIG } from "@/lib/site-config";

const TESTIMONIALS = [
  {
    quote:
      "Dr. Chokuba-Azum takes the time to listen and truly cares about her patients. The office environment is welcoming and professional.",
    stars: 5,
  },
  {
    quote:
      "I finally feel like I have a doctor who understands my health goals.",
    stars: 5,
  },
  {
    quote:
      "Personalized care at its best. I recommend AZUM Medical to anyone looking for a doctor who actually listens.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-[#c9a227]">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-[#faf9f7] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-[#1f2937] sm:text-4xl">
          What Our Patients Say
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-[1.7] text-[#4b5563]">
          Real experiences from patients who trust AZUM Medical.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <div
              key={i}
              className="rounded-3xl border border-[#ebe8f0]/80 bg-white p-8 shadow-sm"
            >
              <StarRating count={testimonial.stars} />
              <blockquote className="mt-4 text-[15px] leading-[1.6] text-[#4b5563]">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={SITE_CONFIG.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 font-semibold text-[#5b4d9e] transition-colors hover:text-[#4a3d82] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4d9e]"
          >
            Read More Reviews
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
