import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import CTA from "@/components/CTA";

export const metadata = {
  title: "About",
  description:
    "About Tayyab Naeem — Shopify Developer, AI Chatbot Developer and AI Automation Engineer with 3+ years building commerce and automation systems.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="About Me"
        title="Building systems that"
        accent="sell and scale."
        subtitle="I'm Tayyab — I combine fast Shopify storefronts with AI assistants and automation so brands can grow without adding manual work."
      />
      <About />
      <TechStack />
      <CTA />
    </PageTransition>
  );
}
