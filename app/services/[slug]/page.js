import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import CTA from "@/components/CTA";
import { SERVICES, getService } from "@/lib/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = getService(params.slug);
  if (!s) return {};
  return { title: s.title, description: s.short };
}

export default function ServicePage({ params }) {
  const s = getService(params.slug);
  if (!s) notFound();

  const others = SERVICES.filter((o) => o.slug !== s.slug);

  return (
    <PageTransition>
      <PageHeader eyebrow={`Service ${s.no}`} title={s.title} subtitle={s.intro} />

      <section className="shell pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* what's included */}
          <div>
            <Reveal>
              <span className="eyebrow">WHAT&apos;S INCLUDED</span>
              <h2 className="h2 mb-8">
                How I approach <span className="grad-text">{s.title.toLowerCase()}.</span>
              </h2>
            </Reveal>

            <div className="space-y-3">
              {s.includes.map(([title, desc], i) => (
                <Reveal key={title} delay={i * 0.06}>
                  <div
                    className="flex gap-4 rounded-2xl border bg-surface p-5 transition-colors hover:border-brand/40"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-grad text-bg">
                      <Check size={15} strokeWidth={3} />
                    </span>
                    <div>
                      <h3 className="h4 mb-1">{title}</h3>
                      <p className="body">{desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* sidebar */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <div
                className="rounded-[24px] border p-7 shadow-soft"
                style={{
                  borderColor: "var(--border-2)",
                  background: "linear-gradient(160deg,#1c1c20,#151517)",
                }}
              >
                <span
                  className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border bg-surface-2 text-brand"
                  style={{ borderColor: "var(--border)" }}
                >
                  <ServiceIcon icon={s.icon} className="h-7 w-7" />
                </span>

                <h3 className="h3 mb-2">{s.title}</h3>
                <p className="body mb-6">{s.short}</p>

                <div className="mb-7 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border bg-surface-2 px-2.5 py-1 text-[0.75rem] text-dim"
                      style={{ borderColor: "var(--border)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link href="/contact" className="btn btn-primary w-full justify-center">
                  Start a project <ArrowUpRight size={15} strokeWidth={2.2} />
                </Link>
              </div>
            </Reveal>

            {/* other services */}
            <Reveal delay={0.1}>
              <div className="mt-8">
                <h4 className="h4 mb-4">Other services</h4>
                <div className="flex flex-col">
                  {others.map((o) => (
                    <Link
                      key={o.slug}
                      href={`/services/${o.slug}`}
                      className="group flex items-center gap-3 border-b py-3 transition-colors hover:text-white"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <span className="text-brand">
                        <ServiceIcon icon={o.icon} className="h-4 w-4" />
                      </span>
                      <span className="body text-[0.9rem] transition-colors group-hover:text-white">
                        {o.title}
                      </span>
                      <ArrowUpRight
                        size={14}
                        strokeWidth={2}
                        className="ml-auto text-mute opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA />
    </PageTransition>
  );
}
