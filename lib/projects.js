/**
 * Live client work. Categories drive the grouped sections on /work.
 *
 * Descriptions reflect what each storefront actually sells, taken from the
 * live sites. Screenshots resolve from public/portfolio/shots or the asset
 * base; missing ones fall back to a generated mockup.
 */
export const CATEGORIES = [
  { key: "shopify", label: "Shopify Stores", eyebrow: "SHOPIFY" },
  { key: "chatbot", label: "AI Chatbots & Voice", eyebrow: "AI CHATBOTS" },
  { key: "automation", label: "Automations", eyebrow: "AUTOMATION" },
];

export const PROJECTS = [
  {
    id: "soundskins",
    category: "shopify",
    name: "SoundSkins Global",
    url: "https://soundskinsglobal.com",
    tag: "Automotive",
    accent: "#a855f7",
    accent2: "#6d28d9",
  },
  {
    id: "elite",
    category: "shopify",
    name: "Elite Auto Gear",
    url: "https://eliteautogear.com/",
    tag: "Car Audio",
    accent: "#7c3aed",
    accent2: "#a855f7",
  },
  {
    id: "gohaus",
    category: "shopify",
    name: "Haus",
    url: "https://gohaus.com/",
    tag: "Athletic Apparel",
    accent: "#8b5cf6",
    accent2: "#4f46e5",
  },
  {
    id: "curatedchrome",
    category: "shopify",
    name: "Curated Chrome",
    url: "https://curatedchrome.com/",
    tag: "Jewellery",
    accent: "#a78bfa",
    accent2: "#6d28d9",
  },
  {
    id: "chicagofragrance",
    category: "shopify",
    name: "Chicago Fragrance",
    url: "https://chicagofragrance.com/",
    tag: "Fragrance",
    accent: "#9333ea",
    accent2: "#7c3aed",
  },
  {
    id: "kiaura",
    category: "shopify",
    name: "KIAURA Eyewear",
    url: "https://kiauraeyewear.com/",
    tag: "Eyewear",
    accent: "#6d28d9",
    accent2: "#a855f7",
  },
  {
    id: "aug11",
    category: "shopify",
    name: "Aug11",
    url: "https://aug11.co/",
    tag: "Headwear",
    accent: "#8b5cf6",
    accent2: "#7c3aed",
  },
  {
    id: "coastal1776",
    category: "shopify",
    name: "Coastal 1776",
    url: "https://coastal1776.com/",
    tag: "Resort Wear",
    accent: "#a855f7",
    accent2: "#4f46e5",
  },
  {
    id: "heart4kicks",
    category: "shopify",
    name: "Heart4Kicks",
    url: "https://heart4kicks.com/",
    tag: "Sneaker Accessories",
    accent: "#c084fc",
    accent2: "#7c3aed",
  },
  {
    id: "lalascloset",
    category: "shopify",
    name: "Lala's Closet Boutique",
    url: "https://www.lalasclosetboutique.com/",
    tag: "Family Apparel",
    accent: "#a78bfa",
    accent2: "#4f46e5",
  },
  {
    id: "usa250",
    category: "shopify",
    name: "250 USA Celebration",
    url: "https://250usacelebration.com/",
    tag: "Commemorative Apparel",
    accent: "#9333ea",
    accent2: "#6d28d9",
  },
  {
    id: "gmills",
    category: "shopify",
    name: "GMills Inc",
    url: "https://gmillsinc.myshopify.com/",
    tag: "Memorials",
    accent: "#7c3aed",
    accent2: "#8b5cf6",
  },
  {
    id: "cybex",
    category: "shopify",
    name: "Cybex",
    url: "https://cybex.shopping/",
    tag: "Activewear",
    accent: "#8b5cf6",
    accent2: "#6d28d9",
  },
  {
    id: "rela",
    category: "shopify",
    name: "RELA",
    url: "https://liverela.com",
    tag: "Pet Care",
    accent: "#6d28d9",
    accent2: "#8b5cf6",
  },
];

/** Projects for one category, in listed order. */
export const byCategory = (key) => PROJECTS.filter((p) => p.category === key);

/** Only the categories that actually have work in them. */
export const populatedCategories = () =>
  CATEGORIES.filter((c) => PROJECTS.some((p) => p.category === c.key));
