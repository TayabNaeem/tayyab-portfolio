"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { LinkedinIcon, GithubIcon, WhatsappIcon, InstagramIcon } from "./SocialIcons";

const EMAIL = "naemtayb@gmail.com";
const PHONE_DISPLAY = "+92 336 4103354";
const PHONE_E164 = "+923364103354";
const LINKEDIN = "https://www.linkedin.com/in/tayyab-naeem-54b011391/";

const QUICK = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

const SERVICES = [
  "Shopify Development",
  "Website Development",
  "AI Chatbots",
  "AI Automation",
  "CRM Management",
];

const CONTACTS = [
  { Icon: Mail, label: EMAIL, href: `mailto:${EMAIL}` },
  { Icon: Phone, label: PHONE_DISPLAY, href: `tel:${PHONE_E164}` },
  { Icon: MapPin, label: "Pakistan · Working worldwide" },
];

const SOCIALS = [
  { Icon: WhatsappIcon, label: "WhatsApp", href: `https://wa.me/${PHONE_E164.replace("+", "")}` },
  { Icon: LinkedinIcon, label: "LinkedIn", href: LINKEDIN },
  { Icon: GithubIcon, label: "GitHub", href: "#" },
  { Icon: InstagramIcon, label: "Instagram", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t pt-16 pb-6" style={{ borderColor: "var(--border)" }}>
      <div className="shell grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        {/* brand + socials */}
        <div>
          <Link href="/" className="flex items-center gap-2.5 font-display text-[1.15rem] font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-[9px] bg-grad text-[0.85rem] text-bg shadow-glow">
              ◆
            </span>
            <span>
              Tayyab<span className="text-brand">.</span>
            </span>
          </Link>

          <p className="my-4 max-w-[290px] text-[0.9rem] text-dim">
            Shopify developer, AI chatbot builder &amp; automation engineer — designing systems
            that sell and scale.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {SOCIALS.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                title={label}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="grid h-10 w-10 place-items-center rounded-xl border bg-surface text-dim transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand"
                style={{ borderColor: "var(--border)" }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* quick links */}
        <div>
          <h4 className="mb-4 text-base">Quick Links</h4>
          {QUICK.map((q) => (
            <Link
              key={q.label}
              href={q.href}
              className="group flex items-center gap-1.5 py-1.5 text-[0.9rem] text-dim transition-colors hover:text-brand-light"
            >
              {q.label}
              <ArrowUpRight
                size={13}
                strokeWidth={2}
                className="opacity-0 transition-opacity group-hover:opacity-100"
              />
            </Link>
          ))}
        </div>

        {/* services */}
        <div>
          <h4 className="mb-4 text-base">Services</h4>
          {SERVICES.map((s) => (
            <Link
              key={s}
              href="/services"
              className="block py-1.5 text-[0.9rem] text-dim transition-colors hover:text-brand-light"
            >
              {s}
            </Link>
          ))}
        </div>

        {/* contact */}
        <div>
          <h4 className="mb-4 text-base">Get in touch</h4>
          <ul className="space-y-3">
            {CONTACTS.map(({ Icon, label, href }) => {
              const body = (
                <>
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border bg-surface text-brand transition-colors group-hover:border-brand"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <Icon size={16} strokeWidth={1.8} />
                  </span>
                  <span className="text-[0.88rem] text-dim transition-colors group-hover:text-white">
                    {label}
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a href={href} className="group flex items-center gap-3">
                      {body}
                    </a>
                  ) : (
                    <div className="group flex items-center gap-3">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <Link href="/contact" className="btn btn-primary mt-5">
            Start a Project <ArrowUpRight size={15} strokeWidth={2.2} />
          </Link>
        </div>
      </div>

      <div
        className="shell mt-14 flex flex-wrap justify-between gap-2.5 border-t pt-5 text-[0.85rem] text-mute"
        style={{ borderColor: "var(--border)" }}
      >
        <span>© {year} Tayyab Naeem. All rights reserved.</span>
        <span>Built with Next.js &amp; Framer Motion.</span>
      </div>
    </footer>
  );
}
