import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { WELLNESS_ARTICLES } from "@/lib/wellness-insights-config";

export const metadata = {
  title: "Wellness Insights | AZUM Medical",
  description:
    "Expert advice and articles on wellness visits, diabetes, hypertension, and health from AZUM Medical.",
};

export default function WellnessInsightsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-24 md:pb-0">
        <section className="bg-[#faf9f7] py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl font-semibold text-[#1f2937] sm:text-5xl">
              Wellness Insights
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-[1.7] text-[#4b5563]">
              Stay informed with expert advice and articles on wellness, health
              trends, and more.
            </p>
          </div>
        </section>

        <section className="bg-white py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col">
              {WELLNESS_ARTICLES.map((article, index) => (
                <Link
                  key={article.slug}
                  href={`/wellness-insights/${article.slug}`}
                  className={`group block py-10 transition-colors hover:bg-[#faf9f7]/50 md:py-12 ${
                    index < WELLNESS_ARTICLES.length - 1
                      ? "border-b border-[#ebe8f0]"
                      : ""
                  }`}
                >
                  <h2 className="font-semibold text-[#1f2937] group-hover:text-[#5b4d9e] md:text-xl">
                    {article.title}
                  </h2>
                  <p className="mt-5 max-w-4xl text-[15px] leading-[1.7] text-[#4b5563] md:text-base">
                    {article.intro}
                  </p>
                  <span className="mt-5 inline-block text-sm font-medium text-[#5b4d9e] group-hover:underline">
                    Read more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
