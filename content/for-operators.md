# For Operators Copy

Intro: Short alert up top. Details below. JSON if you want it.

Summary Tab Title: Summary
Summary Copy: Hackers are selling a way to log in to ACME. They used a known bug. If used, they could take control. Fix: patch the bug, reset admin passwords, check login logs.

JSON Tab Title: JSON
JSON Example:
```json
{
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
}
```

Formats Note: JSON, PDF, STIX, CSV. Drop-in friendly.

CTA: Start a Pilot
