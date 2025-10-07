import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const stats = [
  { value: "72", label: "Ransomware attack interceptions" },
  { value: "$50MM", label: "Losses prevented*" },
  { value: "690,000+", label: "Organizations protected" }
];

const painFix = [
  {
    label: "Noise",
    title: "Too much noise",
    problem: "Feeds drown us in junk.",
    fix: "We send alerts only for real, confirmed access sales."
  },
  {
    label: "Timeliness",
    title: "Intel lands too late",
    problem: "Intel lands after the break-in.",
    fix: "We act before the break-in starts."
  },
  {
    label: "ROI",
    title: "No proof of ROI",
    problem: "Leaders cannot prove spend.",
    fix: "Each alert ties to money saved."
  }
];

const steps = [
  {
    title: "We Find Deals",
    copy: "We watch private sales of access to companies and vendors."
  },
  {
    title: "We Check the Claim",
    copy: "Humans verify each lead. If it is weak, we drop it."
  },
  {
    title: "We Intercept",
    copy: "We move fast to stop the sale and block the break-in."
  },
  {
    title: "We Alert You",
    copy: "You get a short alert with what is at risk and how to fix it."
  }
];

const kpis = [
  {
    title: "Time to alert",
    copy: "Most alerts go out in hours."
  },
  {
    title: "H1 results",
    copy: "72 attacks stopped. $50MM losses avoided. 690,000+ orgs protected.*"
  },
  {
    title: "Cumulative impact",
    copy: "Over $500MM losses avoided to date."
  }
];

const boardPoints = [
  "Fewer alerts. Higher trust.",
  "Clear steps to fix.",
  "Numbers you can show your board."
];

const summaryCopy =
  "Hackers are selling a way to log in to ACME. They used a known bug. If used, they could take control. Fix: patch the bug, reset admin passwords, check login logs.";

const jsonExample = `{
  "alert_id": "DWIQ-2025-AB12CD",
  "detected_at": "2025-10-07T15:24:12Z",
  "target": {
    "organization": "ACME Corp",
    "domains": ["acme.example"]
  },
  "vector": {
    "access_type": "RDP",
    "cves": ["CVE-2023-12345"],
    "mitre_attack": ["T1133"]
  },
  "summary": "Hackers are selling a way to log in to ACME's systems. They used a known bug. If used, they could get full control.",
  "risk": "high",
  "confidence": "high",
  "evidence_summary": "Corroborated sale posts; credential pattern matches; internal hostname format observed.",
  "recommended_actions": [
    "Patch CVE-2023-12345",
    "Reset admin passwords",
    "Review RDP logs (14 days)"
  ],
  "delivery": {
    "formats": ["json", "pdf", "stix"]
  },
  "labels": ["initial-access", "rdp", "broker-sale"]
}`;

