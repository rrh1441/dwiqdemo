import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-dayBeige/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-textSecondary md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-semibold text-textPrimary">DarkwebIQ</p>
          <p className="mt-2 max-w-md text-base leading-relaxed">
            We stop break-ins before they become attacks. Trusted by enterprises, insurers, and
            law enforcement.
          </p>
        </div>
        <div className="flex gap-6 text-base">
          <Link
            href="#about"
            className="transition-colors hover:text-accent"
            scroll={false}
          >
            About
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-accent"
            scroll={false}
          >
            Start a Pilot
          </Link>
          <Link
            href="https://axaxl.com/press-releases/axa-xl-announces-new-partnership-with-darkweb-iq-to-help-businesses-improve-cyber-security-practices?utm_source=chatgpt.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            AXA&nbsp;XL Partnership
          </Link>
        </div>
      </div>
    </footer>
  );
}
