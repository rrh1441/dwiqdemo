"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="content-wide flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-serif text-xl text-textPrimary no-underline hover:text-textPrimary"
        >
          DarkwebIQ
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="#exposure-check"
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white no-underline transition-colors hover:bg-accent-soft"
          >
            Get Your Snapshot
          </Link>
          <Link
            href="https://www.darkwebiq.com/book-a-call"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white no-underline transition-colors hover:bg-accent-soft"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
