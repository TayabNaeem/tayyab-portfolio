"use client";

import { Bot, Workflow, LayoutTemplate } from "lucide-react";
import { ShopifyGlyph, WordPressMark, MetaMark } from "./BrandLogos";

const MAP = {
  // Monochrome Shopify bag, picks up the surrounding colour
  shopify: { C: ShopifyGlyph, brand: true },
  wordpress: { C: WordPressMark },
  bot: { C: Bot },
  workflow: { C: Workflow },
  meta: { C: MetaMark },
  landing: { C: LayoutTemplate },
};

/** Renders a service's icon from its string key. */
export default function ServiceIcon({ icon, className = "h-5 w-5" }) {
  const entry = MAP[icon];
  if (!entry) return null;
  const { C, brand } = entry;
  return <C className={className} {...(brand ? {} : { strokeWidth: 1.7 })} />;
}
