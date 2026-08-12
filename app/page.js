import Hero from "@/components/Hero";
import RichText from "@/components/RichText";
import WorkShowcase from "@/components/WorkShowcase";
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
      <WorkShowcase limit={6} />
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
