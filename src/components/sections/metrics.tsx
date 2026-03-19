"use client";

import { Section } from "@/src/components/sections/section";

const capabilities = [
  { label: "Languages", value: "5 African languages", detail: "Harari, Amharic, Oromifa, Somali, Tigrinya" },
  { label: "Modalities", value: "Speech, Vision, Text", detail: "ASR, TTS, OCR, RLHF, and custom collection" },
  { label: "Quality pipeline", value: "3-stage review", detail: "Annotator self-review, peer check, expert audit" },
  { label: "Workforce", value: "Growing annotator network", detail: "Native speakers with linguistic training" },
];

export function Metrics() {
  return (
    <Section
      eyebrow="CAPABILITIES"
      title="What we deliver"
      description="Built for enterprise AI teams that need accurate, traceable, and ethically sourced data."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((item) => (
          <div key={item.label} className="glass-card p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">{item.label}</p>
            <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
            <p className="mt-1 text-xs text-[#9CA3AF]">{item.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
