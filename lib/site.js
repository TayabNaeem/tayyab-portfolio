/**
 * Content for the redesigned site (Design A). Every page reads from here,
 * so copy, projects and images stay in one place.
 *
 * Website projects show logos only. AI and automation projects show their
 * workflow images. No prices anywhere: every service ends in "Get a quote".
 */

export const CONTACT = {
  email: "naemtayb@gmail.com",
  phoneDisplay: "+92 336 4103354",
  phoneE164: "+923364103354",
  linkedin: "https://www.linkedin.com/in/tayyab-naeem-54b011391/",
};

export const ROLE = "Digital marketing expert · Shopify, AI & automation";

export const PHOTO = "/assets/profile.png";

const L = (f) => `/redesign/logos/${f}`;
const P = (f) => `/redesign/projects/${f}`;

export const STATS = [
  { value: 50, label: "projects completed" },
  { value: 30, label: "happy clients" },
  { value: 15, label: "automations built" },
  { value: 4, label: "years experience", suffix: " yrs" },
];

/* ---------------- Projects ---------------- */

export const CALEDONIA = {
  cat: "custom",
  name: "Caledonia Chauffeur Group",
  client: "Chauffeur service, Scotland",
  url: "https://www.caledoniachauffeurgroup.com",
  preview: P("caledonia.jpg"),
  logo: L("logo-caledonia-icon.png"),
  logoBg: "#0B0B0C",
  desc: "A custom-built website for a premium Scottish chauffeur company: a brand that feels first-class, clear service pages, and an enquiry flow that turns visitors into bookings.",
  tags: ["Custom build", "Booking enquiries", "SEO", "Next.js"],
  tools: "Next.js · custom design",
  result: "Live site",
};

const store = (name, client, url, logo, logoBg, desc, tags) => ({
  cat: "shopify", name, client, url, logo: logo ? L(logo) : null, logoBg, desc, tags,
  tools: "Shopify · Liquid", result: "Live store",
});

export const STORES = [
  store("SoundSkins Global", "Automotive", "https://soundskinsglobal.com", "logo-soundskins.png", "#FFFFFF", "Acoustic insulation for cars, organised by product series with pre-cut kits matched to vehicles.", ["Theme customization", "Custom Liquid", "Speed"]),
  store("Elite Auto Gear", "Car audio", "https://eliteautogear.com/", "logo-elite.png", "#0B0B0C", "Car audio retailer carrying speakers, amplifiers, subwoofers and install accessories.", ["Theme customization", "Custom Liquid", "App integration"]),
  store("Curated Chrome", "Jewellery", "https://curatedchrome.com/", "logo-curatedchrome.png", "#0B0B0C", "Statement chrome and sterling silver pieces, from watches and rings to necklaces.", ["Product pages", "Custom Liquid", "Design"]),
  store("Chicago Fragrance", "Fragrance", "https://chicagofragrance.com/", "logo-chicagofragrance.png", "#0B0B0C", "Designer, niche and rare discontinued scents, backed by two Chicago stores.", ["Theme customization", "Search", "App integration"]),
  store("Haus", "Athletic apparel", "https://gohaus.com/", "logo-gohaus.png", "#FFFFFF", "Performance and lifestyle clothing for men: tanks, hoodies, shorts and training gear.", ["Custom theme", "Speed", "Collections"]),
  store("KIAURA Eyewear", "Eyewear", "https://kiauraeyewear.com/", "logo-kiaura.png", "#FFFFFF", "Vintage and designer frames, built to run promotions without a redesign.", ["Custom Liquid", "Promotions", "Speed"]),
  store("Aug11", "Headwear", "https://aug11.co/", "logo-aug11.png", "#FFFFFF", "Premium hats on a perfect-fit guarantee, across new arrivals and limited drops.", ["Custom theme", "Product drops", "Design"]),
  store("Coastal 1776", "Resort wear", "https://coastal1776.com/", "logo-coastal1776.png", "#FFFFFF", "Luxury resort and beachwear: linen shirts, dresses and coastal accessories.", ["Theme customization", "Lookbook", "Speed"]),
  store("Heart4Kicks", "Sneaker accessories", "https://heart4kicks.com/", "logo-heart4kicks.png", "#FFFFFF", "Charms, patches and apparel for customising sneakers, plus bookable styling sessions.", ["Custom Liquid", "Booking flow", "App integration"]),
  store("Lala's Closet Boutique", "Family apparel", "https://www.lalasclosetboutique.com/", "logo-lalascloset.png", "#FFFFFF", "A family boutique with women's, men's and children's clothing and footwear.", ["Theme customization", "Collections", "Speed"]),
  store("250 USA Celebration", "Commemorative apparel", "https://250usacelebration.com/", "logo-usa250.png", "#FFFFFF", "Clothing for America's 250th anniversary: tees, hoodies, dresses and accessories.", ["Custom theme", "Seasonal launch", "Collections"]),
  store("GMills Inc", "Memorials", "https://gmillsinc.myshopify.com/", "logo-gmills.png", "#FFFFFF", "Personalised granite headstones and benches, with design consultation and installation.", ["Custom forms", "Custom Liquid", "Design"]),
  store("Cybex", "Activewear", "https://cybex.shopping/", "logo-cybex.png", "#111216", "Premium activewear for men and women, from tracksuits to leggings.", ["Custom theme", "Speed", "Design"]),
  store("RELA", "Pet care", "https://liverela.com", null, "#FFFFFF", "A pet care brand in pre-launch, behind a coming-soon page.", ["Theme setup", "Pre-launch"]),
];

