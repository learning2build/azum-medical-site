import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { MeetTheDoctor } from "@/components/home/MeetTheDoctor";
import { NewPatientProcess } from "@/components/home/NewPatientProcess";
import { WhyChooseAzum } from "@/components/home/WhyChooseAzum";
import { Testimonials } from "@/components/home/Testimonials";
import { InsuranceInfo } from "@/components/home/InsuranceInfo";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        <Hero />
        <TrustStrip />
        <ServicesOverview />
        <MeetTheDoctor />
        <NewPatientProcess />
        <WhyChooseAzum />
        <Testimonials />
        <InsuranceInfo />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
