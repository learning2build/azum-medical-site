import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { SITE_CONFIG } from "@/lib/site-config";
import {
  getArticleBySlug,
  getAllArticleSlugs,
} from "@/lib/wellness-insights-config";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article | AZUM Medical" };
  return {
    title: `${article.title} | AZUM Medical`,
    description: article.intro,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen pb-24 md:pb-0">
        <section className="bg-[#faf9f7] py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/wellness-insights"
              className="text-sm font-medium text-[#5b4d9e] hover:underline"
            >
              ← Wellness Insights
            </Link>
            <h1 className="mt-4 font-serif text-4xl font-semibold text-[#1f2937] sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-6 text-lg leading-[1.7] text-[#4b5563]">
              {article.intro}
            </p>
          </div>
        </section>

        <section className="bg-white py-14 lg:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#1f2937] prose-p:text-[#4b5563] prose-p:leading-[1.7]">
              {article.sections.map((section, i) => (
                <div key={i} className="mb-10">
                  {section.heading && (
                    <h2 className="mb-4 text-2xl font-semibold text-[#1f2937]">
                      {section.heading}
                    </h2>
                  )}
                  <div className="space-y-4">
                    {section.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#ebe8f0] bg-[#faf9f7] py-14">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-lg text-[#4b5563]">
              Have questions or want to schedule a visit?
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href={SITE_CONFIG.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] rounded-full bg-[#5b4d9e] px-6 py-3 font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#4a3d82] hover:shadow-md"
              >
                Book an Appointment
              </a>
              <Link
                href="/wellness-insights"
                className="min-h-[48px] rounded-full border-2 border-[#5b4d9e] px-6 py-3 font-semibold text-[#5b4d9e] transition-all duration-150 hover:bg-[#5b4d9e] hover:text-white"
              >
                More articles
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
