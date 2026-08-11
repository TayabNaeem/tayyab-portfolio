"use client";

import { Bot, Workflow, LayoutTemplate, ShoppingBag } from "lucide-react";
import { ShopifyMark, WordPressMark, MetaMark } from "./BrandLogos";

const MAP = {
  shopify: { C: ShopifyMark, brand: true },
  // Line-art alternative for places that sit alongside lucide icons
  store: { C: ShoppingBag },
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
