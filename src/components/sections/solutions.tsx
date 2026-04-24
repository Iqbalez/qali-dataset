"use client";

import Link from "next/link";
import { ChevronRight, FileText, ImagePlus, Mic2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/src/components/animations/fade-in";
import { Section } from "@/src/components/sections/section";

const solutions = [
  {
    icon: Mic2,
    title: "Voice datasets",
    description:
      "High-fidelity audio with speaker-diverse accents, time-aligned transcriptions, and speaker diarisation for ASR, TTS, IVR, and voice automation.",
    useCases: ["Call-center ASR", "IVR", "Voice bots", "Speech search"],
    modalities: ["Audio", "Transcripts", "Speaker labels"],
    coverage: ["Banks", "Telecom", "Customer support", "Public services"],
  },
  {
    icon: ImagePlus,
    title: "Image datasets",
    description:
      "Domain-specific image collection and annotation with bounding boxes, segmentation, and classification for field conditions, shelves, forms, and operational scenes.",
    useCases: ["Crop disease", "Shelf compliance", "ID parsing", "Damage detection"],
    modalities: ["Images", "Bounding boxes", "Segmentation"],
    coverage: ["Agriculture", "Retail", "Insurance", "Documents"],
  },
  {
    icon: FileText,
    title: "Text datasets",
    description:
      "Structured and unstructured text for NLP, search, and classification. Support tickets, legal clauses, product descriptions, and local-language corpora cleaned for model use.",
    useCases: ["Support tickets", "Legal clauses", "Product text", "Search corpora"],
    modalities: ["Text", "Structured fields", "Annotations"],
    coverage: ["Commerce", "Law", "Service ops", "Internal search"],
  },
];

export function Solutions() {
  return (
    <Section
      id="solutions"
      eyebrow="WHAT WE BUILD"
      title="What we build"
      description="Actual datasets built around the exact behavior your model needs to learn, not generic catalog items with generic claims."
      className="bg-[#0E1723]"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution, index) => (
          <FadeIn key={solution.title}>
            <div className="glass-card group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                  <solution.icon className="size-5 text-primary" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#73849A]">
                  0{index + 1}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold text-white">{solution.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#9FB0C4]">{solution.description}</p>

              <div className="mt-6 space-y-5 border-t border-white/8 pt-5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/90">
                    Common asks
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {solution.useCases.map((uc) => (
                      <span
                        key={uc}
                        className="rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-[#D8E1EC]"
                      >
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/90">
                    Deliverables
                  </p>
                  <p className="mt-2 text-sm text-[#D8E1EC]">{solution.modalities.join(", ")}</p>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/90">
                    Usually for
                  </p>
                  <p className="mt-2 text-sm text-[#D8E1EC]">{solution.coverage.join(", ")}</p>
                </div>
              </div>

              <div className="mt-auto pt-6">
                <Button asChild variant="link" className="h-auto p-0 text-primary hover:text-primary/90">
                  <Link href="/#pilot" className="inline-flex items-center gap-1 text-sm font-medium">
                    Start with a pilot
                    <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
