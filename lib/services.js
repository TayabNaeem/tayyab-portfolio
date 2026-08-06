/**
 * Single source of truth for services.
 *
 * Pure data (no JSX) so server components can import it. `icon` is a key that
 * components/ServiceIcon.js maps to a component.
 */
export const SERVICES = [
  {
    slug: "shopify-development",
    no: "01",
    icon: "shopify",
    title: "Shopify Development",
    short:
      "Theme customization and custom Liquid development, with a professional design and the speed to match.",
    tags: [
      "Theme customization",
      "Custom Liquid dev",
      "Speed optimization",
      "App integration",
      "Professional design",
    ],
    intro:
      "I take Shopify themes well past what the theme editor allows — custom Liquid sections, a design that looks built for your brand, and the page speed to keep shoppers moving toward checkout.",
    includes: [
      ["Theme customization", "Reshape an existing theme around your brand instead of settling for defaults."],
      ["Custom Liquid development", "Bespoke sections and templates built directly in Liquid."],
      ["Speed optimization", "Trim scripts, images and render-blocking assets so pages load fast."],
      ["App integration", "Wire in the apps you rely on without bloating the storefront."],
      ["Professional design", "Clean, considered layouts across every template, not just the homepage."],
    ],
  },
  {
    slug: "wordpress-development",
    no: "02",
    icon: "wordpress",
    title: "WordPress Development",
    short:
      "Bespoke themes, WooCommerce stores and page-builder sites your team can actually maintain.",
    tags: ["Custom themes", "WooCommerce", "Elementor", "Speed"],
    intro:
      "WordPress sites built to be edited, not feared. Whether it's a custom theme or a page-builder setup, you get a clean structure your team can update without breaking the layout.",
    includes: [
      ["Custom themes", "Built to your design rather than bent out of a stock template."],
      ["WooCommerce", "Product, cart and checkout flows configured around how you actually sell."],
      ["Page builders", "Elementor setups with reusable blocks and sane naming."],
      ["Speed & hygiene", "Caching, image handling and plugin cleanup so the site stays quick."],
    ],
  },
  {
    slug: "ai-chatbot-voice-agents",
    no: "03",
    icon: "bot",
    title: "AI Chatbot & Voice Agents",
    short:
      "LLM assistants that answer, qualify and sell — plus voice agents that handle calls end to end.",
    tags: ["Botpress", "Voiceflow", "Vapi", "RAG"],
    intro:
      "Assistants grounded in your real content, so they answer from your catalog and docs instead of guessing. Text on your site and channels, or voice agents that take calls and hand off cleanly.",
    includes: [
      ["Grounded answers", "Retrieval over your products, policies and documentation."],
      ["Voice agents", "Inbound and outbound calls built on Vapi with natural turn-taking."],
      ["Multi-channel", "Web widget, WhatsApp and social inboxes from one brain."],
      ["Human handoff", "Clear escalation paths when the assistant should step aside."],
    ],
  },
  {
    slug: "automations",
    no: "04",
    icon: "workflow",
    title: "Automations",
    short:
      "Workflows that quietly remove manual work — syncing orders, data and alerts across your stack.",
    tags: ["n8n", "Make.com", "Zapier", "APIs"],
    intro:
      "The repetitive work between your tools, handled. Orders, inventory, invoices and alerts moving on their own, with error handling so failures surface instead of disappearing.",
    includes: [
      ["Workflow builds", "n8n, Make and Zapier automations mapped to your real process."],
      ["Order & data sync", "Keep store, CRM and spreadsheets agreeing with each other."],
      ["Custom API work", "Connect tools that have no off-the-shelf integration."],
      ["Monitoring", "Alerts and retries so a broken run doesn't go unnoticed."],
    ],
  },
  {
    slug: "meta-ads",
    no: "05",
    icon: "meta",
    title: "Meta Ads",
    short:
      "Facebook and Instagram campaigns built around creative testing, clean tracking and real ROAS.",
    tags: ["Campaign setup", "Pixel & CAPI", "Creative testing", "Scaling"],
    intro:
      "Campaigns structured so you can tell what's actually working. Tracking set up properly first, then a creative testing rhythm that gives winners room to scale.",
    includes: [
      ["Account & campaign setup", "Structure built for clean reading, not spaghetti ad sets."],
      ["Pixel & Conversions API", "Server-side tracking so signal survives browser restrictions."],
      ["Creative testing", "A steady testing cadence instead of guessing at hooks."],
      ["Scaling & reporting", "Budget decisions tied to numbers you can see."],
    ],
  },
  {
    slug: "landing-pages",
    no: "06",
    icon: "landing",
    title: "Landing Pages",
    short:
      "High-converting pages designed around a single offer, wired to your analytics from day one.",
    tags: ["Next.js", "Copy structure", "A/B testing", "Analytics"],
    intro:
      "One page, one offer, one action. Built fast and instrumented from the start so you learn something from every visitor rather than hoping the design works.",
    includes: [
      ["Offer-led structure", "Sections ordered around the decision the visitor is making."],
      ["Fast builds", "Next.js pages that load quickly on mobile connections."],
      ["A/B testing", "Variants set up so you can prove which version wins."],
      ["Analytics wiring", "Events and goals configured before launch, not after."],
    ],
  },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);
