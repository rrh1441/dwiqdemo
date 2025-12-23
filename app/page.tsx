import Link from "next/link";
import { FadeIn, FadeInStagger, FadeInStaggerItem, Counter } from "@/components/motion";
import { ExposureCheckForm } from "@/components/exposure-check";

const stats = [
  { value: 72, label: "Ransomware attacks intercepted" },
  { value: 50, prefix: "$", suffix: "MM", label: "Losses prevented" },
  { value: 690, suffix: "K+", label: "Organizations protected" },
];

const painFix = [
  {
    label: "Noise",
    problem: "Threat feeds drown teams in junk alerts.",
    fix: "We send alerts only for confirmed access sales.",
  },
  {
    label: "Timeliness",
    problem: "Intel arrives after the break-in starts.",
    fix: "We act before attackers move.",
  },
  {
    label: "ROI",
    problem: "No way to prove the spend.",
    fix: "Each alert ties to money saved.",
  },
];

const steps = [
  {
    num: "01",
    title: "We Find Deals",
    copy: "We monitor private sales of access to companies and their vendors.",
  },
  {
    num: "02",
    title: "We Verify",
    copy: "Humans check each lead. If it's weak, we drop it.",
  },
  {
    num: "03",
    title: "We Intercept",
    copy: "We move fast to stop the sale and block the break-in.",
  },
  {
    num: "04",
    title: "We Alert You",
    copy: "You get a concise alert with what's at risk and how to fix it.",
  },
];

