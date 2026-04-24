"use client";

import { Section } from "@/src/components/sections/section";

const capabilities = [
  "Audio collection and transcription",
  "Image collection and annotation (bounding boxes, segmentation, classification)",
  "Text corpus normalization and deduplication",
  "Speaker diarisation and language identification",
  "Custom data pipelines for enterprise compliance",
];

export function Metrics() {
  return (
    <Section
      eyebrow="CAPABILITIES"
      title="What we handle so you don't have to."
      description="Collection, annotation, cleanup, and compliance work live with us, not your product team."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {capabilities.map((item, index) => (
          <div key={item} className="glass-card p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">
              0{index + 1}
            </p>
            <p className="mt-3 text-base font-semibold text-white">{item}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