export const AGENTS = [
  { cat: "ai", name: "DM Closer: Instagram sales agent", client: "Car dealership", cover: P("car-dealer.webp"), desc: "Answers DMs at a human pace, knows the stock and prices, and sends qualified leads into the CRM.", tags: ["Lead generation", "Instagram DMs", "CRM sync"], tools: "n8n · Mistral · Instagram · Sheets · Gmail", result: "500+ leads / month" },
  { cat: "ai", name: "Campervan booking concierge", client: "Van rental, Portugal", cover: P("van-booking.webp"), desc: "Checks live van availability and offers the nearest free dates or another van instead of a dead end.", tags: ["Live availability", "Bookings", "Smart fallbacks"], tools: "n8n · Botpress · MotoPress API", result: "No manual availability checks" },
  { cat: "ai", name: "Bilingual dental front desk", client: "Dental clinic", cover: P("dental.webp"), desc: "An English and Spanish assistant that shows real-time slots and books appointments into the clinic calendar.", tags: ["Bilingual", "Appointments", "24/7"], tools: "Botpress · n8n · Cal.com", result: "24/7 in 2 languages" },
  { cat: "ai", name: "Verified lead desk", client: "Real estate law firm", cover: P("law-firm.webp"), desc: "Verifies each visitor by email code, runs a guided legal intake and books consultations.", tags: ["Verified leads", "Legal intake", "Scheduling"], tools: "Botpress · n8n · Calendly · Sheets · Gmail", result: "Only verified leads reach the team" },
  { cat: "ai", name: "One bot, many brands", client: "Education group", cover: P("multi-site.webp"), desc: "A single AI agent on several websites that switches to each brand’s knowledge and tone.", tags: ["Multi-site", "Dynamic knowledge", "Support"], tools: "Botpress · JavaScript", result: "1 bot, multiple sites" },
  { cat: "ai", name: "Voice coach for boundary practice", client: "Coaching app", cover: P("voice-agent.webp"), desc: "A voice agent that role-plays six levels of pressure scenarios and remembers each user’s progress.", tags: ["Voice agent", "Role-play", "Session memory"], tools: "Voiceflow · n8n · OpenAI", result: "Replies in under 3 seconds" },
  { cat: "auto", name: "LinkedIn reply agent", client: "B2B outreach", cover: P("linkedin-agent.webp"), desc: "Reads every new LinkedIn message, works out the intent and sends a short, natural reply.", tags: ["Outreach", "Intent detection", "Auto-reply"], tools: "n8n · HeyReach · OpenAI · Mistral", result: "24/7 replies to every lead" },
  { cat: "auto", name: "AI interview & candidate scoring", client: "Recruitment", cover: P("interview.png"), desc: "Interviews candidates in chat, parses resumes, scores them out of 100 and files them in Notion.", tags: ["Hiring", "Resume parsing", "Scoring"], tools: "n8n · OpenAI · Mistral · Notion", result: "Hours saved per role" },
];

export const CATEGORY_LABELS = {
  shopify: "Shopify",
  ai: "AI chatbot & voice",
  auto: "Automation",
  custom: "Custom website",
};

/* ---------------- Services ---------------- */

