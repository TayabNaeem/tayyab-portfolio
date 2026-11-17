import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import "./redesign.css";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ChatWidget from "@/components/ChatWidget";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Tayyab Naeem — Digital marketing expert · Shopify, AI & automation",
    template: "%s · Tayyab Naeem",
  },
  description:
    "Tayyab Naeem builds high-converting Shopify stores and custom websites, then adds AI chatbots, voice agents and automations so your business keeps selling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={bricolage.variable}>
      <head>
        {/* Geist isn't in next/font's Google list for this Next version, so it loads from Google Fonts directly. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <ChatWidget />
      </body>
    </html>
  );
}
