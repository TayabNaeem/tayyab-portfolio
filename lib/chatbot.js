/**
 * Answers for the site assistant.
 *
 * Deliberately scripted rather than generative: everything here is a claim
 * about Tayyab's services, so it has to be something he would actually say.
 * A model left to improvise would eventually invent a price, a deadline or a
 * capability, and that lands on him. Facts come from lib/services.js and the
 * FAQ; if those change, change them here too.
 *
 * Two intents escalate instead of answering — `pricing` and `connect`. Those
 * send him an email and promise a reply within 24 hours.
 */

export const ESCALATING = new Set(["pricing", "connect"]);

/**
 * Intents that reveal what someone actually wants built. Collected across a
 * conversation and reported in the wrap-up email, so the service no longer has
 * to be asked for on the form.
 */
export const SERVICE_LABELS = {
  shopify: "Shopify Development",
  wordpress: "WordPress Development",
  chatbot: "AI Chatbot & Voice Agents",
  automation: "Automations",
  ads: "Meta Ads",
  landing: "Landing Pages",
};

/** Matched top to bottom; first hit wins, so put the specific ones first. */
const INTENTS = [
  {
    id: "pricing",
    keywords: [
      "price", "pricing", "cost", "costs", "how much", "quote", "budget",
      "rate", "rates", "charge", "fee", "fees", "expensive", "cheap", "$",
      "payment", "pay",
    ],
    reply:
      "Pricing depends on scope, so Tayyab quotes each project rather than listing a rate card. Every project is fixed scope and fixed price, agreed before any work starts, so there is no hourly creep.\n\nI have passed your question to him with the details you gave me. He will come back to you within 24 hours with a number.",
  },
  {
    id: "connect",
    keywords: [
      "talk to", "speak to", "speak with", "call", "contact you", "contact him",
      "reach him", "reach you", "human", "real person", "meeting", "book a call",
      "schedule", "zoom", "whatsapp", "phone number", "email address", "hire",
    ],
    reply:
      "I have let Tayyab know you would like to speak with him, and passed on your details.\n\nHe will be in touch within 24 hours. If it is urgent, WhatsApp is the fastest route.",
  },
  {
    id: "shopify",
    keywords: ["shopify", "liquid", "theme", "storefront", "store", "ecommerce", "e-commerce"],
    reply:
      "Shopify is the bulk of Tayyab's work. That covers theme customization well past what the theme editor allows, custom Liquid sections and templates, speed optimization, app integration and design across every template rather than just the homepage.\n\nFourteen live storefronts are on the work page, including SoundSkins Global, Elite Auto Gear and Cybex.",
  },
  {
    id: "chatbot",
    keywords: [
      "chatbot", "chat bot", "bot", "voice", "voice agent", "ai agent", "agent",
      "botpress", "voiceflow", "vapi", "llm", "rag", "assistant",
    ],
    reply:
      "He builds LLM assistants grounded in your real content, so they answer from your catalog and documentation instead of guessing, plus voice agents that take calls end to end.\n\nBotpress and Voiceflow for conversational flows, Vapi for voice. The platform gets chosen around your channels and budget rather than defaulting to one tool.",
  },
  {
    id: "automation",
    keywords: ["automation", "automate", "n8n", "make.com", "zapier", "workflow", "integration", "api", "crm"],
    reply:
      "Automations tie your tools together so the repetitive work stops landing on a person: n8n, Make.com and Zapier, plus direct API work where an off-the-shelf connector will not do.\n\nTypical jobs are order and fulfilment pipelines, lead routing into a CRM, and reporting that assembles itself.",
  },
  {
    id: "wordpress",
    keywords: ["wordpress", "woocommerce", "elementor", "wp"],
    reply:
      "WordPress work covers custom themes built to a design rather than bent out of a stock template, WooCommerce setups, Elementor builds with reusable blocks, and the caching and plugin cleanup that keeps a site quick.\n\nThe aim is a site your team can edit without fear of breaking the layout.",
  },
  {
    id: "ads",
    keywords: ["meta ads", "facebook ads", "instagram ads", "ads", "advertising", "pixel", "capi", "campaign"],
    reply:
      "Meta Ads work covers campaign setup, Pixel and Conversions API so the tracking is actually reliable, creative testing and scaling what performs.",
  },
  {
    id: "landing",
    keywords: ["landing page", "landing", "funnel", "next.js", "nextjs", "a/b", "conversion rate"],
    reply:
      "Landing pages are built in Next.js with a copy structure aimed at one action, A/B testing and analytics wired in from the start rather than bolted on later.",
  },
  {
    id: "timeline",
    keywords: [
      "how long", "timeline", "deadline", "duration", "when can", "how fast",
      "turnaround", "weeks", "delivery", "start",
    ],
    reply:
      "Most builds ship within two weeks of the design being approved. Larger stores or multi-channel chatbot work can run longer, and you get a realistic timeline before anything starts rather than an optimistic one.\n\nThe shape of it is: pick a plan on day one, design for review by day five, built and launched inside two weeks.",
  },
  {
    id: "process",
    keywords: ["process", "how do you work", "how does it work", "steps", "revisions", "what do you need"],
    reply:
      "Three steps. You tell him what you need and get a fixed scope and price. He sends the design for review and revises until it is right. Approved work is built, tested and shipped, with a handover so your team can run it.\n\nTo start he needs your brand assets, access to the store or hosting, and an idea of what success looks like.",
  },
  {
    id: "existing",
    keywords: ["existing", "already have", "current site", "migrate", "migration", "redesign", "fix my"],
    reply:
      "Both new builds and existing stores. A lot of the work is taking a store that already sells and fixing what holds it back, whether that is speed, structure or a theme that was never customised properly. He will not rebuild something that does not need rebuilding.",
  },
  {
    id: "maintenance",
    keywords: ["maintain", "maintenance", "support", "after launch", "ongoing", "retainer", "updates"],
    reply:
      "Maintenance is available but optional. Everything is handed over with a walkthrough so your team can run it independently, and if you would rather he stayed on for updates and monitoring that is arranged separately.",
  },
  {
    id: "about",
    keywords: [
      "who is", "about him", "about you", "experience", "years", "background",
      "tayyab", "skills", "cv", "resume", "portfolio",
    ],
    reply:
      "Tayyab Naeem is a Shopify developer, AI chatbot and voice agent developer, and automation engineer, with four years of experience and fourteen live client storefronts behind him.\n\nThe work page has all of them, and each one links to the live site.",
  },
  {
    id: "services",
    keywords: ["services", "what do you do", "what can you", "offer", "help with", "specialise", "specialize"],
    reply:
      "Six things: Shopify development, WordPress development, AI chatbots and voice agents, automations, Meta Ads and landing pages.\n\nTell me which one matters to you and I will go into detail.",
  },
];

