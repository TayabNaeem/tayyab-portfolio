import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Tayyab Naeem about a Shopify build, an AI chatbot, or an automation project.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's build something"
        accent="that grows your business."
        subtitle="Have a store to launch, a chatbot to build, or a workflow to automate? Tell me about it — I reply within a day."
      />
      <Contact hideHeading />
    </PageTransition>
  );
}
