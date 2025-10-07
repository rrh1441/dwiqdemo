import { NextResponse } from "next/server";

const sampleAlert = {
  alert_id: "DWIQ-2025-AB12CD",
  detected_at: "2025-10-07T15:24:12Z",
  target: {
    organization: "ACME Corp",
    domains: ["acme.example"]
  },
  vector: {
    access_type: "RDP",
    cves: ["CVE-2023-12345"],
    mitre_attack: ["T1133"]
  },
  summary:
    "Hackers are selling a way to log in to ACME's systems. They used a known bug. If used, they could get full control.",
  risk: "high",
  confidence: "high",
  evidence_summary: "Corroborated sale posts; credential pattern matches; internal hostname format observed.",
  recommended_actions: ["Patch CVE-2023-12345", "Reset admin passwords", "Review RDP logs (14 days)"],
  delivery: {
    formats: ["json", "pdf", "stix"]
  },
  labels: ["initial-access", "rdp", "broker-sale"]
};

export function GET() {
  return NextResponse.json(sampleAlert);
}
