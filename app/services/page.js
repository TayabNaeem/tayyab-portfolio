import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Services",
  description:
    "Shopify development, AI chatbot development, AI automation and API integrations by Tayyab Naeem.",
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Services"
        title="What I do"
        accent="best."
        subtitle="Storefronts that sell, assistants that talk, and systems that quietly run themselves — built end to end."
      />
      <Services hideHeading />
      <Process />
      <CTA />
    </PageTransition>
  );
}
