import Link from "next/link";
import { ROLE } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="tn" style={{ borderTop: "1px solid var(--line)", background: "var(--bg)" }}>
      <div
        className="tn-shell"
        style={{ paddingTop: 24, paddingBottom: 24, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 16, fontSize: 14, color: "var(--muted)" }}
      >
        <span>© {new Date().getFullYear()} Tayyab Naeem · {ROLE}</span>
        <span style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
          <Link href="/" style={{ textDecoration: "none" }}>Home</Link>
          <Link href="/work" style={{ textDecoration: "none" }}>Work</Link>
          <Link href="/services" style={{ textDecoration: "none" }}>Services</Link>
          <Link href="/about" style={{ textDecoration: "none" }}>About</Link>
          <Link href="/contact" style={{ textDecoration: "none" }}>Contact</Link>
        </span>
      </div>
    </footer>
  );
}
