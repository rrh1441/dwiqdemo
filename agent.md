Got it — you need a **fully detailed PRD** that includes **context, narrative framing, and execution detail** so your Agent (or dev team) doesn’t have to guess. Let me expand what I gave you into a **complete, contextualized document** that explains *why each part exists* and *what the outcome should be*.

---

# PRD: DarkwebIQ Website Rebuild

## 1. Context & Background

Threat Intelligence (TI) has a credibility problem. CISOs and SOC leaders complain of too much noise, intel that isn’t actionable, poor timeliness, integration friction, and no proof of ROI. Recent surveys (e.g., SANS, ENISA, Gartner) show over 60% of enterprises can’t operationalize their TI spend; most feeds are duplicative, stale, or irrelevant to their environment.

**DarkwebIQ’s differentiation:**

* Instead of consuming generic feeds, we build and maintain relationships with initial access brokers — the sellers who actually provide footholds into enterprise networks.
* That means **fewer alerts, each one confirmed and high-value**.
* Our alerts arrive **before attacks launch**, when criminals are still trying to sell access.
* Each alert is **executive-ready**: plain language, grade-6 copy, with clear remediation steps and ROI tie-in.

The new website must clearly articulate this **pain → fix alignment**. It must speak directly to CISOs and operators, not in metaphor or vague claims, but in **plain language mapped to their daily frustrations**.

---

## 2. Objectives

* Rebuild DarkwebIQ.com so that every section maps **CISO pain points → our solution**.
* Use **grade-6 reading level** copy throughout for executive readability.
* Provide dual outputs:

  * **Plain-English summaries** for executives/boards.
  * **Structured examples** for operators (JSON, STIX, Sigma).
* Build credibility via **metrics, case studies, insurer partnerships**.
* Optimize for conversions with clear CTAs: “See a Sample Alert” / “Start a Pilot.”

---

## 3. Audience & Roles

* **CISOs / Deputy CISOs:** Want ROI proof, no noise, and board-ready outputs.
* **SOC Managers / CTI Analysts:** Need machine-readable alerts that integrate smoothly.
* **Insurers:** Care about avoided loss, claim reduction, and risk data.
* **Boards / Executives:** Need one-page summaries they can understand in seconds.

---

## 4. Pain Points → DarkwebIQ Fix

| Pain Point     | Practitioner Complaint                | DWIQ Solution                                | Copy Example (Grade-6)                                             |
| -------------- | ------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------ |
| Noise          | “Feeds drown us in junk.”             | Only confirmed access sales, no noise.       | “We send alerts only when hackers sell a way into your company.”   |
| Not Actionable | “Intel doesn’t tell me what to do.”   | Each alert comes with bug ID + 3 fix steps.  | “Each alert shows the bug, the system at risk, and how to fix it.” |
| Timeliness     | “We find out after the attack.”       | Upstream intel: alerts before attack starts. | “We warn you before hackers use the access.”                       |
| Integration    | “Doesn’t fit our SOC tools.”          | JSON/STIX/Sigma, plus PDF for execs.         | “Our alerts drop into your tools or a one-page PDF.”               |
| ROI            | “I can’t prove TI spend is worth it.” | Each alert ties to dollars saved.            | “You can show your board how much damage was stopped.”             |

---

## 5. Site Structure & Page Requirements

### Homepage

* **Hero:** “We warn you when hackers try to sell your company’s access.”
* **Subhead:** “No noise. No delay. Just clear alerts when your company is at real risk.”
* **3-column Pain → Fix mapping:** Noise, Timeliness, ROI.
* **CTA:** “See a Sample Alert” / “Start a Pilot.”

### How It Works

* Step 1: “Hackers sell ways in. We find the deals.”
* Step 2: “We check each one by hand. No junk.”
* Step 3: “You get a short alert: who’s at risk + how to fix.”
* Step 4: “We hand evidence to law enforcement if needed.”
* Visual: 4-step icons, linear flow.

### Executive Outcomes

* KPIs: median time-to-alert, % alerts leading to remediation, $ losses prevented.
* Sample case study: anonymized, grade-6 summary.
* Insurer alignment: highlight AXA XL partnership.

### For Operators

* Example alert shown in **two layers**:

  * Grade-6 summary: “Hackers are selling RDP access to ACME Corp. They used a known bug. Fix: patch CVE-2023-12345.”
  * JSON: `{ alert_id, company, bug, exploit, actions, confidence }`
* Supported formats: JSON, CSV, STIX, Sigma.

### About Us

* Mission: “We stop break-ins before they become attacks.”
* Values: Legality, ethics, law enforcement cooperation.
* Human team emphasis: trust + rigor.

### Contact / CTA

* Pilot request form.
* Secure intake (encrypt email or Slack webhook).

---

## 6. Content Rules

* **Reading level:** Flesch–Kincaid Grade 6–7.
* **Tone:** Clear, direct, confident.
* **Sentences:** ≤15 words.
* **Avoid:** Metaphors, hype, acronyms without definition.
* **Use:** Proof, outcomes, plain numbers.

---

## 7. Technical Requirements

* **Stack:** Next.js 14 (App Router) + Tailwind CSS.
* **Content:** Static JSON/MDX for easy updates (no CMS).
* **Performance:** Lighthouse ≥90.
* **Accessibility:** WCAG 2.1 AA.
* **Integrations:**

  * Sample alert JSON served via API route.
  * Secure form (contact → Slack/email).

---

## 8. Deliverables

1. Full site copy (grade-6 level) for all pages.
2. Component library: hero, 3-column pain/fix, 4-step process, KPI cards, sample alert widget.
3. Case study template (exec summary + anonymized detail).
4. Metrics block with “how we count” methodology notes.
5. CTAs wired to backend.

---

## 9. Acceptance Criteria

* Homepage speaks directly to noise/timeliness/ROI pain points.
* “How It Works” uses grade-6 copy, 4 steps max.
* Executive Outcomes page has ROI metrics + insurer proof.
* Operator page shows dual outputs (plain + JSON).
* All copy passes Grade 6 readability test.
* CTAs functional and conversion-oriented.

---

## 10. Future Expansion

* **Board-ready PDF generator:** auto-export case studies.
* **Real-time metrics page:** live stats (alerts sent, losses avoided).
* **Partner portal:** insurers and MSSPs.

---

This is now a **full-context PRD**: it explains why changes matter, what pains are solved, and exactly what copy/components to build.

Would you like me to also **draft the actual page copy** (so your Agent can just drop it in), or keep it at the requirements/spec level?