const jsonExample = `{
  "alert_id": "DWIQ-2025-AB12CD",
  "target": "ACME Corp",
  "vector": "RDP / CVE-2023-12345",
  "risk": "high",
  "confidence": "high",
  "actions": [
    "Patch CVE-2023-12345",
    "Reset admin passwords",
    "Review RDP logs (14 days)"
  ]
}`;

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-spacing border-b border-border">
        <div className="content-wide">
          <FadeIn>
            <p className="section-label mb-6">Confirmed Access Sale Intelligence</p>
            <h1 className="font-serif text-display max-w-4xl text-textPrimary">
              We warn you when hackers try to sell access to your company.
            </h1>
            <p className="mt-6 text-body-lg text-textSecondary max-w-2xl">
              No noise. No delay. Clear alerts when you face real risk.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#exposure-check"
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-accent-soft"
              >
                Get Your Snapshot
              </Link>
              <Link
                href="#how-it-works"
                className="rounded-full border border-border px-6 py-3 text-sm font-medium text-textPrimary no-underline transition-colors hover:border-textPrimary"
              >
                See How It Works
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Block */}
      <section className="section-spacing-sm bg-surface">
        <div className="content-wide">
          <FadeIn>
            <p className="section-label mb-2">H1 2025 Results</p>
            <h2 className="font-serif text-headline text-textPrimary">
              What we stopped this year.
            </h2>
          </FadeIn>

          <FadeInStagger className="mt-10 grid gap-8 md:grid-cols-3">
            {stats.map((stat) => (
              <FadeInStaggerItem key={stat.label}>
                <div className="border-l-4 border-accent pl-6">
                  <p className="text-4xl font-bold text-textPrimary">
                    <Counter
                      value={stat.value}
                      prefix={stat.prefix || ""}
                      suffix={stat.suffix || ""}
                    />
                  </p>
                  <p className="mt-1 text-sm text-textSecondary">{stat.label}</p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.4}>
            <p className="mt-8 text-xs text-textMuted">
              *Based on a cyber insurance claims study.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Exposure Check Widget */}
      <section id="exposure-check" className="section-spacing border-b border-border">
        <div className="content-wide">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center mb-10">
              <p className="section-label mb-2">Free Assessment</p>
              <h2 className="font-serif text-headline text-textPrimary">
                Check your exposure.
              </h2>
              <p className="mt-4 text-body-lg text-textSecondary">
                Get a snapshot of your organization's risk profile. We'll check your domains and top vendors for known access sales.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ExposureCheckForm />
          </FadeIn>
        </div>
      </section>

      {/* The Problem We Fix */}
      <section className="section-spacing border-b border-border">
        <div className="content-wide">
          <FadeIn>
            <p className="section-label mb-2">The Problem We Fix</p>
            <h2 className="font-serif text-headline text-textPrimary max-w-2xl">
              Real fixes for your biggest issues.
            </h2>
          </FadeIn>

          <FadeInStagger className="mt-12 grid gap-8 md:grid-cols-3">
            {painFix.map(({ label, problem, fix }) => (
              <FadeInStaggerItem key={label}>
                <div className="h-full rounded-lg border border-border p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {label}
                  </p>
                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-textMuted mb-1">
                        The problem
                      </p>
                      <p className="text-textSecondary">{problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-accent mb-1">
                        Our fix
                      </p>
                      <p className="text-textPrimary font-medium">{fix}</p>
                    </div>
                  </div>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-spacing bg-surface">
        <div className="content-wide">
          <FadeIn>
            <p className="section-label mb-2">How It Works</p>
            <h2 className="font-serif text-headline text-textPrimary max-w-3xl">
              Four steps from darknet chatter to action.
            </h2>
            <p className="mt-4 text-body-lg text-textSecondary max-w-2xl">
              We verify each access sale by hand so the alert you receive already includes the fix.
            </p>
          </FadeIn>

          <FadeInStagger className="mt-12 grid gap-6 md:grid-cols-2">
            {steps.map((step) => (
              <FadeInStaggerItem key={step.num}>
                <div className="flex gap-6 rounded-lg bg-background border border-border p-6">
                  <span className="text-3xl font-bold text-accent/30">{step.num}</span>
                  <div>
                    <h3 className="font-serif text-xl text-textPrimary">{step.title}</h3>
                    <p className="mt-2 text-textSecondary">{step.copy}</p>
                  </div>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Executive Outcomes */}
      <section id="results" className="section-spacing border-b border-border">
        <div className="content-wide">
          <FadeIn>
            <p className="section-label mb-2">Executive Outcomes</p>
            <h2 className="font-serif text-headline text-textPrimary">
              Proof you can take upstairs.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <blockquote className="pull-quote mt-10 max-w-3xl">
              Over $500 million in losses prevented to date. Trusted by enterprises, insurers, and law enforcement.
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-wide text-textMuted">
                  Time to alert
                </p>
                <p className="text-textPrimary">Most alerts go out in hours.</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-wide text-textMuted">
                  Board-ready
                </p>
                <p className="text-textPrimary">Clear metrics, clear fixes, clear ROI.</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-wide text-textMuted">
                  Insurer aligned
                </p>
                <p className="text-textPrimary">One goal: fewer claims and fewer headlines.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-10">
              <Link
                href="https://axaxl.com/press-releases/axa-xl-announces-new-partnership-with-darkweb-iq-to-help-businesses-improve-cyber-security-practices"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-accent hover:text-accent-soft"
              >
                Read the AXA XL Partnership announcement
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* For Operators */}
      <section id="for-operators" className="section-spacing bg-surface">
        <div className="content-wide">
          <FadeIn>
            <p className="section-label mb-2">For Operators</p>
            <h2 className="font-serif text-headline text-textPrimary max-w-2xl">
              Pull our data where you need it.
            </h2>
            <p className="mt-4 text-body-lg text-textSecondary max-w-2xl">
              Short summary for executives. Structured payloads for your SOC tools and insurers.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-textMuted mb-2">
                    Formats on every alert
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["JSON API", "PDF Brief", "STIX 2.1", "CSV Export"].map((format) => (
                      <span
                        key={format}
                        className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-medium text-accent"
                      >
                        {format}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-textMuted mb-2">
                    Built for quick action
                  </p>
                  <ul className="space-y-2 text-textSecondary">
                    <li>CVE + system context</li>
                    <li>Confidence + evidence summary</li>
                    <li>Three remediation steps</li>
                    <li>Delivery to Slack or SIEM</li>
                  </ul>
                </div>

                <div className="pt-4">
                  <Link
                    href="/api/sample-alert"
                    className="text-sm font-medium text-accent hover:text-accent-soft"
                  >
                    Download Sample JSON
                  </Link>
                </div>
              </div>

              <div className="rounded-lg bg-textPrimary p-6 text-sm">
                <p className="text-xs font-medium uppercase tracking-wide text-textMuted mb-4">
                  Sample payload
                </p>
                <pre className="overflow-x-auto text-green-400 font-mono text-xs leading-relaxed">
                  {jsonExample}
                </pre>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-spacing border-b border-border">
        <div className="content-wide">
          <FadeIn>
            <p className="section-label mb-2">About DarkwebIQ</p>
            <h2 className="font-serif text-headline text-textPrimary max-w-2xl">
              We stop break-ins before they become attacks.
            </h2>
            <p className="mt-4 text-body-lg text-textSecondary max-w-2xl">
              We find access sales, warn you fast, and shut them down.
            </p>
          </FadeIn>

          <FadeInStagger className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                label: "Mission",
                copy: "We stand between you and the broker who sells a way in.",
              },
              {
                label: "Trust and law",
                copy: "We work within the law and partner with law enforcement when needed.",
              },
              {
                label: "Insurer aligned",
                copy: "One goal: fewer claims and fewer headlines.",
              },
            ].map((item) => (
              <FadeInStaggerItem key={item.label}>
                <div className="border-l-4 border-accent pl-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-2">
                    {item.label}
                  </p>
                  <p className="text-textSecondary">{item.copy}</p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="section-spacing">
        <div className="content-wide">
          <FadeIn>
            <div className="cta-box max-w-2xl mx-auto">
              <p className="section-label mb-4">Start a Pilot</p>
              <h2 className="font-serif text-title text-textPrimary">
                Want a pilot for your domains?
              </h2>
              <p className="mt-3 text-textSecondary">
                See a real alert for your company. Start a short pilot with our team.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:intake@darkwebiq.com"
                  className="rounded-full bg-textPrimary px-6 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-textSecondary"
                >
                  Start a Pilot
                </a>
                <Link
                  href="https://www.darkwebiq.com/book-a-call"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border px-6 py-3 text-sm font-medium text-textPrimary no-underline transition-colors hover:border-textPrimary"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
