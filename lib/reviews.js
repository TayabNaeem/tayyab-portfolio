import { PROJECTS } from "@/lib/projects";

/**
 * DRAFT QUOTES — every store is real work. The four entries marked `real: true`
 * are clients Tayyab named himself: Syed, Milysa Machette Miller, Shahmir Khan
 * and Tyler Mills. The other ten people are stand-ins, and none of the words
 * below were said by anyone. Replace each quote with what the client actually
 * said, and each stand-in with the real person, before this is put in front of
 * anyone.
 *
 * Keyed by project id so store names and URLs stay in lib/projects.js.
 */
const QUOTES = {
  soundskins: {
    person: "Marcus Vogel",
    role: "Founder",
    quote:
      "Our catalogue is a nightmare, kits matched to specific vehicles, and Tayyab made it feel simple. The store loads fast now and customers stopped emailing us to ask which kit fits.",
  },
  elite: {
    person: "Andre Whitfield",
    role: "Ecommerce Manager",
    quote:
      "He rebuilt the theme around how people actually shop for car audio. Amps, subs, accessories, all one flow, and the add to cart rate moved in the first fortnight.",
  },
  gohaus: {
    person: "Dominic Hale",
    role: "Brand Director",
    quote:
      "Clean build, delivered when he said it would be. The collections finally make sense on a phone, which is where nearly all of our traffic comes from.",
  },
  curatedchrome: {
    person: "Nadia Fontaine",
    role: "Creative Director",
    quote:
      "The product pages finally look worth the price of the jewellery. Custom Liquid where we needed it, nothing bloated, and I can edit it myself without breaking anything.",
  },
  chicagofragrance: {
    person: "Syed",
    role: "Owner",
    real: true,
    quote:
      "Search was the whole business for us, people hunting discontinued scents. He got it working properly and tied the apps together so stock matches both stores.",
  },
  kiaura: {
    person: "Amara Lindqvist",
    role: "Founder",
    quote:
      "We run promotions constantly and the old theme fought us every time. Now a sale goes live in minutes without anyone touching code.",
  },
  aug11: {
    person: "Jesse Okafor",
    role: "Founder",
    quote:
      "Drops used to be the day everything broke. Tayyab rebuilt the theme around them and the last three launches went out without a single issue.",
  },
  coastal1776: {
    person: "Bianca Moreau",
    role: "Creative Lead",
    quote:
      "The lookbook is what sells resort wear and he understood that straight away. The site looks like the brand rather than a template with our logo on it.",
  },
  heart4kicks: {
    person: "Milysa Machette Miller",
    role: "Owner",
    real: true,
    quote:
      "We needed a booking flow sitting next to a normal shop and every developer told us it would be messy. Tayyab shipped it in a week and it has not needed touching since.",
  },
  lalascloset: {
    person: "Rosa Delgado",
    role: "Owner",
    quote:
      "Womens, mens and kids under one roof was the hard part. He organised the collections so people find their section immediately instead of scrolling past it.",
  },
  usa250: {
    person: "Grant Whitmore",
    role: "Project Lead",
    quote:
      "A seasonal launch with a hard date and no room to slip. He built it, tested it and had us live ahead of schedule.",
  },
  gmills: {
    person: "Tyler Mills",
    role: "Owner",
    real: true,
    quote:
      "Ours is not a normal checkout, every headstone is a consultation. The custom forms he built capture what we need before we ever pick up the phone.",
  },
  cybex: {
    person: "Shahmir Khan",
    role: "Owner",
    real: true,
    quote:
      "Clean brief, clean delivery, no chasing. The site looks like the brand we wanted to be rather than the one we could afford, and it is quick on a phone.",
  },
  rela: {
    person: "Priya Raman",
    role: "Co-founder",
    quote:
      "He had the store set up and the coming soon page live while we were still finalising the products. Ready to open the moment we are.",
  },
};

const initialsOf = (s) =>
  s
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

/** Every store, in the order they appear in the work list. */
export const REVIEWS = PROJECTS.map((p) => {
  const q = QUOTES[p.id] || {};
  return {
    id: p.id,
    project: p.name,
    url: p.url,
    quote: q.quote,
    person: q.person,
    role: q.role,
    initials: initialsOf(q.person || p.name),
  };
}).filter((r) => r.quote);
