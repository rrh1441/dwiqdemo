# TODO — DarkwebIQ Website Rebuild

## Project Foundations
- [ ] Confirm Next.js 14 App Router + Tailwind baseline exists or scaffold new project structure.
- [ ] Collect current brand tokens (dark palette, accent blue, typography: Inter, JetBrains Mono) for reuse.

## Content Production (Grade-6)
- [ ] Homepage copy (hero line "We warn you when hackers try to sell access to your company.", subhead, pain/fix tiles, Q1 stats with footnote, cumulative claim, partner strip, CTA labels).
- [ ] How It Works copy (4-step flow, supporting CTA text).
- [ ] Executive Outcomes copy (KPI card text, board bullet list, insurer blurb, footnote method note).
- [ ] For Operators copy (summary tab, JSON example, format note).
- [ ] About copy (mission, ethics, insurer alignment).
- [ ] Contact copy (pilot invitation, placeholder CTA, Book a Call link text).
- [ ] Run readability checks to ensure sample paragraphs meet grade-6 target.

## Design & Components
- [ ] Define component specs: hero, three-up Pain→Fix tiles, KPI cards, proof bar, partner strip, stepper, tab/toggle, CTA bar.
- [ ] Document spacing/typography scale consistent with dark theme and accessibility.
- [ ] Plan responsive behavior for each section (mobile, tablet, desktop).

## Development Implementation
- [ ] Build navigation + footer with page links and CTA buttons.
- [ ] Implement Homepage sections with Q1 stat cards and cumulative proof bar.
- [ ] Implement How It Works 4-step component with icon placeholders and CTA.
- [ ] Implement Executive Outcomes KPI layout with footnote handling.
- [ ] Implement For Operators alert widget with copy/JSON toggle and optional `/sample-alert.json` route.
- [ ] Implement About page content blocks.
- [ ] Implement Contact page with pilot CTA button (mailto or placeholder route) plus Book a Call link.
- [ ] Wire CTA buttons across pages (Start a Pilot, See How It Works, See Executive Outcomes).

## Data & Validation
- [ ] Validate Q1 metrics (72, $50MM, 690,000+) and cumulative $500MM claim against live sources.
- [ ] Add footnote "*Based on a cyber insurance claims study." near Q1 block.
- [ ] Confirm AXA XL link is current and opens in new tab.

## Accessibility & QA
- [ ] Ensure color contrast meets WCAG 2.1 AA on dark theme.
- [ ] Add semantic headings/landmarks; include accessible labels for toggles and CTAs.
- [ ] Test keyboard navigation and focus states.
- [ ] Run Lighthouse to verify ≥90 performance/accessibility scores.
- [ ] Cross-browser smoke test (Chrome, Edge, Firefox, Safari).
- [ ] Review final copy + layouts for consistency with PRD requirements.