export const SERVICES = [
  {
    id: "shopify", num: "01", kicker: "Most booked", title: "Shopify development",
    short: "Fast, premium stores your team can edit without calling me.",
    desc: "Custom themes and Liquid sections designed to load fast, look premium and convert, on a store your team can edit without calling me.",
    includes: ["Custom theme design & build", "Custom Liquid sections", "Speed & Core Web Vitals", "App setup, integration & cleanup", "Product & collection pages", "Store migrations"],
    tools: ["Shopify", "Liquid", "Theme editor", "Apps"], timeline: "2–4 weeks",
    example: { image: L("logo-soundskins.png"), logoBg: "#FFFFFF", alt: "SoundSkins logo", name: "SoundSkins Global", client: "Automotive · Shopify", result: "1 of 14 live stores" },
  },
  {
    id: "custom", num: "02", kicker: "Brand-first", title: "Custom websites & landing pages",
    short: "Bespoke sites and launch pages that look first-class.",
    desc: "Bespoke sites and single-offer landing pages for brands that need to look first-class, wired to analytics and enquiry forms from day one.",
    includes: ["Custom design", "Next.js build", "Booking & enquiry flows", "SEO foundations", "Copy structure", "A/B testing"],
    tools: ["Next.js", "Custom design", "Analytics"], timeline: "2–5 weeks",
    example: { image: P("caledonia.jpg"), alt: "Caledonia Chauffeur Group preview with full wordmark", name: "Caledonia Chauffeur Group", client: "Chauffeur service, Scotland", result: "Live custom site" },
  },
  {
    id: "ai", num: "03", kicker: "Fastest growing", title: "AI chatbots & voice agents",
    short: "Agents that answer, qualify and book, around the clock.",
    desc: "Agents trained on your products and policies that answer customers, qualify leads and book appointments, on your site, Instagram or the phone.",
    includes: ["Website & Instagram chat agents", "Voice agents for calls", "Bookings & calendar sync", "Multi-language support", "CRM & sheet hand-off", "Human hand-off rules"],
    tools: ["Botpress", "Voiceflow", "Vapi", "n8n", "OpenAI"], timeline: "1–3 weeks",
    example: { image: P("car-dealer.webp"), alt: "n8n workflow behind the Instagram sales agent", name: "DM Closer", client: "Car dealership", result: "500+ leads / month" },
  },
  {
    id: "automation", num: "04", kicker: "Time back", title: "Workflow automation",
    short: "Orders, leads and alerts moving on their own.",
    desc: "n8n and Make workflows that move orders, leads, candidates and alerts between the tools you already pay for, with nobody copying and pasting.",
    includes: ["Order & stock sync", "Lead routing & CRM", "Hiring & screening flows", "Slack, email & WhatsApp alerts", "Custom API connections", "Monitoring & error alerts"],
    tools: ["n8n", "Make.com", "Zapier", "APIs"], timeline: "1–2 weeks",
    example: { image: P("interview.png"), alt: "n8n hiring workflow", name: "AI interview & candidate scoring", client: "Recruitment", result: "Hours saved per role" },
  },
  {
    id: "wordpress", num: "05", kicker: "Flexible", title: "WordPress development",
    short: "Custom themes and WooCommerce sites, easy to update.",
    desc: "Bespoke themes, WooCommerce stores and Elementor sites that your team can keep up to date on their own.",
    includes: ["Custom themes", "WooCommerce stores", "Elementor builds", "Speed optimisation"],
    tools: ["WordPress", "WooCommerce", "Elementor"], timeline: "2–4 weeks",
    example: { image: P("wordpress-example.png"), alt: "Homepage of a custom WordPress site for a car-dealer marketing company", name: "Car-dealer lead generation site", client: "Custom WordPress theme · automotive marketing", result: "Custom theme" },
  },
  {
    id: "ads", num: "06", kicker: "Growth", title: "Meta ads",
    short: "Tested creatives and clean tracking that scale.",
    desc: "Facebook and Instagram campaigns built on creative testing and clean tracking, so you can see exactly what each pound or dollar returns.",
    includes: ["Campaign setup", "Pixel & Conversions API", "Creative testing plan", "Scaling what works"],
    tools: ["Meta Ads", "Pixel", "CAPI"], timeline: "Monthly",
    example: { image: P("meta-ads-example.png"), alt: "Meta Ads Manager table of 36 messaging ad sets with reach, cost per conversation and CTR", name: "Messaging lead campaign", client: "Meta ads · 36 ad sets · 50,266 reach", result: "$0.31 per conversation" },
  },
];

/* ---------------- Reviews, process, FAQ ---------------- */

export const REVIEWS = [
  { first: "Syed", person: "Syed", initials: "S", store: "Chicago Fragrance" },
  { first: "Milysa", person: "Milysa Machette Miller", initials: "MM", store: "Heart4Kicks" },
  { first: "Tyler", person: "Tyler Mills", initials: "TM", store: "GMills Inc" },
  { first: "Shahmir", person: "Shahmir Khan", initials: "SK", store: "Cybex" },
];

export const PROCESS = [
  { step: "01 · 30 min", title: "Free discovery call", desc: "We look at your store, tools and goals together." },
  { step: "02 · 2 days", title: "Plan & quote", desc: "Deliverables, timeline and your quote, in writing." },
  { step: "03 · 1–4 weeks", title: "Build with weekly previews", desc: "Click through a staging store or test bot each week." },
  { step: "04 · launch", title: "Launch & support", desc: "Go live with a recorded handover for your team." },
];

