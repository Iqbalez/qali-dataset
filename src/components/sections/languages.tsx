"use client";

import {
  Building2,
  HeartPulse,
  Landmark,
  Rocket,
  Scale,
  ShoppingCart,
  Signal,
  Wheat,
} from "lucide-react";

import { FadeIn } from "@/src/components/animations/fade-in";
import { Section } from "@/src/components/sections/section";
import { cn } from "@/lib/utils";

const industries = [
  { name: "Startups", icon: Rocket, detail: "Ship faster without building a collection pipeline from scratch." },
  { name: "Banks & Fintech", icon: Landmark, detail: "Support, KYC, fraud, dispute handling, and multilingual customer operations." },
  { name: "Telecom", icon: Signal, detail: "IVR, call routing, noisy support audio, and agent-assist workflows." },
  { name: "Agriculture", icon: Wheat, detail: "Field photos, disease labels, seasonal conditions, and mobile-first diagnostics." },
  { name: "Healthcare", icon: HeartPulse, detail: "Forms, triage flows, clinical text, and patient-language nuance." },
  { name: "Law Firms", icon: Scale, detail: "Clauses, contracts, filings, classification, and legal search." },
  { name: "Government", icon: Building2, detail: "Citizen services, multilingual records, and public-sector document handling." },
  { name: "E-commerce", icon: ShoppingCart, detail: "Catalogs, search, reviews, moderation, and support text." },
];

export function Languages() {
  return (
    <Section
      id="languages"
      eyebrow="INDUSTRIES"
      title="We equip these industries."
      description="Different sectors need different ground truth. We already know where the data gaps usually are."
      className={cn("relative overflow-hidden", "map-pattern bg-[#0E1723]")}
    >
      <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry, index) => (
          <FadeIn key={industry.name}>
            <div className="glass-card flex h-full flex-col gap-5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                  <industry.icon className="size-5 text-primary" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#73849A]">
                  0{index + 1}
                </span>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {industry.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#9FB0C4]">{industry.detail}</p>
              </div>

              <div className="mt-auto border-t border-white/8 pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/90">
                  Pilot package ready
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-[#D8E1EC]">
        We have designed a pilot package for each. No blank-page consulting. No guesswork.
      </p>
    </Section>
  );
}