export default function HomePage() {
  return (
    <div className="space-y-24">
      <section
        id="hero"
        className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-start"
      >
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <Badge className="bg-accent text-dayBeige hover:bg-accentSecondary">DarkwebIQ</Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-textPrimary lg:text-5xl">
              We warn you when hackers try to sell access to your company.
            </h1>
            <p className="text-lg text-textSecondary">
              No noise. No delay. Clear alerts when you face real risk.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="h-12 rounded-full px-6">
              <Link href="#contact" scroll={false}>
                Start a Pilot
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-accent text-accent hover:bg-accent/10"
            >
              <Link href="#how-it-works" scroll={false}>
                See How It Works
              </Link>
            </Button>
          </div>
          <div className="space-y-3">
            <p className="text-base font-semibold text-textPrimary">Why DarkwebIQ</p>
            <p className="text-base leading-relaxed text-textSecondary max-w-xl">
              We intercept access sales upstream, confirm them by hand, and send you a short brief
              before attackers move.
            </p>
          </div>
        </div>
        <Card className="bg-white shadow-card">
          <CardHeader className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-accent text-accent">
                H1 2025
              </Badge>
              <span className="text-sm font-medium text-textSecondary">Live proof points</span>
            </div>
            <CardTitle className="text-2xl font-semibold text-textPrimary">
              What we stopped this year.
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border/80 bg-surface p-4 shadow-sm"
                >
                  <p className="text-3xl font-semibold text-textPrimary">{stat.value}</p>
                  <p className="text-base text-textSecondary">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-textSecondary">*Based on a cyber insurance claims study.</p>
          </CardContent>
        </Card>
      </section>

      <section id="pain-fix" className="space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">The problem we fix</p>
          <h2 className="text-3xl font-semibold text-textPrimary">Real fixes for your biggest issues.</h2>
          <p className="text-lg text-textSecondary max-w-2xl">
            We tackle the biggest complaints with confirmed access intel that actually drives action.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {painFix.map(({ label, title, problem, fix }) => (
            <Card key={label} className="h-full bg-white shadow-sm">
              <CardHeader className="space-y-2">
                <Badge variant="outline" className="w-fit border-accent text-accent uppercase">
                  {label}
                </Badge>
                <CardTitle className="text-xl text-textPrimary">{title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-textSecondary">
                    The problem
                  </p>
                  <p className="text-base text-textSecondary">{problem}</p>
                </div>
                <div className="space-y-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                    Our fix
                  </p>
                  <p className="text-base text-textPrimary">{fix}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">How it works</p>
          <h2 className="text-3xl font-semibold text-textPrimary">
            Four steps from darknet chatter to action.
          </h2>
          <p className="text-lg text-textSecondary max-w-3xl">
            We verify each access sale by hand so the alert you receive already includes the fix.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <Card key={step.title} className="bg-white shadow-sm">
              <CardHeader className="space-y-3">
                <Badge variant="outline" className="w-fit border-accent text-accent">
                  Step {index + 1}
                </Badge>
                <CardTitle className="text-xl text-textPrimary">{step.title}</CardTitle>
                <CardDescription className="text-base text-textSecondary">{step.copy}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section id="executive-outcomes" className="space-y-12">
        <div className="space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-textPrimary">
                Proactive Defense in Action: H1 Results
              </h2>
              <p className="mt-2 text-sm text-textSecondary">
                Measured during H1 2025. Numbers reflect confirmed access sale stops.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-accent text-accent hover:bg-accent/10"
            >
              <Link href="#contact" scroll={false}>
                Talk to the Team
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-white shadow-sm">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-3xl font-semibold text-textPrimary">
                    {stat.value}
                  </CardTitle>
                  <CardDescription className="text-base text-textSecondary">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <p className="text-sm text-textSecondary">*Based on a cyber insurance claims study.</p>
        </div>

        <Card className="flex flex-col gap-3 border border-accent/30 bg-white py-10 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Cumulative Impact</p>
          <p className="text-3xl font-semibold text-textPrimary">
            Over $500 million in losses prevented to date.
          </p>
          <p className="text-base text-textSecondary">
            Trusted by enterprises, insurers, and law enforcement.
          </p>
        </Card>

        <Card className="space-y-6 bg-white shadow-sm">
          <CardHeader className="space-y-4 pb-0">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-accent text-accent">
                Executive Outcomes
              </Badge>
            </div>
            <CardTitle className="text-3xl text-textPrimary">Proof you can take upstairs.</CardTitle>
            <CardDescription className="text-lg text-textSecondary">
              Clear metrics, clear fixes, clear ROI.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-0">
            <div className="grid gap-6 md:grid-cols-3">
              {kpis.map((kpi) => (
                <div key={kpi.title} className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-textSecondary">
                    {kpi.title}
                  </p>
                  <p className="text-base text-textPrimary">{kpi.copy}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-textSecondary">*From our cyber insurance claims study.</p>
            <div>
              <h3 className="text-xl font-semibold text-textPrimary">Board-ready talking points</h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-base text-textSecondary">
                {boardPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p className="text-base text-textSecondary">
                Preferred partner to leading cyber insurers.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-fit rounded-full border-accent text-accent hover:bg-accent/10"
              >
                <Link
                  href="https://axaxl.com/press-releases/axa-xl-announces-new-partnership-with-darkweb-iq-to-help-businesses-improve-cyber-security-practices?utm_source=chatgpt.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  See AXA&nbsp;XL Partnership
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="for-operators" className="space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">For operators</p>
          <h2 className="text-3xl font-semibold text-textPrimary">Pull our data where you need it.</h2>
          <p className="text-lg text-textSecondary max-w-3xl">
            Short summary for executives. Structured payloads for your SOC tools and insurers.
          </p>
        </div>
        <Card className="bg-white shadow-sm">
          <CardContent className="grid gap-8 p-6 md:grid-cols-[minmax(0,1fr)_320px] md:items-start">
            <div className="space-y-5">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-textSecondary">
                  What you see first
                </p>
                <p className="text-base text-textSecondary">{summaryCopy}</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-textSecondary">
                  Formats on every alert
                </p>
                <div className="flex flex-wrap gap-2">
                  {["JSON API", "PDF Brief", "STIX 2.1", "CSV Export"].map((format) => (
                    <Badge
                      key={format}
                      variant="outline"
                      className="border-accent text-accent"
                    >
                      {format}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-textSecondary">
                  Built for quick action
                </p>
                <ul className="grid gap-2 text-base text-textSecondary sm:grid-cols-2">
                  <li>• CVE + system context</li>
                  <li>• Confidence + evidence</li>
                  <li>• Three remediation steps</li>
                  <li>• Delivery to Slack or SIEM</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent to-accentSecondary/80 p-6 text-dayBeige shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wide">Sample payload</p>
              <pre className="mt-4 overflow-x-auto text-xs leading-relaxed">
{`{
  "alert_id": "DWIQ-2025-AB12CD",
  "target": "ACME Corp",
  "vector": "RDP / CVE-2023-12345",
  "risk": "high",
  "actions": ["Patch", "Reset admins", "Review logs"]
}`}              </pre>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3 border-t border-border/60 px-6 py-6 text-base text-textSecondary md:flex-row md:items-center md:justify-between">
            <p>Need to test fit? Grab the JSON sample or ask for a live feed.</p>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-accent text-accent hover:bg-accent/10"
            >
              <Link href="/api/sample-alert">Download Sample JSON</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section id="about" className="space-y-8">
        <header className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-wide text-accent">About DarkwebIQ</p>
          <h2 className="text-3xl font-semibold text-textPrimary">
            We stop break-ins before they become attacks.
          </h2>
          <p className="text-lg text-textSecondary">
            We find access sales, warn you fast, and shut them down.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-white shadow-sm">
            <CardHeader className="space-y-3">
              <Badge variant="outline" className="w-fit border-accent text-accent">
                Mission
              </Badge>
              <CardDescription className="text-textSecondary">
                We stand between you and the broker who sells a way in.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-white shadow-sm">
            <CardHeader className="space-y-3">
              <Badge variant="outline" className="w-fit border-accent text-accent">
                Trust and law
              </Badge>
              <CardDescription className="text-textSecondary">
                We work within the law and partner with law enforcement when needed.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-white shadow-sm">
            <CardHeader className="space-y-3">
              <Badge variant="outline" className="w-fit border-accent text-accent">
                Insurer aligned
              </Badge>
              <CardDescription className="text-textSecondary">
                One goal: fewer claims and fewer headlines.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <Button
          asChild
          variant="outline"
          className="w-fit rounded-full border-accent text-accent hover:bg-accent/10"
        >
          <Link
            href="https://axaxl.com/press-releases/axa-xl-announces-new-partnership-with-darkweb-iq-to-help-businesses-improve-cyber-security-practices?utm_source=chatgpt.com"
            target="_blank"
            rel="noreferrer"
          >
            Read the AXA&nbsp;XL Partnership
          </Link>
        </Button>
      </section>

      <section id="contact" className="space-y-8">
        <header className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-wide text-accent">Start a Pilot</p>
          <h2 className="text-3xl font-semibold text-textPrimary">Want a pilot for your domains?</h2>
          <p className="text-lg text-textSecondary">
            See a real alert for your company. Start a short pilot with our team.
          </p>
        </header>
        <Card className="space-y-6 bg-white shadow-sm">
          <CardHeader className="space-y-3">
            <Badge variant="outline" className="w-fit border-accent text-accent">
              Ready to begin?
            </Badge>
            <CardDescription className="text-textSecondary">
              Tap Start a Pilot to email the team. Prefer a call? Use the booking link.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-full px-6">
              <a href="mailto:intake@darkwebiq.com">Start a Pilot</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-accent text-accent hover:bg-accent/10"
            >
              <Link href="https://www.darkwebiq.com/book-a-call" target="_blank" rel="noreferrer">
                Book a Call
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}
