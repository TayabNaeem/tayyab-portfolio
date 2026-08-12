import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Tayyab Naeem — Shopify & AI Automation Developer",
    template: "%s · Tayyab Naeem",
  },
  description:
    "Tayyab Naeem — Shopify Developer, AI Chatbot Developer & AI Automation Engineer building high-converting stores and intelligent automation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <Cursor />
        <Background />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
