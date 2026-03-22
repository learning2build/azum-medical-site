import { AboutPageContent } from "@/components/about/AboutPageContent";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";

export const metadata = {
  title: "About Us | AZUM Medical",
  description:
    "Practice philosophy and approach at AZUM Medical—patient-centered care, community health, evidence-based treatment, and inclusive primary care in Houston.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-24 md:pb-0">
        <AboutPageContent />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
