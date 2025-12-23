import Link from "next/link";

const reports = [
  { title: "2025 Ransomware Interception Report", href: "#" },
  { title: "Initial Access Broker Landscape", href: "#" },
  { title: "How We Stopped 72 Attacks in H1", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="content-wide py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl text-textPrimary">DarkwebIQ</p>
            <p className="mt-3 text-sm text-textSecondary leading-relaxed max-w-xs">
              We stop break-ins before they become attacks. Trusted by enterprises, insurers, and
              law enforcement.
            </p>
          </div>

          {/* Reports */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-textMuted mb-4">
              Reports
            </p>
            <ul className="space-y-3">
              {reports.map((report) => (
                <li key={report.title}>
                  <Link
                    href={report.href}
                    className="text-sm text-textSecondary no-underline transition-colors hover:text-textPrimary"
                  >
                    {report.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-textMuted mb-4">
              Company
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-sm text-textSecondary no-underline transition-colors hover:text-textPrimary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#exposure-check"
                  className="text-sm text-textSecondary no-underline transition-colors hover:text-textPrimary"
                >
                  Get Your Snapshot
                </Link>
              </li>
              <li>
                <Link
                  href="https://axaxl.com/press-releases/axa-xl-announces-new-partnership-with-darkweb-iq-to-help-businesses-improve-cyber-security-practices"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-textSecondary no-underline transition-colors hover:text-textPrimary"
                >
                  AXA XL Partnership
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-textMuted">
            &copy; {new Date().getFullYear()} DarkwebIQ. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-textMuted no-underline transition-colors hover:text-textSecondary"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-textMuted no-underline transition-colors hover:text-textSecondary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
