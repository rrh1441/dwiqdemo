"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#executive-outcomes", label: "Executive Outcomes" },
  { href: "#for-operators", label: "For Operators" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-dayBeige/90 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight text-textPrimary">
          DarkwebIQ
        </Link>
        <nav className="hidden items-center gap-6 text-base text-textSecondary md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors hover:text-textPrimary ${
                pathname === "/" && href === "#hero" ? "text-textPrimary" : ""
              }`}
              scroll={false}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-accent text-accent hover:bg-accent/10"
          >
            <Link href="#contact" scroll={false}>
              Book a Call
            </Link>
          </Button>
          <Button asChild className="rounded-full bg-accent px-6 text-dayBeige hover:bg-accentSecondary">
            <Link href="#contact" scroll={false}>
              Start a Pilot
            </Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Button asChild className="rounded-full bg-accent px-6 text-dayBeige hover:bg-accentSecondary">
            <Link href="#contact" scroll={false}>
              Start a Pilot
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
