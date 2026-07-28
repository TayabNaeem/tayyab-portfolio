import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Process",
  description:
    "How Tayyab Naeem works: Discover, Design, Build, Launch & Scale — a clear path from problem to a system that runs itself.",
};

export default function ProcessPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="How I Work"
        title="A simple,"
        accent="proven process."
        subtitle="No jargon, no surprises — four clear stages from first conversation to a live system you can grow on."
      />
      <Process hideHeading />
      <TechStack />
      <CTA />
    </PageTransition>
  );
}
