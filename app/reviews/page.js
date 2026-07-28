import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Reviews",
  description: "What clients say about working with Tayyab Naeem.",
};

export default function ReviewsPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Testimonials"
        title="What clients say"
        accent="about me."
        subtitle="Real feedback from founders and operations teams I've built storefronts, chatbots and automations for."
      />
      <Testimonials hideHeading />
      <CTA />
    </PageTransition>
  );
}
