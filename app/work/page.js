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
        title="Work I have"
        accent="shipped."
        subtitle="Live client stores, grouped by the kind of build. Hover any project to preview it, click to visit the real thing."
      />
      <Portfolio hideHeading grouped />
      <Testimonials />
      <CTA />
    </PageTransition>
  );
}
