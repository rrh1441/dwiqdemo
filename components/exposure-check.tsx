"use client";

import { useState } from "react";

const vendorSuggestions = [
  "Palo Alto Networks",
  "CrowdStrike",
  "Microsoft Azure",
  "Google Cloud",
  "AWS",
  "Salesforce",
  "Okta",
  "Cloudflare",
  "Cisco",
  "WordPress",
  "Shopify",
  "ServiceNow",
];

export function ExposureCheckForm() {
  const [selectedVendors, setSelectedVendors] = useState<string[]>([]);
  const [customVendor, setCustomVendor] = useState("");

  const toggleVendor = (vendor: string) => {
    setSelectedVendors((prev) =>
      prev.includes(vendor)
        ? prev.filter((v) => v !== vendor)
        : prev.length < 5
        ? [...prev, vendor]
        : prev
    );
  };

  const addCustomVendor = () => {
    if (customVendor.trim() && selectedVendors.length < 5 && !selectedVendors.includes(customVendor.trim())) {
      setSelectedVendors((prev) => [...prev, customVendor.trim()]);
      setCustomVendor("");
    }
  };

  const removeVendor = (vendor: string) => {
    setSelectedVendors((prev) => prev.filter((v) => v !== vendor));
  };

  return (
    <form className="max-w-2xl mx-auto" action="https://formspree.io/f/placeholder" method="POST">
      <div className="space-y-6">
        {/* Name and Email row */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-textPrimary mb-2">
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-textPrimary placeholder:text-textMuted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="Jane Smith"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-textPrimary mb-2">
              Work email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-textPrimary placeholder:text-textMuted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="jane@company.com"
            />
          </div>
        </div>

        {/* Company Name and Website row */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-textPrimary mb-2">
              Company name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-textPrimary placeholder:text-textMuted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="Acme Corp"
            />
          </div>
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-textPrimary mb-2">
              Company website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-textPrimary placeholder:text-textMuted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="https://acme.com"
            />
          </div>
        </div>

        {/* Top Vendors */}
        <div>
          <label className="block text-sm font-medium text-textPrimary mb-2">
            Top vendors to check <span className="text-textMuted font-normal">(select up to 5)</span>
          </label>

          {/* Selected vendors */}
          {selectedVendors.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedVendors.map((vendor) => (
                <span
                  key={vendor}
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 border border-accent/30 px-3 py-1.5 text-sm text-accent"
                >
                  {vendor}
                  <button
                    type="button"
                    onClick={() => removeVendor(vendor)}
                    className="text-accent hover:text-accent-soft"
                    aria-label="Remove vendor"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Hidden input for form submission */}
          <input type="hidden" name="vendors" value={selectedVendors.join(", ")} />

          {/* Vendor suggestions */}
          <div className="flex flex-wrap gap-2 mb-4">
            {vendorSuggestions.map((vendor) => (
              <button
                key={vendor}
                type="button"
                onClick={() => toggleVendor(vendor)}
                disabled={selectedVendors.length >= 5 && !selectedVendors.includes(vendor)}
                className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                  selectedVendors.includes(vendor)
                    ? "border-accent bg-accent/10 text-accent"
                    : selectedVendors.length >= 5
                    ? "border-border text-textMuted cursor-not-allowed opacity-50"
                    : "border-border text-textSecondary hover:border-textPrimary hover:text-textPrimary"
                }`}
              >
                {vendor}
              </button>
            ))}
          </div>

          {/* Custom vendor input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={customVendor}
              onChange={(e) => setCustomVendor(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addCustomVendor();
                }
              }}
              disabled={selectedVendors.length >= 5}
              className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-sm text-textPrimary placeholder:text-textMuted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50"
              placeholder="Add another vendor..."
            />
            <button
              type="button"
              onClick={addCustomVendor}
              disabled={selectedVendors.length >= 5 || !customVendor.trim()}
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-textSecondary transition-colors hover:border-textPrimary hover:text-textPrimary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add
            </button>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-soft"
          >
            Get Your Exposure Snapshot
          </button>
          <p className="mt-3 text-center text-xs text-textMuted">
            We&apos;ll send your personalized risk report within 24 hours.
          </p>
        </div>
      </div>
    </form>
  );
}
