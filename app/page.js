import Hero from "@/components/Hero";
import RichText from "@/components/RichText";
import Portfolio from "@/components/Portfolio";
import TopProducts from "@/components/TopProducts";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseMe from "@/components/WhyChooseMe";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      {/* Hero already renders the logo marquee full-bleed beneath it */}
      <Hero />
      <RichText />
      <Portfolio />
      <TopProducts />
      <HowItWorks />
      <WhyChooseMe />
      <Testimonials />
      <Services />
      <FAQ />
      <CTA />
    </PageTransition>
  );
}