export const FAQ = [
  { q: "How much does a project cost?", a: "Every project is different, so I quote each one individually after a free call. Get in touch with what you need and you will have a clear quote before any work starts." },
  { q: "How long until my store or site is live?", a: "Most stores and sites launch in 2 to 4 weeks. AI agents and automations usually take 1 to 3 weeks." },
  { q: "Can my team edit the site after launch?", a: "Yes. I build editable sections and record a walkthrough so your team can change content without me." },
  { q: "Do AI agents replace my support team?", a: "They handle the repeat questions and bookings, and hand anything tricky to a real person with the full conversation attached." },
  { q: "Do you work with clients outside my country?", a: "Yes. I work remotely with business owners worldwide, with calls at a time that suits you." },
];

/* ---------------- Project detail pages ---------------- */

export const slugify = (s) =>
  s.toLowerCase().replace(/['’]/g, "").replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** How each AI / automation project works, step by step (shown on its detail page). */
const AGENT_STEPS = {
  "DM Closer: Instagram sales agent": [
    ["Replies like a person", "Answers Instagram DMs with natural, timed delays so the chat feels human, not robotic."],
    ["Knows the dealership", "Trained on the stock, prices and buying or selling questions, so answers are accurate."],
    ["Sorts every chat", "An AI step tags each conversation as buy, sell or just browsing."],
    ["Sends leads to the CRM", "Qualified leads are formatted and emailed straight into the dealer's CRM, with no typing."],
  ],
  "Campervan booking concierge": [
    ["Asks what they want", "A specific van model, or any van that's free."],
    ["Collects the trip", "Check-in and check-out dates, plus the number of adults and children."],
    ["Checks live availability", "Looks up the booking system in real time for the chosen dates."],
    ["Never a dead end", "If it's taken, it offers the nearest free dates or another van, then sends them to book."],
  ],
  "Bilingual dental front desk": [
    ["Chats in two languages", "Patients talk to the assistant in English or Spanish."],
    ["Answers questions", "Explains treatments and clinic details in the patient's language."],
    ["Books real slots", "Shows live appointment times from the clinic calendar and books the chosen one."],
    ["Keeps the clinic in sync", "Confirmations and clinic notifications run automatically in the background."],
  ],
  "Verified lead desk": [
    ["Verifies the visitor", "Sends a one-time code to their email before the chat opens."],
    ["Runs the intake", "Asks about their property, contract or case like a legal assistant would."],
    ["Books a consultation", "Shows available times and books the meeting inside the chat."],
    ["Logs and alerts", "Every verified lead lands in a sheet and the team gets an email straight away."],
  ],
  "One bot, many brands": [
    ["One bot, embedded everywhere", "A single agent is added to several websites with one small script."],
    ["Knows where it is", "When the chat opens, it detects which website it's on."],
    ["Switches its knowledge", "It loads that brand's knowledge base, tone and answers."],
    ["Feels made for each site", "Visitors get site-specific help, while the business manages one bot."],
  ],
  "Voice coach for boundary practice": [
    ["Six levels of practice", "Users role-play pressure scenarios that get harder level by level."],
    ["Adapts in real time", "The voice agent changes tone and pushes back like a real person would."],
    ["Remembers progress", "Each session's results are saved automatically through a workflow."],
    ["Picks up where they left off", "Users resume at the right level, with replies in under 3 seconds."],
  ],
  "LinkedIn reply agent": [
    ["Catches every message", "New LinkedIn messages arrive through the outreach tool's webhook."],
    ["Reads the whole thread", "The conversation is cleaned up so the AI sees who said what."],
    ["Decides if a reply is needed", "AI works out the intent: sales, partnership or just networking."],
    ["Replies naturally", "Writes a short, on-tone reply and sends it, around the clock."],
  ],
  "AI interview & candidate scoring": [
    ["Candidate intake", "A chat collects name, email, the role and their resume."],
    ["AI interview", "Asks technical and behavioural questions and records the answers."],
    ["Resume matching", "Parses the resume and compares it with the role's requirements."],
    ["Scored and filed", "Gives a score out of 100 and files them as Proceed, Hold or Not a fit in Notion."],
  ],
};

const withSlug = (p) => ({ ...p, slug: slugify(p.name) });

/** Every project in Work-page order, each with a slug for /work/[slug]. */
export const ALL_PROJECTS = [
  withSlug(CALEDONIA),
  ...STORES.map(withSlug),
  ...AGENTS.map((a) => withSlug({ ...a, steps: AGENT_STEPS[a.name] || [] })),
];

export const getProject = (slug) => ALL_PROJECTS.find((p) => p.slug === slug);

export const projectHref = (p) => `/work/${p.slug || slugify(p.name)}`;