const GREETING = /^(hi|hey|hello|yo|salam|assalam|good (morning|afternoon|evening))\b/i;
const THANKS = /\b(thanks|thank you|thankyou|cheers|appreciate)\b/i;

/**
 * Picks a reply for a message.
 * Returns { id, reply } — id is used to decide whether to email Tayyab.
 */
export function answer(raw) {
  const text = String(raw || "").toLowerCase().trim();

  if (!text) {
    return { id: "empty", reply: "Ask me anything about the services, the process or the work." };
  }

  if (GREETING.test(text) && text.length < 24) {
    return {
      id: "greeting",
      reply: "Hello. Ask me about any of the services, how a project runs, or the work Tayyab has shipped.",
    };
  }

  if (THANKS.test(text)) {
    return { id: "thanks", reply: "Any time. Anything else you want to know?" };
  }

  // score by how many keywords hit, so a longer message still lands sensibly
  let best = null;
  let bestScore = 0;
  for (const intent of INTENTS) {
    let score = 0;
    for (const k of intent.keywords) if (text.includes(k)) score += k.length;
    if (score > bestScore) {
      bestScore = score;
      best = intent;
    }
  }

  if (best) return { id: best.id, reply: best.reply };

  return {
    id: "fallback",
    reply:
      "I am not sure I can answer that one properly, and I would rather not guess.\n\nI can cover the services, timelines, how a project runs and the work behind the site. For anything else, say \"talk to Tayyab\" and I will pass it to him directly.",
  };
}

/** Buttons offered under the first assistant message. */
export const SUGGESTIONS = [
  "What services do you offer?",
  "How much does a store cost?",
  "How long does a build take?",
  "Tell me about the chatbots",
  "I want to talk to Tayyab",
];
