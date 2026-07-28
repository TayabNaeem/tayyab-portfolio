import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Work",
  description:
    "Selected Shopify builds, AI chatbots and automation pipelines delivered by Tayyab Naeem.",
};

export default function WorkPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Portfolio"
        title="Projects that"
        accent="delivered results."
        subtitle="A selection of storefronts, assistants and automation pipelines — with the numbers they moved."
      />
      <Portfolio hideHeading />
      <Testimonials />
      <CTA />
    </PageTransition>
  );
}
