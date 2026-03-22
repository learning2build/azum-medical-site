import Link from "next/link";
import { ContactMessageForm } from "@/components/contact/ContactMessageForm";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";

const backLink =
  "text-sm font-medium text-[#5b4d9e] underline-offset-2 transition-colors hover:text-[#4a3d82] hover:underline";

export const metadata = {
  title: "Send a message | AZUM Medical",
  description:
    "Contact AZUM Medical by message. We will respond by email as soon as we can.",
};

export default function ContactMessagePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-24 md:pb-0">
        <section className="bg-[#faf9f7] py-14 lg:py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <p>
              <Link href="/contact" className={backLink}>
                ← Back to Contact &amp; location
              </Link>
            </p>
            <h1 className="mt-6 font-serif text-3xl font-semibold text-[#1f2937] sm:text-4xl">
              Send us a message
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-[#6b7280] sm:text-base">
              Submit the form and we&apos;ll receive your message by email. You
              don&apos;t need to open your mail app.
            </p>
            <div className="mt-8">
              <ContactMessageForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
