"use client";

const QUICK = ["Home", "About", "Services", "Portfolio"];
const SERVICES = ["Shopify Dev", "AI Chatbots", "Automation", "Integrations"];
const SOCIALS = [
  { label: "IN", url: "https://www.linkedin.com/in/tayyab-naeem-54b011391/" },
  { label: "GH", url: "#" },
  { label: "X", url: "#" },
  { label: "IG", url: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t mt-16 pt-14 pb-6 px-5 sm:px-8 md:px-12" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1160px] mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
        <div>
          <a href="#home" className="flex items-center gap-2.5 text-[1.15rem] font-bold font-display">
            <span className="grid place-items-center w-8 h-8 rounded-[9px] bg-grad text-bg text-[0.85rem] shadow-glow">◆</span>
            <span>Tayyab<span className="text-brand">.</span></span>
          </a>
          <p className="text-dim text-[0.9rem] my-3.5 max-w-[260px]">
            Designing and building digital experiences that drive results.
          </p>
          <div className="flex gap-2.5">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.url} aria-label={s.label}
                 target={s.url.startsWith("http") ? "_blank" : undefined}
                 rel={s.url.startsWith("http") ? "noopener noreferrer" : undefined}
                 className="w-[38px] h-[38px] grid place-items-center rounded-[10px] border bg-surface text-dim text-[0.78rem] font-semibold transition-all hover:bg-grad hover:text-bg hover:-translate-y-0.5"
                 style={{ borderColor: "var(--border)" }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-base mb-4">Quick Links</h4>
          {QUICK.map((q) => (
            <a key={q} href={`#${q.toLowerCase()}`} className="block text-dim text-[0.9rem] py-1.5 hover:text-brand-light transition-colors">{q}</a>
          ))}
        </div>

        <div>
          <h4 className="text-base mb-4">Services</h4>
          {SERVICES.map((s) => (
            <a key={s} href="#services" className="block text-dim text-[0.9rem] py-1.5 hover:text-brand-light transition-colors">{s}</a>
          ))}
        </div>

        <div>
          <h4 className="text-base mb-4">Subscribe</h4>
          <p className="text-dim text-[0.88rem] mb-3.5">Get occasional updates on my latest work.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input type="email" placeholder="Your email" aria-label="Email"
                   className="flex-1 rounded-[10px] bg-bg-soft border px-3.5 py-2.5 text-[0.88rem] outline-none focus:border-brand"
                   style={{ borderColor: "var(--border)" }} />
            <button type="submit" className="btn btn-primary px-4 py-2.5">➤</button>
          </form>
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto mt-10 pt-5 border-t flex flex-wrap justify-between gap-2.5 text-mute text-[0.85rem]"
           style={{ borderColor: "var(--border)" }}>
        <span>© {year} Tayyab Naeem. All rights reserved.</span>
        <span>Built with care.</span>
      </div>
    </footer>
  );
}
