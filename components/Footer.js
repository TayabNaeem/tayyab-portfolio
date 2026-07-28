"use client";

import Link from "next/link";

const QUICK = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
];

const SERVICES = [
  { href: "/services", label: "Shopify Dev" },
  { href: "/services", label: "AI Chatbots" },
  { href: "/services", label: "Automation" },
  { href: "/services", label: "Integrations" },
];

const SOCIALS = [
  { label: "IN", url: "https://www.linkedin.com/in/tayyab-naeem-54b011391/" },
  { label: "GH", url: "#" },
  { label: "X", url: "#" },
  { label: "IG", url: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t pt-16 pb-6" style={{ borderColor: "var(--border)" }}>
      <div className="shell grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5 font-display text-[1.15rem] font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-[9px] bg-grad text-[0.85rem] text-bg shadow-glow">◆</span>
            <span>Tayyab<span className="text-brand">.</span></span>
          </Link>
          <p className="my-3.5 max-w-[280px] text-[0.9rem] text-dim">
            Shopify developer, AI chatbot builder &amp; automation engineer — designing systems
            that sell and scale.
          </p>
          <div className="flex gap-2.5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.url}
                aria-label={s.label}
                target={s.url.startsWith("http") ? "_blank" : undefined}
                rel={s.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="grid h-[38px] w-[38px] place-items-center rounded-[10px] border bg-surface text-[0.78rem] font-semibold text-dim transition-all hover:-translate-y-0.5 hover:bg-grad hover:text-bg"
                style={{ borderColor: "var(--border)" }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-base">Quick Links</h4>
          {QUICK.map((q) => (
            <Link key={q.label} href={q.href} className="block py-1.5 text-[0.9rem] text-dim transition-colors hover:text-brand-light">
              {q.label}
            </Link>
          ))}
        </div>

        <div>
          <h4 className="mb-4 text-base">Services</h4>
          {SERVICES.map((s) => (
            <Link key={s.label} href={s.href} className="block py-1.5 text-[0.9rem] text-dim transition-colors hover:text-brand-light">
              {s.label}
            </Link>
          ))}
        </div>

        <div>
          <h4 className="mb-4 text-base">Get in touch</h4>
          <p className="mb-3.5 text-[0.88rem] text-dim">
            Have a project in mind? Let&apos;s talk about it.
          </p>
          <a href="mailto:naemtayb@gmail.com" className="block text-[0.9rem] text-dim transition-colors hover:text-brand-light">
            ✉️ naemtayb@gmail.com
          </a>
          <a href="tel:+923364103354" className="mt-1 block text-[0.9rem] text-dim transition-colors hover:text-brand-light">
            📞 +92 336 4103354
          </a>
          <Link href="/contact" className="btn btn-primary mt-4">
            Start a Project <span className="text-[0.78rem]">➤</span>
          </Link>
        </div>
      </div>

      <div
        className="shell mt-12 flex flex-wrap justify-between gap-2.5 border-t pt-5 text-[0.85rem] text-mute"
        style={{ borderColor: "var(--border)" }}
      >
        <span>© {year} Tayyab Naeem. All rights reserved.</span>
        <span>Built with Next.js &amp; Framer Motion.</span>
      </div>
    </footer>
  );
}
