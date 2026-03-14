import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { SITE_CONFIG } from "@/lib/site-config";
import {
  getServiceBySlug,
  getAvailableServiceSlugs,
} from "@/lib/services-config";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAvailableServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service | AZUM Medical" };
  return {
    title: `${service.title} | AZUM Medical`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen pb-24 md:pb-0">
        <section className="bg-[#faf9f7] py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/services"
              className="text-sm font-medium text-[#5b4d9e] hover:underline"
            >
              ← All Services
            </Link>
            <h1 className="mt-4 font-serif text-4xl font-semibold text-[#1f2937] sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-6 text-lg leading-[1.7] text-[#4b5563]">
              {service.description}
            </p>
          </div>
        </section>

        <section className="bg-white py-14 lg:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6 text-[#4b5563] leading-[1.7]">
              {service.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#ebe8f0] bg-[#faf9f7] py-14">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-lg text-[#4b5563]">
              Schedule a visit or ask us how we can support your care.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href={SITE_CONFIG.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] rounded-full bg-[#5b4d9e] px-6 py-3 text-center font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#4a3d82] hover:shadow-md"
              >
                Book an Appointment
              </a>
              <Link
                href="/contact"
                className="min-h-[48px] rounded-full border-2 border-[#5b4d9e] px-6 py-3 text-center font-semibold text-[#5b4d9e] transition-all duration-150 hover:bg-[#5b4d9e] hover:text-white"
              >
                Contact Us
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
