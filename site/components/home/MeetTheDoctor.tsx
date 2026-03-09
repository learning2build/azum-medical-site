import Image from "next/image";

export function MeetTheDoctor() {
  return (
    <section className="bg-[#faf9f7] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Portrait image — premium framing */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-md overflow-hidden rounded-2xl bg-[#ebe8f0] shadow-lg ring-1 ring-[#c9a227]/20">
              <Image
                src="/ProfessionalPic-min-Azum.webp"
                alt="Dr. Catherine Chokuba-Azum"
                fill
                sizes="(min-width: 1024px) 420px, 70vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-medium italic text-[#5b4d9e]">
              &ldquo;Healthcare should feel personal, thoughtful, and
              welcoming.&rdquo;
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-[#1f2937] sm:text-4xl">
              Meet Dr. Catherine Chokuba-Azum
            </h2>
            <div className="mt-8 space-y-5 text-[#4b5563] leading-[1.7]">
              <p>
                Dr. Chokuba-Azum believes healthcare should feel personal,
                thoughtful, and welcoming.
              </p>
              <p>
                At AZUM Medical, she focuses on building meaningful relationships
                with patients while providing modern, evidence-based care designed
                for long-term health. Her approach blends traditional primary care
                with a strong emphasis on wellness and preventive medicine.
              </p>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-[#4b5563]">
              <li className="flex items-center gap-2">
                <span className="text-[#5b4d9e]">✓</span> Board-certified
                physician
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#5b4d9e]">✓</span> Patient-centered care
                philosophy
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#5b4d9e]">✓</span> Advocates for health
                education and equitable access
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
