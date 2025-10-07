import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jetbrains",
  display: "swap"
});

export const metadata: Metadata = {
  title: "DarkwebIQ — Confirmed Access Sale Intelligence",
  description:
    "DarkwebIQ warns you when hackers try to sell access to your company. No noise. No delay. Clear alerts you can act on."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jetbrains.variable} min-h-screen bg-background`}>
        <Header />
        <main className="mx-auto max-w-6xl px-6 py-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
