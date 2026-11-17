"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PHOTO } from "@/lib/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const path = usePathname();
  const isActive = (href) => (href === "/" ? path === "/" : path?.startsWith(href));

  return (
    <header className="tn" style={{ borderBottom: "1px solid var(--line)", background: "var(--bg)" }}>
      <div
        className="tn-shell"
        style={{ paddingTop: 18, paddingBottom: 18, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}
      >
        <Link
          href="/"
          className="tn-display"
          style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", fontWeight: 700, fontSize: 20, letterSpacing: "-0.02em" }}
        >
          <span
            style={{ position: "relative", width: 42, height: 42, flex: "none", borderRadius: "50%", overflow: "hidden", background: "var(--line)", border: "2px solid var(--surface)", boxShadow: "0 0 0 1px var(--line)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PHOTO}
              alt="Tayyab Naeem"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 6%", transform: "scale(1.9)", transformOrigin: "50% 14%" }}
            />
          </span>
          Tayyab Naeem
        </Link>
        <nav aria-label="Main" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 28, fontSize: 15, fontWeight: 500 }}>
          {NAV.map((n) => {
            const on = isActive(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={on ? "page" : undefined}
                style={{ textDecoration: "none", color: on ? "var(--ink)" : "var(--muted)", fontWeight: on ? 600 : 500 }}
              >
                {n.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="tn-btn-primary"
            style={{ textDecoration: "none", background: "var(--accent)", color: "#0D1117", padding: "11px 20px", borderRadius: 999, fontWeight: 600 }}
          >
            Book a free call
          </Link>
        </nav>
      </div>
    </header>
  );
}
