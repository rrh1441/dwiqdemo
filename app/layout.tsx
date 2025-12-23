import type { Metadata } from "next";
import "./globals.css";
import { Lora, Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-lora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DarkwebIQ — Confirmed Access Sale Intelligence",
  description:
    "DarkwebIQ warns you when hackers try to sell access to your company. No noise. No delay. Clear alerts you can act on.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${inter.variable} min-h-screen bg-background font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
